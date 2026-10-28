import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="verhost-editorial-footer">
      <div className="footer-container">
        <div className="footer-top-row">
          <div className="footer-brand-column">
            <span className="footer-wordmark">VERHOST</span>
            <p className="footer-description">
              Bespoke digital design studio crafting high-end digital experiences, design systems, and web architecture.
            </p>
          </div>
          <div className="footer-nav-column">
            <span className="footer-col-title">ARCHIVE SECTIONS</span>
            <a href="#section-ecommerce">01 E-Commerce</a>
            <a href="#section-business">02 Business Websites</a>
            <a href="#section-landing">03 Landing Pages</a>
            <a href="#section-portfolio">04 Portfolio Websites</a>
            <a href="#section-creative">05 Creative & Web Experiences</a>
          </div>
          <div className="footer-contact-column">
            <span className="footer-col-title">INQUIRIES</span>
            <p>hello@verhost.studio</p>
            <p>New York • London • Chennai</p>
            <button type="button" className="footer-back-to-top" onClick={scrollToTop}>
              BACK TO TOP ↑
            </button>
          </div>
        </div>
        <div className="footer-bottom-row">
          <span>© 2026 VERHOST Digital Works. All rights reserved.</span>
          <span>Designed & Engineered for Visual Distinction.</span>
        </div>
      </div>
    </footer>
  );
}
