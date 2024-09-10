import React from 'react';
import SocialLinks from './SocialLinks'; 
import '../css/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <div className="social-links-container">
        <SocialLinks />
      </div>
      
      <div className="contact-form-container">
    <form>
        <label htmlFor="name">Full Name *</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email *</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message *</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
    </form>
</div>

    </div>
  );
};

export default ContactPage;
