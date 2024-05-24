const Speech = () => {
    return ( 
       <div className="speech-container">
            <h2>¿Querés difundir los ideales del cuidado animal?</h2>
            <p>Invitanos a tu barrio o institución para hablar sobre el cuidado animal y la sobrepoblación.</p>
            <a
                className="enlaceAyuda"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=+59892336700&text=%C2%A1Hola%20SOS!%20%F0%9F%91%8B%20%F0%9F%90%B6%20Me%20gustaría%20obtener%20más%20información%20sobre%20las%20charlas%20que%20brindan,%20%C2%BFme%20podr%C3%A1n%20enviar%20informaci%C3%B3n?%20%20%C2%A1Muchas%20gracias!"
            >
                <button className="btnAyuda btnSocio">
                    Contactanos
                    <img src="/colaboracionImg/whapp.svg" alt="Whatsapp Icon" />
                </button>
            </a>
            <p className="etiqueta">Charlas</p>
       </div>
    );
}
   
export default Speech;