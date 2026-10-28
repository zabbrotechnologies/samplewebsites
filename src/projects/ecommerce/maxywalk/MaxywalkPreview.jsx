import React from 'react';
import './maxywalk.css';
import slipperImg from './assets/slipper.png';

export default function MaxywalkPreview({ isExpanded = false }) {
  return (
    <div className={`maxywalk-preview-root ${isExpanded ? 'is-expanded' : 'is-compact'}`}>
      {/* Real Brand Header */}
      <div className="maxywalk-header">
        <span className="maxywalk-brand">
          MAXYWALK
          <span className="maxywalk-brand-dot" />
        </span>
        <div className="maxywalk-nav">
          <span>SLIPPERS</span>
          <span>SANDALS</span>
          <span>BELTS</span>
          <span>WALLETS</span>
        </div>
        <span className="maxywalk-cart-pill">Cart (2)</span>
      </div>

      {/* Hero Body with Real Product */}
      <div className="maxywalk-body">
        <div className="maxywalk-copy">
          <span className="maxywalk-eyebrow">Handcrafted Leather</span>
          <h4 className="maxywalk-title">
            WALK IN<br />
            <span>LEATHER.</span>
          </h4>
          <p className="maxywalk-desc">
            Custom-tailored footwear & accessories crafted with full-grain leather for lifetime endurance.
          </p>
          <div className="maxywalk-actions">
            <span className="maxywalk-cta-btn">Shop Now ↗</span>
            <span className="maxywalk-price-tag">₹1,499</span>
          </div>
        </div>

        {/* Real Product Photography */}
        <div className="maxywalk-visual-col">
          <div className="maxywalk-glow-orb" />
          <img
            src={slipperImg}
            alt="MAXYWALK Handcrafted Leather Slipper"
            className="maxywalk-product-image"
            loading="lazy"
          />
        </div>
      </div>

      {/* Bottom Trust Strip */}
      <div className="maxywalk-bottom-bar">
        <span>GENUINE LEATHER</span>
        <span>MADE IN CHENNAI</span>
        <span className="maxywalk-badge">★ 4.9 (2,400+ REVIEWS)</span>
      </div>
    </div>
  );
}
