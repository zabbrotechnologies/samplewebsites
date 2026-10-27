import React, { useMemo } from 'react';
import ProjectSelectorRow from './ProjectSelectorRow';

export default function ProjectShowcase({ projects, onSelectProject, onResetFilter }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="empty-filter-state">
        <h3 className="empty-filter-title">No works found in this archive.</h3>
        <p style={{ color: 'var(--text-muted)' }}>
          Please select another category or return to the complete collection.
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

  // Chunk projects into rows of up to 4 items on desktop
  const rows = useMemo(() => {
    const chunked = [];
    for (let i = 0; i < projects.length; i += 4) {
      chunked.push({
        id: `row-${Math.floor(i / 4)}`,
        items: projects.slice(i, i + 4),
        startIndex: i,
      });
    }
    return chunked;
  }, [projects]);

  return (
    <section id="works-section" className="cinematic-showcase-section" aria-label="Digital Works Archive">
      <div className="cinematic-showcase-container">
        {rows.map((row, rowIdx) => (
          <div key={row.id} className="cinematic-shelf-group">
            {rows.length > 1 && (
              <div className="cinematic-shelf-header">
                <span className="shelf-index-bracket">[ SERIES {String(rowIdx + 1).padStart(2, '0')} ]</span>
                <span className="shelf-rule-line"></span>
                <span className="shelf-count-tag">{row.items.length} {row.items.length === 1 ? 'EXPERIENCE' : 'EXPERIENCES'}</span>
              </div>
            )}
            <ProjectSelectorRow
              projects={row.items}
              rowStartIndex={row.startIndex}
              onSelectProject={onSelectProject}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
