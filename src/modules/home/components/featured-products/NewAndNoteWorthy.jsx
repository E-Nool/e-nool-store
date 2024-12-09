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
import {
  getProductsByCategoryHandle,
} from "@lib/data"
import FeaturedHead from "@modules/common/components/featuredHead"
import { useMeCustomer } from "medusa-react"
import { SwiperArrows } from "@modules/common/components/CarouselCards/SwiperArrows"
import cloud from "../../../../../public/images/LandingPage/cloud.png"
import FeaturedCard from "@modules/common/components/featuredHead/card"

function NewAndNoteworthy(props) {
  const { customer } = useMeCustomer()
  const { cart } = useCart()
  const handle = "new-and-noteworthy"
  const {
    data: infiniteData,
  } = useInfiniteQuery(
    [`get_category_products`,handle, cart?.id],
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
    <section className="mt-[20px] relative z-0">
      <Image
        src={cloud}
        className="hidden lg:block -z-10 right-[25rem]  top-5 absolute w-[135px]"
        alt="Img"
      />
      <div className=" mx-auto  flex justify-between items-center sm:px-16 px-4 relative z-50">
        <div className="  md-px-24 relative  container mx-auto">
        <FeaturedHead title="New & NoteWorthy " description="Get your hands on the eBooks that are captivating readers everywhere." handle={handle}></FeaturedHead>

        <FeaturedCard previews={previews} customer={customer}  swiperId={2}></FeaturedCard>   
          <SwiperArrows id={2}></SwiperArrows>

          {/* <div className="swiper-navigation-buttons">
            <Image
              src={leftarrow}
              className=" swiper-button-prev-2 -pl-5 absolute  xl:top-64 top-60 2xl:top-72 z-50 cursor-pointer sm:w-13"
              alt="Prev"
            />
            <Image
              src={rightarrow}
              className=" swiper-button-next-2 absolute sm:right-[-25px] right-0  xl:top-64 top-60 z-50 2xl:top-72 cursor-pointer sm:w-13"
              alt="Next"
            />
          </div> */}
        </div>
      </div>
    </section>
  )
}
export default NewAndNoteworthy
