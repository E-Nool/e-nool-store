import BookShelfListItem from "./bookshelf-list-item"
import Spinner from "@modules/common/icons/spinner";

const ListBookshelves = (props) => {
	return (
		<div className="bookshelf-list-container">
			<div className="list-bookshelf-section flex my-5 items-center">
				<button 
					className="text-2xl/[17px] text-white bg-[#015464] border-0 py-3 px-3 pb-4 focus:outline-none w-10 h-10 rounded-full mr-4 flex items-center justify-center"
					onClick={props.createBookshelfHandle}
				>
					&#x2b;
				</button>
				<p className="text-gray-600">Create New Bookshelf</p>
			</div>
			<div className="list-bookshelf-section">
				<p className="text-black mb-3">Bookshelves</p>

				{(props.bookshelves.length === 0) 
					? (
						<div className="flex justify-center mt-2">
							<Spinner />
						  </div> 
					  )
					: ''
				}
				<ul>
					{props.bookshelves.map((bookshelf, index) => {
						return (
							<BookShelfListItem 
								key={index.toString()} 
								bookshelf={bookshelf} 
								index={index} 
								addProduct={props.addProduct}
								disableAction={props.disableAction}
							/>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default ListBookshelves;