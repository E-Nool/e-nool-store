// @ts-nocheck
import { Metadata } from "next"


import DefaultLayout from "@modules/layout/templates"
import SubscriptionComponent from "@modules/subscription/subscription-component"


export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

export default function StorePage() {

  return (
    <DefaultLayout>
      <div className="hero_bg">
        <SubscriptionComponent></SubscriptionComponent>        
      </div>
    </DefaultLayout>
  )
}
