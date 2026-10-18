import React from 'react';
import { Link } from 'react-router-dom';
import { applySlashRule, applyGlyphInversion } from '../utils/textUtils';
import './Stage7Contact.css';

const SOCIAL = {
  instagram: 'https://www.instagram.com/shiekh__qasim?rpxt=MTFteWJuMDhqNXk2cA%3D%3D&utm_source=qr',
};

const scrollToTop = (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = ({ onNavigate }) => {
  const handleNav = (path, hash) => (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path, hash);
    }
  };

  return (
    <div className="footer-fluid" style={{ position: 'relative', zIndex: 10 }}>
      <div className="footer-three-point safe-area">
        <span className="footer-copy mono-label">
          ©2026 {applyGlyphInversion('QASIM')}
        </span>
        <nav className="footer-nav">
          <Link to="/about" className="footer-nav-link mono-label" onClick={handleNav('/about')}>
            [ {applySlashRule('ABOUT ME')} ]
          </Link>
          <Link to="/#projects" className="footer-nav-link mono-label" onClick={handleNav('/', '#projects')}>
            [ {applySlashRule('ALL PROJECTS')} ]
          </Link>
          <a href={SOCIAL.instagram} className="footer-nav-link mono-label" target="_blank" rel="noopener noreferrer">
            [ LET&apos;S CONNECT ]
          </a>
        </nav>
        <button type="button" className="footer-top mono-label" onClick={scrollToTop}>
          BACK TO TOP
        </button>
      </div>
    </div>
  );
};

export default Footer;
