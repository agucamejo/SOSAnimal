const Objectives = () => {
    return ( 
       <div className="objectives-container">
            <h3>Nuestros objetivos</h3>
            <div className="cards-container">
                <div className="cards">
                    <img src="./manito1.png" alt="Huella de fondo verde" title="Huella de fondo verde" />
                    <p>Reducir la sobrepoblación de perros y gatos</p>
                </div>
                <div className="cards">
                    <img src="./manito2.png" alt="Huella de fondo verde" title="Huella de fondo verde" />
                    <p>Promover adopciones y no la compra de animales de raza</p>
                </div>
                <div className="cards">
                    <img src="./manito3.png" alt="Huella de fondo verde" title="Huella de fondo verde" />
                    <p>Generar conciencia de “tenencia responsable”</p>
                </div>
                <div className="cards">
                    <img src="./manito4.png" alt="Huella de fondo verde" title="Huella de fondo verde" />
                    <p>Llevar registro de los animales por familia y limitar el número de animales por espacio</p>
                </div>
                <div className="cards">
                    <img src="./manito5.png" alt="Huella de fondo verde" title="Huella de fondo verde" />
                    <p>Penalizar situaciones de maltrato y, en casos graves, prohibir la tenencia de animales</p>
                </div>
            </div>
            <img src="./SiluetaObjetives.png" alt="Silueta de mujer con un gato" title="Silueta de mujer con un gato"/>
       </div>
    );
}
   
export default Objectives;