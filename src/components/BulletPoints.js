import React from 'react';
import { MapPin, Briefcase, Database, Code, PenTool, Footprints } from 'lucide-react';

const BulletPoints = () => {
  const bulletPoints = [
    { icon: <Briefcase size={20} />, text: 'Product Manager at Uber' },
    { icon: <MapPin size={20} />, text: 'Based in NYC. Previously, Chicago.' },
    { icon: <Code size={20} />, text: 'Weekend Software Craftsperson' },
    { icon: <PenTool size={20} />, text: 'Design enthusiast' },
    { icon: <Database size={20} />, text: 'Data background' },
    { icon: <Footprints size={20} />, text: 'Ultrarunner' },
  ];

  return (
    <ul className="bullet-points">
      {bulletPoints.map((point, index) => (
        <li key={index} className="bullet-point">
          <span className="bullet-icon">{point.icon}</span>
          <span className="bullet-text">{point.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default BulletPoints;