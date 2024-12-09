// @ts-nocheck
"use client";
import Image from "next/image";
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context";
import Spinner from "@modules/common/icons/spinner";
import otp from "@public/images/LoginPage/Otp.svg";
import correct from "@public/images/LoginPage/correct.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { BannerImage } from "../BannerImage";
import { BackButton } from "../BackButton";
import { useUpdateMe } from "medusa-react";
import {sendOtp, validateOtp} from '@lib/util/otp';
// import { useMeCustomer } from "medusa-react"

interface RegisterCredentials extends FieldValues {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone?: string;
}

const GetOtp = () => {
  const { loginView, refetchCustomer } = useAccount();
  const [_, setCurrentView] = loginView;
  const [authError, setAuthError] = useState<string | undefined>(undefined);
  const router = useRouter();
  const timer = 30;
  const [countdown, setCountdown] = useState(0);
  const [otpError, setOtpError] = useState();
  const [submitting, setSubmitting] = useState(false);
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [isCountdownZero, setIsCountdownZero] = useState(false);
  const customerData = JSON.parse(
    window.localStorage.getItem("customer") || "{}"
  );

  const decrementTimer = () => {
    if (countdown > 0) {
      setCountdown(countdown - 1);
    }
  };

  // Send otp
  async function sendMobileOtp(resend = false){
    const res = await sendOtp(customerData.id, resend, true);
    if(res.status){
      setIsCountdownZero(false);
      setCountdown(timer);
    }else{
      // OTP Error
      setOtpError('Please resend after 5 minutes.');
      setIsCountdownZero(true);
      setCountdown(0);
    }
  }

  // Validate Mobile OTP
  async function validateMobileOtp(otp = ''){
    return validateOtp(customerData.id, otp);
  }

  // Send OTP on intial render
  useEffect(() => {
    (async function(){
      if(customerData && customerData.id){
        await sendMobileOtp();
      }
    })();
  }, [])

  useEffect(() => {
    // Start the countdown timer when the component mounts
    const timerInterval = setInterval(decrementTimer, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timerInterval);
  }, [countdown]);

  useEffect(() => {
    if (countdown === 0) {
      setIsCountdownZero(true);
    }
  }, [countdown]);

  const handleError = (e: Error) => {
    setAuthError("An error occured. Please try again.");
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCredentials>();
  const {
    mutate: update,
    isLoading,
    isSuccess,
    isError,
    reset: clearState,
  } = useUpdateMe();

  const onSubmit = handleSubmit(async (credentials) => {
    setSubmitting(true);
    setOtpError(null);
    // await medusaClient.customers
    //   .create(credentials)
    //   .then(() => {
    //     refetchCustomer()
    //     router.push("/account")
    //   })
    //   .catch(handleError)
    const otp = otpValues.join('');
    if (otp.length === 4) {
      const res = await validateMobileOtp(otp);
      // console.log(res);
      if(res.status && res.verified){
        update(
        {
          id: customerData.id,
          metadata: {
            ...customerData.metadata,
            profileStatus: 2,
          },
        },
        {
          onSuccess: async () => {
            const response = await refetchCustomer();
            localStorage.setItem(
              "customer",
              JSON.stringify(response?.data?.customer)
            );
            router.push("/account/customize-account");
          },
          onError: () => {
            console.log("error");
          },
        }
      );
      }else{
        setSubmitting(false);
        setOtpError(res.message);
      }
      /*update(
        {
          id: customerData.id,
          metadata: {
            ...customerData.metadata,
            profileStatus: 2,
          },
        },
        {
          onSuccess: async () => {
            const response = await refetchCustomer();
            localStorage.setItem(
              "customer",
              JSON.stringify(response?.data?.customer)
            );
            router.push("/account/customize-account");
          },
          onError: () => {
            console.log("error");
          },
        }
      );*/
      // router.push("/account/customize-account")
    }else{
      setOtpError("Invalid OTP");
      setSubmitting(false);
    }
  });

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (value.length === 1 && index < otpValues.length - 1) {
      inputRefs?.[index + 1]?.current.focus();
    }
  };

  return (
    <div className="bg-white h-screen">
      <div className="flex justify-center h-screen">
        <BannerImage src={otp} />
        <div className="flex items-center  w-full max-w-md px-6 mx-auto lg:w-2/6 ">
          <BackButton />
          <div className="flex-1 items-center">
            <div className="text-center items-center">
              <p className="mt-3 text-[#015464] font-bold  text-3xl">
                OTP Verification
              </p>
              <Image
                src={correct}
                alt="otp"
                className="w-16 h-16 my-4 mx-auto "
                width={16}
                height={16}
              />
              <h3 className="pt-10">Enter a 4 Digit Number That </h3>
              <h3 className="pt-1">
                Was Sent To{" "}
                <span className="font-black">{customerData?.email}</span>{" "}
              </h3>
            </div>
            <div className="mt-4 h-1 w-full bg-[#E0E7FF] opacity-20 rounded"></div>
            <div className="mt-8">
              <form onSubmit={onSubmit}>
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  {otpValues.map((value, index) => (
                    <div className="w-16 h-16 " key={index}>
                      <input
                        className="w-full h-full flex flex-row items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#408080]"
                        type="text"
                        maxLength={1}
                        inputMode="numeric"
                        value={value}
                        onChange={(e) => handleOtpChange(e, index)}
                        ref={inputRefs[index]}
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-center text-gray-400">
                  {isCountdownZero ? (
                    <button
                      type="button"
                      className="text-[#408080] font-bold focus:outline-none focus:underline hover:underline"
                      onClick={() => {
                        sendMobileOtp(true);
                      }}
                    >
                      Resend Code
                    </button>
                  ) : (
                    <a
                      className={`text-[#4080803b] font-bold focus:outline-none focus:underline hover:underline`}
                    >
                      {isCountdownZero
                        ? "Resend Code"
                        : `Resend Code in ${
                            countdown < 10 ? "0" : ""
                          }${countdown}`}
                    </a>
                  )}
                </p>
                <div className="mt-6">
                  {/*<Link href="/account/customize-account">*/}
                  <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 ">
                    {submitting ? (
                      <div className=" flex justify-center ">
                        <Spinner />
                      </div>
                    ) : (
                      "Next"
                    )}
                  </button>
                  <p className="text-[#c80a0a] text-center">{otpError}</p>
                  {/*</Link>*/}
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                Already Have An eNOOL Account{" "}
                <Link href="/account/login">
                  <button className="text-[#408080] font-bold focus:outline-none focus:underline hover:underline">
                    Sign In
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetOtp;
