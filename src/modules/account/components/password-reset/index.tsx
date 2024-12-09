// @ts-nocheck
"use client"
import { useEffect, useRef, useState } from "react"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import otp from "@public/images/LoginPage/Otp.svg"
import Spinner from "@modules/common/icons/spinner"
import correct from "@public/images/LoginPage/correct.svg"
import loginObject from "@public/images/LoginPage/login-object.png"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"

import { BackButton } from "../register/BackButton"
import { BannerImage } from "../register/BannerImage"
import InlineError from "@modules/common/components/inline-error"
import { resetPasswordRequest } from "@lib/util/customer_api";
import check from "@public/images/check.png"

const PasswordReset = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [requestSent, setRequestSent] = useState(false)
  const [errors, setErrors] = useState({})

  const handleEmail = async () => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    setErrors("")
    if (!email) {
      setErrors({ email: { message: "Please enter your email ID" } })
      return
    }
    if (!emailPattern.test(email)) {
      setErrors({ email: { message: "Please enter a valid email address." } })
      return
    }
    let resetRequest = await resetPasswordRequest(email)
    if(resetRequest === ''){
      setRequestSent(true)
    }else{
      setErrors({ email: { message: "Something went wrong" } })
    }
  
    // router.push("/account/new-credentials")
  }

  return (
    <div className="bg-white">
      <div className="flex justify-center h-screen">
        <BannerImage src={loginObject} />
        { ! requestSent ?
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <BackButton />
          <div className="flex-1">
            <div className="text-center">
              <p className="mt-3 text-[#015464] font-black text-4xl">
                Reset Password
              </p>
              <p className="mt-3 text-[#015464] text-[12px]">
                {" "}
                Provide Your Account's Email For Which You Want To Reset Your
                password
              </p>
            </div>
            <div className="mt-4 h-1 w-full bg-[#E0E7FF] opacity-20 rounded"></div>
            <div className="mt-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg  text-[#408080] "
                >
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@example.com"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-[#2e384d33] bg-[#E0E7FF] border border-gray-200 rounded-lg   
                                        .placeholder-opacity-30"
                />
              </div>
              {errors?.email && (
                <InlineError errors={errors} property="email" />
              )}

              <div className="mt-6">
                <button
                  onClick={handleEmail}
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 "
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        : 
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
        <div className="flex-1">
          <div className="text-center ">
            <p className="mt-3 text-[#015464] font-black text-4xl">
              {/* Password Updated */}
            </p>
            <div className="flex justify-center mx-auto m-12">
              <Image
                className=" h-25 sm:h-30"
                src={check}
                alt=""
                width={100}
                height={70}
              />
            </div>
            <p>Password reset link sent to your email</p>
          </div>

          <div className="mt-4 h-1 w-full bg-[#E0E7FF] opacity-20 rounded"></div>
          <div className="mt-6">
            <Link href="/account">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 ">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
      }
      </div>
    </div>
  )
}

export default PasswordReset
