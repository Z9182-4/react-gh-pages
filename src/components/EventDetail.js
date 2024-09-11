import React from 'react';
import { useParams } from 'react-router-dom';
import { eventsData } from './EventsPage';  

function EventDetail() {
  const { eventId } = useParams(); 
  const event = eventsData.find(e => e.title.toLowerCase().replace(/\s+/g, '-') === eventId);  
  if (!event) return <p>Event not found</p>;

  return (
    <div className="event-detail">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <img src={require(`../images/${event.imageUrl}`)} alt={event.title} />
    </div>
  );
}

export default EventDetail;
