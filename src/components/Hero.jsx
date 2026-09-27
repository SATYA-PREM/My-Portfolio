import React from 'react';
import { personalData, heroStats } from '../data/portfolioData';

export default function Hero({ onEmailClick }) {
  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-badge">{personalData.title}</div>
          <h1 className="hero-name">
            Satya <span className="highlight">Prem</span>
          </h1>
          <div className="hero-headline">
            Building scalable software<br />
            with <span className="accent-text">backend</span>, full-stack and AI systems.
          </div>
          <p className="hero-tagline">{personalData.tagline}</p>

          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github-outline"
            >
              <svg
                width="14"
                height="14"
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
              GitHub
            </a>
          </div>

          <div className="contact-row">
            <a
              href={`mailto:${personalData.email}?subject=Hello%20Satya,`}
              onClick={onEmailClick}
              className="contact-chip email-trigger"
              title="Send email to Satya"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>{personalData.email}</span>
            </a>

            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-chip"
              title="LinkedIn Profile"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <span className="contact-chip" title="Location">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{personalData.location}</span>
            </span>
          </div>
        </div>

        <div className="hero-right">
          {/* Tech Architecture Card matching reference design */}
          <div className="hero-visual">
            <div className="visual-top">
              <span className="visual-kicker">SELECTED SYSTEMS / 2026</span>
              <span className="visual-live">
                <span className="live-dot" /> LIVE BUILD
              </span>
            </div>

            <div className="network-stage">
              {/* Radar Rings & Connections */}
              <svg className="network-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Background Radar Rings */}
                <circle cx="68" cy="50" r="18" className="radar-ring r1" />
                <circle cx="68" cy="50" r="32" className="radar-ring r2" />
                <circle cx="68" cy="50" r="46" className="radar-ring r3" />

                {/* Connecting Laser Lines */}
                <line x1="42" y1="50" x2="23" y2="44" className="network-line" />
                <line x1="42" y1="50" x2="68" y2="28" className="network-line" />
                <line x1="42" y1="50" x2="68" y2="72" className="network-line" />
              </svg>

              {/* Satellite Node 1: Left (AI INSIGHT) */}
              <div className="sat-node sat-left">
                <span className="node-title">AI</span>
                <span className="node-sub">INSIGHT</span>
              </div>

              {/* Center Core Node: SP BUILDER with Orbiting Particle */}
              <div className="core-node-wrapper">
                <div className="orbit-ring">
                  <span className="orbit-particle" />
                </div>
                <div className="core-node-inner">
                  <span className="core-sp">SP</span>
                  <span className="core-role">BUILDER</span>
                </div>
              </div>

              {/* Satellite Node 2: Top Right (API SERVICES) */}
              <div className="sat-node sat-top-right">
                <span className="node-title">API</span>
                <span className="node-sub">SERVICES</span>
              </div>

              {/* Satellite Node 3: Bottom Right (DB DATA) */}
              <div className="sat-node sat-bottom-right">
                <span className="node-title">DB</span>
                <span className="node-sub">DATA</span>
              </div>
            </div>

            <div className="visual-bottom">
              <span className="bot-left">Web · Data · AI</span>
              <span className="bot-right">Jabalpur / India</span>
            </div>
          </div>

          <div className="hero-stats">
            {heroStats.map((stat, i) => (
              <div key={i} className="hero-card">
                <div className="card-label">{stat.label}</div>
                <div className="card-value">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
