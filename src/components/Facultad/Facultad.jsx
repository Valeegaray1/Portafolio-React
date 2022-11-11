import React from 'react'
import './Facultad.css'
import { TbMilitaryAward } from 'react-icons/tb'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineFolderOpen } from 'react-icons/ai'


export const About = () => {
  return (
    <section id='facultad'>

      <h2> Sobre mi Carrera y Estudios</h2>
      <p className='texto'>Tecnicatura en programación e innovación tecnológica</p><br></br>
      

      <div className='container facultad__container'>
        
        <div className='facultad__content'>
          <div className='facultad__cards'>
            <article className='facultad__card'>
              <TbMilitaryAward className='about__icon' />
              <h5>Materias aprobadas</h5>
              <small>•Análisis Estructurado</small><br></br>
              <small>•Programación robótica - Arduino - C</small><br></br>
              <small>•Estadística</small><br></br>
              <small>•Base de datos</small><br></br>
              <small>•Sistemas operativos</small><br></br>
              <small>•Estructura de datos - Java</small><br></br>
              <small>•Emprendedorismo</small><br></br>
              <small>•Inglés técnico</small><br></br>
              <small>•Electrónica digital</small><br></br>
              <small>•Introducción a la programación</small><br></br>
              <small>•Matemática</small><br></br>
              <small>•Administración</small><br></br>
              <small>•Ofimática</small><br></br>

            </article>

            <article className='facultad__card'>
              <FiUsers className='about__icon' />
              <h5>Materias cursando</h5>
              <small>•Emprendedorismo 2</small><br></br>
              <small>•Lenguaje SQL</small><br></br>
              <small>•Marketing digital</small><br></br>
              <small>•Arquitectura Software</small><br></br>
              <small>•Redes e Internet</small><br></br>
              <small>•Analisis OO</small><br></br>
              <small>•POO</small><br></br>
              

            </article>

            <div >
            <article className='facultad__card'>
              <AiOutlineFolderOpen className='about__icon' />
              <h5>Próximas materias a cursar</h5>
              <small>•Emprendedorismo 3</small><br></br>
              <small>•Lenguaje no SQL</small><br></br>
              <small>•Ingenieria Software</small><br></br>
              <small>•Taller de análisis</small><br></br>
              <small>•Programación web y móvil</small><br></br>
              <small>•Ciberseguridad</small><br></br>
              <small>•Etica y deontología</small><br></br>
              <small>•Finanzas</small><br></br>
              <small>•Metodologías Agiles</small><br></br>
              <small>•QA y Testing</small><br></br>
              <small>•Taller de redes</small><br></br>
              <small>•Inteligencia Artificial</small><br></br>
              <small>•Big Data y BI</small><br></br>
              <small>•Derrecho informático</small><br></br>
              <small>•Taller IOT</small><br></br>
              <small>•Prácticas profesionales</small><br></br>
              <small>•Innovación abierta</small><br></br>


            </article>
            </div>
          </div>

          <p className='texto'>
            Actualmente cursando la tecnicatura (Segundo año), luego tengo planeado hacer la licenciatura.
          </p>
        </div>
      </div>

    </section>
  )
}

export default About