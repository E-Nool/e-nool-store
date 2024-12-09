// @ts-nocheck
"use client"
import {
  ProductCategoryWithChildren,
} from "@lib/data"
import Image from "next/image";

import { useCart, useRegions } from "medusa-react"
import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"

import { CardsGrid, CardsList } from "@modules/common/components/CarouselCards/CategoryItem";
import FeaturedAuthors from "@modules/authors/FeaturedAuthors"
import FeaturedPublishers from "@modules/authors/FeaturedPublishers"
import dropdown from "@modules/common/icons/dropdown.svg";
import gridEnabled from "@modules/common/icons/gridEnabled.svg";
import gridDisabled from "@modules/common/icons/gridDisabled.svg";
import listEnabled from "@modules/common/icons/listEnabled.svg";
import listDisabled from "@modules/common/icons/listDisabled.svg";
import { getProductImage } from "@lib/util/prices";
import { useSearchParams } from "next/navigation"
// import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { addFeedBack } from '@lib/util/feed-back';
import { round } from "lodash";
import { useRouter } from 'next/navigation';
import OffersBanner from "@modules/common/components/offer-banner";
import { useMeCustomer } from "medusa-react"
import Spinner from "@modules/common/icons/spinner";
import StarRating from "@modules/common/components/CarouselCards/StarRating";
import Check from "../../../../public/images/check.png";

const FeedBackTemplate = () => {
	const [rating, setRating] = useState(0)
	const [showError, setError] = useState(false)
	const [data, setData] = useState({})
	const [submitting, setSubmitting] = useState(false)
	const [submitted, setSubmitted] = useState(false)
	const router = useRouter();
	const paramsObject = useSearchParams()

	const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true)
    const newData = {...data};
    newData['rating'] = rating;
    newData['product_id'] = paramsObject.get('product_id') || null;
    newData['order_id'] = paramsObject.get('order_id') || null;
    newData['product_type'] = paramsObject.get('product_type') || null;
    newData['subscription_id'] = paramsObject.get('subscription_id') || null;
    // console.log(newData)
    if(rating === 0){
    	setError(true);
    	setSubmitting(false);
    	return;
    }else{
    	setError(false);
    }

    const res = await addFeedBack(newData);
    if(res.status){
    	setSubmitted(true)
    	router.push(`?submitted=true`);
    }

    setSubmitting(false)
  }

	return (

		<div className="container mx-auto px-3 sm:px-0">
		  <div className="columns-1">
		  	<h1 className="mt-14 text-center text-[#005365] font-graphikBold text-lg lg:text-3xl">Thank You For Subscribing!</h1>
		  	<h1 className="my-6 text-center text-[#005365] font-graphikBold text-lg lg:text-3xl">Write Your Feedback!</h1>
		  </div>
		  <div className="columns-1">
			  {
			  	(paramsObject.get('submitted') || submitted)
				  	? (
					  		<div className="max-w-full	w-[750px] mx-auto">
					  			<div className="flex justify-center mt-14">
							    	<Image
							            className=" rounded w-20 object-cover object-center"
							            src={Check}
							            alt="content"
							        />
							    </div>
									<p className="text-center mt-5 mb-10 text-gray-600">
										Thanks for your feedback
									</p>
					  		</div>
				  		)
				  	: (
					  		<form onSubmit={handleSubmit} className="max-w-full	w-[750px] mx-auto bg-[#6FD0B5] px-6 py-5 sm:px-10 sm:py-8 rounded-[18px]">
									<p className="text-white font-extrabold">
										Your email address will not be published. Required fields are marked 
										<span className="text-[#F01112]"> *</span>
									</p>
									<div className="flex my-6 items-center">
										<label className="text-white font-extrabold mr-4">
											Your Rating 
											<span className="text-[#F01112]"> *</span>
										</label>
										<StarRating rating={0} onRatingChange={(e) => setRating(e)} font_size="3xl" starHandle={true}/> 
										{(showError) ? <p className="text-[#F01112]">Rating is required</p> : null}
									</div>
									<div className="flex flex-col">
										<label className="text-white font-extrabold">
											Your Review
											<span className="text-[#F01112]"> *</span>
										</label>
										<textarea 
											name="review" 
											className="px-4 py-2 bg-white w-full rounded-[18px] focus:rounded-[18px]" 
											rows={8} 
											required
											onChange={handleChange}
											value={data.review || ""}
										/>
									</div>
									<div className="flex items-center mt-6">
										<input className="mr-2 w-4 h-4 form-checkbox text-[#408080] border-[#408080] rounded " type="checkbox" required/>
										<label className="text-white font-extrabold">
											I agree with the term and condition.
										</label>
									</div>
									<div className="flex my-6 flex-wrap sm:flex-nowrap">
										<div className="flex flex-col grow sm:pr-3">
											<label className="text-white font-extrabold">
												Name
												<span className="text-[#F01112]"> *</span>
											</label>
											<input 
												type="text" 
												className="w-full p-2 rounded-[10px] focus:rounded-[10px]" 
												required
												name="name"
												onChange={handleChange}
												value={data.name || ""}
											/>
										</div>
										<div className="flex flex-col grow sm:pl-3 mt-6 sm:mt-0">
											<label className="text-white font-extrabold">
												Email
												<span className="text-[#F01112]"> *</span>
											</label>
											<input 
												type="email" 
												className="w-full p-2 rounded-[10px] focus:rounded-[10px]" 
												required
												name="email"
												onChange={handleChange}
												value={data.email || ""}
											/>
										</div>
									</div>
									<div className="flex items-center mt-6">
										<input className="mr-2 w-4 h-4 form-checkbox text-[#408080] border-[#408080] rounded " type="checkbox"/>
										<label className="text-white font-extrabold">
											Save my name, email, and website in this browser for the next time I comment.
										</label>
									</div>
									<div className="mt-6">
										<button className="rounded-full text-white text-[14px] px-10 py-3 bg-[#075A68] font-extrabold hover:bg-[#04404a]">
											{submitting ? <Spinner /> : 'Submit'}
										</button>
									</div>
								</form> 
				  		)
			  }
				 
		  </div>
		  <div className="columns-1 text-center mt-10">
			    <button className="rounded-full text-white text-[14px] px-10 py-2 bg-[#6FD0B5] font-extrabold">
						Back To Home
					</button>
		  </div>
		</div>
	);
}

export default FeedBackTemplate;