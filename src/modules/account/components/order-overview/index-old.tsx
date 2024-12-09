// @ts-nocheck
"use client";

import Button from "@modules/common/components/button";
import Spinner from "@modules/common/icons/spinner";
import { useCustomerOrders } from "medusa-react";
import Link from "next/link";
import Thumbnail from "@modules/products/components/thumbnail";
import { getProductImage } from "@lib/util/prices";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { round } from "lodash";
import React, { Fragment, useState, useEffect, useRef, useMemo } from "react";

const OrderOverview = ({filterDate}) => {
  const paramsObject = useSearchParams();
  const router = useRouter();
  const pathname = usePathname()
  // const { regions } = useRegions();

  const [limit, setLimit] = useState(2);
  const [currentPage, setCurrentPage] = useState(
    parseInt(paramsObject.get("page") ?? "1")
  );

  const fromDate = paramsObject.get("from") || '';
  
  // const [count, setCount] = useState(0);
  
  const [totalPage, setTotalPage] = useState(0);

  const [offset, setOffset] = useState(
    Math.abs(currentPage == 1 ? 0 : limit * (currentPage - 1))
  );

  // console.log(filterDate);

  const { orders, isLoading, count } = useCustomerOrders({
    created_at : {
      gt : fromDate
    },
    limit,
    offset
  });

  console.log(orders, limit,offset);
  // console.log(filterDate);

  useEffect(() => {
    const urlLocationupdate = () => {
      // router.push(`/account/orders?page=${currentPage}&date=${filterDate}`);
      router.push(`/account/orders?page=${currentPage}${fromDate != '' ? '&from='+fromDate : ''}`);
    };

    // setCount(parseInt(count));
    let pageNum = 1;
    if (count > limit) {
      // pageNum = Number.isInteger(count / limit)
      //   ? count / limit
      //   : count / limit + 1;
      pageNum = Math.ceil(count/limit);
    }
    setTotalPage(pageNum);
    urlLocationupdate();
  }, [
    currentPage,
    limit,
    offset,
    count,
    totalPage,
    router,
    isLoading,
    // filterDate
    filterDate
  ]);

  // useEffect(() => {
  //   // window.location.href = `${pathname}?page=${currentPage}&date=${filterDate}`;
  // }, [filterDate])

  // console.log(totalPage, count, offset, orders);

  if (isLoading) {
    return (
      <tr class="">
        <td colSpan="7" className="text-center py-2">
          <Spinner size={36} />
        </td>
      </tr>
    );
  }
  if (orders?.length) {
    return (
      <>
        {orders.map((o, length) => (
          <Fragment key={length}>
            {o.items.map((item, i) => (
              <tr key={i} class="border border-b-[#7cc9b5] border-x-[transparent]">
                  <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                    <Thumbnail
                      thumbnail={getProductImage(
                        getProductImage(item.thumbnail)
                      )}
                      images={[]}
                      size="xs_small"
                    />
                  </th>
                  <td class="px-6 py-4 text-[#015464] font-extrabold whitespace-nowrap">
                      {item.title}
                  </td>
                  <td class="px-6 py-4 text-[#015464] font-extrabold whitespace-nowrap">
                      {item?.metadata?.author?.name}
                  </td>
                  <td class="px-6 py-4 text-[#015464] font-extrabold whitespace-nowrap">
                      {item?.material}
                  </td>
                  <td class="px-6 py-4 text-[#015464] font-extrabold whitespace-nowrap">
                      {new Date(o.created_at).toDateString()}
                  </td>
                  <td class="px-6 py-4 text-[#015464] font-extrabold whitespace-nowrap">
                      <Link
                        href={item?.metadata?.download_pdf || "/Book_1.pdf"}
                        download
                        target={"_blank"}
                        className=" bg-[#C80A0A] text-white p-1 px-6 rounded"
                      >
                        PDF
                      </Link>
                  </td>
                  <td class="px-6 py-4 text-[#015464] font-extrabold whitespace-nowrap">
                      <button className=" mt- text-white bg-green-500 p-2 px-5 rounded-3xl">
                        Success
                      </button>
                  </td>
              </tr>
            ))}
          </Fragment>
        ))}
        {/*<div className="px-20">
          {orders.map((o) => (
            <>
              <div className="grid grid-cols-7  gap-3 justify-center items-center mt-9">
                <div className="">
                  <Thumbnail
                    thumbnail={getProductImage(
                      getProductImage(o.items[0].thumbnail)
                    )}
                    images={[]}
                    size="xs_small"
                  />
                </div>
                <div className=" text-[#015464] font-extrabold">
                  {o.items[0].title}
                </div>
                <div className=" text-[#707070] font-semibold text-sm">
                  {o?.items[0]?.metadata?.author}
                </div>
                <div className=" text-[#015464] font-bold">Ebook</div>
                <div className=" text-[#015464] font-bold">
                  {" "}
                  {new Date(o.created_at).toDateString()}
                </div>
                <div>
                  <Link
                    href={"/Book_1.pdf"}
                    download
                    target={"_blank"}
                    className=" bg-[#C80A0A] text-white p-1 px-6 rounded"
                  >
                    PDF
                  </Link>
                </div>
                <div>
                  <button className=" mt- text-white bg-green-500 p-2 px-5 rounded-3xl">
                    Success
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>*/}
        <div className="mx-auto flex justify-center items-center mt-4 relative z-0">
          <nav
            className="inline-flex items-center justify-center rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {/*<a
              onClick={() => pageSwitch(currentPage - 1)}
              href="#"
              className="relative  inline-flex items-center rounded-l-sm px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >*/}
            <a
              href={`/account/orders?page=${currentPage - 1}${fromDate != '' ? '&from='+fromDate : ''}`}
              className="relative  inline-flex items-center rounded-l-sm px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <p className="text-sm  text-[#408080]">Previous</p>
            </a>

            {[...Array(round(totalPage + 1))].map((e, i) => {
              return (
                <>
                  {i != 0 && (
                    <>
                      {i == currentPage ? (
                        <a
                          href="#"
                          aria-current="page"
                          className="relative z-10 inline-flex items-center bg-[#7CC9B5] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          {i}{" "}
                        </a>
                      ) : (
                        <a
                          href={`/account/orders?page=${i}${fromDate != '' ? '&from='+fromDate : ''}`}
                          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                          {" "}
                          {i}
                        </a>
                      )}
                    </>
                  )}{" "}
                </>
              );
            })}
            <a
              href={`/account/orders?page=${currentPage + 1}${fromDate != '' ? '&from='+fromDate : ''}`}
              className="relative    inline-flex items-center rounded-r-sm px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <p className="text-sm text-[#408080] ">Next</p>
            </a>
          </nav>
        </div>
      </>
    );
  }

  return (
    <>
      <tr class="">
          <td colSpan="7" className="text-center py-2">
            <h2 className="text-large-semi">Nothing to see here</h2>
            <p className="text-base-regular">
              You don&apos;t have any orders yet, let us change that {":)"}
            </p>
            <div className="mt-4">
              <Link href="/" passHref>
                <Button className="w-[auto] mx-auto">Continue shopping</Button>
              </Link>
            </div>
          </td>
      </tr>
      {/*<div className="w-full flex flex-col items-center gap-y-4">
        <h2 className="text-large-semi">Nothing to see here</h2>
        <p className="text-base-regular">
          You don&apos;t have any orders yet, let us change that {":)"}
        </p>
        <div className="mt-4">
          <Link href="/" passHref>
            <Button>Continue shopping</Button>
          </Link>
        </div>
      </div>*/}
    </>
  );
};

export default OrderOverview;
