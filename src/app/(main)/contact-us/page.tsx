"use client";
import { Metadata } from "next";
import Image from "next/image";
import React, { useState } from "react";
import Aboutbg from "../../../../public/images/aboutbg.png";
import Leaf from "../../../../public/images/LandingPage/Leaf1.png";
import DefaultLayout from "@modules/layout/templates";

import imgbg from "../../../../public/images/contact-bg.png";
import Lefe from "../../../../public/images/lefe1.png";
import contactimg from "../../../../public/images/contactimg.png";
import leaf2 from "../../../../public/images/leaf2.png";
import sideimg from "../../../../public/images/img1.png";
import circle from "../../../../public/images/Ellipse.png";

import call from "@modules/common/icons/call.png";

import emailicon from "@modules/common/icons/email.png";
import locationicon from "@modules/common/icons/location.png";
import Contact1 from "@modules/common/icons/contact1.png";
import Contact2 from "@modules/common/icons/contact2.png";
import Contact3 from "@modules/common/icons/contact3.png";
import Contact4 from "@modules/common/icons/contact4.png";
import Button from "@modules/common/components/button";
import Spinner from "@modules/common/icons/spinner";
import { addContactMessage } from "@lib/util/products_api";
import check from "@public/images/check.png"
// import styles from './page.module.css'

// export const metadata: Metadata = {
//   title: "Contact us",
//   description: "Contact eNOOL.",
// }
function ContactUs() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    var data = {
      name: event.target.name.value,
      subject: event.target.subject.value,
      email: event.target.email.value,
      country: event.target.country.value,
      phone: event.target.phone.value,
      message: event.target.message.value,
    };
    const reportSubmit = await addContactMessage(data);
    event.target.name.value = "";
    event.target.subject.value = "";
    event.target.email.value = "";
    event.target.message.value = "";
    event.target.country.value = "";
    event.target.phone.value = "";
    setSubmitted(true);
    setSubmitting(false);
    return false;
  };

  return (
    <DefaultLayout>
      <div className=" justify-center items-center">
        <Image className=" relative h-[400px]" alt="images" src={Aboutbg} />
        <Image
          className=" absolute ml-0 top-[100px] w-[45px]"
          src={Leaf}
          alt=""
        />
        <div className=" container flex items-center justify-center text-center top-28 absolute">
          <h1
            className="absolute mt-8 text-[#015464] xl:text-4xl md:text-2xl 
                     font-extrabold font-graphikBold text-center"
          >
            Have Any Questions
          </h1>
          <div className="flex items-center justify-center">
            <Image className="w-9/12 h-9/12 mx-auto" src={imgbg} alt="imgbg" />
          </div>
        </div>
        <Image
          className=" hidden lg:block absolute top-28 z-0 bottom-36 right-0 w-28 "
          src={Lefe}
          alt=""
        />
        <div className=" container  justify-center items-center flex top-10 lg:m-auto lg:w-auto md:m-auto sm:m-auto">
          <Image
            className=" hidden lg:block absolute top-[650px] z-0 bottom-36 -left-28 w-72 "
            alt="images"
            src={sideimg}
          />
          <Image
            className=" hidden lg:block absolute z-0 bottom-36 "
            alt="images"
            src={circle}
          />
          <div
            className="bg-[rgb(1,84,100)] flex relative px-4 py-6 
                    sm:px-12 sm:py-6 
                    md:px-16 md:py-8 
                    lg:px-20 lg:py-10 
                    xl:px-24 xl:py-12 
                    2xl:px-28 2xl:py-14 -mt-[200px] w-full md:w-[auto] rounded-3xl mx-2 md:mx-[unset]"
          >
            {submitted ? (
              <div className="w-full">
                <Image
                    className="mx-auto rounded w-20 object-cover object-center block"
                    src={check}
                    alt="content"
                />
                <p className="text-white text-center mt-5">Thank you for contacting us.</p>
              </div>
            ) : (
              <>
                <div className="mt-[5%]  hidden md:block">
                  <Image className="w-[450px]" src={contactimg} alt="contactimg" />
                </div>
                <form
                  className="w-full md:w-[auto] gap-5 flex-col  flex  mt-[5%]  "
                  onSubmit={handleSubmit}
                >
                  <div className="flex items-center">
                    <Image
                      className="absolute ml-3"
                      src={Contact1}
                      alt="Contact1-img"
                    />
                    <input
                      className={`pl-10 outline-0 p-3 pr-28 text-[12px] rounded-lg w-full md:w-[350px] placeholder-[rgb(1,84,100)]`}
                      type="text"
                      placeholder="Name"
                      name="name"
                      required
                    />
                  </div>
                  <div className=" flex items-center">
                    <Image
                      className=" absolute ml-3"
                      src={Contact2}
                      alt="Contact2-img"
                    />
                    <input
                      className=" pl-10 outline-0 p-3 pr-28 text-[12px] rounded-lg text-[#14adad] w-full md:w-[350px] placeholder-[rgb(1,84,100)]"
                      type="email"
                      placeholder="Email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="flex items-center">
                    <Image
                      className="absolute ml-3"
                      src={Contact1}
                      alt="Contact1-img"
                    />
                    <input
                      className={`pl-10 outline-0 p-3 pr-28 text-[12px] rounded-lg w-full md:w-[350px] placeholder-[rgb(1,84,100)]`}
                      type="text"
                      placeholder="Phone"
                      name="phone"
                      required
                    />
                  </div>
                  <div className="flex items-center">
                    <Image
                      className="absolute ml-3"
                      src={Contact1}
                      alt="Contact1-img"
                    />
                    <input
                      className={`pl-10 outline-0 p-3 pr-28 text-[12px] rounded-lg w-full md:w-[350px] placeholder-[rgb(1,84,100)]`}
                      type="text"
                      placeholder="Country"
                      name="country"
                      required
                    />
                  </div>
                  <div className=" flex items-center">
                    <Image
                      className=" absolute ml-3"
                      src={Contact3}
                      alt="Contact3-img"
                    />
                    <input
                      className=" pl-10 outline-0 p-3 pr-28 text-[12px] rounded-lg w-full md:w-[350px] placeholder-[rgb(1,84,100)]"
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className=" flex mt-1 items-centre">
                    <Image
                      className=" absolute ml-3 mt-3"
                      src={Contact4}
                      alt="Contact3-img"
                    />
                    <textarea
                      className={`pl-10 outline-0 p-3 pr-28 text-[12px] rounded-lg w-full md:w-[350px] placeholder-[rgb(1,84,100)]`}
                      name="message"
                      placeholder="Send Message"
                      cols={35}
                      rows={6}
                      required
                    ></textarea>
                  </div>
                  <Button
                    className=" mt-3 inline-flex items-center justify-center rounded-full border-2 border-transparent bg-secondry  text-center text-base  text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800  "
                    disabled={submitting}
                  >
                    {submitting ? <Spinner /> : "Send a message"}
                  </Button>
                </form>
              </>
            )}
            
          </div>
        </div>
        <Image
          className=" hidden lg:block absolute top-[850px] z-0 bottom-36 right-0 w-32 "
          alt="images"
          src={leaf2}
        />

        {/* <div className='container mx-auto my-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
    <div className="w-full max-w-sm">
        <div className="bg-white shadow-2xl rounded-b-3xl pb-6 pr-8 justify-center flex">
            <div className="w- m-auto flex">
                <Image className='bg-[#015464] rounded-md p-2' src={call} alt='call-icon' />
            </div>
            <div className='text-start'>
                <h2 className="text-[#015464] text-2xl font-bold pt-6">Call Us</h2>
                <p className="text-center text-[#14adad] font-semi">+91 1234567890</p>
                <p className="text-center text-[#14adad] font-semi">+91 1234567890</p>
            </div>
        </div>
    </div>

    <div className="w-full max-w-sm">
        <div className="bg-white shadow-2xl rounded-b-3xl pb-6 pr-8 justify-center flex">
            <div className="w- m-auto flex">
                <Image className='bg-[#408080] rounded-md p-2' src={emailicon} alt='call-icon' />
            </div>
            <div className='text-start'>
                <h2 className="text-[#015464] text-2xl font-bold pt-6">Email Us</h2>
                <p className="text-center text-[#14adad] ">sample@gmail.com</p>
                <p className="text-center text-[#14adad] ">sample@gmail.com</p>
            </div>
        </div>
    </div>

    <div className="w-full max-w-sm">
        <div className="bg-white shadow-2xl rounded-b-3xl pb-6 pr-8 justify-center flex">
            <div className="w- m-auto flex">
                <Image className='bg-[#7CC9B5] rounded-md p-2' src={locationicon} alt='call-icon' />
            </div>
            <div className='text-start'>
                <h2 className="text-[#015464] text-2xl font-bold pt-6">Find Us</h2>
                <p className="text-center text-[#14adad] ">Lorem Epsum @Lorem</p>
                <p className="text-center text-[#14adad] ">sample@gmail.com</p>
            </div>
        </div>
    </div>
</div> */}
        <div className="container mx-auto flex flex-wrap justify-center items-stretch mt-5">
          <div className="w-full sm:w-72 lg:w-96 mt-5 max-w-sm mx-4 mb-8">
            <div className="bg-white shadow-2xl rounded-3xl p-6 flex items-center h-full">
              <div className="bg-[#015464] rounded-md p-2 mr-4">
                <Image className="w-8 h-8" src={call} alt="call-icon" />
              </div>
              <div className="text-start">
                <h2 className="text-[#015464] text-2xl font-bold">Call Us</h2>
                <p className="text-[#14adad] font-semi">+91-8807186597</p>
                {/*<p className="text-[#14adad] font-semi">+91-8807186597</p>*/}
              </div>
            </div>
          </div>

          <div className="w-full sm:w-72 lg:w-96 mt-5 max-w-sm mx-4 mb-8">
            <div className="bg-white shadow-2xl rounded-3xl p-6 flex items-center h-full">
              <div className="bg-[#408080] rounded-md p-2 mr-4">
                <Image className="w-8 h-8" src={emailicon} alt="email-icon" />
              </div>
              <div className="text-start">
                <h2 className="text-[#015464] text-2xl font-bold">Email Us</h2>
                <p className="text-[#14adad]">info@eNOOL.in</p>
                {/*<p className="text-[#14adad]">info@eNOOL.in</p>*/}
              </div>
            </div>
          </div>

          <div className="w-full sm:w-72 lg:w-96 mt-5 max-w-sm mx-4 mb-8">
            <div className="bg-white shadow-2xl rounded-3xl p-6 flex items-center h-full">
              <div className="bg-[#7CC9B5] rounded-md p-2 mr-4 shrink-0  ">
                <Image
                  className="w-8 h-8"
                  src={locationicon}
                  alt="location-icon"
                />
              </div>
              <div className="text-start">
                <h2 className="text-[#015464] text-2xl font-bold">Find Us</h2>
                <p className="text-[#14adad]">MURUGAN GS E-Solution PVT Ltd) [110, NUNGAMBAKKAM HIGH ROAD, CHENNAI, Chennai,TamilNadu,India, 600034</p>
                {/*<p className="text-[#14adad]">www.eNOOL.in</p>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default ContactUs;
