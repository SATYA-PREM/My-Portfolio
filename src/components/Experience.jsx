import React, { useState } from 'react';
import { experienceData } from '../data/portfolioData';

function ExperienceCard({ item }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  const isLong = item.description.length > 120 || item.highlights.length > 0;
  const shortDesc =
    isLong && !expanded
      ? item.description.slice(0, 120).trim() + '...'
      : item.description;

  return (
    <div
      className={`exp-card ${expanded ? 'expanded' : 'collapsed'}`}
      onClick={toggleExpand}
      style={{ cursor: 'pointer' }}
    >
      <div className="exp-header">
        <div>
          <h3 className="exp-role">{item.role}</h3>
          <span className="exp-company">{item.company}</span>
        </div>
        <span className="exp-period">{item.period}</span>
      </div>

      <p className="exp-desc">{shortDesc}</p>

      {expanded && item.highlights && item.highlights.length > 0 && (
        <ul className="exp-highlights animate-fade-in">
          {item.highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
      )}

      <div className="exp-tech">
        {item.tech.map((techItem, i) => (
          <span key={i} className="skill-pill">
            {techItem}
          </span>
        ))}
      </div>

      {isLong && (
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
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-tag">Career</div>
      <h2 className="section-title">Work &amp; Internship Experience</h2>

      <div className="exp-timeline">
        {experienceData.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
