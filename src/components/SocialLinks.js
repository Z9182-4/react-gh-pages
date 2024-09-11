import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
const socialLinks = [
  { name: 'Discord', icon: faDiscord, url: 'https://discord.com/invite/DiscordUser' },
  { name: 'Instagram', icon: faInstagram, url: 'https://instagram.com/InstagramUser' },
  { name: 'Twitter', icon: faTwitter, url: 'https://twitter.com/TwitterUser' },
  { name: 'LinkedIn', icon: faLinkedinIn, url: 'https://linkedin.com/in/LinkedInUser' },
  { name: 'Email', icon: faEnvelope, url: 'mailto:contact@example.com' }
];

const SocialLinks = () => {
  return (
    <section className="social-links-container">
      {socialLinks.map((link, index) => (
        <div key={index}>
          <p><FontAwesomeIcon icon={link.icon} /> {link.name}</p>
          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
        </div>
      ))}
    </section>
  );
};

export default SocialLinks;
