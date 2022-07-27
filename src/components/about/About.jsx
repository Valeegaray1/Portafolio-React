import React from 'react'
import './about.css'
import me from '../../assets/me-about.jpg'
import {TbMilitaryAward} from 'react-icons/tb'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'


export const About = () => {
  return (
    <section id='about'>
      
      <h2> Sobre mi</h2>
      
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={me} alt='about image' />
          </div>
        </div>

        <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
               <TbMilitaryAward className='about__icon'/>
               <h5>Argentina</h5>
               <small>Posadas</small>

          </article>

          <article className='about__card'>
               <FiUsers className='about__icon'/>
               <h5>22</h5>
               <small>años</small>

          </article>

          <article className='about__card'>
               <AiOutlineFolderOpen className='about__icon'/>
               <h5>Estudiante</h5>
               <small>Tec. Analista en sistemas/inglés</small>
              

          </article>           
        </div>

        <p>
            Me sumergí no hace mucho en el mundo de la programación y logró atraparme, busco superarme constantemente con mis proyectos, aprendiendo nuevas tecnologías, dedicandole su tiempo correspondiente para llegar al resultado deseado.
          </p>

          <a href='#contact' className='btn btn-primary'>Hablemos</a>

        </div>
      </div>

    </section>
  )
}

export default About