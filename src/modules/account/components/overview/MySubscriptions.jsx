import { fetchMySubscriptions } from "@lib/util/subscription_api";
import Spinner from "@modules/common/icons/spinner";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import MySubscriptionListCard from "./MySubscriptionListCard";
import MySubscriptionListRow from "./MySubscriptionListRow";
import Button from "@modules/common/components/button";
import { useRouter } from "next/navigation";

const MySubscriptions = (props) => {
  const [currentSubscriber, setCurrentSubscriber] = useState(null);
  const [currentSubscriberID, setCurrentSubscriberID] = useState(null);
  const [subscriptions, setSubscriptions] = useState([]);
  const [loadingSubscriptions, setLoadingSubscriptions] = useState(true);
  const router = useRouter();
  // Initial state is 'all'
  useEffect(() => {
    const loadMySubcriptions = async () => {
      try {
        const data = await fetchMySubscriptions(props.customer_id);
        if (data.status == true) {
          if (data?.data?.current) {
            setCurrentSubscriber(data?.data?.current);
            setCurrentSubscriberID(data?.data?.current?.id);
          }
          if (data?.data?.subscriptions) {
            // console.log(subscriptions);
            let subs = data?.data?.subscriptions.filter(
              (item) => item?.id !== data?.data?.current?.id
            );
            if (window.location.href.indexOf("subscriptions") === -1) {
              subs = subs.slice(0, 4);
              console.log(subs);
            }
            setSubscriptions(subs);
            // setSubscriptions(data?.data?.subscriptions);
            // setSubscriptions((sub) => [...data?.data?.subscriptions, ...sub]);
            setLoadingSubscriptions(false);
            console.log(data);
          }
        }
        // props.setSubsLoaded(true)
      } catch (error) {
        console.log(error);
      }
    };
    if (!props.isLoaded) {
      loadMySubcriptions();
    }
  }, [props]);

  return (
    <>
      {loadingSubscriptions ? (
        <div className=" grid justify-items-center pt-12 h-[200px]">
          <Spinner size={36} />
        </div>
      ) : null}

      <div class="relative overflow-x-auto  sm:rounded-lg mt-5 grid grid-cols-1">
        {!loadingSubscriptions ? (
          <>
            <table class="w-full text-sm text-left rtl:text-right">
              <thead class=" text-sm font-graphikBold text-[#015464] text-opacity-80 border-y border-[#7cc9b5] ">
                <tr>
                  <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Subscription Plan
                  </th>
                  <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Start Date
                  </th>
                  <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    End Date
                  </th>
                  <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Benefits
                  </th>
                  <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Status
                  </th>

                  <th scope="col" class="px-6 py-3 whitespace-nowrap">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentSubscriberID ? (
                  <MySubscriptionListRow
                    current={true}
                    subscription={currentSubscriber}
                  />
                ) : null}
                {subscriptions.length > 0 ? (
                  <>
                    {subscriptions.map(function (sub, index) {
                      return (
                        <MySubscriptionListRow
                          key={index}
                          current={false}
                          subscription={sub}
                        />
                      );
                    })}
                  </>
                ) : null}
              </tbody>
            </table>
          </>
        ) : null}

        {/*{window.location.href.indexOf("subscriptions") === -1 ? (
            <div className="mt-10 text-center">
              <button
                className=" bg-[#015464] text-sm ml-5 p-1 px-3 rounded-3xl text-white"
                onClick={() => router.push("/account/subscriptions")}
              >
                View All
              </button>
            </div>
          ) : null}*/}

        {/*{currentSubscriberID ? <MySubscriptionListCard current={true} subscription={currentSubscriber}/> : null }
          {(subscriptions.length > 0) ? <>
            {subscriptions.map(function(sub, index){
              return <MySubscriptionListCard key={index} current={false} subscription={sub}/>;
            })}
          </> : null}*/}
        {/* Subscriptions List */}
        {/*{subscriptions.map(function(item, index){
            
          })}*/}
        {/*{ !props.isLoaded ?
              <div className=" grid justify-items-center pt-12 h-[200px]">
                <Spinner size={36} />
              </div>
          :
      <table class="w-full text-sm text-left ">
          <thead class=" text-sm font-graphikBold text-[#015464] text-opacity-80 border-y border-[#7cc9b5] ">
              <tr>               
                  <th scope="col" class="px-6 py-3">
                      Subscription
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Status
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Start
                  </th>
                  <th scope="col" class="px-6 py-3">
                      End
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Books
                  </th>
                
                  <th scope="col" class="px-6 py-3">
                      Benefits
                  </th>
              </tr>
          </thead>
          <tbody className="mt-5">       

            { props.isLoaded && props.subscriptions.map((item, index) =>{
              return (
                  <tr class="text-[#015464] " key={item.id}>                
                    <th  class=" px-6 py-2 ">
                        {item.Subscriptions.name} 
                    </th>
                    <td class="px-6 py-2">
                      {item.account_state}
                    </td>
                    <td class="px-6 py-2">
                    {new Date(item.member_since).toDateString()}
                    </td>
                    <td class="px-6 py-2">
                    {new Date(item.start_date).toDateString()}
                    </td>
                    <td class="px-6 py-2">
                      <p>Total books: {item.Subscriptions.book_count}</p>
                      <p>Yet to read : 5</p>
                    </td>
                    <td>{item.Subscriptions.benefits}</td>
              </tr>
              )})}
            
          
          </tbody>
      </table>  
  }*/}
        {/*<div className="text-center mt-5">
    <Link href="/subscription">
      <button className=" bg-[#015464] text-white mt-5 p-2 px-8 rounded-xl">
        Upgrade Plan
      </button>
    </Link>
  </div>*/}
      </div>
    </>
  );
};

export default MySubscriptions;
