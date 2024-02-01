import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.jpeg'
import HeaderSocials from './HeaderSocials'

export const Header = () => {
  return (
    <header> 
      <div className="container header__container">
        <h5>Hola, soy</h5>
        <h1>Valentina Garay</h1>
        <h5 className="text-light"> Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="me" className='meImg' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}
export default Header
