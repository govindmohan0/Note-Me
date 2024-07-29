import React from 'react';
import './Card.css';

const Card = ({ icon, title, description, link }) => {
  return (
    <a href={link} className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
    </a>
  );
};

export default Card;
