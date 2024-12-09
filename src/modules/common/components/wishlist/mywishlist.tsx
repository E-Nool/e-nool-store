//@ts-nocheck
import React, { useState,useEffect } from "react"
import Image from "next/image"
import { useAccount } from "@lib/context/account-context"
import { CardsGrid, CardsList } from "../CarouselCards/CategoryItem"
import { metadata } from "app/not-found"
import { getProductImage } from "@lib/util/prices"

const MyWishlist = ({ view  }) => {
  const { customer} = useAccount()
  const [wishlist, setWishlist] = useState([]);
  const wi_obj = window?.enool_wishlist_items;

  var wishlists;
  if (customer) {
    wishlists = customer?.metadata?.wishlist || []    
  }
   
  const convertToDecimal = (amount) => {
    return Math.floor(amount) / 100
  }

  const formatPrice = (amount,currency_code) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      // TODO assuming region is already defined somewhere
      currency: currency_code,
    }).format(convertToDecimal(amount))
  }
  
  const currency_code="inr"
  // TODO currency code 
  const loadPrice = (variants) =>{
    const priceObj = variants[0].prices.filter(variant => variant.currency_code == currency_code)
    let price = "0"
    if(priceObj.length != 0){
      price = formatPrice(priceObj[0].amount,currency_code)
    }
    return(price)
  }

  useEffect(() => {
    (async function(){
      if(wi_obj){
        const data = await wi_obj?.refetch();
        setWishlist(data);
        // console.log(wi_obj)
      }
    })();
  }, [customer, wi_obj])
   
    
  return (
   <>
   {customer && (<>
     {wishlist.length ==0 ? 
        <>
          <div>
            <p className="text-center text-[#1A6270]">No wishlist items were found </p>
          </div>
        </> 
      : null}
    {view ? (
      <div id={"mywishlist"} className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-10 lg:gap-5  mt-12 mb-20 ">
        {wishlist.length !=0 && wishlist.map((item,index) => {
          const book = item?.product;
          {/*console.log(book)*/}
          return (
            <>
            <CardsGrid
            key={index}
            title={book.title}
            author={book?.metadata?.author}
            rating={book?.metadata?.review_rating || 0}
            ratingCount={book?.metadata?.review_count || 0}
            handle={book?.variant?.product?.handle}
            price={formatPrice(book.unit_price || 0,currency_code)}
            imageSrc={getProductImage(book.thumbnail)}
            variants={book.variants}
            wishlist={[]}
            index = {index}
            accountPage={true}
            customer_id={customer?.id || null}
            product={book}
            className={`wishlist-item-${index}`}
            />
            </>
          )
      })}
        
      </div>
      ) : (
        <div>
          {wishlist.length !=0 && wishlist.map((item,index) => {
            const book = item?.product;
            return (
              <CardsList 
              key={index}
              title={book.title}
              author={book?.metadata?.author}
              rating={book?.metadata?.review_rating || 0}
              ratingCount={book?.metadata?.review_count || 0}
              handle={book?.variant?.product?.handle}
              price={formatPrice(book.unit_price || 0,currency_code)}
              imageSrc={getProductImage(book.thumbnail)}
              subtitle={book.subtitle}
              description={book.description}
              variants={book.variants}
              wishlist={[]}
              index = {index}
              accountPage={true}
              customer_id={customer?.id || null}
              product={book}
              className={`wishlist-item-${index}`}
              />
            )
          })}                                  
        </div>
      )}
   </> )}
  </>)
}

export default MyWishlist
