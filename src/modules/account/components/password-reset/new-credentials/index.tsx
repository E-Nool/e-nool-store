// @ts-nocheck
"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import loginObject from "@public/images/LoginPage/login-object.png"
import { BackButton } from "../../register/BackButton"
import { BannerImage } from "../../register/BannerImage"
import InlineError from "@modules/common/components/inline-error"
import { useSearchParams } from 'next/navigation'
import { resetPassword } from "@lib/util/customer_api";


const NewCredentials = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get('token');
  const email = searchParams.get('e');
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errors, setErrors] = useState({})

  if(!token || !email){
    window.location.href = '/';
  }

  // console.log(token, email)

  const handleUpdate = async () => {
    if (!password) {
      setErrors({ password: { message: "Please enter your new password" } })
      return
    }

    if (password.length < 8) {
      setErrors({
        password: { message: "Password should have at least 8 characters" },
      })
      return
    }

    if (!confirmPassword) {
      setErrors({
        confirmPassword: { message: "Please enter confirm password" },
      })
      return
    }

    if (password !== confirmPassword) {
      setErrors({
        confirmPassword: {
          message: "Confirm password should match with password",
        },
      })

      return
    }

    const res = await resetPassword({
      token,
      password,
      // email
      email
    });

    setErrors({})
    if(res?.customer){
      router.push("/account/password-updated")
    }else{
      setErrors({
        invalid: {
          message: res?.message,
        },
      })
    }
    // router.push("/account/password-updated")
  }

  return (
    <div className="bg-white">
      <div className="flex justify-center h-screen">
        <BannerImage src={loginObject} />
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <BackButton />
          <div className="flex-1">
            <div className="text-center">
              <p className="mt-3 text-[#015464] font-black text-4xl">
                New Credentials
              </p>
              <p className="mt-3 text-[#015464] text-[12px]">
                {" "}
                Your Account Has Been Verified! <br /> set your New Password
              </p>
            </div>
            <div className="mt-4 h-1 w-full bg-[#E0E7FF] opacity-20 rounded"></div>
            <div className="mt-8">
              <div>
                <label
                  htmlFor="Newpassword"
                  className="block mb-2 text-lg  text-[#408080] "
                >
                  New Password
                </label>
                <input
                  type="Newpassword"
                  name="Newpassword"
                  id="Newpassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-[#2e384d33] bg-[#E0E7FF] border border-gray-200 rounded-lg   
                                        .placeholder-opacity-30"
                />
              </div>
              {errors?.password && (
                <InlineError errors={errors} property="password" />
              )}
              <div className="mt-6">
                <label
                  htmlFor="Newpassword"
                  className="block mb-2 text-[16px]  text-[#408080] "
                >
                  Confirm Password
                </label>
                <input
                  type="Newpassword"
                  name="Newpassword"
                  id="Newpassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-[#2e384d33] bg-[#E0E7FF] border border-gray-200 rounded-lg   
                                        .placeholder-opacity-30"
                />
              </div>
              {errors?.confirmPassword && (
                <InlineError errors={errors} property="confirmPassword" />
              )}
              {errors?.invalid && (
                <InlineError errors={errors} property="invalid" />
              )}
              <div className="mt-6">
                <button
                  onClick={handleUpdate}
                  className="w-full px-5 py-5 tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 "
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewCredentials
