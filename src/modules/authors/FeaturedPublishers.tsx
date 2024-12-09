// @ts-nocheck
"use client";

import React from "react";
import Image from "next/image";
import brand_1 from "../../../public/images/LandingPage/brand-1.png";
import brand_2 from "../../../public/images/LandingPage/brand-2.png";
import brand_3 from "../../../public/images/LandingPage/brand-3.png";
import brand_4 from "../../../public/images/LandingPage/brand-4.png";
import brand_5 from "../../../public/images/LandingPage/brand-5.png";
import brand_6 from "../../../public/images/LandingPage/brand-6.png";
import {fetchPublishers} from "@lib/util/authors_publishers";
import { useState, useRef, useEffect } from "react";


export default function FeaturedPublishers() {

  const [data, setData] = useState([]);

  useEffect(() => {
    (async function(){
      const data = await fetchPublishers();
      setData(data.slice(0, 5));
    })();
  }, []);


  return (
    <section className=" w-full mb-15">
      <div className=" m-auto flex justify-between items-center pt-4 -mb-10">
        <div className="  md-px-24 relative  container  mx-auto">
          <div className="flex w-full mb-4">
            <div className="lg:w-1/2 sm:w-full w-2/3 mb-6 lg:mb-2">
              <h1 className="sm:text-3xl text-2xl font-graphikBold title-font pb-4 text-[#015464] lg:w-full">
                Featured Publishers
              </h1>
              <div className="h-1 w-48 bg-[#0FBF61] opacity-20 rounded"></div>
            </div>
            <div className="text-right lg:w-1/2 sm:w-full w-1/3 mb-6 lg:mb-0 lg:flex md:justify-end items-center">
              <button onClick={() => window.location.href = "/publisher-list"} className="text-white bg-[#015464] border-0 py-2 px-6 focus:outline-none w-28 h-10 rounded-[21px] text-sm">
                <h1 className="items-center">View all</h1>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2   md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-3 ">
            {data.map((publisher, index) => (
              <div className="p-4 flex flex-col items-center" key={index}>
                {publisher?.profile_image ? <Image
                  className=" rounded w-96 object-cover object-center mb-6"
                  src={publisher?.profile_image}
                  alt="content"
                  width="100"
                  height="100"
                /> : null}
                
              </div>
            ))}
            {/*<div className="p-4 flex flex-col items-center">
              <Image
                className=" rounded w-96 object-cover object-center mb-6"
                src={brand_1}
                alt="content"
              />
            </div>
            <div className="p-4 flex flex-col items-center">
              <Image
                className=" rounded w-96 object-cover object-center mb-6"
                src={brand_2}
                alt="content"
              />
            </div>
            <div className="p-4 flex flex-col items-center">
              <Image
                className=" rounded w-96 object-cover object-center mb-6"
                src={brand_3}
                alt="content"
              />
            </div>
            <div className="p-4 flex flex-col items-center">
              <Image
                className=" rounded w-96 object-cover object-center mb-6"
                src={brand_4}
                alt="content"
              />
            </div>
            <div className="p-4 flex flex-col items-center">
              <Image
                className=" rounded w-96 object-cover object-center mb-6"
                src={brand_5}
                alt="content"
              />
            </div>
            <div className="p-4 flex flex-col items-center">
              <Image
                className=" rounded w-96 object-cover object-center mb-6"
                src={brand_6}
                alt="content"
              />
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
}
