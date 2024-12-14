// @ts-nocheck
import React from "react";
import { useState, useEffect } from "react";
// import bgimg from "../../../../../public/images/bg.png";
import Image from "next/image";
import { fetchAllCurrentReading } from "@lib/util/bookreader_api";
// import Staricon from "@/app/components/staricon/Staricon.jsx";
import Lefe from "../../../../../public/images/lefe1.png";
import dash1 from "../../../../../public/images/Dashboard/dashimg.png";
import dash2 from "../../../../../public/images/Dashboard/dashimg1.png";
import dash4 from "../../../../../public/images/Dashboard/dashimg3.png";
import dash5 from "../../../../../public/images/Dashboard/dashimg4.png";
import dash6 from "../../../../../public/images/Dashboard/dashimg5.png";
import book from "../../../../../public/images/book.png";
import bgimg from "../../../../../public/images/bg1.png";
import { Customer, Order } from "@medusajs/medusa";
import Link from "next/link";
import MySubscriptions from "../overview/MySubscriptions";
import MyOrders from "../overview/MyOrders";
import { useRouter, useSearchParams } from "next/navigation";

type OverviewProps = {
  orders?: Order[];
  customer?: Omit<Customer, "password_hash">;
};

const Overview = ({ orders, customer }: OverviewProps) => {
  const [activeContent, setActiveContent] = useState("downloads"); // Initial state is 'all'
  const [subsLoaded, setSubsLoaded] = useState(false); // Initial state is 'all'
  const [subscriptions, setSubscriptions] = useState([]);
  const [bookReadings, setBookReadings] = useState([]);
  const [showInfoAlert, setShowInfoAlert] = useState(false);

  const handleButtonClick = (contentType) => {
    setActiveContent(contentType);
  };

  const truncate = (string = "", limit = 200) => {
    return string.length <= limit ? string : string.slice(0, limit) + "...";
  };

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
     const sub_pur = searchParams.get('sub_pur');
     if(sub_pur && sub_pur == 'true'){
        setShowInfoAlert(true);
     }
  }, []);

  useEffect(
    function () {
      // Fetch Books
      async function fetchBookReadings() {
        if (customer?.id) {
          const data = await fetchAllCurrentReading(customer?.id);
          if (data?.data && data?.data?.length > 0) {
            // console.log(data)
            const bk_ids = [];
            const bks = [];
            data?.data?.forEach((d, i) => {
              if (!bk_ids.includes(d?.product?.id)) {
                bks.push(d);
                bk_ids.push(d?.product?.id);
                // data?.data?.splice(i)
              }
            });
            // setBookReadings(data?.data);
            setBookReadings(bks);
            // console.log(bks);
          }
        }
      }
      fetchBookReadings();
    },
    [customer]
  );

  return (
    <>
      <div className="lg:container mx-auto sm:px-10 px:2">
        <Image
          className=" absolute z-[-1]  top-0 right-0"
          src={bgimg}
          alt="bgimg"
        />
        <Image
          className=" hidden lg:block absolute top-36 z-0 bottom-36 right-0 w-24 "
          src={Lefe}
          alt=""
        />

        {showInfoAlert && <div className="p-5 my-5 bg-[] text-green-700 bg-green-300  text-center">
          It will take a maximum of 5 minutes to update your plan once you purchase the subscription.
        </div>}

        <div className="mx-auto lg:px-16 px-2 ">
          <div className="  pb-8 ">
            <div className="px-3">
              <h3 className="  text-[#015464] text-2xl font-black mt-16 font-graphikBold">
                Welcome, {customer?.first_name}
              </h3>
              <p className="mt-2 text-[#015464] text-[12px] font-[graphik]">
                Quicklinks
              </p>
            </div>
          </div>
          <div className=" relative z-0 grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 sm:items-center sm:justify-center gap-4 lg:gap-3">
            <Link href="/account/my-library" className="m-3 ">
              <div className=" flex  items-center bg-[#7CC9B5]  rounded-xl ">
                <Image
                  className=" bg-[#015464] bg-cover p-5 w-auto rounded-xl"
                  src={dash1}
                  alt="dash1-img"
                />
                <p className=" text-white px-10 p-6 text-xl rounded-xl font-graphikBold">
                  My Library
                </p>
              </div>
            </Link>
            <a href="/account/orders" className="m-3 ">
              <div className=" flex  items-center bg-[#7CC9B5] rounded-xl">
                <Image
                  className=" bg-[#015464] bg-cover p-5 w-auto rounded-xl"
                  src={dash2}
                  alt="dash1-img"
                />
                <a className=" text-white px-10 p-6 rounded-xl font-graphikBold text-xl">
                  Purchase History
                </a>
              </div>
            </a>
            {/* <Link href="/Pages/Userside/paymentinfo">
            <div className=" flex  items-center bg-[#7CC9B5] w-56 rounded-xl">
              <Image
                className=" bg-[#015464] bg-cover p-5 py-7 w-auto rounded-xl"
                src={dash3}
                alt="dash1-img"
              />
              <p className=" text-white px-3 p-6 rounded-xl font-bold">
                Payment Info
              </p>
            </div>
          </Link> */}
            <Link href="/terms-conditions" className="m-3">
              <div className=" flex  items-center bg-[#7CC9B5] rounded-xl">
                <Image
                  className=" bg-[#015464] bg-cover p-5 w-auto rounded-xl"
                  src={dash4}
                  alt="dash1-img"
                />
                <p className=" text-white px-10 p-6 rounded-xl font-graphikBold text-xl">
                  Terms Of service
                </p>
              </div>
            </Link>
            <Link href="/account/edit-profile" className="m-3">
              <div className=" flex  items-center bg-[#7CC9B5] rounded-xl">
                <Image
                  className=" bg-[#015464] bg-cover p-5 w-auto rounded-xl"
                  src={dash5}
                  alt="dash1-img"
                />
                <p className=" text-white px-10 p-6 rounded-xl font-graphikBold text-xl">
                  Edit Profile
                </p>
              </div>
            </Link>
            <Link href="/account/subscriptions" className="m-3">
              <div className=" flex  items-center bg-[#7CC9B5] rounded-xl">
                <Image
                  className=" bg-[#015464] bg-cover p-6 w-auto rounded-xl"
                  src={dash6}
                  alt="dash1-img"
                />
                <p className=" text-white px-10 p-6 rounded-xl font-graphikBold text-xl">
                  Subscriptions
                </p>
              </div>
            </Link>
          </div>
          <hr className=" bg-[#7CC9B5] p-[1px] mt-20" />
          <Image
            className=" hidden lg:block absolute -ml-[8%] z-0  w-24 "
            src={Lefe}
            alt=""
          />
          <h1 className=" text-[#015464] text-xl mt-5 font-graphikBold ">
            Activities
          </h1>
          <div className=" mt-10  flex mx-auto container  ">
            <div className=" bg-white shadow-lg w-full rounded-2xl p-10 mx-auto ">
              <div className="">
                <div className="flex mt-8 gap-5 md:space-x-3 flex-col md:flex-row">
                  <button
                    className={`text-lg border-[#7CC9B5] border rounded px-5 ${
                      activeContent === "downloads"
                        ? "bg-[#7CC9B5] rounded text-white"
                        : "text-[#145464]"
                    }`}
                    onClick={() => handleButtonClick("downloads")}
                  >
                    Downloads
                  </button>
                  {/* <button
                  className={`text-lg  ${activeContent === "all"
                    ? "bg-[#7CC9B5] px-5 rounded text-white"
                    : "text-[#145464]"
                    }`}
                  onClick={() => handleButtonClick("all")}
                >
                  All
                </button> */}
                  <button
                    className={`text-lg border-[#7CC9B5] border rounded px-5 ${
                      activeContent === "subscription"
                        ? "bg-[#7CC9B5] text-white"
                        : "text-[#145464]"
                    }`}
                    onClick={() => handleButtonClick("subscription")}
                  >
                    Subscription
                  </button>
                  {/* <button
                  className={`text-lg ${activeContent === "downloads"
                    ? "bg-[#7CC9B5] px-5 rounded text-white"
                    : "text-[#145464]"
                    }`}
                  onClick={() => handleButtonClick("downloads")}
                >
                  Downloads
                </button> */}
                </div>

                {/* {activeContent === "all" && (
                <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-1 sm:grid-cols-1 sm:items-center lg:grid-cols-2 gap-4  lg:gap-3">
                  <div className=" flex mt-10 items-center">
                    <div>
                      <Image
                        className=" rounded w-56 object-cover object-center mb-4"
                        src={book}
                        alt="content"
                      />
                    </div>
                    <div className=" ml-10 item-centre ">
                      <button className=" bg-[#7CC9B5] p-2 px-4 text-white rounded-3xl">
                        Subscription
                      </button>
                      <h1 className=" text-[#015464]  text-xl mt-6 font-graphikBold">
                        King of Battle and Blood
                      </h1>
                      <p className=" text-[#14adad] mt-5">
                        by Scarlett st. clair
                      </p>
                      <p className=" text-[#015464] font-semibold mt-3">
                        May 21,2023
                      </p>
                    </div>
                  </div>

                  <div className=" flex mt-10 items-center">
                    <div>
                      <Image
                        className=" rounded w-56 object-cover object-center mb-4"
                        src={book}
                        alt="content"
                      />
                    </div>
                    <div className=" ml-10 item-centre ">
                      <button className=" bg-[#7CC9B5] p-2 px-4 text-white rounded-3xl">
                        Subscription
                      </button>
                      <h1 className=" text-[#015464] font text-xl mt-6 font-graphikBold">
                        King of Battle and Blood
                      </h1>
                      <p className=" text-[#14adad] mt-5">
                        by Scarlett st. clair
                      </p>
                      <p className=" text-[#015464] font-semibold mt-3">
                        May 21,2023
                      </p>
                    </div>
                  </div>

                  <div className=" flex mt-10 items-center">
                    <div>
                      <Image
                        className=" rounded w-56 object-cover object-center mb-4"
                        src={book}
                        alt="content"
                      />
                    </div>
                    <div className=" ml-10 item-centre ">
                      <button className=" bg-[#7CC9B5] p-2 px-4 text-white rounded-3xl">
                        Subscription
                      </button>
                      <h1 className=" text-[#015464] font text-xl mt-6 font-graphikBold">
                        King of Battle and Blood
                      </h1>
                      <p className=" text-[#14adad] mt-5">
                        by Scarlett st. clair
                      </p>
                      <p className=" text-[#015464] font-semibold mt-3">
                        May 21,2023
                      </p>
                    </div>
                  </div>

                  <div className=" flex mt-10 items-center">
                    <div>
                      <Image
                        className=" rounded w-56 object-cover object-center mb-4"
                        src={book}
                        alt="content"
                      />
                    </div>
                    <div className=" ml-10 item-centre ">
                      <button className=" bg-[#7CC9B5] p-2 px-4 text-white rounded-3xl">
                        Subscription
                      </button>
                      <h1 className=" text-[#015464] font text-xl mt-6 font-graphikBold">
                        King of Battle and Blood
                      </h1>
                      <p className=" text-[#14adad] mt-5">
                        by Scarlett st. clair
                      </p>
                      <p className=" text-[#015464] font-semibold mt-3">
                        May 21,2023
                      </p>
                    </div>
                  </div>
                </div>
              )} */}
                {activeContent === "subscription" && (
                  <div className="min-h-60">
                    <MySubscriptions
                      isLoaded={subsLoaded}
                      setSubsLoaded={setSubsLoaded}
                      customer_id={customer?.id}
                      subscriptions={subscriptions}
                      setSubscriptions={setSubscriptions}
                    />
                    {window.location.href.indexOf("subscriptions") === -1 ? (
                      <div className="mt-10 text-center">
                        <button
                          className=" bg-[#015464] text-sm ml-5 p-1 px-3 rounded-3xl text-white"
                          onClick={() => router.push("/account/subscriptions")}
                        >
                          View All
                        </button>
                      </div>
                    ) : null}
                  </div>
                )}
                {activeContent === "downloads" && (
                  <div className="min-h-60">
                    <MyOrders orders={orders}></MyOrders>
                    <div className="text-center mt-10">
                      <a href="/account/orders" className="md:w-[auto] block md:inline-block text-center bg-[#015464] p-2 px-8 rounded-3xl text-white">
                        View All Orders
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className=" mb-[2px]  mt-12  lg:justify-center lg:p-1">
            <h2 className=" text-[#145464] font-graphikBold text-3xl">
              Currently Reading
            </h2>
            {bookReadings.length > 0
              ? bookReadings.slice(0, 2).map((b_r, index) => {
                  return (
                    <div
                      key={index}
                      className="grid grid-cols-1 grid-rows-1 md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1  gap-4 border border-[#E4E4E4] rounded-[21px] bg-white p-10 my-4"
                    >
                      <div className="flex-col md:flex-row flex mt-10 items-center">
                        <div>
                          <Image
                            className=" rounded object-cover object-center mb-4 max-w-5xl 2xl:w-56 sm:w-48 xl:w-50 w-56"
                            src={b_r?.product?.thumbnail}
                            alt="content"
                            width="100"
                            height="100"
                          />
                        </div>
                        <div className="w-full md:w-[auto] md:ml-10 mt-5 max-w-5xl">
                          <h1 className=" text-[#015464] font-graphikBold text-2xl ">
                            {b_r?.product?.title}
                          </h1>
                          <div className="flex flex-wrap mb-2">
                            <p className="tracking-widest text-[#280c0c] text-xs  ">
                              ({b_r?.product?.metadata?.review_count || 0})
                            </p>
                          </div>
                          <p className=" text-[#14adad] mt-5">
                            by {b_r?.product?.metadata?.author?.name || ""}
                          </p>
                          <p className=" text-[#015464] font-[graphikItalic] font-bold mt-3 max-w-lg">
                            {truncate(b_r?.product?.description || "", 150)}
                          </p>
                          <div className=" mt-5">
                            <a href={`/epub?id=${b_r?.product?.id}`}>
                              <button className="w-full md:w-[auto] block md:inline-block bg-[#015464] p-2 px-8 rounded-3xl text-white">
                                Read
                              </button>
                            </a>
                            <Link href={`/products/${b_r?.product?.handle}`}>
                              <button className="mt-2 md:mt-0 w-full md:w-[auto] block md:inline-block bg-[#7CC9B5] md:ml-5 p-2 px-8 rounded-3xl text-white">
                                Detail
                              </button>
                            </Link>
                            {/*<button className=" bg-[#7CC9B5] ml-5 p-2 px-4 rounded-3xl text-white">
                          Write Review
                        </button>*/}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
            {/*<div className="grid grid-cols-1 grid-rows-1 md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1  gap-4">
            <div className=" flex mt-10">
              <div>
                <Image
                  className=" rounded object-cover object-center mb-4 max-w-5xl"
                  src={book}
                  alt="content"
                />
              </div>
              <div className=" ml-14 mt-5 max-w-5xl">
                <h1 className=" text-[#015464] font-graphikBold text-2xl ">
                  King of Battle and Blood
                </h1>
                <div className="flex flex-wrap mb-2">*/}
            {/* <StarRating
                    rating={rating}
                    onRatingChange={(newRating) => handleRatingChange(newRating)}
                  /> */}
            {/*<p className="tracking-widest text-[#280c0c] text-xs  ">
                    (27)
                  </p>
                </div>
                <p className=" text-[#14adad] mt-5">by Scarlett st. clair</p>
                <p className=" text-[#015464] font-[graphikItalic] font-bold mt-3 max-w-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsam, ex voluptas perferendis quidem ut veniam repellendus.
                </p>
                <div className=" mt-5">
                  <button className=" bg-[#015464] p-2 px-8 rounded-3xl text-white">
                    Read
                  </button>
                  <button className=" bg-[#7CC9B5] ml-5 p-2 px-4 rounded-3xl text-white">
                    Write Review
                  </button>
                </div>
              </div>
            </div>
          </div>*/}
          </div>
        </div>
      </div>

      {/* <div>
      <div className="small:hidden">
        <div className="text-xl-semi mb-4 px-8">
        </div>
        <div className="text-base-regular">
          <ul>
            <li>
              <Link
                href="/account/profile"
                className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
              >
                <>
                  <div className="flex items-center gap-x-2">
                    <User size={16} />
                    <span>Profile</span>
                  </div>
                  <ChevronDown className="transform -rotate-90" />
                </>
              </Link>
            </li>
            <li>
              <Link
                href="/account/addresses"
                className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
              >
                <>
                  <div className="flex items-center gap-x-2">
                    <MapPin size={16} />
                    <span>Addresses</span>
                  </div>
                  <ChevronDown className="transform -rotate-90" />
                </>
              </Link>
            </li>
            <li>
              <Link
                href="/account/orders"
                className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
              >
                <>
                  <div className="flex items-center gap-x-2">
                    <Package size={16} />
                    <span>Orders</span>
                  </div>
                  <ChevronDown className="transform -rotate-90" />
                </>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden small:block">
        <div className="text-xl-semi flex justify-between items-start mb-4">
          <span>Hello {customer?.first_name}</span>
          <span className="text-small-regular text-gray-700">
            Signed in as:{" "}
            <span className="font-semibold">{customer?.email}</span>
          </span>
        </div>
        <div className="flex flex-col py-8 border-t border-gray-200">
          <div className="flex flex-col gap-y-4 h-full col-span-1 row-span-2 flex-1">
            <div className="flex items-start gap-x-16 mb-6">
              <div className="flex flex-col gap-y-4">
                <h3 className="text-large-semi">Profile</h3>
                <div className="flex items-end gap-x-2">
                  <span className="text-3xl-semi leading-none">
                    {getProfileCompletion(customer)}%
                  </span>
                  <span className="uppercase text-base-regular text-gray-500">
                    Completed
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-y-4">
                <h3 className="text-large-semi">Addresses</h3>
                <div className="flex items-end gap-x-2">
                  <span className="text-3xl-semi leading-none">
                    {customer?.shipping_addresses?.length || 0}
                  </span>
                  <span className="uppercase text-base-regular text-gray-500">
                    Saved
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-2">
                <h3 className="text-large-semi">Recent orders</h3>
              </div>
              <ul className="flex flex-col gap-y-4">
                {orders ? (
                  orders.slice(0, 5).map((order) => {
                    return (
                      <li key={order.id}>
                        <Link href={`/order/details/${order.id}`}>
                          <div className="bg-gray-50 flex justify-between items-center p-4">
                            <div className="grid grid-cols-3 grid-rows-2 text-small-regular gap-x-4 flex-1">
                              <span className="font-semibold">Date placed</span>
                              <span className="font-semibold">
                                Order number
                              </span>
                              <span className="font-semibold">
                                Total amount
                              </span>
                              <span>
                                {new Date(order.created_at).toDateString()}
                              </span>
                              <span>#{order.display_id}</span>
                              <span>
                                {formatAmount({
                                  amount: order.total,
                                  region: order.region,
                                  includeTaxes: false,
                                })}
                              </span>
                            </div>
                            <button
                              className="flex items-center justify-between"
                              onClick={close}
                            >
                              <span className="sr-only">
                                Go to order #{order.display_id}
                              </span>
                              <ChevronDown className="-rotate-90" />
                            </button>
                          </div>
                        </Link>
                      </li>
                    )
                  })
                ) : (
                  <span>No recent orders</span>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
};

const getProfileCompletion = (customer?: Omit<Customer, "password_hash">) => {
  let count = 0;

  if (!customer) {
    return 0;
  }

  if (customer.email) {
    count++;
  }

  if (customer.first_name && customer.last_name) {
    count++;
  }

  if (customer.phone) {
    count++;
  }

  if (customer.billing_address) {
    count++;
  }

  return (count / 4) * 100;
};

export default Overview;
