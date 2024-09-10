import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../images/logo.png'; 
import '../css/Header.css';

const Header = () => {
  const location = useLocation();
  const googleFormLink = "YOUR_GOOGLE_FORM_LINK_HERE";  

  const isActive = (path) => {
    return location.pathname === path ? 'link-active' : 'link-default';
  };

  const getHeaderContent = () => {
  switch (location.pathname) {
    case '/':
      return { title: ['Langara', 'Language', 'Learning', 'Association'], description: 'Welcome to LLLA' };
    case '/about':
      return { title: ['About'], description: 'Learn More About LLLA' };
    case '/events':
      return { title: ['Events'], description: 'Explore Our Events' };
    case '/contact':
      return { title: ['Contact'], description: 'Get in Touch With Us' };
    default:
      return { title: [''], description: '' };
  }
};

  const { title, description } = getHeaderContent();

  return (
    <header className="header-container">
  <div className="logo-container">
    <Link to="/" className="logo">
      <img src={logoImage} alt="LLLC" />  
    </Link>
  </div>
  <nav>
    <ul>
      <li><Link to="/" className={isActive('/')}>Home</Link></li>
      <li><Link to="/about" className={isActive('/about')}>About</Link></li>
      <li><Link to="/events" className={isActive('/events')}>Events</Link></li>
      <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
    </ul>
  </nav>
  <div className="cta-container">
    <a href="https://your-google-form-link.com" className="cta-button">Join Us</a>
  </div>
  <div className="header-content">
        {title.map((word, index) => (
  <h1 key={index} className={`header-title ${word.toLowerCase() === 'langara' ? 'langara' : ''}`}>
    {word}
  </h1>
))}

        <p className="header-description">{description}</p>
      </div>
</header>

  );
};

export default Header;
