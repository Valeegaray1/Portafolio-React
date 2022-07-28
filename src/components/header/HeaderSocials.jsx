import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/valentina-garay-8486a8233/' target='_blank' rel="noopener noreferrer">
          <BsLinkedin /> </a>
        <a href='https://github.com/Valeegaray1' target='_blank' rel="noopener noreferrer">
          <FaGithub />
        </a>
          
    </div>
  )
}

export default HeaderSocials