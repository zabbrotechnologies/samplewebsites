import React from 'react';
import ProjectPiece from './ProjectPiece';

export default function ProjectShowcase({ projects, viewMode, onSelectProject, onResetFilter }) {
  if (projects.length === 0) {
    return (
      <div className="empty-filter-state">
        <h3 className="empty-filter-title">No works found in this archive.</h3>
        <p style={{ color: 'var(--text-secondary)' }}>
          Please select another category or return to all digital works.
        </p>
        <button
          type="button"
          className="empty-filter-btn"
          onClick={onResetFilter}
        >
          View All Works &rarr;
        </button>
      </div>
    );
  }

  return (
    <section id="works-section" className={`showcase-container view-${viewMode}`} aria-label="Digital Works Archive">
      {projects.map((project, index) => (
        <ProjectPiece
          key={project.id}
          project={project}
          index={index}
          viewMode={viewMode}
          onSelectProject={onSelectProject}
        />
      ))}
    </section>
  );
}
