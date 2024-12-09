"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import leftarrow from "@modules/common/icons/left-arrow.png";
import rightarrow from "@modules/common/icons/right-arrow.png";
import "swiper/css/navigation";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
// import Subscribenow from "@/app/components/subscriptionCard/subscribenow/page";
import { fetchSubscriptions } from "@lib/util/subscription_api";
import SubItem from "@modules/subscription/components/Item";
import SubscribeNow from "@modules/subscription/components/SubscribeModal";
import { useMeCustomer, useProduct } from "medusa-react";
import { fetchMySubscriptions } from "@lib/util/subscription_api";
import { getRazDraftSubscription } from "@lib/util/subscription_api";
import Modal from "@modules/common/components/modal"
import useToggleState from "@lib/hooks/use-toggle-state"
import Button from "@modules/common/components/button"


const SubcriptionCard = () => {
  const { state, open, close } = useToggleState(false)
  const [isLoading, setIsLoading] = useState(true);
  const [subscriptions, setSubscriptions] = useState([]);
  const { customer } = useMeCustomer();

  const [showModal, setShowModal] = useState(false);
  const [productTitle, setProductTitle] = useState("");
  const [currentCart, setCurrentCart] = useState([]);
  const [currentPlan, setCurrentPlan] = useState([]);
  const [currentCustomerPlanID, setCurrentCustomerPlanID] = useState(null);

  const [draftSubscription, setDraftSubscription] = useState(null);

  const [showInfoAlert, setShowInfoAlert] = useState(false);
  const subCatIds = [
    "subscriptioncategory_01HJ5KTYB8E1PKYYM8B17Y7Y70",
    "subscriptioncategory_01HJ5KT4RTKMEPD92V1MRAGBYG",
    "subscriptioncategory_01HJ5N0KMGQYMG9QP8A3310PEM",
  ];
  const subCat = {
    Silver: [],
    Gold: [],
    Plantinum: [],
  };

  const openCartItem = (key, plan) => {
    setShowModal(true);
    setProductTitle(key);
    setCurrentPlan(plan);
    setCurrentCart(subCat[key]);
  };

  useEffect(() => {
    // Add listener
    const showSubInfoAlert = () => {
      setShowInfoAlert(true);
    };
    document.addEventListener('show:subscription:info:alert', showSubInfoAlert);

    // Cleanup function
    return () => {
      document.removeEventListener('show:subscription:info:alert', showSubInfoAlert);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    // console.log(customer)
    const loadSubscriptions = async () => {
      try {
        const data = await fetchSubscriptions();

        if (isMounted) {
          setIsLoading(false);
          data?.data[0].sort((a, b) => parseInt(a.price) - parseInt(b.price));
          setSubscriptions(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getCurrentUserSubscription = async () => {
      if (customer) {
        const subscription = await fetchMySubscriptions(customer?.id);
        if (subscription.status) {
          setCurrentCustomerPlanID(
            subscription?.data?.current?.Subscriptions?.id
          );
        }
      }
    };

    if (isLoading) {
      loadSubscriptions();
    }
    getCurrentUserSubscription();
  }, [customer]);

  useEffect(() => {
    const fetchDraft = async () => {
      const draft = await getRazDraftSubscription(customer?.id);
      if(draft?.status && draft?.data && draft?.data?.payment_url && draft?.data?.subscription){
        setDraftSubscription(draft.data);
        open();
      }
    }
    if(customer){
      fetchDraft();
    }
  }, [customer]);

  const date = new Date();
  date.setMonth(date.getMonth() + 1, 1);
  const month = new Date(date).toLocaleString("en-US", { month: "long" });

  return (
    <div className="container mx-auto ">
      {showInfoAlert && <div className="p-5 my-5 bg-[] text-green-700 bg-green-300  text-center">
        It will take a maximum of 5 minutes to update your plan once you purchase the subscription.
      </div>}
      
      <div className=" ">
        <div className="p-5">
          <h1 className=" text-[#015464] font-graphikBold text-4xl">Silver</h1>
          <p className=" mt-2 text-[14px]  text-[#01adad] font-bold">
            Low-cost affordable reading to get you started.
          </p>
        </div>

        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 3,
            },
            1536: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={0}
          freeMode={true}
          navigation={{
            nextEl: ".swiper-button-next-1",
            prevEl: ".swiper-button-prev-1",
            hiddenClass: "swiper-button-hidden",
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper max-w-7xl mt-10 "
        >
          {!isLoading &&
            subscriptions.data[0].map((item, index) => {
              if (item.subscription_category_id == subCatIds[0]) {
                subCat.Silver.push(item);
                return (
                  <SwiperSlide className="!h-auto p-5" key={item.id}>
                    <SubItem
                      cusCurrentPlanID={currentCustomerPlanID}
                      plan={item}
                      month={month}
                      ShowModal={openCartItem}
                      type="Silver"
                    ></SubItem>
                  </SwiperSlide>
                );
              }
            })}

          <div className="swiper-navigation-buttons">
            <Image
              src={leftarrow}
              width={40}
              className="swiper-button-prev-1 absolute lg:top-64 top-96 z-50 cursor-pointer"
              alt=""
            />
            <Image
              src={rightarrow}
              width={40}
              className="swiper-button-next-1 absolute right-0 lg:top-64 top-96 z-50 cursor-pointer"
              alt=""
            />
          </div>
        </Swiper>
      </div>

      <div className=" container mt-20">
        <div className=" p-5">
          <h1 className=" text-[#015464] font-graphikBold text-4xl">Gold</h1>
          <p className=" mt-2 text-[14px]  text-[#01adad] font-bold">
            Low-cost affordable reading to get you started.
          </p>
        </div>
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 3,
            },
            1536: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={0}
          freeMode={true}
          navigation={{
            nextEl: ".swiper-button-next-1",
            prevEl: ".swiper-button-prev-1",
            hiddenClass: "swiper-button-hidden",
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper max-w-7xl mt-10 "
        >
          {!isLoading &&
            subscriptions.data[0].map((item, index) => {
              if (item.subscription_category_id == subCatIds[1]) {
                subCat.Gold.push(item);
                return (
                  <SwiperSlide className="!h-auto p-5" key={item.id}>
                    <SubItem
                      cusCurrentPlanID={currentCustomerPlanID}
                      plan={item}
                      month={month}
                      ShowModal={openCartItem}
                      type="Gold"
                    ></SubItem>
                  </SwiperSlide>
                );
              }
            })}
          <div className="swiper-navigation-buttons">
            <Image
              src={leftarrow}
              width={40}
              className="swiper-button-prev-1 absolute lg:top-64 top-96 z-50 cursor-pointer"
              alt=""
            />
            <Image
              width={40}
              src={rightarrow}
              alt=""
              className="swiper-button-next-1 absolute right-0 lg:top-64 top-96 z-50 cursor-pointer"
            />
          </div>
        </Swiper>
      </div>

      <div className=" container mt-20">
        <div className=" p-5">
          <h1 className=" text-[#015464] font-graphikBold text-4xl">
            Platinum
          </h1>
          <p className=" mt-2 text-[14px]  text-[#01adad] font-bold">
            Low-cost affordable reading to get you started.
          </p>
        </div>
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1279: {
              slidesPerView: 3,
            },
            1536: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={0}
          freeMode={true}
          navigation={{
            nextEl: ".swiper-button-next-1",
            prevEl: ".swiper-button-prev-1",
            hiddenClass: "swiper-button-hidden",
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper max-w-7xl mt-10 "
        >
          {!isLoading &&
            subscriptions.data[0].map((item, index) => {
              if (item.subscription_category_id == subCatIds[2]) {
                subCat.Plantinum.push(item);
                return (
                  <SwiperSlide className="!h-auto p-5" key={item.id}>
                    <SubItem
                      cusCurrentPlanID={currentCustomerPlanID}
                      plan={item}
                      month={month}
                      ShowModal={openCartItem}
                      type="Plantinum"
                    ></SubItem>
                  </SwiperSlide>
                );
              }
            })}
          <div className="swiper-navigation-buttons">
            <Image
              width={40}
              src={leftarrow}
              className="swiper-button-prev-1 absolute lg:top-64 top-96 z-50 cursor-pointer"
              alt=""
            />
            <Image
              width={40}
              src={rightarrow}
              className="swiper-button-next-1 absolute right-0 lg:top-64 top-96 z-50 cursor-pointer"
              alt=""
            />
          </div>
        </Swiper>
      </div>
      <div className=" z-50 fixed">
        <SubscribeNow
          cusCurrentPlanID={currentCustomerPlanID}
          isVisible={showModal}
          onClose={setShowModal}
          title={productTitle}
          currentCart={currentCart}
          currentPlan={currentPlan}
        />
      </div>

      {draftSubscription && (
        <>
          <Modal isOpen={state} close={close}>
            <Modal.Title>
              <h2 class="text-xl font-bold">Subscription</h2>
            </Modal.Title>
            <Modal.Body>
              <div className="mt-10">
                <h4 class=" text-xl text-center">
                  Would you like to purchase the <strong>{draftSubscription?.subscription?.name}</strong> plan?
                </h4>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="!bg-gray-200 !text-gray-900 !border-gray-200 min-h-0"
                onClick={close}
              >
                Cancel
              </Button>
              <Button className="min-h-0" onClick={() => {
                // window.location.href = `${draftSubscription?.payment_url}`
                window.open(draftSubscription?.payment_url, "_blank");
                const event = new CustomEvent('show:subscription:info:alert');
                document.dispatchEvent(event);
                close();
              }}>
                Purchase
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
};

export default SubcriptionCard;
