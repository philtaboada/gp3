import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Solicita Acceso Temprano para Empezar</h4>
      <h1 className="gradient__text">Las posibilidades están más <br />allá de tu imaginación</h1>
      <p>Explorando horizontes ilimitados, te sumergirás en un universo de oportunidades que superan tu imaginación, impulsando tu creatividad.</p>
      <h4>Solicita Acceso Temprano para Empezar</h4>
    </div>
  </div>
);

export default Possibility;
