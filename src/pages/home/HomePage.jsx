import Navbar from "../../components/Navbar";
import Testimonials from "../../components/home/Testimonials";
import Hero from '../../components/home/Hero';
import Collaborations from '../../components/home/Collaborations';

const Home = () => {
 return ( 
    <div>
        <Navbar />
        <Hero />
        <Collaborations />
        <Testimonials />
    </div>
 );
}

export default Home;
