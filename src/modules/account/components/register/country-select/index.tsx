// @ts-nocheck
"use client"
import { medusaClient } from "@lib/config"
import Image from "next/image"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Spinner from "@modules/common/icons/spinner"
import Select from "react-select"
import selectCountryBg from "@public/images/LoginPage/selectcountrybg.svg"
import mapImg from "@public/images/LoginPage/mapimg.png"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { BannerImage } from "../BannerImage"
import { BackButton } from "../BackButton"
import { useUpdateMe } from "medusa-react"
import InlineError from "@modules/common/components/inline-error"
import useCountryOptions from "@lib/hooks/use-country-options"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const CountrySelect = () => {
  const { refetchCustomer } = useAccount()
  const router = useRouter()
  const [selectedCountry, setSelectedCountry] = useState(null)
  const customerData = JSON.parse(localStorage.getItem("customer") || "{}")
  const [formError, setFormError] = useState({})
  const countries = useCountryOptions()
  console.log(countries)

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption)
  }

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCredentials>()

  const {
    mutate: update,
    isLoading,
    isSuccess,
    isError,
    reset: clearState,
  } = useUpdateMe()

  const onSubmit = handleSubmit(async (credentials) => {
    if (!selectedCountry) {
      setFormError({ country: { message: "Please select a country" } })
      return
    }
    setFormError({})
    update(
      {
        id: customerData.id,
        metadata: {
          ...customerData.metadata,
          country: selectedCountry.label,
          profileStatus: 4,
        },
      },
      {
        onSuccess: async () => {
          const response = await refetchCustomer()
          localStorage.setItem(
            "customer",
            JSON.stringify(response?.data?.customer)
          )
          router.push("/account/choose-book-to-read")
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
        <BannerImage src={selectCountryBg} />
        <div className="flex items-center  w-full max-w-md px-6 mx-auto lg:w-2/6 ">
          <BackButton />
          <div className="flex-1 items-center">
            <div className="bg-[#6dd1b4] items-center py-2 rounded text-[14px] text-center text-white opacity-[0.8]">
              You can read up to 5 books.
            </div>
            <div className="text-center items-center">
              <Image
                src={mapImg}
                alt="otp"
                className=" my-3 mx-auto "
                width={250}
                height={0}
              />
              <p className="mt-3 text-[#015464] font-graphikBold text-2xl">
                Select Your Country
              </p>
              <p className="py-3 text-[#015364de] text-[11px] ">
                உங்கள் நாட்டினை தேர்வு செய்யவும்
              </p>
            </div>
            <div className="mt-4 h-1 w-full bg-[#E0E7FF] opacity-20 rounded"></div>
            <div className="mt-3">
              <form onSubmit={onSubmit}>
                <div className="my-2">
                <select
                  id="country"
                  name="country"
                  onChange={handleCountryChange}
                  // {...register("country")}
                  className="pt-2 pb-2 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
                >
                  <option value="">Select your country</option> 
                  {countries && countries.map((country) => (
                    <option value={country.code} key={country.code} {...selectedCountry == country.code ? "selected" : "" } >{country.label}  </option>
                  ))}
                
                </select>
                  {/* <Select
                    id="country"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    options={countries}
                    maxMenuHeight={80}
                    placeholder="Select a country"
                    className="text-[12px]"
                  /> */}
                </div>
                {formError?.country && (
                  <InlineError errors={formError} property="country" />
                )}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90"
                  >
                    {isSubmitting ? (
                      <div className="flex justify-center">
                        <Spinner />
                      </div>
                    ) : (
                      "Next"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountrySelect

const countryOptions = [
  { value: "us", label: "	Albania" },
  { value: "us", label: "	Bangladesh" },
  { value: "us", label: "	Barbados" },
  { value: "us", label: "	Belarus" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "ru", label: "Russian Federation" },
  { value: "rw", label: "Rwanda" },
  { value: "bl", label: "Saint Barthélemy" },
  { value: "sh", label: "Saint Helena, Ascension and Tristan da Cunha" },
  { value: "kn", label: "Saint Kitts and Nevis" },
  { value: "lc", label: "Saint Lucia" },
  { value: "mf", label: "Saint Martin (French part)" },
  { value: "pm", label: "Saint Pierre and Miquelon" },
  { value: "vc", label: "Saint Vincent and the Grenadines" },
  { value: "ws", label: "Samoa" },
  { value: "ws", label: "India" },
  { value: "us", label: "United States" },
]
