// @ts-nocheck
"use client";
import OrderOverview from "../components/order-overview";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import bgimg from "../../../../public/images/bg1.png";
// import Bookcover from 'public/assets/bookcover.png'
import Book from "../../../../public/images/book.png";
import DropdownIcon from "@modules/common/icons/dropdownicon.svg";
import Lefe from "../../../../public/images/lefe1.png";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

const OrdersTemplate = () => {
  var d = new Date(); // today!
  const paramsObject = useSearchParams();
  const pathname = usePathname();
  // const router = useRouter();
  const [filterDate, setFilterDate] = useState(
    // new Date(d.setDate(d.getDate() - 10)).toISOString().split("T")[0]
    ''
  );

  const fromDate:string = paramsObject.get("from") || '';

  const filterOptions = [5,10,15];

  const handleSetDate = (days) => {
    
    window.location.href = `${pathname}?page=1&from=${days == '' ? '' : getDate(days)}`;
    // if(days == ''){
    //   setFilterDate('');
    // }else{
    //   let d2 = new Date(); // today!
    //   setFilterDate(
    //     new Date(d2.setDate(d2.getDate() - days)).toISOString().split("T")[0]
    //   );
    // }
  };

  const getDate = function(days){
    let d2 = new Date();
    return new Date(d2.setDate(d2.getDate() - days)).toISOString().split("T")[0];
  }

  return (
    <div className="w-full">
      <Image
        className="  absolute ml-72 right-0 w-5/6 z-[-1]"
        src={bgimg}
        alt="bgimg"
      />
      {/* <Image className=" hidden lg:block absolute mt-10 right-0 w-28 " src={Lefe} alt="" /> */}
      <div className="px-10  justify-center items-center   ">
        <div className=" pt-10 pb-8">
          <div className="">
            <h3 className=" text-[#015464] text-3xl font-graphikBold mt-12">
              Purchase History
            </h3>

            <select
              onChange={(event) => handleSetDate(event.target.value)}
              className=" right-[340px] mt-4 top-36 py-2 w-52 bg-[#EEF2F6] text-[#015464] border border-gray-200 pl-7 border-none rounded-md  px-4 py-2  "
            >
              <option value={''}>All</option>
              {filterOptions.map((option, i) => (
                <option key={i} value={option} selected={fromDate == getDate(option) ? true : false}> Last {option} Days </option>
              ))}
            </select>
          </div>
        </div>

        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right">
                <thead class="text-xs text-gray-700">
                    {/*<tr class="border border-y-[#7cc9b5] border-x-[transparent]">
                        <th scope="col" class="px-6 py-3 text-[#015464] font-extrabold text-opacity-80 whitespace-nowrap">
                            Book Cover
                        </th>
                        <th scope="col" class="px-6 py-3 text-[#015464] font-extrabold text-opacity-80">
                            Title
                        </th>
                        <th scope="col" class="px-6 py-3 text-[#015464] font-extrabold text-opacity-80">
                            Author
                        </th>
                        <th scope="col" class="px-6 py-3 text-[#015464] font-extrabold text-opacity-80">
                            Type
                        </th>
                        <th scope="col" class="px-6 py-3 text-[#015464] font-extrabold text-opacity-80 whitespace-nowrap">
                            Data Purchased
                        </th>
                        <th scope="col" class="px-6 py-3 text-[#015464] font-extrabold text-opacity-80">
                            Download
                        </th>
                        <th scope="col" class="px-6 py-3 text-[#015464] font-extrabold text-opacity-80">
                            status
                        </th>
                    </tr>*/}
                    <tr class="border border-y-[#7cc9b5] border-x-[transparent]">
                        <th scope="col" class="px-6 py-3 text-[#015464] font-extrabold text-opacity-80 whitespace-nowrap">
                            Order ID
                        </th>
                        {/*<th scope="col" class="px-6 py-3 text-[#015464] font-extrabold text-opacity-80">
                            Title
                        </th>
                        <th scope="col" class="px-6 py-3 text-[#015464] font-extrabold text-opacity-80">
                            Author
                        </th>
                        <th scope="col" class="px-6 py-3 text-[#015464] font-extrabold text-opacity-80">
                            Type
                        </th>*/}
                        <th scope="col" class="px-6 py-3 text-[#015464] font-extrabold text-opacity-80 whitespace-nowrap">
                            Data Purchased
                        </th>
                        {/*<th scope="col" class="px-6 py-3 text-[#015464] font-extrabold text-opacity-80">
                            Download
                        </th>*/}
                        <th scope="col" class="px-6 py-3 text-[#015464] font-extrabold text-opacity-80">
                            status
                        </th>
                        <th scope="col" class="px-6 py-3 text-[#015464] font-extrabold text-opacity-80">
                            Items Count
                        </th>
                        <th scope="col" class="px-6 py-3 text-[#015464] font-extrabold text-opacity-80">
                            Total
                        </th>
                        <th scope="col" class="px-6 py-3 text-[#015464] font-extrabold text-opacity-80 whitespace-nowrap">
                            Details
                        </th>
                    </tr>
                </thead>
                <tbody>
                  <OrderOverview filterDate={filterDate} />
                    {/*<tr class="">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">
                            1
                        </td>
                        <td class="px-6 py-4">
                            $2999
                        </td>
                    </tr>*/}
                </tbody>
            </table>
        </div>


        {/*<div class="relative overflow-x-auto">
          <div className="justify-center items-center bg-white-500 ">
            <div className="mt-3 w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="auto"
                height="1"
                viewBox="0 0 1437 1"
              >
                <line
                  id="Line_71"
                  data-name="Line 71"
                  x2="1437"
                  transform="translate(0 0.5)"
                  fill="none"
                  stroke="#7cc9b5"
                  stroke-width="1"
                />
              </svg>
            </div>

            <div className="grid grid-cols-7 grid-rows-1 gap-3 justify-center items-center mt-4 px-20">
              <div className=" text-[#015464] font-extrabold text-opacity-80">
                Book Cover
              </div>
              <div className=" text-[#015464] font-extrabold text-opacity-80">
                Title
              </div>
              <div className=" text-[#015464] font-extrabold text-opacity-80">
                Author
              </div>
              <div className=" text-[#015464] font-extrabold text-opacity-80">
                Type
              </div>
              <div className=" text-[#015464] font-extrabold text-opacity-80">
                Data Purchased
              </div>
              <div className=" text-[#015464] font-extrabold text-opacity-80">
                Download
              </div>
              <div className=" text-[#015464] font-extrabold text-opacity-80">
                status
              </div>
            </div>

            <div className="mt-3 w-fit ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="auto"
                height="1"
                viewBox="0 0 1437 1"
              >
                <line
                  id="Line_71"
                  data-name="Line 71"
                  x2="1437"
                  transform="translate(0 0.5)"
                  fill="none"
                  stroke="#7cc9b5"
                  stroke-width="1"
                />
              </svg>
            </div>
            <OrderOverview filterDate={filterDate} />
          </div>
        </div>*/}
      </div>

      {/* <OrderOverview /> */}
    </div>
  );
};

export default OrdersTemplate;
