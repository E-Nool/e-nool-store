"use client"
import Footer from "@modules/layout/templates/footer"
import Navbar from "@modules/layout/templates/nav"
import React, {useEffect, useState} from "react"
import { useMeCustomer } from "medusa-react"
import {fetchWishlists, addWishlist, deleteWishlist} from "@lib/util/wishlist"
import AnnouncementBar from "@modules/common/components/announcement-bar";

const Layout: React.FC = ({ children }) => {

  const { customer } = useMeCustomer()
  const [wItems, setWItems] = useState([]);
  const w_key = 'enool_wishlist_items';
  
  useEffect(function(){
    if(customer){
      localStorage.setItem("customer", JSON.stringify(customer))
      const profile_status = customer?.metadata?.profileStatus || null;
      let route = '/account/';
      switch(profile_status){
        case null:
          route += 'get-otp';
          break;
        case 2:
          route += 'customize-account';
          break;
        case 3:
          route += 'country-select';
          break;
        case 4:
          route += 'choose-book-to-read';
          break;
      }
      if(profile_status !== 5){
        window.location.href = route;
      }
    }
  }, [customer]);

  const addWishlistItem = async (book_id = '') => {
    const add = await addWishlist(customer?.id, book_id);
    const data = await refetchItems();
    setWItems(data)
    window[w_key]['items'] = data;
    document.dispatchEvent(new Event("refresh:wishlist:icon"))
  }

  const removeWishlistItem = async (id = '') => {
    const remove = await deleteWishlist(id);
    const data = await refetchItems();
    // console.log(data)
    setWItems(data)
    window[w_key]['items'] = data;
    document.dispatchEvent(new Event("refresh:wishlist:icon"))
  }

  const refetchItems = async () => {
    const wi = await fetchWishlists(customer?.id);
    return (wi?.status) ? wi?.data : [];
  }

  const isBookExist = (book_id = '') => {
    const items = window[w_key];
    const res = {
      data : null,
      exist : false
    };
    if(items && items?.items?.length > 0){
      const i = items?.items;
      for(let w = 0; w < i.length; w++){
        if(i[w].book_id === book_id){
          res.exist = true;
          res.data = i[w];
        }
      }
    }
    return res;
  }

  const getCount = () => {
    return window[w_key]?.items?.length || 0;
  }

  useEffect(function(){
    (async function(){
      
      window[w_key] = {
        items : [],
        add : addWishlistItem,
        remove : removeWishlistItem,
        refetch : refetchItems,
        exist : isBookExist,
        count : getCount
      };
      if(customer){
        const wishlist_items = await fetchWishlists(customer?.id);
        if(wishlist_items?.status){
          setWItems(wishlist_items?.data);
          window[w_key]['items'] = wishlist_items?.data;
          document.dispatchEvent(new Event("refresh:wishlist:icon"))
        }
      }
    })();
  }, [customer])

  return (
    <div className="landing_bg font-graphik ">
      <div>
        <div className="font-graphik">
          <Navbar />
          <AnnouncementBar text="We're in test beta mode - the final release coming soon"/>
          <div className="m-auto"></div>
          {children}
          <div className="w-full mt-8">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
