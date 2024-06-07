import Subtitles from "../Subtitles"
import { Player } from '@lottiefiles/react-lottie-player';
import { useRef, useEffect } from 'react'
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const Telephones = () => {
  const hairPlayer = useRef(null);
  const firemanPlayer = useRef(null);
  const policePlayer = useRef(null);
  const horsePlayer = useRef(null);
  const isDesktop = useRef(window.innerWidth > 1024);

  const handleMouseEnter = (playerRef) => {
    if (isDesktop.current) {
      playerRef.current.play();
    }
  };

  const handleMouseLeave = (playerRef) => {
    if (isDesktop.current) {
      playerRef.current.stop();
    }
  };

  const handleImageClick = (event, message, number) => {
    const buttonRect = event.target.getBoundingClientRect();

    navigator.clipboard.writeText(number)
      .then(() => {
        if (isDesktop.current){
            Toastify({
              text: message,
              duration: 1000,
              gravity: "top",
              position: "left",
              stopOnFocus: true,
              offset: {
                x: buttonRect.left + (buttonRect.width / 2) - 95, 
                y: buttonRect.top - 80 
              },
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
            }).showToast();
        }
        else{
            Toastify({
              text: message,
              duration: 2000,
              gravity: "top",
              position: "right",
              stopOnFocus: true,
              offset: { 
                y: 65
              },
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
            }).showToast();
        }
      })
      .catch((error) => {
        console.error('Error al copiar en el portapapeles:', error);
      });
  };
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleResize = () => {
      isDesktop.current = mediaQuery.matches;
    };

    handleResize();
    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <div className="telephones-container" id="telephones">
        <div className="contentTitles">
            <Subtitles text="Teléfonos útiles" />
            <p className="subtitle">Líneas de ayuda y asistencia </p>
        </div>
        <div className="tel-card-container">
            <div className="row">
                <div className="card card-large bg-skyblue">
                    <p className="tel-card-title">Emergencia veterinaria</p>
                    <p className="tel-card-text">Contactate inmediatamente con las siguientes clínicas:</p>
                    <div className="vets-container">
                        <div className="vet">
                            <div className="logo-vet"><img src="contactImg/logo-mundo-animal.webp" alt="Logo Veterinaria Mundo Animal" /></div>
                            <p className="tel">092 982 008</p>
                            <img src="./copy-icon.svg" className="copy-icon" title="Copiar" onClick={(e) => handleImageClick(e, "Copiado", "092 982 008")} />
                        </div>
                        <div className="vet">
                            <div className="logo-vet"><img src="contactImg/logo-huellas.webp" alt="Logo Huellas - Clínica Veterinaria" /></div>
                            <p className="tel">099 241 822</p>
                            <img src="./copy-icon.svg" className="copy-icon" title="Copiar" onClick={(e) => handleImageClick(e, "Copiado", "099 241 822")}/>
                        </div>
                        <div className="vet">
                            <div className="logo-vet"><img src="contactImg/logo-martineta.webp" alt="Logo Veterinaria La Martineta" /></div>
                            <p className="tel">4563 5017</p>
                            <img src="./copy-icon.svg" className="copy-icon" title="Copiar" onClick={(e) => handleImageClick(e, "Copiado", "4563 5017")}/>
                        </div>
                        <div className="vet">
                            <div className="logo-vet"><img src="contactImg/logo-amaral.webp" alt="Logo Clínica Veterinaria - Dra. Amaral" /></div>
                            <p className="tel">4562 2779</p>
                            <img src="./copy-icon.svg" className="copy-icon" title="Copiar" onClick={(e) => handleImageClick(e, "Copiado", "4562 2779")}/>
                        </div>
                    </div>
                </div>
                <div className="card card-short bg-purple" onMouseEnter={() => handleMouseEnter(hairPlayer)} onMouseLeave={() => handleMouseLeave(hairPlayer)}>
                    <Player ref={hairPlayer} autoplay={false} loop={true} src="./hair.json" background="transparent" speed="0.8" keepLastFrame={true}></Player>
                    <p className="tel-card-title">Peluquerías</p>  
                    <p className="tel-card-text">Todas las veterinarias ofrecen el servicio, sumamos a Florencia</p>  
                    <div className="tel-icon">
                        <p className="tel">098 481 886</p>
                        <img src="./copy-icon.svg" className="copy-icon" title="Copiar" onClick={(e) => handleImageClick(e, "Copiado", "098 481 886")}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="card card-short bg-red" onMouseEnter={() => handleMouseEnter(firemanPlayer)} onMouseLeave={() => handleMouseLeave(firemanPlayer)}>
                    <Player ref={firemanPlayer} autoplay={false} loop={true} src="./fireman.json" background="transparent" speed="0.8" keepLastFrame={true}></Player>
                    <p className="tel-card-title">Bomberos</p>
                    <p className="tel-card-text">Ante una emergencia, comunicarse al:</p>
                    <div className="tel-icon">
                        <p className="tel">4562 2535</p>
                        <img src="./copy-icon.svg" className="copy-icon" title="Copiar" onClick={(e) => handleImageClick(e, "Copiado", "4562 2535")}/>
                    </div>
                </div>
                <div className="card card-large bg-green" onMouseEnter={() => handleMouseEnter(policePlayer)} onMouseLeave={() => handleMouseLeave(policePlayer)}>
                    <p className="tel-card-title">Maltrato animal</p>
                    <p className="tel-card-text">Denunciá a la seleccional correspondiente o comunicate a estos números</p>
                    <div className="gif-num">
                        <Player ref={policePlayer} autoplay={false} loop={true} src="./police.json" background="transparent" speed="0.8" keepLastFrame={true}></Player>
                        <div className="tels-names-container">
                            <div className="name-tel">
                                <p className="name">Emergencias</p>
                                <div className="num-icon">
                                    <p className="tel">911</p>
                                    <img src="./copy-icon.svg" className="copy-icon" title="Copiar" onClick={(e) => handleImageClick(e, "Copiado", "911")}/>
                                </div>
                            </div>
                            <div className="name-tel">
                                <p className="name">Anónimos</p>
                                <div className="num-icon">
                                    <p className="tel">0800 5000</p>
                                    <img src="./copy-icon.svg" className="copy-icon" title="Copiar" onClick={(e) => handleImageClick(e, "Copiado", "0800 5000")}/>
                                </div>
                            </div>
                            <div className="name-tel">
                                <p className="name">Seccional N°1</p>
                                <div className="num-icon">
                                    <p className="tel">2030 6788</p>
                                    <img src="./copy-icon.svg" className="copy-icon" title="Copiar" onClick={(e) => handleImageClick(e, "Copiado", "2030 6788")}/>
                                </div>
                            </div>
                            <div className="name-tel">
                                <p className="name">Seccional N°2</p>
                                <div className="num-icon">
                                    <p className="tel">2030 6757</p>
                                    <img src="./copy-icon.svg" className="copy-icon" title="Copiar" onClick={(e) => handleImageClick(e, "Copiado", "2030 6757")}/>
                                </div>
                            </div>
                            <div className="name-tel">
                                <p className="name">INBA</p>
                                <div className="num-icon">    
                                    <p className="tel">2908 1271</p>
                                    <img src="./copy-icon.svg" className="copy-icon" title="Copiar" onClick={(e) => handleImageClick(e, "Copiado", "2908 1271")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="card card-large bg-orange" onMouseEnter={() => handleMouseEnter(horsePlayer)} onMouseLeave={() => handleMouseLeave(horsePlayer)}>
                    <p className="tel-card-title">Caballos sueltos o heridos</p>
                    <p className="tel-card-text">Si ves caballos heridos o sanos, llamá a la intendencia y comunicarse con la Oficina de Higiene o Medio ambiente</p>
                    <div className="gif-num">
                        <Player ref={horsePlayer} autoplay={false} loop={true} src="./horse.json" background="transparent" speed="0.8" keepLastFrame={true}></Player>
                        <div className="tel-icon">
                            <p className="tel">1935</p>
                            <img src="./copy-icon.svg" className="copy-icon" title="Copiar" onClick={(e) => handleImageClick(e, "Copiado","1935")}/>
                        </div>
                    </div>
                </div>
                <div className="card card-short bg-gray">
                    <p className="tel-card-title">Transporte para animales</p>
                    <div className="tels-names-container">
                        <div className="name-tel">
                            <p className="name">Nora</p>
                            <div className="num-icon">
                                <p className="tel">099 075 685</p>
                                <img src="./copy-icon.svg" className="copy-icon" title="Copiar" onClick={(e) => handleImageClick(e, "Copiado", "099 075 685")}/>
                            </div>
                        </div>
                        <div className="name-tel">
                            <p className="name">Javier</p>
                            <div className="num-icon">
                                <p className="tel">091 713 667</p>
                                <img src="./copy-icon.svg" className="copy-icon" title="Copiar" onClick={(e) => handleImageClick(e, "Copiado", "091 713 667")}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Telephones;