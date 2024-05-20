import ButtonPrimary from '../ButtonPrimary';

const Hero = () => {
  const iconCatDog = './icons/Cat&Dog.svg';
  const imgDogHero = './images/dog-hero.png';
  const imgSosHero = './images/sos-hero.png';
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
        <ButtonPrimary text="Donaciones" />
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
