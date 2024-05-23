import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutUs from "../../components/about/AboutUs";
import WhatWeDo from "../../components/about/WhatWeDo";
import Speech from "../../components/about/Speech";
import Objectives from "../../components/about/Objectives";
import Principles from "../../components/about/Principles";
import Statistics from "../../components/about/Statistics";

const About = () => {
    return ( 
       <div>
           <Navbar />
           <div className="about">
                <AboutUs />
                <WhatWeDo />
                <Speech />
                <Objectives />
                <Principles />
                <Statistics />
           </div>
           <Footer />
       </div>
    );
}
   
export default About;