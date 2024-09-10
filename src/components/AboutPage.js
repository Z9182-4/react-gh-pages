import React, { useState } from 'react';
import ExecutiveInfoModal from './ExecutiveInfoModal';
import Executives from './Executives';
import '../css/AboutPage.css';
import boy1 from '../images/Execs/boy1.png';
import boy2 from '../images/Execs/boy2.png';
import boy3 from '../images/Execs/boy3.png';
import boy4 from '../images/Execs/boy4.png';

const executives = [
  { name: 'DEMO1', position: 'President', image: boy1 },
  { name: 'DEMO2', position: 'Vice President', image: boy2 },
  { name: 'DEMO3', position: 'Treasurer', image: boy3 },
  { name: 'DEMO4', position: 'Secretary', image: boy4 },
];

const AboutPage = () => {
  const [selectedExecutive, setSelectedExecutive] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExecutiveClick = (executive) => {
    setSelectedExecutive(executive);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExecutive(null);
  };

  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-us">
          <h2>About Us</h2>
          <p>Langara Language Learning Association is committed to helping members learn and master multiple languages.</p>
          <p>We acknowledge that our learning  takes place on the unceded, ancestral, and traditional territory of the xʷməθkwəy ̓ əm (Musqueam people).</p>
        </div>
        <Executives executives={executives} onExecutiveClick={handleExecutiveClick} />
      </div>
      <ExecutiveInfoModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        executive={selectedExecutive}
      />
    </div>
  );
};

export default AboutPage;