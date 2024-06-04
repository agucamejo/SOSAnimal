import { useEffect, useState } from 'react'
import Subtitles from '../../components/Subtitles'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import askAndAnswers from '../../utils/askAndAnswers'

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    const askFAQHeader = document.querySelectorAll('.askFAQHeader')

    askFAQHeader.forEach((header, index) => {
      header.addEventListener('click', () => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
      })
    })
  }, [])

  useEffect(() => {
    const askFAQHeader = document.querySelectorAll('.askFAQHeader')

    askFAQHeader.forEach((header, index) => {
      const askFAQText = header.nextElementSibling

      if (activeIndex === index) {
        header.classList.add('active')
        askFAQText.style.maxHeight = askFAQText.scrollHeight + 'px'
      } else {
        header.classList.remove('active')
        askFAQText.style.maxHeight = 0
      }
    })
  }, [activeIndex])

  return (
    <section className="containerFAQ">
      <div className="contentTitles">
        <Subtitles text="Preguntas frecuentes" />
      </div>
      <article className="containerAskFAQ">
        {askAndAnswers.map((item, index) => (
          <section className="askFAQ" key={index}>
            <div className="askFAQHeader">
              <h3 className="titleAskFAQ">{item.ask}</h3>
              {activeIndex === index ? (
                <IoIosArrowUp className="iconFAQ" />
              ) : (
                <IoIosArrowDown className="iconFAQ" />
              )}
            </div>
            <div className="askFAQText">
              <p className="textAskFAQ">{item.answer}</p>
            </div>
          </section>
        ))}
      </article>
    </section>
  )
}

export default Faq;
