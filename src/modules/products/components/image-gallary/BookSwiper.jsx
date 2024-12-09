"use client"

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import TrendingReads1 from "../../../../../public/images/LandingPage/TrendingReads1.png"
import Image from "next/image"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { getProductImage } from "@lib/util/prices"

export default function BookSwiper({ images }) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={1}
      className="!flex h-full flex-col"
      pagination={{
        el: ".swiper-pagination-2",
        clickable: true,

        renderBullet: (index, className) => {
          return `<span class="${className}" style="background-color: #015464;"></span>`
        },
      }}
      onSwiper={(swiper) => {}}
      onSlideChange={() => {}}
    >
      <div className="   mx-auto  w-36 h-10   ">
        {" "}
        <div className="swiper-pagination-2  items-center justify-center px-10 "></div>
      </div>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            className=" rounded  object-cover  object-center mb-4 mx-auto 2xl:w-64 w-48"
            src={getProductImage(image.url)}
            alt="content"
            width={220}
            height={320}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
