import React, { useEffect, useState } from "react"
import Button from "@modules/common/components/button";
import Spinner from "@modules/common/icons/spinner";
import Link from "next/link";
import { useAccount } from "@lib/context/account-context"
import { fetchBookshelves, addBookshelves, addBookshelfProduct } from "@lib/util/bookshelf";
import BookshelvesGridItem from "./bookshelf-grid-item"
import BookShelfProductsGrid from "./bookshelf-products-grid"
import useToggleState from "@lib/hooks/use-toggle-state";
import Modal from "@modules/common/components/modal"

const BookshelvesGrid = (props) => {
	const bs = props.bookshelves;
	const bookshelf_detail = props.bookshelfDetail;

	const { state, open, close } = useToggleState(false)
	const handleClose = () => {   
	    props.bookshelfDetailHandle(null);
	}

	useEffect(function(){
		if(bookshelf_detail){
			open();
		}
	}, [bookshelf_detail,open]);


	return (
		<>
			<div 
				className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-5 mb-20 bookshelves-grid mt-4 px-5 md:px-20"
			>
		    	{bs.map((b, index) => {
					return <BookshelvesGridItem 
								key={index} 
								bookshelf={b} 
								bookshelfDetailHandle={props.bookshelfDetailHandle}
								loadBookshelves={props.loadBookshelves}
							/>
				})}
		    </div>
			{/*{
				(!bookshelf_detail)
				?   (
						<div 
							className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-14 mb-20 bookshelves-grid mt-4 px-20"
						>
					    	{bs.map((b, index) => {
								return <BookshelvesGridItem 
											key={index} 
											bookshelf={b} 
											bookshelfDetailHandle={props.bookshelfDetailHandle}
											loadBookshelves={props.loadBookshelves}
										/>
							})}
					    </div>
				    )
			    :   (
				    	<Modal isOpen={state} close={handleClose} size="full">
					        <Modal.Title >
					          <h2 className="text-xl font-bold">{bookshelf_detail.name}</h2>
					          </Modal.Title>
					        <Modal.Body>
					            <BookShelfProductsGrid bookshelf={bookshelf_detail} bookshelfDetailHandle={props.bookshelfDetailHandle} view={props.view}/>
					        </Modal.Body>            
					    </Modal>
			    	)
			}*/}
		</>
	    
	)
}

export default BookshelvesGrid;