import React from 'react';

/**
 * ProjectMockup Component
 * Renders an authentic, bespoke website UI mockup for each of the 20 projects.
 * Includes browser chrome with dots, URL bar, and custom hero interface.
 */
export default function ProjectMockup({ project, isExpanded = false }) {
  const { title, visualTheme, number } = project;
  const theme = visualTheme || {};
  const accent = theme.accent || '#169B50';
  const surface = theme.surface || '#111111';
  const isLight = surface.toLowerCase().startsWith('#f') || surface.toLowerCase() === '#ffffff' || surface.toLowerCase().startsWith('#ea');

  const textColor = isLight ? '#111111' : '#FFFFFF';
  const subTextColor = isLight ? '#666666' : '#A0A0A0';
  const chromeBg = isLight ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.07)';
  const borderSubtle = isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.12)';

  return (
    <div 
      className={`project-mockup-frame ${isExpanded ? 'expanded-mode' : 'compact-mode'}`}
      style={{ backgroundColor: surface, color: textColor }}
    >
      {/* Browser Chrome Header */}
      <div className="mockup-browser-chrome" style={{ backgroundColor: chromeBg, borderBottom: `1px solid ${borderSubtle}` }}>
        <div className="mockup-traffic-lights">
          <span className="dot dot-close" />
          <span className="dot dot-min" />
          <span className="dot dot-max" />
        </div>
        <div className="mockup-url-pill" style={{ borderColor: borderSubtle, color: subTextColor }}>
          <span className="mockup-lock-icon">🔒</span>
          <span className="mockup-url-text">verhost.works/{number}-{project.id}</span>
        </div>
        <div className="mockup-live-indicator">
          <span className="pulse-green-dot" />
          <span className="live-label" style={{ color: subTextColor }}>{project.year}</span>
        </div>
      </div>

      {/* Bespoke Mini Website Body */}
      <div className="mockup-viewport-canvas">
        {/* Navigation Bar inside the mini website */}
        <div className="mini-site-nav" style={{ borderBottom: `1px solid ${borderSubtle}` }}>
          <span className="mini-brand-logo" style={{ color: textColor }}>{title.toUpperCase()}</span>
          <div className="mini-nav-links" style={{ color: subTextColor }}>
            <span>INDEX</span>
            <span>ABOUT</span>
            <span style={{ color: accent }}>{theme.badge || 'EXPLORE'}</span>
          </div>
        </div>

        {/* Hero Composition */}
        <div className="mini-hero-layout">
          <div className="mini-hero-copy">
            <span 
              className="mini-category-tag" 
              style={{ color: accent, borderColor: `${accent}40`, backgroundColor: `${accent}15` }}
            >
              {theme.badge || project.category}
            </span>
            <h4 className="mini-headline" style={{ color: textColor }}>
              {theme.headline || title}
            </h4>
            <p className="mini-tagline" style={{ color: subTextColor }}>
              {theme.tagline || project.description}
            </p>
          </div>

          {/* Visual Showcase Graphic / Illustration */}
          <div className="mini-visual-artifact" style={{ borderColor: borderSubtle }}>
            {renderArtifactGraphic(project.visualTheme?.type, accent, isLight)}
          </div>
        </div>

        {/* Mini Content Strip */}
        <div className="mini-footer-bar" style={{ borderTop: `1px solid ${borderSubtle}`, color: subTextColor }}>
          <span>PROJECT {number} // 20</span>
          <span>{project.deliverables?.[0] || 'DIGITAL EXPERIENCE'}</span>
          <span style={{ color: accent }}>STUDIO ARCHIVE ↗</span>
        </div>
      </div>
    </div>
  );
}

// Generates bespoke stylized vector elements for each project type
function renderArtifactGraphic(type, accent, isLight) {
  const strokeColor = isLight ? '#222222' : '#E0E0E0';
  const gridColor = isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)';

  switch (type) {
    case 'maxywalk':
      return (
        <svg viewBox="0 0 160 100" className="artifact-svg">
          <rect x="10" y="20" width="140" height="60" rx="8" fill="none" stroke={strokeColor} strokeWidth="1.5" />
          <path d="M25 65 C 40 30, 80 40, 100 50 C 120 60, 135 65, 140 65" fill="none" stroke={accent} strokeWidth="2.5" />
          <circle cx="100" cy="50" r="4" fill={accent} />
          <text x="30" y="45" fill={accent} fontSize="9" fontWeight="bold">OXFORD 1904</text>
          <text x="30" y="58" fill={strokeColor} fontSize="8">CALFSKIN LEATHER</text>
        </svg>
      );
    case 'mithu':
      return (
        <svg viewBox="0 0 160 100" className="artifact-svg">
          <rect x="40" y="15" width="35" height="70" rx="6" fill="none" stroke={strokeColor} strokeWidth="1.5" />
          <rect x="85" y="30" width="45" height="55" rx="6" fill="none" stroke={accent} strokeWidth="1.5" />
          <line x1="45" y1="35" x2="70" y2="35" stroke={accent} strokeWidth="1.5" />
          <circle cx="107" cy="55" r="12" fill="none" stroke={strokeColor} strokeWidth="1" />
          <text x="96" y="58" fill={accent} fontSize="7" fontWeight="bold">ORGANIC</text>
        </svg>
      );
    case 'resin':
      return (
        <svg viewBox="0 0 160 100" className="artifact-svg">
          <circle cx="80" cy="50" r="35" fill="none" stroke={strokeColor} strokeWidth="1" strokeDasharray="3 3" />
          <path d="M50 50 Q 80 20 110 50 T 130 50" fill="none" stroke={accent} strokeWidth="2.5" />
          <circle cx="80" cy="50" r="8" fill={accent} />
          <text x="55" y="80" fill={accent} fontSize="8" letterSpacing="1">EPOXY FLORA</text>
        </svg>
      );
    case 'market':
      return (
        <svg viewBox="0 0 160 100" className="artifact-svg">
          <rect x="20" y="20" width="35" height="35" rx="4" fill="none" stroke={accent} strokeWidth="1.5" />
          <rect x="65" y="20" width="35" height="35" rx="4" fill="none" stroke={strokeColor} strokeWidth="1.5" />
          <rect x="110" y="20" width="35" height="35" rx="4" fill="none" stroke={strokeColor} strokeWidth="1.5" />
          <line x1="20" y1="75" x2="140" y2="75" stroke={accent} strokeWidth="2" />
          <text x="25" y="42" fill={accent} fontSize="8">HARVEST</text>
        </svg>
      );
    case 'kinetic':
      return (
        <svg viewBox="0 0 160 100" className="artifact-svg">
          <line x1="20" y1="80" x2="80" y2="20" stroke={strokeColor} strokeWidth="2" />
          <line x1="80" y1="20" x2="140" y2="80" stroke={strokeColor} strokeWidth="2" />
          <line x1="40" y1="80" x2="40" y2="40" stroke={accent} strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="120" y1="80" x2="120" y2="40" stroke={accent} strokeWidth="1.5" strokeDasharray="2 2" />
          <circle cx="80" cy="20" r="4" fill={accent} />
          <text x="65" y="70" fill={strokeColor} fontSize="8" fontFamily="serif">ROTTERDAM</text>
        </svg>
      );
    case 'greentech':
      return (
        <svg viewBox="0 0 160 100" className="artifact-svg">
          <circle cx="80" cy="50" r="30" fill="none" stroke={gridColor} strokeWidth="1" />
          <line x1="80" y1="20" x2="80" y2="80" stroke={accent} strokeWidth="2" />
          <line x1="50" y1="50" x2="110" y2="50" stroke={accent} strokeWidth="2" />
          <path d="M 60 70 L 80 50 L 100 70" fill="none" stroke={strokeColor} strokeWidth="1.5" />
          <text x="35" y="85" fill={accent} fontSize="8">0.02% CO2 GRID LOAD</text>
        </svg>
      );
    case 'verhost':
      return (
        <svg viewBox="0 0 160 100" className="artifact-svg">
          <rect x="25" y="25" width="110" height="50" rx="4" fill="none" stroke={accent} strokeWidth="1.5" />
          <text x="35" y="55" fill={textColor} fontSize="14" fontWeight="800" letterSpacing="2">VERHOST</text>
          <circle cx="120" cy="50" r="5" fill={accent} />
        </svg>
      );
    case 'ngt':
      return (
        <svg viewBox="0 0 160 100" className="artifact-svg">
          <path d="M20 70 Q 50 30 100 35 T 140 70" fill="none" stroke={accent} strokeWidth="2.5" />
          <line x1="20" y1="75" x2="140" y2="75" stroke={strokeColor} strokeWidth="1" />
          <text x="45" y="55" fill={accent} fontSize="9" fontWeight="bold">9200 RPM // STAGE 3</text>
        </svg>
      );
    case 'neural':
      return (
        <svg viewBox="0 0 160 100" className="artifact-svg">
          <circle cx="40" cy="40" r="6" fill={accent} />
          <circle cx="40" cy="70" r="6" fill={strokeColor} />
          <circle cx="80" cy="25" r="6" fill={strokeColor} />
          <circle cx="80" cy="55" r="8" fill={accent} />
          <circle cx="80" cy="85" r="6" fill={strokeColor} />
          <circle cx="120" cy="50" r="7" fill={accent} />
          <line x1="40" y1="40" x2="80" y2="55" stroke={accent} strokeWidth="1.5" />
          <line x1="80" y1="55" x2="120" y2="50" stroke={accent} strokeWidth="1.5" />
          <line x1="40" y1="70" x2="80" y2="55" stroke={strokeColor} strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      );
    case 'turf':
      return (
        <svg viewBox="0 0 160 100" className="artifact-svg">
          <rect x="20" y="15" width="120" height="70" rx="4" fill="none" stroke={accent} strokeWidth="2" />
          <line x1="80" y1="15" x2="80" y2="85" stroke={accent} strokeWidth="1.5" />
          <circle cx="80" cy="50" r="16" fill="none" stroke={accent} strokeWidth="1.5" />
          <rect x="20" y="32" width="20" height="36" fill="none" stroke={strokeColor} strokeWidth="1" />
          <rect x="120" y="32" width="20" height="36" fill="none" stroke={strokeColor} strokeWidth="1" />
          <text x="35" y="80" fill={accent} fontSize="7" fontWeight="bold">PITCH A1 • FLOODLIT</text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 160 100" className="artifact-svg">
          <rect x="25" y="20" width="110" height="60" rx="6" fill="none" stroke={strokeColor} strokeWidth="1.5" />
          <line x1="25" y1="40" x2="135" y2="40" stroke={accent} strokeWidth="1.5" />
          <circle cx="45" cy="60" r="10" fill="none" stroke={accent} strokeWidth="1.5" />
          <line x1="65" y1="55" x2="115" y2="55" stroke={strokeColor} strokeWidth="1.5" />
          <line x1="65" y1="65" x2="95" y2="65" stroke={strokeColor} strokeWidth="1.5" />
        </svg>
      );
  }
}
