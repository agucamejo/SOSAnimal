import ButtonPrimary from '../ButtonPrimary';
import { HashLink as Link } from 'react-router-hash-link';

const Hero = () => {
  const iconCatDog = './icons/Cat&Dog.svg';
  const imgDogHero = './images/dog-hero.png';
  const imgSosHero = './images/sos-hero.png';
  
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }
  
  return (
    <div className="hero-section">
      <div className="hero-sos1">
        <img src={imgSosHero} alt="Imagen de SOS" className="sos-hero-img1" />
      </div>
      <div className="hero-description">
        <img
          src={iconCatDog}
          alt="Icono de gato y perro"
          className="icon-hero"
        />
        <h1>
          <span className="new-line">SOS Animal</span>{' '}
          <span className="new-line">Fray Bentos,</span>{' '}
          <span className="new-line">donde la empatía</span>{' '}
          <span className="new-line">se fortalece</span>
        </h1>
        <p>
          Invertimos cada recurso en el bienestar animal.
          Unite a nuestra causa y hacé posible más acciones solidarias.
        </p>
        <Link to="/collaborations#donaciones" scroll={el => scrollWithOffset(el)}><ButtonPrimary text="Donaciones"/></Link>
      </div>

      <div className="sos-dog">
        <div className="hero-sos">
          <img src={imgSosHero} alt="Imagen de SOS" className="sos-hero-img" />
        </div>

        <div className="hero-dog">
          <img
            src={imgDogHero}
            alt="Imagen de perro"
            className="dog-hero-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
