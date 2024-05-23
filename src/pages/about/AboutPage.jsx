import Navbar from "../../components/Navbar";
import AboutUs from "../../components/about/AboutUs";
import WhatWeDo from "../../components/about/WhatWeDo";
import Speech from "../../components/about/Speech";
import Objectives from "../../components/about/Objectives";
import Principles from "../../components/about/Principles";
import Statistics from "../../components/about/Statistics";

const About = () => {
    return ( 
       <div className="about">
           <Navbar />
           <AboutUs />
           <WhatWeDo />
           <Speech />
           <Objectives />
           <Principles />
           <Statistics />
       </div>
    );
}
   
export default About;