import React from "react"
import Image from "next/image"

type BannerImageType = {
  src: any,
  className?: string,
  style?: object
}

export const BannerImage = ({ src, className, style = {} }: BannerImageType) => (
  <Image
    className={className || "object-cover hidden lg:block lg:w-1/2 h-screen"}
    src={src}
    alt="Background"
    width={1200}
    height={720}
    style={style}
  />
)
