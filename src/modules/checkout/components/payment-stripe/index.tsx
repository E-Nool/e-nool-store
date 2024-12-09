import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js"
import {
  StripeCardCvcElementOptions,
  StripeCardExpiryElementOptions,
  StripeCardNumberElementOptions,
} from "@stripe/stripe-js"
import React, { useMemo } from "react"

const PaymentStripe: React.FC = () => {
  const useOptions:
    | StripeCardNumberElementOptions
    | StripeCardExpiryElementOptions
    | StripeCardCvcElementOptions = useMemo(() => {
    return {
      style: {
        base: {
          fontFamily: "Inter, sans-serif",
          color: "#fff",
          padding: "10px 12px",
          "::placeholder": {
            color: "#CFD7E0",
          },
        },
      },
    }
  }, [])

  return (
    <div>
      <div className="flex flex-col relative w-full pb-6 text-white">
        <CardNumber options={useOptions as StripeCardNumberElementOptions} />
        <div className="flex items-center mt-12 relative gap-x-4">
          <CardExpiry options={useOptions as StripeCardExpiryElementOptions} />
          <CardCVC options={useOptions as StripeCardCvcElementOptions} />
        </div>
      </div>
    </div>
  )
}

const CardNumber = ({
  options,
}: {
  options: StripeCardNumberElementOptions
}) => {
  return (
    <div className="border-b border-gray-200 py-2 text-white relative">
      <span className="absolute -top-6  font-graphikBold">
        Card number
      </span>
      <CardNumberElement className="text-white" options={options} />
    </div>
  )
}

const CardExpiry = ({
  options,
}: {
  options: StripeCardExpiryElementOptions
}) => {
  return (
    <div className="border-b border-gray-200 w-full py-2 relative">
      <span className="absolute -top-6  text-white font-graphikBold">
        Expiration date
      </span>
      <CardExpiryElement options={options} />
    </div>
  )
}

const CardCVC = ({ options }: { options: StripeCardCvcElementOptions }) => {
  return (
    <div className="border-b border-gray-200 w-full py-2 relative">
      <span className="absolute -top-6  text-white font-graphikBold">
        CVC
      </span>
      <CardCvcElement options={{ ...options, placeholder: "123" }} />
    </div>
  )
}

export default PaymentStripe
