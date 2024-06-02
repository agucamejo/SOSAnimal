import Navbar from "../../components/Navbar";
import Castraciones from "../../components/contact/Castraciones"
import InfoUtil from "../../components/contact/InfoUtil";
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
           <div>
                <InfoUtil />
                <Castraciones />
           </div>
           <Footer />
       </div>
       
    );
}
   
export default Contact;