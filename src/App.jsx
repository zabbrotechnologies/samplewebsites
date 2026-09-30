import React, { useState, useMemo } from 'react';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import ProjectShowcase from './components/ProjectShowcase';
import ProjectViewer from './components/ProjectViewer';
import StartProject from './components/StartProject';
import { projects } from './data/projects';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewerProject, setViewerProject] = useState(null);
  const [viewMode, setViewMode] = useState('zigzag'); // 'zigzag' or 'grid'

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return projects;
    }
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleSelectCategory = (catId) => {
    setActiveCategory(catId);
  };

  return (
    <div className="standalone-showcase-root">
      {/* Standalone Header / Hero with VERHOST Theme */}
      <Hero />

      {/* Category Pill Navigation */}
      <CategoryNav
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        totalCount={filteredProjects.length}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      {/* Demo Showcase Cards */}
      <main id="works-showcase-main">
        <ProjectShowcase
          projects={filteredProjects}
          viewMode={viewMode}
          onSelectProject={(project) => setViewerProject(project)}
          onResetFilter={() => setActiveCategory('all')}
        />
      </main>

      {/* Start Project CTA */}
      <StartProject />

      {/* Immersive Project Viewer Modal */}
      {viewerProject && (
        <ProjectViewer
          project={viewerProject}
          onClose={() => setViewerProject(null)}
        />
      )}
    </div>
  );
}
