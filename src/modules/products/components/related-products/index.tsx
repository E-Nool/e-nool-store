// @ts-nocheck
import {useState} from "react"
import usePreviews from "@lib/hooks/use-previews"
import getNumberOfSkeletons from "@lib/util/get-number-of-skeletons"
import repeat from "@lib/util/repeat"
import { StoreGetProductsParams } from "@medusajs/medusa"
import Button from "@modules/common/components/button"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { useCart } from "medusa-react"
import { useMemo } from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import ProductPreview from "../product-preview"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { getProductsList } from "@lib/data"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { Navigation, Pagination, FreeMode } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules

import Image from "next/image"

// import TrendingReads1 from 'pu';
import CarouselCardItems from "@modules/common/components/CarouselCards/CarouselCards"

import leftarrow from "@modules/common/icons/left-arrow.png"
import rightarrow from "@modules/common/icons/right-arrow.png"
import Leaf1 from "../../../../../public/images/LandingPage/Leaf1.png"
import cloud from "../../../../../public/images/LandingPage/cloud.png"

import { getProductImage } from "@lib/util/prices"

import FeaturedHead from "@modules/common/components/featuredHead"
import { useMeCustomer } from "medusa-react"

type RelatedProductsProps = {
  product: PricedProduct
}

const RelatedProducts = ({ product }: RelatedProductsProps) => {
  const { cart } = useCart()
    const { customer } = useMeCustomer()

    const [currentProductId, setCurrentProductId] = useState(product?.id)

  const queryParams: StoreGetProductsParams = useMemo(() => {
    const params: StoreGetProductsParams = {}

    if (cart?.id) {
      params.cart_id = cart.id
    }

    if (cart?.region?.currency_code) {
      params.currency_code = cart.region.currency_code
    }

    if (product.collection_id) {
      params.collection_id = [product.collection_id]
    }

    if (product.tags) {
      params.tags = product.tags.map((t) => t.value)
    }

    params.is_giftcard = false

    return params
  }, [product, cart?.id, cart?.region])

  const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery(
      [`infinite-products-${product.id}`, queryParams, cart],
      ({ pageParam }) =>{
        // console.log('here')
        return getProductsList({ pageParam, queryParams })
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      }
    )

  const previews = usePreviews({ pages: data?.pages, region: cart?.region })

  return (
    <section className=" lg:mt-4 mb-[20px] ">
    <Image
      className="hidden lg:block absolute z-0 w-16 right-0 mt-80 transform -scale-x-100"
      src={Leaf1}
      alt=""
    />

    <div className=" mx-auto  flex justify-between items-center sm:px-16 px-4  ">
      <div className=" md-px-24 relative  container mx-auto">
      <FeaturedHead 
        title="You may also like" 
        description="Buzzworthy, bestselling, and bingeable. Read the books everyone is talking about right now." 
        url={true}
        handle={"/browse"}
      ></FeaturedHead>
        <div className=" relative ">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView : 3
              },
              1024: {
                slidesPerView : 5
              }, 
              1600: {
                slidesPerView: 6,
              },
            }}
            spaceBetween={1}
            freeMode={true}
            navigation={{
              nextEl: ".swiper-button-next-1",
              prevEl: ".swiper-button-prev-1",
              hiddenClass: "swiper-button-hidden",
            }}
            modules={[FreeMode, Navigation]}
            className="mySwiper !overflow-y-visible !z-[1]"
          >
            { previews
              && previews.map((product, index) => {
                if(product.id == currentProductId) return null;
                return (
                  <div key={index} className="pt-10 relative z-50">
                    <SwiperSlide>
                      <CarouselCardItems
                        key={product.id}
                        title={product.title}
                        author={product?.metadata?.author?.name}
                        rating={product?.metadata?.review_rating || 0}
                        ratingCount={product?.metadata?.review_count || 0}
                        product={product}
                        variants={product.variants}
                        wishlist={customer?.metadata?.wishlist}
                        price={product?.price?.original_price}
                        imageSrc={getProductImage(product?.thumbnail)}
                        handle={product.handle}
                        customer_id={customer?.id || null}
                      />
                    </SwiperSlide>
                  </div>
                )})}
          </Swiper>
        </div>

        <div className="swiper-navigation-buttons">
          <div className="swiper-button-prev-1">
            <Image
              src={leftarrow}
              width={40}
              className={`absolute xl:top-[16rem] top-[16rem] z-50 1xl:top-[17rem] 2xl:top-[15rem] top-[21rem] left-2 z-50 cursor-pointer sm:w-13 xl:-left-7 z-[2] slider-active`}
              alt="Prev"
            />
            <Image
              src={rightarrow}
              width={40}
              className={`absolute xl:top-[16rem] top-[16rem] z-50 1xl:top-[17rem] 2xl:top-[15rem] top-[21rem] left-2 z-50 cursor-pointer sm:w-13 xl:-left-7 z-[2] rotate-180 slider-disabled`}
              alt="Prev"
            />
          </div>
          <div className="swiper-button-next-1">
            <Image
              src={rightarrow}
              width={40}
              className={` absolute xl:right-[-0.3rem]  xl:top-[16rem]  1xl:top-[17rem]  2xl:top-[15rem] top-[21rem] right-2 cursor-pointer  z-50 sm:w-13 z-[2] slider-disabled`}
              alt="Next"
            />
            <Image
              src={leftarrow}
              width={40}
              className={` absolute xl:right-[-0.3rem]  xl:top-[16rem]  1xl:top-[17rem]  2xl:top-[15rem] top-[21rem] right-2 cursor-pointer  z-50 sm:w-13 z-[2] rotate-180 slider-active`}
              alt="Next"
            />
          </div>
        </div>
        {/*<Image
          src={cloud}
          className="hidden lg:block absolute -z-10 right-96  top-96 mt-96 "
          alt="Img"
        />*/}
      </div>
    </div>
  </section>
    // <div className="product-page-constraint">
    //   <div className="flex flex-col items-center text-center mb-16">
    //     <span className="text-base-regular text-gray-600 mb-6">
    //       Related products
    //     </span>
    //     <p className="text-2xl-regular text-gray-900 max-w-lg">
    //       You might also want to check out these products.
    //     </p>
    //   </div>

    //   <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-4 gap-y-8">
    //     {previews.map((p) => (
    //       <li key={p.id}>
    //         <ProductPreview {...p} />
    //       </li>
    //     ))}
    //     {isLoading &&
    //       !previews.length &&
    //       repeat(8).map((index) => (
    //         <li key={index}>
    //           <SkeletonProductPreview />
    //         </li>
    //       ))}
    //     {isFetchingNextPage &&
    //       repeat(getNumberOfSkeletons(data?.pages)).map((index) => (
    //         <li key={index}>
    //           <SkeletonProductPreview />
    //         </li>
    //       ))}
    //   </ul>
    //   {hasNextPage && (
    //     <div className="flex items-center justify-center mt-8">
    //       <Button
    //         isLoading={isLoading}
    //         onClick={() => fetchNextPage()}
    //         className="w-72"
    //       >
    //         Load more
    //       </Button>
    //     </div>
    //   )}
    // </div>
  )
}

export default RelatedProducts
