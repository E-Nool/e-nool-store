
import React, { useEffect, useState } from "react"
import { getReviews } from "@lib/util/products_api";
import ReviewItem from "./review-item";

const Reviews = ({ product_id,reviews,setReviews }) => {
  useEffect(() => {
   
    const loadReviews = async () => {
      try {
        const data = await getReviews(product_id)
        if(data.status) {
          setReviews(data.reviews) 
        }
      } catch (error) {
        console.log(error)
      }
    };
    if(reviews.length == 0){
      loadReviews()
    }

  }, [product_id,reviews,setReviews]);

  return (
    <div>
       {reviews
          && reviews.map((item, index) => (
          <ReviewItem key ={index} item={item}></ReviewItem>              
            ))}
        {reviews.length == 0 && (
          <p>No review for this product</p>
        )}
    </div>
  )
}

export default Reviews;

