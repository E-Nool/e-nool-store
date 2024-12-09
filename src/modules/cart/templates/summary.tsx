import { Cart } from "@medusajs/medusa"
import Button from "@modules/common/components/button"
import CartTotals from "@modules/common/components/cart-totals"
import Link from "next/link"
import { useAccount } from "@lib/context/account-context"

type SummaryProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
}

const Summary = ({ cart }: SummaryProps) => {
  const { customer } = useAccount()

  return (
    <div className="grid grid-cols-1 gap-y-6">
      <CartTotals cart={cart} />
      {
        customer
          ? <Link href="/checkout">
              <Button className="font-graphikBold inline-flex items-center justify-center rounded-full border-2 border-transparent bg-[#7ac8b3] px-12 py-2 text-center text-base text-white transition-all duration-200 ease-in-out focus:shadow mx-1">Go to checkout</Button>
            </Link>
          : <Link href="/account/login">
              <Button className="font-graphikBold inline-flex items-center justify-center rounded-full border-2 border-transparent bg-[#7ac8b3] px-12 py-2 text-center text-base text-white transition-all duration-200 ease-in-out focus:shadow mx-1">Login To Checkout</Button>
            </Link>
      }
    </div>
  )
}

export default Summary
