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
            <div className="footer-brand-lockup">
              <img
                src="/verhost-logo.png"
                alt="VERHOST Logo"
                className="footer-logo-img"
              />
              <span className="footer-wordmark">VERHOST</span>
            </div>
            <p className="footer-pillars-line">AI • DATA • WEB • CREATIVE • CLOUD</p>
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
            <span className="footer-col-title footer-connect-title">CONNECT WITH VERHOST</span>
            <div className="footer-social-links">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <span>Instagram</span>
                <span className="social-arrow">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <span>LinkedIn</span>
                <span className="social-arrow">↗</span>
              </a>
              <a
                href="https://github.com/zabbrotechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <span>GitHub</span>
                <span className="social-arrow">↗</span>
              </a>
            </div>
            <button type="button" className="footer-back-to-top" onClick={scrollToTop}>
              <span>BACK TO TOP</span>
              <span className="arrow-up-symbol">↑</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <span>© 2026 VERHOST. ALL RIGHTS RESERVED.</span>
          <span>ROOTED IN VALUES. CONNECTED TO POSSIBILITIES.</span>
        </div>
      </div>
    </footer>
  );
}
