import React from 'react';
import { eventsData } from './EventsPage';  
import { Link } from 'react-router-dom';  
import '../css/HomePage.css';

function HomePage() {
  const featuredEvents = eventsData.slice(0, 3); 

  return (
    <div className="home-page">
      <header className="home-page-header">
        <br/><br/><br/><br/><br/><br/><br/><br/>
      </header>

      <div className="background-container">
        <div className="background-image"></div>
      </div>
      
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ultrices sapien, non eleifend odio. Nam consectetur arcu et tellus congue porta. Vestibulum aliquet lectus non diam tincidunt, nec condimentum magna ultricies.</p>
                <a href="#" className="learn-more-link">Learn More</a>
              </div>
            </div>
            
            <div className="home-benefits-section">
              <div className="home-benefit-card">
                <h3>01</h3>
                <h4>Benefit 1</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ultrices sapien, non eleifend odio. Vestibulum aliquet lectus non diam tincidunt, nec condimentum magna ultricies.</p>
              </div>
              <div className="home-benefit-card">
                <h3>02</h3>
                <h4>Benefit 2</h4>
                <p>Lorem ipsum dolor sit amet, Vestibulum aliquet lectus non diam tincidunt, nec condimentum magna ultricies.</p>
              </div>
              <div className="home-benefit-card">
                <h3>03</h3>
                <h4>Benefit 3</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ultrices sapien, non eleifend odio. Nam consectetur arcu et tellus congue porta.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
