import React, { useState, useEffect, useRef } from 'react';

export default function ProjectViewer({ project, onClose }) {
  const [deviceMode, setDeviceMode] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
  const [isFullscreen, setIsFullscreen] = useState(false);
  const stageRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

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
          <span className="viewer-project-title">{project.title}</span>
          <span className="viewer-project-cat">{project.categoryLabel}</span>
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
            title="Open in new window"
          >
            <span>Open in Tab</span>
            <span>↗</span>
          </a>

          <button
            type="button"
            className="viewer-close-btn"
            onClick={onClose}
            aria-label="Close Viewer"
          >
            &times;
          </button>
        </div>
      </header>

      {/* Main stage with live website */}
      <div className="viewer-stage" ref={stageRef}>
        <div className={`viewer-frame-wrapper mode-${deviceMode}`}>
          <iframe
            src={project.demoUrl}
            title={`${project.title} Live Preview`}
            className="viewer-live-iframe"
          />
        </div>
      </div>
    </div>
  );
}
