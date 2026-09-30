import React from 'react';

export default function StartProject() {
  return (
    <section className="start-project-section" aria-label="Start a Project">
      <div className="start-project-container">
        <div className="start-project-brand">
          <img src="/verhost-logo.png" alt="VERHOST Logo" className="start-brand-logo" />
        </div>
        <h2 className="start-project-title">
          Ready to build something <br />
          <span className="italic-serif">extraordinary?</span>
        </h2>
        <p className="start-project-desc">
          Let's collaborate to engineer a digital experience that moves your brand forward. 
          Our team is currently accepting new commissions for 2026.
        </p>
        <button className="start-project-btn">
          <span>Start a Project</span>
          <span className="arrow-icon">↗</span>
        </button>
      </div>
    </section>
  );
}
