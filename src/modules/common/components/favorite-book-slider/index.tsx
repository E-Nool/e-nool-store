//@ts-nocheck
'use client';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import publisherbook from "@public/images/publisher-book.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";


import FavBook1 from "@public/images/fav-books-1.png";
import FavBook2 from "@public/images/fav-books-2.jpg";
import FavBook3 from "@public/images/fav-books-3.png";
import FavBook4 from "@public/images/fav-books-4.png";
import FavBook5 from "@public/images/fav-books-5.png";
import FavBook6 from "@public/images/fav-books-6.png";


const FavoriteBookSlider = () => {
  const swiperRef = useRef(null);

  const static_title = (
    <>
      Meet Your Next
      <br className="hidden lg:inline-block" />
      Favorite Book
    </>
  );

  const getSliderObj = (title, image) => ({title, image});

  const slides = [
    getSliderObj(static_title, FavBook1),
    getSliderObj(static_title, FavBook2),
    getSliderObj(static_title, FavBook3),
    getSliderObj(static_title, FavBook4),
    getSliderObj(static_title, FavBook5),
    getSliderObj(static_title, FavBook6)
  ];

	return (
		<div className=" mt-10 text-[#015464] bg-[#F9FCFB] rounded-xl text-center p-5 w-full md:px-14 relative  container  py-10 mx-auto ">
      <h1 className=" font-extrabold text-3xl font-graphikBold">
        eNOOL Bookshelf
      </h1>
      <p className=" p-5 text-sm font-graphik mx-auto">
        Creating a bookshelf can be a charming way to arrange and showcase your interests, collections, or rare ebooks.
      </p>

      <Swiper
        ref={swiperRef}
        spaceBetween={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          el: ".swiper-pagination-right",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span className="${className}" style="background-color: #015464;"></span>`;
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font  md:text-4xl lg:text-7xl mb-4 font-graphikBold text-[#015464]">
                  {slide?.title}
                  <div className="h-1 w-full bg-[#015464]  rounded"></div>
                </h1>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Image
                  className="object-cover object-center rounded"
                  alt="hero"
                  src={slide?.image}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden md:container md:mx-auto md:flex   md:flex-row flex-col items-center">
        <div className="  lg:w-full md:w-1/2 w-5/6 lg:flex-grow  lg:pr-24 md:pr-24 flex flex-row md:items-start md:  mb-16 md:mb-0  md:text-left sm:text-center ">
          <div className="swiper-pagination-right  mt-2 space-x-1 w-30 h-10 ml-4 "></div>
        </div>
      </div>
    </div>
	);
}

export default FavoriteBookSlider;