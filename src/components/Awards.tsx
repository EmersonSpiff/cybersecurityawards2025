import React from 'react';
import './Awards.css';

const Awards: React.FC = () => {
  return (
    <section className="awards" id="awards">
      <div className="awards-content">
        <h2 className="awards-title">Welcome</h2>
        
        <div className="speakers-section">
          <h3 className="section-heading">Distinguished Speakers</h3>
          <ul className="speakers-list">
            <li>County Executive Marc Elrich, County Executive, Montgomery County</li>
            <li>Tasha Cornish, Executive Director, Cybersecurity Association</li>
            <li>Chuck Faughnan, CEO, Personam.ai</li>
            <li>Linda Conrad, SVP of Operational and Technical Risk, First Citizens Bank</li>
            <li>Kim Mentzell, Director of Cybersecurity and Lead for Emerging Technologies, Maryland Department of Commerce</li>
            <li>Sam Bell, CISO, Edwards Performance Solution</li>
          </ul>
        </div>

        <div className="regional-awards">
          <h3 className="section-heading">Regional Awards</h3>
          <ul className="awards-list">
            <li>Anne Arundel County</li>
            <li>Howard County</li>
            <li>Montgomery County</li>
          </ul>
        </div>

        <div className="red-carpet-awards">
          <h3 className="section-heading">Red Carpet Awards</h3>
          <ul className="awards-list">
            <li>Cybersecurity Woman of the Year</li>
            <li>Cybersecurity Defender of the Year</li>
            <li>Changemaker of the Year</li>
            <li>Cybersecurity Company to Watch</li>
            <li>Government Contractor of the Year</li>
            <li>Cybersecurity Champion of the Year</li>
            <li>Cybersecurity Innovation of the Year</li>
          </ul>
        </div>

        <div className="peoples-choice">
          <h3 className="section-heading">People's Choice Award</h3>
        </div>

        <div className="closing-remarks">
          <h3 className="section-heading">Closing Remarks</h3>
        </div>
      </div>
    </section>
  );
};

export default Awards;
