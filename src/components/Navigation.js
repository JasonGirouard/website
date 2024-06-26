// Navigation.js
import React from 'react';
import '../App.css';
import './Navigation.css';

const Navigation = ({ onWorkClick, onAboutClick, onContactClick }) => {
  return (
    <nav className="navigation">
      <button onClick={onWorkClick}>Work</button>
      <button onClick={onAboutClick}>About</button>
      <button onClick={onContactClick}>Contact</button>
    </nav>
  );
};

export default Navigation;
