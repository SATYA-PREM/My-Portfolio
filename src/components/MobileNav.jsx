import React from 'react';
import { personalData, navLinks } from '../data/portfolioData';

export default function MobileNav({
  isOpen,
  closeMobileNav,
  themePreference,
  onSelectTheme,
  onEmailClick
}) {
  return (
    <div className={`mobile-nav ${isOpen ? 'open' : ''}`} id="mobileNav">
      {navLinks.map((link) => (
        <a key={link.name} href={link.href} onClick={closeMobileNav}>
          {link.name}
        </a>
      ))}

      <div className="mobile-theme-row">
        <span className="mobile-theme-label">Appearance</span>
        <div className="mobile-theme-buttons">
          <button
            type="button"
            className={`mobile-theme-btn ${themePreference === 'dark' ? 'active' : ''}`}
            onClick={() => onSelectTheme('dark')}
            aria-label="Dark theme"
          >
            <svg viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <span>Dark</span>
          </button>
          <button
            type="button"
            className={`mobile-theme-btn ${themePreference === 'light' ? 'active' : ''}`}
            onClick={() => onSelectTheme('light')}
            aria-label="Light theme"
          >
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <span>Light</span>
          </button>
          <button
            type="button"
            className={`mobile-theme-btn ${themePreference === 'system' ? 'active' : ''}`}
            onClick={() => onSelectTheme('system')}
            aria-label="System theme"
          >
            <svg viewBox="0 0 24 24">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span>Auto</span>
          </button>
        </div>
      </div>

      <div className="mobile-socials">
        <a
          href={personalData.github}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          GitHub
        </a>
        <a
          href={personalData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${personalData.email}?subject=Hello%20Satya,`}
          onClick={onEmailClick}
          className="email-trigger"
          title="Email"
        >
          Email
        </a>
      </div>
    </div>
  );
}

