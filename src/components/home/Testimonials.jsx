import { useState } from 'react';
import Subtitles from "../Subtitles";

const testimonialsData = [
  {
    name: "Patricia Bueno",
    testimonial: "Este es mi Choco. Fue abandonado a su suerte siendo un cachorrito y gracias a S.O.S ANIMAL llegó a mi hogar. Gracias a los voluntarias del grupo por traerme este amor tan inmenso, SIEMPRE apoyar y por el trabajo tan lindo que hacen!",
    image: "/testimonial-patricia.png"
  },
  {
    name: "Lara Fiorelli",
    testimonial: "Gracias a la invalorable ayuda de las integrantes de SOS y la difusión en sus redes, Santo, que se encontraba vagando por las calles, fue retenido por un grupo de niños. Ese día le abrimos las puertas de nuestra casa y de nuestro corazón para siempre.",
    image: "/testimonial-lara.png"
  },
  {
    name: "Silvina Canepa",
    testimonial: "Los que amamos a los animales los consideramos parte de nuestra familia y reconocemos la importancia de esta asociación, la labor que realizan con ese amor incondicional para todos los animales que no tienen hogar.",
    image: "/testimonial-silvina.png"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(false);
  const [isPrev, setIsPrev] = useState(false);

  const handlePrev = () => {
    setIsPrev(true);
    setIsNext(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
      setIsPrev(false);
    }, 2000); // Adjust the timeout as needed
  };

  const handleNext = () => {
    setIsNext(true);
    setIsPrev(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
      setIsNext(false);
    }, 2000);
  };

  return (
    <div className="testimonials">
      <Subtitles text="Que dicen de nosotros" />
      <div className="card-container">
        <img className="arrow" src="/left-arrow-icon.svg" onClick={handlePrev} />
        <div className={`card card-${currentIndex === 0 ? 2 : currentIndex - 1} ${isPrev ? 'prev-1' : ''} ${isNext ? 'next-1' : ''}`}>
          <img className="card-img" src={testimonialsData[(currentIndex === 0 ? 2 : currentIndex - 1)].image} alt="Imagen de testimonio" />
          <h4>{testimonialsData[(currentIndex === 0 ? 2 : currentIndex - 1)].name}</h4>
          <p>{testimonialsData[(currentIndex === 0 ? 2 : currentIndex - 1)].testimonial}</p>
        </div>
        <div className={`card active card-${currentIndex} ${isPrev ? 'prev-2' : ''} ${isNext ? 'next-2' : ''}`}>
          <img className="card-img" src={testimonialsData[currentIndex].image} alt="Imagen de testimonio" />
          <h4>{testimonialsData[currentIndex].name}</h4>
          <p>{testimonialsData[currentIndex].testimonial}</p>
        </div>
        <div className={`card card-${currentIndex === 2 ? 0 : currentIndex + 1} ${isPrev ? 'prev-3' : ''} ${isNext ? 'next-3' : ''}`}>
          <img className="card-img" src={testimonialsData[(currentIndex === 2 ? 0 : currentIndex + 1)].image} alt="Imagen de testimonio" />
          <h4>{testimonialsData[(currentIndex === 2 ? 0 : currentIndex + 1)].name}</h4>
          <p>{testimonialsData[(currentIndex === 2 ? 0 : currentIndex + 1)].testimonial}</p>
        </div>
        <img className="arrow" src="/right-arrow-icon.svg" onClick={handleNext} />
      </div>
    </div>
  );
};

export default Testimonials;
