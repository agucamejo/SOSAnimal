const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-content">
          <div className="contenedor-logo-redes">
            <div className="logo">
              <img
                src="images/logo-footer.png"
                alt="Logo SOS Animal Fray Bentos"
                className="logo-img"
              />
              <div className="logo-text">
                <h4>
                  SOS Animal
                  <br />
                  Fray Bentos
                </h4>
              </div>
            </div>
            <div className="redes">
              <div className="contact-info">
                <h2>Sigamos en contacto</h2>
                <div className="social-icons">
                  <a
                    href="mailto:animalsos2020@gmail.com"
                    className="btn-contact"
                  >
                    <img
                      src="images/mail-footer.png"
                      alt="Correo electrónico"
                    />
                  </a>
                  <a
                    href="https://wa.me/59892336700"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-contact"
                  >
                    <img src="images/whatsapp-footer.png" alt="Whatsapp" />
                  </a>
                  <a
                    href="https://www.youtube.com/@sosanimal2438"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-contact"
                  >
                    <img src="images/youtube-footer.png" alt="YouTube" />
                  </a>
                  <a
                    href="https://www.facebook.com/SOSAnimalFrayBentos/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-contact"
                  >
                    <img src="images/facebook-footer.png" alt="Facebook" />
                  </a>
                  <a
                    href="https://www.instagram.com/sos_animal_2020/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-contact"
                  >
                    <img src="images/instagram-footer.png" alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contenedor-info-navegacion">
            <div className="navegacion-CTA">
              <p>
                Porque cada vida importa, luchamos por ellos
              </p>
              <button className="btn-primary btn-text">Adopciones</button>
              <button className="btn-secondary">Donaciones</button>
            </div>
            <div className="navegacion-enlaces">
              <a href="#">
                Inicio <span className="arrow">↗</span>
              </a>
              <a href="#">
                ¿Cómo colaborar? <span className="arrow">↗</span>
              </a>
              <a href="#">
                Información útil <span className="arrow">↗</span>
              </a>
              <a href="#">
                Sobre nosotros <span className="arrow">↗</span>
              </a>
              <a href="#">
                Adopciones <span className="arrow">↗</span>
              </a>
            </div>
            <div className="navegacion-ayuda">
              <a>AYUDA</a>
              <a href="#">Preguntas frecuentes</a>
              <a href="#">Números de emergencia</a>
            </div>
          </div>
        </div>
        <div className="ubicacion-derecho">
          <p>Fray Bentos, Río Negro, Uruguay</p>
          <p>
            <img
              src="images/perro-mini.png"
              alt="Perro mini"
              className="perro-mini"
            />
          </p>
        </div>
      </div>
      <div className="footer-bottom-line">
        <p>2023 @ SOS Animal. All rights reserved</p>
        <p>
          Mountiel font designed by{" "}
          <a
            href="https://www.freepik.com"
            className="freepik"
            style={{ color: "$secondary-700" }}
          >
            FREEPIK
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
