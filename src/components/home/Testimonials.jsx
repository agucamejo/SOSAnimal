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
  const [activeIndex, setActiveIndex] = useState(1);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    // Si el cursor sale de todas las tarjetas, establece la tarjeta activa como la primera
    setActiveIndex(1);
  };

  return (
    <div className="testimonials">
      <Subtitles text="Qué dicen de nosotros" />
      <div className="card-container">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`card ${index === activeIndex ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img className="card-img" src={testimonial.image} alt="Imagen de testimonio" />
            <h4>{testimonial.name}</h4>
            <p>{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
