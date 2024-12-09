import React from 'react'
import CarouselCardItems from '../CarouselCards/CarouselCards';
import SkeletonProductList from '@modules/skeletons/components/skeleton-product-list';
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { Navigation, Pagination, FreeMode } from "swiper/modules"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { getProductImage } from '@lib/util/prices';

const FeaturedCard = ({ previews,  customer , swiperId}) => {
  return (
    <div className=" relative ">
    {previews.length == 0 ?
    <SkeletonProductList></SkeletonProductList>
    :
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
        nextEl: `.swiper-button-next-${swiperId}`,
        prevEl: `.swiper-button-prev-${swiperId}`,
        hiddenClass: "swiper-button-hidden",
      }}
      modules={[FreeMode, Navigation]}
      className="mySwiper !overflow-y-visible !z-[1]"
    >
      { previews
        && previews.map((product, index) => (
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
          ))}
         
    </Swiper>
    }
  </div>
  );
}

export default FeaturedCard;