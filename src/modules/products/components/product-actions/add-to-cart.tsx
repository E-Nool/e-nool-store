// @ts-nocheck
import React, { useEffect, useState } from "react"
import Button from "@modules/common/components/button";
import Spinner from "@modules/common/icons/spinner";
import Link from "next/link";
import { addReportBook } from "@lib/util/products_api";
import useToggleState from "@lib/hooks/use-toggle-state";
import Modal from "@modules/common/components/modal";
import { useCart } from "medusa-react";
import Medusa from "@medusajs/medusa-js"
import { useAccount } from "@lib/context/account-context"

const AddToCartComponent = (props) => {

  const product = props.product
  const { cart } = useCart()

  // console.log(cart)
  // console.log(product)
  const [message, setMessage] = useState<string>("")
  const [showButtons, setShowButtons] = useState(false)
  const { state, open, close } = useToggleState(false)
  let MEDUSA_BACKEND_URL = ""
  const { customer } = useAccount()
  const [reloadPage, setReloadPage] = useState(false);

if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  MEDUSA_BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
}

  const  handleSubmit = async (event) =>{
    // props.setDropdownOpen(false)
    open()

    // if(!customer){
    //   return;
    // }

    if(product?.variants && product?.variants.length != 0 && cart?.items && cart?.items.length != 0){
      const len = cart?.items.length;
      for(let x = 0; x < len; x++){
        const item = cart?.items[x];
        if(item.variant_id === product?.variants[0].id){
          setMessage("Item already present in the cart")
          setShowButtons(true)
          return;
        }
      }
    }

    let variant_id = product?.variants && product?.variants.length != 0 ? product?.variants[0].id : null
    if(variant_id != null || cart?.id)
    {
      let cart_id = cart?.id 
      setMessage("Book adding to the cart....")
      const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })      
      medusa.carts.lineItems.create(cart_id, {
        variant_id,
        quantity: 1
      })
      .then(({ cart }) => {
        setMessage("Book successfully added to the cart.")
        setShowButtons(true)
      })
      setReloadPage(true)
            
    }else{
      setMessage("Unable to add this product at the moment please check later")
    }   
  }   
    
    const handleClose = () => {   
      close()
      if(reloadPage) window.location.reload();
    }
    return (
      <>
        <button className="block px-4 w-full py-2 hover:bg-gray-100 text-xs text-left"
                  id="add-to-cart" onClick={handleSubmit}>  Buy Now  </button> 
  
        <Modal isOpen={state} close={handleClose}>
          <Modal.Title >
            <h2 className="text-lg font-bold">Cart message</h2>           
            </Modal.Title>
           
               <>
                    <Modal.Body>
                      <div className="mt-10">
                        <h1 className=" text-xl text-center">{message}</h1>              
                        {!showButtons &&   <div className="grid justify-items-center mt-10 "> <Spinner size="50"></Spinner> </div>
                      }

                      </div>
                      
                    </Modal.Body>   
                    <Modal.Footer>   
                    {showButtons && 
                      <div className="w-full mt-6 grid justify-items-center inline-flex grid-cols-1 gap-1 md:grid-cols-2"> 
                          <a 
                            href={"/cart"}
                            className="w-full md:w-auto m-auto items-center justify-center rounded-full border-2 border-transparent bg-secondry px-6 py-2 text-center text-base  text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 mx-1"
                          >
                            View Cart
                          </a>                     
                         {/* <Link 
                            type="button"
                            href={"/cart"}
                            className="m-auto items-center justify-center rounded-full border-2 border-transparent bg-secondry px-6 py-2 text-center text-base  text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 mx-1"
                          >    View Cart                  
                          </Link>*/}
                  
                          <Link  href={"/browse"} className="w-full md:w-auto bg-primary m-auto items-center justify-center rounded-full border-2 border-transparent px-12 py-2 text-center text-base  text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 mx-1">
                              Browse books                       
                          </Link>                      
                      </div>
                    }
                    </Modal.Footer>
                  </>
               
             

        </Modal>
      </>
    )
}

export default AddToCartComponent;
