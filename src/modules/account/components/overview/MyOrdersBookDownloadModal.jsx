import React, { useEffect, useState } from "react"
import Button from "@modules/common/components/button";
import Spinner from "@modules/common/icons/spinner";
import Link from "next/link";
// import { addReportBook } from "@lib/util/products_api";
import useToggleState from "@lib/hooks/use-toggle-state";
import Modal from "@modules/common/components/modal"

const MyOrdersBookDownloadModal = ({product}) => {
	const { state, open, close } = useToggleState(false)
	const handleClose = () => {   
	    close()
	}

	return (
		<>
		    <button className="w-full md:w-[auto] block md:inline-block text-center bg-[#7CC9B5] md:ml-5 mt-2 md:mt-0 p-2 px-8 rounded-3xl text-white"
               onClick={open}>Download</button>
			<Modal isOpen={state} close={handleClose}>
		        <Modal.Title >
		          <h2 className="text-xl font-bold">Download Book</h2>
		          </Modal.Title>
		        <Modal.Body>
			        {product ? (
			        	<div className="text-center mt-10">
				        	<a target={"_blank"} download href={product?.metadata?.download_pdf || "/Book_1.pdf"} className="md:w-[auto] block md:inline-block text-center bg-[#015464] p-2 px-8 rounded-3xl text-white">
					        	Download Pdf
				        	</a>
			        	</div>
			        ) : (
				        <p className="text-center mt-10">Fetching Product Book....</p>
			        )}
		        </Modal.Body>            
		    </Modal>
		</>
	)
}
export default MyOrdersBookDownloadModal;