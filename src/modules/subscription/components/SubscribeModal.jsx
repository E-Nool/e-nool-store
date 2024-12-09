"use client";
// @ts-ignore
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAccount } from "@lib/context/account-context";
import Link from "next/link";
import {createRazSubscription} from "@lib/util/subscription_api";

export default function SubscribeNow(props) {
  const [itemDuration, setItemDuration] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [itemType, setItemType] = useState();
  const [paymentUrl, setPaymentUrl] = useState();
  const [planId, setPlanId] = useState();
  const [subcriptionId, setSubcriptionId] = useState();
  const [customerId, setCustomerId] = useState("");
  const [createSubscriptionLink, setCreateSubscriptionLink] = useState(false);
  const { customer } = useAccount();

  const currentyCode = window.localStorage.getItem("currentyCode");
  const currency_code = currentyCode || 'inr';
  const decimal = currency_code == 'inr' ? 0 : 2;
  const code = currency_code === 'inr' ? '₹' : '$';

  useEffect(() => {
    const loadPlan = () => {
      // console.log();
      const p = code == '$' ? (props.currentPlan.usd_price || 0) : (props.currentPlan.price || 0);
      const plan = code == '$' ? props.currentPlan.raz_usd_plan_id : props.currentPlan.raz_inr_plan_id;
      setItemDuration(props.currentPlan.subscription_period);
      setTotalPrice(p);
      setItemType(props.currentPlan.subscription_duration_type);
      setPaymentUrl(props.currentPlan.stripe_payment_url);
      setPlanId(plan);
      setSubcriptionId(
        props.currentPlan.id != undefined
          ? props.currentPlan.id.replace("subscriptions_", "")
          : ""
      );
      if (customer) {
        setCustomerId(customer?.id.replace("cus_", ""));
      }
    };
    loadPlan();
    // console.log(props.currentPlan)
  }, [props, customer]);

  const onPlanChanged = (duration, type, price, payment_url, subId, planId) => {
    setItemDuration(duration);
    setTotalPrice(price);
    setItemType(type);
    setPaymentUrl(payment_url);
    setSubcriptionId(subId.replace("subscriptions_", ""));
    setPlanId(planId);
  };

  const createRazorpaySubscription = async (plan_id, subscription_id, customer_id) => {
    if(plan_id && subscription_id && customer_id){
      setCreateSubscriptionLink(true);
      const sub_res = await createRazSubscription(plan_id, subscription_id, customer_id);
      if(sub_res?.status && sub_res?.data?.payment_url){
        // window.location.href = sub_res?.data?.payment_url;
        window.open(sub_res?.data?.payment_url, "_blank");
        const event = new CustomEvent('show:subscription:info:alert');
        document.dispatchEvent(event);
      }else{
        window.alert("Something went wrong");
      }
      setCreateSubscriptionLink(false);
    }else{
      window.alert("Plan ID not found");
    }
  }
  return (
    <Transition.Root show={props.isVisible} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0  transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className=" fixed inset-2  flex ml-auto justify-end place-items-end ">
                    <div className=" fixed w-[500px] max-w-full">
                      <div className=" bg-white shadow-lg max-w-full w-[500px] h-[100vh] p-5 ">
                        <div className=" flex p-2">
                          <h3 className="text-[#015464] font-bold mt-4 text-[30px]">
                            {props.title}
                          </h3>
                          <button
                            className="absolute right-0 text-xl mr-10 flex-end  rounded-full px-6 py-1 bg-[#015464] text-[#757C8A] bg-opacity-25 "
                            onClick={() => props.onClose(false)}
                          >
                            x
                          </button>
                        </div>
                        <div className=" container mt-10 px-5 p-2 rounded-lg outline outline-offset-1 text-[#015464]">
                          <h3 className="p-2 mb-2 text-[#015464]">
                            Choose Your Subscription
                          </h3>

                          {props.currentCart.map((item, index) => {
                            let duration = item.subscription_period;
                            // let price = item.price;
                            let price = code == '$' ? (item.usd_price || 0) : (item.price || 0);
                            let type = item.subscription_duration_type;
                            let select =
                              "subscriptions_" + subcriptionId == item.id;
                            let payment_url = item.stripe_payment_url;
                            const disableCheck =
                              item.id === props.cusCurrentPlanID ? true : false;
                            // const plan_id = item.raz_inr_plan_id;
                            const plan_id = code == '$' ? item.raz_usd_plan_id : item.raz_inr_plan_id;
                            return (
                              <div
                                className=" flex ml-2 mb-5"
                                key={`index${index}`}
                              >
                                <input
                                  disabled={disableCheck}
                                  id={`sub-${item.id}`}
                                  type="radio"
                                  name="month"
                                  checked={select}
                                  value={duration}
                                  onChange={() =>
                                    onPlanChanged(
                                      duration,
                                      type,
                                      price,
                                      payment_url,
                                      item.id,
                                      plan_id
                                    )
                                  }
                                />
                                <label
                                  htmlFor={`sub-${item.id}`}
                                  className={`flex ${
                                    disableCheck
                                      ? "cursor-not-allowed opacity-50"
                                      : "cursor-pointer"
                                  }`}
                                >
                                  <p className=" pl-3">
                                    {duration}{" "}
                                    <span className="capitalize">{type} </span>{" "}
                                  </p>
                                  <span className=" absolute right-12">
                                    {code} {(price / duration).toFixed(decimal)}/month
                                  </span>
                                  <br />
                                </label>
                              </div>
                            );
                          })}
                        </div>
                        <div className=" flex justify-between ml-2 mt-10 mb-2 text-[#015464] ">
                          <p className=" whitespace-nowrap">
                            {itemDuration}{" "}
                            <span className="capitalize">{itemType}</span>
                          </p>
                          <p className="whitespace-nowrap text-right">
                            Subtotal:{" "}
                            <span className="font-bold">₹ {totalPrice}</span>
                          </p>
                        </div>
                        <hr className=" bg-[#015464] p-[1px] bg-opacity-25" />

                        <div className=" flex flex-col ">
                          <div className="mt-3">
                            {/* <a
                                                href="#"
                                                className="flex items-center justify-center rounded-md border border-transparent bg-[#015464] px-6 py-3 text-base font-medium text-white shadow-sm mt-4"
                                                >
                                                Continue to cart
                                                </a> */}
                            {customer ? (
                              <>
                                {/*<a
                                  href={`${paymentUrl}?client_reference_id=${customerId}_${subcriptionId}`}
                                  className="bg-[#015464] flex items-center justify-center rounded-md border border-transparent  px-6 py-3  text-base font-medium text-white shadow-sm mt-4"
                                >
                                  Continue to Payment
                                </a>*/}
                                <button
                                  style={{
                                    opacity : createSubscriptionLink ? '0.5' : '1'
                                  }}
                                  disabled={createSubscriptionLink ? true : false}
                                  onClick={() => createRazorpaySubscription(
                                    planId,
                                    "subscriptions_"+subcriptionId,
                                    customer?.id
                                  )}
                                  className="bg-[#015464] flex items-center justify-center rounded-md border border-transparent  px-6 py-3  text-base font-medium text-white shadow-sm mt-4 w-full"
                                >
                                  {createSubscriptionLink ? 'Creating payment link...' : 'Continue to Payment'}
                                </button>
                              </>

                            ) : (
                              <Link
                                href="/account/login"
                                className="bg-[#015464] flex items-center justify-center rounded-md border border-transparent  px-6 py-3 text-base font-medium text-white shadow-sm mt-4"
                              >
                                Login to continue
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
