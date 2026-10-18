import React from 'react';
import { applySlashRule, applyGlyphInversion } from '../utils/textUtils';
import StructuralNode from './StructuralNode';
import PendulumBadge from './PendulumBadge';
import './Stage4About.css';

const SOCIAL = {
  github: 'https://github.com/MuhammadQasimWassay',
  instagram: 'https://www.instagram.com/shiekh__qasim?rpxt=MTFteWJuMDhqNXk2cA%3D%3D&utm_source=qr',
};

const Stage4About = () => {
  return (
    <section className="stage-4-about section-transition-contrast" id="about-hero">
      <div className="about-safe safe-area">
        <StructuralNode size={14} color="#000" className="about-node" />
        <div className="about-title-block">
          <h2 className="about-title display-text">
            {applySlashRule('ABOUT')} {applyGlyphInversion('QASIM')}
          </h2>
          <div className="about-social-tier">
            <span className="social-label mono-label">DOWNLOAD RESUME</span>
            <a href="/Muhammad%20Qasim%20Wassay-%20palacement%20CV.pdf" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Download resume">
              <img src="/resume-business-cv-work-job-curriculum-2-svgrepo-com.svg" alt="" className="social-icon" loading="lazy" decoding="async" aria-hidden="true" />
            </a>
            <span className="social-label mono-label">CONNECT WITH ME</span>
            <div className="social-row about-social-row">
              <a href={SOCIAL.github} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <img src="/icons/github-logo.svg" alt="" className="social-icon" loading="lazy" decoding="async" aria-hidden="true" />
              </a>
              <a href="mailto:mwassay02@qub.ac.uk" className="social-link" aria-label="Email">
                <img src="/mail-svgrepo-com.svg" alt="" className="social-icon" loading="lazy" decoding="async" aria-hidden="true" />
              </a>
              <a href={SOCIAL.instagram} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/instagram-logo-facebook-2-svgrepo-com.svg" alt="" className="social-icon" loading="lazy" decoding="async" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <PendulumBadge />
    </section>
  );
};

export default Stage4About;
