// @ts-nocheck
import { Metadata } from "next"


import DefaultLayout from "@modules/layout/templates"
import BrowseComponent from "@modules/browse/browse-component"

export const metadata: Metadata = {
  title: "Browse all",
  description: "Explore all of our products.",
}

export default function StorePage() {

  return (
    <DefaultLayout>
      <div className="">
        <BrowseComponent></BrowseComponent>        
      </div>
    </DefaultLayout>
  )
}
