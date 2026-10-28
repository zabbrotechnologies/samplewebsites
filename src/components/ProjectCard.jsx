import React from 'react';
import ProjectMockup from './ProjectMockup';

export default function ProjectCard({
  project,
  isExpanded,
  onMouseEnter,
  onSelectProject,
}) {
  const { title, year, category, description, deliverables, number } = project;

  const handleClick = (e) => {
    e.stopPropagation();
    onSelectProject(project);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelectProject(project);
    }
  };

  return (
    <article
      className={`showcase-project-card ${isExpanded ? 'is-expanded' : 'is-compact'}`}
      onMouseEnter={onMouseEnter}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-label={`Project ${number}: ${title}, ${category}`}
    >
      <div className="card-inner-surface">
        {/* Left / Primary Area: Miniature Website Preview */}
        <div className="card-mockup-wrapper">
          <ProjectMockup project={project} isExpanded={isExpanded} />

          {/* Compact bottom metadata strip */}
          <div className="card-compact-footer">
            <div className="compact-title-group">
              <span className="compact-number">[{number}]</span>
              <h3 className="compact-title">{title}</h3>
            </div>
            <div className="compact-meta-group">
              <span className="compact-year">{year}</span>
              <span className="compact-arrow">↗</span>
            </div>
          </div>
        </div>

        {/* Right / Expanding Drawer: Retained in DOM for ultra-smooth 60fps CSS animation */}
        <div className="card-expanded-drawer">
          <div className="drawer-header">
            <div className="drawer-tags">
              <span className="drawer-category-pill">{category}</span>
              <span className="drawer-year-pill">{year}</span>
            </div>
            <span className="drawer-index-badge">[{number} / 20]</span>
          </div>

          <div className="drawer-body">
            <h3 className="drawer-project-title">{title}</h3>
            <p className="drawer-description">{description}</p>

            {deliverables && deliverables.length > 0 && (
              <div className="drawer-deliverables-list">
                {deliverables.map((item, idx) => (
                  <span key={idx} className="drawer-deliverable-item">
                    <span className="deliverable-bullet">•</span> {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="drawer-footer">
            <button
              type="button"
              className="drawer-launch-btn"
              onClick={handleClick}
              aria-label={`View project ${title}`}
            >
              <span>VIEW PROJECT</span>
              <span className="btn-arrow">↗</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
