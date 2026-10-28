import React from 'react';
import ProjectMockup from './ProjectMockup';

export default function ProjectCard({
  project,
  isExpanded,
  onMouseEnter,
  onSelectProject,
}) {
  const { title, year, category, description, number } = project;

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
      className={`verhost-project-item ${isExpanded ? 'is-expanded-item' : 'is-compact-item'}`}
      onMouseEnter={onMouseEnter}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-label={`Project ${number}: ${title}, ${category}`}
    >
      {/* COMPACT STATE VIEW */}
      {!isExpanded && (
        <div className="compact-item-surface">
          {/* Rounded Preview Container */}
          <div className="compact-preview-frame">
            <ProjectMockup project={project} isExpanded={false} />
          </div>

          {/* Metadata Row below preview */}
          <div className="compact-meta-row">
            <span className="compact-item-title">{title}</span>
            <div className="compact-item-right">
              <span className="compact-item-year">{year}</span>
              <span className="compact-item-arrow">↗</span>
            </div>
          </div>
        </div>
      )}

      {/* EXPANDED HOVER STATE VIEW (Matching reference Livora/Nexora/Synthora) */}
      {isExpanded && (
        <div className="expanded-card-capsule">
          {/* Left Side (approx 62%): Large Landscape Website Preview */}
          <div className="expanded-preview-zone">
            <ProjectMockup project={project} isExpanded={true} />
          </div>

          {/* Right Side (approx 38%): Project Information */}
          <div className="expanded-info-zone">
            {/* Top dash indicator */}
            <div className="expanded-dash-bar">
              <span className="info-dash">—</span>
            </div>

            {/* Title & Category Badge */}
            <div className="expanded-title-group">
              <h3 className="expanded-project-name">{title}</h3>
              <span className="expanded-category-badge">[ {category} ]</span>
            </div>

            {/* Description */}
            <p className="expanded-project-desc">{description}</p>

            {/* Bottom Actions: Green VIEW PROJECT button & Year */}
            <div className="expanded-action-row">
              <button
                type="button"
                className="expanded-view-button"
                onClick={handleClick}
              >
                <span>VIEW PROJECT</span>
                <span className="button-arrow">↗</span>
              </button>
              <span className="expanded-year-label">{year}</span>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
