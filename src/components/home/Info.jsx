import ButtonLink from '../ButtonLink'

function Info() {
  return (
    <div className="info">
      <section className="contentInfo">
        <article className="contentTitle">
          <div className="contentTitleTexts">
            <hr className="line top" />
            <h2 className="title">
              En SOS Fray Bentos, somos un grupo de
              personas que se dedica a:
            </h2>
            <hr className="line" />
          </div>
        </article>
        {/* <img
        src="./infoImg/fondo.svg"
        alt="Hombre dandole un beso a su perro en brazos"
        className="imgFondo"
      /> */}
        <article className="contentCards">
          <section className="card">
            <img
              src="./infoImg/perroYHumano.svg"
              alt="Perro y Humano"
              className="img"
            />
            <h3 className="titleCard">Fomentar adopciones responsables</h3>
            <p className="text">
              Buscamos familias amorosas para mejorar la calidad de vida del
              animal.
            </p>
          </section>
          <section className="card">
            <img src="./infoImg/huella.svg" alt="Huella" className="img" />
            <h3 className="titleCard">Financiar castraciones</h3>
            <p className="text">
              Brindamos castraciones gratuitas para familias de bajos recursos y
              para controlar la población de animales callejeros.
            </p>
          </section>
          <section className="card">
            <img
              src="./infoImg/chacho.svg"
              alt="Alcancia con forma de chancho"
              className="img"
            />
            <h3 className="titleCard">Recaudar fondos</h3>
            <p className="text">
              Buscamos solventar gastos veterinarios de animales callejeros o
              pertenecientes a familias de bajo recursos.
            </p>
          </section>
          <section className="card">
            <img
              src="./infoImg/presentacion.svg"
              alt="Persona haciendo una presentación"
              className="img"
            />
            <h3 className="titleCard">Brindar charlas educativas</h3>
            <p className="text">
              Fomentamos prácticas responsables del cuidado animal.
            </p>
          </section>
        </article>
        <ButtonLink text="Leer más" className="btn" />
      </section>
    </div>
  )
}

export default Info;