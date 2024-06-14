import React from 'react';
import questions from './questionsData';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FreeMode } from "swiper/modules"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { EffectFade } from 'swiper/modules';
import './Swiper.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCard from './SwiperCard';

const SwiperComponent = () => {
  return (
    <div className='swiper-container'>
        <h2>Get Answers</h2>
        <h4>to all your questions</h4>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        freeMode={true}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
            0:{
                slidesPerView:1,
                spaceBetween:10,
            },
            480:{
                slidesPerView:2,
                spaceBetween:10,
                
            },
            768:{
                slidesPerView:3,
                spaceBetween:15,
            },

        }}
        //effect="fade"
      >
{
    questions.map((question, id) => (
        <div>
            <SwiperSlide key={id}>
                <SwiperCard question={question} id={id}/>
            </SwiperSlide>
        </div>
    ))
}
      </Swiper>
    </div>
  )
}

export default SwiperComponent

