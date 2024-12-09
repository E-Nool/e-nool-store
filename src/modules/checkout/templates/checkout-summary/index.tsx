"use client"

import DiscountCode from "@modules/checkout/components/discount-code"
import GiftCard from "@modules/checkout/components/gift-card"
import PaymentButton from "@modules/checkout/components/payment-button"
import CartTotals from "@modules/common/components/cart-totals"
import { useCart } from "medusa-react"

const CheckoutSummary = () => {
  const { cart } = useCart()

  if (!cart?.id) {
    return null
  }

  // console.log(cart)

  return (
    <div className="sticky top-0 flex flex-col small:flex-col gap-y-8">
      <div className="p-6 bg-[#015464] text-white rounded-2xl">
        <DiscountCode cart={cart} />
      </div>
      {/* <GiftCard cart={cart} /> */}
      <div className="w-full bg-[#015464] p-6 flex flex-col gap-y-6 text-white rounded-2xl">
        <CartTotals cart={cart} />
        <PaymentButton paymentSession={cart?.payment_session} />
      </div>
      
    </div>
  )
}

export default CheckoutSummary
