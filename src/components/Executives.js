import React from 'react';

const executives = [
  { name: 'DEMO1', title: 'President' },
  { name: 'DEMO2', title: 'Vice President' },
  { name: 'DEMO3', title: 'Treasurer' },
  { name: 'DEMO4', title: 'Secretary' },
];

const Executives = ({ onExecutiveClick }) => {
  return (
    <div>
      <h2>Executives</h2>
      <ul>
        {executives.map((executive, index) => (
          <li key={index}>
            <button 
              onClick={() => onExecutiveClick(executive)}
              className="executive-link"
            >
              <strong>{executive.name}</strong>
            </button> - {executive.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Executives;
