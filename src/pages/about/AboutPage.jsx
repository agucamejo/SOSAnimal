import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutUs from "../../components/about/AboutUs";
import WhatWeDo from "../../components/about/WhatWeDo";
import Speech from "../../components/about/Speech";
import Objectives from "../../components/about/Objectives";
import Principles from "../../components/about/Principles";
import Statistics from "../../components/about/Statistics";
import { Helmet } from 'react-helmet';

const About = () => {
    const canonicalUrl = `https://sos-animal.vercel.app/about`;

    return ( 
       <div>
            <Helmet>
                <link rel="canonical" href={canonicalUrl} />
                <title>SOS Animal - Sobre nosotros</title>
            </Helmet>
            <Navbar />
            <div className="about">
                <AboutUs />
                <WhatWeDo />
                <Speech />
                <Objectives />
                <Statistics />
                <Principles />
           </div>
           <Footer />
       </div>
    );
}

export default About
