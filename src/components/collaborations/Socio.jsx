import { Player } from '@lottiefiles/react-lottie-player'

function Socio() {
  return (
    <div className="containerSocio" id="socios">
      <section className="containerTextSocio">
        <h2 className="titleSocio">Hacete socio</h2>
        <p className="textSocio">
          Sin la ayuda mensual de nuestros asociados la labor de SOS Animal
          sería imposible.
        </p>
        <p className="textSocioVerde">¡Sumate vos también a colaborar!</p>
        <a
          className="enlaceAyuda btnAyuda btnSocio"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=+59892336700&text=%C2%A1Hola%20SOS!%20%F0%9F%91%8B%20%F0%9F%90%B6%20Quiero%20hacerme%20socio,%20%C2%BFme%20podr%C3%A1n%20enviar%20informaci%C3%B3n?%20%20%C2%A1Muchas%20gracias!%F0%9F%98%BD"
        >
          Contactanos
          <img src="/colaboracionImg/whapp.svg" alt="Whatsapp Icon" />
        </a>
      </section>
      <section className="containerGif">
        <Player
          autoplay
          loop
          src="./colaboracionImg/animacion.json"
          className="animation"
        />
        <img
          src="./colaboracionImg/gatico.webp"
          alt="gato gris"
          className="imgSocio"
        />
      </section>
    </div>
  )
}

export default Socio
