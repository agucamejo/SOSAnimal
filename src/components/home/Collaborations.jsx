import ButtonCollaboration from '../ButtonCollaboration';
const Collaborations = () => {
  const iconCatDog = './icons/Cat&Dog.svg';
  const imgManCollaboration = './images/desktop1.png';
  const imgDogCollaboration = './images/desktop2.png';
  const imgWomanCollaboration = './images/desktop3.png';
  const imgWomanTablet = './images/tablet3.png';
  return (
    <div className="collaborations">
      <div className="collaborations-text">
        <img src={iconCatDog} alt="" className="" />
        <h2>
          <span className="new-line-title">Cómo podés</span>{' '}
          <span className="new-line-title">colaborar</span>
        </h2>
        <p>
          ¡Vos también puedes ser parte del cambio! Descubre cómo podés
          colaborar con SOS Animal y marcar la diferencia en la vida de los
          animales necesitados:
        </p>
      </div>
      <div className="collaborations-type">
        <div className="collaboration-item1">
          <img src={imgManCollaboration} alt="" className="desktop1" />
          <ButtonCollaboration text="Hacete socio" />
        </div>
        <div className="collaboration-item2">
          <img src={imgDogCollaboration} alt="" className="desktop2" />
          <ButtonCollaboration text="Doná lo que puedas" />
        </div>
        <div className="collaboration-item3">
          <img src={imgWomanCollaboration} alt="" className="desktop3" />
          <ButtonCollaboration text="Sé voluntario" />
        </div>
      </div>
      <div className="collaboration-item4">
        <img src={imgWomanTablet} alt="" className="tablet3" />
        <ButtonCollaboration text="Sé voluntario" />
      </div>
    </div>
  );
};

export default Collaborations;
