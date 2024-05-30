import { NavLink, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import ButtonSecondary from './ButtonSecondary';
import 'animate.css';

const Navbar = () => {
  const [, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsClose(isOpen);
  };

  const location = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
    handleCloseMenu(); 

    scrollToTop();
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleNavLinkClick = (destination) => {
    if (location.pathname === destination) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      handleCloseMenu();
    }
  };
  
  return (
    <header>
      <nav className='navbar'>
        <Link to="/" onClick={() => handleNavLinkClick('/')}>
          <img
            src="/logo.svg"
            alt="Logo SOS Animal Fray Bentos"
          />
        </Link>

        <ul className={`navbar-links ${isOpen ? "is-open animate__animated animate__fadeInDown" : ""} ${isClose ? "is-open animate__animated animate__fadeOutUp" : ""}`}>
          <li className={`${location.pathname === '/' ? 'active' : ''} `}>
            <NavLink to="/" onClick={() => handleNavLinkClick('/')}>
              Inicio
              <svg className="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.636 14.3638L14.3639 1.6359M14.3639 1.6359V13.6567M14.3639 1.6359H2.34311" stroke="#0B0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NavLink>
          </li>
          <li className={`${location.pathname === '/collaborations' ? 'active' : ''}`}>
            <NavLink to="/collaborations" onClick={() => handleNavLinkClick('/collaborations')}>
              ¿Cómo colaborar?
              <svg className="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.636 14.3638L14.3639 1.6359M14.3639 1.6359V13.6567M14.3639 1.6359H2.34311" stroke="#0B0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NavLink>
          </li>
          <li className={`${location.pathname === '/contact' ? 'active' : ''} `}>
            <NavLink to="/contact" onClick={() => handleNavLinkClick('/contact')}>
            Información útil
            <svg className="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.636 14.3638L14.3639 1.6359M14.3639 1.6359V13.6567M14.3639 1.6359H2.34311" stroke="#0B0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </NavLink>
          </li>
          <li className={`${location.pathname === '/about' ? 'active' : ''}`}>
            <NavLink to="/about" onClick={() => handleNavLinkClick('/about')}>
              Sobre nosotros
              <svg className="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.636 14.3638L14.3639 1.6359M14.3639 1.6359V13.6567M14.3639 1.6359H2.34311" stroke="#0B0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink to="/adoptions" onClick={() => handleNavLinkClick('/adoptions')}>
              <ButtonSecondary text="Adopciones" />
            </NavLink>
          </li>      
        </ul>
        <div className='container-tablet'>
          <NavLink className="btn-adoptions-tablet" to="/adoptions" onClick={() => handleNavLinkClick('/adoptions')}>
            <ButtonSecondary text="Adopciones" />
          </NavLink>
          <button className={`hamburger hamburger--slider ${isOpen ? 'is-active' : ''}`} type="button" aria-label="Menu" aria-controls="navigation" onClick={toggleMenu}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;