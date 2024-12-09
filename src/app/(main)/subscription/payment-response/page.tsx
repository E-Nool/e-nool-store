// @ts-nocheck
import { Metadata } from "next"


import DefaultLayout from "@modules/layout/templates"
import SubscriptionComponent from "@modules/subscription/subscription-component"


export const metadata: Metadata = {
  title: "Payment page",
  description: "Payment Reponse page",
}

export default function PaymentPage() {

  return (
    <DefaultLayout>
      <div className="hero_bg">
        <SubscriptionComponent></SubscriptionComponent>        
      </div>
    </DefaultLayout>
  )
}
