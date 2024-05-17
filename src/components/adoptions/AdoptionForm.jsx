import { Player } from '@lottiefiles/react-lottie-player';
import Subtitles from '../Subtitles'
import { useState, useEffect } from 'react';

function Formulario() {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);

  const handleNameChange = (event) => {
    const { value } = event.target;
    
    const regex = /^[a-zA-ZáéíóúüÁÉÍÓÚÜ\s]*$/;
    
    if (regex.test(value) && value.length <= 50) {
      setName(value);
    }
  };

  const handleAddressChange = (event) => {
    const { value } = event.target;
    
    const regex = /^[0-9a-zA-ZáéíóúüÁÉÍÓÚÜ\s]*$/;
    
    if (regex.test(value) && value.length <= 50) {
      setAddress(value);
    }
  };

  const handleAgeChange = (event) => {
    const { value } = event.target;
  
    if (/^\d*$/.test(value) && value.length <= 2) {
      if (parseInt(value, 10) < 18) {
        setError("Debes ser mayor de edad");
      } else {
        setError("");
      }
      setAge(value);
    }
  };
  

  const numericOnly = (event) => {
    const charCode = (event.which) ? event.which : event.keyCode;

    if (
      !(charCode >= 48 && charCode <= 57) &&
      !(charCode >= 96 && charCode <= 105) &&
      charCode !== 8 && // Backspace
      charCode !== 9 && // Tab
      charCode !== 13 && // Enter
      charCode !== 37 && // Left arrow
      charCode !== 39 // Right arrow
    ) {
      event.preventDefault();
    }
  };  

  const handleTelephoneChange = (event) => {
    const { value } = event.target;
    
    const regex = /^[0-9]*$/;
    
    if (regex.test(value) && value.length <= 9) {
      setTelephone(value);
    }
  };

  const isFormValid = () => {
    return name.trim() !== "" && name.trim().length > 1 && address.trim() !== "" && address.trim().length > 3 && age.trim().length > 0 && age >= 18 && telephone.trim().length > 0 && (telephone.trim().length == 8 || telephone.trim().length == 9);
  };

  const isCheckBoxCheked = () => {
    return checkboxChecked === true;
  };

  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  const openConfirmationModal = () => {
    setConfirmationModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setCheckboxChecked(false);
  };

  const closeModalAndResetForm = () => {
    setModalVisible(false); 
    setConfirmationModalVisible(false); 
    setName(""); 
    setAge(""); 
    setAddress(""); 
    setTelephone(""); 
  };

  function Submit(event) {
    event.preventDefault(); 

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyaXNR8XCyAzcfhF4xs-snThdJYe_gwe6K2PBufQ-7klX0Ef3crU9Yw1I7IXmRnM8Oj/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        openConfirmationModal();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (modalVisible || confirmationModalVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalVisible, confirmationModalVisible]);

  return (
    <div className='adoptions-container'>
      <div className="contentTitles">
        <Subtitles text="Adopción" />
        <p className="subtitle">
          Gracias por considerar darle un hogar a una mascota necesitada. 
          Si aún no sabes a quién adoptar visita nuestro Instagram.
        </p>
      </div>
      <div className='container-form-law'>
        <div className="container-law">
          <img className='logo-law' src='./logo-form.svg' alt='Logo de SOS Animal Fray Bentos'/>
          <p>Antes de comenzar, es necesario reflexionar sobre la responsabilidad que implica cuidar a un ser vivo.</p>
          <p>Completa el formulario y SOS se pondrá en contacto contigo. El mismo implica que cumplas con la <a href='https://www.impo.com.uy/bases/leyes/18471-2009#:~:text=Queda%20expresamente%20prohibida%20la%20caza,el%20permiso%20de%20caza%20correspondiente.' target='blank'>Ley Nº18471</a> de protección, bienestar y tenencia de animales.</p>
        </div>
        <form className="form" autoComplete="off" onSubmit={(e) => Submit(e)}>
          <h4>Formulario de adopción</h4>
          <p>Nombre y Apellido</p>
          <input type="text" value={name} name="Name" placeholder="Tu nombre" onChange={handleNameChange} required/>
          <p>Teléfono</p>
          <div className="container-phone">
            <span className="span-phone"><img src="./uruguay-flag.png" alt="Bandera de Uruguay"/> +598</span>
            <input autoComplete="nope" className="input-phone" type="text" value={telephone} name="Telephone" onChange={handleTelephoneChange} required/>
          </div>
          <div className='edad-container'>
            <p>Edad</p>
            <input type="number" min="0" max="99" step="1" onKeyDown={numericOnly} value={age} name="Age" placeholder="Cuántos años tienes" onChange={handleAgeChange} required/>
            {error && <p className="error">{error}</p>}
          </div>
          <p>Dirección</p>
          <input type="text" value={address} name="Address" placeholder="Tu dirección" autoComplete="nope" onChange={handleAddressChange} required />
          <button type="button" onClick={() => setModalVisible(true)} disabled={!isFormValid()} className='btn-continue'>Continuar</button>
          
          {modalVisible && (
            <div className="modal">
              <div className="modal-content">
              <img src='./close-modalForm.svg' className="modal-close" onClick={closeModal} alt="close modal"/>
                <p className='title-modal'>Te comprometés a:</p>
                <ul>
                  <li><p>Proporcionarle a la mascota la desparasitación y todas las vacunas necesarias, así como a castrarla después de los 6 meses de edad. Además, estarás dispuesto/a a buscar atención veterinaria si llegara a necesitarla.</p></li>
                  <li>
                    <p>Permitirle actividad física en el patio o paseos regulares.No tenerlo atado permanentemente.</p> 
                    <p>Proporcionarle un lugar para descansar y refugiarse.</p>
                  </li>
                  <li>
                    <p>Ser responsable de él durante toda su vida, sin excepciones.</p>
                    <p>El animal adoptado no puede ser devuelto.</p>
                    <p>En caso de mudanza, llevarlo contigo.</p>
                    <p>Consultar a un profesional si presenta comportamientos dañinos.</p>
                  </li>
                  <li><p>Por último, aceptar seguimiento del grupo y proporcionar información y fotos del animal adoptado.</p></li>
                </ul>
                <div className='modal-end'>
                  <div className='check-text'>
                    <input type="checkbox" onChange={handleCheckboxChange} />
                    <p>Aceptar las condiciones</p>
                  </div>
                  <button type="submit" disabled={!isCheckBoxCheked()} className='btn-continue' onClick={() => setConfirmationModalVisible(true)}>Listo</button> 
                </div>
              </div>
            </div>
          )}
          {confirmationModalVisible && (
            <div className="modal">
              <div className="modal-content modal-complete">
                <img src='./close-modalForm.svg' className="modal-close" onClick={closeModalAndResetForm} alt="close modal"/>
                <p className='title-form-complete'>¡Formulario completado!</p>
                <Player autoplay src="./dogAnimations.json" background="transparent" speed="0.6" ></Player>
                <div className='modal-complete-end'>
                  <p>Un integrante del grupo se pondrá en contacto para seguir con la adopción</p>
                  <button type="button" className='btn-continue' onClick={closeModalAndResetForm}>Listo</button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Formulario;