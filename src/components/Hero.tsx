import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">
            Celebrating Excellence in
            <span className="highlight"> Cybersecurity</span>
          </h2>
          <p className="hero-subtitle">
            Join us in recognizing the outstanding achievements and innovations 
            in the field of cybersecurity. The 2025 awards ceremony promises to 
            showcase the brightest minds and most impactful solutions.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              View Awards
            </button>
            <button className="btn btn-secondary">
              Give Now
            </button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">12+</div>
            <div className="stat-label">Categories</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">35+</div>
            <div className="stat-label">Nominees</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Votes Cast</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
