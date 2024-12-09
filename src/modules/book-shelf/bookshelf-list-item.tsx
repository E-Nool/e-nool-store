import Add from "../../../public/images/Add.png";
import Image from "next/image";

const BookShelfListItem = (props) => {
	const bs = props.bookshelf;
	return (
		<li onClick={() => props.addProduct(props.index)} data-item-index={props.index} className="cursor-pointer	border border-gray-300 px-4 py-4 rounded-lg mb-3 flex justify-between items-center">
		    <Image
	            className=" rounded w-9 object-cover object-center shrink-0"
	            src={Add}
	            alt="content"
	        />
	        <div className="grow ml-2">
				<span className="bookshelf-name text-gray-600 block text-sm"><b>Title :</b> {bs.name}</span>
				{/*<span className="bookshelf-name text-gray-600 block text-sm"><b>Description :</b> {bs.description}</span>*/}
	        </div>
			<button 
				className={`${(props.disableAction) ? 'cursor-not-allowed' : ''} text-xl/[5px] text-white bg-[#015464] border-0 py-1 px-1 pb-2 focus:outline-none w-7 h-7 rounded-full mr-4 flex items-center justify-center`}
				disabled={props.disableAction}
			>
				&#x2b;
			</button>
		</li>
	)
}

export default BookShelfListItem;