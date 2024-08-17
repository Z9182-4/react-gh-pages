import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Events.css'; 

function EventDetail({ title, description, imageUrl }) {
  return (
    <div className="event-detail">
        <div className="event-detail-content">
            <h2>{title}</h2>
            <p className="event-description">{description}</p>
            <Link to={`/events/${title.toLowerCase().replace(/\s+/g, '-')}`} className="view-more-link">View More</Link>
        </div>
        <div className="event-detail-image">
            <img src={require(`../images/${imageUrl}`)} alt={title} /> 
        </div>
    </div>
  );
}


export default EventDetail;
