import React, { useState, useEffect } from 'react';
import '../css/Footer.css';

function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 200);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <footer className="footer-container">
        <p>© 2024 LLLC</p>
      </footer>
      {showTopBtn && (
        <button className="back-to-top-btn" onClick={goToTop}>
          ↑
        </button>
      )}
    </>
  );
}

export default Footer;
