import Image from "next/image";
import React from "react";
import Link from "next/link";
import about1 from "../../../../../public/images/LandingPage/about1.png";

const About = () => {
  return (
    <section className="relative w-full">
      <div className=" container mx-auto  justify-between items-center sm:px-16  py-1 ">
        <div className="md:container md:mx-auto flex xl:px-20 pt-10 md:flex-row flex-col items-center">
          <div className="  md:w-3/2 w-5/6 md:items-center  ">
            <Image className=" left-[170px] top-[140px] " src={about1} alt="" />
          </div>
          <div className=" lg:w-3/4 md:w-1/2 lg:flex-grow sm:pl-20 2xl:pr-24 md:mx-10 flex flex-col md:items-start  md:text-left sm:text-center ">
            <div className="md:mt-5 md:text-left text-center">
              <h2 className=" text-[#015464] text-lg font-graphikBold mx-auto md:mx-0 left-[965px]  h-[16px]">
                WHO WE ARE
              </h2>
              <h1 className=" text-[#015464] font-graphikBold text-4xl mt-8">
                About eNOOL 
              </h1>
              <div className="h-1 mx-auto md:mx-[unset] w-64 bg-[#0FBF61]/70 opacity-20 rounded"></div>
              <p className=" text-[#015464] mt-5 text-sm font-medium left-[965px] w-5/4  indent-4 text-justify">
                eNOOL ™ has developed a state-of-the-art e-publishing platform that makes every Tamil book available to national and international readers for easy reading at their desks using laptops or mobiles. It intends to achieve this by digitizing all existing and new Tamil books into e-books.

                       </p>
              {/* <Link href="/about">
                <button className=" bg-[#7CC9B5] opacity-1 mt-8 p-2 px-5 rounded-3xl text-white ">
                  Read More
                </button>
              </Link> */}
              <div className="flex justify-center sm:mt-28"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
