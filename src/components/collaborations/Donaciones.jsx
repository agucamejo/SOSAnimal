import { useState } from 'react'
import Modal from './Modal'

function Donaciones() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="containerDonaciones">
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <section className="containerTextDonaciones">
        <h2 className="titleDonaciones">Donaciones</h2>
        <p className="textDonaciones">
          Tu aporte es indispensable para seguir brindando una segunda
          oportunidad a los animales que más lo necesitan.
        </p>
        <p className="textDonacionesVerde">¡Ayudá a nuestros amigos peludos!</p>
        <div className="containerBtnsDonaciones">
          <button className="btnAyuda btnDonaciones" onClick={openModal}>
            Hacé una donación
          </button>
          <button className="btnAyuda btnDonacionesSinIcono">
            <a
              className="enlaceAyuda"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=+59892336700&text=%C2%A1Hola%20SOS!%20%F0%9F%91%8B%20%F0%9F%90%B6%20Quiero%20donar%20suministros,%20%C2%BFme%20podr%C3%A1n%20enviar%20informaci%C3%B3n?%20%20%C2%A1Muchas%20gracias!%F0%9F%98%BD"
            >
              Doná suministros
            </a>
            <img src="public/colaboracionImg/whapp.svg" alt="Whatsapp Icon" />
          </button>
        </div>
      </section>
      <section className="containerImgDonaciones">
        <img
          src="public/colaboracionImg/perroMarron.png"
          alt="Perro de color marron"
          className="imgDonaciones"
        />
      </section>
    </section>
  )
}

export default Donaciones
