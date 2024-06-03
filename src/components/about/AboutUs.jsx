import SectionTitle from "../SectionTitle"
import ImageSlider from "./Slider"

const AboutUs = () => {
    return ( 
       <div className="aboutus-container">
           <div className="aboutus-text-container">
                <SectionTitle text="Sobre Nosotros"/>
                <p>Somos un grupo de 15 voluntarios que se creó en el año 2020 con el objetivo de mejorar la calidad de vida de animales abandonados, maltratados, enfermos y atropellados. </p>
                <p>Ayudamos a familias de hogares de bajos recursos con castraciones, atención veterinaria, desparasitación y otras afecciones.</p>
           </div>
           <ImageSlider className="img-about" />
       </div>
    );
}
   
export default AboutUs;