import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG7 from '../../assets/muni.jpeg'
import IMG8 from '../../assets/portfolio8.jpg'
import IMG9 from '../../assets/portfolio9.jpeg'
import IMG10 from '../../assets/educacion.jpeg'
import IMG11 from '../../assets/michicoca.jpeg'
import IMG12 from '../../assets/Beneficios.jpeg'
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
          <a href='https://valeegaray1.github.io/IrinaGauna/' className='btn' target='_blank' rel="noopener noreferrer">Probar</a>
          </div>
        </article>
      

        <article className='portfolio_item'>
          <div className="portfolio__item-image">
              <img src={IMG9} alt="" className='portfolio__prueba' />
          </div>
          <h3>Web para el colegio de Fonoaudiologos Misiones</h3>
          <h4>Desarrollado con React, javascript, HTML y CSS. Diseñado Con Figma. </h4><br></br>
          <div className='porfolio__item-cta'>
          <a href='https://github.com/Valeegaray1/CoFoMiWeb' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
          <a href='https://cofomi.org.ar/' className='btn' target='_blank' rel="noopener noreferrer">Probar</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio__item-image">
              <img src={IMG7} alt="" className='portfolio__prueba' />
          </div>
          <h3>Portal Administrativo Municipalidad </h3>
          <h4>Desarrollado con React, Vite y typescript. Consulta distintos endpoints para gestionar beneficios. Asignar, remover, consultar. </h4><br></br>
          <div className='porfolio__item-cta'>
          <a href='https://municipalidad.missionup.com.ar/iniciar-sesion' className='btn' target='_blank' rel="noopener noreferrer">Probar</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio__item-image">
              <img src={IMG12} alt="" className='portfolio__prueba' />
          </div>
          <h3>Web beneficios</h3>
          <h4>Desarrollada con React</h4><br></br>
          
          <div className='porfolio__item-cta'>
          <a href='https://beneficios.missionup.com.ar/' className='btn' target='_blank' rel="noopener noreferrer">Probar</a>
        
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
          <a href='https://valeegaray1.github.io/calculadoraReact/' className='btn' target='_blank' rel="noopener noreferrer">Probar</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio__item-image">
              <img src={IMG11} alt="" className='portfolio__prueba' />
          </div>
          <h3>Portada michicoca</h3>
          <h4>Solo Html y css Desarrollada con un poquito de tiempo libre, aun en construcción.</h4><br></br>
          <div className='porfolio__item-cta'>
          <a href='https://github.com/Valeegaray1/MichiCoca' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
          <a href='https://valeegaray1.github.io/MichiCoca/' className='btn' target='_blank' rel="noopener noreferrer">Probar</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio__item-image">
              <img src={IMG10} alt="" className='portfolio__prueba' />
          </div>
          <h3>Portal administrativo Educacion Misiones</h3>
          <h4>Desarrollado con react, vite, typescript. Consulta distintos endpoints para gestionar beneficios e instituciones. Asignar, remover, consultar.</h4><br></br>
          <div className='porfolio__item-cta'>
          <a href='https://educacion.missionup.com.ar/iniciar-sesion' className='btn' target='_blank' rel="noopener noreferrer">Probar</a>
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
          <a href='https://valeegaray1.github.io/appTestimonios/' className='btn' target='_blank' rel="noopener noreferrer">Probar</a>
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