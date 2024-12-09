"use client";
import React from "react";
import { useState, useRef, useEffect, Fragment } from "react";
import Image from "next/image";
import useToggleState from "@lib/hooks/use-toggle-state";
import Modal from "@modules/common/components/modal";
import Button from "@modules/common/components/button";
import Spinner from "@modules/common/icons/spinner";
import { updateBookshelf } from "@lib/util/bookshelf";

const BookShelfEditModal = (props) => {
  const { state, open, close } = useToggleState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookshelfName, setBookshelfName] = useState(props.bookshelf?.name);
  const handleClose = () => {
    close();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    const name = bookshelfName;
    const data = {
      customer_id: props?.customer?.id,
      id: props?.bookshelf?.id,
      name: name,
    };

    await updateBookshelf(data);

    if (props.refresh) {
      props.refresh();
    }

    setSubmitted(true);
    setSubmitting(false);
    close();
    return false;
  };

  const handleOpen = () => {
    open();
  };
  return (
    <>
      <button
        className="inline-flex text-white bg-[#7CC9B5] font-graphikBold border-0 py-1 w-18 text-center px-5 focus:outline-none hover:bg-[#447466] text-sm rounded mr-2"
        onClick={open}
      >
        Edit
      </button>
      <Modal isOpen={state} close={handleClose}>
        <Modal.Title>
          <h2 className="text-xl font-bold">Edit bookshelf title</h2>
        </Modal.Title>
        <Modal.Body>
          <form
            onSubmit={handleSubmit}
            id="reviewForm"
            className="h-full flex flex-col justify-between"
          >
            <div className="grid gap-4 mb-2 grid-cols-2 mt-1">
              <div className="col-span-2 mt-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Name
                </label>
                <input
                  onChange={(event) => setBookshelfName(event.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  value={bookshelfName}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Name"
                  required
                ></input>
              </div>
            </div>
            <Button className="min-h-0  mt-5 bg-primary" disabled={submitting}>
              {submitting ? <Spinner /> : "Save"}
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BookShelfEditModal;
