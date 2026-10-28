import React from 'react';

export default function Navbar() {
  const scrollToExplore = () => {
    const el = document.getElementById('works-gallery-start');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="verhost-top-nav">
      <div className="nav-container">
        {/* Left: Brand Wordmark */}
        <div className="nav-brand-group">
          <a href="/" className="brand-wordmark">
            VERHOST
          </a>
          <span className="brand-subtext">DIGITAL WORKS</span>
        </div>

        {/* Center / Navigation Links */}
        <nav className="nav-menu-links" aria-label="Main Navigation">
          <a href="#works-gallery-start" className="nav-link active">Work</a>
          <a href="#about-verhost" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToExplore(); }}>About</a>
          <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToExplore(); }}>Contact</a>
        </nav>

        {/* Right: Start a Project CTA */}
        <div className="nav-action-group">
          <a 
            href="#contact" 
            className="start-project-action"
            onClick={(e) => {
              e.preventDefault();
              alert('VERHOST Studio Client Inquiry: Connecting you with our design leads.');
            }}
          >
            <span>Start a Project</span>
            <span className="action-arrow">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
