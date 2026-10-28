import React from 'react';
import MaxywalkPreview from '../projects/ecommerce/maxywalk/MaxywalkPreview';
import LumoraLivingPreview from '../projects/ecommerce/lumora-living/LumoraLivingPreview';
import VeraBeautyPreview from '../projects/ecommerce/vera-beauty/VeraBeautyPreview';
import FreshMarketPreview from '../projects/ecommerce/fresh-market/FreshMarketPreview';

export default function ProjectMockup({ project, isExpanded = false }) {
  // Delegate E-Commerce projects to their independent modules
  if (project.id === 'maxywalk') {
    return <MaxywalkPreview isExpanded={isExpanded} />;
  }
  if (project.id === 'lumora-living') {
    return <LumoraLivingPreview isExpanded={isExpanded} />;
  }
  if (project.id === 'vera-beauty') {
    return <VeraBeautyPreview isExpanded={isExpanded} />;
  }
  if (project.id === 'fresh-market') {
    return <FreshMarketPreview isExpanded={isExpanded} />;
  }

  // Preserved rendering for other categories (Business, Landing, Portfolio, Creative)
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
      {/* Website Header Bar */}
      <div className="mini-web-header" style={{ borderBottom: `1px solid ${border}` }}>
        <span className="mini-brand-tag" style={{ color: textColor }}>
          {theme?.brand || title}
        </span>
        <div className="mini-header-nav" style={{ color: subTextColor }}>
          <span>Home</span>
          <span>Overview</span>
          <span>Archive</span>
          <span>Contact</span>
        </div>
        <span className="mini-header-cta" style={{ backgroundColor: isLight ? '#111' : '#FFF', color: isLight ? '#FFF' : '#111' }}>
          Explore
        </span>
      </div>

      {/* Website Hero Composition */}
      <div className="mini-hero-body">
        <div className="mini-copy-col">
          <h4 className="mini-hero-headline" style={{ color: textColor }}>
            {theme?.headline || title}
          </h4>
          <p className="mini-hero-sub" style={{ color: subTextColor }}>
            {theme?.sub || project.description}
          </p>
          <div className="mini-cta-pill" style={{ backgroundColor: isLight ? '#111' : '#FFF', color: isLight ? '#FFF' : '#111' }}>
            <span>Learn More</span>
          </div>
        </div>

        <div className="mini-graphic-col">
          {renderCategoryGraphic(theme?.mockupType, accent, isLight)}
        </div>
      </div>
    </div>
  );
}

function renderCategoryGraphic(type, accent, isLight) {
  switch (type) {
    case 'architecture':
      return (
        <svg viewBox="0 0 200 130" className="mockup-svg-graphic" fill="none">
          <rect x="30" y="25" width="140" height="95" rx="3" fill="#D8D8D2" stroke="#555555" strokeWidth="1.5" />
          <line x1="65" y1="25" x2="65" y2="120" stroke="#777777" strokeWidth="1.5" />
          <line x1="100" y1="25" x2="100" y2="120" stroke="#777777" strokeWidth="1.5" />
          <line x1="135" y1="25" x2="135" y2="120" stroke="#777777" strokeWidth="1.5" />
          <line x1="30" y1="55" x2="170" y2="55" stroke="#777777" strokeWidth="1.5" />
          <line x1="30" y1="88" x2="170" y2="88" stroke="#777777" strokeWidth="1.5" />
          <polygon points="30,25 100,25 65,120 30,120" fill="rgba(255,255,255,0.35)" />
        </svg>
      );
    case 'turbine':
      return (
        <svg viewBox="0 0 200 130" className="mockup-svg-graphic" fill="none">
          <circle cx="100" cy="70" r="48" fill="#131C24" stroke="#1E293B" strokeWidth="3" />
          <circle cx="100" cy="70" r="32" fill="#0F172A" stroke="#22C55E" strokeWidth="2" strokeDasharray="6 3" />
          <circle cx="100" cy="70" r="16" fill="#22C55E" opacity="0.85" filter="drop-shadow(0 0 10px #22C55E)" />
          <path d="M20 105 Q 60 75 100 85 T 180 60" stroke="#22C55E" strokeWidth="2" fill="none" opacity="0.6" />
        </svg>
      );
    case 'growth':
      return (
        <svg viewBox="0 0 200 130" className="mockup-svg-graphic" fill="none">
          <polygon points="90,130 140,40 180,90 200,130" fill="#E2EBE5" opacity="0.8" />
          <polygon points="120,130 160,20 200,70 200,130" fill="#C5DEC9" opacity="0.9" />
          <polygon points="150,130 185,10 200,45 200,130" fill="#93C89E" opacity="0.9" />
          <polygon points="170,130 195,5 200,25 200,130" fill="#489F5C" opacity="0.95" />
        </svg>
      );
    case 'cyberpunk':
      return (
        <svg viewBox="0 0 200 130" className="mockup-svg-graphic" fill="none">
          <ellipse cx="145" cy="85" rx="35" ry="45" fill="#101915" />
          <path d="M125 50 C 135 30 165 30 170 50 C 175 70 170 115 150 125 C 135 125 120 100 125 50 Z" fill="#14261D" />
          <path d="M140 45 C 150 35 168 40 170 60 C 172 80 165 110 152 120" stroke="#169B50" strokeWidth="3" strokeLinecap="round" />
          <circle cx="160" cy="65" r="3" fill="#169B50" />
          <line x1="160" y1="65" x2="185" y2="55" stroke="#169B50" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      );
    case 'cubes':
      return (
        <svg viewBox="0 0 200 130" className="mockup-svg-graphic" fill="none">
          <polygon points="130,50 155,35 180,50 155,65" fill="#A7F3D0" />
          <polygon points="130,50 155,65 155,95 130,80" fill="#6EE7B7" />
          <polygon points="180,50 155,65 155,95 180,80" fill="#34D399" />
          <polygon points="90,75 115,60 140,75 115,90" fill="#D1FAE5" />
          <polygon points="90,75 115,90 115,120 90,105" fill="#A7F3D0" />
          <polygon points="140,75 115,90 115,120 140,105" fill="#6EE7B7" />
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
