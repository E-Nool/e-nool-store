"use client"
import { Metadata } from "next"


// import Image from 'next/image'
// import React from 'react'
// import Leaf from '../../../../public/images/LandingPage/Leaf1.png'
// import DefaultLayout from "@modules/layout/templates"
// import Aboutbg from '../../../../public/images/aboutbg.png'
// import img1 from '../../../../public/images/img1.png'
// import Ellipse from '../../../../public/images/Ellipse.png'
// import Lefe from '../../../../public/images/lefe1.png'
// import Lefe2 from '../../../../public/images/lefe2.png'
// import Terms from '../../../../public/images/terms.png'
// import Legal from '../../../../public/images/Legal Managementbg.png'
// import Leaf2 from '../../../../public/images/leaf2.png'

// export const metadata: Metadata = {
//   title: "Store",
//   description: "Explore all of our products.",
// }

import Image from "next/image";
import React from "react";
import Aboutbg from "../../../../public/images/aboutbg.png";
import Leaf from "../../../../public/images/LandingPage/Leaf1.png";
import about1 from "../../../../public/images/about1.png";
import LefeBg from "../../../../public/images/lefe1.png";
import object1 from "../../../../public/images/object1.png";
import grp1 from "../../../../public/images/grp1.png";
import grid from "../../../../public/images/grid.png";
import arrow1 from "../../../../public/images/arrow1.png";
import arrow2 from "../../../../public/images/arrow2.png";
import arrow3 from "../../../../public/images/arrow3.png";
import img2 from "../../../../public/images/img2.png";
import img3 from "../../../../public/images/img3.png";
import img4 from "../../../../public/images/img4.png";
import img5 from "../../../../public/images/img5.png";
import img6 from "../../../../public/images/img6.png";

import Maskgroup5 from "../../../../public/images/MaskGroup5.png";
import group from "../../../../public/images/group.png";
import group2 from "../../../../public/images/group2.png";
import group3 from "../../../../public/images/group3.png";
import DefaultLayout from "@modules/layout/templates"
import NewsletterForm from "@modules/common/components/newsletter-form";
import OurTeam from "@modules/common/components/our-team";
import Link from "next/link";

import ChooseUs1 from "../../../../public/images/choose-us-1.png";
import ChooseUs2 from "../../../../public/images/choose-us-2.png";
import ChooseUs3 from "../../../../public/images/choose-us-3.png";


import Journey1 from "../../../../public/images/journey-1.png";
import Journey2 from "../../../../public/images/journey-2.png";
import Journey3 from "../../../../public/images/journey-3.png";

function About() {
  return (
    <DefaultLayout>
      <div className="contanier mx-auto font-graphik ">
        <div className="  leading-6 max-w-screen-2xl mx-auto">
          <div className="mx-auto   mt-10  text-[#015464] md:ml-24 ">
            <nav>
              <ul className="flex m-0 items-center p-0">
                <li className="flex items-center text-left">
                  <Link
                    href="/"
                    title=""
                    className="cursor-pointer text-sm font-normal leading-5 text-[#015464]  hover:text-gray-900"
                  >
                    {" "}
                    Home{" "}
                  </Link>
                </li>

                <li className="flex items-center text-left">
                  <svg
                    className="block h-5 w-5 align-middle text-[#015464] "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
                  </svg>

                  <a
                    href="#"
                    title=""
                    className="cursor-pointer text-sm font-normal leading-5 text-[#015464]  hover:text-gray-900"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* <Image className=' relative h-[600px]' src={Aboutbg} /> */}
        <Image
          className=" hidden lg:block absolute top-28  bottom-36 right-0 w-28 "
          src={LefeBg}
          alt=""
        />
        <Image className="absolute   h-[600px] top-[83px]" src={Aboutbg} alt=""/>
        <Image
          className=" absolute  top-20 w-16 left-0 hidden lg:block "
          src={Leaf}
          alt=""
        />

        <div className="relative  md:container  top-2   md:mx-auto flex   md:px-2 md:flex-row flex-col justify-center items-center">
          <div className="lg:max-w-md lg:w-full  hidden md:block ml-28">
            <Image
              className="object-cover p-10 object-center  "
              src={about1}
              alt=""
            />
          </div>
          <div className="mx-10 lg:flex-grow md:w-1/2 lg:pr-24 mt-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
            <h2 className=" text-[#015464] text-lg mx-auto md:mx-0 top-[240px] left-[965px] w-[143px] h-[16px] font-graphikBold">
              WHO WE ARE
            </h2>
            <h1 className=" text-[#015464] font-extrabold text-4xl mt-6 font-graphikBold">
              About Us
            </h1>
            <div className="h-1 w-64 bg-[#0FBF61]/70 opacity-30 rounded"></div>

            <p className=" text-[#015464] mt-5 text-sm font-medium w-5/4  indent-4 text-justify">
              eNOOL ™ has developed a state-of-the-art e-publishing platform that makes every Tamil book available to national and international readers for easy reading at their desks using laptops or mobiles. It intends to achieve this by digitizing all existing and new Tamil books into e-books.
            </p>
            <p className=" text-[#015464] mt-5 text-sm font-medium w-5/4  indent-4 text-justify">
              From authors, publishers, publishers or literacy companies, we invite and convert their books including literature, novels, manuscripts, and catalogs, into beautiful, keyword-searchable, and easy-to-read e-books at no upfront cost. In addition, we help them create their e-book advertising campaigns and sales and payment processing.
            </p>
            <p className=" text-[#015464] mt-5 text-sm font-medium w-5/4  indent-4 text-justify">
              Our mission is to create a world-class e-book and multimedia product, to help sell authors, publishers, and publishing companies’ e-books, to meet the highest quality for global accessibility, and to provide readers with the best digital reading experience.
            </p>
            {/*<button onClick={() => window.location.href="/browse"} className=" bg-[#7CC9B5] opacity-1 mt-8 p-2 px-5 rounded-3xl text-white ">
              Get Started
            </button>*/}
            <div className="flex justify-center mt-28"></div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:hidden">
            <Image
              className="object-cover object-center  "
              src={about1}
              alt=""
            />
          </div>
        </div>
        <div className="relative  md:container  top-2   md:mx-auto flex   md:px-2 md:flex-row flex-col justify-center items-center ">
          <div className="grid gap-8 md:grid-cols-2 pb-28 lg:gap-1">
            <div className=" lg:pt-5 lg:flex lg:flex-col  px-10 lg:justify-center">
              <h1 className="text-[#015464] font-extrabold text-4xl mt-8 font-graphikBold">
                Our Story
              </h1>
              <div className="h-1 w-64 bg-[#0FBF61]/70 opacity-30 rounded"></div>

              <p className="text-[#015464] mt-10 text-sm font-medium indent-4 text-justify">
                eNOOL ™ ஒரு நவீன மின்-வெளியீட்டு தளத்தை உருவாக்கி, ஒவ்வொரு தமிழ் புத்தகமும் தேசிய மற்றும் சர்வதேச வாசகர்களுக்கு அவர்களின் மேசைகளில் மடிக்கணினி அல்லது மொபைலைப் பயன்படுத்தி எளிதாகப் படிக்கக் கிடைக்க வழிச் செய்கிறது. தற்போதுள்ள மற்றும் புதிய தமிழ் புத்தகங்களை மின்னூல் வடிவில் டிஜிட்டல் மயமாக்கி மின்-புத்தகங்களாக கொண்டு வருவதன் மூலம் இதனை அடைய விரும்புகிறது.
              </p>
              <p className="text-[#015464] mt-10 text-sm font-medium indent-4 text-justify">
                ஆசிரியர்கள், வெளியீட்டாளர்கள், பதிப்பகம் அல்லது கல்வியறிவு நிறுவனத்திடமிருந்து, நாவல்கள், கையெழுத்துப் பிரதிகள், மற்றும் பட்டியல்கள் ஆகியவற்றை உள்ளடக்கிய அவர்களின் புத்தகங்களை அழகாகவும், முக்கிய வார்த்தைகள் மூலம் தேடக்கூடியதாகவும், எளிதாகப் படிக்கக்கூடியதாகவும் மின்-புத்தகங்களாக ஆரம்ப செலவின்றி மாற்றித்தருகிறோம்.
              </p>
              <p className="text-[#015464] mt-10 text-sm font-medium indent-4 text-justify">
                உலகத் தரம் வாய்ந்த மின்-புத்தகம் மற்றும் மல்டிமீடியா தயாரிப்பை உருவாக்குவதும், ஆசிரியர்கள், வெளியீட்டாளர்கள் மற்றும் வெளியீட்டு நிறுவனப் புத்தகங்களை விற்பனைக்கு உதவுவதும்., உலகளாவிய அணுகல்தன்மைக்கான மிக உயர்ந்த தரநிலைகளைப் பூர்த்தி செய்வதும், சிறந்த டிஜிட்டல் வாசிப்பு அனுபவத்தை வழங்குவதுமே எங்கள் நோக்கம்.
              </p>
            </div>
            <div className="flex items-end">
              <div className="overflow-hidden">
                <Image
                  className=" "
                  src={grp1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" text-center md:p-10    bg-[#015464]  py-10 xl:py-20 text-white ">
          <Image
            className=" hidden lg:block absolute    left-0 transform -scale-x-100 "
            src={LefeBg}
            alt=""
          />
          <Image
            className=" hidden lg:block absolute   right-0 w-80 "
            src={object1}
            alt=""
          />
          <h1 className=" font-extrabold text-3xl font-graphikBold ">
            Why choose us / subscribe us?
          </h1>
          <p className=" p-5 text-xs font-light ">Why Publisher for eNOOL?</p>

          <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-10 p-6 md:grid-cols-2 lg:grid-cols-3 px-20">
            <div className="rounded-3xl  border-[#015464] p-3 shadow-lg hover:shadow-xl border flex flex-col items-center justify-center">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Image
                  className="h-20 w-20  m-6 md:items-center mx-auto"
                  src={ChooseUs1}
                  alt="grid-img"
                />
              </div>

              <div className="mt-1 p-2 text-center ">
                <h3 className=" font-graphikBold mt-0 p-2">01. Paperless Publishing</h3>
                <p className="text-xs font-graphik m-2 ">
                  Convert your hard copy into eBook with no down payment.
                </p>
              </div>
            </div>

            <div className="rounded-3xl  border-[#015464] p-3 shadow-lg hover:shadow-xl border flex flex-col items-center justify-center">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Image
                  className="h-20 w-20 m-6 md:items-center mx-auto"
                  src={ChooseUs2}
                  alt="grid-img"
                />
              </div>

              <div className="mt-1 p-2 text-center">
                <h3 className="text-white font-graphikBold mt-0 p-2">
                  02. Digital Marketplace
                </h3>
                <p className="text-xs font-graphik m-2 ">
                  Sell your eBook in www.eNOOL.in
                </p>
              </div>
            </div>
            <div className="rounded-3xl  border-[#015464] p-3 shadow-lg hover:shadow-xl border flex flex-col items-center justify-center">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Image
                  className="h-20 w-20 m-6 md:items-center mx-auto"
                  src={ChooseUs3}
                  alt="grid-img"
                />
              </div>

              <div className="mt-1 p-2 text-center">
                <h3 className="text-white font-graphikBold mt-0 p-2">
                  03. Effortless Earnings
                </h3>
                <p className="text-xs font-graphik m-2 ">
                  Get free promotion and get your sales amount at click away.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5 max-w-screen-xl pt-20">
          <div className="font-medium text-center">
            <h1 className="text-[#015464] font-graphikBold text-2xl">
              Start your Reading Journey Today!
            </h1>
            <p className="text-[#015464] text-sm mt-3">12,000+ Unique Books</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mt-8 text-center">
            <div className="relative">
              <button className="py-8 px-8 rounded-full ">
                <Image className="" src={Journey1} alt="" />
              </button>
              <h5 className="text-[#015464] text-xs ml-2 md:ml-0 p-1 font-semibold">
                Log In & Signup
              </h5>
            </div>
            <Image className="hidden md:block m-auto  h-20" src={img2} alt="" />

            <div className="relative">
              <button className="py-8 px-8 rounded-full ">
                <Image className="" src={Journey2} alt="" />
              </button>
              <h5 className="text-[#015464] text-xs ml-2 md:ml-0 p-1 font-semibold">
                Subscribe
              </h5>
            </div>
            <Image className=" hidden md:block m-auto h-20" src={img3} alt="" />

            <div className="relative">
              <button className="py-8 px-8 rounded-full">
                <Image className="" src={Journey3} alt="" />
              </button>
              <h5 className="text-[#015464] text-xs ml-2 md:ml-0 p-1 font-semibold">
                Browse & Start Reading
              </h5>
            </div>
          </div>
        </div>
        <div className=" text-center md:p-10   relative  mt-20 mb-20 py-20  ">
          <h1 className=" font-extrabold text-3xl font-graphikBold text-[#015464]">
            Our Core Value
          </h1>

          <div className="mx-auto  items-center grid max-w-screen-xl grid-cols-1 gap-10 p-6 md:grid-cols-2  lg:grid-cols-3">
            <div className=" lg:mx-auto rounded-3xl lg:w-72 bg-white p-3 shadow-lg hover:shadow-xl border flex flex-col items-center justify-center">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Image
                  className="h-20 w-20 m-6 md:items-center mx-auto"
                  src={img4}
                  alt="grid-img"
                />
              </div>
              <h3 className="text-[#42495B] font-graphikBold mt-0 p-2 ">
                Our Mission
              </h3>

              <p className="text-xs text-[#42495B] font-graphik m-2 mb-10 text-left">
                Our mission is to convert all hard copy books into eBook’s and make it available to
                all the readers at their click and make their reading more enjoyable way with the device they
                have.
              </p>
            </div>
            <div className=" lg:mx-auto rounded-3xl lg:w-72 bg-white p-3 shadow-lg hover:shadow-xl border flex flex-col items-center justify-center">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Image
                  className="h-20 w-20 m-6 md:items-center mx-auto"
                  src={img6}
                  alt="grid-img"
                />
              </div>

              <div className="mt-1 p-2 text-center">
                <h3 className="text-[#42495B] font-graphikBold mt-0 p-2 text-left">
                  Our Vision
                </h3>
              </div>
              <p className="text-xs text-[#42495B] font-graphik m-2 mb-10 text-left">
                Bring all books at one source and make it available to the readers at no to reasonable
                price.
              </p>
            </div>
            <div className=" lg:mx-auto rounded-3xl lg:w-72 bg-white p-3 shadow-lg hover:shadow-xl border flex flex-col items-center justify-center">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Image
                  className="h-20 w-20 m-6 md:items-center mx-auto"
                  src={img5}
                  alt="grid-img"
                />
              </div>

              <div className="mt-1 p-2 text-center">
                <h3 className="text-[#42495B] text-left font-graphikBold mt-0 p-2">
                  Our Passion
                </h3>
              </div>
              <p className="text-xs text-[#42495B] font-graphik m-2 mb-10 text-left">
                Adopt the new technologies and ensure the pleasure of reading at peoples’
                affordable price.
              </p>
            </div>
          </div>
        </div>

        <OurTeam/>

        <div className="container mx-auto flex px-10 md:px-24 py-5 md:flex-row flex-col items-center max-w-screen-xl">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=" text-[#015464] text-3xl text-center md:text-start font-graphikBold">
              நீங்கள் படிக்கும் போது  <br /> புதிய திறன்களைக் கற்றுக்கொள்ளுங்கள்.
            </h1>
            <p className=" text-[#015464] text-center text-xs md:text-start pt-3">
              Reading is a multifaceted process involving word recognition, <br/> comprehension, fluency, and motivation. 
              <br/> <br/>
              Learning is a process that results in a change in knowledge <br/> or behavior as a result of reading experience.
            </p>
            <div className="flex justify-center  pt-2">
              <Link href="/subscription">
                <button className="inline-flex text-white bg-[#408080] border-0 py-2 px-6 focus:outline-none  rounded text-sm h-10">
                  <span className="my-auto">Subscribe Now</span>{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 ">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={group}
            />
          </div>
        </div>

        <div className="container mx-auto flex px-10 md:px-24 py-5 md:flex-row flex-col-reverse items-center max-w-screen-xl">
          <div className="lg:max-w-sm lg:w-full md:w-[1/2] ">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={group2}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=" text-[#015464] text-3xl text-center md:text-start font-graphikBold">
              வெளியிட்டாளர் ஆகுங்கள்
            </h1>
            <p className=" text-[#015464] text-xs text-center md:text-start pt-3">
              Publishers plays an important role in exposing the social issues
              <br />
              and make people to be aware of it.
            </p>
            <div className="flex justify-center  pt-2">
              <Link href="/publisher">
                <button className="inline-flex text-white bg-[#408080] border-0 py-2 px-6 focus:outline-none  rounded text-sm h-10">
                  <span className="my-auto">Get started</span>{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex px-10 md:px-24 py-5 md:flex-row flex-col items-center max-w-screen-xl">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=" text-[#015464] text-3xl text-center md:text-start font-graphikBold">
              எழுத்தாளராக மாறுங்கள்
            </h1>
            <p className=" text-[#015464] text-xs text-center md:text-start pt-3">
              Authors play an important role in creating a more just and equitable society.
               Through their words, they can bring attention to important social issues, challenge dominant narratives, and inspire change.
            </p>
            <div className="flex justify-center  pt-2">
              <Link href="/author">
                <button className="inline-flex text-white bg-[#408080] border-0 py-2 px-6 focus:outline-none  rounded text-sm h-10">
                  <span className="my-auto">Get started</span>{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-sm lg:w-full md:w-1/2 ">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={group3}
            />
          </div>
        </div>
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center max-w-screen-xl">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="sm:text-center">
              <h2 className="text-3xl font-graphikBold leading-7 text-[#015464] sm:text-4xl xl:text-4xl">
                eNOOL <br className="sm:hidden" />
                by the Numbers
              </h2>
            </div>

            <div className="mx-auto mt-5 grid max-w-screen-lg grid-cols-1 gap-x-8 gap-y-12 text-center sm:text-left md:grid-cols-3">
              <div className="backdrop-blur-lg relative mb-3 rounded-3xl border text-center bg-white/70 px-12 py-10  shadow lg:px-12">
                <p className="relative mt-5 text-gray-600  pb-2">No. of Publisher</p>
                <p className="relative text-5xl font-graphikBold text-[#015464]">
                  300
                </p>
              </div>

              <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-center shadow lg:px-12">
                <p className="relative mt-5 text-gray-600 text-center pb-2">
                  Users
                </p>
                <p className="relative text-5xl font-graphikBold text-[#015464]">
                  70
                </p>
              </div>

              <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-center shadow lg:px-12">
                <p className="relative mt-5 text-gray-600 text-center pb-2">
                  Books
                </p>
                <p className="relative m-0 text-5xl font-graphikBold text-[#015464]">
                  100000
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className=' container justify-center bg-white flex mt-20 mb-48 '>
                    <div className=' mt-40 ml-32 pl-10'>
                        <h1 className=' text-[#015464] text-3xl text-start font-bold'>Becom an Author</h1>
                        <p className=' text-[#015464] text-xs text-start pt-3'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,<br />
                            "There is no one who loves pain itself, who seeks after it and wants</p>
                        <button className=' bg-[#015464] opacity-1 items-start mt-8 p-2 px-5 rounded text-white '>Subsribe Now</button>
                    </div>
                    <div className=' pl-32 ml-10 '>
                        <Image src={group3} alt='group3-img' />
                    </div>
                </div> */}

        <NewsletterForm/>
      </div>
    </DefaultLayout>
  );
}

export default About;

