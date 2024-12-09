// @ts-nocheck
"use client"
import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { Navigation, Pagination, FreeMode } from "swiper/modules"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules

import Image from "next/image"

// import TrendingReads1 from 'pu';
import CarouselCardItems from "@modules/common/components/CarouselCards/CarouselCards"
import {SwiperArrows} from "@modules/common/components/CarouselCards/SwiperArrows"


import Leaf1 from "../../../../../public/images/LandingPage/Leaf1.png"


import { getProductImage } from "@lib/util/prices"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useCart } from "medusa-react"
import usePreviews from "@lib/hooks/use-previews"
import {
  getProductsByCategoryHandle,
} from "@lib/data"
import FeaturedHead from "@modules/common/components/featuredHead"
import { useMeCustomer } from "medusa-react"
import SkeletonOrderItems from "@modules/skeletons/components/skeleton-order-items"
import SkeletonProductTabs from "@modules/skeletons/components/skeleton-product-tabs"
import SkeletonProductList from "@modules/skeletons/components/skeleton-product-list"
import FeaturedCard from "@modules/common/components/featuredHead/card"


const FeaturedProducts = () => {
  // const { data } = useFeaturedProductsQuery()
  const{isLoading, setIsLoading}= useState(false)
  // const { products, isLoading } = useProducts({
  //   category_id: ["pcat_01HEW7BQKAK3Y8TZV3NW37V5GC"],
  // }) 
  const { customer } = useMeCustomer()
  const { cart } = useCart()
  const handle = "trending-reads"
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
    <section className=" lg:mt-36 mb-[85px] ">
      <Image
        className="hidden lg:block absolute z-0 w-16 right-0 mt-80 transform -scale-x-100"
        src={Leaf1}
        alt=""
      />

      <div className=" mx-auto  flex justify-between items-center sm:px-16 px-4">
        <div className="  md-px-24 relative  container mx-auto">
        <FeaturedHead title="Trending Reads" description="Dive into the hottest eBooks everyone's buzzing about." handle={handle}></FeaturedHead>
        <FeaturedCard previews={previews} customer={customer}  swiperId={1}></FeaturedCard>          
        <SwiperArrows id={1}></SwiperArrows>

         
        </div>
      </div>
    </section>
    // <div className="py-12">
    //   <div className="content-container py-12">
    //     <div className="flex flex-col items-center text-center mb-16">
    //       <span className="text-base-regular text-gray-600 mb-6">
    //         Latest products
    //       </span>
    //       <p className="text-2xl-regular text-gray-900 max-w-lg mb-4">
    //         Our newest styles are here to help you look your best.
    //       </p>
    //       <UnderlineLink href="/store">Explore products</UnderlineLink>
    //     </div>
    //     <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8">
    //       {data
    //         ? data.map((product) => (
    //             <li key={product.id}>
    //               <ProductPreview {...product} />
    //             </li>
    //           ))
    //         : Array.from(Array(4).keys()).map((i) => (
    //             <li key={i}>
    //               <SkeletonProductPreview />
    //             </li>
    //           ))}
    //     </ul>
    //   </div>
    // </div>
  )
}

export default FeaturedProducts
