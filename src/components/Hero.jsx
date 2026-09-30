import React from 'react';

export default function Hero() {
  const handleScrollCue = () => {
    const el = document.getElementById('category-filter-nav');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="standalone-hero-section" aria-label="Digital Works Showcase Header">
      <div className="hero-resolution-matrix">PROBLEM RESOLUTION MATRIX</div>

      <h1 className="hero-headline">
        Digital Experiences <br />
        <span className="italic-serif">Built to Move.</span>
      </h1>

      <div className="hero-bottom-bar">
        <p className="hero-support-text">
          A curated collection of live interactive websites, sovereign platforms, and bespoke digital experiences engineered by VERHOST.
        </p>

        <button
          type="button"
          className="hero-scroll-cue"
          onClick={handleScrollCue}
          aria-label="Scroll to browse demos"
        >
          <span>Explore Archives</span>
          <span className="scroll-cue-arrow">&darr;</span>
        </button>
      </div>
    </section>
  );
}
