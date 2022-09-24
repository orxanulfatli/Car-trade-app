import React from "react";
import "./ImageSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Lazy } from "swiper";
import { useState,useEffect } from "react";
import { useKey } from '../../../utils/useKey';

const ImageSlider = ({ images }) => {
    const [activeThumb, setActiveThumb] = useState(null);

  return (
      <>
          
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        lazy={true}
       
        modules={[Navigation, Thumbs, Lazy]}
        grabCursor={true}
        thumbs={{ swiper: activeThumb }}
        className="image-slider"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index.toString()}>
            <img className="swiper-lazy" data-src={item} />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        spaceBetween={10}
        navigation={true}
        slidesPerView={"auto"}
        modules={[Thumbs, Navigation]}
        className="image-slider-thumbs"
      >
        {images?.map((item, index) => (
          <SwiperSlide key={index.toString()}>
            <div className="image-slider-thumbs-wrapper">
              <img src={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSlider;
