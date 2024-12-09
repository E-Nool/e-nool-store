import Add from "../../../public/images/Add.png";
import Image from "next/image";

const BookShelfNoProducts = (props) => {
	return (
		<div className="bookshelf-no-products-container mt-20">
			<Image
	            className=" rounded w-28 object-cover object-center shrink-0 mx-auto block"
	            src={Add}
	            alt="content"
	        />
	        <p className="text-center mt-10 text-neutral-700">No bookshelf items found &#128532;</p>
		</div>
	)
}

export default BookShelfNoProducts;