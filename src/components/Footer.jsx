import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  const location = useLocation();

  const handleNavLinkClick = (destination) => (e) => {
    if (location.pathname === destination) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }
    
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-content">
            <div className="contenedor-logo-redes">
              <div className="logo">
                <img
                  src="images/logo-footer.svg"
                  alt="Logo SOS Animal Fray Bentos"
                  className="logo-img"
                  loading="lazy"
                />
                <div className="logo-text">
                  <p className='name'>
                    SOS Animal
                    <br />
                    Fray Bentos
                  </p>
                </div>
              </div>
              <div className="redes">
                <div className="contact-info">
                  <p className='contact-title'>Sigamos en contacto</p>
                  <div className="social-icons">
                    <a
                      href="mailto:animalsos2020@gmail.com"
                      className="btn-contact"
                    >
                      <img
                        src="images/mail-footer.svg"
                        alt="Correo electrónico"
                      />
                    </a>
                    <a
                      href="https://wa.me/59892336700"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-contact"
                    >
                      <img src="images/whatsapp-footer.svg" alt="Whatsapp" />
                    </a>
                    <a
                      href="https://www.youtube.com/@sosanimal2438"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-contact"
                    >
                      <img src="images/youtube-footer.svg" alt="YouTube" />
                    </a>
                    <a
                      href="https://www.facebook.com/SOSAnimalFrayBentos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-contact"
                    >
                      <img src="images/facebook-footer.svg" alt="Facebook" />
                    </a>
                    <a
                      href="https://www.instagram.com/sos_animal_2020/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-contact"
                    >
                      <img src="images/instagram-footer.svg" alt="Instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
          <div className="navegacion-general">
            <div className="navegacion-CTA">
              <p>Porque cada vida importa, luchamos por ellos</p>
              <Link to="/adoptions" className="btn-primary">Adopciones</Link>
              <Link to="/collaborations#donaciones" className="btn-secondary" scroll={el => scrollWithOffset(el)}>Donaciones</Link>
            </div>
            <div className="navegacion-enlaces">
              <Link to="/" onClick={handleNavLinkClick('/')}>
                Inicio 
                <svg className="icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_3417_24546)">
                    <path d="M2.76379 11.2352L11.2344 2.76465M11.2344 2.76465L11.2344 10.7646M11.2344 2.76465L3.23437 2.76465" stroke="#2BAE30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_3417_24546">
                      <rect width="14" height="14" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link to="/collaborations" onClick={handleNavLinkClick('/collaborations')}>
                ¿Cómo colaborar? 
                <svg className="icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_3417_24546)">
                    <path d="M2.76379 11.2352L11.2344 2.76465M11.2344 2.76465L11.2344 10.7646M11.2344 2.76465L3.23437 2.76465" stroke="#2BAE30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_3417_24546">
                      <rect width="14" height="14" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link to="/contact" onClick={handleNavLinkClick('/contact')}>
                Información útil 
                <svg className="icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_3417_24546)">
                    <path d="M2.76379 11.2352L11.2344 2.76465M11.2344 2.76465L11.2344 10.7646M11.2344 2.76465L3.23437 2.76465" stroke="#2BAE30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_3417_24546">
                      <rect width="14" height="14" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link to="/about" onClick={handleNavLinkClick('/about')}>
                Sobre nosotros 
                <svg className="icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_3417_24546)">
                    <path d="M2.76379 11.2352L11.2344 2.76465M11.2344 2.76465L11.2344 10.7646M11.2344 2.76465L3.23437 2.76465" stroke="#2BAE30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_3417_24546">
                      <rect width="14" height="14" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link to="/adoptions" onClick={handleNavLinkClick('/adoptions')}>
                Adopciones 
                <svg className="icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_3417_24546)">
                    <path d="M2.76379 11.2352L11.2344 2.76465M11.2344 2.76465L11.2344 10.7646M11.2344 2.76465L3.23437 2.76465" stroke="#2BAE30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_3417_24546">
                      <rect width="14" height="14" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
            <div className="navegacion-ayuda">
              <p>AYUDA</p>
              <div className="enlaces-ayuda">
                <Link to="/contact#faq" scroll={el => scrollWithOffset(el)}>Preguntas frecuentes</Link>
                <Link to="/contact#emergencias" scroll={el => scrollWithOffset(el)}>Números de emergencia</Link>
                <Link to="/about#charlas" scroll={el => scrollWithOffset(el)}>Charlas educativas</Link>
              </div>
            </div>
            <div className="redes-mobile">
                <div className="contact-info">
                  <p className='contact-title'>Sigamos en contacto</p>
                  <div className="social-icons">
                    <a
                      href="mailto:animalsos2020@gmail.com"
                      className="btn-contact"
                    >
                      <img
                        src="images/mail-footer.svg"
                        alt="Correo electrónico"
                      />
                    </a>
                    <a
                      href="https://wa.me/59892336700"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-contact"
                    >
                      <img src="images/whatsapp-footer.svg" alt="Whatsapp" />
                    </a>
                    <a
                      href="https://www.youtube.com/@sosanimal2438"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-contact"
                    >
                      <img src="images/youtube-footer.svg" alt="YouTube" />
                    </a>
                    <a
                      href="https://www.facebook.com/SOSAnimalFrayBentos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-contact"
                    >
                      <img src="images/facebook-footer.svg" alt="Facebook" />
                    </a>
                    <a
                      href="https://www.instagram.com/sos_animal_2020/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-contact"
                    >
                      <img src="images/instagram-footer.svg" alt="Instagram" />
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="ubicacion-derechos">
          <div className="ubicacion">
            <p>Fray Bentos, Río Negro, Uruguay</p>
            <p>
              <img
                src="images/perro-mini.svg"
                alt="Perro mini"
                className="perro-mini"
                loading="lazy"
              />
            </p>
          </div>
          <div className="derechos">
            <p>2024 @ SOS Animal. All rights reserved</p>
            <div className="creditos">
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
          </div>
      </div>
    </footer>
  );
};
  
  export default Footer;  