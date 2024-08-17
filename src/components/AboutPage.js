import React, { useState } from 'react';
import ExecutiveInfoModal from './ExecutiveInfoModal';
import SocialLinks from './SocialLinks';
import '../css/AboutPage.css';
import '../css/Executives.css';

const executives = [
  { name: 'DEMO1', position: 'President', description: 'DEMO1 is the president of the Langara Language Learning Club.' },
  { name: 'DEMO2', position: 'Vice President', description: 'DEMO2 is the vice president of the Langara Language Learning Club.' },
  { name: 'DEMO3', position: 'Treasurer', description: 'DEMO3 is the treasurer of the Langara Language Learning Club.' },
  { name: 'DEMO4', position: 'Secretary', description: 'DEMO3 is the Secretary of the Langara Language Learning Club.' },
];

const AboutPage = () => {
  const [selectedExecutive, setSelectedExecutive] = useState(null);

  const handleExecutiveClick = (executive) => {
    setSelectedExecutive(executive);
  };

  const closeModal = () => {
    setSelectedExecutive(null);
  };

  return (
    <div className="about-page">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Langara Language Learning Club is committed to helping members learn and master multiple languages. 
        </p>
        <p>
          Our goal is to create a dynamic and supportive learning environment to help everyone achieve their language learning goals.
        </p>
        <h2>Executives</h2>
        <ul>
          {executives.map((executive, index) => (
            <li key={index}>
              <button onClick={() => handleExecutiveClick(executive)} className="executive-button">
                {executive.name}
              </button> - {executive.position}
            </li>
          ))}
        </ul>
      </div>
      <ExecutiveInfoModal
        isOpen={!!selectedExecutive}
        onRequestClose={closeModal}
        executive={selectedExecutive}
      />
    </div>
  );
};

export default AboutPage;