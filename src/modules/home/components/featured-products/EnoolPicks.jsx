"use client"
import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { Navigation, Pagination, FreeMode } from "swiper/modules"

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
import { useInfiniteQuery } from "@tanstack/react-query"
import { useCart } from "medusa-react"
import usePreviews from "@lib/hooks/use-previews"
import { getProductsByCategoryHandle } from "@lib/data"
import FeaturedHead from "@modules/common/components/featuredHead"
import { useMeCustomer } from "medusa-react"
import { SwiperArrows } from "@modules/common/components/CarouselCards/SwiperArrows"
import FeaturedCard from "@modules/common/components/featuredHead/card"

function EnoolPicks(props) {
  const { customer } = useMeCustomer()
  const { cart } = useCart()
  const handle = "e-nool-picks"
  const { data: infiniteData } = useInfiniteQuery(
    [`get_category_products`, handle, cart?.id],
    ({}) =>
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
    <section className="trending_curve pb-[90px]">
      <div className="mx-auto flex justify-between items-center sm:px-16 px-4 mb-20 ">
        <div className="flex flex-col items-center w-full ">
          <h1 className="sm:text-3xl text-2xl font-graphikBold title-font mb-4 text-[#015464]">
            100 + eBooks Genre for Readers
          </h1>
          <h2 className="text-xs text-[#565656] tracking-widest  title-font pb-3">
            Your favorite e-Book is here
          </h2>
          <div className="h-1 w-20 bg-[#0FBF61] opacity-20 rounded justify-center"></div>
          <button onClick={() => window.location.href="/browse"} className="flex mx-auto mt-3 text-white bg-[#7CC9B5] border-0 py-2 px-8 focus:outline-none hover:bg-[#578f80] rounded-[23px] text-sm">
            Explore Now
          </button>
        </div>
      </div>

      <div className=" mx-auto  flex justify-between items-center sm:px-16 px-4 py-4">
        <div className="  md-px-24 relative  container mx-auto">
          <FeaturedHead
            title="eNOOL Picks"
            description="Discover the must-read eBooks taking the world by storm."
            handle={handle}
          ></FeaturedHead>
          <FeaturedCard previews={previews} customer={customer} swiperId={4}></FeaturedCard>   
          <SwiperArrows id={4}></SwiperArrows>

          {/* <div className="swiper-navigation-buttons">
            <Image
              src={leftarrow}
              className="swiper-button-prev-4 absolute xl:top-64 top-60 2xl:top-72 z-50 cursor-pointer sm:w-13"
              alt="Prev"
            />
            <Image
              src={rightarrow}
              className="swiper-button-next-4 absolute sm:right-[-25px] right-0  xl:top-64 top-60 z-50 2xl:top-72 cursor-pointer sm:w-13"
              alt="Next"
            />
          </div> */}
        </div>
      </div>
    </section>
  )
}
export default EnoolPicks
