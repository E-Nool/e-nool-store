import Link from "next/link";
import React from "react";
import Thumbnail from "@modules/products/components/thumbnail";
import { getProductImage } from "@lib/util/prices";
import Image from "next/image";
import Spinner from "@modules/common/icons/spinner";
import MyOrdersProduct from "./MyOrdersProduct";

const MyOrders = (props) => {
  // console.log(props.orders);
  return (
    <>
      <div class="relative overflow-x-auto sm:rounded-lg mt-5">
        <div className="">
          <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-1 sm:grid-cols-1 sm:items-center lg:grid-cols-2 gap-4  lg:gap-3">
            {!props.orders && (
              <div className=" grid justify-items-center pt-12 h-[200px]">
                <Spinner size={36} />
              </div>
            )}

            {props.orders &&
              props.orders.map((order) => (
                <>
                  {order.items.map((product, i) => (
                    <MyOrdersProduct key={i} product={product} order={order}/>
                  ))}
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrders;
