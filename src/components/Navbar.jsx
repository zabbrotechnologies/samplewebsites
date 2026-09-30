import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenAbout, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToWorks = (e) => {
    e.preventDefault();
    const el = document.getElementById('works-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="nav-brand" onClick={scrollToTop} aria-label="VERHOST Home">
        <span className="brand-dot"></span>
        <span className="brand-title">VERHOST</span>
      </a>

      <nav className="nav-menu" aria-label="Main Navigation">
        <a href="#works" className="nav-link active" onClick={scrollToWorks}>
          Work
        </a>
        <button type="button" className="nav-link" onClick={onOpenAbout}>
          About
        </button>
        <button type="button" className="nav-link" onClick={onOpenContact}>
          Contact
        </button>
      </nav>

      <button
        type="button"
        className="nav-cta"
        onClick={onOpenContact}
        aria-label="Start a Project with VERHOST"
      >
        <span>Start a project</span>
        <span className="arrow">↗</span>
      </button>
    </header>
  );
}
