import { useProductActions } from "@lib/context/product-context";
import useProductPrice from "@lib/hooks/use-product-price";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import Button from "@modules/common/components/button";
import OptionSelect from "@modules/products/components/option-select";
import clsx from "clsx";
import Link from "next/link";
import React, { useMemo, useRef } from "react";
import { Product } from "types/medusa";
import Image from "next/image";
import { useRouter } from "next/navigation";

// import {epub} from "../../../../../public/images/sample.epub"

import eye1 from "@modules/common/icons/eye.png";

type ProductActionsProps = {
  product: PricedProduct;
};

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
  const { updateOptions, addToCart, options, inStock, variant } =
    useProductActions();

  const price = useProductPrice({ id: product.id!, variantId: variant?.id });

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price;

    return variantPrice || cheapestPrice || null;
  }, [price]);

  // console.log(selectedPrice);
  const router = useRouter();
  const readSample = () => {
    window.location.href = `/epub?id=` + product.id;
    // router.push(`/epub?id=` + product.id);
  };

  // console.log(product);

  return (
    <div className="flex flex-col gap-y-2">
      {product.collection && (
        <Link
          href={`/collections/${product.collection.handle}`}
          className="text-small-regular text-gray-700"
        >
          {product.collection.title}
        </Link>
      )}
      {product.variants.length > 1 && (
        <div className="my-8 flex flex-col gap-y-6">
          {(product.options || []).map((option) => {
            return (
              <div key={option.id}>
                <OptionSelect
                  option={option}
                  current={options[option.id]}
                  updateOption={updateOptions}
                  title={option.title}
                />
              </div>
            );
          })}
        </div>
      )}

      <div className="mb-4">
        <h1 className="2xl:text-3xl text-xl font-graphikBold text-[#015464]">
          {selectedPrice ? (
            <div className="flex flex-col text-gray-700">
              <span
                className={clsx("text-xl-semi", {
                  "text-rose-600": selectedPrice.price_type === "sale",
                })}
              >
                {product?.metadata?.isFree ? `${selectedPrice.calculated_price[0]}0.00` : selectedPrice.calculated_price}
              </span>
              {selectedPrice.price_type === "sale" && (
                <>
                  <p>
                    <span className="text-gray-500">Original: </span>
                    <span className="line-through">
                      {selectedPrice.original_price}
                    </span>
                  </p>
                  <span className="text-rose-600">
                    -{selectedPrice.percentage_diff}%
                  </span>
                </>
              )}
            </div>
          ) : (
            <div></div>
          )}
        </h1>
      </div>
      <div>
        {product?.metadata?.isFree && <h1 className="text-[#015464] text-md mb-2 font-bold">Platform Fee  : {selectedPrice?.original_price}</h1>}
        <h1 className="text-[#015464] text-xs">Format : {product.material}</h1>
      </div>

      <div>
        <h1 className="text-[#015464] font-graphikBold text-[14px] mt-4 indent-4 text-justify">
          {product.subtitle}
        </h1>
      </div>
      <div>
        <p className="text-[12px] mt-3 text-[#015464]">
          {/* {product.description} */}
        </p>
      </div>

      <div className="mt-2 flex flex-col items-center  space-y-4  py-4 sm:flex-row sm:space-y-0">
        <button
          onClick={readSample}
          type="button"
          className="m-auto inline-flex items-center justify-center rounded-full border-2 border-transparent bg-secondry px-6 py-3 text-center text-base  text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 mx-1 w-full"
        >
          <Image src={eye1} className="w-5 mr-2" alt="" />
          READ A SAMPLE
        </button>

        <button
          onClick={addToCart}
          className=" bg-primary m-auto inline-flex items-center justify-center rounded-full border-2 border-transparent px-12 py-3 text-center text-base  text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 mx-1 w-full"
        >
          {!inStock ? "Out of stock" : " BUY NOW"}
        </button>
      </div>
    </div>
  );
};

export default ProductActions;
