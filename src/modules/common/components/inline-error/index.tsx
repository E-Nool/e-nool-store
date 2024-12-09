import React from "react"

const InlineError = ({ errors, property }: any) => {
  return (
    <p className="mt-2 text-[#FF7C7C] text-xs">{errors[property].message}</p>
  )
}

export default InlineError
