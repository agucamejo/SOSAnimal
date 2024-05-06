import Navbar from "../../components/Navbar";
import Testimonials from "../../components/home/Testimonials";
import Hero from '../../components/home/Hero';
import Collaborations from '../../components/home/Collaborations';
import Info from '../../components/home/Info';
import Historia from '../../components/home/Historia';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Collaborations />
        <Testimonials />
        <Info />
        <Historia />
    </div>
  )
}

export default Home;