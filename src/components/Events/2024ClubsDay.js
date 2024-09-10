import React from 'react';
import '../../css/Events/2024ClubsDay.css'; 

function ClubsDay2024() {
  return (
    <div className="clubs-day-container">
      <h1>Clubs Day</h1>
      <h2>2024 FALL</h2>
      <img src={require('../../images/sample1.png')} alt="Clubs Day 2024" className="clubs-day-image" />
      <div className="clubs-day-time">
        <p>Time: September 9, 10am - 3pm</p>
        <div className="clubs-day-spacing"></div>  
        <p>Location: A Foyer</p>
      </div>
      <div className="clubs-day-description">
        <p>
          Join us for the 2024 Fall Clubs Day! This event is a great opportunity to explore a variety of clubs, 
          meet new people, and find a community that shares your interests. Whether you're into arts, 
          technology, or culture, there's a club for you. Don't miss this chance to be part of something exciting 
          and enrich your college experience!
        </p>
      </div>
      <div className="clubs-day-link">
        <a href="https://langara.ca/news-and-events/events-calendar/240910-bts-clubs-day.html" target="_blank" rel="noopener noreferrer">
          Langara Clubs Day
        </a>
      </div>
    </div>
  );
}

export default ClubsDay2024;
