import { Player } from '@lottiefiles/react-lottie-player';
import Subtitles from '../Subtitles'
import { useState, useEffect } from 'react';

function Formulario() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState();
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

    const regex = /^[0-9]*$/;
    
    if (regex.test(value) && value.lenght > 0 && value.lenght < 3) {
      setAge(value);
    }
  };

  const handleTelephoneChange = (event) => {
    const { value } = event.target;
    
    const regex = /^[0-9]*$/;
    
    if (regex.test(value) && value.length <= 8) {
      setTelephone(value);
    }
  };

  const isFormValid = () => {
    return name.trim() !== "" && name.trim().length > 1 && address.trim() !== "" && address.trim().length > 3 ;
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

  function Submit() {
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
        <form className="form" onSubmit={(e) => Submit(e)}>
          <h4>Formulario de adopción</h4>
          <p>Nombre y Apellido</p>
          <input type="text" value={name} name="Name" placeholder="Tu nombre" onChange={handleNameChange} required/>
          <p>Teléfono</p>
          <div style={{position: 'relative', width: '100%'}}>
            <span style={{position: 'absolute', display: 'flex', alignItems: "center", gap: "3px", top: '50%', transform: 'translateY(-50%)', left: '15px', color: '#655f5f'}}><img src="data:image/png;base64,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" alt="Uruguay Flag" width="20px" height="auto" /> +598 |</span>
            <input style={{paddingLeft: '90px'}} type="text" value={telephone} name="Telephone" onChange={handleTelephoneChange} required/>
          </div>

          <p>Edad</p>
          <input type="number" min="0" step="1" value={age} name="Age" placeholder="Cuántos años tienes" onChange={handleAgeChange} required/>
          <p>Dirección</p>
          <input type="text" value={address} name="Address" placeholder="Tu dirección" onChange={handleAddressChange} required />
          <button type="button" onClick={() => setConfirmationModalVisible(true)} disabled={!isFormValid()} className='btn-continue'>Continuar</button>
          
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
                <img src='./close-modalForm.svg' className="modal-close" onClick={() => setConfirmationModalVisible(false)} alt="close modal"/>
                <p className='title-form-complete'>¡Formulario completado!</p>
                <Player autoplay src="./dogAnimations.json" background="transparent" speed="0.6" loop></Player>
                <div className='modal-complete-end'>
                  <p>Un integrante del grupo se pondrá en contacto para seguir con la adopción</p>
                  <button type="button" className='btn-continue' onClick={() => setConfirmationModalVisible(false)}>Listo</button>
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