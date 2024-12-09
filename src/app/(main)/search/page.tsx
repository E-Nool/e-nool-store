import { getCategoryByHandle } from "@lib/data"
import SearchTemplate from "@modules/search-page/templates"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import DefaultLayout from "@modules/layout/templates"

export default function StorePage() {

  return (
    <DefaultLayout>
      <SearchTemplate />
    </DefaultLayout>
  )
}
