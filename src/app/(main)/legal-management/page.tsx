"use client";
import { Metadata } from "next";

import Image from "next/image";
import React from "react";
import Leaf from "../../../../public/images/LandingPage/Leaf1.png";
import DefaultLayout from "@modules/layout/templates";
import Aboutbg from "../../../../public/images/aboutbg.png";
import img1 from "../../../../public/images/img1.png";
import Ellipse from "../../../../public/images/Ellipse.png";
import Lefe from "../../../../public/images/lefe1.png";
import Lefe2 from "../../../../public/images/lefe2.png";
import Terms from "../../../../public/images/terms.png";
import Legal from "../../../../public/images/Legal Managementbg.png";
import Leaf2 from "../../../../public/images/leaf2.png";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Store",
//   description: "Explore all of our products.",
// }
const LegalManagement = () => {
  return (
    <DefaultLayout>
      <div className="min-[2000px]:container min-[2000px]:mx-auto">
        <div className="pl-10 md:pl-20 absolute top-20  mt-20 text-[#015464] md:ml-5 ">
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
                  Legal Management{" "}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className=" min-[2000px]:container min-[2000px]:mx-auto mb-10 px-10 md:px-24">
          <Image
            className="absolute left-0 z-[-1]  h-[500px] top-[-83px]"
            src={Aboutbg}
            alt=""
          />
          <Image className="hidden md:block absolute z-0 top-24 left-0 w-16 " src={Leaf} alt="" />
          <div className=" container justify-center items-center flex mt-40 z-0 ">
            <div className=" max-w-3xl ">
              <Image
                src={Legal}
                alt="privacypolicy-img"
                className=""
              />
              <h1 className=" text-[#015464] font-graphikBold text-3xl md:text-5xl">
                Legal Management
              </h1>
            </div>
            <Image
              className="hidden lg:block max-w-md ml-20"
              src={Terms}
              alt="Terms"
            />
            <Image
              className=" hidden lg:block absolute top-5 z-0 bottom- -right-20 w-28 "
              src={Lefe}
              alt=""
            />
          </div>
        </div>
        <Image
          className=" hidden lg:block absolute top-[650px] z-0 bottom-36 -left-28 w-72 "
          alt="Image"
          src={img1}
        />
        <Image
          className=" hidden lg:block absolute top-[898px] z-0 bottom-36 left-10 w-28 "
          alt="Image"
          src={Ellipse}
        />
        <div className=" mt-20  min-[2000px]:container min-[2000px]:mx-auto mb-10 px-10 md:px-24 flex flex-col m-auto ">

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              As of April 07th,2023
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
              Lorem Ipsum је једноставно модел текста који се користи у
              штампарској и словослагачкој индустрији. Lorem ipsum је био
              стандард за модел текста још од 1500. године, када је непознати
              штампар узео кутију са словима и сложио их како би направио узорак
              књиге. Не само што је овај модел опстао пет векова, него је чак
              почео да се користи и у електронским медијима, непроменивши се.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              As of April 07th,2023
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
              Lorem Ipsum је једноставно модел текста који се користи у
              штампарској и словослагачкој индустрији. Lorem ipsum је био
              стандард за модел текста још од 1500. године, када је непознати
              штампар узео кутију са словима и сложио их како би направио узорак
              књиге. Не само што је овај модел опстао пет векова, него је чак
              почео да се користи и у електронским медијима, непроменивши се.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              As of April 07th,2023
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
              Lorem Ipsum је једноставно модел текста који се користи у
              штампарској и словослагачкој индустрији. Lorem ipsum је био
              стандард за модел текста још од 1500. године, када је непознати
              штампар узео кутију са словима и сложио их како би направио узорак
              књиге. Не само што је овај модел опстао пет векова, него је чак
              почео да се користи и у електронским медијима, непроменивши се.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              As of April 07th,2023
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
              Lorem Ipsum је једноставно модел текста који се користи у
              штампарској и словослагачкој индустрији. Lorem ipsum је био
              стандард за модел текста још од 1500. године, када је непознати
              штампар узео кутију са словима и сложио их како би направио узорак
              књиге. Не само што је овај модел опстао пет векова, него је чак
              почео да се користи и у електронским медијима, непроменивши се.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              As of April 07th,2023
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
              Lorem Ipsum је једноставно модел текста који се користи у
              штампарској и словослагачкој индустрији. Lorem ipsum је био
              стандард за модел текста још од 1500. године, када је непознати
              штампар узео кутију са словима и сложио их како би направио узорак
              књиге. Не само што је овај модел опстао пет векова, него је чак
              почео да се користи и у електронским медијима, непроменивши се.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              As of April 07th,2023
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
              Lorem Ipsum је једноставно модел текста који се користи у
              штампарској и словослагачкој индустрији. Lorem ipsum је био
              стандард за модел текста још од 1500. године, када је непознати
              штампар узео кутију са словима и сложио их како би направио узорак
              књиге. Не само што је овај модел опстао пет векова, него је чак
              почео да се користи и у електронским медијима, непроменивши се.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              As of April 07th,2023
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
              Lorem Ipsum је једноставно модел текста који се користи у
              штампарској и словослагачкој индустрији. Lorem ipsum је био
              стандард за модел текста још од 1500. године, када је непознати
              штампар узео кутију са словима и сложио их како би направио узорак
              књиге. Не само што је овај модел опстао пет векова, него је чак
              почео да се користи и у електронским медијима, непроменивши се.
            </p>
          </div>

          
          <Image
            className=" hidden lg:block absolute top-[850px] z-0 bottom-36 right-0 w-28 "
            alt="Image"
            src={Leaf2}
          />
          <Image
            className=" hidden lg:block absolute top-[990px] z-0 bottom-36 right-64 w-24 "
            alt="Image"
            src={Lefe2}
          />
          <Image
            className=" hidden lg:block absolute top-[1100px] z-0 bottom-36 right-0 w-72 "
            alt="Image"
            src={img1}
          />
          <Image
            className=" hidden lg:block absolute top-[1380px] z-0 bottom-36 right-20 w-20 "
            alt="Image"
            src={Ellipse}
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default LegalManagement;
