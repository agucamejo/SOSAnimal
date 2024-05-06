import Navbar from "../../components/Navbar";
import Testimonials from "../../components/home/Testimonials";

const Home = () => {
 return ( 
    <div>
        <Navbar />
        <h2>Home</h2>
        <img className="container-subtitles" style={{height: "auto"}} src="https://cdn.memegenerator.es/imagenes/memes/full/33/36/33361906.jpg"></img>
        <p style={{textAlign: "center"}}>El creador de meme no me dejaba poner letra más chica</p>
        <Testimonials />
    </div>
 );
}

export default Home;