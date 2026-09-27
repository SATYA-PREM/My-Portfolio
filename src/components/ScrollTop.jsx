import React, { useEffect, useState } from 'react';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="#hero"
      className={`scroll-top ${visible ? 'visible' : ''}`}
      id="scrollTop"
      title="Back to top"
      aria-label="Back to top"
    >
      <svg viewBox="0 0 24 24">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </a>
  );
}

