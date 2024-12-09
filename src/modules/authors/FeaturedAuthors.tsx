// @ts-nocheck
"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import FeatureAuthorimg from "../../../public/images/LandingPage/featured-author.svg";
import FeatureAuthorimg1 from "../../../public/images/LandingPage/featured-author1.svg";
import {fetchAuthors} from "@lib/util/authors_publishers";

export default function FeaturedAuthors() {

  const [data, setData] = useState([]);

  useEffect(() => {
    (async function(){
      const data = await fetchAuthors();
      setData(data.slice(0, 8));
    })();
  }, []);

  return (
    <section className=" sm:mb-1 lg:mt-[40px]">
      <div className=" m-auto flex justify-between items-center py-4" >
      <div className=" md-px-24 relative  container  py-4 m-auto  ">
        <div className="flex w-full mb-10">
          <div className="lg:w-1/2 sm:w-full w-2/3 mb-6 lg:mb-2">
            <h1 className="sm:text-3xl text-2xl font-graphikBold title-font pb-4 text-[#015464] lg:w-full">
              Featured Authors
            </h1>
            <div className="h-1 w-48 bg-[#0FBF61] opacity-20 rounded"></div>
          </div>
          <div className="text-right lg:w-1/2 sm:w-full w-1/3 mb-6 lg:mb-0 lg:flex md:justify-end items-center">
            <button onClick={() => window.location.href = "/author-list"} className="text-white bg-[#015464] border-0 py-2 px-6 focus:outline-none w-28 h-10 rounded-[21px] text-sm">
              <h1 className="items-center">View all</h1>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2   md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-2">
          {data.map((author, index) => (
            <div className="p-4 flex flex-col items-center" key={index}>
              <Image
                className="rounded lg:w-20  object-cover object-center mb-6"
                src={author?.profile_image}
                alt="content"
                width="100"
                height="100"
              />
              <p className="text-center font-graphikBold text-[#015464] text-center">{author?.title}</p>
            </div>
          ))}
          {/*<div className="p-4 flex flex-col items-center">
            <Image
              className="rounded lg:w-20  object-cover object-center mb-6"
              src={FeatureAuthorimg1}
              alt="content"
            />
            <p className="text-center font-graphikBold text-[#015464] text-center">Arthur Gonzalez</p>
          </div>
          <div className="p-4 flex flex-col items-center">
            <Image
              className="rounded-xl lg:w-20   object-cover object-center mb-6"
              src={FeatureAuthorimg}
              alt="content"
            />
            <p className="text-center font-graphikBold text-[#015464]">Arthur Gonzalez</p>
          </div>
          <div className="p-4 flex flex-col items-center">
            <Image
              className="rounded-xl lg:w-20  object-cover object-center mb-6"
              src={FeatureAuthorimg1}
              alt="content"
            />
            <p className="text-center font-graphikBold text-[#015464]">Arthur Gonzalez</p>
          </div>
          <div className="p-4 flex flex-col items-center">
            <Image
              className="rounded-xl lg:w-20  object-cover object-center mb-6"
              src={FeatureAuthorimg}
              alt="content"
            />
            <p className="text-center font-graphikBold text-[#015464]">Arthur Gonzalez</p>
          </div>
          <div className="p-4 flex flex-col items-center">
            <Image
              className="rounded-xl lg:w-20  object-cover object-center mb-6"
              src={FeatureAuthorimg1}
              alt="content"
            />
            <p className="text-center font-graphikBold text-[#015464]">Arthur Gonzalez</p>
          </div>
          <div className="p-4 flex flex-col items-center">
            <Image
              className="rounded-xl lg:w-20  object-cover object-center mb-6"
              src={FeatureAuthorimg}
              alt="content"
            />
            <p className="text-center font-graphikBold text-[#015464]">Arthur Gonzalez</p>
          </div>
          <div className="p-4 flex flex-col items-center">
            <Image
              className="rounded-xl lg:w-20  object-cover object-center mb-6"
              src={FeatureAuthorimg}
              alt="content"
            />
            <p className="text-center font-graphikBold text-[#015464]">Arthur Gonzalez</p>
          </div>
          <div className="p-4 flex flex-col items-center">
            <Image
              className="rounded-xl lg:w-20  object-cover object-center mb-6"
              src={FeatureAuthorimg}
              alt="content"
            />
            <p className="text-center font-graphikBold text-[#015464]">Arthur Gonzalez</p>
          </div>*/}

        </div>
      </div>
      </div >
    </section>
  );
}