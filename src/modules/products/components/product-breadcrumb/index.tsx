// @ts-nocheck
import Link from "next/link"
import { useEffect, useState } from "react"
import { getProductById } from "@lib/util/products_api";

export default function ProductBreadCrumb(params) {
  useEffect(() => {
    if(params.productCate.length ==0 ){
      getProductById(params.productId,"id")
          .then((res) => {
            params.setProductCate(res.product.categories.sort((a,b) => a.rank - b.rank))
          })
          .catch((err) => {
              console.error('Error:', err);           
          });
      }
}, [params]);
const rackCategories= ["trending-reads","new-and-noteworthy","e-nool-picks","start-series"]   
  return (
    <div className="sm:px-16 px-5 pb-6 lg:pb-0">
      <div className="rounded-3xl container mx-auto px-6">
        <nav className="flex">
          <ol role="list" className="flex items-center">
            <li className="text-left">
              <div className="-m-1">
                <Link
                  href="/browse"
                  className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                >
                  Browse
                </Link>
              </div>
            </li>
            <li className="text-left">
              {/* <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <div className="-m-1">
                  <Link
                    href="#"
                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    aria-current="page"
                  >
                    {" "}
                    Categories{" "}
                  </Link>
                </div>
              </div> */}
            </li>
          
            {params.productCate.length !=0 && params.productCate.map((item) => (
              <>
              {!rackCategories.includes(item.handle) &&
                <li className="text-left" key={item.id}>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <div className="-m-1">
                    <Link
                      href={`/category/${item?.handle}`}
                      className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    >
                      {" "}
                      {item?.name}{" "}
                    </Link>
                  </div>
                </div>
              </li>
              }
            </>
            ))}
          </ol>
        </nav>
      </div> 
    </div> 
  )
}

