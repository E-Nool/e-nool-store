// @ts-nocheck
"use client"
import Image from "next/image"
import React, {
  Fragment,
  useState,
  useEffect,
  useRef,
  useMemo,
} from "react"
import AddPage from "@modules/common/components/addPage"
import bgimg from "@public/images/bg1.png"

import CategoriesButton from "@modules/layout/templates/nav/CategoriesButton"
import {
  CardsGrid,
  CardsList,
} from "@modules/common/components/CarouselCards/CategoryItem"
import gridEnabled from "@modules/common/icons/gridEnabled.svg"
import gridDisabled from "@modules/common/icons/gridDisabled.svg"
import listEnabled from "@modules/common/icons/listEnabled.svg"
import listDisabled from "@modules/common/icons/listDisabled.svg"
import { useCart } from "medusa-react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { getProductsList } from "@lib/data"
import { StoreGetProductsParams } from "@medusajs/medusa"
import usePreviews from "@lib/hooks/use-previews"
import { getProductImage } from "@lib/util/prices"
import { useMeCustomer } from "medusa-react"
import Spinner from "@modules/common/icons/spinner"


const BrowseComponent = () => {
  const [isInputVisible, setInputVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { customer } = useMeCustomer()
  const toggleInput = () => {
    setInputVisible(!isInputVisible)
  }

  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen)
  }
  const [showModal, setShowModal] = useState(false)
  const [isGridView, setGridView] = useState(true)

  const enableGridView = () => {
    if (!isGridView) {
      setGridView(true)
    }
  }

  const enableListView = () => {
    if (isGridView) {
      setGridView(false)
    }
  }
  const categoriesRef = useRef(null)
  const handleDocumentClick = (event) => {
    if (
      categoriesRef.current &&
      // !categoriesRef.current.contains(event.target) &&
      event.target !== categoriesRef.current
    ) {
      setDropdownOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick)
    return () => {
      document.removeEventListener("click", handleDocumentClick)
    }
  }, [])

  const closeDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  const toggleMovePolygon = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  const { cart } = useCart()
  const queryParams: StoreGetProductsParams = useMemo(() => {
    const params: StoreGetProductsParams = {}

    if (cart?.id) {
      params.cart_id = cart.id
    }

    if (cart?.region?.currency_code) {
      params.currency_code = cart.region.currency_code
    }
    params.limit = 25

    return params
  }, [cart?.id, cart?.region])

  const { data, isLoading } = useInfiniteQuery(
    [queryParams, cart],
    ({ pageParam }) => getProductsList({ pageParam, queryParams }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  )

  const previews = usePreviews({ pages: data?.pages, region: cart?.region })
  return (
   
        <Fragment>
             <Image className=" hidden lg:block  absolute z-0 top-48 w-16 " src="/images/LandingPage/Leaf1.png" alt="" width="100" height={350}/>
             <Image className=" hidden lg:block absolute z-0 top-5 mt-16 right-[0%] xl:w-26  " src="/images/LandingPage/Leaf-Bg.png" alt="" width={100} height={350}/>

          <div className="sm:px-16 px-5">

          <div className="rounded-3xl container mx-auto mb-[-50px] px-6 min-h-[80vh]">
            {/*<Image
              className=" absolute ml-[460px] w-[1200px] sm:block hidden"
              src={bgimg}
              alt="bgimg"
            />*/}
           
            <div className=" relative pt-1 pb-8 ">
              <div className="mt-12">
                <div className="  text-[#015464] text-xl font-graphik mt-5 ">
                  <ul className="flex m-0 items-center p-0">
                    <li className="flex items-center text-left">
                      <a
                        href="/"
                        title=""
                        className="cursor-pointer text-sm font-normal leading-5 text-[#015464] hover:text-gray-900"
                      >
                        {" "}
                        Home{" "}
                      </a>
                    </li>

                    <li className="flex items-center text-left">
                      <svg
                        className="block h-5 w-5 align-middle text-[#015464]"
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
                        className="cursor-pointer text-sm font-normal leading-5 text-[#015464] hover:text-gray-900"
                      >
                        {" "}
                        Browse{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" container justify-start  ">
                <div className=" ">
                  <h3 className=" text-[#015464] text-3xl font-graphikBold mt-2  ">
                    Browse
                  </h3>
                </div>
                <div className="flex mt-10">
                  <button className={`py-4 text-[#015464] text-sm font-semibold border-b-8 hover:border-[#015464] border-${!isDropdownOpen ? "[#015464]" : "transparent"} `}>
                    New Releases
                  </button>
                  <button
                    className={`ml-10 py-4 text-[#015464] text-sm font-semibold border-b-8 hover:border-[#015464] border-${isDropdownOpen ? "[#015464]" : "transparent"} `}
                    onClick={handleDropdownToggle}
                    ref={handleDocumentClick}
                  >
                    Categories{" "}
                  </button>
                  <div className="sm:flex  sm:space-x-3 ml-auto mb-2 justify-end sm:block flex">
                    <button onClick={enableGridView } className="hidden xl:block">
                      <Image
                        width={14}
                        height={14}
                        src={isGridView ? gridEnabled : gridDisabled}
                        alt="gridEnabled"
                        className={`px-2 ${isGridView ? 'w-12' : 'w-9'}`}
                      />
                    </button>
                    <button onClick={enableListView} className="hidden xl:block">
                      <Image
                        width={14}
                        height={14}
                        src={!isGridView ? listEnabled : listDisabled}
                        alt="listDisabled"
                        className={` items-center ${isGridView ? 'w-5' : 'w-7'}`}
                      />
                    </button>
                  </div>
                </div>
                <div className="  mr-10 top-1 ">
                  {" "}
                  {isDropdownOpen && (
                    <div className=" w-full ">
                      <CategoriesButton closeDropdown={closeDropdown} top ={"8rem"} />
                    </div>
                  )}
                </div>
                <div className=" absolute z-0 h-[2px] left-0 right-0 w-full bg-[#0FBF61] opacity-20 rounded mb-5"></div>
              </div>
            </div>
            {! isDropdownOpen && <>
            {isLoading ? 
             <div className="flex flex-col items-center justify-center px-4 py-8 text-gray-900">
                <Spinner size={40}  />
             </div>      
            :
            <div className=" conatiner justify-center items-center  gap-10 flex mb[-20px]">
              {isGridView ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:grid-cols-5 2xl:grid-cols-6 gap-4 lg:gap-4 w-full">
                  {!isLoading &&
                    previews.map((book, index) =>{
                      const value = index % 2 !== 0 ? 'right-3 left-0 pl-0 pr-[75px]' : "";
                      return (
                        <>
                          <CardsGrid
                            key={book.id}
                            title={book.title}
                            author={book?.metadata?.author}
                            rating={book?.metadata?.review_rating || 0}
                            ratingCount={book?.metadata?.review_count || 0}
                            handle={book.handle}
                            price={book?.price?.original_price}
                            imageSrc={getProductImage(book.thumbnail)}
                            variants={book['variants']}
                            wishlist={customer?.metadata?.wishlist || []}
                            customer_id={customer?.id || null}
                            customContainer={value}
                            product={book}
                            index={index}
                          />
                        </>
                    )
                  })}
                </div>
              ) : (
                <div className="md:px-2 xl:px-0">
                  {!isLoading &&
                    previews.map((book, index) => (
                      <>
                        <CardsList
                          key={index}
                          title={book.title}
                          author={book?.metadata?.author}
                          rating={book?.metadata?.review_rating || 0}
                          ratingCount={book?.metadata?.review_count || 0}
                          handle={book.handle}
                          price={book?.price?.original_price}
                          imageSrc={getProductImage(book.thumbnail)}
                          subtitle={book.subtitle}
                          description={book.description}
                          variants={book['variants']}
                          wishlist={customer?.metadata?.wishlist || []}
                          customer_id={customer?.id || null}
                          product={book}
                          index={index}
                        />
                      </>
                    ))}
                </div>
              )}
            </div>
            }
             </>
          }
          
          </div>
          <AddPage isVisivle={showModal} onClose={() => setShowModal(false)} />  
          </div>  
        </Fragment>
  )
}

export default BrowseComponent