import Link from "next/link";
import React, {useEffect} from "react";
import Thumbnail from "@modules/products/components/thumbnail";
import { getProductImage } from "@lib/util/prices";
import Image from "next/image";
import Spinner from "@modules/common/icons/spinner";
import MyOrdersBookDownloadModal from "./MyOrdersBookDownloadModal";
import { useProduct } from "medusa-react";

const MyOrdersProduct = ({product, order}) => {

  const item = useProduct(product?.variant?.product_id);

	return (
		<>
			<div className="flex-col md:flex-row flex mt-10 items-center" key={product.id}>
              <div>
                <Image
                  className=" rounded-2xl 2xl:w-56 sm:w-48 xl:w-50 w-56 "
                  src={getProductImage(
                    getProductImage(product.thumbnail)
                  )}
                  alt="content"
                  width={240}
                  height={300}
                />
              </div>
              <div className="w-full md:w-[auto] md:ml-10 item-centre ">
                <h1 className=" text-[#015464]  text-xl mt-1 font-graphikBold">
                  {product.title}
                </h1>
                <p className=" text-[#14adad] mt-5">
                  By {item?.product?.metadata?.author?.name || ""}
                </p>
                <p className=" text-[#015464] font-semibold mt-3">
                  {new Date(order.created_at).toDateString()}
                </p>

                <div className=" mt-5">
                  <a href={`epub?id=${product?.variant?.product_id}`} className="w-full md:w-[auto] block md:inline-block text-center bg-[#015464] p-2 px-8 rounded-3xl text-white">
                    Read
                  </a>
                  {!item?.product ? (
                    <button
                      className="opacity-30 mt-2 md:mt-0 bg-[#7CC9B5] text-center md:ml-5 p-2 px-4 rounded-3xl text-white block md:inline-block"
                    >
                      Download
                    </button>
                  ) : (
                    <a
                      href={
                        item?.product?.metadata?.download_pdf || "/Book_1.pdf"
                      }
                      download
                      target={"_blank"}
                      className="mt-2 md:mt-0 bg-[#7CC9B5] text-center md:ml-5 p-2 px-4 rounded-3xl text-white block md:inline-block"
                    >
                      Download
                    </a>
                  )}
                  {/*<MyOrdersBookDownloadModal product={item?.product}/>*/}
                  {/*<a
                    href={
                      product?.metadata?.download_pdf || "/Book_1.pdf"
                    }
                    download
                    target={"_blank"}
                    className="mt-2 md:mt-0 bg-[#7CC9B5] text-center md:ml-5 p-2 px-4 rounded-3xl text-white block md:inline-block"
                  >
                    Download
                  </a>*/}
                </div>
              </div>
            </div>
		</>
	);
}

export default MyOrdersProduct;