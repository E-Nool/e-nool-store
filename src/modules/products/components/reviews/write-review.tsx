
import Input from "@modules/common/components/input";
import Image from "next/image";
import React, { useEffect, useState } from "react"
import { Form } from "react-hook-form";
import Modal from "@modules/common/components/modal"
import useToggleState from "@lib/hooks/use-toggle-state";
import Plus from "@modules/common/icons/plus";
import Button from "@modules/common/components/button";
import Spinner from "@modules/common/icons/spinner";
import StarRating from "@modules/common/components/CarouselCards/StarRating";
import { useMeCustomer } from "medusa-react"
import Link from "next/link";
import { addReviews } from "@lib/util/products_api";

const WriteReview = (props) => {
  const { state, open, close } = useToggleState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [rating, setRating] = useState(0)
  const [email, setEmail] = useState()
  const [title, setTitle] = useState()
  const [content, setConent] = useState()
  const item = props.product

  
  const handleClose = () => {   
    close()
  }
  const { customer } = useMeCustomer()
  const  handleSubmit = async (event) =>{
    event.preventDefault();
    setSubmitting(true)
    var data = 
    {
      "title":event.target.title.value,
      'full_name': event.target.full_name.value,
      'content': event.target.content.value,
      'rating': event.target.rating.value
    }
    const reviewSubmit = await addReviews(data,item.id)
    event.target.title.value = ""
    event.target.full_name.value = ""
    event.target.content.value = ""
    setSubmitted(true)
    setSubmitting(false)
    console.log(reviewSubmit  )
    // if(reviewSubmit?.status == true){
    //   props.setReviewCount(reviewSubmit["data"]["count"])
    //   props.setReviewRating(reviewSubmit["data"]["rating"])
    // }
    return false
  }
  
  return (
    <>
      <button
        className="border-none pl-5 text-yellow-600"
        onClick={open}
      >        <span className="text-[#015464] font-bold">Write a review</span>
      </button>

      <Modal isOpen={state} close={handleClose}>
        <Modal.Title >
          <h2 className="text-xl font-bold">Write a review</h2>
          </Modal.Title>
        <Modal.Body>
          {submitted ? (
          <h2 className="mt-10 pt-10 text-center text-xl text">Your review has been successfully submitted. It will reflect on the site in a few minutes. Thank you!. <br></br><br></br> <Link href={"/browse"} className="text-[#408080] hover:text-[#565656] font-extrabold">Browse books</Link></h2> 
          ) : (<>
        {customer ? (
        <form onSubmit ={handleSubmit} id="reviewForm">
          <div className="grid gap-4 mb-4 grid-cols-2 mt-3">
          <div className="col-span-2 mt-5">
                <label  className="block mb-2 text-sm font-medium text-gray-900 ">Rating</label>
                <StarRating rating={item?.rating || 0} onRatingChange={(e) => setRating(e)} font_size="4xl" starHandle={true}/> 
                <input type="text" name="rating" id="rating" className="hidden" value={ rating} required></input>
                <input type="text" name="full_name" id="full_name" className="hidden"value={ customer?.email} required></input>
            </div>
            <div className="col-span-2 mt-5">
                <label  className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Review title" required></input>
            </div>
            
            <div className="col-span-2 mt-5">
                <label  className="block mb-2 text-sm font-medium text-gray-900 ">Message</label>
                <textarea maxLength={100} id="description" name="content" rows={4} className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:border-gray-500 " placeholder="Message"></textarea>                    
            </div>
          </div> 
            <Button className="min-h-0  mt-10 " disabled={submitting} >
                {submitting ? <Spinner /> : "Submit review"}
            </Button>              
        </form>
        ) : ( <h2 className="mt-10 pt-10 text-center text-xl text">Please  <Link href={"/account/login"} className="text-[#408080] hover:text-[#565656] font-extrabold">login</Link> here  and post the reviews</h2> )}
        </>)}

        </Modal.Body>            
      </Modal>
    </>
  )
}

export default WriteReview;

