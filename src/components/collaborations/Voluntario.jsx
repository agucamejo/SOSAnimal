function Voluntario() {
  return (
    <div className="containerVoluntario" id="voluntarios">
      <section className="containerImgVoluntario">
        <img
          src="/colaboracionImg/perroBlanco&Negro.png"
          alt="Perro de color blanco y negro"
          className="imgVoluntario"
        />
      </section>
      <section className="containerTextVoluntario">
        <h2 className="titleVoluntario">Sé un voluntario</h2>
        <div>
          <p className="textVoluntario">¿Querés formar parte de SOS Animal?</p>
          <p className="textVoluntario">
            Podés ayudarnos con los rescates, traslados, asistencia de animales
            abandonados, ofreciendo un hogar transitorio y muchas formas más.
          </p>
        </div>

        <p className="textVoluntarioVerde">¡Animate a hacer la diferencia!</p>
        <a
          className="enlaceAyuda"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=+59892336700&text=%C2%A1Hola%20SOS!%20%F0%9F%91%8B%20%F0%9F%90%B6%20Quiero%20participar%20como%20voluntario,%20%C2%BFme%20podr%C3%A1n%20enviar%20informaci%C3%B3n?%20%20%C2%A1Muchas%20gracias!%F0%9F%98%BD"
        >
          <button className="btnAyuda btnVoluntario">
            Sumate
            <img src="/colaboracionImg/whapp.svg" alt="Whatsapp Icon" />
          </button>
        </a>
      </section>
    </div>
  )
}

export default Voluntario
