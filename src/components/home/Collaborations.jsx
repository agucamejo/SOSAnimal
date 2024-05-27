import ButtonCollaboration from '../ButtonCollaboration';
import Subtitles from '../Subtitles';

const Collaborations = () => {
  const imgManCollaboration = './images/desktop1.svg';
  const imgDogCollaboration = './images/desktop2.svg';
  const imgWomanCollaboration = './images/desktop3.svg';
  const imgWomanTablet = './images/tablet3.png';
  
  return (
    <div className="collaborations">
      <div className="collaborations-text">
        <Subtitles text='Cómo podés colaborar' />
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
