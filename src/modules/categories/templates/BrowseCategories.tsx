"use client";
import React from "react";
import Image from "next/image";
import Leaf2 from "../../../../public/images/LandingPage/Leaf-Bg.png";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

import leftarrow from '@modules/common/icons/left-arrow.png'
import rightarrow from '@modules/common/icons/right-arrow.png'
import browseCategories1 from "../../../../public/images/LandingPage/browse-categories1.svg";
import browseCategories2 from "../../../../public/images/LandingPage/browse-categories2.svg";
import browseCategories3 from "../../../../public/images/LandingPage/browse-categories3.svg";
import browseCategories4 from "../../../../public/images/LandingPage/browse-categories4.svg";
import browseCategories5 from "../../../../public/images/LandingPage/browse-categories5.svg";
import browseCategories6 from "../../../../public/images/LandingPage/browse-categories6.png";

export default function BrowseCategories() {
  return (
    <section className="w-full mt-[80px] relative">
      <Image
        className=" hidden lg:block absolute z-0 md:w-28 mt-18"
        src={Leaf2}
        alt=""
      />
      <div className=" mx-auto flex justify-between items-center sm:px-16 px-4 ">
        <div className="  md-px-24 relative  container  mx-auto">
          <div className="flex w-full mb-10">
            <div className="lg:w-1/2 sm:w-full w-2/3 mb-6 lg:mb-0 z-[-1]">
              <h1 className="sm:text-3xl text-2xlads font-graphikBold title-font mb-2 text-[#015464]">
                Browse Book Categories
              </h1>
              <div className="h-1 w-48 bg-[#0FBF61] opacity-20 rounded"></div>
            </div>

            <div className="swiper-navigation-buttons-1 lg:w-1/2 sm:w-full w-1/3 mb-6 lg:mb-0 flex lg:justify-end justify-end space-x-3">
              <div className="swiper-button-prev-3">
                <Image
                  src={leftarrow}
                  className="cursor-pointer sm:w-13 slider-active"
                  alt="Prev"
                />
                <Image
                  src={rightarrow}
                  className="cursor-pointer sm:w-13 rotate-180 slider-disabled"
                  alt="Prev"
                />
              </div>
              <div className="swiper-button-next-3">
                <Image
                  src={rightarrow}
                  className="cursor-pointer sm:w-13 slider-disabled"
                  alt="Next"
                />
                <Image
                  src={leftarrow}
                  className="cursor-pointer sm:w-13 rotate-180 slider-active"
                  alt="Prev"
                />
              </div>
            </div>
          </div>

          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
              1536: {
                slidesPerView: 5,
              },
            }}
            freeMode={true}
            navigation={{
              nextEl: ".swiper-button-next-3",
              prevEl: ".swiper-button-prev-3",
            }}
            modules={[Autoplay, Navigation]}
          >
            {/* <SwiperSlide>
              <div className="p-4">
                <div className="p-6 rounded-lg flex sm:block flex-col ">
                  <Image
                    className="rounded w-auto object-cover object-center mb-6"
                    src={browseCategories1}
                    alt="content"
                  />
                  <h2 className="text-lg text-[#015464] absolute top-64 2xl:top-60 left-16 text-center font-bold mb-1">
                    Young Adult
                  </h2>
                </div>
              </div>
            </SwiperSlide> */}

            <SwiperSlide className="!h-auto">
              <div className="p-4 h-full cursor-pointer" onClick={() => window.location.href="/category/family-relationships"}>
                <div className="p-6 h-full rounded-lg flex flex-col items-center justify-between">
                  <Image
                    className="rounded w-auto object-cover object-center mb-6"
                    src={browseCategories2}
                    alt="content"
                  />
                  <h2 className="text-lg text-[#015464] text-center font-bold mb-1">
                    Family & Relationships
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!h-auto">
              <div className="p-4 h-full cursor-pointer" onClick={() => window.location.href="/category/sciences"}>
                <div className="p-6 h-full rounded-lg flex flex-col items-center justify-between">
                  <Image
                    className="rounded w-auto object-cover  object-center mb-6"
                    src={browseCategories3}
                    alt="content"
                  />
                  <h2 className="text-lg text-[#015464] text-center font-bold mb-1">
                    Science & Fantasy
                  </h2>
                </div>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide className="!h-auto">
              <div className="p-4 h-full cursor-pointer" onClick={() => window.location.href="/category/novel"}>
                <div className="p-6 h-full rounded-lg flex flex-col items-center justify-between">
                  <Image
                    className="rounded w-auto object-cover object-center mb-6"
                    src={browseCategories4}
                    alt="content"
                  />
                  <h2 className="text-lg text-[#015464]  text-center font-bold mb-1">
                    Mystry & Crime
                  </h2>
                </div>
              </div>{" "}
            </SwiperSlide>
            {/*<SwiperSlide>
              <div className="p-4 cursor-pointer" onClick={() => window.location.href="/category/family-relationships"}>
                <div className="p-6 rounded-lg flex sm:block flex-col">
                  <Image
                    className="rounded w-auto object-cover object-center mb-6"
                    src={browseCategories5}
                    alt="content"
                  />
                  <h2 className="text-lg text-[#015464] text-center font-bold mb-1">
                    Thrillers & Horror
                  </h2>
                </div>
              </div>
            </SwiperSlide>  */}   
            {/*<SwiperSlide>
              <div className="p-4">
                <div className="p-6 rounded-lg">
                  <Image
                    className="rounded w-auto object-cover  object-center mb-6"
                    src={browseCategories3}
                    alt="content"
                  />
                  <h2 className="text-lg text-[#015464] text-center font-bold mb-1">
                    Science & Fantasy
                  </h2>
                </div>
              </div>{" "}
            </SwiperSlide>*/}
            {/*<SwiperSlide>
              <div className="p-4">
                <div className="p-6 rounded-lg flex sm:block flex-col">
                  <Image
                    className="rounded w-auto object-cover object-center mb-6"
                    src={browseCategories4}
                    alt="content"
                  />
                  <h2 className="text-lg text-[#015464]  text-center font-bold mb-1">
                    Mystry & Crime
                  </h2>
                </div>
              </div>
            </SwiperSlide>*/}
            <SwiperSlide className="!h-auto">
              <div className="p-4 h-full cursor-pointer" onClick={() => window.location.href="/category/articles"}>
                <div className="p-6 h-full rounded-lg flex flex-col items-center justify-between">
                  <Image
                    className="rounded w-auto object-cover object-center mb-6"
                    src={browseCategories1}
                    alt="content"
                  />
                  <h2 className="text-lg text-[#015464] text-center font-bold mb-1">
                    Young Adult
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!h-auto">
              <div className="p-4 h-full cursor-pointer" onClick={() => window.location.href="/category/story"}>
                <div className="p-6 h-full rounded-lg flex flex-col items-center justify-between">
                  <Image
                    className="rounded w-auto object-cover object-center mb-6"
                    src={browseCategories6}
                    alt="content"
                  />
                  <h2 className="text-lg text-[#015464] text-center font-bold mb-1">
                    Story
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            {/*<SwiperSlide>
              <div className="p-4">
                <div className="p-6 rounded-lg flex sm:block flex-col">
                  <Image
                    className="rounded w-auto object-cover object-center mb-6"
                    src={browseCategories1}
                    alt="content"
                  />
                  <h2 className="text-lg text-[#015464] text-center font-bold mb-1">
                    Young Adult
                  </h2>
                </div>
              </div>
            </SwiperSlide>*/}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
