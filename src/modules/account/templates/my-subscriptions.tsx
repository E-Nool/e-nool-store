"use client";
import Image from "next/image";
import React, { Fragment, useState, useEffect, useRef } from "react";
import bgimg from "../../../../public/images/bg1.png";
// import Bookcover from 'public/assets/bookcover.png'
import Lefe from '../../../../public/images/lefe1.png'
import MySubscriptions from "../components/overview/MySubscriptions";
import { useAccount } from "@lib/context/account-context";



const MySubscriptionsTemplate = () => {
  
  const [subsLoaded, setSubsLoaded] = useState(false); // Initial state is 'all'
  const [subscriptions, setSubscriptions] = useState([]); 
  const { customer } = useAccount()

  return (
    <div className="w-full">
    <Image className='container mx-auto absolute ml-72 right-0 w-5/6' src={bgimg} alt='bgimg' />
    <Image className=" hidden lg:block absolute mt-10 right-0 w-28 " src={Lefe} alt="" />
    <div className=" container justify-center items-center mx-auto  relative  ">
      <div className=" ml-10 pt-10 pb-8">
        <div className="">
          <h3 className=" text-[#015464] text-3xl font-graphikBold mt-12">
            Subscriptions
          </h3>
         
          {/* <select  onChange={(event) => handleSetDate(event.target.value)}
            className=" right-[340px] mt-4 top-36 py-2 w-52 bg-[#EEF2F6] text-[#015464] border border-gray-200 pl-7 border-none rounded-md  px-4 py-2  ">
                  <option value={5}> Last 5 Days </option>
                  <option value={10}> Last 10 Days{" "}</option>
                  <option value={15}>  Last 15 Days{" "}</option>
                  <option value={1000}>All</option>
            </select> */}
        </div>
      </div>

      <div className=' container mx-auto justify-center items-center px-10'>
      <div>
        {customer && customer.id &&
                  <MySubscriptions 
                  isLoaded={subsLoaded} 
                  setSubsLoaded={setSubsLoaded} 
                  customer_id={customer?.id} 
                  subscriptions={subscriptions}
                  setSubscriptions={setSubscriptions} />
        }
                  
                </div>
       
      </div>
    </div>


      {/* <OrderOverview /> */}
    </div>
  );
};


export default MySubscriptionsTemplate
