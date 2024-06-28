import React from 'react';
import '../App.css';
import './About.css';
import AboutMeImage from '../images/torso_shot.png';
import { Linkedin, FileText, PenTool, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="about">
      {/* <h2>About Me</h2> */}
      <div className="about-content">
        <div className="about-text">
        <h2>About Me</h2>
          <p>
            I'm a product management leader with a track record of taking complex problems and finding creative, simple solutions. Over the past 5+ years at Uber Freight, I've led product development for teams improving user experiences and the technical platform for B2B and B2B2C businesses.
          </p>
          <p>
            Prior to being a product manager, I was a Product Operations Manager where I led product rollouts, and supported product development through data analysis and user research. I completed a web development bootcamp in 2020 and have built on the skills to launch both web and mobile apps (see TrainGang.com, Archie AI mobile app). In my free time, I've enjoyed ultra-running, and have used the long training runs to cover <a href="https://gothamist.com/news/who-runs-new-york-this-guy-and-a-few-others-walked-it-too" target="_blank" rel="noopener noreferrer" className="inline-link">every street in Manhattan</a>. Each year, I tend to do a 70.3 traithlon with friends.
          </p>
          <p>
            Above all, I believe product management is a team sport. The best part of my job is partnering with brilliant designers, engineers, analysts, and leaders to bring ideas to life.
          </p>
          <div className="about-links">
            <a href="https://drive.google.com/drive/folders/1O9BTGuD9fIBXAu2W_HMYSSTs0ix2myj_?usp=drive_link" target="_blank" rel="noopener noreferrer" className="about-link">
              <FileText size={20} />
              <span>Resume</span>
            </a>
            <a href="https://www.linkedin.com/in/jasongirouard/" target="_blank" rel="noopener noreferrer" className="about-link">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://medium.com/@jasontgirouard" target="_blank" rel="noopener noreferrer" className="about-link">
              <PenTool size={20} />
              <span>Medium</span>
            </a>

            <a className="about-link noclick">
              <Mail size={20} />
              <span>JasonTGirouard [@] gmail</span>
            </a>
          </div>
        </div>
        <div className="about-image">
          <img src={AboutMeImage} alt="Jason Girouard" className="framed-image" />
        </div>
      </div>
    </div>
  );
};

export default About;