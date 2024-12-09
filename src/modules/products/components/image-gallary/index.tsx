import { Image as MedusaImage } from "@medusajs/medusa"
import { useRef } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import TrendingReads1 from "../../../../../public/assets/LandingPage/TrendingReads1.png"
import Image from "next/image"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    }
  }

  return (
    // <div className="flex items-start relative">
    //   <div className="hidden small:flex flex-col gap-y-4 sticky top-20">
    //     {images.map((image, index) => {
    //       return (
    //         <button
    //           key={image.id}
    //           className="h-14 w-12 relative border border-white"
    //           onClick={() => {
    //             handleScrollTo(image.id)
    //           }}
    //         >
    //           <span className="sr-only">Go to image {index + 1}</span>
    //           <Image
    //             src={image.url}
    //             className="absolute inset-0"
    //             alt="Thumbnail"
    //             fill
    //             sizes="100vw"
    //             style={{
    //               objectFit: "cover",
    //             }}
    //           />
    //         </button>
    //       )
    //     })}
    //   </div>
    //   <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
    //     {images.map((image, index) => {
    //       return (
    //         <div
    //           ref={(image) => imageRefs.current.push(image)}
    //           key={image.id}
    //           className="relative aspect-[29/34] w-full"
    //           id={image.id}
    //         >
    //           <Image
    //             src={image.url}
    //             priority={index <= 2 ? true : false}
    //             className="absolute inset-0"
    //             alt={`Product image ${index + 1}`}
    //             fill
    //             sizes="100vw"
    //             style={{
    //               objectFit: "cover",
    //             }}
    //           />
    //         </div>
    //       )
    //     })}
    //   </div>
    // </div>

    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={1}
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

      <SwiperSlide>
        <Image
          className=" rounded  object-cover  object-center mb-4 mx-auto 2xl:w-64 w-48"
          src={TrendingReads1}
          alt="content"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className=" rounded  object-cover  object-center mb-4 mx-auto 2xl:w-64 w-48"
          src={TrendingReads1}
          alt="content"
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default ImageGallery
