import Button from "@modules/common/components/button";
import Spinner from "@modules/common/icons/spinner";

const BookshelfAddForm = (props) => {
	return (
		<div className="bookshelf-container h-full">
			<div className="add-bookshelf-section my-5 items-center h-full">
			    {(props.formErrMsg)
				    ? 
				    (
				    	<div className="px-5">
					    	<p className="text-rose-500 bg-red-100 py-1 px-3">
						      	{props.formErrMsg}
						    </p> 
					    </div>
				    )
				    
				    : null
			    }
				<form onSubmit={props.submitHandle} id="bookshelfAddForm" className="h-full flex flex-col justify-between">
					<div className="col-span-2 mt-3">
		                <label  className="block mb-2 text-sm font-medium text-gray-900 ">Bookshelf Name</label>
		                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Name" required></input>
		            </div>
		            <div className="col-span-2 mt-3 hidden">
		                <label  className="block mb-2 text-sm font-medium text-gray-900 ">Bookshelf Description</label>
		                <textarea value="content" id="description" name="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:border-gray-500 " placeholder="Description" required></textarea>                    
		            </div>
		            <input type="hidden" name="customer_id" value={props.customer.id} />
		            <div className="flex">
		                {
		                	(props.backAction)
		                	   ?  (
			                	   	<Button className="mb-5 min-h-0 mt-10 bg-red-500" type="button" onClick={props.backAction}>
						                Back
						            </Button>
		                	   	  )
		                	   : null
		                }
		                
		            	<Button className={`mb-5 min-h-0 bg-primary mt-10 ${(props.backAction) ? 'ml-1' : '' }`} disabled={props.submitted}>
			                {props.submitted ? <Spinner /> : "Add New"}
			            </Button>
		            </div>
		            
				</form>
			</div>
		</div>
	)
}

export default BookshelfAddForm;