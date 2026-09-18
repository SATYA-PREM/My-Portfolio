import React from 'react';
import { skillsCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-tag">Tech Stack</div>
      <h2 className="section-title">Skills &amp; Technologies</h2>

      <div className="skills-grid">
        {skillsCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-title">
              <span>{category.title}</span>
            </h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

