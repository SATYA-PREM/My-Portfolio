import React from 'react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-tag">Career</div>
      <h2 className="section-title">Work &amp; Internship Experience</h2>

      <div className="exp-timeline">
        {experienceData.map((item, index) => (
          <div key={index} className="exp-card">
            <div className="exp-header">
              <div>
                <h3 className="exp-role">{item.role}</h3>
                <span className="exp-company">{item.company}</span>
              </div>
              <span className="exp-period">{item.period}</span>
            </div>

            <p className="exp-desc">{item.description}</p>

            <ul className="exp-highlights">
              {item.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>

            <div className="exp-tech">
              {item.tech.map((techItem, i) => (
                <span key={i} className="skill-pill">
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

