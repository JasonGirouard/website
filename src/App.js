// App.js
import React, { useRef } from 'react';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navigation 
        onWorkClick={() => scrollTo(workRef)}
        onAboutClick={() => scrollTo(aboutRef)}
        onContactClick={() => scrollTo(contactRef)}
      />
      <div className="container">
        <Landing />
        <div className="section-divider"></div>
        <div ref={workRef}><Work /></div>
        <div className="section-divider"></div>
        <div ref={aboutRef}><About /></div>
        <div className="section-divider"></div>
        <div ref={contactRef}><Contact /></div>
        <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vTI8BjKNiVJH_zKb7LlHkNly6PZpc5mq0ORi0_WV37sWKlW269m2en74l_9jaOuxlXAxPWVKNIKHyM1/pub?embedded=true"
            title="test title"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          ></iframe>
      </div>
    </div>
  );
};

export default App;