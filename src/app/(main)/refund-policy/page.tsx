"use client"
import { Metadata } from "next"
import Image from "next/image"
import DefaultLayout from "@modules/layout/templates"
import Link from 'next/link';
import Leaf from '../../../../public/images/LandingPage/Leaf1.png';
import PrivacyPolicyImage from "../../../../public/images/PrivacyPolicy.png";
import Aboutbg from '../../../../public/images/aboutbg.png';
import img1 from '../../../../public/images/img1.png';
import Ellipse from '../../../../public/images/Ellipse.png';
import Lefe from '../../../../public/images/lefe1.png';
import Terms from '../../../../public/images/terms.png';
import Leaf2 from '../../../../public/images/leaf2.png';
import Lefe2 from '../../../../public/images/lefe2.png';

// export const metadata: Metadata = {
//   title: "Store",
//   description: "Explore all of our products.",
// }



export default function StorePage() {
  return (
    <DefaultLayout>
      <div className="min-[2000px]:container min-[2000px]:mx-auto">
        <div className="pl-10 md:pl-20 absolute top-20  mt-20 text-[#015464] md:ml-5 ">
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
                  Refund Policy{" "}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className=" min-[2000px]:container min-[2000px]:mx-auto mb-10 px-10 md:px-24">
          <Image
            className="absolute left-0 z-[-1]  h-[500px] top-[-83px]"
            src={Aboutbg}
            alt=""
          />
          <Image className="hidden md:block absolute z-0 top-24 left-0 w-16 " src={Leaf} alt="" />
          <div className=" container justify-center items-center flex mt-40 z-0 ">
            <div className=" max-w-3xl ">
              <Image
                src={PrivacyPolicyImage}
                alt="privacypolicy-img"
                className="hidden"
              />
              <h1 className=" text-[#015464] font-graphikBold text-3xl md:text-5xl">
                Refund Policy
              </h1>
            </div>
            <Image
              className="hidden lg:block max-w-md ml-20"
              src={Terms}
              alt="Terms"
            />
            <Image
              className=" hidden lg:block absolute top-5 z-0 bottom- -right-20 w-28 "
              src={Lefe}
              alt=""
            />
          </div>
        </div>
        <Image
          className=" hidden lg:block absolute top-[650px] z-0 bottom-36 -left-28 w-72 "
          alt="Image"
          src={img1}
        />
        <Image
          className=" hidden lg:block absolute top-[898px] z-0 bottom-36 left-10 w-28 "
          alt="Image"
          src={Ellipse}
        />
        <div className=" mt-20  min-[2000px]:container min-[2000px]:mx-auto mb-10 px-10 md:px-24 flex flex-col m-auto ">

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              1. Subscription Cancellations
            </h1>
            <ul className="flex flex-col list-disc  ">
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
                You may cancel your subscription at any time through your account settings or by contacting our support team at info@eNOOL.in.
              </li>
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
                Cancellations will take effect at the end of your current billing cycle.
              </li>
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
                No partial refunds will be issued for unused subscription time.
              </li>
            </ul>
            {/*<p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
              Lorem Ipsum је једноставно модел текста који се користи у
              штампарској и словослагачкој индустрији. Lorem ipsum је био
              стандард за модел текста још од 1500. године, када је непознати
              штампар узео кутију са словима и сложио их како би направио узорак
              књиге. Не само што је овај модел опстао пет векова, него је чак
              почео да се користи и у електронским медијима, непроменивши се.
            </p>*/}
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              2. Refund Eligibility
            </h1>
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              2.1 Subscriptions
            </h1>
            <ul className="flex flex-col list-disc  ">
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
                We offer a 7-day money-back guarantee for new subscribers
              </li>
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
                If you cancel within 7 days of your initial subscription purchase, you will receive a full refund.
              </li>
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
                After the 7-day period, no refunds will be issued for subscription cancellations.
              </li>
            </ul>
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              2.2 Individual Content Purchases
            </h1>
            <ul className="flex flex-col list-disc  ">
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
                For individual eBook or audiobook purchases, we offer a 3-day return policy.
              </li>
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
                If you are unsatisfied with your purchase, you may request a refund within 3 days of the purchase date.
              </li>
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
                Refunds for individual content purchases are at the discretion of eNOOL and may be denied if we detect excessive refund requests or abuse of the policy.
              </li>
            </ul>
            {/*<p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
              Lorem Ipsum је једноставно модел текста који се користи у
              штампарској и словослагачкој индустрији. Lorem ipsum је био
              стандард за модел текста још од 1500. године, када је непознати
              штампар узео кутију са словима и сложио их како би направио узорак
              књиге. Не само што је овај модел опстао пет векова, него је чак
              почео да се користи и у електронским медијима, непроменивши се.
            </p>*/}
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              3. Refund Process
            </h1>
            <ul className="flex flex-col list-disc  ">
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
                To request a refund, please contact our support team at support@eNOOL.in.
              </li>
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
                Include your order number and reason for the refund request.
              </li>
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
                Approved refunds will be processed within 5-10 business days.
              </li>
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
                Refunds will be issued to the original payment method used for the purchase.
              </li>
            </ul>
            {/*<p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
              Lorem Ipsum је једноставно модел текста који се користи у
              штампарској и словослагачкој индустрији. Lorem ipsum је био
              стандард за модел текста још од 1500. године, када је непознати
              штампар узео кутију са словима и сложио их како би направио узорак
              књиге. Не само што је овај модел опстао пет векова, него је чак
              почео да се користи и у електронским медијима, непроменивши се.
            </p>*/}
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              4. Exceptions
            </h1>
            <ul className="flex flex-col list-disc  ">
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
                Promotional or discounted subscriptions may have different refund terms, which will be clearly stated at the time of purchase.
              </li>
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
                In cases of technical issues or service unavailability, we may offer pro-rated refunds or service credits at our discretion.
              </li>
            </ul>
            {/*<p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
              Lorem Ipsum је једноставно модел текста који се користи у
              штампарској и словослагачкој индустрији. Lorem ipsum је био
              стандард за модел текста још од 1500. године, када је непознати
              штампар узео кутију са словима и сложио их како би направио узорак
              књиге. Не само што је овај модел опстао пет векова, него је чак
              почео да се користи и у електронским медијима, непроменивши се.
            </p>*/}
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              5. Changes to This Policy
            </h1>
            <ul className="flex flex-col list-disc  ">
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
                We reserve the right to modify this refund policy at any time. Changes will be effective immediately upon posting to our website.
              </li>
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
                It is your responsibility to review this policy periodically for changes.
              </li>
            </ul>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
              Last updated: [07/19/2024]
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
              For any questions regarding this refund policy, please contact us at info@eNOOL.in.
            </p>
            {/*<p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
              Lorem Ipsum је једноставно модел текста који се користи у
              штампарској и словослагачкој индустрији. Lorem ipsum је био
              стандард за модел текста још од 1500. године, када је непознати
              штампар узео кутију са словима и сложио их како би направио узорак
              књиге. Не само што је овај модел опстао пет векова, него је чак
              почео да се користи и у електронским медијима, непроменивши се.
            </p>*/}
          </div>

          {/*<div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              As of April 07th,2023
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
              Lorem Ipsum је једноставно модел текста који се користи у
              штампарској и словослагачкој индустрији. Lorem ipsum је био
              стандард за модел текста још од 1500. године, када је непознати
              штампар узео кутију са словима и сложио их како би направио узорак
              књиге. Не само што је овај модел опстао пет векова, него је чак
              почео да се користи и у електронским медијима, непроменивши се.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              As of April 07th,2023
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
              Lorem Ipsum је једноставно модел текста који се користи у
              штампарској и словослагачкој индустрији. Lorem ipsum је био
              стандард за модел текста још од 1500. године, када је непознати
              штампар узео кутију са словима и сложио их како би направио узорак
              књиге. Не само што је овај модел опстао пет векова, него је чак
              почео да се користи и у електронским медијима, непроменивши се.
            </p>
          </div>*/}

          
          <Image
            className=" hidden lg:block absolute top-[850px] z-0 bottom-36 right-0 w-28 "
            alt="Image"
            src={Leaf2}
          />
          <Image
            className=" hidden lg:block absolute top-[990px] z-0 bottom-36 right-64 w-24 "
            alt="Image"
            src={Lefe2}
          />
          <Image
            className=" hidden lg:block absolute top-[1100px] z-0 bottom-36 right-0 w-72 "
            alt="Image"
            src={img1}
          />
          <Image
            className=" hidden lg:block absolute top-[1380px] z-0 bottom-36 right-20 w-20 "
            alt="Image"
            src={Ellipse}
          />
        </div>
      </div>
    </DefaultLayout>
  )
}
