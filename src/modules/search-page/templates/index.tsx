// @ts-nocheck
"use client"
import {
  ProductCategoryWithChildren,
} from "@lib/data"
import Image from "next/image";

import { useCart, useRegions } from "medusa-react"
import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"

import { CardsGrid, CardsList } from "@modules/common/components/CarouselCards/CategoryItem";
import FeaturedAuthors from "@modules/authors/FeaturedAuthors"
import FeaturedPublishers from "@modules/authors/FeaturedPublishers"
import dropdown from "@modules/common/icons/dropdown.svg";
import gridEnabled from "@modules/common/icons/gridEnabled.svg";
import gridDisabled from "@modules/common/icons/gridDisabled.svg";
import listEnabled from "@modules/common/icons/listEnabled.svg";
import listDisabled from "@modules/common/icons/listDisabled.svg";
import { getProductImage } from "@lib/util/prices";
import { useSearchParams } from "next/navigation"
// import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { fetchProducts } from '@lib/util/products_api';
import { round } from "lodash";
import { useRouter } from 'next/navigation';
import OffersBanner from "@modules/common/components/offer-banner";
import { useMeCustomer } from "medusa-react"
import Spinner from "@modules/common/icons/spinner";
import searchbar from "@modules/common/icons/searchbar.svg"


const SearchTemplate = () => {
  const { regions } = useRegions()
  const cart = useCart()
  const { customer } = useMeCustomer()
  const router = useRouter();
  const paramsObject = useSearchParams()
  const [limit, setLimit]  = useState(parseInt(paramsObject.get('limit') ?? "10"));
  const [currentPage, setCurrentPage] = useState(parseInt(paramsObject.get('page') ?? "1"));
  const [search, setSearch] = useState(paramsObject.get('q') ?? "");
  const [offset, setOffset]  =  useState(currentPage == 1 ? 0 : currentPage * limit); 
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [totalPage, setTotalPage] = useState(0)
  const [order, setOrder] = useState("created_at")
  const [productsObject, setProductsObject] = useState([]);
  const searchInput = useRef()

  const pageSwitch = (page = 1) => {
    setIsLoading(true)  
    setOffset(page == 1 ? 0 : (page-1) * limit)
    setCurrentPage(page)
  };

  const updateLimit = (limit = 10) => {
    setIsLoading(true)  
    setLimit(limit)
  };
  const updateOrder = (order ="") => {
    setIsLoading(true)  
    setOrder(order)
  };

  const [isGridView, setGridView] = useState(true);

  const enableGridView = () => {
    if (!isGridView) {
      setGridView(true);
    }
  };

  const enableListView = () => {
    if (isGridView) {
      setGridView(false);
    }
  };

  useEffect(() => {    
    // Update Search Bar
    searchInput.current.value = search;

    const urlLocationupdate = () => {
      router.push(`?limit=${limit}&page=${currentPage}&q=${search}&order=${order}`);
    };

    const loadProducts = async () => {
      try {
        const data = await fetchProducts(offset,limit,[],order,search)   
        // console.log(data);    
        setCount(parseInt(data.count))  
        let pageNum = 1 
        if(data.count > limit){     
          pageNum= Number.isInteger(data.count/limit) ? data.count/limit : (data.count / limit) + 1
        }
        setTotalPage(pageNum)   
        urlLocationupdate()      
        setIsLoading(false)           
        setProductsObject(data.products)
      } catch (error) {
        // Handle error
      }
    };
    if(isLoading && search){
      loadProducts();
    }

  }, [currentPage,limit,offset,count,totalPage,router,regions,isLoading,search,order]);

  //Dropdown for categories
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  //dropdown for filter

  const dropdownRef = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current ) {
       setIsShowOpen(false);
       setIsSortOpen(false);
    }
   };

   const submitSearch = (event) => {
     event.preventDefault();
     setIsLoading(true);
     setSearch(event.target.search.value);
     // console.log(event.target.search.value);
   }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const convertToDecimal = (amount) => {
    return Math.floor(amount) / 100
  }

  const formatPrice = (amount,currency_code) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      // TODO assuming region is already defined somewhere
      currency: currency_code,
    }).format(convertToDecimal(amount))
  }
  
  const currency_code="inr"
  // TODO currency code 
  const loadPrice = (variants) =>{
    const priceObj = variants[0].prices.filter(variant => variant.currency_code == currency_code)
    let price = "0"
    if(priceObj.length != 0){
      price = formatPrice(priceObj[0].amount,currency_code)
    }
    return(price)
  }
  
  return (
    <>
      <div className="hero_bg">
        <Image className=" absolute z-0 top-40 w-16 hidden xl:block " src="/images/LandingPage/Leaf1.png" alt="" width="100" height={350}/>
        <Image className=" hidden lg:block absolute z-0 top-5 mt-36 right-[0%] xl:w-26  " src="/images/LandingPage/Leaf-Bg.png" alt="" width={100} height={350}/>
        <div className="sm:px-16 px-5">
        <div className=" w-full z-40 container mx-auto px-6">
          <div className="">
            {/*<div className=" pt-10 leading-6 pb-2">
              <div className=" flex 2xl:px-0 justify-between items-center   lg:max-w-screen-2xl w-full  text-[#015464]">
                <nav>
                  <ul className="flex m-0 items-center p-0">
                    <li className="flex items-center text-left">
                      <Link
                        href="/browse"
                        title=""
                        className="cursor-pointer text-sm font-normal leading-5 text-[#015464] hover:text-gray-900"
                      >
                        {" "}
                        Browse{" "}
                      </Link>
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
                        Categories{" "}
                      </a>
                    </li>  
                    {parentCat != null &&(
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
                          href={parentCat.handle}
                          title=""
                          className="cursor-pointer text-sm font-normal leading-5 text-[#015464] hover:text-gray-900"
                        >
                          {" "}
                          {parentCat.name}{" "}
                        </a>
                      </li>
                    )}
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
                        {category.name}{" "}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>*/}

            <div className=" mx-auto flex justify-between items-center  py-4">
              <div className="  md-px-24 relative  container  mx-auto">
                {/*<div className="flex flex-wrap w-full ">
                  <div className="lg:w-1/2 w-full mb-1 lg:mb-2">
                    <h1 className="text-3xl  font-graphikBold title-font pb-1 text-[#015464]">
                      {category.name}
                    </h1>
                  </div>
                </div>*/}
                <div className="">
                  <form className="flex justify-start" onSubmit={submitSearch}>
                    <input 
                      ref={searchInput}
                      type="text" 
                      name="search"
                      placeholder="Search . . ."
                      className="border border-gray-300 text-gray-900 text-sm rounded-full focus:rounded-full focus:border-primary-600 p-2.5 w-full md:w-[300px] m-w-full" 
                    />
                    <button className="shrink-0 ml-1 flex items-center justify-between rounded-full px-4 py-2 bg-[#7CC9B5] text-white hover:bg-[#7CC9B5]/90 focus:outline-none space-x-2 flex-row">
                      <span className="">Search</span>
                      <Image src={searchbar} alt="search" className="h-4 w-4 shrink-0" />
                    </button>
                  </form>
                  
                  {/*<button
                    type="button"
                    onClick={handleDropdownToggle}
                    className={`flex items-center justify-between sm:w-80 px-4 py-2 bg-[#7CC9B5] text-white hover:bg-[#7CC9B5]/90 focus:outline-none space-x-2 flex-row ${isDropdownOpen ? 'rounded-t-3xl mb-[-6px]' : 'rounded-3xl'}`}
                  >
                    <span className="pl-5">Browse By Subject</span>
                    <Image
                      src={dropdown}
                      alt="Dropdown"
                      className={`w-3 h-3 ${isDropdownOpen ? 'rotate-180' : ''}`}
                      width={3}
                      height={3}
                    />
                  </button>

                  {isDropdownOpen && (
                    <CategoryPageCategoriesButton
                    closeDropdown={handleDropdownToggle} keyPre={"cat"}
                    // toggleMovePolygon={setDropdownOpen}
                    />
                  )}*/}
                </div>

                <div className="sm:flex pt-3 pb-3 sm:space-x-3 mx-auto justify-end lg:pt-1">
                <select  onChange={(event) => updateLimit(event.target.value)  }
                className=" mb-1 py-2 w-full md:w-36 lg:w-52 bg-[#EEF2F6] text-[#015464] focus:text-[#015464] pl-7  md:ml-1 lg:ml-1 border-none rounded-md ">
                      <option value={10}>Upto 10</option>
                      <option value={20}>Upto 20</option>
                      <option value={30}>Upto 30</option>
                      <option value={50}>Upto 50</option>
                </select>
                <select  onChange={(event) => updateOrder(event.target.value)  }
                className="mb-1 py-2 w-full md:w-36 lg:w-52 bg-[#EEF2F6] text-[#015464] border border-gray-200 pl-7 border-none  md:ml-5 lg:ml-1 rounded-md xs:mt-5 ">
                      <option value={"title"}>Best Seller </option>
                      <option value={"title"}>Highly Recommended{" "}</option>
                      <option value={"title"}> Book Titles (A to Z){" "}</option>
                      <option value={"-title"}>Book Titles (Z to A){" "}</option>
                      <option value={"-created_at"}> Publication Date (Oldest First){" "}</option>
                      <option value={"created_at"}>Publication Date (Newest First)</option>
                </select>
             
                  <button onClick={enableGridView} className="hidden xl:block">
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
                        width={10}
                        height={10}
                        src={!isGridView ? listEnabled : listDisabled}
                        alt="listDisabled"
                        className={` items-center ${isGridView ? 'w-5' : 'w-7'}`}
                      />
                  </button>
                  
                </div>
                <div className=" z-0 h-[2px] w-full bg-[#0FBF61] opacity-20 rounded mb-5"></div>
                {isLoading ? 
                  <div className={`flex flex-col items-center justify-center px-4 py-8 text-gray-900 min-h-[${search ? '80vh' : '35vh'}80vh]`}>
                      {(search) ? <Spinner size={40} /> : <p>Search our books</p>}
                  </div>
                  : <>
                    {
                      search
                        ? <>
                            <div className="pl-[16px] my-[25px]">
                              <h3 className="text-[20px] text-[#1A6270] font-graphikBold">SEARCH RESULTS FOR "{search}"</h3>
                            </div>
                          </>
                        : null
                    }    
                    {isGridView ? (
                      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 lg:gap-3 w-full">
                        {productsObject.length !=0 && productsObject.map((book,index) => (
                          <>
                          {/* { productMeta = book['metadata'] !== "undefined" ? book['metadata']  : ""} */}
                          <CardsGrid
                          key={`grid-${index}`}
                          title={book['title']}
                          author={book['metadata']?.author || ""}
                          rating={book['metadata']?.review_rating || 0}
                          ratingCount={book['metadata']?.review_count || 0}
                          handle={book['handle']}
                          price={loadPrice(book['variants'])}
                          imageSrc={getProductImage(book['thumbnail'])}
                          variants={book['variants']}
                          wishlist={customer?.metadata?.wishlist || []}
                          customer_id={customer?.id || null}
                          product={book}
                          />
                          </>
                        ))}
                      
                      </div>
                    ) : (
                      <div>
                        {productsObject.length !=0 && productsObject.map((book,index) => (
                          <CardsList
                          key={`list-${index}`}
                          title={book['title']}
                          author={book['metadata']?.author || ""}
                          rating={book['metadata']?.review_rating || 0}
                          ratingCount={book['metadata']?.review_count || 0}
                          handle={book['handle']}
                          price={loadPrice(book['variants'])}
                          imageSrc={getProductImage(book['thumbnail'])}
                          subtitle={book['subtitle']}
                          description={book['description']}
                          variants={book['variants']}
                          wishlist={customer?.metadata?.wishlist || []}
                          customer_id={customer?.id || null}
                          product={book}
                          />
                        ))}                                  
                    </div>
                  )} </>
                }

              </div>
            </div>
            {
              (search)
                ? <>
                    <div className="mx-auto flex justify-center items-center mt-4 relative z-0">
                      <nav
                        className="inline-flex items-center justify-center rounded-md shadow-sm"
                        aria-label="Pagination"
                      >
                        <a onClick={() => pageSwitch(currentPage - 1)}
                          href="#"
                          className="relative  inline-flex items-center rounded-l-sm px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                          <p className="text-sm  text-[#408080]" >Previous</p>
                        </a>
                        

                        {[...Array(round(totalPage+1))].map((e, i) => {
                          return  (<>
                          { i != 0 && ( <>
                          { i == currentPage ? (
                                <a href="#"
                                aria-current="page"
                                className="relative z-10 inline-flex items-center bg-[#7CC9B5] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"  >
                                {i} </a>
                          ) :(<a href="#" onClick={() => pageSwitch(i)}
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                          > {i}                
                          </a>)}                        
                        </>)
                        } </>)} )}                         
                        <a onClick={() => pageSwitch(currentPage +1)}
                          href="#"
                          className="relative    inline-flex items-center rounded-r-sm px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                          <p className="text-sm text-[#408080] ">Next</p>
                        </a>             
                      </nav>
                    </div>
                  </>
                : null
            }
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default SearchTemplate
