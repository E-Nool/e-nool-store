// @ts-nocheck
"use client"

import { useState } from "react"

import Image from "next/image"
import bgImg from "@public/images/bg1.png"
import Lefe from "@public/images/lefe1.png"
import ProfileImg from "@public/images/profile.png"
import { useAccount } from "@lib/context/account-context"
import Link from "next/link"

const ProfileTemplate = () => {
  const { customer, retrievingCustomer, refetchCustomer } = useAccount()
  const [isGridView, setGridView] = useState(true)

  if (retrievingCustomer || !customer) {
    return null
  }

  const enableGridView = () => {
    if (!isGridView) {
      setGridView(true)
    }
  }

  const enableListView = () => {
    if (isGridView) {
      setGridView(false)
    }
  }

  return (
    <>
      <Image className=" absolute w-5/6 z-[-1] right-0" src={bgImg} alt="bgimg" />
      <div className=" absolute z-0 mt-36 top-64 h-[2px] left-0 right-0 w-full bg-[#14adad] opacity-20 rounded mb-5"></div>
      <div className=" absolute z-0 mt-32 top-80 h-[2px] left-0 right-0 w-full bg-[#14adad] opacity-20 rounded mb-5"></div>
      <div className=" container justify-center items-center -top-20 rounded-3xl relative z-50 mx-auto">
        <div className=" container flex  justify-start ml-20 items-start">
          <div className=" flex mt-40">
            <Image
              className="  bg-[#7CC9B5] rounded-full w-auto"
              src={ProfileImg}
              alt="Profile-img"
            />
            <div className=" ml-20 mt-10 ">
              <h3 className=" text-[#015464] text-3xl font-extrabold font-graphikBold  ">
                {customer?.first_name}  {customer?.last_name}
              </h3>
              <p className=" mt-3 text-[#01adad] text-sm">
                {customer.email}
              </p>
              <div className=" mt-10">
                <Link href="/account/edit-profile" className="bg-[#015464] p-3 px-8 text-white rounded-3xl hover:bg-gray-700">
                    Edit Profile
                </Link>
                {/* <button className=" ml-8 bg-[#7CC9B5] p-3 px-8 text-white rounded-3xl hover:bg-gray-800">
                  Share Profile
                </button> */}
              </div>
            </div>
            <Image
              className=" hidden lg:block absolute top-36 z-0 right-0 w-28 "
              src={Lefe}
              alt=""
            />
          </div>
        </div>
        <div className=" mt-10">
          <button
            className=" text-[#015464] ml-24 font-graphikBold  transition duration-150 border-b-8 border-transparent hover:border-[#015464]"
            onClick={enableGridView}
          >
            My List
          </button>
          <button
            className=" text-[#015464] ml-10 font-graphikBold  transition duration-150 border-b-8 border-transparent hover:border-[#015464] "
            onClick={enableListView}
          >
            Currently Reading
          </button>

          {/* {isGridView ? (
            <div className=" "><Mylist /> </div>
          ) : (
            <div className=" ml-32">
              <div><Currentlyreading /></div>
            </div>
          )} */}
        </div>
      </div>
    </>
  )
}

export default ProfileTemplate
