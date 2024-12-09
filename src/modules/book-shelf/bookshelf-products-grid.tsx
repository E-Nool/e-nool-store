import BookShelfProductsList from "./bookshelf-products-list";

const BookShelfProductsGrid= (props) => {
	const bookshelf = props.bookshelf;
	return (
		<>
			{/*<div className=" mx-auto container px-20 mt-4">
				<div className="columns-1">
					<button
	                    className="ml-20 bg-[#015464] p-3 px-5 text-white rounded-xl items-center justify-center"
	                    onClick={() => props.bookshelfDetailHandle(null)}
	                >
	                    Back To Bookshelves
	                </button>
				</div>
				<div className="columns-1">
					<h2 className="mb-4 mt-4 text-center  text-[#015464] text-xl font-graphikBold">{bookshelf.name}</h2>
				</div>
			</div>*/}
			<div className={`mx-auto container mt-1 ${(props.view) ? '' : '' }`}>
				<div className="columns-1">
					<BookShelfProductsList
						bookshelf={bookshelf}
						view={props.view}
					/>				
				</div>
			</div>
		</>
	)
}

export default BookShelfProductsGrid;