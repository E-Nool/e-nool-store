import { fetchMySubscriptions, cancelSubscription, cancelRazorpaySubscription } from "@lib/util/subscription_api";
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
import {dateConvertor, statusConvertor} from "@lib/util/subscription_helpers"
import MySubscriptionBenefitsModal from "./MySubscriptionBenefitsModal"


const MySubscriptionListRow = ({subscription, current}) => {
	const { state, open, close } = useToggleState(false);
	const [planCancelMessage, setPlanCancelMessage] = useState('');
	const [currPlanSlug, setCurrPlanSlug] = useState(subscription?.Subscriptions?.slug);
	const router = useRouter()
	const { customer } = useMeCustomer()
	const subscription_days_count = dateConvertor(subscription?.Subscriptions?.subscription_period, subscription?.Subscriptions?.subscription_duration_type);
	const start_date = subscription?.start_date
	const end_date = subscription?.expired_at ? new Date(subscription?.expired_at) : '';
	// let end_date = new Date(start_date); 
	// end_date.setDate(end_date.getDate() + subscription_days_count);
	const today = new Date();
	const can_use_current_plan = end_date ? today <= end_date : false;
	// const can_use_current_plan = false;

	// console.log(is_current_plan_expired)

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
			const cancel_subscription = await cancelRazorpaySubscription(subscription?.id, customer?.id);
			// console.log(cancel_subscription)
			if(cancel_subscription && cancel_subscription?.status){
				window.alert("Subscription cancelled successfully");
				window.location.reload();
			}
		}
	}

	return (
		<>
		    <tr class="text-[#015464]">
		      {/* Subscription Plan */}
			  <th class=" px-6 py-2 whitespace-nowrap">
				  <b>{subscription?.Subscriptions?.name}</b>
			  </th>

			  {/* Start Date */}
			  <td class="px-6 py-2 whitespace-nowrap">
				  {new Date(start_date).toDateString()}
			  </td>

			  {/* End Date */}
			  <td class="px-6 py-2 whitespace-nowrap">
				  {end_date ? end_date.toDateString() : '-' }
			  </td>

			  {/* Benefits */}
			  <td class="px-6 py-2">
				<MySubscriptionBenefitsModal 
					subscription={subscription}
					start_date={start_date}
					end_date={end_date}
					status={(current && subscription?.account_state == 0) 
						? statusConvertor(can_use_current_plan ? subscription?.account_state : 3) 
						: statusConvertor(subscription?.account_state)
				    }
				    subscription_days_count={subscription_days_count}
				/>
			  </td>
			  <td class="px-6 py-2">
			    {current ? (
			    	<button className={`bg-[${subscription?.account_state == 0 && can_use_current_plan ? '#7CC9B5' : '#E81D1D'}] text-sm p-1 px-3 rounded-3xl text-white whitespace-nowrap`}>
		                {statusConvertor(can_use_current_plan ? subscription?.account_state : 3)}
		            </button>
			    )
			    : (
			    	<button className={`bg-[${subscription?.account_state == 0 ? '#7CC9B5' : '#E81D1D'}] text-sm p-1 px-3 rounded-3xl text-white whitespace-nowrap`}>
		                {statusConvertor(subscription?.account_state)}
		            </button>
			    )}
			    
			  </td>
			  <td className="whitespace-nowrap">
				  <Link href='/subscription'>
	                  <button className="bg-[#015464] text-sm p-1 px-3 rounded-3xl text-white whitespace-nowrap">
		                  Upgrade Plan
	                  </button>
	                </Link>
	                {current && can_use_current_plan ? 
	                  <button className=" bg-[#E81D1D] text-sm ml-5 p-1 px-3 rounded-3xl text-white whitespace-nowrap" onClick={cancelSubscriptionPopup}>
		                  Cancel Plan
	                  </button>
	                   : null}
			  </td>
			</tr>

			{/*<div className=" bg-white border w-full rounded-xl p-5 mx-auto">
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
			</div>*/}
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
export default MySubscriptionListRow;