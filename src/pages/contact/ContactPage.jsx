import Navbar from "../../components/Navbar";
import Hero from "../../components/contact/HeroContact";
import Telephones from "../../components/contact/Telephones";
import Castraciones from "../../components/contact/Castraciones";
import Footer from "../../components/Footer";
import { Helmet } from 'react-helmet';
import FAQ from '../../components/contact/FAQ'

const Contact = () => {
  const canonicalUrl = `https://sos-animal.vercel.app/contact`

  return ( 
    <div>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <title>SOS Animal - Información útil</title>
      </Helmet>
      <Navbar />
      <div>
        <Hero />
        <Telephones />
        <FAQ />
        <Castraciones />
      </div>
      <Footer />
    </div>   
  );
}

export default Contact;