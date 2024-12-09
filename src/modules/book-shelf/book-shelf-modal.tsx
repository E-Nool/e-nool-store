import React, { useEffect, useState } from "react"
import Button from "@modules/common/components/button";
import Spinner from "@modules/common/icons/spinner";
import Link from "next/link";
// import { addReportBook } from "@lib/util/products_api";
import useToggleState from "@lib/hooks/use-toggle-state";
import Modal from "@modules/common/components/modal"
import BookShelfComponent from ".";

const BookShelfModal = (props) => {
	const { state, open, close } = useToggleState(false)
	const handleClose = () => {   
	    close()
	}

	return (
		<>
		    <button className="block px-4 w-full py-2 hover:bg-gray-100 text-xs text-left"
                id="book-shelf" onClick={open}>Add to Bookshelf</button>
			<Modal isOpen={state} close={handleClose}>
		        <Modal.Title >
		          <h2 className="text-xl font-bold">Bookshelf</h2>
		          </Modal.Title>
		        <Modal.Body>
		            <BookShelfComponent product={props.product}></BookShelfComponent>
		        </Modal.Body>            
		    </Modal>
		</>
	)
}
export default BookShelfModal;