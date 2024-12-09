import MySubscriptionsTemplate from "@modules/account/templates/my-subscriptions"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Profile",
  description: "View and edit your eNOOL profile.",
}

export default function Profile() {
  return( 
  <div className="container mx-auto ">  
    <MySubscriptionsTemplate />
  </div>
  )
}
