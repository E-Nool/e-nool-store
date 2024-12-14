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
                  Privacy Policy{" "}
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
                className=""
              />
              <h1 className=" text-[#015464] font-graphikBold text-3xl md:text-5xl">
                Privacy Policy
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
            {/*<h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              As of April 07th,2023
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
              Lorem Ipsum је једноставно модел текста који се користи у
              штампарској и словослагачкој индустрији. Lorem ipsum је био
              стандард за модел текста још од 1500. године, када је непознати
              штампар узео кутију са словима и сложио их како би направио узорак
              књиге. Не само што је овај модел опстао пет векова, него је чак
              почео да се користи и у електронским медијима, непроменивши се.
            </p>*/}
            {/*<h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              Introduction
            </h1>*/}
            <ul className="flex flex-col list-decimal    ">
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
                Introduction eNOOL, a division of MURUGAN GS E-Solution PVT Ltd ("we", "our", or "us"), is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website (www.eNOOL.in) and our services.
              </li>
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
                Information We Collect
                <ul>
                  <li className="max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
                    2.1 Personal Information We may collect personal information that you provide directly to us, including but not limited to: Name Email address Postal address Phone number Payment information (processed securely through our payment gateway)
                  </li>
                  <li className="max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
                    2.2 Usage Information We automatically collect certain information about your device and how you interact with our services, including: IP address Device type Browser type Operating system Pages visited Time and date of visits Referring website addresses
                  </li>
                </ul>
              </li>
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
                How We Use Your Information We use your information for various purposes, including: Providing and maintaining our services Processing transactions and sending transaction notifications Responding to your inquiries and providing customer support Sending you marketing communications (with your consent) Improving our services and developing new features Protecting against fraud and unauthorized access
              </li>
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
                How We Share Your Information We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances: With service providers who assist us in operating our website and services To comply with legal obligations or enforce our policies In connection with a business transfer or acquisition
              </li>
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
                Data Security We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </li>
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
                Your Rights Depending on your location, you may have certain rights regarding your personal information, including: The right to access your personal information The right to correct inaccurate information The right to delete your information The right to object to or restrict processing of your information The right to data portability To exercise these rights, please contact us at info@eNOOL.in.
              </li>
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
                Cookies and Similar Technologies We use cookies and similar tracking technologies to collect and store information about your interactions with our website. You can manage your cookie preferences through your browser settings.
              </li>
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
                Children's Privacy Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </li>
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
                Changes to This Privacy Policy We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </li>
              <li className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
                Contact Us If you have any questions about this Privacy Policy, please contact us at: 
                <ul>
                  <li className="max-w-full text-[#14adad] text-xs pb-4">
                    eNOOL (A division of MURUGAN GS E-Solution PVT Ltd) [110, NUNGAMBAKKAM HIGH ROAD, CHENNAI, Chennai,TamilNadu,India, 600034]
                  </li>
                  <li className="max-w-full text-[#14adad] text-xs pb-4">
                    Email: info@eNOOL.in
                  </li>
                </ul>
              </li>
            </ul>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4">
              Last updated: [07/19/2024]
            </p>
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
