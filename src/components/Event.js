import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Events.css'; 

function Event({ title, description, imgSrc, linkUrl }) {
  return (
    <div className="event"> 
      <div className="event-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={linkUrl} className="learn-more">Learn More</Link>
      </div>
      <div className="event-image-container">
        <img src={imgSrc} alt={title} className="event-image" />
      </div>
    </div>
  );
}

export default Event;
