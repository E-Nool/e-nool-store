//@ts-nocheck
import React, { useState,useEffect } from "react"
import Image from "next/image"
import heart from "@modules/common/icons/heart.png"
import heartred from "@modules/common/icons/heartred.png"
import { addWishlist,removeWishlist } from "@lib/util/products_api"
import Modal from "@modules/common/components/modal"
import Button from "../button"
import useToggleState from "@lib/hooks/use-toggle-state"
import BookShelfLoginToAccount from "@modules/book-shelf/bookshelf-login-to-account"

const Wishlist = ({ variants ,wishlist,customer_id,index = 0,accountPage =false, product = null }) => {
    const [isHeartRed, setIsHeartRed] = useState(accountPage)   
    const [itemIndex, setItemIndex] = useState(-1)   
    const [wishlistID, setWishlistID] = useState(null);
    const { state, open, close } = useToggleState(false)
    const _wi = window?.enool_wishlist_items;


    const handleHeartClick = async () => {
      if(customer_id == null){
        open()
        return
      }
      if(!isHeartRed == true){
        if(customer_id != null){
          // console.log(_wi)
          const prod_id = variants[0]?.product_id;
          await _wi.add(prod_id)
          const is_exist = _wi.exist(prod_id)
          if(is_exist?.exist){
            setWishlistID(is_exist?.data?.id)
          }
          // await addWishlist(customer_id,variants[0].id,1)        
        }
        //TODO create api call to 
      }else{
        if(customer_id != null){
          await _wi.remove(wishlistID)
          setWishlistID(null)
        }

        if(accountPage){
          const removeiItem = document.querySelector(".wishlist-item-"+index);
          if(removeiItem){
            removeiItem.remove();
          }
          close();
        }
          // if(accountPage){
          //   let removeiItem = document.getElementById("wishlist-"+index)
          //   if(removeiItem){
          //     removeiItem.remove()
          //   }
          //   await removeWishlist(customer_id,index)
          //   close()

          // }else{
          //   await removeWishlist(customer_id,itemIndex)
          // }
      }
      setIsHeartRed(!isHeartRed)
      // document.dispatchEvent(new Event("refresh:wishlist:icon"))
    }  

    const handleClose = () => {
      close()
    }
    const openModal = () => {
      open()
    }

    useEffect(()=>{
        if(accountPage && product){
          const is_exist = _wi.exist(product?.id)
          if(is_exist?.exist){
            setWishlistID(is_exist?.data?.id)
          }
          return;
        }

        if(_wi && variants){
          const prod_id = variants[0]?.product_id;
          const is_exist = _wi.exist(prod_id)
          if(is_exist?.exist){
            setIsHeartRed(true)
            setWishlistID(is_exist?.data?.id)
            // document.dispatchEvent(new Event("refresh:wishlist:icon"))
          }
        }
        /*if(wishlist ){ 
            // let status = wishlist.filter(item => )
          for (let index = 0; index < wishlist.length; index++) {
              const item = wishlist[index];
              if (item['variant_id'] == variants[0].id && itemIndex == -1) {
                setItemIndex(index);
                setIsHeartRed(true)
                  break;
              }
          }        
         
        }*/          
    },[setIsHeartRed,variants,wishlist,itemIndex])
   
  return ( <>
      <button onClick={accountPage ? openModal : handleHeartClick} >
            <Image src={isHeartRed ? heartred : heart} className="w-8" alt="" />
      </button>
        <Modal isOpen={state} close={handleClose}>
        <Modal.Title></Modal.Title>
        <Modal.Body>
        <div className="flex flex-col w-full">
            {customer_id != null ? 
              <h2 className="text-center">Are you sure , Do you want to remove this item ?</h2> :
              <BookShelfLoginToAccount></BookShelfLoginToAccount>
              }


          </div>
        </Modal.Body>
        {customer_id &&
        <Modal.Footer>
          <Button
            className="!bg-gray-200 !text-gray-900 !border-gray-200 min-h-0"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button className="min-h-0" onClick={handleHeartClick} >
            Yes
          </Button>
        </Modal.Footer>}
        </Modal>
    </>
  )
}

export default Wishlist
