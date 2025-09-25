import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/cyber-association-logo.png" alt="Cybersecurity Association" />
        </div>
        <div className="footer-info">
          <p className="footer-text">
            Cybersecurity Association, Inc.<br />
            10440 Little Patuxent Pkwy 12th Floor<br />
            Columbia, MD 21044<br />
            Phone: 443-853-1970<br />
            Email: info@cyber-association.com
          </p>
          <div className="footer-links">
            <a href="http://cyber-association.com" target="_blank" rel="noopener noreferrer">Visit Our Website</a>
            <a href="http://cyber-association.com/become-member" target="_blank" rel="noopener noreferrer">Become a Member</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Cybersecurity Association. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
