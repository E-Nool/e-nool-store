"use client";
import React, { useState } from "react";
import Image from "next/image";
import Dropdown from "../Dropdown/Dropdown"
import StarRating from "./StarRating";
import TrendingReads1 from "../../../../../public/images/LandingPage/TrendingReads1.png";
import eye from "@modules/common/icons/eye.png";
import heart from "@modules/common/icons/heart.png";
import moreOption from "@modules/common/icons/more-options-dotted.png";
import arrow from "@modules/common/icons/arrow.svg";
import heartred from "@modules/common/icons/heartred.png";
import Wishlist from "../wishlist";
import Reader from "@modules/epub/containers/Reader"


import Link from "next/link";
import useToggleState from "@lib/hooks/use-toggle-state";

export const CardsGrid = ({
  title,
  author,
  rating,
  imageSrc,
  ratingCount,
  handle,
  price,
  variants,
  wishlist,
  customer_id,
  index = 0,
  accountPage=false,
  customContainer="",
  product="",
  className=""
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

const { state, open, close } = useToggleState(false)

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

 

  return (
<>
    <div className={`${className} mb:5 sm:mb-10  mx-auto items-center justify-center font-graphik relative`}>
      <Link href={`/products/${product.handle}`}>
        <Image
          className=" rounded-2xl  object-cover object-center mb-4 md:min-h-[320px] md:max-h-[320px] min-h-[220px] max-h-[220px] overflow-hidden "
          src={imageSrc}
          alt="content"
          width={220}
          height={320}
        />
      </Link>
      <h2 className="text-[16px] text-[#1A6270] font-graphik  min-h-[45px] max-h-[40px] overflow-hidden ">
        <Link href={`/products/${product.handle}`}> {title}</Link>
      </h2>
      <div className="flex flex-wrap mb-2 my-auto  ">
        {" "}
        <StarRating rating={rating} onRatingChange={() => {}} />
        <p className="tracking-widest text-[#280c0c] text-xs my-auto ml-1 ">
          ({ratingCount})
        </p>
      </div>
      <p className="text-[12px] tracking-widest text-[#015464] text-xs  mb-2  ">    
        by {author?.name || ""}
      </p>
      <p className="text-[12px] tracking-widest text-[#015464] text-xs  mb-2   ">
       {product?.metadata?.isFree ? `${price[0]}0.00` : price}
      </p>

      <div className="flex flex-wrap space-x-4 pt-2 mb-1 text-center relative">
        <Link href={`/epub?id=${product.id}`}>
          <Image src={eye} className="w-8" alt="" />
        </Link>
        <Wishlist product={product} variants={variants} wishlist={wishlist} customer_id={customer_id} index={index} accountPage = {accountPage}></Wishlist>
        <button onClick={handleDropdownToggle}>
          <Image src={moreOption} className="w-8" alt="" />
        </button>
        {isDropdownOpen && (
          <Dropdown
            isDropdownOpen={isDropdownOpen}
            setDropdownOpen={setDropdownOpen}
            handle={handle}
            customContainer={customContainer}
            product={product}
          />
        )}
      </div>
    </div>
    </>
  );
};

export const CardsList = ({  title,
  author,
  rating,
  imageSrc,
  ratingCount,
  handle,
  price,
  subtitle,
  description,
  variants,
  wishlist,
  customer_id,
  index = 0,
  accountPage=false,
  product ="",
  className=""
}) => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isHeartRed, setIsHeartRed] = useState(false);
  const { state, open, close } = useToggleState(false)

  const handleHeartClick1 = () => {
    setIsHeartRed(!isHeartRed);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const truncate = (string = '', limit = 200) => {
    return (string.length <= limit) ? string : string.slice(0, limit) + "...";
  }
  
  return (
    <>
    <div className={`${className} grid gap-6 grid-cols-1 sm:gap-12 xl:gap-16 mx-auto py-4`}>
      <div className="border border-[#E4E4E4] rounded-[21px] bg-white p-5 flex flex-col md:flex-row">
        <div className="md:w-56 flex sm:block justify-center">
          <Link href={`/products/${product.handle}`}>
            <Image
              className="rounded-2xl  w-60 object-cover object-center my-auto"
              src={imageSrc}
              alt="content"   
              width={220}
              height={320}     
            />
          </Link>
        </div>
        <div className="flex flex-col justify-between md:px-6 w-full">
          <div className="h-full">
            <div className="flex lg:flex-row flex-col">
                <h2 className="text-1xl text-[#1A6270] font-graphik  w-full">
                  {title}
                </h2>
              <div className="card-list-item-actions flex flex-row  space-x-6 pt-2 mb-1 text-center relative z-0 xl:mx-5">
              <Link href={`/epub?id=${product.id}`}>
                <Image src={eye} className="w-12" alt="" />
              </Link>
                <Wishlist product={product} variants={variants} wishlist={wishlist} customer_id={customer_id} index={index} accountPage = {accountPage}></Wishlist>
               
                <button onClick={handleDropdownToggle}>
                  <Image src={moreOption} className="w-12" alt="" />
                </button>
                {isDropdownOpen && (
                  <Dropdown
                    isDropdownOpen={isDropdownOpen}
                    setDropdownOpen={setDropdownOpen}
                    handle={handle}
                    product={product}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-wrap mb-2 my-auto  ">
              {" "}
              <StarRating
                rating={rating}
                onRatingChange={(newRating) => handleRatingChange(newRating)}
              />
              <p className="tracking-widest text-[#280c0c] text-xs my-auto ml-1 ">
                ({ratingCount})
              </p>
            </div>
            <p className=" tracking-widest text-[#015464] text-[12px] mb-2">
             {author?.name || ""}
            </p>
            <p className="text-[12px] tracking-widest text-[#015464] text-xs  mb-2   ">
             {product?.metadata?.isFree ? `${price[0]}0.00` : price}
            </p>
            <h2 className="font-graphikBold italic sm:w-4/6 w-full text-[14px] 2xl:text-xs font-bold text-[#015464] mb-2">
              {subtitle}
            </h2>
            {/* <p className="text-[#015464]sm:w-4/6 w-full text-[12px] font-graphik max-h[10px] overflow-hidden">
             {description ? truncate(description, 150) : ""}
            </p> */}
            <div className="flex flex-wrap">
              <Link href={`/products/${handle}`} className="flex items-center text-white bg-[#015464] border-0 py-2 mt-10 px-6 focus:outline-none w-auto h-10 rounded-[21px] text-sm">
                <h1>Read More</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <Reader isOpen={state} close={close} url={"https://react-reader.metabits.no/files/alice.epub"}/> */}
</>
  );
};
