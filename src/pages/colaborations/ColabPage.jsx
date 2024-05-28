import Navbar from '../../components/Navbar';
import Footer from "../../components/Footer";
import Socio from '../../components/collaborations/Socio';
import Voluntario from '../../components/collaborations/Voluntario';
import Donaciones from '../../components/collaborations/Donaciones';
import Subtitles from '../../components/Subtitles';

const Collaborations = () => {
  return (
    <div>
      <Navbar />
      <div className="contentColab">
        <section className="colaborations">
          <section className="contentTitlesColab">
            <Subtitles text='Cómo podés ayudar a los animales'/>
          </section>
          <Socio />
          <Voluntario />
          <Donaciones />
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Collaborations;

