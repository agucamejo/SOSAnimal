const Valores = () => {
  return (
    <div className="container">
      <div className="valores">
        <div className="banner banner-1">
          <h2 className="h2-left">+400</h2>
          <p className="p-right">
            -<br />
            Castraciones
            <br />
            realizadas en los
            <br />
            últimos 3 años.
          </p>
          <img className= "img" src="/img-perro-big.png"></img>
        </div>

        <div className="banners-row">
          <div className="banner banner-2">
            <div>
              <h2 className="h2-left">+300</h2>
              <p className="p-left">
                Adopciones
                <br />
                de mascotas
              </p>
            </div>
          </div>

          <div className="banner banner-3">
            <div>
              <h2 className="h2-left">+200</h2>
              <p className="p-left">
                Animales
                <br />
                rescatados
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Valores;