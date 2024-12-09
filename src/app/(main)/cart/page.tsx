import CartTemplate from "@modules/cart/templates"
import { Metadata } from "next"
import DefaultLayout from "@modules/layout/templates"

export const metadata: Metadata = {
  title: "Shopping Bag",
  description: "View your shopping bag",
}

export default function Cart() {
  return <>
    <DefaultLayout>
      <CartTemplate />
    </DefaultLayout>
  </>
}
