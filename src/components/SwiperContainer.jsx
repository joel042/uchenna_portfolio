import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import SwiperCard from './SwiperCard';

function SwiperContainer() {
  return (
    <div>
        <Swiper className='text-white'
      spaceBetween={20}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><SwiperCard/></SwiperSlide>
      <SwiperSlide><SwiperCard/></SwiperSlide>
      <SwiperSlide><SwiperCard/></SwiperSlide>
      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ... */}
    </Swiper>
    </div>
  )
}

export default SwiperContainer;
