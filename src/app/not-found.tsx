import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Leaf from "../../public/images/LandingPage/Leaf1.png";
import Aboutbg from "../../public/images/aboutbg.png";
import Lefe from "../../public/images/lefe1.png";
import img from "../../public/images/404img.png";
import img1 from "../../public/images/404.png";
import Footer from "@modules/layout/templates/footer";
import Nav from "@modules/layout/templates/nav";
export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <section className="mt-10">
        <Image
          className=" absolute h-[800px] w-full top-[-83px]"
          alt="image"
          src={Aboutbg}
        />
        <Image className=" absolute z-0 top-20 w-16 " src={Leaf} alt="" />
        <div className="container flex justify-center items-center  ">
          <div className="relative md:ml-36 ">
            <Image
              className=" mt-5 max-w-md  w-[260px] max-w-full"
              src={img1}
              alt="image"
            />
            <h1 className=" text-[#015464] text-6xl font-extrabold pt-59">
              Oooops!
            </h1>
            <h3 className=" ml-3  w-[260px] font-semibold text-lg">
              We can't seem to find a page you are looking for oops
            </h3>
            <div>
              <Link href="/">
                <button className=" bg-[#7CC9B5] text-white ml-3 rounded-md p-4 mt-5">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
          <Image
            className=" relative  md:w-[50%] lg:w-[20%] ml-36 hidden md:block"
            src={img}
            alt="img1-img"
          />
          <Image
            className=" hidden lg:block absolute top-28 z-0 bottom-36 right-0 w-28 "
            src={Lefe}
            alt=""
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
