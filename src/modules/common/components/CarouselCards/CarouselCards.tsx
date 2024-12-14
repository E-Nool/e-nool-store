"use client"
import React, { useState } from "react"

import Image from "next/image"
import Dropdown from "../Dropdown/Dropdown"
import StarRating from "./StarRating"
import eye from "@modules/common/icons/eye.png"
import Wishlist from "../wishlist"
import moreOption from "@modules/common/icons/more-options-dotted.png"
import Reader from "@modules/epub/containers/Reader"

import Link from "next/link"
import useToggleState from "@lib/hooks/use-toggle-state"

function CarouselCardItems({
  title,
  author,
  rating,
  imageSrc,
  ratingCount,
  product,
  price,
  handle,
  variants,
  wishlist,
  customer_id,
}) {
 

  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const { state, open, close } = useToggleState(false)

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  return (
    <>
    <div className=" lg:mx-3 xl:mx-auto items-center justify-center font-graphik flex flex-col">
    <Link href={`/products/${handle}`}>
     <Image alt="content"  
        className="min-h-[300px] max-h-[300px] rounded-2xl 2xl:w-56 sm:w-[12.9rem] 1xl:w-[14.5rem] md:w-50 xl:w-50 w-56 object-cover object-center mb-4 "
        src={imageSrc}
        width={250}
        height={360}
      />
      </Link>
      <Link href={`/products/${handle}`}>
      <h2 className="text-center text-[16px] text-[#1A6270] font-graphik font-black mb-2 xl:mx-8  min-h-[50px] max-h-[50px] overflow-hidden">
        {title}
      </h2>
      </Link>
      <div className="flex flex-wrap mb-2 xl:mx-8 ">
        {" "}
        <p className="tracking-widest text-[#280c0c] text-xs  ">
        
        <StarRating rating={rating} onRatingChange={() => {}} font_size={"base"}/>
        </p>

        <p className="tracking-widest ml-2 text-[#280c0c] text-xs mt-1 ">
          ({ratingCount})
        </p>
      </div>
      <p className="text-[12px] tracking-widest text-[#015464] text-xs  mb-2 xl:mx-8  text-center">
        by {author}
      </p>
      <p className="text-[12px] tracking-widest text-[#015464] text-xs  mb-2 xl:mx-8  text-center">
        {product?.metadata?.isFree ? `${price[0]}0.00` : price}
      </p>

      <div className="flex flex-wrap space-x-4 pt-2 mb-1 text-center relative z-0 xl:mx-8">   
        <a href={`/epub?id=${product.id}`}>
          <Image src={eye} className="w-8" alt="" />
        </a>
        <Wishlist variants={variants} wishlist={wishlist} customer_id={customer_id}></Wishlist>         
        <button onClick={handleDropdownToggle}>
          <Image onClick={open} src={moreOption} className="w-8  " alt="" />
        </button>
        <div className="w-full h-full relative">
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
    </div>
    {/* <Reader isOpen={state} close={close} url={"https://react-reader.metabits.no/files/alice.epub"}/> */}
    </> 
  )
}
export default CarouselCardItems;
