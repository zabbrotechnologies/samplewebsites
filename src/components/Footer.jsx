import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="verhost-editorial-footer">
      <div className="footer-inner-container">
        <div className="footer-top-row">
          <div className="footer-brand-column">
            <span className="footer-wordmark">VERHOST</span>
            <p className="footer-description">
              A curated digital works showcase presenting websites, interfaces, and bespoke interactive experiences created across modern industries.
            </p>
          </div>

          <div className="footer-nav-column">
            <span className="footer-col-title">ARCHIVE SECTIONS</span>
            <a href="#section-ecommerce">01 —— E-COMMERCE</a>
            <a href="#section-business">02 —— BUSINESS</a>
            <a href="#section-landing">03 —— LANDING PAGES</a>
            <a href="#section-portfolio">04 —— PORTFOLIO</a>
            <a href="#section-creative">05 —— CREATIVE</a>
            <a href="#section-interior">06 —— INTERIOR DESIGN</a>
          </div>

          <div className="footer-contact-column">
            <span className="footer-col-title">STUDIO INQUIRIES</span>
            <p className="footer-contact-email">hello@verhost.studio</p>
            <p className="footer-contact-cities">New York · London · Tokyo · Chennai</p>
            <button type="button" className="footer-back-to-top" onClick={scrollToTop}>
              <span>BACK TO TOP</span>
              <span className="arrow-up-symbol">↑</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <span>© 2026 VERHOST DIGITAL WORKS. ALL RIGHTS RESERVED.</span>
          <span>CURATED EDITORIAL DESIGN × CREATIVE WEB ENGINEERING</span>
        </div>
      </div>
    </footer>
  );
}
