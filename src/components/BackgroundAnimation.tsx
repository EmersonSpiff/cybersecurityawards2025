import React from 'react';
import './BackgroundAnimation.css';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="background-container">
      {/* Dark background with purple gradient */}
      <div className="background-base">
        <div className="gradient-overlay"></div>
      </div>
      
      {/* Golden flowing lines */}
      <div className="golden-lines">
        <div className="line-group line-group-1">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      
      {/* Golden particles */}
      <div className="particles-container">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className={`particle particle-${i + 1}`}
            style={{
              animationDelay: `${Math.random() * 3}s`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundAnimation;
