
import StarRating from "@modules/common/components/CarouselCards/StarRating";
import Image from "next/image";
import React, { useEffect, useState } from "react"

const ReviewItem = (props) => {
  const item = props.item
  console.log(item);

return (   
  <article className=" mb-5">
      <div className="flex items-center">
        <Image 
          className="w-10 h-10 me-4 rounded-full border p-2 border-[#7CC9B5] shrink-0" 
          src="/images/Dashboard/dashimg4.png" 
          alt=""
          width="15"
          height="15"
        >
        </Image>
        <h3 className="m-0 text-[15px] text-gray-500 font-black">{item?.full_name}</h3>
      </div>
      <div className="review-star">
        <StarRating rating={item?.rating || 0} onRatingChange={() => {}} />
      </div>
      <div className="review-date">
        <p className="text-[14px] text-gray-500">Reviewed on {new Date(item?.updated_at).toDateString()}</p>
      </div>
      <div className="review-description">
       <p className="text-[13px] mt-1 font-medium">
         {item?.content}
       </p>
      </div>
      {/*<div className="flex items-center mb-2 mt-2">
          <Image className="w-10 h-10 me-4 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt=""></Image>
          <div className="font-medium ">
              <p> 
                {item?.full_name} 
                <span className="dark:text-gray-400">Posted on : {new Date(item.created_at).toDateString()} </span>
              </p>
              <StarRating rating={item?.rating || 0} onRatingChange={() => {}} />
          </div>
      </div>
       
      <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
        <p>Reviewed in the United Kingdom on <time dateTime="2017-03-03 19:00">March 3, 2017</time></p>
      </footer>

      <p className="mb-1 ">{item.title}</p>
      <p className="mb-1 text-gray-500 dark:text-gray-400">{item.content}</p>
      <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
      <aside>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
          <div className="flex items-center mt-3">
              <a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
              <a href="#" className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600">Report abuse</a>
          </div>
      </aside>*/}
  </article>
  )
}

export default ReviewItem;

