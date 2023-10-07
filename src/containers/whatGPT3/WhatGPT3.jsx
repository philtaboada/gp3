import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Que es GPT-4" text="GPT-4, la cuarta generación de modelos de lenguaje desarrollados por OpenAI, es una avanzada inteligencia artificial capaz de comprender y generar texto con mayor precisión y coherencia. Se utiliza en diversas aplicaciones, desde procesamiento de lenguaje natural hasta creación de contenido y asistencia en tareas complejas." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Las posibilidades están más allá de tu imaginación</h1>
      <p>Explora la libreria</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Programa AI que dialoga con humanos por medio de textos para brindar información o ayuda automatizada." />
      <Feature title="Base de Conocimiento" text="GPT-4 aprovecha una amplia base de conocimiento para generar respuestas precisas y coherentes en diversas tareas del lenguaje." />
      <Feature title="Educación" text="GPT apoya la educación proporcionando información, tutoría virtual y generación de contenido educativo en diversas materias." />
    </div>
  </div>
);

export default WhatGPT3;
