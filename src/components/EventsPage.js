import React from 'react';
import Event from './Event'; 
import '../css/Events.css';

export const eventsData = [
  {
    title: "CLUBS DAY 2024 FALL",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "sample1.png",
    linkUrl: "/events/event1" 
  },
  {
    title: "Event 2",
    description: "TBA",
    imageUrl: "sample2.png",
    linkUrl: "/events/event2"
  },
  {
    title: "Event 3",
    description: "TBA",
    imageUrl: "sample3.png",
    linkUrl: "/events/event3"
  },
  {
    title: "Event 4",
    description: "TBA",
    imageUrl: "sample4.png",
    linkUrl: "/events/event4"
  }
];

function EventsPage() {
  return (
    <div className="events-page-container">
      <h2 className="section-title">Ongoing Event</h2>
      <Event 
        title={eventsData[0].title} 
        description={eventsData[0].description} 
        imgSrc={require(`../images/${eventsData[0].imageUrl}`)} 
        linkUrl={eventsData[0].linkUrl}  
      />

      <h2 className="section-title">Future Events</h2>
      {eventsData.slice(1).map((event) => (
        <Event 
          key={event.title} 
          title={event.title} 
          description={event.description} 
          imgSrc={require(`../images/${event.imageUrl}`)} 
          linkUrl={event.linkUrl}  
        />
      ))}

      <div className="past-events-container">
        <div className="past-events-title">Past Events</div>
        <div className="past-events-grid">
          <div className="past-event-card">
            <div>Event 1</div>
            <p>Description for Past Event 1</p>
            <a href="#">View More</a>
          </div>
          <div className="past-event-card">
            <div>Event 2</div>
            <p>Description for Past Event 2</p>
            <a href="#">View More</a>
          </div>
          <div className="past-event-card">
            <div>Event 3</div>
            <p>Description for Past Event 3</p>
            <a href="#">View More</a>
          </div>
          <div className="past-event-card">
            <div>Event 4</div>
            <p>Description for Past Event 4</p>
            <a href="#">View More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
