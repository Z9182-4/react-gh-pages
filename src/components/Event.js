// src/components/Event.js
import React from 'react';

function Event({ number, title, description, imgSrc }) {
  return (
    <div className="event">
      <h2>{number}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={imgSrc} alt={title} />
    </div>
  );
}

export default Event;
