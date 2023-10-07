import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">¿Quieres adelantarte al futuro antes que otros?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Solicitar Acceso Temprano</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Jr San Roque s/n, <br /> Todos los derechos reservados</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Redes Sociales</p>
        <p>Contadores</p>
        <p>Contacto</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Compania</h4>
        <p>Terminos y Condiciones </p>
        <p>Politica de privacidad</p>
        <p>Contáctanos</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Jr San Roque S/N Perú-Chiclayo</p>
        <p>085-132567</p>
        <p>info@gp3.net</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>© 2021 GPT-3. Todos los derechos reservados.</p>
    </div>
  </div>
);

export default Footer;
