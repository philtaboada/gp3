import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Vamos a crear algo asombroso con GPT-4 de OpenAI</h1>
      <p>Aun así, una cama para cualquier tipo de asistencia en viajes resulta desagradable. No todos los pensamientos son una bendición al ejercicio. La indulgencia es la manera en que todo cambio alegre altera la animación de la conexión. Enfiestamos durante años para permitir que nos pregunten.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Dirección de correo electronico" />
        <button type="button">Empecemos</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 personas solicitaron acceso a una visita en las últimas 24 horas.</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
