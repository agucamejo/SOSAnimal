import Navbar from '../../components/Navbar'
import Socio from '../../components/collaborations/Socio'
import Voluntario from '../../components/collaborations/Voluntario'
import Donaciones from '../../components/collaborations/Donaciones'
import Subtitles from '../../components/Subtitles'

const Collaborations = () => {
  return (
    <div>
      <Navbar />
      <div className="contentColab">
        <section className="colaborations">
          <section className="contentTitlesColab">
            <Subtitles />
            <h1 className="titleColab">Cómo podés ayudar a los animales</h1>
          </section>
          <Socio />
          <Voluntario />
          <Donaciones />
        </section>
      </div>
    </div>
  )
}

export default Collaborations;

