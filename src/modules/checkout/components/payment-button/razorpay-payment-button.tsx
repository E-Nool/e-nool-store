// @ts-nocheck
import Button from "@modules/common/components/button"
import Spinner from "@modules/common/icons/spinner"
import { Cart,PaymentSession } from "@medusajs/medusa"
// import Spinner from "@modules/common/icons/spinner"
import React, { useCallback, useState } from "react"
import useRazorpay, { RazorpayOptions } from "react-razorpay"
import { useCheckout } from "@lib/context/checkout-context"
import logo from "@modules/common/icons/eNOOL_Logo.svg";

export const RazorpayPaymentButton = ({
  session,
  notReady,
  cart
}: {
  session: PaymentSession
  notReady: boolean
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
}) => {
  const [disabled, setDisabled] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)
  const [Razorpay] = useRazorpay();

  const orderData = session.data as Record<string, string>
  // const onPaymentCompleted = async () => {
  //   await placeOrder().catch(() => {
  //     setErrorMessage("An error occurred, please try again.")
  //     setSubmitting(false)
  //   })
  // }

  // console.log(cart)

  const { onPaymentCompleted } = useCheckout()

  // console.log(logo)


  const handlePayment = useCallback(() => {
    const options: RazorpayOptions = {
      callback_url: `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/razorpay/hooks`,
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY ?? '',
      amount: session.amount.toString(),
      order_id: orderData.id,
      currency: cart.region.currency_code.toLocaleUpperCase(),
      name: process.env.COMPANY_NAME ?? "Enool",
      description: `Order number ${orderData.id}`,

      image: logo?.src,
      modal: {
        backdropclose: true,
        escape: true,
        handleback: true,
        confirm_close: true,
        ondismiss: () => {
          setSubmitting(false)
        },
        animation: true,
      },
      handler: async (args) => {
        onPaymentCompleted()
      },
      "prefill": {
        "name": cart?.billing_address.first_name + " " + cart?.billing_address.last_name,
        "email": cart?.email,
        "contact": (cart?.shipping_address?.phone) ?? undefined
      },
      "notes": {
        "address": cart?.billing_address,
        "order_notes": session.data.notes
      },
      
    };

    const razorpay = new Razorpay(options);
    razorpay.open();
    razorpay.on("payment.failed", function (response: any) {
      setErrorMessage(JSON.stringify(response.error))
    })
    razorpay.on("payment.authorized", function (response: any) {
      onPaymentCompleted();
    })
    razorpay.on("payment.captured", function (response: any) {
      onPaymentCompleted();
    })
  }, [Razorpay, cart]);
  return (
    <>
      <Button
        disabled={submitting || notReady}
        onClick={handlePayment}
        className="bg-[#fff] !text-[#015646]"
      >
        {submitting ? <Spinner /> : "Checkout"}
      </Button>
      {errorMessage && (
        <div className="text-red-500 text-small-regular mt-2">
          {errorMessage}
        </div>
      )}
    </>
  )
}