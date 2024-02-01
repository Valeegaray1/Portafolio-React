import React from 'react'
import './testimonials.css'
import cert1 from '../../assets/certificadoR.png'
import cert2 from '../../assets/certificadoA.png'
import cert3 from '../../assets/certificadoJ.png'
import cert4 from '../../assets/certificadoN.png'
import cert5 from '../../assets/certificadoM.png'

import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Estudios</h5>
      <h2>Certificados</h2>
      <p className='detail'>Para acceder a todos, <a href="https://drive.google.com/drive/folders/1VDLEqgY88ZTa3S6TZkKdZPzA3GuYn7Uh?usp=sharing" target="_blank">click aquí</a>.</p>
      

      <Swiper className="certificados__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        <SwiperSlide className= 'certificados__document'>
        <img src={cert1} className='certificado__item-img' />
        </SwiperSlide>

        <SwiperSlide className= 'certificados__document'>
        <img src={cert2} className='certificado__item-img' />
        </SwiperSlide>
        

        <SwiperSlide className= 'certificados__document'>
        <img src={cert3} className='certificado__item-img' />
        </SwiperSlide>

        <SwiperSlide className= 'certificados__document'>
        <img src={cert4} className='certificado__item-img' />
        </SwiperSlide>

        <SwiperSlide className= 'certificados__document'>
        <img src={cert5} className='certificado__item-img' />
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Testimonials