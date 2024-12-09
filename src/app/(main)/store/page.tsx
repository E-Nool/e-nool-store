import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"
import DefaultLayout from "@modules/layout/templates"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

export default function StorePage() {
  return (
    <DefaultLayout>
      <StoreTemplate />
    </DefaultLayout>
  )
}
