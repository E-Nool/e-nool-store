// @ts-nocheck
import { fetchBookshelfProducts, deleteBookshelfItem } from "@lib/util/bookshelf";
import React, { useEffect, useState } from "react"
import Spinner from "@modules/common/icons/spinner";
import { CardsGrid, CardsList } from "../common/components/CarouselCards/CategoryItem"
import { useAccount } from "@lib/context/account-context"
import { getProductImage } from "@lib/util/prices"
import BookShelfNoProducts from "./bookshelf-no-products"
import { TrashIcon } from '@heroicons/react/24/solid'
import Modal from "@modules/common/components/modal"
import useToggleState from "@lib/hooks/use-toggle-state";
import Button from "../common/components/button"

const BookShelfProductsList = (props) => {
	const bookshelf = props.bookshelf;
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const { customer} = useAccount()
	const [itemId, setItemId] = useState(null)

	const { state, open, close } = useToggleState(false)
	const handleClose = () => {   
	    close()
	}

	const loadBookshelfProducts = async (bookshelf_id) => {
		try{
			if(!bookshelf_id) throw "Bookshelf Id not found";
			const items = await fetchBookshelfProducts(bookshelf_id);
			if(items && items.status){
				const data = items.data;
				setItems(data);
				setLoading(false);
			}
			// console.log(bs);
		}catch(err){
			// Handle Error
		}
	}

	const removeBookshelfItem = async (item_id) => {
		if(item_id){
			await deleteBookshelfItem(item_id);
			await loadBookshelfProducts(bookshelf?.id);
			handleClose();
		}
	}

	const convertToDecimal = (amount) => {
        return Math.floor(amount) / 100
    }

	const formatPrice = (amount,currency_code) => {
	    return new Intl.NumberFormat("en-US", {
	      style: "currency",
	      // TODO assuming region is already defined somewhere
	      currency: currency_code,
	    }).format(convertToDecimal(amount))
	}

	useEffect(() => {
		// Load bookshelves
		setTimeout(() => {
			loadBookshelfProducts(bookshelf.id);
		}, 2000)
	}, [bookshelf.id]);

	return (
		<>
			{
				(loading)
					? <div className="flex justify-center mt-20"><Spinner size="30"/></div>
					: (items.length > 0)
							? (
								<div className={`${props.view ? "grid grid-cols-2 max-w-6xl md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-3 mt-4" : ""}`} id="book-shelf-products-list">
									{items.map(function(item, index){
										{/*console.log(item?.metadata);*/}
										if(props.view){
											return (
												<div 
													className="product-grid-container bk-item"
													key={index}
													data-prod-id={`${item?.product_id}`}
												>
												    {/*<div className="bookshelf-grid-item-remove-btn-container text-right">
												    	<button
													    	className="bg-red-500 text-sm p-1 text-white rounded-full items-center justify-center"
													    	onClick={() => (open(),setItemId(item?.book_shelf_item_id))}
												    	>
												    		<TrashIcon className="h-5 w-5"/>
												    	</button>
												    </div>*/}
													<CardsGrid
											          title={item?.title}
											          author={item?.metadata?.author}
											          rating={item?.metadata?.review_rating || 0}
											          ratingCount={item?.metadata?.review_count || 0}
											          handle={item?.handle}
											          price={formatPrice(0, "USD")}
											          imageSrc={getProductImage(item?.thumbnail)}
											          variants={item?.variants}
											          wishlist={[]}
											          index = {index}
											          accountPage={true}
											          customer_id={customer?.id || null}
											          product={item}
											        />
										        </div>
										    )
										}else{
											return (
												<div 
													className="product-list-container bk-item"
													key={index}
													data-prod-id={`${item?.product_id}`}
												>
												    {/*<div className="bookshelf-grid-item-remove-btn-container text-right">
												    	<button
													    	className="bg-red-500 text-sm p-1 text-white rounded-full items-center justify-center"
													    	onClick={() => (open(),setItemId(item?.book_shelf_item_id))}
												    	>
												    		<TrashIcon className="h-5 w-5"/>
												    	</button>
												    </div>*/}
													<CardsList
											          title={item?.title}
											          author={item?.metadata?.author}
											          rating={item?.metadata?.review_rating || 0}
											          ratingCount={item?.metadata?.review_count || 0}
											          handle={item?.handle}
											          price={formatPrice(0, "USD")}
											          imageSrc={getProductImage(item?.thumbnail)}
											          variants={item?.variants}
											          wishlist={[]}
											          index = {index}
											          accountPage={true}
											          customer_id={customer?.id || null}
											          product={item}
											        />
										        </div>
											)
										}
										 
									})}
							    </div>
							   )
							: <BookShelfNoProducts/>
			}
			<Modal isOpen={state} close={handleClose}>
			  <Modal.Title>
			    <h2 className="text-xl font-bold">Bookshelf</h2>
			  </Modal.Title>
			  <Modal.Body>
			    <p className="text-center mt-10 text-neutral-700">Are you sure you want to delete this bookshelf item?</p>
			  </Modal.Body>
			  <Modal.Footer>
			    <Button className="!bg-gray-200 !text-gray-900 !border-gray-200 min-h-0" onClick={handleClose}> Cancel </Button>
			    <Button className="min-h-0" onClick={() => removeBookshelfItem(itemId)}> Yes </Button>
			  </Modal.Footer>
			</Modal>
		</>
	)
}

export default BookShelfProductsList;