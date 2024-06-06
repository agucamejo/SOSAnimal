import Subtitles from "../Subtitles"

const Castraciones = () => {
    const ImgHuella = './manito-castraciones.svg';
    const ImgAlt = 'Manito azul con fondo blanco';

    return ( 
       <div className="castraciones-container">
            <div className="contentTitles">
                <Subtitles text="¿Por qué es importante castrar a tus mascotas?" />
                <p className="subtitle">La esterilización de mascotas es una decisión crucial que no solo afecta la vida de nuestros peluditos, sino que también deja una huella significativa en la comunidad en la que vivimos. </p>
            </div>
            <h4 className="title-cast-desktop">¿Querés saber en qué se benefician tus mascotas?</h4>
            <h4 className="title-cast-mobile">¿En qué se benefician tus mascotas?</h4>
            <div className="container-castraciones-cards">
                <div className="cards">
                    <img src={ImgHuella} alt={ImgAlt} title={ImgAlt} />
                    <p className="title-card">Salud y bienestar</p>
                    <p className="text-card">Previene la aparición de tumores e infecciones del sistema reproductivo tanto en machos como en hembras.</p>
                </div>
                <div className="cards">
                    <img src={ImgHuella} alt={ImgAlt} title={ImgAlt} />
                    <p className="title-card">Comportamiento</p>
                    <p className="text-card">Reduce actos no deseados como el marcaje con orina, la agresividad territorial o el vagabundeo en busca de pareja.</p>
                </div>
                <div className="cards">
                    <img src={ImgHuella} alt={ImgAlt} title={ImgAlt} />
                    <p className="title-card">Longevidad</p>
                    <p className="text-card">Estas mascotas tienden a vivir más tiempo con una mejor calidad de vida. </p>
                </div>
            </div>
            <h4>¿Y en qué se beneficia nuestra comunidad?</h4>
            <div className="container-castraciones-cards">
                <div className="cards large-cards">
                    <img src={ImgHuella} alt={ImgAlt} title={ImgAlt} />
                    <p className="title-card">Control animal</p>
                    <p className="text-card">Es una herramienta efectiva para controlar la población de animales callejeros y reducir el número de mascotas abandonadas.</p>
                </div>
                <div className="cards large-cards">
                    <img src={ImgHuella} alt={ImgAlt} title={ImgAlt} />
                    <p className="title-card">Salud pública</p>
                    <p className="text-card">Disminuye el riesgo de enfermedades zoonóticas y se mejora la seguridad de la comunidad en general.</p>
                </div>
                <div className="cards large-cards">
                    <img src={ImgHuella} alt={ImgAlt} title={ImgAlt} />
                    <p className="title-card">Bienestar Animal</p>
                    <p className="text-card">Previene el sufrimiento de animales sin hogar, evitando camadas no deseadas y la reproducción indiscriminada en condiciones precarias.</p>
                </div>
            </div>
            <h4 className="last-subtitle">Castrar es una actitud de responsabilidad y compromiso social</h4>
            <div className="green-container">
                <div className="text-container">
                    <h5>¿Cómo nos involucramos?</h5>
                    <p>Nuestro equipo gestiona castraciones económicas de gatos con las 4 veterinarias con las que trabajamos, al menos 4 veces al año. Podés pagarlas con tarjeta de crédito en varias cuotas.</p>
                    <p>Además, llevamos a cabo castraciones de animales callejeros, principalmente hembras. Para acceder a una castración el animal debe tener más de 6 meses, 12 horas de ayuno y, en el caso de las hembras, no estar en celo ni preñadas. Las inscripciones para castraciones se realizan desde nuestras páginas de Facebook e Instagram.</p>
                    <p className="attention">¡Estate atento! <br />
                    Siempre publicamos cuando hay cupos disponibles.</p>
                </div>
            </div>
       </div>
    );
}
   
export default Castraciones;