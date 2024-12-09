'use client'
import React from 'react';
import Image from 'next/image';
import pdf from '@public/images/Flipbook/pdf.png'
import LefeBg from "@public/images/lefe1.png";
import Leaf1 from '@public/images/LandingPage/Leaf1.png'

const BookViewAlert = (props) => {
    const handleChange = (state) => {
        props.setSubsActive(true)
        props.setFullAccess(state)   
        console.log("comes")
      };
    return (
        <div className="rounded-xl readbook text-center px-2  lg:text-left" style={{ height: "90vh", overflow: "hidden" }}>
     
            <div className="flex flex-row my-36">

                <div className="mx-10  min-w-[350px]">
                    <div className="bg-[#015464] p-6 rounded-2xl shadow-md m-auto mt-12">
                        <div className="flex flex-col items-center py-10">
                            <div className="-mt-20 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500 text-white">
                                <Image src={pdf}  alt=''/>
                            </div>
                            <span className="my-10  text-center font-medium capitalize font-graphikBold text-white text-4xl">Read sample.</span>
                                <button
                                onClick={() => handleChange(false)}
                                className="w-full sm:w-50 items-center rounded-full bg-[white]  text-[#015464] font-graphikBold  p-2 text-center   "
                            >
                              Continue
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mx-10  min-w-[350px]">
                    <div className="bg-[#015464] p-6 rounded-2xl shadow-md m-auto mt-12">
                        <div className="flex flex-col items-center py-10">
                            <div className="-mt-20 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500 text-white">
                                <Image src={pdf}  alt=''/>
                            </div>
                            <span className="my-10  text-center font-medium capitalize font-graphikBold text-white text-4xl">Read full book.</span>
                            <button
                                onClick={() => handleChange(true)}
                                className="w-full sm:w-50 items-center rounded-full bg-[white]  text-[#015464] font-graphikBold  p-2 text-center   "
                            >
                                Continue 
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        <div className='lg:w-full 2xl:w-[85%] w-full px-4'>
            <input id="default-range" type="range" value="5" className="2xl:w-full  w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
            <label for="default-range" className="block mb-2 text-xs text-right font-medium  text-white">100</label>
        </div>      
        </div>



    );
};

export default BookViewAlert;
