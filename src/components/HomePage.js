import React from 'react';
import { eventsData } from './EventsPage';  
import { Link } from 'react-router-dom';  
import '../css/HomePage.css';

function HomePage() {
  const featuredEvents = eventsData.slice(0, 3); 

  return (
    <div className="home-page">
      <header className="home-page-header">
  <br/><br/>
</header>


      
      
      <div className="home-background">
        <div className="home-content">
          <div className="home-events-display">
            <h2 className="home-page-heading">Featured Events</h2>
            {featuredEvents.map(event => (
              <div key={event.title} className="home-event-card">
                <img src={require(`../images/${event.imageUrl}`)} alt={event.title} className="home-event-image" />
                <div className="home-event-info">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <Link to={event.linkUrl} className="home-learn-more">Learn More</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="home-our-section">
            <div className="home-our-vision-mission">
              <img src={require('../images/homejoin.jpg')} alt="Our Vision" className="home-our-image" />
              <div className="home-our-text">
                <h2>Why Join Us</h2>
                <p>We aim to create a vibrant, inclusive community where learners of all levels collaborate to enhance their language skills and cultural understanding.</p>
              </div>
            </div>
            
            <div className="home-benefits-section">
              <div className="home-benefit-card">
                <h3> Language Resources</h3>
                <p>Access curated resources for a wide range of languages to enhance your learning experience.</p>
              </div>
              <div className="home-benefit-card">
                <h3> Weekly beat tsun up Sessions</h3>
                <p>Join our engaging weekly online/in-person practice sessions to improve fluency and connect with other learners.</p>
              </div>
              <div className="home-benefit-card">
                <h3>Benefit 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ultrices sapien, non eleifend odio. Nam consectetur arcu et tellus congue porta.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-container">
        <div className="background-image"></div>
      </div>
    </div>
  );
}

export default HomePage;
