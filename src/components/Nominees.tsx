import React from 'react';
import './Nominees.css';

const Nominees: React.FC = () => {
  return (
    <section className="nominees" id="nominees">
      <div className="nominees-content">
        <h2 className="nominees-title">2025 Nominees</h2>
        
        <div className="nominees-intro">
          <p>
            We are proud to present the outstanding nominees for the 2025 Cybersecurity Awards. 
            These individuals and organizations have demonstrated exceptional dedication, innovation, 
            and leadership in the field of cybersecurity.
          </p>
        </div>

        <div className="nominees-categories">
          <div className="category">
            <h3 className="category-title">Cybersecurity Woman of the Year</h3>
            <div className="nominees-grid">
              <div className="nominee-card">
                <h4>Nominee Name</h4>
                <p>Organization</p>
                <p>Brief description of achievements...</p>
              </div>
              <div className="nominee-card">
                <h4>Nominee Name</h4>
                <p>Organization</p>
                <p>Brief description of achievements...</p>
              </div>
              <div className="nominee-card">
                <h4>Nominee Name</h4>
                <p>Organization</p>
                <p>Brief description of achievements...</p>
              </div>
            </div>
          </div>

          <div className="category">
            <h3 className="category-title">Cybersecurity Company to Watch</h3>
            <div className="nominees-grid">
              <div className="nominee-card">
                <h4>Company Name</h4>
                <p>Industry</p>
                <p>Innovation description...</p>
              </div>
              <div className="nominee-card">
                <h4>Company Name</h4>
                <p>Industry</p>
                <p>Innovation description...</p>
              </div>
              <div className="nominee-card">
                <h4>Company Name</h4>
                <p>Industry</p>
                <p>Innovation description...</p>
              </div>
            </div>
          </div>

          <div className="category">
            <h3 className="category-title">Cybersecurity Innovation of the Year</h3>
            <div className="nominees-grid">
              <div className="nominee-card">
                <h4>Innovation Name</h4>
                <p>Organization</p>
                <p>Innovation details...</p>
              </div>
              <div className="nominee-card">
                <h4>Innovation Name</h4>
                <p>Organization</p>
                <p>Innovation details...</p>
              </div>
              <div className="nominee-card">
                <h4>Innovation Name</h4>
                <p>Organization</p>
                <p>Innovation details...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nominees;
