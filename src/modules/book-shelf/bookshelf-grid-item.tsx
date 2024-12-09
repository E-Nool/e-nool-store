import Add from "../../../public/images/Add.png";
import Image from "next/image";
import { TrashIcon } from '@heroicons/react/24/solid'
import Modal from "@modules/common/components/modal"
import useToggleState from "@lib/hooks/use-toggle-state";
import Button from "../common/components/button"
import { deleteBookshelf } from "@lib/util/bookshelf";
import Link from "next/link"



const BookshelvesGridItem = (props) => {
	// console.log(props.loadBookshelves);
	const bookshelf = props.bookshelf;

	const { state, open, close } = useToggleState(false)
  const handleClose = () => {   
      close()
  }

	const removeBookshelf = async (bookshelf_id) => {
		if(bookshelf_id){
			await deleteBookshelf(bookshelf_id);
			handleClose();
			props.loadBookshelves();
		}
	}
	console.log(bookshelf)

	return (
		<>
			<div className="bookshelf-grid-item mb-3">
			    {/*<div className="bookshelf-grid-item-remove-btn-container text-right">
			    	<button
				    	className="bg-red-500 text-sm p-1 text-white rounded-full items-center justify-center"
				    	onClick={open}
			    	>
			    		<TrashIcon className="h-5 w-5"/>
			    	</button>
			    </div>*/}
				<div className="bookshelf-grid-item-image">
				  {bookshelf?.bookshelf_thumb ? 
				  <Image
	            className="w-full rounded-2xl  object-cover object-center mb-4 md:min-h-[320px] md:max-h-[320px] min-h-[220px] max-h-[220px] overflow-hidden"
	            src={bookshelf?.bookshelf_thumb}
	            alt="content"
	            width="100"
	            height="100"
	        />
				  : <Image
	            className="w-full rounded-2xl  object-cover object-center mb-4 md:min-h-[320px] md:max-h-[320px] min-h-[220px] max-h-[220px] overflow-hidden"
	            src={Add}
	            alt="content"
	        />}
					
				</div>
				<div className="bookshelf-grid-item-content">
					<p className="font-graphik text-[#015464] my-2 text-center">
						{bookshelf.name}
					</p>
				</div>
				<div className="bookshelf-grid-item-view-btn">
					<Link href={`/account/bookshelf/${bookshelf.id}`}>
						<button className="  bg-[#015464] text-white items-center py-2 px-5 rounded-xl w-full font-bold">
							view
						</button>
					</Link>
				</div>
			</div>
			{/*<Modal isOpen={state} close={handleClose}>
			  <Modal.Title>
			    <h2 className="text-xl font-bold">Bookshelf</h2>
			  </Modal.Title>
			  <Modal.Body>
			    <p className="text-center mt-10 text-neutral-700">Are you sure you want to delete this bookshelf?</p>
			  </Modal.Body>
			  <Modal.Footer>
			    <Button className="!bg-gray-200 !text-gray-900 !border-gray-200 min-h-0" onClick={handleClose}> Cancel </Button>
			    <Button className="min-h-0" onClick={()=> removeBookshelf(bookshelf?.id)} > Yes </Button>
			  </Modal.Footer>
			</Modal>*/}
		</>
	)
}

export default BookshelvesGridItem;