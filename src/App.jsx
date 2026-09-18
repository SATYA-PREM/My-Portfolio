import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import CursorGlow from './components/CursorGlow';
import ScrollTop from './components/ScrollTop';
import { personalData } from './data/portfolioData';

const THEME_STORAGE_KEY = 'sp_portfolio_theme';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [themeWindowOpen, setThemeWindowOpen] = useState(false);

  // Theme Management
  const [themePreference, setThemePreference] = useState(() => {
    try {
      return localStorage.getItem(THEME_STORAGE_KEY) || 'dark';
    } catch (e) {
      return 'dark';
    }
  });

  const [systemTheme, setSystemTheme] = useState(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  });

  const effectiveTheme = themePreference === 'system' ? systemTheme : themePreference;

  // Sync OS System Theme Changes
  useEffect(() => {
    if (!window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');

    const handleChange = (e) => {
      setSystemTheme(e.matches ? 'light' : 'dark');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Apply Theme to DOM
  const handleSelectTheme = (pref) => {
    setThemePreference(pref);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, pref);
    } catch (e) {}

    document.documentElement.classList.add('theme-transitioning');
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 300);

    setThemeWindowOpen(false);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', effectiveTheme);
    document.documentElement.setAttribute('data-theme-preference', themePreference);
  }, [effectiveTheme, themePreference]);

  // Navbar Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close dropdown / drawer
  useEffect(() => {
    const handleClickOutside = (e) => {
      const themeContainer = document.getElementById('themeMenuContainer');
      if (themeWindowOpen && themeContainer && !themeContainer.contains(e.target)) {
        setThemeWindowOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setThemeWindowOpen(false);
        setMobileNavOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [themeWindowOpen]);

  // Handle email click (Gmail web compose on desktop, native mail app on mobile)
  const handleEmailClick = (e) => {
    if (e) e.preventDefault();
    const recipient = personalData.email;
    const subject = encodeURIComponent('Hello Satya,');
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(
        navigator.userAgent
      ) || (window.innerWidth <= 768 && ('ontouchstart' in window || navigator.maxTouchPoints > 0));

    if (isMobile) {
      window.location.href = `mailto:${recipient}?subject=${subject}`;
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}`,
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  const toggleThemeWindow = (e) => {
    if (e) e.stopPropagation();
    setThemeWindowOpen((prev) => !prev);
  };

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
  };

  return (
    <div className="portfolio-app">
      <CursorGlow />

      <MobileNav
        isOpen={mobileNavOpen}
        closeMobileNav={() => setMobileNavOpen(false)}
        themePreference={themePreference}
        onSelectTheme={handleSelectTheme}
        onEmailClick={handleEmailClick}
      />

      <Navbar
        scrolled={scrolled}
        themePreference={themePreference}
        effectiveTheme={effectiveTheme}
        themeWindowOpen={themeWindowOpen}
        toggleThemeWindow={toggleThemeWindow}
        closeThemeWindow={() => setThemeWindowOpen(false)}
        onSelectTheme={handleSelectTheme}
        mobileNavOpen={mobileNavOpen}
        toggleMobileNav={toggleMobileNav}
      />

      <main>
        <Hero onEmailClick={handleEmailClick} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact onEmailClick={handleEmailClick} />
      </main>

      <Footer />

      <ScrollTop />
      <ChatBot />
    </div>
  );
}

