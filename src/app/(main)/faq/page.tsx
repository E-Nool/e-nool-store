"use client";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import DefaultLayout from "@modules/layout/templates";
import Leaf from "../../../../public/images/LandingPage/Leaf1.png";
import fqa from "../../../../public/images/fqa.png";
import FQAbg from "../../../../public/images/FAQbg.png";
import Aboutbg from "../../../../public/images/aboutbg.png";
import img1 from "../../../../public/images/img1.png";
import Ellipse from "../../../../public/images/Ellipse.png";
import Lefe2 from "../../../../public/images/lefe2.png";
import Leaf2 from "../../../../public/images/leaf2.png";
import lefe1 from "../../../../public/images/lefe1.png";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Store",
//   description: "Explore all of our products.",
// }
const FQA = () => {
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
                  FAQ{" "}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className=" mb-10 px-10 md:px-24">
          <Image
            className="absolute z-[-1]  h-[500px] top-[83px] left-0"
            src={Aboutbg}
            alt=""
          />
          <Image className="hidden md:block absolute z-0 top-24 left-0 w-16 " src={Leaf} alt="" />
          <div className=" container flex m-auto">
            <div className="w-full ">
              <Image className="block md:absolute w-full md:w-96 mt-20" src={FQAbg} alt="" />
              <h2 className=" text-[#015464] md:mt-56 text-4xl font-graphikBold top-[351px]  h-[16px]">
                Frequently Asked Questions{" "}
              </h2>
              <h1 className=" text-[#015464] font-graphikBold text-3xl mt-28">
                Welcome to eNOOL!
              </h1>
              <p className=" text-[#408080] mt-8 text-[12px] font-medium mb-10 md:w-[400px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className=" m-auto h-[250] hidden lg:block">
              <Image
                className=" top-[130px] max-w-md lg:max-w-sm"
                src={fqa}
                alt=""
              />
            </div>
          </div>
          <Image
            className=" hidden lg:block absolute top-28 z-0 bottom-36 right-14 w-28 "
            src={lefe1}
            alt=""
          />
          <div className=" container flex mx-auto flex-wrap">
            <Image
              className=" hidden lg:block absolute top-[650px] z-0 bottom-36 -left-28 w-72 "
              src={img1}
              alt=""
            />
            <Image
              className=" hidden lg:block absolute top-[898px] z-0 bottom-36 left-10 w-28 "
              src={Ellipse}
              alt=""
            />
            <button className=" relative bg-[#015464] opacity-1 text-sm font-medium px-4 py-3 md:py-14 md:px-16 mb-2 rounded-xl text-white ">
              General <hr className=" " />
            </button>
            <button className=" relative bg-[#408080] opacity-1 text-sm font-medium px-4 py-3 md:py-11 md:px-7 md:pb-9 md:pt-16 ml-2 md:ml-10 w-[150px] mb-2 rounded-xl text-white ">
              SUBSCRIPTION & ACCOUNT
            </button>
            <button className=" relative bg-[#7CC9B5] opacity-1 text-sm font-medium px-4 py-3 ml-2 md:ml-10 md:py-14 md:px-16 rounded-xl text-white mb-2 ">
              PAYMENT
            </button>
          </div>
          <div className=" container mt-10  flex mx-auto">
            <div className="w-full lg:w-auto">
              <div className=" relative w-[700px] overflow-hidden pb-3 max-w-full">
                <input
                  className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                  type="checkbox"
                />
                <div className=" h-12 w-full flex items-center">
                  <h1 className=" text-lg font-semibold text-[#015464]">
                    01. Welcome to eNOOL!
                  </h1>
                </div>
                <div className=" absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                <div className=" max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40">
                  <div className=" text-[#14adad] p-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit doloribus impedit totam nulla, dolorum numquam
                    recusandae facere modi mollitia? Eveniet sunt quas voluptas
                    iure facere nesciunt dolor corporis illum voluptate.
                  </div>
                </div>
                <hr className=" p-[.5px] bg-opacity-30 bg-[#015464]" />
              </div>
              <div className=" relative w-[700px] overflow-hidden pb-3 max-w-full">
                <input
                  className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                  type="checkbox"
                />
                <div className=" h-12 w-full flex items-center">
                  <h1 className=" text-lg font-semibold text-[#015464]">
                    02. Welcome to eNOOL!
                  </h1>
                </div>
                <div className=" absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                <div className=" max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40">
                  <div className=" text-[#14adad] p-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit doloribus impedit totam nulla, dolorum numquam
                    recusandae facere modi mollitia? Eveniet sunt quas voluptas
                    iure facere nesciunt dolor corporis illum voluptate.
                  </div>
                </div>
                <hr className=" p-[.5px] bg-opacity-30 bg-[#015464]" />
              </div>
              <div className=" relative w-[700px] overflow-hidden pb-3 max-w-full">
                <input
                  className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                  type="checkbox"
                />
                <div className=" h-12 w-full flex items-center">
                  <h1 className=" text-lg font-semibold text-[#015464]">
                    03. Welcome to eNOOL!
                  </h1>
                </div>
                <div className=" absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                <div className=" max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40">
                  <div className=" text-[#14adad] p-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit doloribus impedit totam nulla, dolorum numquam
                    recusandae facere modi mollitia? Eveniet sunt quas voluptas
                    iure facere nesciunt dolor corporis illum voluptate.
                  </div>
                </div>
                <hr className=" p-[.5px] bg-opacity-30 bg-[#015464]" />
              </div>
              <div className=" relative w-[700px] overflow-hidden pb-3 max-w-full">
                <input
                  className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                  type="checkbox"
                />
                <div className=" h-12 w-full flex items-center">
                  <h1 className=" text-lg font-semibold text-[#015464]">
                    04. Welcome to eNOOL!
                  </h1>
                </div>
                <div className=" absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                <div className=" max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40">
                  <div className=" text-[#14adad] p-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit doloribus impedit totam nulla, dolorum numquam
                    recusandae facere modi mollitia? Eveniet sunt quas voluptas
                    iure facere nesciunt dolor corporis illum voluptate.
                  </div>
                </div>
                <hr className=" p-[.5px] bg-opacity-30 bg-[#015464]" />
              </div>
              <div className=" relative w-[700px] overflow-hidden pb-3 max-w-full">
                <input
                  className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                  type="checkbox"
                />
                <div className=" h-12 w-full flex items-center">
                  <h1 className=" text-lg font-semibold text-[#015464]">
                    05. Welcome to eNOOL!
                  </h1>
                </div>
                <div className=" absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                <div className=" max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40">
                  <div className=" text-[#14adad] p-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit doloribus impedit totam nulla, dolorum numquam
                    recusandae facere modi mollitia? Eveniet sunt quas voluptas
                    iure facere nesciunt dolor corporis illum voluptate.
                  </div>
                </div>
                <hr className=" p-[.5px] bg-opacity-30 bg-[#015464]" />
              </div>
              <div className=" relative w-[700px] overflow-hidden pb-3 max-w-full">
                <input
                  className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                  type="checkbox"
                />
                <div className=" h-12 w-full flex items-center">
                  <h1 className=" text-lg font-semibold text-[#015464]">
                    06. Welcome to eNOOL!
                  </h1>
                </div>
                <div className=" absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                <div className=" max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40">
                  <div className=" text-[#14adad] p-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit doloribus impedit totam nulla, dolorum numquam
                    recusandae facere modi mollitia? Eveniet sunt quas voluptas
                    iure facere nesciunt dolor corporis illum voluptate.
                  </div>
                </div>
                <hr className=" p-[.5px] bg-opacity-30 bg-[#015464]" />
              </div>
              <div className=" relative w-[700px] overflow-hidden pb-3 max-w-full">
                <input
                  className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                  type="checkbox"
                />
                <div className=" h-12 w-full flex items-center">
                  <h1 className=" text-lg font-semibold text-[#015464]">
                    07. Welcome to eNOOL!
                  </h1>
                </div>
                <div className=" absolute top-3 right-3 text-[#015464] peer-checked:rotate-45 transition-transform duration-500 rotate-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                <div className=" max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40">
                  <div className=" text-[#14adad] p-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit doloribus impedit totam nulla, dolorum numquam
                    recusandae facere modi mollitia? Eveniet sunt quas voluptas
                    iure facere nesciunt dolor corporis illum voluptate.
                  </div>
                </div>
                <hr className=" p-[.5px] bg-opacity-30 bg-[#015464]" />
              </div>
              <div className=" relative w-[700px] overflow-hidden pb-3 max-w-full">
                <input
                  className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                  type="checkbox"
                />
                <div className=" h-12 w-full flex items-center">
                  <h1 className=" text-lg font-semibold text-[#015464]">
                    08. Welcome to eNOOL!
                  </h1>
                </div>
                <div className=" absolute top-3 right-3 text-[#015464] font-bold peer-checked:rotate-45 transition-transform duration-500 rotate-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                <div className=" max-h-0 bg-white overflow-hidden transition-all duration-500 peer-checked:max-h-40">
                  <div className=" text-[#14adad] p-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit doloribus impedit totam nulla, dolorum numquam
                    recusandae facere modi mollitia? Eveniet sunt quas voluptas
                    iure facere nesciunt dolor corporis illum voluptate.
                  </div>
                </div>
                <hr className=" p-[.5px] bg-opacity-30 bg-[#015464]" />
              </div>
            </div>
            <Image
              className=" hidden lg:block absolute top-[850px] z-0 bottom-36 right-0 w-28 "
              src={Leaf2}
              alt=""
            />
            <Image
              className=" hidden lg:block absolute top-[990px] z-0 bottom-36 right-64 w-24 "
              src={Lefe2}
              alt=""
            />
            <Image
              className=" hidden lg:block absolute top-[1100px] z-0 bottom-36 right-0 w-72 "
              src={img1}
              alt=""
            />
            <Image
              className=" hidden lg:block absolute top-[1380px] z-0 bottom-36 right-20 w-20 "
              src={Ellipse}
              alt=""
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FQA;
