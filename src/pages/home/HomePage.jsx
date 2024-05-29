import Navbar from '../../components/Navbar';
import Testimonials from '../../components/home/Testimonials';
import Hero from '../../components/home/Hero';
import Collaborations from '../../components/home/Collaborations';
import Info from '../../components/home/Info';
import Historia from '../../components/home/Historia';
import Valores from '../../components/home/Valores';
import Footer from "../../components/Footer";
import { Helmet } from 'react-helmet';

const Home = () => {
  const canonicalUrl = `https://sos-animal.vercel.app/`;

  return (
    <div>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <title>SOS Animal - Home</title>
      </Helmet>
      <Navbar />
      <div className='estructure-home'>
        <Hero />
        <Info />
        <Historia />
        <Collaborations />
        <Valores />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
