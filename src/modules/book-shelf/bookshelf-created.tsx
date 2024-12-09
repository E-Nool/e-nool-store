import Check from "../../../public/images/check.png";
import Image from "next/image";

const BookshelfCreated = (props) => {
	return (
		<div className="bookshelf-container">
		    <div className="flex justify-center mt-16">
		    	<Image
		            className=" rounded w-20 object-cover object-center"
		            src={Check}
		            alt="content"
		        />
		    </div>
		    
			<p className="text-center mt-5 text-gray-600">Bookshelf created successfully.</p>
		</div>
	)
}

export default BookshelfCreated;