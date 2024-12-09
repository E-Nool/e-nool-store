import { fetchMySubscriptions, cancelSubscription } from "@lib/util/subscription_api";
import Spinner from "@modules/common/icons/spinner";
import Link from "next/link"
import React from "react"
import { useState,useEffect } from "react";
// import Link from "next/link"
import Modal from "@modules/common/components/modal"
import useToggleState from "@lib/hooks/use-toggle-state"
import Button from "@modules/common/components/button"
import { useRouter } from "next/navigation"
import {  useMeCustomer } from "medusa-react"


const MySubscriptionListCard = ({subscription, current}) => {
	const { state, open, close } = useToggleState(false);
	const [planCancelMessage, setPlanCancelMessage] = useState('');
	const [currPlanSlug, setCurrPlanSlug] = useState(subscription?.Subscriptions?.slug);
	const router = useRouter()
	const { customer } = useMeCustomer()

	const cancelSubscriptionPopup = () => {
		if(currPlanSlug == 'base-plan'){
			setPlanCancelMessage('You cannot cancel your base plan.');
		}else{
			setPlanCancelMessage('Are you sure you want to cancel your current plan?')
		}
		open()
	}


	const cancelUserSubscription = async () => {
		if(customer?.id && subscription?.id){
			const cancel_subscription = await cancelSubscription(subscription?.id, customer?.id);
			console.log(cancel_subscription)
			if(cancel_subscription && cancel_subscription?.status){
				window.alert("Subscription cancelled successfully");
				window.location.reload();
			}
		}
	}

	return (
		<>
			<div className=" bg-white border w-full rounded-xl p-5 mx-auto">
				<h1 className=" sm:text-3xl text-xl font-graphikBold title-font text-[#015464]">
					{subscription?.Subscriptions?.name}
				</h1>
				<p className="title-font text-[#015464] m-0 text-sm">
					Plan Starts: {new Date(subscription?.start_date).toDateString()}
				</p>
				<div className="mt-3">
					<Link href='/subscription'>
	                  <button className="bg-[#015464] text-sm p-2 px-5 rounded-3xl text-white">
		                  Upgrade Plan
	                  </button>
	                </Link>
	                {current ? 
	                  <button className=" bg-[#E81D1D] text-sm ml-5 p-2 px-5 rounded-3xl text-white" onClick={cancelSubscriptionPopup}>
		                  Cancel Plan
	                  </button>
	                   : null}
				</div>
			</div>
			<Modal isOpen={state} close={close}>
		        <Modal.Body>
		          <div className="text-[#015464] font-black text-xl text-center ">
		          	{subscription?.Subscriptions?.name}
		          </div>
		          {/*<div className="w-full  p-4 mt-10 "> Your Memebrship <span className="text-[#015464] font-bold">{subscriptionData ? subscriptionData?.name : "Basic Plan"} </span> is active. This plan allow you to access full fo this book </div>*/}
		          <div className="w-full  p-4 mt-5 text-[#015464] text-center">
			          {planCancelMessage}
		          </div>
		        </Modal.Body>
		       <Modal.Footer>
		          {/*<div className="overflow-y-scroll flex-1 no-scrollbar text-center">
		            <button className="bg-secondry font-bold  inline-flex items-center justify-center rounded-full border-2 border-transparent px-4 py-2 w-[180px] text-center text-base  text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 ">
		            	 Upgrade Plan
		            </button>
		          </div>*/}
		          <Button className="!bg-gray-200 !text-gray-900 !border-gray-200 min-h-0" onClick={close}>
		            Close
		          </Button>
		          {currPlanSlug == 'base-plan' ? 
			          <Button className="min-h-0" onClick={() => router.push('/subscription')}>
			            Upgrade Plan
			          </Button>
		           : <Button className="min-h-0 bg-[#E81D1D] border-[#E81D1D] hover:text-[#E81D1D]" onClick={cancelUserSubscription}>
			            Cancel Plan
			         </Button>}
		        </Modal.Footer>
		    </Modal>
		</>
	);
}
export default MySubscriptionListCard;