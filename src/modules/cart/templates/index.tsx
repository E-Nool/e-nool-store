"use client";

import useEnrichedLineItems from "@lib/hooks/use-enrich-line-items";
import DiscountCode from "@modules/checkout/components/discount-code";
import SkeletonCartPage from "@modules/skeletons/templates/skeleton-cart-page";
import { useCart, useMeCustomer } from "medusa-react";
import EmptyCartMessage from "../components/empty-cart-message";
import SignInPrompt from "../components/sign-in-prompt";
import ItemsTemplate from "./items";
import Summary from "./summary";
import Image from "next/image";
import Lefe from "@public/images/lefe1.png";
import bgimg from "@public/images/bg1.png";
import Link from "next/link";
import Button from "@modules/common/components/button";

const CartTemplate = () => {
  const { cart } = useCart();
  const { customer, isLoading } = useMeCustomer();
  const items = useEnrichedLineItems();

  if (!cart || !cart?.id?.length || isLoading) {
    return <SkeletonCartPage />;
  }

  return (
    <div className=" py-12   ">
      <Image
        className=" absolute z-0 w-5/6 top-0 right-0"
        src={bgimg}
        alt="bgimg"
      />
      {/* <Image
        className=" hidden lg:block absolute top-36 z-0 bottom-36 right-10 w-24 "
        src={Lefe}
        alt=""
      /> */}
      <div className="px-5 xl:px-20  2xl:px-20 container mx-auto">
        {cart.items.length ? (
          <div className="grid xl:grid-cols-6  md:grid-cols-1">
            <div className="xl:col-start-1 xl:col-end-5 md:col-auto relative bg-[#015464] rounded-2xl  text-white p-6 gap-y-6 ">
              {/* {!customer && <SignInPrompt />} */}
              <ItemsTemplate region={cart?.region} items={items} />
            </div>
            <div className="relative mt-8 xl:mt-0 xl:col-start-5 xl:col-end-7 xl:pl-8">
              <div className="flex flex-col gap-y-8 sticky top-12">
                {cart && cart.region && (
                  <>
                    <div className="bg-[#015464] p-6 rounded-2xl">
                      <Summary cart={cart} />
                    </div>
                    {/*<div className="bg-[#015464] p-6 rounded-2xl">
                      <DiscountCode cart={cart} />
                    </div>*/}
                    <div className="bg-[#015464] p-6 rounded-2xl">
                      <Link href="/browse">
                        <Button className="font-graphikBold inline-flex items-center justify-center rounded-full border-2 border-transparent bg-[#7ac8b3] px-12 py-2 text-center text-base text-white transition-all duration-200 ease-in-out focus:shadow mx-1">
                          Continue Shopping
                        </Button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* {!customer && <SignInPrompt />} */}
            <EmptyCartMessage />
          </div>
        )}
      </div>
    </div>
  );
};
export default CartTemplate;
