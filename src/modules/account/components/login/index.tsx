import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Spinner from "@modules/common/icons/spinner"
import loginBanner from "@public/images/LoginPage/login-object.png"
import logo from "@modules/common/icons/eNOOL_Logo.svg"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import Image from "next/image"
import { BannerImage } from "../register/BannerImage"
import { BackButton } from "../register/BackButton"
import { useMeCustomer } from "medusa-react"
import InlineError from "@modules/common/components/inline-error"
import { env } from "process"

interface SignInCredentials extends FieldValues {
  email: string
  password: string
}

const Login = () => {
  const { customer } = useMeCustomer()
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (_e: Error) => {
    setAuthError("Invalid email or password")
  }
  const { handleLogout } = useAccount()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.auth
      .authenticate(credentials)
      .then((res) => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="">
      <div className="flex justify-center h-screen">
        <BannerImage
          src={loginBanner}
          className="object-cover hidden lg:block lg:w-1/2 h-screen"
        />
        <div className="flex items-center w-full max-w-md  mx-auto lg:w-2/6 container">
          <BackButton />
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <Image
                  className="w-auto h-7 sm:h-8"
                  src={logo}
                  alt="E-Nool logo"
                  width={50}
                  height={50}
                />
              </div>
              <p className="mt-3 text-[#015464] font-black text-2xl">
                {!customer ? "Log in to eNOOL" : "User already logged in"}
              </p>
            </div>

            <div className="mt-4 h-[2px] w-full bg-[#E0E7FF] rounded"></div>
            {!customer ? (
              <div className="mt-8">
                <form onSubmit={onSubmit} className="mx-5 md:mx-[auto]">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-[14px]  text-[#408080] "
                    >
                      Email ID
                    </label>
                    <Input
                      label="Email"
                      {...register("email", { required: "Email is required" })}
                      autoComplete="email"
                      errors={errors}
                    />
                    {errors.email && (
                      <InlineError errors={errors} property="email" />
                    )}
                  </div>
                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-[14px]  text-[#408080]"
                      >
                        Password
                      </label>
                    </div>
                    <div className="relative">
                      <Input
                        label="Password"
                        {...register("password", {
                          required: "Password is required",
                        })}
                        type="password"
                        autoComplete="current-password"
                        errors={errors}
                      />
                      {authError && (
                        <div>
                          <span className="text-rose-500 w-full text-small-regular">
                            These credentials do not match our records
                          </span>
                        </div>
                      )}
                    </div>
                    {errors.password && (
                      <InlineError errors={errors} property="password" />
                    )}
                    <Link
                      href="/account/password-reset"
                      className=" text-[12px]  text-[#408080] focus:text-blue-500 hover:text-[#408080] hover:underline"
                    >
                      <br></br>
                      Forgot password?
                    </Link>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full px-4 py-2 tracking-wide text-[12px] text-white transition-colors duration-300 transform bg-primary rounded hover:bg-[#408080]/90 ">
                      {isSubmitting ? <Spinner /> : "Start learning"}
                    </Button>
                  </div>
                  {/*<p className="mt-6 text-[12px] text-center text-gray-400">
                    Or Log In Using
                  </p>
                  <div className="mt-6 justify-center">
                    <a href={`${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/auth/google`}
                      type="button"
                      className="text-white w-full bg-[#F2403F] hover:bg-[#F2403F]/90  font-medium rounded text-sm px-28 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="google"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 488 512"
                      >
                        <path
                          fill="currentColor"
                          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                        ></path>
                      </svg>
                      <span>Gmail</span>
                    </a>
                  </div>*/}
                </form>

                <p className="mt-6 text-[12px] text-center text-gray-400">
                  Don't have an eNOOL Account yet?{" "}
                  <Link href="/account/register">
                    <button className="text-[#408080] focus:outline-none focus:underline hover:underline font-bold">
                      Sign up
                    </button>
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <div className="mt-10 flex flex-row justify-center">
                <Link href="/account">
                  <button className=" px-4 py-2 tracking-wide text-[16px] text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 ">
                    My Account
                  </button>
                </Link>
                <button
                  type="button"
                  className="ml-7 px-4 py-2 tracking-wide text-[16px] text-white transition-colors duration-300 transform bg-[#F2403F] hover:bg-[#F2403F]/90 rounded"
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
