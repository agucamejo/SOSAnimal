import { Player } from '@lottiefiles/react-lottie-player'
import { IoClose } from 'react-icons/io5'
import { IoMdCopy } from 'react-icons/io'
import { useState } from 'react'

function Modal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false)
  const [iconColor, setIconColor] = useState('#908b8b')

  const handleCopy = () => {
    const accountNumber = '6145664'
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        setCopied(true)
        setIconColor('#238c26')
        setTimeout(() => {
          setCopied(false)
          setIconColor('black')
        }, 2000)
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
          <p className="textModal">
            <span className="spanModal">Titular:</span> Fiorella Batista
          </p>
          <p className="textModal">
            <span className="spanModal">Banco:</span> Midinero
          </p>
          <p className="textModal">
            <span className="spanModal">N° de cuenta:</span> 6145664
            <IoMdCopy
              className="copy"
              onClick={handleCopy}
              style={{ color: iconColor }}
            />
          </p>
          {copied && <p className="copyConfirmation">Copiado</p>}
        </section>
      </section>
    </section>
  )
}

export default Modal
