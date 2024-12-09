import React from 'react'

import Image from 'next/image';
import leftarrow from "@modules/common/icons/left-arrow.png"
import rightarrow from "@modules/common/icons/right-arrow.png"
import cloud from "../../../../../public/images/LandingPage/cloud.png"
export const SwiperArrows = (props) => {
  // console.log(props);
  return (
    <>
    <div className="swiper-navigation-buttons">
      <div className={`swiper-button-prev-${props.id}`}>
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
      <div className={`swiper-button-next-${props.id}`}>
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
  </>
  )
}

