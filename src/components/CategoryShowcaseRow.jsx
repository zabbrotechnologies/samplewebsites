import React, { useState, useRef, useEffect } from 'react';
import ProjectMockup from './ProjectMockup';

export default function CategoryShowcaseRow({ section, projects, onSelectProject }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const boundsRef = useRef(null);
  const [scaleState, setScaleState] = useState({ scale: 1, height: 'auto' });

  useEffect(() => {
    if (!containerRef.current) return;

    let rafId = null;
    const calculateScale = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!containerRef.current || !boundsRef.current) return;
        const containerWidth = containerRef.current.clientWidth;
        const padding = containerWidth < 768 ? 20 : 40;
        const availableWidth = Math.max(containerWidth - padding, 260);
        const BASE_WIDTH = 1200;

        if (availableWidth < BASE_WIDTH) {
          const s = availableWidth / BASE_WIDTH;
          const unscaledHeight = boundsRef.current.offsetHeight || boundsRef.current.scrollHeight || 480;
          setScaleState({
            scale: s,
            height: `${Math.ceil(unscaledHeight * s)}px`
          });
        } else {
          setScaleState({ scale: 1, height: 'auto' });
        }
      });
    };

    calculateScale();
    const ro = new ResizeObserver(calculateScale);
    ro.observe(containerRef.current);
    window.addEventListener('resize', calculateScale, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener('resize', calculateScale);
    };
  }, []);

  if (!projects || projects.length === 0) return null;

  const activeProject = projects[activeIndex] || projects[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const getThumbnailSnippet = (proj) => {
    if (proj.thumbnailImg) {
      return (
        <img 
          src={proj.thumbnailImg} 
          alt={proj.title}
          className="thumbnail-mini-img"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      );
    }
    const accent = proj.theme?.accent || '#9BFF9B';
    const bg = proj.theme?.bg || '#0B150F';
    return (
      <div 
        className="thumbnail-mini-abstract" 
        style={{ 
          background: `linear-gradient(135deg, ${bg} 0%, #050907 100%)`,
          border: `1px solid ${accent}33`
        }}
      >
        <div 
          className="mini-abstract-shape" 
          style={{ background: accent }} 
        />
      </div>
    );
  };

  return (
    <section 
      ref={containerRef}
      className="category-showcase-row" 
      id={`section-${section.slug}`}
    >
      <div 
        className="showcase-scale-viewport"
        style={{ height: scaleState.height }}
      >
        <div 
          ref={boundsRef}
          className="row-inner-bounds"
          style={{
            width: scaleState.scale < 1 ? '1200px' : '100%',
            minWidth: scaleState.scale < 1 ? '1200px' : 'auto',
            transform: scaleState.scale < 1 ? `scale(${scaleState.scale})` : 'none',
            transformOrigin: 'top center',
          }}
        >
          <div className="row-columns-grid">
            
            {/* =========================================================
             * LEFT COLUMN: Category Index, Heading, Description & CTA
             * ========================================================= */}
            <div className="col-category-info">
              <div className="category-eyebrow-line">
                <span className="eyebrow-num">{section.number}</span>
                <span className="eyebrow-divider">——</span>
                <span className="eyebrow-cat-name">{section.category}</span>
              </div>

              <h2 className="category-display-heading">
                <span className="heading-part-1">{section.headingLine1}</span>
                <span className="heading-part-2">{section.headingLine2}</span>
              </h2>

              <p className="category-lead-desc">
                {section.description}
              </p>

              {/* Desktop CTA buttons */}
              <div className="category-cta-group desktop-cta-group">
                <button
                  type="button"
                  className="circular-arrow-cta-btn"
                  aria-label={`Open ${activeProject.title}`}
                  onClick={() => onSelectProject(activeProject)}
                >
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <button
                  type="button"
                  className="view-projects-pill-btn"
                  onClick={() => onSelectProject(activeProject)}
                >
                  <span>VIEW PROJECTS</span>
                </button>
              </div>

              {/* Desktop bottom tags */}
              <div className="category-tags-bottom desktop-tags-bottom">
                <span>{section.tags.join('  ·  ')}</span>
              </div>
            </div>

            {/* =========================================================
             * CENTER COLUMN: 3D Floating Perspective Mockup Preview
             * ========================================================= */}
            <div className="col-center-preview">
              <div 
                className="perspective-mockup-wrapper"
                onClick={() => onSelectProject(activeProject)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectProject(activeProject);
                  }
                }}
                role="button"
                tabIndex={0}
                title={`Click to preview ${activeProject.title}`}
              >
                <div className="perspective-device-frame">
                  {/* Gloss reflection overlay */}
                  <div className="perspective-gloss-sheen" />

                  {/* Render the high-definition project cover screenshot */}
                  <div className="perspective-mockup-body">
                    {activeProject.coverImg || activeProject.thumbnailImg ? (
                      <img 
                        src={activeProject.coverImg || activeProject.thumbnailImg} 
                        alt={activeProject.title}
                        className="perspective-cover-full-img"
                        decoding="async"
                      />
                    ) : (
                      <ProjectMockup project={activeProject} isExpanded={false} />
                    )}
                  </div>
                </div>
              </div>

              {/* Mockup Metadata Bar */}
              <div className="mockup-meta-strip">
                <div className="meta-left-info">
                  <span className="meta-project-title">{activeProject.title}</span>
                  <span className="meta-project-subtitle">
                    {activeProject.subtitle || activeProject.client || activeProject.description}
                  </span>
                </div>
                <div 
                  className="meta-right-year"
                  onClick={() => onSelectProject(activeProject)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectProject(activeProject);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <span>{activeProject.year || '2026'}</span>
                  <span className="meta-year-arrow">↗</span>
                </div>
              </div>
            </div>

            {/* =========================================================
             * RIGHT COLUMN: Index Counter, Up/Down Nav, & Thumbnail Stack
             * ========================================================= */}
            <div className="col-right-selector">
              {/* Top Index & Controls */}
              <div className="selector-top-header">
                <span className="selector-counter-label">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
                <div className="selector-nav-arrows">
                  <button
                    type="button"
                    className="selector-arrow-btn"
                    onClick={handlePrev}
                    aria-label="Previous project in section"
                  >
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 8L6 4L10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="selector-arrow-btn"
                    onClick={handleNext}
                    aria-label="Next project in section"
                  >
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Stack of Thumbnails */}
              <div className="selector-thumbnails-stack">
                {projects.map((proj, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={proj.id}
                      type="button"
                      className={`thumbnail-nav-item ${isActive ? 'is-active-thumb' : ''}`}
                      onClick={() => setActiveIndex(idx)}
                      title={`Select ${proj.title}`}
                    >
                      <div className="thumb-item-text">
                        <span className="thumb-item-title">
                          {proj.title}
                        </span>
                      </div>
                      <div className="thumb-item-preview-box">
                        {getThumbnailSnippet(proj)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
