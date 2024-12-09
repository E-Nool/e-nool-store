// @ts-nocheck
"use client"
import { medusaClient } from "@lib/config"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useAccount } from "@lib/context/account-context"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import Spinner from "@modules/common/icons/spinner"
import signUpBg from "@public/images/LoginPage/signup1bg.png"
import loginEye from "@public/images/LoginPage/logineye.svg"
import loginEyeClosed from "@public/images/LoginPage/logineyeclosed.svg"
import girlImage from "@public/images/reg-g-image.png"
import waveImage from "@public/images/reg-wave.png"
import Link from "next/link"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { BackButton } from "./BackButton"
import { BannerImage } from "./BannerImage"
import InlineError from "@modules/common/components/inline-error"
import countries from "@public/countries.json"
import {checkUserName} from "@lib/util/customer_api"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { refetchCustomer } = useAccount()
  const router = useRouter()
  const [isChecked, setIsChecked] = useState(false)
  const [authError, setAuthError] = useState<string | undefined>(undefined)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (data) => {

    const credentials = {
      first_name: data.user_name,
      last_name: data.user_name,
      email: data.email,
      password: data.password,
      phone: data.country + " " + data.phone,
      user_name: data.user_name,
    }

    // Check the user availability
    const uname = credentials?.user_name;
    const res = await checkUserName(uname)
    if(res.status && !res?.available){
      setError('user_name', {
        type: 'manual',
        message: 'The user name is already taken',
      });
      return;
    }

    await medusaClient.customers
      .create(credentials)
      .then(({ customer }) => {
        localStorage.setItem("customer", JSON.stringify(customer))
        let data = refetchCustomer()
        setAuthError(undefined)
        router.push("/account/get-otp")
      })
      .catch((err) => {
        console.log(err)
        if (err.response.data.type == "duplicate_error") {
          setAuthError(err.response.data.message)
        }
      })
  })

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  const PersonalDetailsFormProps = {
    onSubmit,
    register,
    errors,
    isChecked,
    handleCheckboxChange,
    authError,
    isSubmitting,
  }

  return (
    <div className="bg-white h-screen xl:h-full">
      <div className="flex justify-center h-full">
        <BannerImage src={signUpBg} style={{height : "100%"}}/>
        {/*<div className="object-cover hidden lg:block lg:w-1/2 h-screen bg-[#005364]">
          <div className="h-full grid justify-items-center">
            <Image
              className="w-[73%] self-end"
              src={girlImage}
              alt="Girl Image"
              width={1200}
              height={720}
            />
            <div className="grid grid-cols-1 items-center pt-[50px]">
              <div className="grid grid-cols-5 items-start">
                <div className="reg-progress-bullet">
                  <div className="flex items-center">
                    <div className="w-full h-[4px] bg-transparent"></div>
                    <div className="h-[30px] w-[30px] rounded-full shrink-0 bg-[#6DD5B7] text-[#005364] flex justify-center items-center">1</div>
                    <div className="w-full h-[4px] bg-[#277084]"></div>
                  </div>
                  <p className="px-3 text-[#6DD5B7] text-center">Personal Info</p>
                </div>
                <div className="reg-progress-bullet">
                  <div className="flex items-center">
                    <div className="w-full h-[4px] bg-[#277084]"></div>
                    <div className="h-[30px] w-[30px] rounded-full shrink-0 bg-[#277084] text-[#005364] flex justify-center items-center">2</div>
                    <div className="w-full h-[4px] bg-[#277084]"></div>
                  </div>
                  <p className="px-3 text-[#277084] text-center">Verify OTP</p>
                </div>
                <div className="reg-progress-bullet">
                  <div className="flex items-center">
                    <div className="w-full h-[4px] bg-[#277084]"></div>
                    <div className="h-[30px] w-[30px] rounded-full shrink-0 bg-[#277084] text-[#005364] flex justify-center items-center">3</div>
                    <div className="w-full h-[4px] bg-[#277084]"></div>
                  </div>
                  <p className="px-3 text-[#277084] text-center">Create DP</p>
                </div>
                <div className="reg-progress-bullet">
                  <div className="flex items-center">
                    <div className="w-full h-[4px] bg-[#277084]"></div>
                    <div className="h-[30px] w-[30px] rounded-full shrink-0 bg-[#277084] text-[#005364] flex justify-center items-center">4</div>
                    <div className="w-full h-[4px] bg-[#277084]"></div>
                  </div>
                  <p className="px-3 text-[#277084] text-center">Select Country</p>
                </div>
                <div className="reg-progress-bullet">
                  <div className="flex items-center">
                    <div className="w-full h-[4px] bg-[#277084]"></div>
                    <div className="h-[30px] w-[30px] rounded-full shrink-0 bg-[#277084] text-[#005364] flex justify-center items-center">5</div>
                    <div className="w-full h-[4px] bg-transparent"></div>
                  </div>
                  <p className="px-3 text-[#277084] text-center">Choose Book to Read</p>
                </div>
              </div>
            </div>
            <Image
              className="w-full self-end"
              src={waveImage}
              alt="Wave Image"
              width={1200}
              height={720}
            />
          </div>
          
        </div>*/}
        <div className="flex items-center w-full max-w-md px-2 mx-auto lg:w-2/6">
          <BackButton />
          <div className="flex-1">
            <div className="text-center mt-[200px] md:mt-[0]">
              <p className="mt-3 text-[#015464] font-black text-4xl">
                Sign Up To eNOOL
              </p>
            </div>
            <div className="mt-4 h-1 w-full bg-[#E0E7FF] opacity-20 rounded"></div>
            <div className="mt-8">
              <PersonalDetailsForm {...PersonalDetailsFormProps} />
              <p className="mt-4 text-[14px] text-center text-gray-400">
                Already Have An eNOOL Account{" "}
                <Link href="/account/login">
                  <button className="text-[#408080] focus:outline-none font-bold focus:underline hover:underline">
                    Sign In
                  </button>
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

const PersonalDetailsForm = (props: any) => {
  const {
    onSubmit,
    register,
    errors,
    isChecked,
    handleCheckboxChange,
    authError,
    isSubmitting,
  } = props
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleTogglePassword = (type) => {
    if (type === "password") {
      setShowPassword((prevShowPassword) => !prevShowPassword)
    } else {
      setShowConfirmPassword(
        (prevShowConfirmPassword) => !prevShowConfirmPassword
      )
    }
  }

  const handlePhoneChange = event => {
    const result = event.target.value.replace(/\D/g, '');

    setPhone(result);
  };

  const passwordCaseCheck = event => {
    const psw = event.target.value;
    setPasswordError()    
    setPassword(psw)
    if(psw.length !=0 ){
      if (psw.length < 6) {
        setPasswordError("Your password needs a minimum of six characters")
      } else if (psw.search(/[a-z]/) < 0) {
        setPasswordError("Your password needs a lower case letter")
      } else if(psw.search(/[A-Z]/) < 0) {
        setPasswordError("Your password needs an upper case letter")
      } else if (psw.search(/[0-9]/) < 0) {
        setPasswordError("Your password needs a number")
      } else {
        // setPassword(psw)
      }    
    }
  };


  const passwordCompare = event => {
    const con_psw = event.target.value;
    if(password != con_psw){
      setConfirmPasswordError("Password and confirmation password are matching")
    }else{
      setConfirmPasswordError("")
    }
  }

  return (
    <form onSubmit={onSubmit} className="px-10">
      {/* User Name */}
      <div>
        <label
          htmlFor="user_name"
          className="block mb-2 text-[14px]  text-[#408080] "
        >
          Username
        </label>
        <div className="relative">
          <input
          required
            type="text"
            name="user_name"
            id="user_name"
            {...register("user_name", {
              required: "Please enter User Name",
              pattern: {
                value: /^[A-Za-z0-9\s]+$/,
                message: "Please enter valid user name",
              },
            })}
            placeholder="example"
            className="pt-2 pb-2 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
          />
        </div>
        {errors.user_name && <InlineError errors={errors} property="user_name" />}
      </div>

      {/* email ID */}
      <div className="mt-6">
        <label
          htmlFor="email"
          className="block mb-2 text-[14px]  text-[#408080] "
        >
          Email ID
        </label>
        <div className="relative">
          
          <input
          required
            type="email"
            name="email"
            id="email"
            {...register("email", {
              required: "Please enter email ID",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Please enter valid email ID",
              },
            })}
            placeholder="example@example.com"
            className="pt-2 pb-2 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
          />
        </div>
        {errors.email && <InlineError errors={errors} property="email" />}
      </div>

      {/* password */}
      <div className="mt-6">
        <div className="flex justify-between">
          <label
            htmlFor="password"
            className="block mb-2 text-[14px]  text-[#408080]"
          >
            Create New Password
          </label>
        </div>
        <div className="relative">
          
          <input          
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            onInput={(e) => {
              passwordCaseCheck(e);
            }} 
            placeholder="Your New Password"
            required
            {...register("password", { required: "Please enter password" })}
            className="pt-2 pb-2 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
          />  
          {/* <input          
            type="hidden"
            name="password"
            id="password"
            value={password}
            {...register("password", { required: "Please enter password" })}
          /> */}
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            onClick={() => handleTogglePassword("password")}
          >
            <Image
              src={showPassword ? loginEye : loginEyeClosed}
              alt={showPassword ? "Hide Password" : "Show Password"}
              fill={true}
            />
          </button>
        </div>
        {errors.password && <InlineError errors={errors} property="password" />}
        {passwordError && <p className="mt-2 text-[#FF7C7C] text-xs"> {passwordError} </p> }       
      </div>

      {/* confirm password */}
      <div className="mt-6">
        <div className="flex justify-between">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-[14px]  text-[#408080]"
          >
            Confirm New Password
          </label>
        </div>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            id="password"
            required
            onInput={(e) => {
              passwordCompare(e);
            }}
            placeholder="Confirm New Password"
            {...register("confirmPassword", {
              required: "Please enter confirm password",
            })}
            className="pt-2 pb-2 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
          />
          
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            onClick={handleTogglePassword}
          >
            <Image
              src={showConfirmPassword ? loginEye : loginEyeClosed}
              alt={
                showConfirmPassword
                  ? "Hide Confirm Password"
                  : "Show Confirm Password"
              }
              fill={true}
            />
          </button>
        </div>
        {errors.confirmPassword && (
          <InlineError errors={errors} property="confirmPassword" />
        )}
        {confirmPasswordError && <p className="mt-2 text-[#FF7C7C] text-xs"> {confirmPasswordError} </p> }

      </div>

      {/* phone number */}
      <div>
        <label
          htmlFor="phoneNumber"
          className="block mt-6  text-[14px]  text-[#408080] "
        >
          Phone Number
        </label>


        <div className="relative mt-2.5">
          <div className="absolute inset-y-0 left-0 flex items-center w-[25%]">
            <label htmlFor="country" className="sr-only">
              Country
            </label>
            <select
              id="country"
              name="country"
              {...register("country")}
              className="pt-2 pb-2 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
            >
              {countries.map((country) => (
                <option value={country.dial_code} key={country.dial_code}>{country.dial_code}  </option>
              ))}
             
            </select>
            <ChevronDownIcon
              className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            name="phone"
            id="phone"
            required
            {...register("phone", {
              required: "Please enter phone number",
            })}
            value={phone}
            onChange= {handlePhoneChange}
            placeholder="Phone number"
            className="w-[75%] ml-[25%] pt-2 pb-2 block px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
          />
        </div>
        {errors.phone && <InlineError errors={errors} property="phone" />}
      </div>

      <p className="text-[#408080] text-[10px] pt-3">
        By signing up you agree to our{" "}
        <a
          href="#"
          className="text-[#408080] focus:outline-none focus:underline hover:underline"
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          href="#"
          className="text-[#408080] focus:outline-none focus:underline hover:underline"
        >
          Privacy Policy
        </a>
      </p>

      <div className="mt-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 form-checkbox text-[#408080] border-[#408080] rounded "
            onChange={handleCheckboxChange}
            checked={isChecked}
          />
          <span className="text-[#408080] text-[10px]">
            Receive occasional marketing emails from eNOOL (optional)
          </span>
        </label>
      </div>
      {authError && (
        <div>
          <span className="text-rose-500 w-full text-xs">{authError}</span>
        </div>
      )}
      <div className="mt-4">
        <button
          className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 text-[14px]"
          type="submit"
        >
          {isSubmitting ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : (
            "Get Code"
          )}
        </button>
      </div>
    </form>
  )
}
