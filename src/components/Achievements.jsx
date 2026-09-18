import React from 'react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="section-tag">Milestones</div>
      <h2 className="section-title">Achievements &amp; Certifications</h2>

      <div className="achievements-grid">
        {achievementsData.map((item, index) => (
          <div key={index} className="achieve-card">
            <h3 className="achieve-title">{item.title}</h3>
            <div className="achieve-org">
              {item.organization} • {item.year}
            </div>
            <p className="achieve-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

