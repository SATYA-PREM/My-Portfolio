import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  const isLongDesc = project.description.length > 130;
  const displayDesc =
    isLongDesc && !expanded
      ? project.description.slice(0, 130).trim() + '...'
      : project.description;

  return (
    <div
      className={`project-card ${expanded ? 'expanded' : 'collapsed'}`}
      onClick={toggleExpand}
      style={{ cursor: 'pointer' }}
    >
      <h3 className="project-name">{project.title}</h3>
      <div className="project-sub">{project.subtitle}</div>
      <p className="project-desc">{displayDesc}</p>

      <div className="project-stack">
        {project.tags.map((tag, i) => (
          <span key={i} className="skill-pill">
            {tag}
          </span>
        ))}
      </div>

      <div className="card-actions-row">
        <div className="proj-links" onClick={(e) => e.stopPropagation()}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link live"
              title="Live Demo"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live App
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link github-btn"
              title="GitHub Repository"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              Source Code
            </a>
          )}
        </div>

        {isLongDesc && (
          <button
            type="button"
            className="expand-toggle-btn"
            onClick={(e) => {
              e.stopPropagation();
              toggleExpand();
            }}
          >
            <span>{expanded ? 'Show Less' : 'Show More'}</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.25s ease'
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-tag">Featured Work</div>
      <h2 className="section-title">Projects &amp; Products</h2>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
