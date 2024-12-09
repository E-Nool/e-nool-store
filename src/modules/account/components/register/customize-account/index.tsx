// @ts-nocheck
"use client"
import { medusaClient } from "@lib/config"
import Image from "next/image"
import { useUpdateMe } from "medusa-react"
import { Customer } from "@medusajs/medusa"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Spinner from "@modules/common/icons/spinner"

import customizeAccountBg from "@public/images/LoginPage/customizeaccountbg.svg"
import userimg from "@public/images/LoginPage/userimg.svg"
import { useRouter } from "next/navigation"
import {  useState, useEffect } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { BannerImage } from "../BannerImage"
import { BackButton } from "../BackButton"
import InlineError from "@modules/common/components/inline-error"
import UpdateProfileModal from "@modules/profile-modal";

interface CustomizeAccountCredentials extends FieldValues {
  displayName: string
  userName: string
}

const CustomizeAccount = () => {
  const { refetchCustomer } = useAccount()
  const router = useRouter()
  const customerData = JSON.parse(localStorage.getItem("customer") || "{}")
  // const {isSubmit,setIsSubmit} = useState(false)
  const [isSubmit, setIsSubmit] = useState(false);
  const [userName, setUserName] = useState(customerData?.metadata?.user_name);
  const [displayName, setDisplayName] = useState(customerData.first_name );
  const [hasProfile, setHasProfile] = useState(false);

  // console.log(customerData)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CustomizeAccountCredentials>()

  const {
    mutate: update,
    isLoading,
    isSuccess,
    isError,
    reset: clearState,
  } = useUpdateMe()

  useEffect(() => {
    document.addEventListener('user:profile:updated', setProfileStatus);
    return () => document.removeEventListener('user:profile:updated', setProfileStatus);
  }, []);

  const setProfileStatus = (event) => {
    // console.log(event)
    setHasProfile(event?.detail?.has_profile);
  }

  const onSubmit = handleSubmit(async (credentials) => {
    setIsSubmit(true)
    update(
      {
        id: customerData.id,
        first_name: credentials?.firstname,
        last_name: credentials?.lastname,
        metadata: {
          ...customerData.metadata,
          // display_name: credentials?.displayName,
          // user_name: credentials?.userName,
          profileStatus: 3,
          profile_image : hasProfile
        },
      },
      {
        onSuccess: async () => {
          const response = await refetchCustomer()
          localStorage.setItem(
            "customer",
            JSON.stringify(response?.data?.customer)
          )
          router.push("/account/country-select")
        },
        onError: () => {
          console.log("error")
        },
      }
    )
  })

  return (
    <div className="bg-white h-screen">
      <div className="flex justify-center h-screen">
        <BannerImage src={customizeAccountBg} />
        <div className="flex items-center  w-full max-w-md px-6 mx-auto lg:w-2/6 ">
          <BackButton />
          <div className="flex-1 items-center">
            <div className="text-center items-center">
              <p className="mt-3 text-[#015464] font-black text-3xl">
                Customize Account
              </p>
              <p className="py-3 text-[11px] opacity-30">
                This Information will be displayed on your public profile
              </p>
              <div className=" h-[1px] w-full bg-[#E0E7FF] rounded"></div>
              <Image
                src={userimg}
                alt="otp"
                className="object-cover user-profile-image bg-[#7CC9B5] rounded-full w-32 h-32 my-3 mx-auto "
                width={30}
                height={30}
              />
              <UpdateProfileModal customer={customerData} reload={false}/>
              {/*<p className="mt-3 text-[#015464] font-black  text-2xl">
                Display Name
              </p>*/}
              <p className="mt-3 text-[#015464]  text-sm opacity-50">
                {/*@{customerData.metadata ? customerData?.metadata?.user_name : "Username"}*/}
              </p>
            </div>

            <div className="mt-2">
              <form onSubmit={onSubmit}>
                {/*<div className="my-6">
                  <label
                    htmlFor="displayName"
                    className="block mb-2 text-sm  text-[#408080] "
                  >
                    Display Name
                  </label>
                  <input
                    type="text"
                    id="displayName"
                    {...register("displayName", {
                      required: "Please enter display name",
                    })}
                    onInput={(e) => setDisplayName( e.target.value)}
                    // value={"selva"}
                    value={displayName}
                    placeholder="Display Name"
                    className="block w-full text-sm  px-4 py-2 mt-2 text-gray-700 placeholder-[#2E384D] bg-[#f4f7ff] border border-gray-200 rounded-lg placeholder:opacity-30 outline-none "
                  />
                  {errors.displayName && (
                    <InlineError errors={errors} property="displayName" />
                  )}
                </div>*/}
                <div className="my-6">
                  <label
                    htmlFor="firstname"
                    className="block mb-2 text-sm  text-[#408080] "
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    {...register("firstname", {
                      required: "Please enter firstname name",
                    })}
                    // value={"selva"}
                    placeholder="First Name"
                    className="block w-full text-sm  px-4 py-2 mt-2 text-gray-700 placeholder-[#2E384D] bg-[#f4f7ff] border border-gray-200 rounded-lg placeholder:opacity-30 outline-none "
                  />
                  {errors.firstname && (
                    <InlineError errors={errors} property="firstname" />
                  )}
                </div>
                <div className="my-6">
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm  text-[#408080] "
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    {...register("lastname", {
                      required: "Please enter last name",
                    })}
                    // value={"selva"}
                    placeholder="Last Name"
                    className="block w-full text-sm  px-4 py-2 mt-2 text-gray-700 placeholder-[#2E384D] bg-[#f4f7ff] border border-gray-200 rounded-lg placeholder:opacity-30 outline-none "
                  />
                  {errors.lastname && (
                    <InlineError errors={errors} property="lastname" />
                  )}
                </div>
                {/*<div>
                  <label
                    htmlFor="userName"
                    className="block mb-2 text-sm text-[#408080]"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    id="userName"
                    {...register("userName", {
                      required: "Please enter user name",
                    })}
                    onInput={(e) => setUserName( e.target.value)}
                    value={userName}
                    placeholder="User Name"
                    className="block w-full text-sm  px-4 py-2 mt-2 text-gray-700 placeholder-[#2E384D] bg-[#f4f7ff] border border-gray-200 placeholder:opacity-30 rounded-lg outline-none"
                  />
                  {errors.userName && (
                    <InlineError errors={errors} property="userName" />
                  )}
                </div>*/}

                <div className="mt-6">
                  {/* <Link href="/account/country-select"> */}
                  <button
                    type="submit"
                    className="w-full px-2 py-2  tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 "
                  >
                    {isSubmit ? (
                      <div className=" flex justify-center ">
                        <Spinner />
                      </div>
                    ) : (
                      "Next"
                    )}
                  </button>
                  {/* </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomizeAccount
