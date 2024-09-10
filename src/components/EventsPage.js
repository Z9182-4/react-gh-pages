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
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    imageUrl: "sample2.jpg",
    linkUrl: "/events/event2"
  },
  {
    title: "Event 3",
    description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    imageUrl: "sample3.jpg",
    linkUrl: "/events/event3"
  },
  {
    title: "Event 4",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    imageUrl: "sample4.jpg",
    linkUrl: "/events/event4"
  }
];


function EventsPage() {
  return (
    <div className="events-page-container">
      {eventsData.map((event) => (
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
            <div>Past Event 1</div>
            <p>Description for Past Event 1</p>
            <a href="#">View More</a>
          </div>
          <div className="past-event-card">
            <div>Past Event 2</div>
            <p>Description for Past Event 2</p>
            <a href="#">View More</a>
          </div>
          <div className="past-event-card">
            <div>Past Event 3</div>
            <p>Description for Past Event 3</p>
            <a href="#">View More</a>
          </div>
          <div className="past-event-card">
            <div>Past Event 4</div>
            <p>Description for Past Event 4</p>
            <a href="#">View More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
