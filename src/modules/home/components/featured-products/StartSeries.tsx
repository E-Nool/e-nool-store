// @ts-nocheck
"use client"
import React, { useState, useEffect, useRef } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, FreeMode } from "swiper/modules"
import { useInfiniteQuery } from "@tanstack/react-query"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules

import Image from "next/image"

import CarouselCardItems from "@modules/common/components/CarouselCards/CarouselCards"

import leftarrow from "@modules/common/icons/left-arrow.png"
import rightarrow from "@modules/common/icons/right-arrow.png"
import { getProductImage } from "@lib/util/prices"
import { useCart } from "medusa-react"
import usePreviews from "@lib/hooks/use-previews"
import {
  getProductsByCategoryHandle,
} from "@lib/data"
import FeaturedHead from "@modules/common/components/featuredHead"
import { useMeCustomer } from "medusa-react"
import { SwiperArrows } from "@modules/common/components/CarouselCards/SwiperArrows"
import FeaturedCard from "@modules/common/components/featuredHead/card"

function StartSeries(props) {
  const { customer } = useMeCustomer()
  const { cart } = useCart()
  const handle = "start-series"
  const {
    data: infiniteData,
  } = useInfiniteQuery(
    [`get_category_products`,"start-series", cart?.id],
    ({  }) =>
      getProductsByCategoryHandle({        
        handle: handle,
        cartId: cart?.id,
        currencyCode: cart?.region?.currency_code,
      })    
  )
  const previews = usePreviews({
    pages: infiniteData?.pages,
    region: cart?.region,
  })

  return (
    <section className=" mt-10 ">
      <div className=" mx-auto  flex justify-between items-center sm:px-16 px-4 py-4">
        <div className="  md-px-24 relative  container mx-auto">
          <FeaturedHead title="Start a Series" description="Join the conversation with these trending eBooks everyone loves." handle={handle}></FeaturedHead>

          {/* <Image className=" hidden lg:block absolute z-0 w-16 -right-16  mt-80 transform -scale-x-100" src={Leaf1} alt="" /> */}

          <FeaturedCard previews={previews} customer={customer}  swiperId={5}></FeaturedCard>   
          <SwiperArrows id={5}></SwiperArrows>

          {/* <div className="swiper-navigation-buttons">
            <Image
              src={leftarrow}
              className="swiper-button-prev-5 absolute xl:top-64 top-60 2xl:top-72 z-50 cursor-pointer  sm:w-13"
              alt="Prev"
            />
            <Image
              src={rightarrow}
              className="swiper-button-next-5 absolute sm:right-[-25px] right-0  xl:top-64 top-60 z-50 2xl:top-72 cursor-pointer  sm:w-13"
              alt="Next"
            />
          </div> */}
        </div>
      </div>
    </section>
  )
}
export default StartSeries
