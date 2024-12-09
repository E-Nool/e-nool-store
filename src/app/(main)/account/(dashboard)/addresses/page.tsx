import AddressesTemplate from "@modules/account/templates/addresses-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Addresses",
  description: "View your addresses",
}

export default function Addresses() {
  return( 
    <div className="container mx-auto mt-10">  
      <AddressesTemplate />
    </div>
    )
}
