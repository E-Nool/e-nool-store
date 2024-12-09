import React, { useEffect, useState } from "react"
import Button from "@modules/common/components/button";
import Spinner from "@modules/common/icons/spinner";
import Link from "next/link";
import { useAccount } from "@lib/context/account-context"
import { fetchBookshelves, addBookshelves, addBookshelfProduct } from "@lib/util/bookshelf";
import BookShelfLoginToAccount from "./bookshelf-login-to-account"
import ListBookshelves from "./list-bookshelves"
import BookshelfProductAdded from "./bookshelf-product-added"
import BookshelfAddForm from "./bookshelf-add-form"

const BookShelfComponent = (props) => {
	const product = props.product
	const shelf_types = {
		"list" : "bookshelf-list",
		"add" : "add-bookshelf",
		"added" : "book-added"
	};
	const { customer } = useAccount()
	const [shelf_type, setShelfType] = useState(shelf_types['list']);
	const [bookshelves, setBookshelves] = useState([]);
	const [bookshelves_count, setBookshelvesCount] = useState(0);
	const [submitting, setSubmitting] = useState(false)
	const [addingProduct, setAddingProduct] = useState(false)
	const [formErrorMsg, setFormErrorMsg] = useState(null);

	const createBookshelfHandle = () => {
		setShelfType(shelf_types['add']);
	}

	const addBookshelfHandle = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		const bookshelf_name = e.target.name.value || "";
		const bookshelf_description = e.target.description.value || "";
		const customer_id = e.target.customer_id.value || "";
		const bookshelfSubmit = await addBookshelves(customer_id, bookshelf_name, bookshelf_description);
		if(bookshelfSubmit && bookshelfSubmit.status){
			loadBookshelves(customer?.id)
			// const new_bookshelves = [...bookshelves];
			// new_bookshelves.push(bookshelfSubmit?.data);
			// setBookshelves(new_bookshelves);
			setShelfType(shelf_types['list']);
		}else{
			setFormErrorMsg(bookshelfSubmit.message);
			setTimeout(() => {
				setFormErrorMsg(null);
			}, 2500);
		}
		setSubmitting(false);
	}

	const loadBookshelves = async (customer_id) => {
		try{
			if(!customer_id) throw "Customer Id not found";
			const bs = await fetchBookshelves(customer_id);
			if(bs && bs.status){
				const [bss, bs_count] = bs.data;
				setBookshelves(bss);
				setBookshelvesCount(bs_count);
			}
			// console.log(bs);
		}catch(err){
			// Handle Error
		}
	}

	const addProductToShelf = async (shelf_index) => {
		setAddingProduct(true)
		const book__shelf = bookshelves[shelf_index];
		const data = {
			bookshelf_id : book__shelf['id'],
			product_id : product['id'],
			product_name : product['title'],
			product_description : product['description'],
			product_handle : product['handle'],
			product_thumbnail : product['thumbnail'],
			product_url : null
		};
		await addBookshelfProduct(data);
		setAddingProduct(false);
		setShelfType(shelf_types['added']);
	}

	useEffect(() => {
		if(customer){
			// Load bookshelves
			setTimeout(() => {
				loadBookshelves(customer.id);
			}, 2000)
		}
	},[customer]);
	
	return (
		<>
			{(customer) ? (() => {
				switch(shelf_type){
					case 'bookshelf-list':
						return (
							<ListBookshelves
								bookshelves={bookshelves}
								createBookshelfHandle={createBookshelfHandle}
								addProduct={addProductToShelf}
								disableAction={addingProduct}
							/>		
						)
						break;
					case "add-bookshelf":
						return (
							<BookshelfAddForm
								submitHandle={addBookshelfHandle}
								customer={customer}
								submitted={submitting}
								backAction={() => setShelfType(shelf_types['list'])}
								formErrMsg={formErrorMsg}
							/>
						)
						break;
					case "book-added":
						return <BookshelfProductAdded/>
						break;
					default:
						return <p className="text-center text-gray-600 mt-10">Shelf type not found</p>
				}
			})() : <BookShelfLoginToAccount/>}
		</>
	)
}

export default BookShelfComponent;