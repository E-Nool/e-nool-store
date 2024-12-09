import React from "react"
import { useState, useRef, useEffect, Fragment } from "react"
import Image from "next/image"
import useToggleState from "@lib/hooks/use-toggle-state";
import Modal from "@modules/common/components/modal"
import Button from "@modules/common/components/button";

const RemoveBookshelfItem = (props) => {
	const { state, open, close } = useToggleState(false)
	const product = props.product;
	// console.log(props.product)
	const handleClose = () => {   
        close()
    }  

    const removeBookshelfItem = () => {
    	// console.log(product.id)
    	document.dispatchEvent(new CustomEvent("remove:bookshelf:item:btn:clicked", {
		    detail: { 
		    	product : product,
		    	close :  close
		    }
	    }));
    }

	return (
		<>
			<button style={{display: 'none'}} className="block px-4 w-full py-2 hover:bg-gray-100 text-xs text-left"
                id="remove-book-shelf" onClick={open}>Remove From This Bookshelf</button>
            <Modal isOpen={state} close={handleClose}>
			  <Modal.Title>
			    <h2 className="text-xl font-bold">Bookshelf Item</h2>
			  </Modal.Title>
			  <Modal.Body>
			    <p className="text-center mt-10 text-neutral-700">Are you sure you want to remove this bookshelf item?</p>
			  </Modal.Body>
			  <Modal.Footer>
			    <Button className="!bg-gray-200 !text-gray-900 !border-gray-200 min-h-0" onClick={handleClose}> Cancel </Button>
			    <Button className="min-h-0" onClick={removeBookshelfItem}> Yes </Button>
			  </Modal.Footer>
			</Modal>
		</>
	);
}

export default RemoveBookshelfItem;