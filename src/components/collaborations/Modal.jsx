import { Player } from '@lottiefiles/react-lottie-player';
import { IoClose } from 'react-icons/io5';
import { IoMdCopy } from 'react-icons/io';
import { useState, useRef } from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

function Modal({ isOpen, onClose }) {
  const [copied] = useState(false);
  const [iconColor] = useState('#908b8b');
  const isDesktop = useRef(window.innerWidth > 1024);

  const handleImageClick = (event, message, number) => {
    const buttonRect = event.target.getBoundingClientRect();

    navigator.clipboard
      .writeText(number)
      .then(() => {
        if (isDesktop.current) {
          Toastify({
            text: message,
            duration: 1000,
            gravity: 'top',
            position: 'left',
            stopOnFocus: true,
            offset: {
              x: buttonRect.left + buttonRect.width / 2 - 95,
              y: buttonRect.top - 80,
            },
            style: {
              background: 'linear-gradient(to right, #00b09b, #96c93d)',
            },
          }).showToast();
        } else {
          Toastify({
            text: message,
            duration: 2000,
            gravity: 'top',
            position: 'right',
            stopOnFocus: true,
            offset: {
              y: 65,
            },
            style: {
              background: 'linear-gradient(to right, #00b09b, #96c93d)',
            },
          }).showToast();
        }
      })
      .catch((error) => {
        console.error('Error al copiar en el portapapeles:', error);
      });
  };

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
          <p className="textModal" style={{ marginBottom: '15px' }}>
            Datos para transferencias{' '}
          </p>
          <p className="textModal">
            <span className="spanModal">Titular:</span> Fiorella Batista
          </p>
          <p className="textModal">
            <span className="spanModal">Banco:</span> RedPagos
          </p>
          <p className="textModal">
            <span className="spanModal">N° de cuenta:</span> 6145664
            <IoMdCopy
              className="copy"
              onClick={(e) => handleImageClick(e, 'Copiado', '6145664')}
              style={{ color: iconColor }}
            />
          </p>
          {copied && <p className="copyConfirmation">Copiado</p>}
        </section>
      </section>
    </section>
  );
}

export default Modal;
