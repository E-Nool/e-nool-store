//@ts-nocheck
'use client';

import React, { useState,useEffect } from "react"
import Maskgroup5 from "@public/images/MaskGroup5.png";
import Mask1 from "@public/images/mask-1.png";
import Mask2 from "@public/images/mask-2.png";
import Mask3 from "@public/images/mask-3.png";
import Mask4 from "@public/images/mask-4.png";
import Image from "next/image";

const OurTeam = () => {

	return (
		<div className=" relative    mt-5">
      <div className=" m-auto flex flex-col justify-between items-center sm:px-16 py-4 ">
        <div className=" text-center font-medium">
          <h1 className=" text-[#015464] text-2xl font-extrabold">
            Meet our awesome eNOOL Team
          </h1>
          {/*<p className=" text-[#14adad] text-sm mt-4">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..." <br />
            "There is no one who loves pain itself, who seeks after it and
            wants to have it, simply because it is pain..."
          </p>*/}
        </div>
        <div className="mx-auto grid max-w-full justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8  md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col  h-[270px]  rounded-3xl border-white shadow-md my-6 overflow-hidden w-full md:mx-auto px-10 md:py-2">
            <Image className="rounded-3xl w-40 m-auto mt-5" src={Mask1} alt="" />
            <h4 className=" mb-1 text-center font-extrabold text-[#015464]">
              Member
            </h4>
            <p className=" text-sm text-[#14adad] text-center mb-5">
              CEO
            </p>
          </div>
          <div className="flex flex-col  h-[270px]  rounded-3xl border-white shadow-md my-6 overflow-hidden w-full md:mx-auto px-10 md:py-2">
            <Image className="rounded-3xl w-40 m-auto mt-5" src={Mask2} alt="" />
            <h4 className=" mb-1 text-center font-extrabold text-[#015464]">
              Member
            </h4>
            <p className=" text-sm text-[#14adad] text-center mb-5">
              CTO
            </p>
          </div>
          <div className="flex flex-col  h-[270px]  rounded-3xl border-white shadow-md my-6 overflow-hidden w-full md:mx-auto px-10 md:py-2">
            <Image className="rounded-3xl w-40 m-auto mt-5" src={Mask3} alt="" />
            <h4 className=" mb-1 text-center font-extrabold text-[#015464]">
              Member
            </h4>
            <p className=" text-sm text-[#14adad] text-center mb-5">
              Manager
            </p>
          </div>

          <div className="flex flex-col  h-[270px]  rounded-3xl border-white shadow-md my-6 overflow-hidden w-full md:mx-auto px-10 md:py-2">
            <Image className="rounded-3xl w-40 m-auto mt-5" src={Mask4} alt="" />
            <h4 className=" mb-1 text-center font-extrabold text-[#015464]">
              Member
            </h4>
            <p className=" text-sm text-[#14adad] text-center mb-5">
              Developer
            </p>
          </div>
        </div>
      </div>
    </div>
	);
}

export default OurTeam;