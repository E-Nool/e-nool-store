"use client"
import React from "react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import polygon from "@modules/common/icons/polygon.svg"
import { useProductCategories } from "medusa-react"

const CategoryPageCategoriesButton = ({
  closeDropdown,
  toggleMovePolygon = null,
  top = "5rem",
  keyPre = "prod",
  childCategories = [],
}) => {
  const dropdownRef = useRef(null)

  const  product_categories = childCategories

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
      className={`z-50 container mx-auto p-22 font-graphik mb-10 ${
        toggleMovePolygon ? " w-11/12 top-[14.5rem]" : ` w-12/12 top-[${top}]`
      }`}

      ref={dropdownRef}
    >
      {/*{toggleMovePolygon ? (
        <Image src={polygon} className="absolute w-8 top-6 left-72" alt="" />
      ) : (
        <Image src={polygon} className="absolute w-8 top-6 left-36" alt="" />
      )}*/}

      <div className="z-90 bg-[#7CC9B5] rounded-lg shadow-lg ">
      
       <div className="grid px-4 py-5 mx-auto text-[12px] text-white lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 md:px-6  ">
          
            {/* Map over the menuItems array to generate list items */}

            { product_categories.map((item, index) => (
                  <div key={keyPre + "first" + index} className="col-auto py-[7px] ">
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
    </div>
  )
}

export default CategoryPageCategoriesButton
