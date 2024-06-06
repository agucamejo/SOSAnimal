import Navbar from '../../components/Navbar';
import Footer from "../../components/Footer";
import Socio from '../../components/collaborations/Socio';
import Voluntario from '../../components/collaborations/Voluntario';
import Donaciones from '../../components/collaborations/Donaciones';
import Subtitles from '../../components/Subtitles';
import { Helmet } from 'react-helmet';

const Collaborations = () => {
  const canonicalUrl = `https://sos-animal.vercel.app/collaborations`;

  return (
    <div>
       <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <title>SOS Animal - Colaborar</title>
      </Helmet>
      <Navbar />
      <div className="contentColab">
        <section className="colaborations">
          <section className="contentTitlesColab">
            <Subtitles />
            <h1 className="titleColab">Cómo podés ayudar a los animales</h1>
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

