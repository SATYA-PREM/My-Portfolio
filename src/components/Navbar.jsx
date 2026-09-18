import React from 'react';
import { personalData, navLinks } from '../data/portfolioData';

export default function Navbar({
  scrolled,
  themePreference,
  effectiveTheme,
  themeWindowOpen,
  toggleThemeWindow,
  closeThemeWindow,
  onSelectTheme,
  mobileNavOpen,
  toggleMobileNav
}) {
  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">
        SP.dev
      </a>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
        <li className="nav-socials">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href={personalData.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn"
          >
            Resume
          </a>
        </li>
      </ul>

      <div className="nav-controls">
        {/* Theme Toggle Window Dropdown */}
        <div className="theme-menu-container" id="themeMenuContainer">
          <button
            type="button"
            className={`theme-toggle-btn ${themeWindowOpen ? 'active' : ''}`}
            id="themeToggleBtn"
            onClick={toggleThemeWindow}
            aria-label="Theme options"
            aria-haspopup="true"
            aria-expanded={themeWindowOpen}
            title="Switch Theme"
          >
            <span className="theme-icon-slot">
              <svg className="theme-icon icon-moon" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              <svg className="theme-icon icon-sun" viewBox="0 0 24 24">
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
            </span>
            <span className="theme-btn-arrow">
              <svg viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </button>

          {/* Theme Dropdown Window */}
          <div
            className={`theme-window ${themeWindowOpen ? 'open' : ''}`}
            id="themeWindow"
            role="menu"
            aria-label="Appearance selection"
          >
            <div className="theme-window-header">
              <span className="theme-window-title">Appearance</span>
              <span className="theme-window-indicator" id="themeStatusText">
                {themePreference === 'system'
                  ? `Auto (${effectiveTheme})`
                  : themePreference === 'light'
                  ? 'Light'
                  : 'Dark'}
              </span>
            </div>
            <div className="theme-window-options">
              <button
                type="button"
                className={`theme-option ${themePreference === 'dark' ? 'active' : ''}`}
                onClick={() => onSelectTheme('dark')}
                role="menuitem"
              >
                <span className="theme-option-left">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                  <span>Dark</span>
                </span>
                <span className="theme-check">✓</span>
              </button>

              <button
                type="button"
                className={`theme-option ${themePreference === 'light' ? 'active' : ''}`}
                onClick={() => onSelectTheme('light')}
                role="menuitem"
              >
                <span className="theme-option-left">
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
                </span>
                <span className="theme-check">✓</span>
              </button>

              <button
                type="button"
                className={`theme-option ${themePreference === 'system' ? 'active' : ''}`}
                onClick={() => onSelectTheme('system')}
                role="menuitem"
              >
                <span className="theme-option-left">
                  <svg viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  <span>System</span>
                </span>
                <span className="theme-check">✓</span>
              </button>
            </div>
          </div>
        </div>

        <button
          className={`hamburger ${mobileNavOpen ? 'open' : ''}`}
          id="hamburger"
          onClick={toggleMobileNav}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

