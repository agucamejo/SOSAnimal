import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from 'react-helmet';

const Contact = () => {
    const canonicalUrl = `https://sos-animal.vercel.app/contact`;

    return ( 
       <div>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
                <title>SOS Animal - Información útil</title>
            </Helmet>
           <Navbar />
           <h2>Contacto</h2>
           <Footer />
       </div>
    );
}
   
export default Contact;