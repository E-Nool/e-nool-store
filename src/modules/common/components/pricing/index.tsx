'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import pricing1 from "../../../../../public/images/LandingPage/pricing1.png";
import plan_image_1 from "../../../../../public/images/LandingPage/plan-img-1.jpg";
import plan_image_2 from "../../../../../public/images/LandingPage/plan-img-2.jpg";
import arrow from "../../../../../public/images/LandingPage/arrow.png";
import plan1 from "../../../../../public/images/LandingPage/plan1.png";
import plan2 from "../../../../../public/images/LandingPage/plan2.png";
export default function Pricing() {
  const currentyCode = window.localStorage.getItem("currentyCode");
  const currency_code = currentyCode || 'inr';
  const code = currency_code === 'inr' ? '₹' : '$';
  return (
    <section className=" w-full  mt-15 md:mb-30  lg:mb-96 sm:pb-0 container mx-auto  ">
      <Image
        className=" hidden md:block absolute  left-10 mt-20 2xl:w-56 w-44 "
        src={plan1}
        alt=""
      />
      <Image
        className=" hidden md:block absolute z-0  2xl:w-36 w-20 right-0 mt-20 "
        src={plan2}
        alt=""
      />
      <div className="max-w-md mx-auto  pt-10  text-center">
        <h1 className="text-4xl  mb-6 lg:text-4xl text-[#015464] font-graphikBold">
          Choose Your Plan
        </h1>
        <p className="px-5 pb-2 text-sm text-[#015464] font-graphik">
          You can select a plan that is more convenient and comfortable to you.
        </p>
      </div>
      <div className="  relative z-10 mx-auto flex  sm:px-16">
        <div className="  md-px-24 container  mx-auto ">
          <div className="grid grid-cols-1   md:grid-cols-1  lg:grid-cols-3 font-nunito ">
            {/* Card 1 */}
            <div className="w-80 h-auto lg:w-72 lg:h-72  lg:pt-14  m-auto lg:mt-16  max-w-sm -top-10">
              <Image
                src={plan_image_1}
                alt=""
                className=" rounded-t-2xl shadow-2xl lg:w-full 2xl:w-72 2xl:h-80 object-cover bg-white"
              />
              <div className="bg-white shadow-2xl rounded-b-3xl pb-6 justify-center">
                <div className="w-5/6 m-auto ">
                  <h2 className="text-center text-[#015464] text-2xl  pt-6">
                    SILVER PLAN
                  </h2>
                  <p className="text-center text-gray-500 pt-5 text-sm font-graphik">
                    Free reading and downloading up to 10/years eBooks (but not
                    exceeding two recently published eBooks per month).
                  </p>

                  <p className="text-center pt-2 text-5xl text-[#015464] font-bold ">
                    <span className="text-2xl mt-2 ">{code}</span>
                    {code == '$' ? '0.99' : '50'}
                  </p>

                  <p className="text-center text-[#0E80AC] pt-1 text-sm">
                    PER MONTH
                  </p>
                  <Link href="/subscription">
                    <button className="lg:text-sm  text-lg  relative -bottom-14  lg:hidden  left-1/2 transform -translate-x-1/2    text-white rounded-xl">
                      <Image src={arrow} alt="" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className=" w-80 h-auto lg:w-72 lg:h-72 mt-20  mx-auto lg:mt-16 max-w-sm ">
              <Image
                src={pricing1}
                alt=""
                className=" rounded-t-2xl shadow-2xl lg:w-full 2xl:w-80 2xl:h-80 object-cover bg-white"
              />
              <div className="bg-white shadow-2xl rounded-b-3xl  justify-center">
                <div className="w-5/6 m-auto">
                  <h2 className="text-center text-[#015464] text-2xl  pt-5">
                    GOLD PLAN
                  </h2>
                  <p className="text-center text-gray-500 pt-5 text-sm">
                    Free reading and downloading up to 10/years eBooks (but not
                    exceeding Five recently published eBooks per month). 10%
                    discount on every purchase of eBooks.
                  </p>
                  {/*<p className="text-center text-gray-500 text-sm"> 
                                  10% discount on every purchase of eBooks.
                                  </p>*/}
                  <p className="text-center pt-2 text-5xl text-[#015464] font-bold">
                    {" "}
                    <span className="text-2xl mt-2 ">{code}</span>
                    {code == '$' ? '1.99' : '100'}
                  </p>
                  <p className="text-center text-[#0E80AC] pt-1 text-sm">
                    PER MONTH
                  </p>
                  <Link href="/subscription">
                    <button className="lg:text-sm  text-lg  relative -bottom-10 left-1/2 transform -translate-x-1/2  px-4  text-white rounded-xl">
                      <Image src={arrow} alt="" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-80 h-auto lg:w-72 lg:h-72 mt-20 lg:py-14  m-auto lg:mt-16 max-w-sm">
              <Image
                src={plan_image_2}
                alt=""
                className=" rounded-t-2xl shadow-2xl lg:w-full 2xl:w-72 2xl:h-80 object-cover bg-white"
              />
              <div className="bg-white shadow-2xl rounded-b-3xl pb-6 justify-center">
                <div className="w-5/6 m-auto">
                  <h2 className="text-center text-[#015464] text-2xl  pt-6">
                    PLATINUM PLAN
                  </h2>
                  <p className="text-center text-gray-500 pt-5 text-sm">
                    Free reading and downloading of unlimited eBooks.
                  </p>
                  <p className="text-center text-gray-500 text-sm">
                    25% discount on every purchase of eBooks.
                  </p>
                  <p className="text-center pt-5 text-5xl text-[#015464] font-bold">
                    {" "}
                    <span className="text-2xl mt-2 ">{code}</span>
                    {code == '$' ? '2.99' : '150'}
                  </p>
                  <p className="text-center text-[#0E80AC] pt-1 text-sm">
                    PER MONTH
                  </p>
                  <Link href="/subscription">
                    <button className="lg:text-sm  text-lg  relative -bottom-14  lg:hidden  left-1/2 transform -translate-x-1/2    text-white rounded-xl">
                      <Image src={arrow} alt="" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
