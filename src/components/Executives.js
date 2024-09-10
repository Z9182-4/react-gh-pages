import React from 'react';
import '../css/Executives.css';

const Executives = ({ executives, onExecutiveClick }) => {
  return (
    <div className="executives">
      {executives.map((executive, index) => (
        <div key={index} className="executive-item">
          <img src={executive.image} alt={executive.name} className="executive-photo" />
          <div className="executive-info">
            <button
              className="executive-button"
              onClick={() => onExecutiveClick(executive)}
            >
              <span className="executive-name">{executive.name}</span>
              <br/> 
              <span className="executive-position">{executive.position}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Executives;
