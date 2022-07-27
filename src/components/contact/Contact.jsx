import React from 'react'
import './contact.css'
import {GrMail} from 'react-icons/gr'
import {BsWhatsapp} from 'react-icons/bs'

export const Contact = () => {
  return (
    <section id='contact'>
      <h5>get in touch</h5>
      <h2>contact me</h2>

      <div className="contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <GrMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>valeegaray1@gmail.com</h5>
            <a href='mailto:valeegaray1@gmail.com' target='_blank'>Envíame un mensaje</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+54 9 3764-501887</h5>
            <a href='https://api.whatsapp.com/send?phone=5493764501887' target='_blank'> Envíame un mensaje</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact