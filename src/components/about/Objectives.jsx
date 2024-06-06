const Objectives = () => {
    return ( 
       <div className="objectives-container">
            <h3>Nuestros objetivos</h3>
            <div className="cards-container">
                <div className="cards">
                    <img src="/aboutImg/manito1.webp" alt="Huella de fondo verde" title="Huella de fondo verde" />
                    <p>Reducir la sobrepoblación de perros y gatos</p>
                </div>
                <div className="cards">
                    <img src="/aboutImg/manito2.webp" alt="Huella de fondo naranja claro" title="Huella de fondo naranja claro" />
                    <p>Promover adopciones y no la compra de animales de raza</p>
                </div>
                <div className="cards">
                    <img src="/aboutImg/manito3.webp" alt="Huella de fondo azul" title="Huella de fondo azul" />
                    <p>Generar conciencia de “tenencia responsable”</p>
                </div>
                <div className="cards">
                    <img src="/aboutImg/manito4.webp" alt="Huella de fondo rosa" title="Huella de fondo rosa" />
                    <p>Llevar registro de los animales por familia y limitar el número de animales por espacio</p>
                </div>
                <div className="cards">
                    <img src="/aboutImg/manito5.webp" alt="Huella de fondo naranja oscuro" title="Huella de fondo naranja oscuro" />
                    <p>Penalizar situaciones de maltrato y, en casos graves, prohibir la tenencia de animales</p>
                </div>
            </div>
            <img className="img-mujer" src="/aboutImg/SiluetaObjetives.webp" alt="Silueta de mujer con un gato" title="Silueta de mujer con un gato"/>
       </div>
    );
}
   
export default Objectives;