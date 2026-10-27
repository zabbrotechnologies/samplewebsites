import React, { useState, useEffect, useRef } from 'react';

export default function ProjectViewer({ project, projects = [], onClose, onNavigateProject }) {
  const [deviceMode, setDeviceMode] = useState(() => {
    return typeof window !== 'undefined' && window.innerWidth <= 768 ? 'mobile' : 'desktop';
  });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const stageRef = useRef(null);

  // Find index for Prev / Next navigation
  const currentIndex = projects.findIndex((p) => p.id === project?.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < projects.length - 1;

  const handlePrev = () => {
    if (hasPrev && onNavigateProject) {
      setIsLoading(true);
      onNavigateProject(projects[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (hasNext && onNavigateProject) {
      setIsLoading(true);
      onNavigateProject(projects[currentIndex + 1]);
    }
  };

  useEffect(() => {
    setIsLoading(true);
  }, [project?.id]);

  useEffect(() => {
    window.history.pushState({ projectViewerOpen: true }, '');

    const handlePopState = () => {
      onClose();
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        } else {
          handleManualClose();
        }
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, currentIndex]);

  const handleManualClose = () => {
    if (window.history.state?.projectViewerOpen) {
      window.history.back();
    } else {
      onClose();
    }
  };

  const toggleFullscreen = () => {
    if (!stageRef.current) return;

    if (!document.fullscreenElement) {
      stageRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.warn('Fullscreen request failed:', err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {});
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  if (!project) return null;

  return (
    <div className="viewer-backdrop" role="dialog" aria-modal="true" aria-label={`Preview of ${project.title}`}>
      {/* Visually quiet top chrome */}
      <header className="viewer-chrome">
        <div className="viewer-meta-left">
          {projects.length > 1 && onNavigateProject && (
            <div className="viewer-nav-arrows">
              <button
                type="button"
                className="viewer-nav-btn"
                onClick={handlePrev}
                disabled={!hasPrev}
                title="Previous project (←)"
                aria-label="Previous project"
              >
                &larr;
              </button>
              <button
                type="button"
                className="viewer-nav-btn"
                onClick={handleNext}
                disabled={!hasNext}
                title="Next project (→)"
                aria-label="Next project"
              >
                &rarr;
              </button>
            </div>
          )}

          <div className="viewer-title-group">
            <span className="viewer-project-title">{project.title}</span>
            <span className="viewer-project-cat">{project.categoryLabel}</span>
          </div>
        </div>

        {/* Viewport switchers */}
        <div className="viewer-controls-center" role="group" aria-label="Device Viewport Switcher">
          <button
            type="button"
            className={`device-btn ${deviceMode === 'desktop' ? 'active' : ''}`}
            onClick={() => setDeviceMode('desktop')}
            title="Desktop View"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span>Desktop</span>
          </button>

          <button
            type="button"
            className={`device-btn ${deviceMode === 'tablet' ? 'active' : ''}`}
            onClick={() => setDeviceMode('tablet')}
            title="Tablet View (768px)"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
            <span>Tablet</span>
          </button>

          <button
            type="button"
            className={`device-btn ${deviceMode === 'mobile' ? 'active' : ''}`}
            onClick={() => setDeviceMode('mobile')}
            title="Mobile View (390px)"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
            <span>Mobile</span>
          </button>
        </div>

        {/* Action controls */}
        <div className="viewer-actions-right">
          <button
            type="button"
            className="viewer-action-btn"
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
            <span>{isFullscreen ? 'Exit Full' : 'Fullscreen'}</span>
          </button>

          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="viewer-action-btn"
            title="Open live site in new window"
          >
            <span>Open in Tab</span>
            <span>↗</span>
          </a>

          <button
            type="button"
            className="viewer-close-btn"
            onClick={handleManualClose}
            aria-label="Close Viewer"
            title="Close Viewer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      {/* Main stage with live website */}
      <div className="viewer-stage" ref={stageRef}>
        <div className={`viewer-frame-wrapper mode-${deviceMode}`}>
          {isLoading && (
            <div className="viewer-loading-overlay">
              <div className="viewer-spinner"></div>
              <span className="viewer-loading-text">Connecting to {project.title}...</span>
            </div>
          )}
          <iframe
            key={project.id}
            src={project.demoUrl}
            title={`${project.title} Live Preview`}
            className="viewer-live-iframe"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}
