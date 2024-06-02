import React from "react";

const InfoCard = () => {
  return (
    <div className="info-container">
    <div className="info-card">
      <div className="info-text">
        <img
          src="images/Cat&Dog.svg"
          alt="Información útil"
          className="header-image img-perrocat"
        />
        <h1>Información útil</h1>
        <p>
          Acá encontrarás recursos valiosos para el cuidado de tus mascotas como
          contactos de emergencia, consejos prácticos y datos a tener en cuenta.
        </p>
      </div>
      <div className="info-image">
        <img src="images/gatos_info.png" alt="Gatos" />
      </div>
    </div>
    </div>
  );
};

export default InfoCard;
