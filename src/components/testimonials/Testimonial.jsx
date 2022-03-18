import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination, Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonial = () => {
  return (
    <section id="Testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
            
     <Swiper className="container testimonials__container">
       <SwiperSlide className="testimonial">
         <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />            
         </div>
         <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Modi, alias recusandae sit suscipit ipsum obcaecati at eveniet,provident fuga necessitatibus 
              fugit, libero sequi eaque eius eligendi ullam nulla consequuntur laboriosam.
            </small>
       </SwiperSlide>   
        <SwiperSlide className="testimonial">
         <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One" />            
         </div>
         <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Modi, alias recusandae sit suscipit ipsum obcaecati at eveniet,provident fuga necessitatibus 
              fugit, libero sequi eaque eius eligendi ullam nulla consequuntur laboriosam.
            </small>
       </SwiperSlide> 
        <SwiperSlide className="testimonial">
         <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One" />            
         </div>
         <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Modi, alias recusandae sit suscipit ipsum obcaecati at eveniet,provident fuga necessitatibus 
              fugit, libero sequi eaque eius eligendi ullam nulla consequuntur laboriosam.
            </small>
       </SwiperSlide> 
        <SwiperSlide className="testimonial">
         <div className="client__avatar">
            <img src={AVTR4} alt="Avatar One" />            
         </div>
         <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Modi, alias recusandae sit suscipit ipsum obcaecati at eveniet,provident fuga necessitatibus 
              fugit, libero sequi eaque eius eligendi ullam nulla consequuntur laboriosam.
            </small>
       </SwiperSlide>  
     </Swiper>
    </section>
  )
}

export default Testimonial