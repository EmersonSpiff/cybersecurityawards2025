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
                <h4><a href="https://epochinc.com" target="_blank" rel="noopener noreferrer">Epoch, Inc.</a></h4>
              </div>
              <div className="nominee-card">
                <h4><a href="https://hoppersecurity.com" target="_blank" rel="noopener noreferrer">Hopper Security</a></h4>
              </div>
              <div className="nominee-card">
                <h4><a href="https://minervacyber.com" target="_blank" rel="noopener noreferrer">Minerva Cyber Technologies</a></h4>
              </div>
              <div className="nominee-card">
                <h4><a href="https://pixee.co" target="_blank" rel="noopener noreferrer">Pixee</a></h4>
              </div>
              <div className="nominee-card">
                <h4><a href="https://redzonetech.com" target="_blank" rel="noopener noreferrer">RedZone Technologies</a></h4>
              </div>
            </div>
          </div>

          <div className="category">
            <h3 className="category-title">Cybersecurity Defender of the Year Award</h3>
            <div className="nominees-grid">
              <div className="nominee-card">
                <h4><a href="https://eplus.com" target="_blank" rel="noopener noreferrer">ePlus, Inc.</a></h4>
              </div>
              <div className="nominee-card">
                <h4><a href="https://redzonetech.com" target="_blank" rel="noopener noreferrer">RedZone Technologies</a></h4>
              </div>
              <div className="nominee-card">
                <h4><a href="https://sharkstriker.com" target="_blank" rel="noopener noreferrer">SharkStriker, Inc.</a></h4>
              </div>
            </div>
          </div>

          <div className="category">
            <h3 className="category-title">Changemaker of the Year Award</h3>
            <div className="nominees-grid">
              <div className="nominee-card">
                <h4><a href="https://ardentprivacy.com" target="_blank" rel="noopener noreferrer">Ardent Privacy</a></h4>
              </div>
              <div className="nominee-card">
                <h4><a href="https://camelotsecure.com" target="_blank" rel="noopener noreferrer">Camelot Secure</a></h4>
              </div>
              <div className="nominee-card">
                <h4><a href="https://defenseinterns.org" target="_blank" rel="noopener noreferrer">Defense Interns</a></h4>
              </div>
            </div>
          </div>

          <div className="category">
            <h3 className="category-title">Cybersecurity Innovation of the Year Award</h3>
            <div className="nominees-grid">
              <div className="nominee-card">
                <h4><a href="https://camelotsecure.com" target="_blank" rel="noopener noreferrer">Camelot Secure</a></h4>
              </div>
              <div className="nominee-card">
                <h4><a href="https://hoppersecurity.com" target="_blank" rel="noopener noreferrer">Hopper Security</a></h4>
              </div>
              <div className="nominee-card">
                <h4><a href="https://x-phy.com" target="_blank" rel="noopener noreferrer">X-PHY, Inc.</a></h4>
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
                <h4><a href="https://breakpointlabs.com" target="_blank" rel="noopener noreferrer">BreakPoint Labs</a></h4>
              </div>
              <div className="nominee-card">
                <h4><a href="https://btssoftwaresolutions.com" target="_blank" rel="noopener noreferrer">BTS Software Solutions</a></h4>
              </div>
              <div className="nominee-card">
                <h4><a href="https://digiflight.com" target="_blank" rel="noopener noreferrer">DigiFlight</a></h4>
              </div>
              <div className="nominee-card">
                <h4><a href="https://itegrity.com" target="_blank" rel="noopener noreferrer">Itegrity, Inc.</a></h4>
              </div>
              <div className="nominee-card">
                <h4><a href="https://realmone.com" target="_blank" rel="noopener noreferrer">RealmOne</a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nominees;
