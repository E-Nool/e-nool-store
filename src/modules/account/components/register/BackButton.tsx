import React from "react"
import { useRouter } from "next/navigation"

export const BackButton = () => {
  const router = useRouter()
  return (
    <button
      className="absolute top-4 right-4 px-5 py-1 bg-[#015464] text-white rounded-full focus:outline-none hover:bg-[#408080]/90"
      onClick={() => router.back()}
    >
      Back
    </button>
  )
}
