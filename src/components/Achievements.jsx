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
            <div className="achieve-stat-header">
              <span className="achieve-stat">{item.stat}</span>
              <span className="achieve-title">{item.title}</span>
            </div>
            <div className="achieve-sub">{item.subtitle}</div>
            <p className="achieve-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

