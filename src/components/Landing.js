// Landing.js
import React from 'react';
import '../App.css';
import './Landing.css';
import faceColorImage from '../images/face_light.PNG';
import BulletPoints from './BulletPoints';

const Landing = () => {
  return (
    <div className="landing">
    <div className="landing-text">
      <h2>Jason Girouard</h2>
      <h1>I'm a <strong className="highlight">product manager</strong> passionate about crafting <strong className="highlight">elegant solutions</strong> to complex problems and <strong className="highlight">leading teams</strong> to enable a product's success.</h1>
      {/* <p className="subtext">Product Strategy • User Research • Design • Development • Leadership</p> */}
      <BulletPoints />
    </div>
    <div className="landing-image">
      <img src={faceColorImage} alt="Jason Girouard" className="framed-image" />
    </div>
  </div>
  );
};

export default Landing;