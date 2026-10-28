import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import ProjectViewer from './components/ProjectViewer';
import Footer from './components/Footer';
import { projects } from './data/projects';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="verhost-app-root">
      {/* Top Navigation */}
      <Navbar />

      {/* Editorial Typography Hero */}
      <Hero />

      {/* Main 20-Project Gallery Across 5 Sections */}
      <main id="works-gallery-start">
        <ProjectShowcase
          projects={projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Click-to-Open Website Previewer Modal */}
      {selectedProject && (
        <ProjectViewer
          project={selectedProject}
          projects={projects}
          onClose={() => setSelectedProject(null)}
          onNavigateProject={(newProj) => setSelectedProject(newProj)}
        />
      )}
    </div>
  );
}
