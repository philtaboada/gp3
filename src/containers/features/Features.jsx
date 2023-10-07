import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Mejorando, desconfianzas al instante.',
    text: 'Transformando la Desconfianza en Confianza: Un Viaje de Mejora Constante y Decisiones Instantáneas',
  },
  {
    title: 'Conviértete en el activo atendido.',
    text: 'Descubre tu potencial y crece, conviértete en el activo que siempre has deseado ser, mereces atención.',
  },
  {
    title: 'Mensaje o no soy nada.',
    text: 'La comunicación es mi esencia; sin ella, soy insignificante en un mundo lleno de conexiones significativas',
  },
  {
    title: 'De verdad, chico, ley del condado.',
    text: 'Explorando la Realidad Rural: La Vida, las Leyes y la Autenticidad en el Corazón del Condado.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">El futuro es ahora y solo necesitas darte cuenta. ¡Da un paso hacia el futuro hoy y hazlo realidad!</h1>
      <p>Solicita Acceso Temprano para Empezar</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
