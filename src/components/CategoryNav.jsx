import React from 'react';
import { CATEGORIES } from '../data/projects';

export default function CategoryNav({ activeCategory, onSelectCategory, totalCount, viewMode, onViewModeChange }) {
  return (
    <nav
      id="category-filter-nav"
      className="category-filter-wrapper"
      aria-label="Filter Projects by Category"
    >
      <div className="category-filter-inner">
        <ul className="category-pill-list">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <li key={cat.id}>
                <button
                  type="button"
                  id={`filter-cat-${cat.id}`}
                  data-category={cat.id}
                  className={`category-pill-btn ${isActive ? 'active' : ''}`}
                  onClick={() => onSelectCategory(cat.id)}
                  aria-pressed={isActive}
                >
                  {cat.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="category-actions-right">
          <div className="view-toggle">
            <button 
              className={`view-toggle-btn ${viewMode === 'zigzag' ? 'active' : ''}`}
              onClick={() => onViewModeChange('zigzag')}
              aria-label="Zigzag View"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            </button>
            <button 
              className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => onViewModeChange('grid')}
              aria-label="Grid View"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            </button>
          </div>
          <div className="category-meta-badge">
            <span className="meta-bracket">[</span>
            <span className="meta-count">{totalCount} {totalCount === 1 ? 'EXPERIENCE' : 'EXPERIENCES'}</span>
            <span className="meta-bracket">]</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
