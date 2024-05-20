import { Player } from '@lottiefiles/react-lottie-player'
import { IoClose } from 'react-icons/io5'
import { IoMdCopy } from 'react-icons/io'
import { useState } from 'react'

function Modal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const accountNumber = '6145664'
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000) // Ocultar el mensaje después de 2 segundos
      })
      .catch((err) => {
        console.error('Error al copiar al portapapeles:', err)
      })
  }

  return (
    <section className={`modal-overlay ${isOpen ? 'open' : ''}`}>
      <section className="containerModalDonaciones">
        <div className="contentCloseModal">
          <IoClose className="close" onClick={onClose} />
        </div>
        <Player
          autoplay
          loop
          src="./colaboracionImg/animacionChancho.json"
          className="animationChancho"
        />

        <section className="contentTextModal">
          <p className="textModal">Titular: Fiorella Batista</p>
          <p className="textModal">Banco: Midinero</p>
          <p className="textModal">
            N° de cuenta:6145664{' '}
            <IoMdCopy className="copy" onClick={handleCopy} />
          </p>
          {copied && (
            <p className="copyConfirmation">
              Número de cuenta copiado al portapapeles
            </p>
          )}
        </section>
      </section>
    </section>
  )
}

export default Modal
