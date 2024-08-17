import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import EventsPage from './components/EventsPage';
import ContactPage from './components/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />  
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />  
      </div>
    </Router>
  );
}

export default App;
