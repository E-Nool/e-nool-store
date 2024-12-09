"use client"
import React from "react"
import { useState, useRef, useEffect, Fragment } from "react"
import Image from "next/image"
import useToggleState from "@lib/hooks/use-toggle-state";
import Modal from "@modules/common/components/modal"
import Button from "@modules/common/components/button";
import Spinner from "@modules/common/icons/spinner";
import { deleteBookshelf } from "@lib/util/bookshelf";
import { useRouter } from "next/navigation"

const BookShelfDeleteModal = (props) =>{
	const { state, open, close } = useToggleState(false)
	const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [bookshelfName, setBookshelfName] = useState(props.bookshelf?.name);
    const router = useRouter()
    const handleClose = () => {   
        close()
    }  

    const  removeBookshelf = async (event) =>{
	    // event.preventDefault();
	    // setSubmitting(true)
	    // const name = bookshelfName;
	    // const data = {
	    // 	customer_id : props?.customer?.id,
	    // 	id : props?.bookshelf?.id,
	    // 	name : name
	    // }
	    const bookshelf_id = props?.bookshelf?.id;
	    await deleteBookshelf(bookshelf_id);

	    // await updateBookshelf(data)

	    // if(props.refresh){
	    // 	props.refresh();
	    // }

	    // setSubmitted(true)
	    // setSubmitting(false)
	    close()
	    router.push('/account/my-library');
	    return false;
	}
  
    const handleOpen = () => {   
	    open()
    }
	return (
		<>
			<button 
    			className=" text-white bg-[#015464] border-0 py-1 px-5 font-graphikBold w-18 text-center focus:outline-none rounded text-sm "
    			onClick={open}>
    			Delete
    		</button>
			<Modal isOpen={state} close={handleClose}>
			  <Modal.Title>
			    <h2 className="text-xl font-bold">Bookshelf</h2>
			  </Modal.Title>
			  <Modal.Body>
			    <p className="text-center mt-10 text-neutral-700">Are you sure you want to delete this bookshelf?</p>
			  </Modal.Body>
			  <Modal.Footer>
			    <Button className="!bg-gray-200 !text-gray-900 !border-gray-200 min-h-0" onClick={handleClose}> Cancel </Button>
			    <Button className="min-h-0" onClick={removeBookshelf}> Yes </Button>
			  </Modal.Footer>
			</Modal>
		</>
	)
}

export default BookShelfDeleteModal;