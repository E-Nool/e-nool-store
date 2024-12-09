// @ts-nocheck
"use client";
import React from "react";
import { useState, useRef, useEffect, Fragment } from "react";
import Image from "next/image";
import { useAccount } from "@lib/context/account-context";
import useToggleState from "@lib/hooks/use-toggle-state";
import gridEnabled from "@modules/common/icons/gridEnabled.svg";
import gridDisabled from "@modules/common/icons/gridDisabled.svg";
import listEnabled from "@modules/common/icons/listEnabled.svg";
import listDisabled from "@modules/common/icons/listDisabled.svg";
import {
  fetchBookshelves,
  addBookshelves,
  addBookshelfProduct,
  deleteBookshelfItem,
} from "@lib/util/bookshelf";
import BookShelfProductsList from "@modules/book-shelf/bookshelf-products-list";
import BookShelfEditModal from "../bookshelf-edit-modal";
import BookShelfDeleteModal from "../bookshelf-delete-modal";
import Add from "../../../../public/images/Add.png";

const BookshelfPageTemplate = ({ id }) => {
  const [showModal, setShowModal] = useState(false);
  const [isGridView, setGridView] = useState(true);
  const [isMyWishlist, setisMyWishlist] = useState(true);
  const [bookshelf, setBookshelf] = useState(null);
  const [bookshelves_count, setBookshelvesCount] = useState(0);
  const [bookshelfName, setBookshelfName] = useState("");

  const enableGridView = () => {
    if (!isGridView) {
      setGridView(true);
    }
  };
  const enableListView = () => {
    if (isGridView) {
      setGridView(false);
    }
  };
  const enableWishView = () => {
    if (!isMyWishlist) {
      setisMyWishlist(true);
    }
  };
  const enableBookView = () => {
    if (isMyWishlist) {
      setisMyWishlist(false);
    }
  };
  const { state, open, close } = useToggleState(false);
  const handleClose = () => {
    close();
  };
  const { customer } = useAccount();

  const getBookshelf = async (customer_id, bookshelf_id = null) => {
    try {
      if (!customer_id) throw "Customer Id not found";
      const bs = await fetchBookshelves(customer_id, bookshelf_id);
      if (bs && bs.status) {
        const [bkshelf, bs_count] = bs.data;
        if (bkshelf) {
          setBookshelf(bkshelf[0]);
          setBookshelfName(bkshelf[0]?.name);
        }

        setBookshelvesCount(bs_count);
        // console.log(bookshelf)
      }
      // console.log(bs);
    } catch (err) {
      // Handle Error
    }
  };
  // loadBookshelves(customer.?id)
  // console.log(customer)
  useEffect(() => {
    if (customer) {
      // Load bookshelves
      // setTimeout(() => {
      getBookshelf(customer.id, id);
      // }, 2000)
    }
  }, [customer, id]);

  const removeBookshelfItem = async (item_id) => {
    if (item_id) {
      await deleteBookshelfItem(item_id);
      // getBookshelf(customer?.id, id);
    }
  };

  useEffect(() => {
    const handleRemoveBookshelfItem = async (e) => {
      const details = e.detail;
      if (details && details.product && details.product.book_shelf_item_id) {
        const prod = details.product;
        const ele = document.querySelector(
          `.bk-item[data-prod-id='${prod.product_id}']`
        );
        if (ele) {
          await removeBookshelfItem(details.product.book_shelf_item_id);
          ele.remove();
          if (details.close) details.close();
        }
      }
    };
    document.addEventListener(
      "remove:bookshelf:item:btn:clicked",
      handleRemoveBookshelfItem
    );
    return () =>
      document.removeEventListener(
        "remove:bookshelf:item:btn:clicked",
        handleRemoveBookshelfItem
      );
  }, []);
  return (
    <>
      <div className="  justify-start pt-10 ">
        <div className=" w-25 mt-8 border-b-2 border-b-[#7cc9b5] ">
          <button className=" mt-4 mb-3 ml-3  text-[#015464] text-sm font-graphikBold transition hover:border-[#015464] duration-150 border-b-8 border-[#015464] ">
            Bookshelf
          </button>
        </div>
      </div>

      {bookshelf ? (
        <>
          <div className="bookshelf-container lg:col-gap-10 xl:col-gap-10 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-1 py-10">
            <div className=" lg:col-span-1 lg:row-end-2 h-full">
              {bookshelf?.bookshelf_thumb ? (
                <Image
                  className="w-44 min-h-[250px] max-h-[250px] rounded-2xl object-cover object-center mb-4 "
                  src={bookshelf?.bookshelf_thumb}
                  alt="content"
                  width="100"
                  height="100"
                />
              ) : (
                <Image
                  className="w-44 min-h-[250px] max-h-[250px] rounded-2xl object-cover object-center mb-4"
                  src={Add}
                  alt="content"
                />
              )}
            </div>
            <div className="lg:col-span-4 lg:px-6 lg:pl-4">
              <h3 className=" text-[#015464] text-3xl font-graphikBold">
                {bookshelfName}
              </h3>
              <div className="mt-5">
                <BookShelfEditModal
                  bookshelf={bookshelf}
                  customer={customer}
                  refresh={() => getBookshelf(customer.id, id)}
                />
                <BookShelfDeleteModal bookshelf={bookshelf} />
                {/*<button 
				    			className=" text-white bg-[#015464] border-0 py-1 px-4 w-18 text-center focus:outline-none rounded text-sm ">
				    			Delete
				    		</button>*/}
              </div>
            </div>
          </div>
        </>
      ) : null}
      <div className="filter-container">
        <div className=" flex text-center gap-4 border-b-2 border-[#7cc9b5] py-3">
          <div className="sm:flex pt- sm:space-x-3 top-[20px]  mx-auto justify-end mb-8"></div>

          <button onClick={enableGridView}>
            <Image
              src={isGridView ? gridEnabled : gridDisabled}
              alt="gridEnabled"
              className="px-2 w-10"
              width={13}
              height={13}
            />
          </button>
          <button onClick={enableListView}>
            <Image
              src={!isGridView ? listEnabled : listDisabled}
              alt="listdisabled"
              className="px-2 w-9 items-center"
              width={12}
              height={13}
            />
          </button>
        </div>
      </div>
      <div className="product-list-container">
        {bookshelf ? (
          <BookShelfProductsList bookshelf={bookshelf} view={isGridView} />
        ) : null}
      </div>
    </>
  );
};
export default BookshelfPageTemplate;
