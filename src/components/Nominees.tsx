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
            <h3 className="category-title">Cybersecurity Champion of the Year Award</h3>
            <div className="nominees-grid">
              <div className="nominee-card">
                <h4>Chris Breeden</h4>
                <p>University of Baltimore</p>
              </div>
              <div className="nominee-card">
                <h4>Dave Brown</h4>
                <p>Andesite</p>
              </div>
              <div className="nominee-card">
                <h4>James Crifasi</h4>
                <p>RedZone Technologies</p>
              </div>
              <div className="nominee-card">
                <h4>Dr. Darren Death</h4>
                <p>Export-Import Bank of the United States</p>
              </div>
              <div className="nominee-card">
                <h4>Kat Poff</h4>
                <p>CISO/Deputy Director of Technology Services, Calvert County Government</p>
              </div>
            </div>
          </div>

          <div className="category">
            <h3 className="category-title">Cybersecurity Company to Watch Award</h3>
            <div className="nominees-grid">
              <div className="nominee-card">
                <h4>Epoch, Inc.</h4>
              </div>
              <div className="nominee-card">
                <h4>Hopper Security</h4>
              </div>
              <div className="nominee-card">
                <h4>Minerva Cyber Technologies</h4>
              </div>
              <div className="nominee-card">
                <h4>Pixee</h4>
              </div>
              <div className="nominee-card">
                <h4>RedZone Technologies</h4>
              </div>
            </div>
          </div>

          <div className="category">
            <h3 className="category-title">Cybersecurity Defender of the Year Award</h3>
            <div className="nominees-grid">
              <div className="nominee-card">
                <h4>ePlus, Inc.</h4>
              </div>
              <div className="nominee-card">
                <h4>RedZone Technologies</h4>
              </div>
              <div className="nominee-card">
                <h4>SharkStriker, Inc.</h4>
              </div>
            </div>
          </div>

          <div className="category">
            <h3 className="category-title">Changemaker of the Year Award</h3>
            <div className="nominees-grid">
              <div className="nominee-card">
                <h4>Ardent Privacy</h4>
              </div>
              <div className="nominee-card">
                <h4>Camelot Secure</h4>
              </div>
              <div className="nominee-card">
                <h4>Defense Interns</h4>
              </div>
            </div>
          </div>

          <div className="category">
            <h3 className="category-title">Cybersecurity Innovation of the Year Award</h3>
            <div className="nominees-grid">
              <div className="nominee-card">
                <h4>Camelot Secure</h4>
              </div>
              <div className="nominee-card">
                <h4>Hopper Security</h4>
              </div>
              <div className="nominee-card">
                <h4>X-PHY, Inc.</h4>
              </div>
            </div>
          </div>

          <div className="category">
            <h3 className="category-title">Cyber Warrior Woman Award</h3>
            <div className="nominees-grid">
              <div className="nominee-card">
                <h4>Kat Poff</h4>
                <p>CISO/Deputy Director of Technology Services, Calvert County Government</p>
              </div>
              <div className="nominee-card">
                <h4>Sara Ricci</h4>
                <p>Founder, Risk and Resilience Practice Head, Transcend Advisory and Consulting</p>
              </div>
              <div className="nominee-card">
                <h4>Netta Squires</h4>
                <p>President of Government Affairs, Cybersecurity & Resilience, Open District Solutions</p>
              </div>
            </div>
          </div>

          <div className="category">
            <h3 className="category-title">Government Contractor of the Year</h3>
            <div className="nominees-grid">
              <div className="nominee-card">
                <h4>BreakPoint Labs</h4>
              </div>
              <div className="nominee-card">
                <h4>BTS Software Solutions</h4>
              </div>
              <div className="nominee-card">
                <h4>DigiFlight</h4>
              </div>
              <div className="nominee-card">
                <h4>Itegrity, Inc.</h4>
              </div>
              <div className="nominee-card">
                <h4>RealmOne</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nominees;
