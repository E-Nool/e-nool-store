import MyLibraryTemplate from "@modules/account/templates/my-library-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Profile",
  description: "View and edit your eNOOL profile.",
}

export default function Profile() {
  return( 
  <div className="container mx-auto ">  
    <MyLibraryTemplate />
  </div>
  )
}
