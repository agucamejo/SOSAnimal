import Navbar from '../../components/Navbar';
import Footer from "../../components/Footer";
import Socio from '../../components/collaborations/Socio';
import Voluntario from '../../components/collaborations/Voluntario';
import Donaciones from '../../components/collaborations/Donaciones';
import SectionTitle from '../../components/SectionTitle';
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
        <div className="contentTitles">
          <SectionTitle text="Como podés ayudar a los animales" />
        </div>
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

