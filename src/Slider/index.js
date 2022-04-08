import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import Hexagon from "../Hexagon";
import "swiper/css";
import "swiper/css/pagination";
import "./style.scss";

export default function Slider({ events, setActiveEvent }) {
  return (
    <div className="hexagon-slider">
      <Swiper
        onActiveIndexChange={(swiper) => { setActiveEvent(swiper.activeIndex) }}
        initialSlide={2}
        slidesPerView={5}
        spaceBetween={0}
        centeredSlides={true}
        mousewheel={{
          invert: true
        }}
        modules={[Mousewheel]}
        className="mySwiper"
        noSwiping={true}
        noSwipingClass={'swiper-wrapper'}
      >
        <SwiperSlide><Hexagon event={events[0]} /></SwiperSlide>
        <SwiperSlide><Hexagon event={events[1]} /></SwiperSlide>
        <SwiperSlide><Hexagon event={events[2]} /></SwiperSlide>
        <SwiperSlide><Hexagon event={events[3]} /></SwiperSlide>
        <SwiperSlide><Hexagon event={events[4]} /></SwiperSlide>
      </Swiper>
    </div>
  );
}
