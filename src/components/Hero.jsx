import React from 'react';

export default function Hero() {
  const handleScrollDown = () => {
    const el = document.getElementById('works-gallery-start');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="verhost-hero-editorial">
      <div className="hero-content-wrapper">
        {/* Top Eyebrow */}
        <div className="hero-eyebrow-container">
          <span className="hero-eyebrow-text">DIGITAL WORKS</span>
          <span className="hero-eyebrow-line" />
          <span className="hero-eyebrow-badge">EDITION 2026</span>
        </div>

        {/* Main Grid: Headline on left, Restrained Info Block on right */}
        <div className="hero-main-grid">
          <div className="hero-headline-column">
            <h1 className="hero-massive-title">
              <span className="title-row">WE BUILD</span>
              <span className="title-row">DIGITAL EXPERIENCES.</span>
            </h1>
            <p className="hero-supporting-copy">
              A curated collection of websites, interfaces and digital experiences created across different industries.
            </p>
          </div>

          <div className="hero-info-column">
            <div className="hero-stat-card">
              <span className="stat-label">SELECTED PROJECTS</span>
              <div className="stat-value-group">
                <span className="stat-number">20</span>
                <span className="stat-suffix">PORTFOLIO PROJECTS</span>
              </div>
              <p className="stat-micro-description">
                Spanning E-Commerce, Corporate Flagships, High-Conversion Landing Pages, Editorial Monographs & Creative Experiments.
              </p>
              <div className="stat-status-indicator">
                <span className="status-live-dot" />
                <span className="status-live-text">Centralized Architecture • Live Demos Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll-To-Explore Bar */}
        <div className="hero-scroll-bar" onClick={handleScrollDown} role="button" tabIndex={0}>
          <span className="scroll-bar-text">↓ SCROLL TO EXPLORE ARCHIVE</span>
          <div className="scroll-indicator-track">
            <div className="scroll-indicator-thumb" />
          </div>
        </div>
      </div>
    </section>
  );
}
