import React from 'react';
import './Sponsors.css';

const Sponsors: React.FC = () => {
  return (
    <section className="sponsors" id="sponsors">
      <div className="sponsors-content">
        <h2 className="sponsors-title">Our Sponsors</h2>
        <p className="sponsors-intro">
          We are grateful to our sponsors for their support in making the 9th Annual Cybersecurity Awards possible.
        </p>
        
        <div className="sponsor-categories">
          <div className="sponsor-category">
            <h3 className="category-title">Title Sponsor</h3>
            <div className="sponsor-grid">
              <div className="sponsor-card">
                <div className="sponsor-logo">
                  <img src="/sponsors/title-sponsor.png" alt="Title Sponsor" />
                </div>
              </div>
            </div>
          </div>

          <div className="sponsor-category">
            <h3 className="category-title">Red Carpet</h3>
            <div className="sponsor-grid">
              <div className="sponsor-card">
                <div className="sponsor-logo">
                  <img src="/sponsors/red-carpet-1.png" alt="Red Carpet Sponsor 1" />
                </div>
              </div>
              <div className="sponsor-card">
                <div className="sponsor-logo">
                  <img src="/sponsors/red-carpet-2.png" alt="Red Carpet Sponsor 2" />
                </div>
              </div>
            </div>
          </div>

          <div className="sponsor-category">
            <h3 className="category-title">Spotlight Sponsor</h3>
            <div className="sponsor-grid">
              <div className="sponsor-card">
                <div className="sponsor-logo">
                  <img src="/sponsors/spotlight-sponsor.png" alt="Spotlight Sponsor" />
                </div>
              </div>
            </div>
          </div>

          <div className="sponsor-category">
            <h3 className="category-title">Media</h3>
            <div className="sponsor-grid">
              <div className="sponsor-card">
                <div className="sponsor-logo">
                  <img src="/sponsors/media-sponsor.png" alt="Media Sponsor" />
                </div>
              </div>
            </div>
          </div>

          <div className="sponsor-category">
            <h3 className="category-title">Centerpiece Sponsor</h3>
            <div className="sponsor-grid">
              <div className="sponsor-card">
                <div className="sponsor-logo">
                  <img src="/sponsors/centerpiece-sponsor.png" alt="Centerpiece Sponsor" />
                </div>
              </div>
            </div>
          </div>

          <div className="sponsor-category">
            <h3 className="category-title">Best of Awards</h3>
            <div className="sponsor-grid">
              <div className="sponsor-card">
                <div className="sponsor-logo">
                  <img src="/sponsors/best-of-sponsor.png" alt="Best of Awards Sponsor" />
                </div>
              </div>
            </div>
          </div>

          <div className="sponsor-category">
            <h3 className="category-title">Backstage</h3>
            <div className="sponsor-grid">
              <div className="sponsor-card">
                <div className="sponsor-logo">
                  <img src="/sponsors/backstage-1.png" alt="Backstage Sponsor 1" />
                </div>
              </div>
              <div className="sponsor-card">
                <div className="sponsor-logo">
                  <img src="/sponsors/backstage-2.png" alt="Backstage Sponsor 2" />
                </div>
              </div>
              <div className="sponsor-card">
                <div className="sponsor-logo">
                  <img src="/sponsors/backstage-3.png" alt="Backstage Sponsor 3" />
                </div>
              </div>
              <div className="sponsor-card">
                <div className="sponsor-logo">
                  <img src="/sponsors/backstage-4.png" alt="Backstage Sponsor 4" />
                </div>
              </div>
              <div className="sponsor-card">
                <div className="sponsor-logo">
                  <img src="/sponsors/backstage-5.png" alt="Backstage Sponsor 5" />
                </div>
              </div>
              <div className="sponsor-card">
                <div className="sponsor-logo">
                  <img src="/sponsors/backstage-6.png" alt="Backstage Sponsor 6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
