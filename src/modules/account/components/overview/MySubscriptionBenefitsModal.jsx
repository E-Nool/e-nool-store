import { fetchMySubscriptions, cancelSubscription } from "@lib/util/subscription_api";
import Spinner from "@modules/common/icons/spinner";
import Link from "next/link"
import React from "react"
import { useState,useEffect } from "react";
// import Link from "next/link"
import Modal from "@modules/common/components/modal"
import useToggleState from "@lib/hooks/use-toggle-state"
import Button from "@modules/common/components/button"

const MySubscriptionBenefitsModal = ({subscription, start_date, end_date, status, subscription_days_count}) => {
	const { state, open, close } = useToggleState(false);
	const book_count = subscription?.Subscriptions?.book_count;
	return (
		<>
		    <button className="bg-[#7CC9B5] text-sm p-1 px-3 rounded-3xl text-white" onClick={open}>
                View
            </button>
		    <Modal isOpen={state} close={close}>
		        <Modal.Body>
		          <div className="text-[#015464] font-black text-xl text-left ">
		          	{subscription?.Subscriptions?.name}
		          </div>
		          <table class="w-full text-sm text-left ">
			          <tbody className="mt-5">
				          <tr>               
			                  <th scope="col" class="pr-6 py-1 pt-4">Start Date</th>
			                  <td class="px-6 py-1 pt-4">{new Date(start_date).toDateString()}</td>
			              </tr>
			              <tr>               
			                  <th scope="col" class="pr-6 py-1">End Date</th>
			                  <td class="px-6 py-1">{end_date ? end_date.toDateString() : '-' }</td>
			              </tr>
			              <tr>               
			                  <th scope="col" class="pr-6 py-1">Account State</th>
			                  <td class="px-6 py-1">{status}</td>
			              </tr>
			              <tr>               
			                  <th scope="col" class="pr-6 py-1">Total Subscription Period (Days)</th>
			                  <td class="px-6 py-1">{subscription_days_count}</td>
			              </tr>
			              <tr>               
			                  <th scope="col" class="pr-6 py-1">Available Books Count</th>
			                  <td class="px-6 py-1">{book_count == -1 ? 'Unlimited' : book_count}</td>
			              </tr>
			              <tr>               
			                  <th scope="col" class="pr-6 py-1">Total Readed Books Count</th>
			                  <td class="px-6 py-1">{subscription?.total_books || 0}</td>
			              </tr>
			              <tr>               
			                  <th scope="col" class="pr-6 py-1">Remaining Books Count</th>
			                  <td class="px-6 py-1">{book_count == -1 ? 'Unlimited' :parseInt(book_count) - parseInt(subscription?.total_books || 0)}</td>
			              </tr>
			              <tr>               
			                  <th scope="col" class="pr-6 py-1">Copyrighted Books Access</th>
			                  <td class="px-6 py-1">{subscription?.Subscriptions?.copyright_access ? 'Yes' : 'No'}</td>
			              </tr>
			              <tr>               
			                  <th scope="col" class="pr-6 py-1">
			                  	eNOOL Published eBooks Available<br/>for reading after (Days)
			                  </th>
			                  <td class="px-6 py-1">{subscription?.Subscriptions?.book_availability_after}</td>
			              </tr>
			              <tr>               
			                  <th scope="col" class="pr-6 py-1">
			                  	Downloads Discount
			                  </th>
			                  <td class="px-6 py-1">{subscription?.Subscriptions?.discount}%</td>
			              </tr>
			          </tbody>
		          </table> 
		        </Modal.Body>
		       <Modal.Footer>
		        
		          <Button className="!bg-gray-200 !text-gray-900 !border-gray-200 min-h-0" onClick={close}>
		            Close
		          </Button>
		        </Modal.Footer>
		    </Modal>	    
	    </>
	);
}

export default MySubscriptionBenefitsModal;