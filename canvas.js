// Ensure THREE is loaded before this file

// ═══════════════════════════════════════════════
// GLOBAL STATE
// ═══════════════════════════════════════════════
const mouse = { x: 0, y: 0, nx: 0, ny: 0 };
window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  mouse.nx = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.ny = -(e.clientY / window.innerHeight) * 2 + 1;
});

// ═══════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════
function makeRenderer(canvasId, bgColor = "#000") {
  const canvas = document.getElementById(canvasId);
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false
  });

  const W = canvas.clientWidth;
  const H = canvas.clientHeight;

  renderer.setSize(W, H, false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(bgColor);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  window.addEventListener("resize", () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    renderer.setSize(w, h, false);
  });

  return { renderer, W, H };
}

function makeCamera(W, H, fov = 45, pos = [0, 20, 50]) {
  const cam = new THREE.PerspectiveCamera(fov, W / H, 0.1, 1000);
  cam.position.set(...pos);

  window.addEventListener("resize", () => {
    const canvas = cam.renderer?.domElement;
    if (!canvas) return;
    cam.aspect = canvas.clientWidth / canvas.clientHeight;
    cam.updateProjectionMatrix();
  });

  return cam;
}

function addLights(scene, key = { pos: [20, 40, 20], int: 2 }, ambient = 0.4) {
  const keyLight = new THREE.DirectionalLight(0xffffff, key.int);
  keyLight.position.set(...key.pos);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(2048, 2048);
  scene.add(keyLight);

  const ambientLight = new THREE.AmbientLight(0xffffff, ambient);
  scene.add(ambientLight);

  return keyLight;
}

// ═══════════════════════════════════════════════
// S3 — HEXAGONAL PRISMS
// ═══════════════════════════════════════════════
(function buildS3() {
  const { renderer } = makeRenderer("c3", "#1a0a1a");

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1a0a1a);
  scene.fog = new THREE.FogExp2(0x1a0a1a, 0.025);

  const canvas = renderer.domElement;
  const cam = new THREE.PerspectiveCamera(
    42,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  );
  cam.position.set(0, 30, 55);

  window.addEventListener("resize", () => {
    cam.aspect = canvas.clientWidth / canvas.clientHeight;
    cam.updateProjectionMatrix();
  });

  const keyLight = addLights(scene, { pos: [25, 60, 30], int: 2.5 }, 0.3);

  const accentLight = new THREE.DirectionalLight(0xffbbaa, 0.4);
  accentLight.position.set(-30, 20, 0);
  scene.add(accentLight);

  // Hexagon Shape Generator
  function hexPts(r) {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 180) * (60 * i - 30);
      pts.push(new THREE.Vector2(r * Math.cos(a), r * Math.sin(a)));
    }
    return pts;
  }

  const hexes = [];
  const ROWS = 7, COLS = 9, R = 5.8;
  const H2 = R * Math.sqrt(3);
  const GAP = 0.25;

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {

      const baseH = 1.5 + Math.random() * 5;
      const roseV = 0.72 + Math.random() * 0.18;

      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(roseV * 0.9, roseV * 0.7, roseV * 0.68),
        roughness: 0.35,
        metalness: 0.25
      });

      const shape = new THREE.Shape(hexPts(R - GAP));
      const geo = new THREE.ExtrudeGeometry(shape, {
        depth: baseH,
        bevelEnabled: true,
        bevelSize: 0.2,
        bevelThickness: 0.15,
        bevelSegments: 3
      });

      geo.rotateX(-Math.PI / 2);

      const mesh = new THREE.Mesh(geo, mat);

      const x = (c - (COLS - 1) / 2) * (H2 + 0.1) + (r % 2) * (H2 / 2);
      const z = (r - (ROWS - 1) / 2) * (R * 1.5);

      mesh.position.set(x, -baseH / 2, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      mesh.userData = { baseH, baseX: x, baseZ: z, curH: baseH, col: c, row: r };

      scene.add(mesh);
      hexes.push(mesh);
    }
  }

  const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const ray = new THREE.Raycaster();
  const mw = new THREE.Vector3();

  let t = 0;

  function animate() {
    requestAnimationFrame(animate);
    t += 0.01;

    cam.position.x += (mouse.nx * 8 - cam.position.x) * 0.03;
    cam.position.z = 55 + mouse.ny * 5;
    cam.lookAt(0, 0, 0);

    keyLight.position.x = 25 + mouse.nx * 20;

    ray.setFromCamera({ x: mouse.nx, y: mouse.ny }, cam);
    ray.ray.intersectPlane(groundPlane, mw);

    hexes.forEach(h => {
      const { baseH, baseX, baseZ, col, row } = h.userData;

      const dx = mw.x - baseX;
      const dz = mw.z - baseZ;
      const dist = Math.sqrt(dx * dx + dz * dz);

      const wave = Math.sin(t + col * 0.4 + row * 0.35) * 0.4;

      let extra = wave;
      if (dist < 22) {
        const tv = 1 - dist / 22;
        extra += 9 * (tv * tv * (3 - 2 * tv));
      }

      const target = baseH + extra;
      h.userData.curH += (target - h.userData.curH) * 0.08;

      h.scale.y = h.userData.curH / baseH;
      h.position.y = -h.userData.curH / 2;
    });

    renderer.render(scene, cam);
  }

  animate();
})();