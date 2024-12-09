"use client";
import React, { useState, useEffect, useRef } from "react"
import "swiper/css";
import rs from "@public/images/rs.png";
import tick from "@public/images/tick.png";
import Image from "next/image";
import "swiper/css/navigation";

const SubItem = (props) => { 
  const monthLimit = parseInt(props.plan.subscription_period)
  const date = new Date();
  date.setMonth(date.getMonth() + monthLimit, monthLimit);
  const month = new Date(date).toLocaleString('en-US', {month: 'long'});
  const year = date.getFullYear();
  const disableCard = props.plan.id === props.cusCurrentPlanID ? true : false;

  const currentyCode = window.localStorage.getItem("currentyCode");
  const currency_code = currentyCode || 'inr';
  const price = currency_code == 'inr' ? (props.plan.price || 0) : (props.plan.usd_price || 0);
  const decimal = currency_code == 'inr' ? 0 : 2;
  const code = currency_code === 'inr' ? '₹' : '$';
  // console.log(props)
  return (
    <div className="h-full container bg-white shadow-xl justify-between items-center rounded-md text-center">
    <div className=" p-10 ">
      <h2 className=" mt-1 text-[#015464] text-2xl font-graphikBold pt-6">
        {props.plan.name}
      </h2>
      <p className="mt-2 text-[14px] text-[#015464] font-bold ">
      {props.plan.description}.
      </p>
      <div className=" flex justify-center items-center mt-5">
        {/*<Image src={rs} className="w-4" alt="rs" color="#14adad" />*/}
        <span style={{color : "#015464", fontSize : 20, fontWeight : 'bold'}}>{code}</span>
        <p className="text-center text-5xl  text-[#7CC9B5] font-graphikBold">
          {(price / monthLimit).toFixed(decimal)}
        </p>
      </div>
      {/*<p className=" mt-3 py-2 px-2 text-center bg-[#d4ede7] text-[#015464] text-xs w-auto rounded-lg ">
        Renews {month} {year} for ₹{(props.plan.price / props.plan.subscription_period).toFixed(0) } /mo (₹ {(props.plan.price / props.plan.subscription_period).toFixed(0) * 12} /year)
      </p>*/}
      <p className=" mt-3 py-2 px-2 text-center bg-[#d4ede7] text-[#015464] text-xs w-auto rounded-lg ">
        Bill every {monthLimit * 30} days for{code} {(price / monthLimit).toFixed(decimal)}/Mon ({code}{((price / monthLimit) * 12).toFixed(decimal)}/Year)
      </p>
      <button
        className={`${disableCard ? 'cursor-not-allowed opacity-50' : ''} bg-[#015464] text-white mt-5 p-2 px-8 rounded-xl`}
        onClick={() => props.ShowModal(props.type,props.plan)}
        disabled={disableCard}
      >
        SUBSCRIBE NOW
      </button>
      <div className=" ml-8 mt-5">
        {props.plan.benefits.split("\n").map((item, index) =>{
          return (
            <div className=" flex gap-5 mt-2 items-start" key={`benefits-${index}`}>
              <Image src={tick} alt="tick" />
              <p className="text-left text-[#015464] font-semibold">{item}</p>
            </div>)
          })}            
      </div>
    </div>   
  </div>
  );
};


export default SubItem