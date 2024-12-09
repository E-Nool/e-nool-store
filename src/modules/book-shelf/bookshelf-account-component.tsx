import React, { useEffect, useState } from "react"
import { useAccount } from "@lib/context/account-context"
import { addBookshelves } from "@lib/util/bookshelf";
import BookshelfAddForm from "./bookshelf-add-form"
import BookShelfLoginToAccount from "./bookshelf-login-to-account"
import BookshelfCreated from "./bookshelf-created"


const BookShelfAccountComponent = (props) => {
	const shelf_types = {
		"add" : "add-bookshelf",
		"created" : "bookshelf-created"
	};
	const { customer } = useAccount()
	const [shelf_type, setShelfType] = useState(shelf_types['add']);
	const [submitting, setSubmitting] = useState(false)
	const [formErrorMsg, setFormErrorMsg] = useState(null);

	const addBookshelfHandle = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		const bookshelf_name = e.target.name.value || "";
		const bookshelf_description = e.target.description.value || "";
		const customer_id = e.target.customer_id.value || "";
		const bookshelfSubmit = await addBookshelves(customer_id, bookshelf_name, bookshelf_description);
		if(bookshelfSubmit && bookshelfSubmit.status){
			// loadBookshelves(customer?.id)
			// const new_bookshelves = [...bookshelves];
			// new_bookshelves.push(bookshelfSubmit?.data);
			// setBookshelves(new_bookshelves);
			setShelfType(shelf_types['created']);
			// Reload bookshelves
			props.loadBookshelves()
		}else{
			setFormErrorMsg(bookshelfSubmit.message);
			setTimeout(() => {
				setFormErrorMsg(null);
			}, 2500);
		}
		setSubmitting(false);
	}

	return (
		<>
			{(customer) ? (() => {
				switch(shelf_type){
					case "add-bookshelf":
						return (
							<BookshelfAddForm
								submitHandle={addBookshelfHandle}
								customer={customer}
								submitted={submitting}
								formErrMsg={formErrorMsg}
							/>
						)
						break;
					case "bookshelf-created":
						return <BookshelfCreated/>
						break;
					default:
						return <p className="text-center text-gray-600 mt-10">Shelf type not found</p>
				}
			})() : <BookShelfLoginToAccount/>}
		</>
	)
}

export default BookShelfAccountComponent;