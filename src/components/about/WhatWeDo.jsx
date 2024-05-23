import Subtitles from "../Subtitles";
const WhatWeDo = () => {
    return ( 
       <div className="whatwedo-container">
            <div className="contentTitles">
                <Subtitles text="Lo que hacemos" />
                <p className="subtitle">
                A continuación te mostramos todo el proceso que realizamos como equipo para beneficio de los animales.
                </p>
            </div>
            <div className="rows-container">
                <div><h3 className="title-mobile">Recaudar fondos</h3></div>
                <div className="rows">
                    <div className="title-desktop"><h3>Recaudar fondos</h3></div> 
                    <div className="bg-green"><p>Recaudamos fondos mediante rifas, ventas de objetos personalizados, ropa de segunda mano donada y alimentos.</p></div>
                    <div className="bg-green"><p>También tenemos socios colaboradores que aportan una cuota mensual mediante transferencia o cobro a domicilio.</p></div>
                    <div className="bg-green"><p>Algunas empresas se unen a la causa y donan lo que pueden.</p></div>
                </div>

                <div className="container-reverse"><h3 className="h3-reverse title-mobile">Operativos de rescate</h3></div>
                <div className="rows rows-reverse">
                    <div className="title-desktop h3-reverse"><h3>Operativos de rescate</h3></div> 
                    <div className="bg-orange"><p>Difundimos la tenencia responsable y denunciamos el maltrato.</p></div>
                    <div className="bg-orange"><p>Proporcionamos atención veterinaria, cuidados adecuados y preparamos el proceso de adopción.</p></div>
                    <div className="bg-orange"><p>Rescatamos al animal y lo llevamos a un hogar de tránsito.</p></div>
                </div>

                <div><h3 className="title-mobile">Esterilización y cuidado</h3></div>
                <div className="rows">
                    <div className="title-desktop"><h3>Esterilización y cuidado</h3></div>
                    <div className="bg-red"><p>En S.O.S Animal, colaboramos para evitar la reproducción descontrolada de animales callejeros.</p></div>
                    <div className="bg-red"><p>Ofrecemos esterilizaciones a mascotas de familias con bajos recursos.</p></div>
                    <div className="bg-red"><p>Realizamos campañas de concientización.</p></div>
                </div>

                <div className="container-reverse"><h3 className="h3-reverse title-mobile">Adopciones y seguimiento</h3></div>
                <div className="rows rows-reverse">
                    <div className="title-desktop h3-reverse"><h3>Adopciones y seguimiento</h3></div>
                    <div className="bg-skyblue"><p>Concretada la adopción, se lleva o se retira el animal y se hacen seguimientos para verificar su bienestar.</p></div>
                    <div className="bg-skyblue"><p>Coordinamos una visita para constatar que el animal pueda vivir en buenas condiciones.</p></div>
                    <div className="bg-skyblue"><p>Nos comunicamos con las familias interesadas en adoptar mediante las redes o WhatsApp.</p></div>
                </div>
            </div>
       </div>
    );
}
   
export default WhatWeDo;