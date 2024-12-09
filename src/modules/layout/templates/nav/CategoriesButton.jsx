"use client"
import React from "react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import polygon from "@modules/common/icons/polygon.svg"
import { useProductCategories } from "medusa-react"

const CategoriesButton = ({
  closeDropdown,
  toggleMovePolygon = null,
  top = "5rem",
  keyPre = "prod",
  type = "desktop"
}) => {
  const dropdownRef = useRef(null)

  const { product_categories, isLoading } = useProductCategories({
    handle: "books",
  })

  const handleDocumentClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown()
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick)
    return () => {
      document.removeEventListener("click", handleDocumentClick)
    }
  })

  return (
    <div
      className={`${type === 'mobile' ? '' : 'absolute'} z-50 container mx-auto p-22 font-graphik  ${
        toggleMovePolygon ? " w-11/12 top-[14.5rem]" : ` w-12/12 top-[${top}]`
      }`}
      ref={dropdownRef}
    >
      {toggleMovePolygon ? (
        <Image src={polygon} className={`${type === 'mobile' ? 'mx-auto' : 'absolute'} w-8 top-6 left-72`} alt="" />
      ) : (
        <Image src={polygon} className={`${type === 'mobile' ? 'mx-auto' : 'absolute'} w-8 top-6 left-36`} alt="" />
      )}

      <div className={`${type === 'mobile' ? '' : 'absolute'} z-90 top-12 left-0 bg-[#7CC9B5] rounded-lg shadow-lg`}>
        <div className={`grid px-4 py-5 mx-auto text-[12px] text-white lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 md:px-6 ${type === 'mobile' ? '!grid-cols-1' : ''}`}>
          <div
            className=" col-span-4 "
          >
            <div className="max-h-full h-[300px] overflow-y-auto   md:h-auto grid md:grid-cols-3 lg:grid-cols-4"  >
            {/* Map over the menuItems array to generate list items */}

            {!isLoading &&
              product_categories[0].category_children              
                .map((item, index) => (
                  <div key={keyPre + "first" + index} className={`${type === 'mobile' ? 'text-left' : ''} col-auto py-[7px]`}>
                    <a
                      href={`/category/${item.handle}`}
                      className="  hover:bg-[#015464] px-3 py-1 rounded hover:text-white hover:font-semibold transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
          </div>
          </div>

          <div
            className="p-8 md:mt-10 md:h-[200px] 
            w-full text-left bg-local bg-[#015464] bg-center bg-no-repeat bg-cover rounded-lg sm:block hidden"
          >
            <p className="max-w-xl mb-5 font-extrabold leading-tight text-xl tracking-tight text-white">
              Join More Than <br />
              <span className="text-[#7CC9B5]">12000+ Book Lovers</span>
              <br />
              Worldwide
            </p>
            <button
              type="button"
              className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center bg-[#7CC9B5] text-white rounded-lg  hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
            >
              <h1 className="font-graphik font-semibold">Start Reading Now</h1>
            </button>
          </div>
        </div>
        <div
          className="p-8 md:mt-10 md:h-[200px]
                      w-full text-left bg-local bg-[#015464] bg-center bg-no-repeat bg-cover rounded-lg  mobile-catrgory-popup sm:hidden"
        >
          <p className="max-w-xl mb-5 font-extrabold leading-tight text-xl tracking-tight text-white">
            Join More Than <br />
            <span className="text-[#7CC9B5]">12000+ Book Lovers</span>
            <br />
            Worldwide
          </p>
          <button
            type="button"
            className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center bg-[#7CC9B5] text-white    rounded-lg  hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
          >
            <h1 className="font-graphik font-semibold">Start Reading Now</h1>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CategoriesButton
