'use client';

import React from "react";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import facebook from "@modules/common/icons/facebook.png";
import youtube from "@modules/common/icons/youtube.png";
import instagram from "@modules/common/icons/instagram.png";
import twitter from "@modules/common/icons/twitter.png";
import logo1 from "@modules/common/icons/eNOOL_Logo-white.svg";
import paypal from "@modules/common/icons/paypal-solid-large.svg";
import discover from "@modules/common/icons/discover-solid-large.svg";
import americanexpress from "@modules/common/icons/americanexpress-solid-large.svg";
import mastercard from "@modules/common/icons/mastercard-solid-large.svg";
import visa from "@modules/common/icons/visa-solid-large.svg";
import {addNewsletterSubscriber} from "@lib/util/newsletter"

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] =  useState(false);
  const [subscribedMsg, setSubscribedMsg] =  useState('');

  const submitForm = async function(e){
    e.preventDefault();
    const res = await addNewsletterSubscriber({email : email});
    if(res.status){
      setSubscribed(true);
      setSubscribedMsg(res.message);
    }
  }

  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer_bg mx-auto 2xl:pt-[350px] md:pt-[250px] sm:pb-2  font-graphik min-[2000px]:bg-[#1E6B77] relative z-0 sm:!bg-cover !bg-contain">
      <div className="min-[2000px]:container min-[2000px]:mx-auto sm:pt-0 pt-28">
        <div className="mx-auto space-y-8 px-4 sm:mb-5  sm:px-6 lg:space-y-16 lg:px-8 lg:mt-5 sm:!bg-transparent" style={{ backgroundColor: "#1e6b77" }}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
            <div>
              <h2 className="text-lg md:mt-10 lg:mt-0 text-white   lg:pl-0">
                Receive the latest offers & updates via email
              </h2>
              {!subscribed ? (
                <form onSubmit={submitForm} className="items-center 2xl:mx-0 mt-10 space-y-5 max-w-screen-sm sm:flex sm:space-y-0 2xl:w-5/6  ">
                  <div className="relative sm:w-3/4 w-full">
                    <input
                      className="block py-[15px] pl-5 w-full text-white bg-[#1E6B77]  border border-gray-300 sm:rounded-none placeholder:text-white "
                      placeholder="Your Email"
                      type="email"
                      id="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="py-[16px] px-5 w-full  font-medium text-center text-white cursor-pointer bg-[#7CC9B5]  "
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
               ) : (
                 <p className="text-[#43e704] mt-4">{subscribedMsg}</p>
               )}
              
              <div
                className="lg:mx-auto 2xl:mx-0 my-5
                           max-w-screen-sm font-sfpro font-normal text-left  text-white  0"
              >
                By signing up, you agree to the{" "}
                <a
                  href="/privacy-policy"
                  className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  {" "}
                  Privacy Policy
                </a>
                .
              </div>
            </div>
            <div className="grid gap-8 grid-cols-2 lg:col-span-2 lg:grid-cols-4 pb-4 ">
              <div>
                <p className="font-medium text-white text-lg">About Us</p>

                <ul className="mt-6 space-y-4 text-xs">
                  <li>
                    <a
                      href="/contact-us"
                      className="text-white transition hover:opacity-75"
                    >
                      Contact Us
                    </a>
                  </li>

                  {/*<li>
                    <a
                      href="/help-topics"
                      className="text-white transition hover:opacity-75"
                    >
                      Help 
                    </a>
                  </li>*/}

                  <li>
                    <a
                      href="/publisher"
                      className="text-white transition hover:opacity-75"
                    >
                      Become Publisher
                    </a>
                  </li>

                  <li>
                    <a
                      href="/author"
                      className="text-white transition hover:opacity-75"
                    >
                      Become Author
                    </a>
                  </li>

                  <li>
                    <a
                      href="/terms-conditions"
                      className="text-white transition hover:opacity-75"
                    >
                      Terms and Conditions
                    </a>
                  </li>
                  {/*<li>
                    <a
                      href="/privacy-policy"
                      className="text-white transition hover:opacity-75"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/refund-policy"
                      className="text-white transition hover:opacity-75"
                    >
                      Refund Policy
                    </a>
                  </li>*/}
                </ul>
              </div>

              <div>
                <p className="font-medium text-white text-lg">Categories</p>

                <ul className="mt-6 space-y-4 text-xs">
                  <li>
                    <a
                      href="/category/literary-collections"
                      className="text-white transition hover:opacity-75"
                    >
                      Literary Collections
                    </a>
                  </li>

                  <li>
                    <a
                      href="/category/novel"
                      className="text-white transition hover:opacity-75"
                    >
                      Novel
                    </a>
                  </li>

                  <li>
                    <a
                      href="/category/spirituals"
                      className="text-white transition hover:opacity-75"
                    >
                      Spirituality
                    </a>
                  </li>
                  <li>
                    <a
                      href="/category/drama"
                      className="text-white transition hover:opacity-75"
                    >
                      Drama
                    </a>
                  </li>
                  <li>
                    <a
                      href="/category/health-fitness"
                      className="text-white transition hover:opacity-75"
                    >
                      Health & Fitness
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white text-lg">Our Services</p>

                <ul className="mt-6 space-y-4 text-xs">
                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                     e-Book Publication
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      e-Book Sales
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                     e-Books Promotion
                    </a>
                  </li>

                  <li className="text-white transition hover:opacity-75">
                    <Link href="#">e-Reading</Link>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75"
                    >
                      e-book Archiving
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://admin.enool.in/author/login"
                      target="_blank"
                      className="text-white transition hover:opacity-75"
                    >
                      Author Login
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://admin.enool.in/publisher/login"
                      target="_blank"
                      className="text-white transition hover:opacity-75"
                    >
                      Publisher Login
                    </a>
                  </li>
                  <li>
                    <a
                      href="/reviewer"
                      target="_blank"
                      className="text-white transition hover:opacity-75"
                    >
                      Reviewer Request
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white text-lg">Get Started</p>

                <ul className="mt-6 space-y-4 text-xs">
                  <Link href="/about">
                    <li className="text-white transition hover:opacity-75">
                      About us
                    </li>
                  </Link>

                  {/*<li>
                    <a
                      href="/sitemap"
                      className="text-white transition hover:opacity-75 text-xs"
                    >
                      Sitemap
                    </a>
                  </li>

                  <li>
                    <a
                      href="/bookmarks"
                      className="text-white transition hover:opacity-75"
                    >
                      Bookmarks
                    </a>
                  </li>*/}
                  <li className="text-white transition hover:opacity-75">
                    <Link href="/account/login">Sign in/Join</Link>
                  </li>
                  <li>
                    <a
                      href="/privacy-policy"
                      className="text-white transition hover:opacity-75"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/refund-policy"
                      className="text-white transition hover:opacity-75"
                    >
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <table className="md:visible border-collapse border border-slate-400 w-full table-fixed sm:!bg-transparent sm:table hidden" style={{ backgroundColor: "#1e6b77" }}>
          <tbody>
            <tr>
              <td className="border border-slate-300 w-full  ">
                {/*<div className=" my-2  px-4 lg:mx-auto md:w-5/6 xl:w-1/2 w-3/4  text-center ">
                  <h1 className="text-white">Follow Us</h1>
                  <div className="grid md:grid-cols-4 grid-col-2 text-xs text-white pt-4 justify-center font-semibold py-1">
                    <button
                      className="h-8 w-8   items-center justify-center  align-center mx-auto"
                      type="button"
                    >
                      <Image
                        src={facebook}
                        className="justify-center "
                        alt=""
                      />
                    </button>
                    <button
                      className="h-8 w-8  items-center justify-center align-center mx-auto"
                      type="button"
                    >
                      <Image src={youtube} className="justify-center " alt="" />
                    </button>
                    <button
                      className="h-8 w-8  items-center justify-center align-center mx-auto"
                      type="button"
                    >
                      <Image src={twitter} className="justify-center " alt="" />
                    </button>
                    <button
                      className="h-8 w-8  items-center justify-center align-center mx-auto"
                      type="button"
                    >
                      <Image
                        src={instagram}
                        className="justify-center "
                        alt=""
                      />
                    </button>
                  </div>
                </div>*/}
              </td>

              <td className="border border-slate-300 w-full items-center justify-between">
                <Image
                  className="w-56 justify-center mx-auto"
                  src={logo1}
                  alt="Logo"
                />
                <p className="text-white font-bold text-center text-[13px] mt-2">
                  MURUGAN GS E-Solution PVT Ltd
                </p>
              </td>
              <td className="border border-slate-300 w-full">
                <div className="   px-4  md:w-5/6 xl:w-1/2 w-3/4 md:mx-auto text-center">
                  <h1 className="text-white pt-12 md:pt-0">We Accept</h1>
                  <div className="grid md:grid-cols-5 grid-col-2 gap-2 text-xs pt-4 text-white justify-center font-semibold py-1">
                    <button
                      className="h-8 w-8  items-center  justify-center align-center mx-auto"
                      type="button"
                    >
                      <Image src={visa} className="justify-center " alt="" />
                    </button>
                    <button
                      className="h-8 w-8  items-center justify-center align-center mx-auto"
                      type="button"
                    >
                      <Image
                        src={mastercard}
                        className="justify-center "
                        alt=""
                      />
                    </button>
                    <button
                      className="h-8 w-8  items-center justify-center align-center mx-auto"
                      type="button"
                    >
                      <Image
                        src={americanexpress}
                        className="justify-center "
                        alt=""
                      />
                    </button>
                    <button
                      className="h-8 w-8  items-center justify-center align-center mx-auto"
                      type="button"
                    >
                      <Image
                        src={discover}
                        className="justify-center "
                        alt=""
                      />
                    </button>
                    <button
                      className="h-8 w-8  items-center justify-center align-center mx-auto"
                      type="button"
                    >
                      <Image src={paypal} className="justify-center " alt="" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="md:visible border-collapse border border-slate-400 w-full table-fixed sm:!bg-transparent sm:hidden table" style={{ backgroundColor: "#1e6b77" }}>
          <tbody>
            <tr>
              <td className="border border-slate-300 w-full  ">
                {/*<div className=" my-2  px-4 lg:mx-auto md:w-5/6 xl:w-1/2 w-full text-center ">
                  <h1 className="text-white">Follow Us</h1>
                  <div className="grid md:grid-cols-4 grid-col-2 text-xs text-white pt-4 justify-center font-semibold py-1 grid-flow-col gap-6">
                    <button
                      className="h-8 w-8   items-center justify-center  align-center mx-auto"
                      type="button"
                    >
                      <Image
                        src={facebook}
                        className="justify-center"
                        alt=""
                      />
                    </button>
                    <button
                      className="h-8 w-8  items-center justify-center align-center mx-auto"
                      type="button"
                    >
                      <Image src={youtube} className="justify-center " alt="" />
                    </button>
                    <button
                      className="h-8 w-8  items-center justify-center align-center mx-auto"
                      type="button"
                    >
                      <Image src={twitter} className="justify-center " alt="" />
                    </button>
                    <button
                      className="h-8 w-8  items-center justify-center align-center mx-auto"
                      type="button"
                    >
                      <Image
                        src={instagram}
                        className="justify-center "
                        alt=""
                      />
                    </button>
                  </div>
                </div>*/}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 w-full items-center justify-between">
                <Image
                  className="w-56 justify-center mx-auto pt-10"
                  src={logo1}
                  alt="Logo"
                />
                <p className="text-white font-bold text-center text-[13px] mt-2 pb-10">
                  MURUGAN GS E-Solution PVT Ltd
                </p>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 w-full">
                <div className="   px-4  md:w-5/6 xl:w-1/2 w-full md:mx-auto text-center">
                  <h1 className="text-white pt-4 md:pt-0">We Accept</h1>
                  <div className="grid md:grid-cols-5 grid-col-2 gap-2 text-xs pt-4 text-white justify-center font-semibold py-1 grid-flow-col gap-6">
                    <button
                      className="h-8 w-8  items-center  justify-center align-center mx-auto"
                      type="button"
                    >
                      <Image src={visa} className="justify-center " alt="" />
                    </button>
                    <button
                      className="h-8 w-8  items-center justify-center align-center mx-auto"
                      type="button"
                    >
                      <Image
                        src={mastercard}
                        className="justify-center "
                        alt=""
                      />
                    </button>
                    <button
                      className="h-8 w-8  items-center justify-center align-center mx-auto"
                      type="button"
                    >
                      <Image
                        src={americanexpress}
                        className="justify-center "
                        alt=""
                      />
                    </button>
                    <button
                      className="h-8 w-8  items-center justify-center align-center mx-auto"
                      type="button"
                    >
                      <Image
                        src={discover}
                        className="justify-center "
                        alt=""
                      />
                    </button>
                    <button
                      className="h-8 w-8  items-center justify-center align-center mx-auto"
                      type="button"
                    >
                      <Image src={paypal} className="justify-center " alt="" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-wrap pt-3 items-center md:justify-between justify-center sm:!bg-transparent" style={{ backgroundColor: "#1e6b77" }}>
          <div className="w-full  px-4 mx-auto text-center sm:pb-0 pb-2">
            <div className="text-sm text-white font-graphik py-1 sm:space-y-3">
              Copyright © <span id="get-current-year">{currentYear}</span>
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-white hover:text-gray-800"
                target="_blank"
              />{" "}
              E-Nool |
              <a href="#" className="text-white hover:text-blueGray-800">
                Powered By E-Nool
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
