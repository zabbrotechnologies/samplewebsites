import React, { useState, useEffect } from 'react';
import ProjectMockup from './ProjectMockup';
import LumoraLivingStore from '../projects/ecommerce/lumora-living/LumoraLivingStore';

export default function ProjectViewer({ project, projects, onClose, onNavigateProject }) {
  const [viewportMode, setViewportMode] = useState('desktop'); // desktop | tablet | mobile
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Keyboard navigation & Escape to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, projects]);

  const currentIndex = projects.findIndex((p) => p.id === project.id);

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + projects.length) % projects.length;
    onNavigateProject(projects[prevIdx]);
    setIframeLoaded(false);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % projects.length;
    onNavigateProject(projects[nextIdx]);
    setIframeLoaded(false);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const openInNewTab = () => {
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Viewport width styling
  const getViewportWidth = () => {
    switch (viewportMode) {
      case 'mobile':
        return '390px';
      case 'tablet':
        return '768px';
      default:
        return '100%';
    }
  };

  return (
    <div className="verhost-project-viewer-modal" role="dialog" aria-modal="true">
      <div className="viewer-backdrop" onClick={onClose} />

      <div className="viewer-modal-window">
        {/* Top Control Toolbar */}
        <header className="viewer-toolbar">
          {/* Left: Project Identity */}
          <div className="viewer-toolbar-left">
            <span className="viewer-index-label">[{project.number}]</span>
            <h2 className="viewer-project-title">{project.title}</h2>
            <span className="viewer-category-tag">{project.category}</span>
          </div>

          {/* Center: Device Viewport Controls */}
          <div className="viewer-toolbar-center">
            <div className="device-switcher-pill" role="radiogroup" aria-label="Viewport Size">
              <button
                type="button"
                className={`device-btn ${viewportMode === 'desktop' ? 'active' : ''}`}
                onClick={() => setViewportMode('desktop')}
                title="Desktop View (100%)"
              >
                <span>Desktop</span>
              </button>
              <button
                type="button"
                className={`device-btn ${viewportMode === 'tablet' ? 'active' : ''}`}
                onClick={() => setViewportMode('tablet')}
                title="Tablet View (768px)"
              >
                <span>Tablet</span>
              </button>
              <button
                type="button"
                className={`device-btn ${viewportMode === 'mobile' ? 'active' : ''}`}
                onClick={() => setViewportMode('mobile')}
                title="Mobile View (390px)"
              >
                <span>Mobile</span>
              </button>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="viewer-toolbar-right">
            <button
              type="button"
              className="viewer-nav-btn"
              onClick={handlePrev}
              title="Previous Project (←)"
            >
              ←
            </button>
            <button
              type="button"
              className="viewer-nav-btn"
              onClick={handleNext}
              title="Next Project (→)"
            >
              →
            </button>

            {project.demoUrl && (
              <button
                type="button"
                className="viewer-action-btn"
                onClick={openInNewTab}
                title="Open Live Website in New Tab"
              >
                ↗
              </button>
            )}

            <button
              type="button"
              className="viewer-action-btn"
              onClick={toggleFullscreen}
              title="Toggle Fullscreen"
            >
              ⛶
            </button>

            <button
              type="button"
              className="viewer-close-btn"
              onClick={onClose}
              title="Close Viewer (Esc)"
            >
              ✕
            </button>
          </div>
        </header>

        {/* Viewport Display Area */}
        <div className="viewer-viewport-stage">
          <div
            className="viewer-container-frame"
            style={{ width: getViewportWidth() }}
          >
            {project.demoUrl ? (
              <div className="viewer-iframe-wrapper">
                {!iframeLoaded && (
                  <div className="viewer-loading-skeleton">
                    <div className="loading-spinner" />
                    <span>Loading Live Website Experience...</span>
                  </div>
                )}
                <iframe
                  src={project.demoUrl}
                  title={project.title}
                  className="viewer-live-iframe"
                  onLoad={() => setIframeLoaded(true)}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            ) : project.id === 'lumora-living' ? (
              /* LUMORA LIVING: Full Interactive Website Experience */
              <div className="viewer-store-scroll-container">
                <LumoraLivingStore />
                <div className="prototype-specs-drawer lumora-specs-drawer">
                  <div className="spec-item">
                    <span className="spec-label">CLIENT / PRACTICE</span>
                    <span className="spec-val">{project.client}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">YEAR</span>
                    <span className="spec-val">{project.year}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">DELIVERABLES</span>
                    <span className="spec-val">{project.deliverables?.join(', ')}</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Fallback for projects with prototypes pending live build */
              <div className="viewer-prototype-wrapper">
                <div className="prototype-status-banner">
                  <span className="pulse-green-dot" />
                  <span>Interactive High-Fidelity Prototype • Live Website Integration Coming Soon</span>
                </div>
                <div className="prototype-mockup-container">
                  <ProjectMockup project={project} isExpanded={true} />
                </div>
                <div className="prototype-specs-drawer">
                  <div className="spec-item">
                    <span className="spec-label">CLIENT / PRACTICE</span>
                    <span className="spec-val">{project.client}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">YEAR</span>
                    <span className="spec-val">{project.year}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">DELIVERABLES</span>
                    <span className="spec-val">{project.deliverables?.join(', ')}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
