import React from 'react';
import SocialLinks from './SocialLinks'; // 确保路径正确
import '../css/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <div className="social-links-container">
        <SocialLinks />
      </div>
      <div className="contact-details">
        <p>100 West 49th Avenue,<br></br> Vancouver B.C.<br></br> Canada V5Y 2Z6</p>
        <p>PHONE: 778-123-4567</p>
      </div>
      
      <div className="contact-text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p> {/* 在这里添加了额外的文本段落 */}
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
