import React from 'react'
import Link from 'next/link';

const FeaturedHead = ({ title, description, handle, url = false }) => {

  return (
    <div className="flex w-full mb-5">
      <div className="lg:w-1/2 sm:w-1/2 w-2/3 mb-6 lg:mb-0 ">
        <h1 className=" sm:text-3xl text-2xl font-graphikBold title-font mb-2 text-[#015464]">
          {title}
        </h1>
        <div className="h-1 w-48 bg-[#0FBF61] opacity-20 rounded"></div>
        <p className=" font-sm  text-[#4B8787]  mt-4 ">
          <i>{description}</i>
        </p>
      </div>
      <div className="lg:w-1/2 sm:w-full w-1/3 mb-6 lg:mb-0 flex lg:justify-end justify-end">
        <Link href={url ? handle : `/category/${handle}`}>
          <button className=" text-white bg-[#015464] border-0 py-2 px-6 focus:outline-none w-28 h-10 rounded-[21px] text-sm ">
            <h1 className="items-center">View all</h1>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedHead;