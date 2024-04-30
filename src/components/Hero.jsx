const Hero = () => {
  const iconCatDog = './icons/Cat&Dog.svg';
  const imgDogHero = './images/dog-hero.png';
  const imgSosHero = './images/sos-hero.png';
  return (
    <div>
      <img src={iconCatDog} alt="" />
      <h2>Donde la empatía animal se fortalece</h2>
      <h3>
        En SOS Fray Bentos, invertimos cada recurso en el bienestar animal.
        Únete a nuestra causa y haz posible más acciones solidarias.
      </h3>
      <div className="sos-hero">
        <img src={imgSosHero} alt="" />
      </div>
      <div className="dog-hero">
        <img src={imgDogHero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
