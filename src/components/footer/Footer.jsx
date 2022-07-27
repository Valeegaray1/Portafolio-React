import React from 'react'
import './Footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'



export const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Valentina</a>
      <ul className='permalinks'>
        <li> <a href='#'>Home</a></li>
        <li> <a href='about'>About me</a></li>
        <li> <a href='experience'>Experience</a></li>
        <li> <a href='portfolio'>Portafolio</a></li>
        <li> <a href='contact'>Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.instagram.com/valengry_/'> <AiOutlineInstagram /> </a>
        <a href='https://www.linkedin.com/in/valentina-garay-8486a8233/'> <BsLinkedin /> </a>
      </div>
      
      </footer>
  )
}

export default Footer
