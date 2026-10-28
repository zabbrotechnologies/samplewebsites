import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectRow({ section, projects, onSelectProject }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleRowMouseLeave = () => {
    setExpandedIndex(null);
  };

  return (
    <div className="section-showcase-block" id={`section-${section.slug}`}>
      {/* Section Header */}
      <div className="section-header-bar">
        <div className="section-header-left">
          <span className="section-index-number">[{section.number}]</span>
          <h2 className="section-category-title">{section.category}</h2>
        </div>
        <div className="section-divider-line" />
        <div className="section-header-right">
          <span className="section-project-count">{section.count}</span>
        </div>
      </div>

      {/* 4-Item Horizontal Row with right-expanding flex physics */}
      <div 
        className="horizontal-projects-row"
        onMouseLeave={handleRowMouseLeave}
      >
        {projects.map((proj, idx) => (
          <ProjectCard
            key={proj.id}
            project={proj}
            isExpanded={expandedIndex === idx}
            onMouseEnter={() => setExpandedIndex(idx)}
            onSelectProject={onSelectProject}
          />
        ))}
      </div>
    </div>
  );
}
