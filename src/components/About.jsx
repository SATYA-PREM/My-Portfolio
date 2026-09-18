import React from 'react';
import { aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about">
      <div className="section-tag">About Me</div>
      <h2 className="section-title">Background &amp; Expertise</h2>

      <div className="about-grid">
        <div className="about-text">
          {aboutData.bio.map((paragraph, index) => {
            // Render bold text formatting
            const parts = paragraph.split(/(\*\*.*?\*\*)/g);
            return (
              <p key={index}>
                {parts.map((part, i) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i}>{part.slice(2, -2)}</strong>;
                  }
                  return part;
                })}
              </p>
            );
          })}
        </div>

        <div className="about-profile-card">
          {aboutData.profileItems.map((item, index) => (
            <div key={index} className="about-profile-item">
              <span className="label">{item.label}</span>
              <span className="value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

