const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contenedor-logo-redes">
          <div className="logo">
            <img
              src="images/logo-footer.png"
              alt="Logo SOS Animal Fray Bentos"
              className="logo-img"
            />
            <div className="logo-text">
              <h1>
                SOS Animal
                <br />
                Fray Bentos
              </h1>
              <p>Porque cada vida importa, luchamos por ellos</p>
            </div>
            <button className="btn-primary btn-text">Adopciones</button>
            <button className="btn-secondary">Donaciones</button>
          </div>
          <div className="redes">
    <div className="contact-info">
        <h2>Sigamos en contacto</h2>
        <div className="social-icons">
            <a href="#"><i className="fa fa-envelope"></i></a>
            <a href="#"><i className="fa fa-whatsapp"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-youtube"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
        </div>
    </div>
    <div className="contact-buttons">
        <button className="btn-contact"><img src="images/mail-footer.png" alt="Correo electrónico" /></button>
        <button className="btn-contact"><img src="images/whatsapp-footer.png" alt="Whatsapp" /></button>
        <button className="btn-contact"><img src="images/youtube-footer.png" alt="YouTube" /></button>
        <button className="btn-contact"><img src="images/facebook-footer.png" alt="Facebook" /></button>
        <button className="btn-contact"><img src="images/instagram-footer.png" alt="Instagram" /></button>
    </div>
</div>

        </div>
        <div className="navegacion-general">
          <a href="#">Inicio</a>
          <a href="#">¿Cómo colaborar?</a>
          <a href="#">Información útil</a>
          <a href="#">Sobre nosotros</a>
          <a href="#">Adopciones</a>
        </div>
        <div className="ayuda">
          <h2>AYUDA</h2>
          <a href="#">Preguntas frecuentes</a>
          <a href="#">Números de emergencia</a>
        </div>
        <div className="ubicacion-derecho">
          <p>Fray Bentos, Río Negro, Uruguay</p>
          <p>2023 @ SOS Animal. All rights reserved</p>
          <p>Mountief font designed by FREEPIK</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
