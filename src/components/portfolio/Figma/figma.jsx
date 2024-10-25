import React from 'react'
import './figma.css'
import IMG6 from '../../../assets/figma6.jpg'
import IMG2 from '../../../assets/figma2.jpg'
import IMG3 from '../../../assets/figma3.jpg'
import IMG4 from '../../../assets/figma4.jpg'
import IMG5 from '../../../assets/figma5.jpg'
import IMG14 from '../../../assets/bondisya.jpeg'

export const Figma = () => {
  return (
    <section id='portfolio'>
      <h5>más proyectos</h5>
      <h2>Mis diseños en Figma</h2>

      <div className="portfolio__container">
      

        <article className='portfolio_item'>
          <div className="portfolio__item-image">
              <img src={IMG2} alt="" className='portfolio__prueba' />
          </div>
          <h3>Manos solidarias</h3>
          <h4>Diseño para móviles de un voluntariado </h4><br></br>
          <div className='porfolio__item-cta'>
          <a href='https://www.figma.com/design/vTIeUmBqG4ks5XXKMD1lJw/ManosSolidarias?m=dev&node-id=0-1&t=hQavhLfjpcJbQ9PL-1' className='btn' target='_blank' rel="noopener noreferrer">Ver</a>
        
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio__item-image">
              <img src={IMG14} alt="" className='portfolio__prueba' />
          </div>
          <h3>Bondis Ya</h3>
          <h4>Diseño para móviles de la app Misionera BondisYa </h4><br></br>
          <div className='porfolio__item-cta'>
          <a href='https://www.figma.com/design/G4bWQ75430hDvCPfoaSjHi/SUSA?node-id=0-1&t=j8HMDGhoZtptrDuQ-1' className='btn' target='_blank' rel="noopener noreferrer">Ver</a>
        
          </div>
        </article>


        <article className='portfolio_item'>
          <div className="portfolio__item-image">
              <img src={IMG5} alt="" className='portfolio__prueba' />
          </div>
          <h3>Co.Fo.Mi</h3>
          <h4>Diseño web para el colegio de fonoaudiologos misiones</h4><br></br>
          <div className='porfolio__item-cta'>
          <a href='https://www.figma.com/design/Z0nm9u90M1nKse1t7uhTxp/Cofomi?m=dev' className='btn' target='_blank' rel="noopener noreferrer">Ver</a>
         
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio__item-image">
              <img src={IMG3} alt="" className='portfolio__prueba' />
          </div>
          <h3>Blue Print Arquitectos</h3>
          <h4>Disño para web de arquitectos</h4><br></br>
          
          <div className='porfolio__item-cta'>
          <a href='https://www.figma.com/design/c7zxMXTSIsiRlcgllC9zsY/Untitled?m=dev' className='btn' target='_blank' rel="noopener noreferrer">Ver</a>
        
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio__item-image">
              <img src={IMG4} alt="" className='portfolio__prueba' />
          </div>
          <h3>Nuevo Portafolio</h3>
          <h4>Diseño para un futuro portafolio </h4><br></br>
          <div className='porfolio__item-cta'>
          <a href='https://www.figma.com/design/oNco7Awzo6UB0uRUdWqxOD/Portafolio?m=dev' className='btn' target='_blank' rel="noopener noreferrer">Ver</a>
          
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio__item-image">
              <img src={IMG6} alt="" className='portfolio__prueba' />
          </div>
          <h3>Carrousel</h3>
          <h4>Diseño de carrousel de bebidas </h4><br></br>
          <div className='porfolio__item-cta'>
          <a href='https://www.figma.com/design/c6xbHafxRH0FmEqZE8rIBK/Carrousel?m=dev' className='btn' target='_blank' rel="noopener noreferrer">Ver</a>
          
          </div>
        </article>

       

       



      </div>
    </section>
  )
}

export default Figma