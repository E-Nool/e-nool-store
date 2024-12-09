import React from "react";
import Link from "next/link";
import Image from "next/image";
import gettingstarted from "../../../../../public/images/LandingPage/gettingstarted2.png";
import processflow from "../../../../../public/images/LandingPage/processflow.svg";

const ProcessFlow = () => {
  return (
    <section className="w-full    font-graphik  process_bg">
      {/* bg-[#015464] process_bg */}
      {/* <Image className=" hidden lg:block absolute z-0 left-2 w-16 h-auto mt-28 rotate-180 transform -scale-x-100 " src={Leaf1} alt="" />
            <Image className=" hidden lg:block absolute z-0  right-1 md:w-28 mt-28" src={Leaf2} alt="" /> */}
      <div className="hidden sm:block">
        <h1 className="font-graphikBold text-[#F1F1F6] text-3xl text-center pt-10 mb-10">
          Our Simple Process
        </h1>

        {/*<Image
          className="object-cover object-center rounded m-auto"
          alt="processflow"
          src={processflow}
          width={700}
        />*/}
        <section className="our-simple-process">
          <div className="grid grid-cols-3 mb-4 max-w-[800px] w-full mx-auto">
            <span className="block text-white flex justify-center font-bold">1</span>
            <span className="block text-white flex justify-center font-bold">2</span>
            <span className="block text-white flex justify-center font-bold">3</span>
          </div>
          <div className="grid grid-cols-3 mb-4 max-w-[800px] w-full mx-auto">
            <div className="flex items-center">
                <div className="h-[2px] w-full bg-transparent"></div>
              <div className="h-[18px] w-[18px] rounded-full bg-white shrink-0 border-[1px] border-[#707070]"></div>
                <div className="h-[2px] w-full bg-white"></div>
            </div>
            <div className="flex items-center">
                <div className="h-[2px] w-full bg-white"></div>
              <div className="h-[18px] w-[18px] rounded-full bg-white shrink-0 border-[1px] border-[#707070]"></div>
                <div className="h-[2px] w-full bg-white"></div>
            </div>
            <div className="flex items-center">
                <div className="h-[2px] w-full bg-white"></div>
              <div className="h-[18px] w-[18px] rounded-full bg-white shrink-0 border-[1px] border-[#707070]"></div>
                <div className="h-[2px] w-full bg-transparent"></div>
            </div>
          </div>
          <div className="grid grid-cols-3 max-w-[800px] w-full mx-auto">
            <div className="flex text-white flex-col">
              <h3 className="text-center text-[15px] mb-3 font-black">Complete the Signup</h3>
              <p className="text-center text-[12px]">பதிவு செய்யவும்.</p>
            </div>
            <div className="flex text-white flex-col">
              <h3 className="text-center text-[15px] mb-3 font-black">Chose Your Plan</h3>
              <p className="text-center text-[12px]">திட்டத்தை தேர்வு செய்யவும்.</p>
            </div>
            <div className="flex text-white flex-col">
              <h3 className="text-center text-[15px] mb-3 font-black">Enjoy Your Reading!</h3>
              <p className="text-center text-[12px]">வாசித்து அனுபவிக்கவும்.</p>
            </div>
          </div>
        </section>

      </div>
      <div className=" "></div>

      <div className="z-10 mx-auto  justify-between items-center sm:px-16  py-4 ml-15 ">
        <div className="md:container md:mx-auto flex pt-20 md:flex-row flex-col items-center  ">
          <div className="  lg:w-full md:w-1/2 w-5/6 lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start xl:ml-72 2xl:ml-80  md:text-left text-center  ">
            <h1 className="sm:text-4xl text-xl md:mt-5  text-[#F1F1F6] font-graphikBold">
              Ready to start Reading! <br /> Subscribe Now
            </h1>
            {/*<p className="sm:text-base text-sm text-white mt-8 ">
              Ready to start Reading! Subscribe Now
            </p>*/}

            <div className="flex justify-center  pt-10">
              <Link href="/subscription">
                <button className="inline-flex text-white bg-[#7CC9B5] border-0 py-2 px-10 focus:outline-none  rounded-[23px] text-lg">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="flex justify-center mt-28"></div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:items-center 2xl:mr-28 ">
            <Image
              className="object-cover object-center rounded"
              alt="processflow"
              src={gettingstarted}
              width={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
