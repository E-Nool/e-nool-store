//@ts-nocheck
'use client';

import React, { useState,useEffect } from "react"
import {addNewsletterSubscriber} from "@lib/util/newsletter"

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] =  useState(false);
  const [subscribedMsg, setSubscribedMsg] =  useState('');

  const submitForm = async function(e){
    e.preventDefault();
    const res = await addNewsletterSubscriber({email : email});
    if(res.status){
      setSubscribed(true);
      setSubscribedMsg(res.message);
    }
  }

	return (
		<div className="mx-auto flex justify-between items-center sm:px-16 px-4 mt-8 ">
          <div className="flex flex-col items-center w-full ">
            <h3 className=" text-[#14adad] text-sm font-graphik">Newsletter</h3>

            <h1 className="sm:text-3xl text-2xl font-graphikBold title-font mb-4 text-[#015464] text-center">
              Do you want to get Special News?
            </h1>
            {!subscribed ? (
	            <form onSubmit={submitForm} className="w-full flex justify-center">
		              <input
		                className=" bg-[#F6F7FB] p-2 rounded px-4 w-full md:w-96 "
		                type="email"
		                placeholder="Drop your Email"
		                onChange={(e) => setEmail(e.target.value)}
		                required
		              />
		              {/*<Link href="/subscription">*/}
		                <button type="submit" className=" bg-[#7CC9B5] opacity-1 items-start ml-4 p-2 px-5  rounded-2xl text-white text-sm h-10 w-36 ">
		                  Subscribe{" "}
		                </button>
		              {/*</Link>*/}
	            </form>
            ) : (
             <p className="text-[#43e704] mt-4">{subscribedMsg}</p>
           )}
          </div>
        </div>
	);
}

export default NewsletterForm;