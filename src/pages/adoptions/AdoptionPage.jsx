import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Form from "../../components/adoptions/AdoptionForm";
import { Helmet } from 'react-helmet';


const Adoptions = () => {
    const canonicalUrl = `https://sos-animal.vercel.app/adoptions`;

    return ( 
       <div>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
                <title>SOS Animal - Adopciones</title>
            </Helmet>
           <Navbar />
           <Form />
           <Footer />
       </div>
    );
}
   
export default Adoptions;