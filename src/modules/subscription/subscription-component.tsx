"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

import Image from "next/image";

import Aboutbg from "@public/images/aboutbg.png";
import Leaf from "@public/images/LandingPage/Leaf1.png";
import LefeBg from "@public/images/lefe1.png";
import pricing from "@public/images/Pricing.png";
import pricingimg from "@public/images/pricingimg.png";
import img1 from "@public/images/img1.png";
import Ellipse from "@public/images/Ellipse.png";
import Leaf2 from "@public/images/leaf2.png";
import Subscriptioncard from "@modules/subscription/components/Card";
import Link from "next/link";

export default function SubscriptionComponent() {
  return (
    <>
      <div className="mx-auto absolute top-20 mt-20 z-10  text-[#015464] pl-5 md:pl-24 container mx-auto">
        <nav>
          <ul className="flex m-0 items-center p-0">
            <li className="flex items-center text-left">
              <Link
                href="/"
                title=""
                className="cursor-pointer text-sm font-normal leading-5 text-[#015464]  hover:text-gray-900"
              >
                {" "}
                Home{" "}
              </Link>
            </li>

            <li className="flex items-center text-left">
              <svg
                className="block h-5 w-5 align-middle text-[#015464] "
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
              </svg>

              <a
                href="#"
                title=""
                className="cursor-pointer text-sm font-normal leading-5 text-[#015464]  hover:text-gray-900"
              >
                {" "}
                Subcriptions{" "}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <div className=" ">
          <Image className=" absolute h-[500px] z-[-1]" src={Aboutbg} alt="" />
          <Image className=" absolute z-0 top-24 w-16 hidden md:block " src={Leaf} alt="" />

          <div className=" container gap-20 justify-center md:mr-20 items-center flex pt-48 z-0 p-5 md:px-16  mx-auto">
            <div className="">
              <Image src={pricing} alt="pricing-img" className="w-full max-w-lg" />
              <h1 className=" text-[#015464] font-graphikBold text-3xl md:text-5xl">
                Subscriptions
              </h1>
            </div>
            <Image className="  w-28 hidden lg:block" src={pricingimg} alt="pricingimg-img" />
          </div>
          <Image
            className=" hidden lg:block absolute top-28 z-0 bottom-36 right-0 w-28 "
            src={LefeBg}
            alt=""
          />
        </div>

        <div className=" mx-auto flex justify-between items-center sm:px-16">
          <Image
            className=" hidden lg:block absolute top-[700px] z-0 bottom-36 -left-[300px] w-84 "
            src={img1}
            alt=""
          />
          <Image
            className=" hidden lg:block absolute top-[1230px] z-0 bottom-36 w-20 "
            src={Ellipse}
            alt=""
          />
          <Subscriptioncard />
          <div className=" xl:max-w-sm">
            <Image
              className=" hidden lg:block absolute top-[500px] z-0 bottom-36 right-3 w-28 "
              src={Leaf2}
              alt=""
            />
            <Image
              className=" hidden lg:block absolute top-[980px] z-0 bottom-36 right-2 w-72 rotate-3"
              src={img1}
              alt=""
            />
            <Image
              className=" hidden lg:block absolute top-[1280px] z-0 bottom-36 right-10 w-20 "
              src={Ellipse}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
