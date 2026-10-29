import React from 'react';
import './glowe.css';

export default function GlowePreview({ isExpanded = false }) {
  return (
    <div className={`glowe-card-preview-root ${isExpanded ? 'is-expanded-card' : 'is-compact-card'}`}>
      {/* Top Header Strip */}
      <div className="preview-top-glowe-bar">
        <span className="preview-glowe-wordmark">GLOWÉ</span>
        <div className="preview-glowe-nav">
          <span>RITUALS</span>
          <span>BOTANICALS</span>
          <span>FINDER</span>
        </div>
        <span className="preview-glowe-bag">Bag (1 • $68)</span>
      </div>

      {/* Hero Body Grid */}
      <div className="preview-glowe-hero-grid">
        <div className="preview-glowe-copy">
          <span className="preview-glowe-tag">BOTANICAL SCIENCE / 2026</span>
          <h4 className="preview-glowe-title">
            Pure Care.<br />
            Real Results.
          </h4>
          <p className="preview-glowe-desc">
            Ceramide barrier repair and bio-compatible botanical actives.
          </p>
          <div className="preview-glowe-actions">
            <span className="preview-glowe-pill">Explore Ritual ↗</span>
            <span className="preview-glowe-price">$68 USD</span>
          </div>
        </div>

        <div className="preview-glowe-thumb">
          <img
            src="/projects/glowe/hero-skincare.jpg"
            alt="GLOWÉ botanical skincare"
            className="preview-glowe-img"
          />
        </div>
      </div>

      {/* Bottom Features Strip */}
      <div className="preview-bottom-glowe-strip">
        <span>CERAMIDE COMPLEX</span>
        <span>CLEAN FORMULATIONS</span>
        <span>SKIN RITUAL FINDER</span>
      </div>
    </div>
  );
}
