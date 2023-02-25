import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>Habilidades</h5>
      <h2>Mi experiencia</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3> Desarrolladora web</h3>
          <div className="experience__content">

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>HTML/CSS</h4>
              <small className='text-light'></small>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>TYPESCRIPT</h4>
              <small className='text-light'></small>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>JAVASCRIPT</h4>
              <small className='text-light'></small>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>REACT</h4>
              <small className='text-light'></small>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>ANGULAR</h4>
              <small className='text-light'></small>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <h4>NODE.JS</h4>
              <small className='text-light'></small>
            </article>

          </div>
        </div>

        
        
      </div>
    </section>
  )
}

export default Experience