// @ts-nocheck
import useEnrichedLineItems from "@lib/hooks/use-enrich-line-items"
import { LineItem, Region } from "@medusajs/medusa"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import Thumbnail from "@modules/products/components/thumbnail"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"
import Link from "next/link"
import MyOrdersBookDownloadModal from "@modules/account/components/overview/MyOrdersBookDownloadModal"
import { useProduct } from "medusa-react";

const AccountOrderItem = ({ item, region }) => {
  const pro = useProduct(item?.variant?.product_id);

  return (
    <div className="grid grid-cols-[122px_1fr] gap-x-4" key={item.id}>
      <div className="w-[122px]">
        <Thumbnail thumbnail={item?.thumbnail} size="full" />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col flex-1 text-small-regular">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-base-regular overflow-ellipsis overflow-hidden whitespace-nowrap mr-4">
                <Link
                  href={`/products/${item?.variant?.product?.handle}`}
                >
                  {item?.title}
                </Link>
              </h3>
              {item?.variant && item?.variant?.options ? <LineItemOptions variant={item?.variant} /> : null}
              
              <span>Quantity: {item?.quantity}</span>
              <div className="item-actions mt-5">
                  <a href={`/epub?id=${item?.variant?.product_id}`} className="w-full md:w-[auto] block md:inline-block text-center bg-[#015464] p-2 px-8 rounded-3xl text-white">
                    Read
                  </a>
                  {!pro?.product ? (
                    <button
                      className="opacity-30 mt-2 md:mt-0 bg-[#7CC9B5] text-center md:ml-5 p-2 px-4 rounded-3xl text-white block md:inline-block"
                    >
                      Download
                    </button>
                  ) : (
                    <a
                      href={
                        pro?.product?.metadata?.download_pdf || "/Book_1.pdf"
                      }
                      download
                      target={"_blank"}
                      className="mt-2 md:mt-0 bg-[#7CC9B5] text-center md:ml-5 p-2 px-4 rounded-3xl text-white block md:inline-block"
                    >
                      Download
                    </a>
                  )}
                  {/*<MyOrdersBookDownloadModal product={pro?.product}/>*/}
                  {/*<a
                    href={
                      item?.metadata?.download_pdf || "/Book_1.pdf"
                    }
                    download
                    target={"_blank"}
                    className="mt-2 md:mt-0 bg-[#7CC9B5] text-center md:ml-5 p-2 px-4 rounded-3xl text-white block md:inline-block"
                  >
                    Download
                  </a>*/}
                </div>
            </div>
            <div className="flex justify-end">
              <LineItemPrice region={region} item={item} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountOrderItem
