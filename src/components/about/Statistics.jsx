const Statistics = () => {
  return (
    <div className="contentStatistics">
      <section className="statisticsBgn">
        <p className="statisticsText">
          En SOS Animal Fray Bentos tenemos un compromiso con la honestidad, es
          por esto que te mostramos todos lo que hemos gastado durante estos
          años
        </p>
        <img
          src="/dogs.png"
          alt="Foto de seis perros de distintas razas"
          className="statisticsImg"
        />
      </section>
      <section className="statistics">
        <article className="statisticsCard borderLG">
          <div className="statisticsCardText">
            <p className="statisticsCardPrice lightgreen">$182.803</p>
            <p className="statisticsCardTitle">Gastos veterinarios</p>
          </div>
          <p className="statisticsCardYear">2020</p>
        </article>
        <article className="statisticsCard borderY">
          <div className="statisticsCardText">
            <p className="statisticsCardPrice yellow">$591.767</p>
            <p className="statisticsCardTitle">Gastos veterinarios</p>
          </div>
          <p className="statisticsCardYear">2021</p>
        </article>
        <article className="statisticsCard borderG">
          <div className="statisticsCardText">
            <p className="statisticsCardPrice green">$325.705</p>
            <p className="statisticsCardTitle">Gastos veterinarios</p>
          </div>
          <p className="statisticsCardYear">2022</p>
        </article>
        <article className="statisticsCard borderT">
          <div className="statisticsCardText">
            <p className="statisticsCardPrice turquoise">$142.080</p>
            <p className="statisticsCardTitle">Gastos veterinarios</p>
          </div>
          <p className="statisticsCardYear">2023</p>
        </article>
        <article className="statisticsCard borderP">
          <div className="statisticsCardText">
            <p className="statisticsCardPrice pink">$105.841</p>
            <p className="statisticsCardTitle">Gastos veterinarios</p>
          </div>
          <p className="statisticsCardYear">2024</p>
        </article>
      </section>
    </div>
  )
}

export default Statistics
