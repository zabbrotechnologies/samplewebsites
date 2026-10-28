import React from 'react';

export default function Navbar() {
  const scrollToExplore = () => {
    const el = document.getElementById('works-gallery-start');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="verhost-nav-header">
      <div className="nav-inner-bounds">
        {/* Left: Brand Wordmark */}
        <div className="nav-brand-part">
          <a href="/" className="verhost-logo-text">VERHOST</a>
        </div>

        {/* Center: Understated links */}
        <nav className="nav-editorial-links">
          <a href="#works-gallery-start" className="editorial-link active">WORK</a>
          <a href="#about" className="editorial-link" onClick={(e) => { e.preventDefault(); scrollToExplore(); }}>ABOUT</a>
          <a href="#contact" className="editorial-link" onClick={(e) => { e.preventDefault(); scrollToExplore(); }}>CONTACT</a>
        </nav>

        {/* Right: Start a Project with green accent */}
        <div className="nav-cta-part">
          <span className="green-accent-dash">—</span>
          <a 
            href="#contact" 
            className="start-project-link"
            onClick={(e) => {
              e.preventDefault();
              alert('VERHOST Studio Inquiry: Connecting you with our design leads.');
            }}
          >
            START A PROJECT <span className="cta-arrow">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
