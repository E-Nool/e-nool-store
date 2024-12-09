import React, { useEffect, useState } from "react";
import Button from "@modules/common/components/button";
import Spinner from "@modules/common/icons/spinner";
import Link from "next/link";
import { addReportBook } from "@lib/util/products_api";
import useToggleState from "@lib/hooks/use-toggle-state";
import Modal from "@modules/common/components/modal";
import ReportBookComponent from ".";

const ReportBookModal = (props) => {
  const { state, open, close } = useToggleState(false);
  const handleClose = () => {
    close();
  };

  const handleOpen = () => {
    open();
    // props.setDropdownOpen(false)
  };
  const productId = props.product.id;
  const listPage = props?.listPage || false;
  return (
    <>
      {listPage ? (
        <button
          className="block px-4 w-full py-2 hover:bg-gray-100 text-xs text-left"
          id="report-a-book"
          onClick={handleOpen}
        >
          {" "}
          Report a Book{" "}
        </button>
      ) : (
        <button
          type="button"
          className="mt-5 m-auto  inline-flex items-center justify-center rounded-full border-2 border-transparent bg-[#FF0000] bg-none px-6 py-2 text-center text-base  text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 mx-1"
          onClick={open}
        >
          {" "}
          <span className="text-base-semi">Report this title</span>
        </button>
      )}

      <Modal isOpen={state} close={handleClose}>
        <Modal.Title>
          <h2 className="text-xl font-bold">Report this title</h2>
        </Modal.Title>
        <Modal.Body>
          <ReportBookComponent product_id={productId}></ReportBookComponent>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReportBookModal;
