import React from 'react';
import ProjectRow from './ProjectRow';
import { SECTIONS } from '../data/projects';

export default function ProjectShowcase({ projects, onSelectProject }) {
  // Map projects by section slug
  const getSectionProjects = (slug) => {
    return projects.filter((p) => p.sectionSlug === slug);
  };

  return (
    <div className="verhost-gallery-container">
      {SECTIONS.map((section) => {
        const sectionProjects = getSectionProjects(section.slug);
        return (
          <ProjectRow
            key={section.slug}
            section={section}
            projects={sectionProjects}
            onSelectProject={onSelectProject}
          />
        );
      })}
    </div>
  );
}
