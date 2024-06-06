import { useState } from 'react'
import Subtitles from '../Subtitles'
import ButtonPrimary from '../ButtonPrimary'
import { HashLink as Link } from 'react-router-hash-link'

function Historia() {
  const [showIconMarea, setShowIconMarea] = useState(false)
  const [showIconSalvador, setShowIconSalvador] = useState(false)
  const [showIconChabela, setShowIconChabela] = useState(false)
  const [showIconTitan, setShowIconTitan] = useState(false)
  const [showIconBeethoven, setShowIconBeethoven] = useState(false)
  const [showIconRamona, setShowIconRamona] = useState(false)

  const [showHistoriaMarea, setShowHistoriaMarea] = useState(false)
  const [showHistoriaSalvador, setShowHistoriaSalvador] = useState(false)
  const [showHistoriaChabela, setShowHistoriaChabela] = useState(false)
  const [showHistoriaTitan, setShowHistoriaTitan] = useState(false)
  const [showHistoriaBeethoven, setShowHistoriaBeethoven] = useState(false)
  const [showHistoriaRamona, setShowHistoriaRamona] = useState(false)

  const [setIsMouseOverMarea] = useState(false)
  const [setIsMouseOverSalvador] = useState(false)
  const [setIsMouseOverChabela] = useState(false)
  const [setIsMouseOverTitan] = useState(false)
  const [setIsMouseOverBeethoven] = useState(false)
  const [setIsMouseOverRamona] = useState(false)

  const handleMouseEnter = (historia) => {
    switch (historia) {
      case 'Marea':
        setIsMouseOverMarea(true)
        break
      case 'Salvador':
        setIsMouseOverSalvador(true)
        break
      case 'Chabela':
        setIsMouseOverChabela(true)
        break
      case 'Titan':
        setIsMouseOverTitan(true)
        break
      case 'Beethoven':
        setIsMouseOverBeethoven(true)
        break
      case 'Ramona':
        setIsMouseOverRamona(true)
        break
      default:
        break
    }
  }

  const handleMouseLeave = (historia) => {
    const windowWidth = window.innerWidth

    if (windowWidth > 700) {
      switch (historia) {
        case 'Marea':
          setIsMouseOverMarea(false)
          setShowIconMarea(false)
          setShowHistoriaMarea(false)
          break
        case 'Salvador':
          setIsMouseOverSalvador(false)
          setShowIconSalvador(false)
          setShowHistoriaSalvador(false)
          break
        case 'Chabela':
          setIsMouseOverChabela(false)
          setShowIconChabela(false)
          setShowHistoriaChabela(false)

          break
        case 'Titan':
          setIsMouseOverTitan(false)
          setShowIconTitan(false)
          setShowHistoriaTitan(false)
          break
        case 'Beethoven':
          setIsMouseOverBeethoven(false)
          setShowIconBeethoven(false)
          setShowHistoriaBeethoven(false)
          break
        case 'Ramona':
          setIsMouseOverRamona(false)
          setShowIconRamona(false)
          setShowHistoriaRamona(false)
          break
        default:
          break
      }
    }
  }

  const handleVerHistoriaClick = (historia) => {
    setShowIconMarea(false)
    setShowHistoriaMarea(false)

    setShowIconSalvador(false)
    setShowHistoriaSalvador(false)

    setShowIconChabela(false)
    setShowHistoriaChabela(false)

    setShowIconTitan(false)
    setShowHistoriaTitan(false)

    setShowIconBeethoven(false)
    setShowHistoriaBeethoven(false)

    setShowIconRamona(false)
    setShowHistoriaRamona(false)

    switch (historia) {
      case 'Marea':
        setShowHistoriaMarea(true)
        setShowIconMarea(true)
        break
      case 'Salvador':
        setShowHistoriaSalvador(true)
        setShowIconSalvador(true)
        break
      case 'Chabela':
        setShowHistoriaChabela(true)
        setShowIconChabela(true)
        break
      case 'Titan':
        setShowHistoriaTitan(true)
        setShowIconTitan(true)
        break
      case 'Beethoven':
        setShowHistoriaBeethoven(true)
        setShowIconBeethoven(true)
        break
      case 'Ramona':
        setShowHistoriaRamona(true)
        setShowIconRamona(true)
        break
      default:
        break
    }
  }

  const handleCloseClick = () => {
    setShowIconMarea(false)
    setShowHistoriaMarea(false)

    setShowIconSalvador(false)
    setShowHistoriaSalvador(false)

    setShowIconChabela(false)
    setShowHistoriaChabela(false)

    setShowIconTitan(false)
    setShowHistoriaTitan(false)

    setShowIconBeethoven(false)
    setShowHistoriaBeethoven(false)

    setShowIconRamona(false)
    setShowHistoriaRamona(false)
  }

  return (
    <section className="contentHistoria">
      <article className="contentTitles">
        <Subtitles text="Historias de adopción" />
        <p className="subtitle">
          Estos valientes animales demuestran que el amor puede cambiar vidas al
          encontrar una familia cariñosa.
        </p>
      </article>
      <article className="contentCardsHistoria">
        <article className="container">
          <section
            className={`cardMax rosa cardHistoria cardNormal ${
              showHistoriaMarea ? 'showHistoria' : ''
            }`}
            onMouseEnter={() => handleMouseEnter('Marea')}
            onMouseLeave={() => handleMouseLeave('Marea')}
          >
            <h3 className="titleCard">Marea</h3>
            <button className="btn">9 años</button>
            <img src="./historiaImg/Marea.webp" alt="" className="imgMax" />
            <img src="./historiaImg/Marea.webp" alt="" className="imgMax" />
            <article className="tablet">
              <button
                className="btnHistoria"
                onClick={() => handleVerHistoriaClick('Marea')}
              >
                Ver historia
              </button>
              {showHistoriaMarea && (
                <div className="contentHistoriaTablet">
                  <p className="textCardTablet">
                    ¡Hola! Soy Marea, me encontraron con una pata lastimada,
                    incapaz de moverme bien. Pero gracias a la ayuda de SOS, fui
                    llevada a la veterinaria donde me curaron mi quebradura de
                    patita. Estuve en casa de una voluntaria en forma
                    transitoria, donde recibí todos los cuidados necesarios.
                    Resulta que mi antiguo dueño me maltrataba y luego me
                    abandonó. Pero ahora, gracias a Melina, tengo un lindo hogar
                    lleno de amor y cuidado.
                  </p>
                </div>
              )}
              {showIconMarea && (
                <div className="icon iconMarea" onClick={handleCloseClick}>
                  X
                </div>
              )}
            </article>
            <article className="desktop">
              <div className="contentTextCard">
                <p className="textCard">
                  ¡Hola! Soy Marea, me encontraron con una pata lastimada,
                  incapaz de moverme bien. Pero gracias a la ayuda de SOS, fui
                  llevada a la veterinaria donde me curaron mi quebradura de
                  patita. Estuve en casa de una voluntaria en forma transitoria,
                  donde recibí todos los cuidados necesarios. Resulta que mi
                  antiguo dueño me maltrataba y luego me abandonó. Pero ahora,
                  gracias a Melina, tengo un lindo hogar lleno de amor y
                  cuidado.
                </p>
              </div>
            </article>
          </section>

          <section
            className={`cardMin celeste cardHistoria cardNormal ${
              showHistoriaSalvador ? 'showHistoria' : ''
            }`}
            onMouseEnter={() => handleMouseEnter('Salvador')}
            onMouseLeave={() => handleMouseLeave('Salvador')}
          >
            <h3 className="titleCard">Salvador</h3>
            <button className="btn">3 años</button>
            <img src="./historiaImg/Salvador.webp" alt="" className="imgMin" />
            <img src="./historiaImg/Salvador.webp" alt="" className="imgMin" />
            <article className="tablet">
              <button
                className="btnHistoria"
                onClick={() => handleVerHistoriaClick('Salvador')}
              >
                Ver historia
              </button>
              {showHistoriaSalvador && (
                <div className="contentHistoriaTablet">
                  <p className="textCardTablet">
                    Hola, soy Salvador. Me encontraron tirado en un terreno
                    baldío, con una pata herida y llena de gusanos y garrapatas.
                    Me llevaron a la veterinaria donde me curaron y luego a un
                    hogar transitorio donde me alimentaron y me dieron mucho
                    amor. Ahora soy un perrito mimoso y juguetón, agradecido por
                    haber encontrado cuidado. Y lo mejor de todo, ¡ahora tengo
                    una dueña amorosa que me cuida y me quiere!
                  </p>
                </div>
              )}
              {showIconSalvador && (
                <div className="icon iconSalvador" onClick={handleCloseClick}>
                  X
                </div>
              )}
            </article>
            <article className="desktop">
              <div className="contentTextCard">
                <p className="textCard">
                  Hola, soy Salvador. Me encontraron tirado en un terreno
                  baldío, con una pata herida y llena de gusanos y garrapatas.
                  Me llevaron a la veterinaria donde me curaron y luego a un
                  hogar transitorio donde me alimentaron y me dieron mucho amor.
                  Ahora soy un perrito mimoso y juguetón, agradecido por haber
                  encontrado cuidado. Y lo mejor de todo, ¡ahora tengo una dueña
                  amorosa que me cuida y me quiere!
                </p>
              </div>
            </article>
          </section>

          <section className="cardText">
            <p className="text right">
              Aunque estos peques han atravesado momentos difíciles, ahora
              disfrutan de la felicidad junto a su nueva familia.
            </p>
          </section>
        </article>
        <article className="container reverse">
          <section className="cardText">
            <p className="text">
              Con sus cicatrices como evidencia, estos sobrevivientes ahora
              gozan de un hogar seguro y lleno de amor.
            </p>
          </section>

          <section
            className={`cardMax degrade cardHistoria cardNormal ${
              showHistoriaChabela ? 'showHistoria' : ''
            }`}
            onMouseEnter={() => handleMouseEnter('Chabela')}
            onMouseLeave={() => handleMouseLeave('Chabela')}
          >
            <h3 className="titleCard">Chabela</h3>
            <button className="btn">13 años</button>
            <img src="./historiaImg/Chabela.webp" alt="" className="imgMax" />
            <img src="./historiaImg/Chabela.webp" alt="" className="imgMax" />
            <article className="tablet">
              <button
                className="btnHistoria"
                onClick={() => handleVerHistoriaClick('Chabela')}
              >
                Ver historia
              </button>
              {showHistoriaChabela && (
                <div className="contentHistoriaTablet">
                  <p className="textCardTablet">
                    ¡Hola, soy Chabela. Fui abandonada en el basurero, preñada y
                    descartada como basura. Gracias a SOS, fui rescatada,
                    castrada y vacunada. Aunque era tímida al principio, ahora
                    soy dulce y tranquila. Estoy agradecida por el amor que me
                    dieron en el hogar transitorio. Y lo mejor de todo, ¡ahora
                    tengo un nuevo hogar, una nueva familia que me quiere y que
                    jamás me abandonarán!
                  </p>
                </div>
              )}
              {showIconChabela && (
                <div className="icon iconChabela" onClick={handleCloseClick}>
                  X
                </div>
              )}
            </article>
            <article className="desktop">
              <div className="contentTextCard">
                <p className="textCard">
                  Hola, soy Chabela. Fui abandonada en el basurero, preñada y
                  descartada como basura. Gracias a SOS, fui rescatada, castrada
                  y vacunada. Aunque era tímida al principio, ahora soy dulce y
                  tranquila. Estoy agradecida por el amor que me dieron en el
                  hogar transitorio. Y lo mejor de todo, ¡ahora tengo un nuevo
                  hogar, una nueva familia que me quiere y que jamás me
                  abandonarán!
                </p>
              </div>
            </article>
          </section>

          <section
            className={`cardMin anaranjado cardHistoria cardNormal ${
              showHistoriaTitan ? 'showHistoria' : ''
            }`}
            onMouseEnter={() => handleMouseEnter('Titan')}
            onMouseLeave={() => handleMouseLeave('Titan')}
          >
            <h3 className="titleCard">Titán</h3>
            <button className="btn">3 años</button>
            <img src="./historiaImg/Titan.webp" alt="" className="imgMin" />
            <img src="./historiaImg/Titan.webp" alt="" className="imgMin" />
            <article className="tablet">
              <button
                className="btnHistoria"
                onClick={() => handleVerHistoriaClick('Titan')}
              >
                Ver historia
              </button>
              {showHistoriaTitan && (
                <div className="contentHistoriaTablet">
                  <p className="textCardTablet">
                    Mucho gusto, mi nombre es Titán, me encontraron en el
                    basurero de Fray Bentos en el 2021, ya sin fuerzas, mi
                    cuerpo estaba completamente quemado, sin pelos y sangrando,
                    una voluntaria me tuvo en transitorio y gracias a los
                    cuidados del grupo y veterinarios luego de muchos meses
                    logré recuperarme completamente, mi familia adoptiva viajó
                    desde el departamento de Canelones para llevarme con ellos a
                    vivir, en donde pude conocer el mar.
                  </p>
                </div>
              )}
              {showIconTitan && (
                <div className="icon iconTitan" onClick={handleCloseClick}>
                  X
                </div>
              )}
            </article>
            <article className="desktop">
              <div className="contentTextCard">
                <p className="textCard">
                  Mucho gusto, mi nombre es Titán, en el 2021 me encontraron en
                  el basurero de Fray Bentos, ya sin fuerzas, mi cuerpo estaba
                  completamente quemado, sin pelos y sangrando, una voluntaria
                  me tuvo en transitorio y gracias a los cuidados del grupo y
                  veterinarios luego de muchos meses logré recuperarme
                  completamente, mi familia adoptiva viajó desde el departamento
                  de Canelones para llevarme con ellos a vivir, en donde pude
                  conocer el mar.
                </p>
              </div>
            </article>
          </section>
        </article>
        <article className="container">
          <section
            className={`cardMax aqua cardHistoria cardNormal ${
              showHistoriaBeethoven ? 'showHistoria' : ''
            }`}
            onMouseEnter={() => handleMouseEnter('Beethoven')}
            onMouseLeave={() => handleMouseLeave('Beethoven')}
          >
            <h3 className="titleCard">Beethoven</h3>
            <button className="btn">4 años</button>
            <img src="./historiaImg/Beethoven.webp" alt="" className="imgMax" />
            <img src="./historiaImg/Beethoven.webp" alt="" className="imgMax" />
            <article className="tablet">
              <button
                className="btnHistoria"
                onClick={() => handleVerHistoriaClick('Beethoven')}
              >
                Ver historia
              </button>
              {showHistoriaBeethoven && (
                <div className="contentHistoriaTablet">
                  <p className="textCardTablet">
                    Hola! Mi nombre es Beethoven. Fui rescatado por SOS Animal
                    en el basurero municipal de la ciudad de Fray Bentos, me
                    castraron y curaron las heridas. Después de recuperarme, fui
                    adoptado por un chico que pensé que me amaría para siempre,
                    pero al final me abandonó. Pero la vida dio un giro, y mis
                    caminos se cruzaron con los de Sergio, quien no dudó en
                    llevarme con él y su familia perruna. Ahora disfruto de una
                    vida tranquila y llena de amor.
                  </p>
                </div>
              )}
              {showIconBeethoven && (
                <div className="icon iconBeethoven" onClick={handleCloseClick}>
                  X
                </div>
              )}
            </article>
            <article className="desktop">
              <div className="contentTextCard">
                <p className="textCard">
                  Hola! Mi nombre es Beethoven. Fui rescatado por SOS Animal en
                  el basurero municipal de la ciudad de Fray Bentos, me
                  castraron y curaron las heridas. Después de recuperarme, fui
                  adoptado por un chico que pensé que me amaría para siempre,
                  pero al final me abandonó. Pero la vida dio un giro, y mis
                  caminos se cruzaron con los de Sergio, quien no dudó en
                  llevarme con él y su familia perruna. Ahora disfruto de una
                  vida tranquila y llena de amor.
                </p>
              </div>
            </article>
          </section>

          <section
            className={`cardMin fucsia cardHistoria cardNormal ${
              showHistoriaRamona ? 'showHistoria' : ''
            }`}
            onMouseEnter={() => handleMouseEnter('Ramona')}
            onMouseLeave={() => handleMouseLeave('Ramona')}
          >
            <h3 className="titleCard">Ramona</h3>
            <button className="btn">3 años</button>
            <img src="./historiaImg/Ramona.webp" alt="" className="imgMin" />
            <article className="tablet">
              <button
                className="btnHistoria"
                onClick={() => handleVerHistoriaClick('Ramona')}
              >
                Ver historia
              </button>
              {showHistoriaRamona && (
                <div className="contentHistoriaTablet">
                  <p className="textCardTablet">
                    ¡Hola! Soy Ramona. Me rescataron en un campo, llena de
                    heridas. SOS y una voluntaria me cuidaron temporalmente en
                    un hogar transitorio con antibióticos y curaciones hasta
                    que, finalmente, encontré una familia que me quiere. Ahora
                    juego, tomo sol y soy muy obediente. ¡Estoy feliz de tener
                    un hogar!
                  </p>
                </div>
              )}
              {showIconRamona && (
                <div className="icon iconRamona" onClick={handleCloseClick}>
                  X
                </div>
              )}
            </article>
            <article className="desktop">
              <div className="contentTextCard">
                <p className="textCard">
                  ¡Hola! Soy Ramona. Me rescataron en un campo, llena de
                  heridas. SOS y una voluntaria me cuidaron temporalmente en un
                  hogar transitorio con antibióticos y curaciones hasta que,
                  finalmente, encontré una familia que me quiere. Ahora juego,
                  tomo sol y soy muy obediente. ¡Estoy feliz de tener un hogar!
                </p>
              </div>
            </article>
          </section>

          <section className="cardText">
            <p className="text right">
              Cada uno tiene una historia que nos enseña que el cariño puede
              transformarlo todo. ¿Te animás a ser parte de su felicidad?
              ¡Adoptá hoy y formá parte de sus vidas!
            </p>
            <Link to="/adoptions">
              <ButtonPrimary text="Adopciones" className="buttonPrimary" />
            </Link>
          </section>
        </article>
      </article>
      <Link to="/adoptions">
        <ButtonPrimary text="Adopciones" className="buttonPrimary2" />
      </Link>
    </section>
  )
}

export default Historia
