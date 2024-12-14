// @ts-nocheck
"use client";
import Image from "next/image";
import React, { Fragment, useState, useEffect, useRef } from "react";
import TrendingReads1 from "../../../../public/images/LandingPage/TrendingReads1.png";
import TrendingReads2 from "../../../../public/images/LandingPage/TrendingReads2.png";
import TrendingReads3 from "../../../../public/images/LandingPage/TrendingReads3.png";
import gridEnabled from "@modules/common/icons/gridEnabled.svg";
import gridDisabled from "@modules/common/icons/gridDisabled.svg";
import listEnabled from "@modules/common/icons/listEnabled.svg";
import listDisabled from "@modules/common/icons/listDisabled.svg";
import MyWishlist from "@modules/common/components/wishlist/mywishlist";
import { useAccount } from "@lib/context/account-context";
import useToggleState from "@lib/hooks/use-toggle-state";
import Modal from "@modules/common/components/modal";
import {
  fetchBookshelves,
  addBookshelves,
  addBookshelfProduct,
} from "@lib/util/bookshelf";
import BookshelvesGrid from "../../book-shelf/bookshelf-grid";
import BookShelfAccountComponent from "../../book-shelf/bookshelf-account-component";
import { fetchAllCurrentReading } from "@lib/util/bookreader_api";
import StarRating from "@modules/common/components/CarouselCards/StarRating";
import Link from "next/link";

// const MyLibraryTemplate = () => {
//   return (
//     <div className="w-full">
//       <div className="mb-8 flex flex-col gap-y-4">
//         <h1 className="text-2xl-semi">Orders</h1>
//         <p className="text-base-regular">
//           View your previous orders and their status. You can also create
//           returns or exchanges for your orders if needed.
//         </p>
//       </div>
//       <div>
//         {/* <OrderOverview /> */}
//       </div>
//     </div>
//   )
// }

const MyLibraryTemplate = () => {
  const [isGridView, setGridView] = useState(true);
  const [isMyWishlist, setisMyWishlist] = useState(true);
  const [bookshelves, setBookshelves] = useState([]);
  const [bookshelves_count, setBookshelvesCount] = useState(0);
  const [bookshelf_detail, setBookshelfDetail] = useState(null);
  const [bookReadings, setBookReadings] = useState([]);

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
  const enableWishView = () => {
    if (!isMyWishlist) {
      setisMyWishlist(true);
    }
  };
  const enableBookView = () => {
    if (isMyWishlist) {
      setisMyWishlist(false);
    }
  };

  const [isSortOpen, setSortOpen] = useState(false);

  const handleSortToggle = () => {
    setSortOpen(!isSortOpen);
  };
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current) {
        setSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { state, open, close } = useToggleState(false);
  const handleClose = () => {
    close();
  };
  const { customer } = useAccount();

  useEffect(
    function () {
      // Fetch Books
      async function fetchBookReadings() {
        if (customer?.id) {
          const data = await fetchAllCurrentReading(customer?.id);
          if (data?.data && data?.data?.length > 0) {
            // console.log(data)
            const bk_ids = [];
            const bks = [];
            data?.data?.forEach((d, i) => {
              if (!bk_ids.includes(d?.product?.id)) {
                bks.push(d);
                bk_ids.push(d?.product?.id);
                // data?.data?.splice(i)
              }
            });

            // setBookReadings(data?.data);
            setBookReadings(bks);
            // console.log(data);
          }
        }
      }
      fetchBookReadings();
    },
    [customer]
  );
  // console.log(customer);

  const loadBookshelves = async (customer_id) => {
    try {
      if (!customer_id) throw "Customer Id not found";
      const bs = await fetchBookshelves(customer_id);
      if (bs && bs.status) {
        const [bss, bs_count] = bs.data;
        setBookshelves(bss);
        setBookshelvesCount(bs_count);
        // console.log(bss)
      }
      // console.log(bs);
    } catch (err) {
      // Handle Error
    }
  };

  useEffect(() => {
    (async function () {
      if (customer && customer.id) {
        loadBookshelves(customer.id);
      }
    })();
  }, [customer]);

  // Data from json

  return (
    <Fragment>
      {/* <div className=" absolute mt-32 h-[2px] left-0 top-36 right-0 w-full bg-[#7CC9B5] rounded mb-5"></div>
        <div className=" absolute  mt-32 h-[2px] left-0 top-[200px] right-0 w-full bg-[#7CC9B5] rounded mb-5"></div> */}
      {/* <div className=" absolute  mt-32 h-[2px] left-0 top-[900px] right-0 w-full bg-[#7CC9B5] rounded mb-5"></div> */}
      {/* <div className=" absolute  mt-32 h-[2px] left-0 xl:top-[820px] md:top-[825px] right-0 w-full bg-[#7CC9B5] rounded mb-5"></div> */}
      <div className="px-5 md:px-20  ">
        <div className="  justify-start pt-10 ">
          <div className="  ">
            <h3 className=" text-[#015464] text-3xl font-graphikBold">
              My Library
            </h3>
          </div>
          <div className=" w-25 mt-8 border-y-2 border-[#7cc9b5] ">
            <button className=" mt-4 mb-3 ml-3  text-[#015464] text-sm font-graphikBold transition hover:border-[#015464] duration-150 border-b-8 border-[#015464] ">
              Current Reading
            </button>
          </div>
        </div>
        {/* <Image
            className=" hidden lg:block absolute  z-[-3110] bottom-36 right-0 w-28 "
            src={Lefe}
            alt=""
          /> */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-5   justify-start mt-12 mb-20 ">
          {bookReadings.length > 0
            ? bookReadings.map((b_r, index) => {
                if (b_r.product != null) {
                  return (
                    <div key={index}>
                      <Image
                        className=" rounded-2xl w-full object-cover object-center mb-4 md:min-h-[320px] md:max-h-[320px] min-h-[220px] max-h-[220px] overflow-hidden mb-4"
                        src={b_r?.product?.thumbnail}
                        alt="content"
                        width="100"
                        height="100"
                      />
                      <h2 className="text-[16px] text-[#1A6270] font-bold mb-2 max-h-[50px] overflow-hidden h-full">
                        {b_r?.product?.title}
                      </h2>
                      <div className="flex flex-wrap mb-2 items-center">
                        <StarRating
                          rating={b_r?.product?.metadata?.review_count || 0}
                        />
                        <p className="tracking-widest text-[#280c0c] text-xs  ms-1">
                          {" "}
                          ({b_r?.product?.metadata?.review_count || 0}){" "}
                        </p>
                      </div>
                      <p className="text-[12px] tracking-widest text-[#1A6270] text-xs mb-2">
                        by {b_r?.product?.metadata?.author?.name || ""}
                      </p>
                      <p className=" text-[#015464] text-sm opacity-60 mb-2">
                        Read {b_r?.percentage}%
                      </p>
                      <div className=" flex mb-3">
                        <div
                          className="bg-[#408080] py-1 h-3"
                          style={{
                            width: `${
                              b_r?.percentage ? b_r?.percentage : "0"
                            }%`,
                          }}
                        ></div>
                        <div
                          className="bg-[#7CC9B5] py-1 h-3"
                          style={{
                            width: `${
                              100 - (b_r?.percentage ? b_r?.percentage : 0)
                            }%`,
                          }}
                        ></div>
                      </div>
                      <a href={`/epub?id=${b_r?.product?.id}`}>
                        <button className=" bg-[#015464] text-white items-center py-2 px-5 rounded-xl w-full font-bold text-[15px]">
                          Continue Reading
                        </button>
                      </a>
                    </div>
                  );
                }
              })
            : null}
        </div>
        {/*<div className="grid grid-cols-2 max-w-6xl md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-3   justify-start mt-12 mb-20 ">
            <div>
              <Image
                className=" rounded w-56 object-cover object-center mb-4"
                src={TrendingReads1}
                alt="content"
              />
              <h2 className="text-[16px] text-[#1A6270] font-bold mb-2">
                King of Battle and Blood
              </h2>
              <div className="flex flex-wrap mb-2">
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-300 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="tracking-widest text-[#280c0c] text-xs  ">
                  {" "}
                  (27){" "}
                </p>
              </div>
              <p className="text-[12px] tracking-widest text-[#1A6270] text-xs mb-2">
                by Scarlett St.Clair
              </p>
              <p className=" text-[#015464] text-sm opacity-60 mb-2">
                Read 47%
              </p>
              <div className=" flex mb-3">
                <div className=" bg-[#408080] p-1 h-2 w-52"></div>
                <div className=" bg-[#7CC9B5] p-1 h-2 w-32"></div>
              </div>
              <button className=" bg-[#015464] text-white items-center p-2 px-[38px] rounded-xl">
                Continue Reading
              </button>
            </div>

            <div>
              <Image
                className=" rounded w-56 object-cover object-center mb-4"
                src={TrendingReads1}
                alt="content"
              />
              <h2 className="text-[16px] text-[#1A6270] font-bold mb-2">
                King of Battle and Blood
              </h2>
              <div className="flex flex-wrap mb-2">
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-300 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="tracking-widest text-[#280c0c] text-xs  ">
                  {" "}
                  (27){" "}
                </p>
              </div>
              <p className="text-[12px] tracking-widest text-[#1A6270] text-xs mb-2">
                by Scarlett St.Clair
              </p>
              <p className=" text-[#015464] text-sm opacity-60 mb-2">
                Read 47%
              </p>
              <div className=" flex mb-3">
                <div className=" bg-[#408080] p-1 h-2 w-52"></div>
                <div className=" bg-[#7CC9B5] p-1 h-2 w-32"></div>
              </div>
              <button className=" bg-[#015464] text-white items-center p-2 px-[38px] rounded-xl">
                Continue Reading
              </button>
            </div>

            <div>
              <Image
                className=" rounded w-56 object-cover object-center mb-4"
                src={TrendingReads1}
                alt="content"
              />
              <h2 className="text-[16px] text-[#1A6270] font-bold mb-2">
                King of Battle and Blood
              </h2>
              <div className="flex flex-wrap mb-2">
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-300 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="tracking-widest text-[#280c0c] text-xs  ">
                  {" "}
                  (27){" "}
                </p>
              </div>
              <p className="text-[12px] tracking-widest text-[#1A6270] text-xs mb-2">
                by Scarlett St.Clair
              </p>
              <p className=" text-[#015464] text-sm opacity-60 mb-2">
                Read 47%
              </p>
              <div className=" flex mb-3">
                <div className=" bg-[#408080] p-1 h-2 w-52"></div>
                <div className=" bg-[#7CC9B5] p-1 h-2 w-32"></div>
              </div>
              <button className=" bg-[#015464] text-white items-center p-2 px-[38px] rounded-xl">
                Continue Reading
              </button>
            </div>

            <div>
              <Image
                className=" rounded w-56 object-cover object-center mb-4"
                src={TrendingReads1}
                alt="content"
              />
              <h2 className="text-[16px] text-[#1A6270] font-bold mb-2">
                King of Battle and Blood
              </h2>
              <div className="flex flex-wrap mb-2">
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-300 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="tracking-widest text-[#280c0c] text-xs  ">
                  {" "}
                  (27){" "}
                </p>
              </div>
              <p className="text-[12px] tracking-widest text-[#1A6270] text-xs mb-2">
                by Scarlett St.Clair
              </p>
              <p className=" text-[#015464] text-sm opacity-60 mb-2">
                Read 47%
              </p>
              <div className=" flex mb-3">
                <div className=" bg-[#408080] p-1 h-2 w-52"></div>
                <div className=" bg-[#7CC9B5] p-1 h-2 w-32"></div>
              </div>
              <button className=" bg-[#015464] text-white items-center p-2 px-[38px] rounded-xl">
                Continue Reading
              </button>
            </div>

            <div>
              <Image
                className=" rounded w-56 object-cover object-center mb-4"
                src={TrendingReads1}
                alt="content"
              />
              <h2 className="text-[16px] text-[#1A6270] font-bold mb-2">
                King of Battle and Blood
              </h2>
              <div className="flex flex-wrap mb-2">
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-300 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="tracking-widest text-[#280c0c] text-xs  ">
                  {" "}
                  (27){" "}
                </p>
              </div>
              <p className="text-[12px] tracking-widest text-[#1A6270] text-xs mb-2">
                by Scarlett St.Clair
              </p>
              <p className=" text-[#015464] text-sm opacity-60 mb-2">
                Read 47%
              </p>
              <div className=" flex mb-3">
                <div className=" bg-[#408080] p-1 h-2 w-52"></div>
                <div className=" bg-[#7CC9B5] p-1 h-2 w-32"></div>
              </div>
              <button className=" bg-[#015464] text-white items-center p-2 px-[38px] rounded-xl">
                Continue Reading
              </button>
            </div>

            
            
          </div>*/}

        <div className="">
          <div className=" flex text-center gap-4 border-y-2 border-[#7cc9b5]">
            <button
              className={` mt-4 mb-3 ml-3 text-[#015464] font-graphikBold transition duration-150 border-b-8 hover:border-[#015464] border-${
                isMyWishlist ? "[#015464]" : "transparent"
              }`}
              onClick={enableWishView}
            >
              My Wishlist
            </button>
            <button
              className={`mt-4 mb-3 ml-3 text-[#015464] font-graphikBold transition duration-150 border-b-8 hover:border-[#015464] border-${
                !isMyWishlist ? "[#015464]" : "transparent"
              }`}
              onClick={enableBookView}
            >
              My Bookshelves
            </button>

            <div className="sm:flex pt- sm:space-x-3 top-[20px]  mx-auto justify-end mb-8"></div>

            <div ref={dropdownRef}>
              {/* <button
                  type="button"
                  onClick={handleSortToggle}
                  className="flex items-center mt-4 mb-3 ml-3 justify-between w-80 sm:w-52 px-4 py-2 bg-[#EEF2F6] text-white rounded-lg hover:bg-[#EEF2F6]/90 focus:outline-none space-x-2 flex-row mb-2"
                >
                  <span className="p-1 text-[#015464] text-sm ">
                    Short By: Date Added
                  </span>
                  <Image
                    src={dropdown}
                    alt="Dropdown"
                    className="w-3 h-3"
                    width={3}
                    height={3}
                  />
                </button> */}
              {isSortOpen && (
                <ul className="absolute mt-1 mr-96 z-50 py-2 w-48 bg-[#EEF2F6] border border-gray-200 shadow-lg rounded-md flex flex-col">
                  <button className=" text-[#015464] text-sm my-3 ">
                    01-05-2023{" "}
                  </button>
                  <button className=" text-[#015464] text-sm my-3 ">
                    10-05-2023{" "}
                  </button>{" "}
                  <button className=" text-[#015464] text-sm my-3 ">
                    12-08-2023{" "}
                  </button>{" "}
                  <button className=" text-[#015464] text-sm my-3 ">
                    Last 10 Days{" "}
                  </button>{" "}
                  <button className=" text-[#015464] text-sm my-3 ">
                    Show All{" "}
                  </button>
                </ul>
              )}
            </div>

            <button onClick={enableGridView}>
              <Image
                src={isGridView ? gridEnabled : gridDisabled}
                alt="gridEnabled"
                className="px-2 w-10"
                width={10}
                height={10}
              />
            </button>
            <button onClick={enableListView}>
              <Image
                src={!isGridView ? listEnabled : listDisabled}
                alt="listdisabled"
                className="px-2 w-9 items-center"
                width={9}
                height={10}
              />
            </button>
          </div>
        </div>
      </div>
      {isMyWishlist ? (
        <div className=" mt-16 px-5 md:px-20">
          <MyWishlist view={isGridView}></MyWishlist>
        </div>
      ) : (
        <div className="  mt-4">
          <div className="columns-1 text-right">
            <button
              className="bg-[#015464] mr-3 md:mr-20 p-3 px-5 text-white rounded-xl items-center justify-center"
              onClick={open}
              style={{
                fontSize : "16px"
              }}
            >
              <span style={{
                fontSize : "20px"
              }}>+</span> Add New
            </button>
            {/*{ 
               (!bookshelf_detail)
                ? <button
                    className=" bg-[#015464] mr-20 p-3 px-5 text-white rounded-xl items-center justify-center"
                    onClick={open}
                  >
                    + Add New
                  </button>
                : null
             }*/}

            <Modal isOpen={state} close={handleClose}>
              <Modal.Title>
                <h2 className="text-xl font-bold">Bookshelf</h2>
              </Modal.Title>
              <Modal.Body>
                <BookShelfAccountComponent
                  loadBookshelves={() => loadBookshelves(customer?.id)}
                />
                {/*<BookShelfComponent product={props.product}></BookShelfComponent>*/}
              </Modal.Body>
            </Modal>
          </div>
          <BookshelvesGrid
            bookshelves={bookshelves}
            bookshelfDetail={bookshelf_detail}
            bookshelfDetailHandle={setBookshelfDetail}
            view={isGridView}
            loadBookshelves={() => loadBookshelves(customer?.id)}
          />

          {/* <Image
              className=" hidden lg:block absolute  top-[1150px] -ml-28 w-24 "
              src={Lefe}
              alt=""
            /> */}
          {/*<div className="ml-10 mt-10 w-44">
              <Image
                className=" rounded w-48 object-cover object-center mb-4"
                src={Add}
                alt="content"
              />
              <h1 className="font-graphik text-[#015464] my-2 text-center ">
                {" "}
                Motivational{" "}
              </h1>

              <button
                className=" bg-[#015464] ml-7 p-3 px-5 text-white rounded-xl items-center justify-center "
                onClick={() => setShowModal(true)}
              >
                + Add New
              </button>
            </div>*/}
        </div>
      )}
      {/*<AddPage isVisivle={showModal} onClose={() => setShowModal(false)} />*/}
    </Fragment>
  );
};

export default MyLibraryTemplate;
