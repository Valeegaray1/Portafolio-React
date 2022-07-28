import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mi trabajo reciente</h5>
      <h2>Portafolio</h2>

      <div className="portfolio__container">
        <article className='portfolio_item'>
          <div className="portfolio__item-image">
              <img src={IMG1} alt="" className='portfolio__prueba' />
          </div>
          <h3>Contador de clicks React</h3>
          <div className='porfolio__item-cta'>
          <a href='https://github.com/Valeegaray1/ContadorClicks' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio__item-image">
              <img src={IMG3} alt="" className='portfolio__prueba' />
          </div>
          <h3>Calculadora React</h3>
          <div className='porfolio__item-cta'>
          <a href='https://github.com/Valeegaray1/calculadoraReact' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio__item-image">
              <img src={IMG2} alt="" className='portfolio__prueba' />
          </div>
          <h3>Web React</h3>
          <div className='porfolio__item-cta'>
          <a href='https://github.com/Valeegaray1/apptestimonios2' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio