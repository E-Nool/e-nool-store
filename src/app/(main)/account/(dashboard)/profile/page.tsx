import ProfileTemplate from "@modules/account/templates/profile-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Profile",
  description: "View and edit your eNOOL profile.",
}

export default function Profile() {
  return( 
  <div className="container mx-auto">  
    <ProfileTemplate />
  </div>
  )
}
