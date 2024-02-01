import React from 'react'
import './about.css'
import me from '../../assets/me-about.jpeg'
import { TbMilitaryAward } from 'react-icons/tb'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineFolderOpen } from 'react-icons/ai'


export const About = () => {
  return (
    <section id='about'>

      <h2> Sobre mi</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={me} alt='about' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <TbMilitaryAward className='about__icon' />
              <h5>Argentina</h5>
              <small>Posadas</small>

            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Edad</h5>
              <small>23 años</small>

            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon' />
              <h5>Estudiante</h5>
              <small>•Tecnicatura Gestión en programación e innovación digital</small> <br></br>
              <small>•Inglés</small>


            </article>
          </div>

          <p>
            Soy una persona tranquila, se escuchar y expresarme, cuido mi salud física y mental, me mantengo activa, me alimento bien y voy a terapia, tengo hobbies y me dedico al estudio, en la facultad y de forma independiente, me gusta aprender de los demás.
          </p>

          <a href='#contact' className='btn btn-primary'>Hablemos</a>

        </div>
      </div>

    </section>
  )
}

export default About