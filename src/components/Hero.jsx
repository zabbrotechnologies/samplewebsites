import React from 'react';

export default function Hero() {
  const handleScrollDown = () => {
    const el = document.getElementById('works-gallery-start');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="verhost-editorial-hero">
      <div className="hero-inner-bounds">
        {/* Top Eyebrow */}
        <div className="hero-top-eyebrow">
          <span className="eyebrow-text">DIGITAL WORKS</span>
          <span className="eyebrow-divider" />
        </div>

        {/* Hero Main Content: Left Giant Title, Right Live Experiences Block */}
        <div className="hero-columns-grid">
          {/* Left Column */}
          <div className="hero-title-area">
            <h1 className="hero-display-heading">
              <span className="heading-row">WE BUILD</span>
              <span className="heading-row">DIGITAL EXPERIENCES.</span>
            </h1>
            <p className="hero-curated-lead">
              A curated collection of websites, interfaces and digital experiences created across different industries.
            </p>
          </div>

          {/* Right Column: Live Experiences & Scroll Indicator (Matching reference) */}
          <div className="hero-experiences-area">
            <div className="selected-projects-badge">
              <span className="emerald-bullet">●</span>
              <span className="badge-caption">SELECTED PROJECTS</span>
            </div>

            <div className="live-counter-unit">
              <span className="counter-digit">20</span>
              <div className="counter-captions">
                <span className="captions-line">PORTFOLIO</span>
                <span className="captions-line">PROJECTS</span>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll-trigger" onClick={handleScrollDown} role="button" tabIndex={0}>
              <span className="scroll-circle-icon">↓</span>
              <span className="scroll-caption">SCROLL TO EXPLORE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
