import React from 'react';
import './lumora-living.css';

export default function LumoraLivingPreview({ isExpanded = false }) {
  return (
    <div className={`lumora-preview-root ${isExpanded ? 'is-expanded' : 'is-compact'}`}>
      {/* Brand Header */}
      <div className="lumora-header">
        <span className="lumora-brand">LUMORA LIVING</span>
        <div className="lumora-nav">
          <span>FURNITURE</span>
          <span>LIGHTING</span>
          <span>ACCENTS</span>
          <span>EDITORIAL</span>
        </div>
        <span className="lumora-cart-pill">Cart (1 • $1,280)</span>
      </div>

      {/* Hero Body */}
      <div className="lumora-body">
        <div className="lumora-copy">
          <span className="lumora-eyebrow">Curated Interiors 2026</span>
          <h4 className="lumora-title">
            Sculptural Living &<br />
            Timeless Spaces
          </h4>
          <p className="lumora-desc">
            Artisanal solid oak lounge chairs, alabaster luminaires, and travertine stone objects.
          </p>
          <div className="lumora-actions">
            <span className="lumora-cta-btn">View Collection ↗</span>
            <span className="lumora-price-tag">$1,280</span>
          </div>
        </div>

        {/* Bespoke Architectural Furniture Visual */}
        <div className="lumora-visual-col">
          <svg viewBox="0 0 200 140" className="lumora-graphic-svg" fill="none">
            {/* Ambient Lighting Gradient */}
            <circle cx="160" cy="40" r="35" fill="rgba(217, 180, 130, 0.18)" filter="blur(8px)" />
            
            {/* Travertine Low Plinth Table */}
            <ellipse cx="140" cy="115" rx="42" ry="10" fill="#E2DDD5" stroke="#C8C2B7" strokeWidth="1.5" />
            <rect x="105" y="115" width="70" height="12" fill="#D3CCC2" stroke="#C8C2B7" strokeWidth="1.5" />
            
            {/* Ceramic Ribbed Vase on Table */}
            <path d="M145 115 L 142 92 C 142 85, 154 85, 154 92 L 151 115 Z" fill="#F0EBE3" stroke="#B8B0A2" strokeWidth="1.5" />
            {/* Olive Branch */}
            <path d="M148 92 Q 155 70 165 55" stroke="#786B59" strokeWidth="1.5" strokeLinecap="round" />
            <ellipse cx="158" cy="68" rx="4" ry="8" transform="rotate(25 158 68)" fill="#849171" />
            <ellipse cx="163" cy="58" rx="4" ry="7" transform="rotate(-30 163 58)" fill="#849171" />

            {/* Sculptural Bouclé Lounge Armchair */}
            <ellipse cx="65" cy="126" rx="45" ry="8" fill="rgba(0,0,0,0.08)" filter="blur(3px)" />
            {/* Curved Backrest */}
            <path d="M35 55 C 32 30, 95 30, 95 55 C 95 85, 102 98, 92 104 C 80 110, 50 110, 40 104 C 30 98, 38 85, 35 55 Z" fill="#EFEAE1" stroke="#D3CABE" strokeWidth="2" />
            {/* Plush Cushion */}
            <ellipse cx="65" cy="94" rx="28" ry="12" fill="#E6DFD4" stroke="#D3CABE" strokeWidth="2" />
            {/* Fluted Oak Legs */}
            <line x1="45" y1="102" x2="35" y2="128" stroke="#8C6E4A" strokeWidth="4" strokeLinecap="round" />
            <line x1="85" y1="102" x2="95" y2="128" stroke="#8C6E4A" strokeWidth="4" strokeLinecap="round" />
            <line x1="56" y1="106" x2="52" y2="125" stroke="#6B5336" strokeWidth="3" strokeLinecap="round" />
            <line x1="75" y1="106" x2="80" y2="125" stroke="#6B5336" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Bottom Features Strip */}
      <div className="lumora-bottom-bar">
        <span>SOLID EUROPEAN OAK</span>
        <span>SUSTAINABLE FORESTRY</span>
        <span className="lumora-badge">WHITE-GLOVE DELIVERY</span>
      </div>
    </div>
  );
}
