import React from 'react';

export default function ProjectMockup({ project, isExpanded = false }) {
  const { title, theme } = project;
  const isLight = theme?.mode === 'light';
  const bg = theme?.bg || (isLight ? '#F5F3EF' : '#111215');
  const textColor = isLight ? '#111111' : '#FFFFFF';
  const subTextColor = isLight ? '#666666' : '#9CA3AF';
  const accent = theme?.accent || '#169B50';
  const border = isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.08)';

  return (
    <div 
      className={`mockup-screen-container ${isLight ? 'is-light-theme' : 'is-dark-theme'} ${isExpanded ? 'is-expanded-view' : 'is-compact-view'}`}
      style={{ backgroundColor: bg }}
    >
      {/* Mini Website Header Bar */}
      <div className="mini-web-header" style={{ borderBottom: `1px solid ${border}` }}>
        <span className="mini-brand-tag" style={{ color: textColor }}>
          {theme?.brand || title}
        </span>
        <div className="mini-header-nav" style={{ color: subTextColor }}>
          <span>Home</span>
          <span>Shop</span>
          <span>Collections</span>
          <span>About</span>
        </div>
        <span className="mini-header-cta" style={{ backgroundColor: isLight ? '#111' : '#FFF', color: isLight ? '#FFF' : '#111' }}>
          Explore
        </span>
      </div>

      {/* Mini Hero Content with Realistic Visual Layout */}
      <div className="mini-hero-body">
        {/* Left Copy Column */}
        <div className="mini-copy-col">
          <h4 className="mini-hero-headline" style={{ color: textColor }}>
            {theme?.headline || title}
          </h4>
          <p className="mini-hero-sub" style={{ color: subTextColor }}>
            {theme?.sub || project.description}
          </p>
          <div className="mini-cta-pill" style={{ backgroundColor: isLight ? '#111' : '#FFF', color: isLight ? '#FFF' : '#111' }}>
            <span>Shop Now</span>
          </div>
        </div>

        {/* Right Product Visual / Graphic */}
        <div className="mini-graphic-col">
          {renderGraphic(theme?.mockupType, accent, isLight)}
        </div>
      </div>
    </div>
  );
}

// Realistic vector illustrations for each product category (sneaker, chair, watch, cosmetic, architecture, etc.)
function renderGraphic(type, accent, isLight) {
  switch (type) {
    case 'sneaker':
      return (
        <svg viewBox="0 0 200 130" className="mockup-svg-graphic" fill="none">
          <ellipse cx="100" cy="115" rx="75" ry="10" fill="rgba(0,0,0,0.3)" filter="blur(4px)" />
          {/* Sole */}
          <path d="M25 105 C 50 112, 140 114, 180 98 C 175 92, 160 92, 145 94 C 110 94, 60 92, 28 98 Z" fill="#E2E8F0" />
          <path d="M30 98 C 45 78, 65 70, 95 72 C 120 74, 140 82, 172 90 C 160 65, 130 50, 105 48 C 85 47, 65 60, 48 75 C 38 82, 32 90, 30 98 Z" fill="#94A3B8" />
          {/* Swoosh / Stripe Accent */}
          <path d="M55 82 Q 95 68 140 76 Q 105 88 70 92 Z" fill="#3B82F6" />
          <line x1="85" y1="58" x2="95" y2="72" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="95" y1="56" x2="105" y2="70" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="105" y1="54" x2="115" y2="68" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'chair':
      return (
        <svg viewBox="0 0 200 140" className="mockup-svg-graphic" fill="none">
          <ellipse cx="95" cy="128" rx="55" ry="8" fill="rgba(0,0,0,0.12)" filter="blur(4px)" />
          {/* Modern Armchair Cushion */}
          <path d="M60 45 C 60 25, 130 25, 130 45 C 130 75, 138 90, 125 96 C 110 102, 80 102, 65 96 C 52 90, 60 75, 60 45 Z" fill="#F1ECE4" stroke="#D1C7BA" strokeWidth="2" />
          {/* Seat Cushion */}
          <ellipse cx="95" cy="85" rx="38" ry="14" fill="#E8E1D5" stroke="#D1C7BA" strokeWidth="2" />
          {/* Wooden Legs */}
          <line x1="68" y1="94" x2="52" y2="128" stroke="#A78258" strokeWidth="4" strokeLinecap="round" />
          <line x1="122" y1="94" x2="138" y2="128" stroke="#A78258" strokeWidth="4" strokeLinecap="round" />
          <line x1="82" y1="98" x2="74" y2="126" stroke="#876541" strokeWidth="3" strokeLinecap="round" />
          <line x1="108" y1="98" x2="116" y2="126" stroke="#876541" strokeWidth="3" strokeLinecap="round" />
          {/* Potted Fiddle Leaf Plant beside chair */}
          <path d="M155 124 L 165 124 L 163 110 L 157 110 Z" fill="#78350F" />
          <path d="M160 110 Q 155 90 152 75 Q 165 80 162 95 Q 172 75 168 65 Q 160 72 160 88" fill="#15803D" />
        </svg>
      );
    case 'watch':
      return (
        <svg viewBox="0 0 200 130" className="mockup-svg-graphic" fill="none">
          <ellipse cx="100" cy="118" rx="60" ry="8" fill="rgba(0,0,0,0.4)" filter="blur(4px)" />
          {/* Watch Bracelet Links */}
          <rect x="86" y="10" width="28" height="110" rx="4" fill="#1E2024" stroke="#33373E" strokeWidth="2" />
          {/* Watch Case */}
          <circle cx="100" cy="65" r="42" fill="#181A1F" stroke="#3F444E" strokeWidth="4" />
          <circle cx="100" cy="65" r="34" fill="#0C0D10" stroke="#E5A93C" strokeWidth="1.5" />
          {/* Chrono Subdials */}
          <circle cx="92" cy="65" r="8" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
          <circle cx="108" cy="65" r="8" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
          <circle cx="100" cy="76" r="8" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
          {/* Hands */}
          <line x1="100" y1="65" x2="118" y2="52" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="100" y1="65" x2="88" y2="46" stroke="#E5A93C" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="100" cy="65" r="3" fill="#E5A93C" />
        </svg>
      );
    case 'cosmetic':
      return (
        <svg viewBox="0 0 200 140" className="mockup-svg-graphic" fill="none">
          <ellipse cx="100" cy="126" rx="65" ry="8" fill="rgba(0,0,0,0.08)" filter="blur(3px)" />
          {/* Glass Dropper Bottle */}
          <rect x="65" y="60" width="36" height="64" rx="10" fill="#EFE8DE" stroke="#D8CFC2" strokeWidth="2" />
          <rect x="74" y="44" width="18" height="16" fill="#A07155" />
          <path d="M78 44 C 78 35, 88 35, 88 44 Z" fill="#FFFFFF" />
          {/* Tall Cream Pump Bottle */}
          <rect x="110" y="45" width="30" height="80" rx="8" fill="#F4EFEA" stroke="#D8CFC2" strokeWidth="2" />
          <rect x="119" y="32" width="12" height="13" fill="#A07155" />
          <path d="M115 32 L 133 32 L 133 28 L 122 28 Z" fill="#1C1917" />
          {/* Dried Botanical Branch */}
          <path d="M155 125 Q 165 80 160 40 Q 155 25 152 15" stroke="#A78258" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="162" cy="50" rx="7" ry="12" transform="rotate(25 162 50)" fill="#D4AF37" opacity="0.8" />
          <ellipse cx="152" cy="30" rx="6" ry="10" transform="rotate(-30 152 30)" fill="#D4AF37" opacity="0.8" />
        </svg>
      );
    case 'architecture':
      return (
        <svg viewBox="0 0 200 130" className="mockup-svg-graphic" fill="none">
          {/* Glass & Steel Pavilion Facade */}
          <rect x="30" y="25" width="140" height="95" rx="3" fill="#D8D8D2" stroke="#555555" strokeWidth="1.5" />
          {/* Windows Matrix */}
          <line x1="65" y1="25" x2="65" y2="120" stroke="#777777" strokeWidth="1.5" />
          <line x1="100" y1="25" x2="100" y2="120" stroke="#777777" strokeWidth="1.5" />
          <line x1="135" y1="25" x2="135" y2="120" stroke="#777777" strokeWidth="1.5" />
          <line x1="30" y1="55" x2="170" y2="55" stroke="#777777" strokeWidth="1.5" />
          <line x1="30" y1="88" x2="170" y2="88" stroke="#777777" strokeWidth="1.5" />
          {/* Reflection Polygon */}
          <polygon points="30,25 100,25 65,120 30,120" fill="rgba(255,255,255,0.35)" />
        </svg>
      );
    case 'turbine':
      return (
        <svg viewBox="0 0 200 130" className="mockup-svg-graphic" fill="none">
          {/* Industrial Clean Generator / Turbine with Green Glow */}
          <circle cx="100" cy="70" r="48" fill="#131C24" stroke="#1E293B" strokeWidth="3" />
          <circle cx="100" cy="70" r="32" fill="#0F172A" stroke="#22C55E" strokeWidth="2" strokeDasharray="6 3" />
          <circle cx="100" cy="70" r="16" fill="#22C55E" opacity="0.85" filter="drop-shadow(0 0 10px #22C55E)" />
          {/* Telemetry Curves */}
          <path d="M20 105 Q 60 75 100 85 T 180 60" stroke="#22C55E" strokeWidth="2" fill="none" opacity="0.6" />
        </svg>
      );
    case 'growth':
      return (
        <svg viewBox="0 0 200 130" className="mockup-svg-graphic" fill="none">
          {/* Geometric Faceted Polygon Waves (matches reference NEXORA) */}
          <polygon points="90,130 140,40 180,90 200,130" fill="#E2EBE5" opacity="0.8" />
          <polygon points="120,130 160,20 200,70 200,130" fill="#C5DEC9" opacity="0.9" />
          <polygon points="150,130 185,10 200,45 200,130" fill="#93C89E" opacity="0.9" />
          <polygon points="170,130 195,5 200,25 200,130" fill="#489F5C" opacity="0.95" />
        </svg>
      );
    case 'cyberpunk':
      return (
        <svg viewBox="0 0 200 130" className="mockup-svg-graphic" fill="none">
          {/* Cyberpunk AI Portrait Silhouette with Green Neon Rim (matches reference SYNTHORA) */}
          <ellipse cx="145" cy="85" rx="35" ry="45" fill="#101915" />
          <path d="M125 50 C 135 30 165 30 170 50 C 175 70 170 115 150 125 C 135 125 120 100 125 50 Z" fill="#14261D" />
          <path d="M140 45 C 150 35 168 40 170 60 C 172 80 165 110 152 120" stroke="#169B50" strokeWidth="3" strokeLinecap="round" />
          {/* Neural Lines */}
          <circle cx="160" cy="65" r="3" fill="#169B50" />
          <line x1="160" y1="65" x2="185" y2="55" stroke="#169B50" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 200 130" className="mockup-svg-graphic" fill="none">
          <rect x="25" y="20" width="150" height="90" rx="8" fill="none" stroke={accent} strokeWidth="1.5" />
          <circle cx="65" cy="65" r="24" fill={accent} opacity="0.3" />
          <path d="M40 90 L 80 50 L 120 90 L 160 55" stroke={accent} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
}
