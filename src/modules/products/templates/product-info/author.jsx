import React from "react"



const AuthorInfo = ({ product }) => {
  return (
        <div>
          {product?.metadata?.author &&
            <p className="ml-2 text-sm font-medium text-[#015464] ">
              by {product?.metadata?.author ? product?.metadata?.author?.name  : ""}
            </p>
            }
        </div>
  )
}

export default AuthorInfo
