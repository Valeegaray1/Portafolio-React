import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG7 from '../../assets/portfolio7.jpg'

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mi trabajo reciente</h5>
      <h2>Portafolio</h2>

      <div className="portfolio__container">
      <article className='portfolio_item'>
          <div className="portfolio__item-image">
              <img src={IMG5} alt="" className='portfolio__prueba' />
          </div>
          <h3>Página De fotografía</h3>
          <h4>Desarrollada con Javascript, HTML y CSS, para Irina Gauna, Fotógrafa</h4><br></br>
          
          <div className='porfolio__item-cta'>
          <a href='https://github.com/Valeegaray1/IrinaGauna' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
          <a href='https://valeegaray1.github.io/IrinaGauna/' className='btn' target='_blank' rel="noopener noreferrer">Github Pages</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio__item-image">
              <img src={IMG4} alt="" className='portfolio__prueba' />
          </div>
          <h3>Buscador de imágenes React</h3>
          <h4>Desarrollado con React, javascript, HTML y CSS </h4><br></br>
          <div className='porfolio__item-cta'>
          <a href='https://github.com/Valeegaray1/buscadordeimagenesReact' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
          <a href='https://valeegaray1.github.io/buscadordeimagenesReact/' className='btn' target='_blank' rel="noopener noreferrer">Github Pages</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio__item-image">
              <img src={IMG3} alt="" className='portfolio__prueba' />
          </div>
          <h3>Calculadora React</h3>
          <h4>Desarrollado con React, javascript, HTML y CSS </h4><br></br>
          <div className='porfolio__item-cta'>
          <a href='https://github.com/Valeegaray1/calculadoraReact' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
          <a href='https://valeegaray1.github.io/calculadoraReact/' className='btn' target='_blank' rel="noopener noreferrer">Github Pages</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio__item-image">
              <img src={IMG7} alt="" className='portfolio__prueba' />
          </div>
          <h3>Página De Heladería</h3>
          <h4>Desarrollada con Mobirise</h4><br></br>
          <div className='porfolio__item-cta'>
          <a href='https://github.com/Valeegaray1/HeladeriaMobirise' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
          <a href='https://valeegaray1.github.io/HeladeriaMobirise/' className='btn' target='_blank' rel="noopener noreferrer">Github Pages</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio__item-image">
              <img src={IMG2} alt="" className='portfolio__prueba' />
          </div>
          <h3>Web clientes</h3>
          <h4>Desarrollado con React, javascript, HTML y CSS </h4><br></br>
          <div className='porfolio__item-cta'>
          <a href='https://github.com/Valeegaray1/apptestimonios2' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
          <a href='https://valeegaray1.github.io/appTestimonios/' className='btn' target='_blank' rel="noopener noreferrer">Github Pages</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio__item-image">
              <img src={IMG1} alt="" className='portfolio__prueba' />
          </div>
          <h3>Contador de clicks</h3>
          <h4>Desarrollado con React, javascript, HTML y CSS </h4><br></br>
          <div className='porfolio__item-cta'>
          <a href='https://github.com/Valeegaray1/ContadorClicks' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio