import React from 'react'
import About from './components/about/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Facultad from './components/Facultad/Facultad'
import Figma from './components/portfolio/Figma/figma'



export const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Figma />
      <Facultad />
      <Testimonials />
      
      <Contact />
      <Footer />

    </div>
  )
}

export default App