// App.js
import React, { useRef } from 'react';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Work from './components/Work';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const App = () => {
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navigation 
        onWorkClick={() => scrollTo(workRef)}
        onAboutClick={() => scrollTo(aboutRef)}
        onTestimonialsClick={() => scrollTo(testimonialsRef)}
        onContactClick={() => scrollTo(contactRef)}
      />
      <div className="container">
        <Landing />
        <div className="section-divider"></div>
        <div ref={workRef}><Work /></div>
        <div className="section-divider"></div>
        <div ref={aboutRef}><About /></div>
        <div className="section-divider"></div>
        <div ref={testimonialsRef}><Testimonials /></div>
        <div className="section-divider"></div>
        <div ref={contactRef}><Contact /></div>
        
      </div>
    </div>
  );
};

export default App;