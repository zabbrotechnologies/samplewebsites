import React from 'react';

export default function Footer({ onOpenAbout, onOpenContact, onSelectCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-col-brand">
        <div className="footer-brand-title">VERHOST</div>
        <p className="footer-tagline">
          Independent digital studio crafting high-craft websites and art-directed digital experiences.
        </p>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} VERHOST Studio. All rights reserved.
        </div>
      </div>

      <div>
        <div className="footer-col-title">Index</div>
        <ul className="footer-links">
          <li>
            <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
              Top of Archive &uarr;
            </a>
          </li>
          <li>
            <button type="button" className="footer-link" onClick={() => onSelectCategory('ecommerce')}>
              E-Commerce
            </button>
          </li>
          <li>
            <button type="button" className="footer-link" onClick={() => onSelectCategory('landing')}>
              Landing
            </button>
          </li>
          <li>
            <button type="button" className="footer-link" onClick={() => onSelectCategory('interactive')}>
              Interactive
            </button>
          </li>
        </ul>
      </div>

      <div>
        <div className="footer-col-title">Studio</div>
        <ul className="footer-links">
          <li>
            <button type="button" className="footer-link" onClick={onOpenAbout}>
              About Us
            </button>
          </li>
          <li>
            <button type="button" className="footer-link" onClick={onOpenContact}>
              Contact &amp; Inquiries
            </button>
          </li>
          <li>
            <a href="mailto:commissions@verhost.studio" className="footer-link">
              commissions@verhost.studio
            </a>
          </li>
        </ul>
      </div>

      <div>
        <div className="footer-col-title">Offices</div>
        <div className="studio-locations">
          Z&uuml;rich &mdash; Talstrasse 14<br />
          Tokyo &mdash; Minami-Aoyama<br />
          London &mdash; Redchurch St.<br />
          New York &mdash; Mercer St.
        </div>
      </div>
    </footer>
  );
}
