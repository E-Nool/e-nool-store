// @ts-nocheck
import React, { useState, useEffect, useRef } from "react"
import Reader from "@modules/epub/containers/Reader"
import {getBookReading, updateBookReading, checkPurchasedBookOrder}  from '@lib/util/bookreader_api'; 
import { fetchMySubscriptions } from "@lib/util/subscription_api";
import { dateConvertor } from "@lib/util/subscription_helpers";
import { useCustomerOrders } from "medusa-react";
import BookViewAlert from "@modules/epub/components/commons/BookViewAlert";
import Modal from "@modules/common/components/modal"
import useToggleState from "@lib/hooks/use-toggle-state"


const EpubComponent = (props) => {
  const full_book = props.product?.metadata?.full_book || '/sample_book.epub'
  const sample_book = props.product?.metadata?.book_sample || props.product?.metadata?.full_book
  const page_count = props.product?.metadata?.page_count || '55'
  const published_date = props.product?.metadata?.published_date || '2023-12-12'
  const copy_rights = props.product?.metadata?.copy_rights || false
  const { state, close, open } = useToggleState()
  const sub_key = 'enool_epub_bk_sub_id';

  // console.log("full book",full_book)
  // console.log("sample_book",sample_book)

  const subscriber_key = 'enool_epub_bk_subscriber_id';
  const bk_purchased_key = 'enool_epub_bk_pur';
  window[bk_purchased_key] = false;
  const [bookPurchased, setBookPurchased] = useState(false);

  window["sub_page_count"] = page_count
  const key = 'enool_epub_bk';
  // const pageCount = "";

  const [isReadLoading, setIsReadLoading] = useState(true)
  const [isOrderChecked, setOrderChecked] = useState(false)
  const [productPurchased, setProductPurchased] = useState(false)
  const [subsActive, setSubsActive] = useState(false)
  const [fullAccess, setFullAccess] = useState(false)
  const [readWrapper, setReadWrapper] = useState(false)
  const [url, setUrl] = useState()

  const [readData, setReadData] = useState(null); 
  
  const [isSubLoading, setIsSubLoading] = useState(true)
  const [subscriptionData, setSubscriptionData] = useState(null);
  
  const customerLogged = props.customer != null ? true : false
  const product_handle = props.product?.handle
  const { orders } = useCustomerOrders()
  let isMounted = true;
  const [fetchOrder, setFetchOrder] = useState(true)  
  const [arrowsRestrication, setArrowsRestrication] = useState(true)  
  const [isValidUser, setIsValidUser] = useState(false)

  const [subscriberID, setSubscriberID] = useState(null);

  const [showAlertPopup, setShowAlertPopup] = useState(false);
  const [alertPopupMessage, setAlertPopupMessage] = useState('');
  // console.log("fullAccess",fullAccess)

  // console.log(props.product?.metadata)

    // Reader state
  /*useEffect(() => {  
    const loadReadingData = async () => {
      try {
        if (isMounted) {
        const data = await getBookReading(props.customer.id,props.product.id)        
          setIsReadLoading(false)   
          if(data.status == true && data.data != null ){         
            setReadData(data.data);
            setReadWrapper(true)
            setFullAccess(true)
            window[sub_key] = data.data.subscription_id;
            setSubscriptionData(data.data.subcriberData);
            let subData = data.data.subcriberData
            console.log(subData);
            let start_date = data.data.start_date
            var d1 = new Date(start_date)
            var d2 = new Date()
            // console.log(d2)
            var d3 = new Date(d2.getTime() - (15 * 24 * 60 * 60 * 1000));

            var publishDateCheck = d1 < d3
            // let start_date = data.data.start_date
            console.log("subs", subData )
            setSubsActive(true);
           
            let d_type = subData.Subscriptions.subscription_duration_type
            let duration = subData.Subscriptions.subscription_period
            let bookPublishDay = subData.Subscriptions.book_availability_after
            let subDay =  d_type == "day" ? duration : parseInt(duration) * 30
            console.log("subDay", subDay )
            // setSubscriptionData(data.data);

            // window[sub_key] = data.data[0].subscription_id;
            setSubsActive(true);
          }else{
          }
          
        }
      } catch (error) {
        console.log(error)
      }
    };
    if(customerLogged && isReadLoading ) {
      loadReadingData();
    }
    if(!customerLogged){
      setIsReadLoading(false)    
    }
  },[]);*/

  /*const checkIsPurchasedBook = async () => {
    setOrderChecked(true)
    if(orders){
      orders.forEach(order => {
        order.items.forEach(item => {        
          if(item.variant.product_id == props.product.id){
            setProductPurchased(true)
            setReadWrapper(true)
          }        
        })
      })
    }
    // Temp : For test book puurchased user
    // setProductPurchased(true)
  }*/

  const checkIsValidDate = (s_date = null, period = null, type = null) => {
    if(s_date != null && period != null){
      const start_date = new Date(s_date);
      const today = new Date();
      const end_date = new Date(start_date);
      end_date.setDate(end_date.getDate() + period)
      return (type === 'ava') ? today > end_date : today <= end_date;
    }
    return false;
  }

  const checkSubscriptionAndBookPurchase = async (purchased = false) => {
    setIsReadLoading(false)
    try{
      let __subscriber = await fetchMySubscriptions(props.customer?.id);
      __subscriber = __subscriber?.data?.current;
      // console.log(__subscriber)
      const data = (__subscriber && !purchased) ? await getBookReading(props?.customer?.id,props?.product?.id, __subscriber?.id, 'single') : await getBookReading(props?.customer?.id,props?.product?.id);
      const __subscription = __subscriber?.Subscriptions;
      let use_can_read_full_book = true;

      // Setting subscriber id
      if(__subscriber && __subscription){
        setSubscriberID(__subscriber?.id)
        setSubscriptionData(__subscription);
      }

      // If customer doesh not has any active plan.
      if(!__subscriber){
        use_can_read_full_book = false;
        setShowAlertPopup(true);
        setAlertPopupMessage(`
          To unlock the full features, consider upgrading your plan.
        `);
        open();
        return;
      }

      // If the product has already been purchased.
      if(purchased && __subscriber && __subscription){
        setReadWrapper(true)
        setIsValidUser(true);
        window[sub_key] = __subscription?.id;
        window[subscriber_key] = __subscriber?.id;
        if(data.data){
          setReadData(data.data);
        }
        setFullAccess(true)
        setArrowsRestrication(false)   
        setUrl(full_book);
        // close();
        return;
      }
      // console.log(data)

      // TODO : Temporary Disable

      // Book availability & Book count check
      if(__subscriber && __subscription && !purchased){
        // console.log(__subscription);

        // Check whether the book limit exceeded or not
        const total_readed_books = parseInt(__subscriber?.total_books);
        const ava_book_reads = parseInt(__subscriber?.Subscriptions?.book_count || 0);
        // console.log(total_readed_books, ava_book_reads)
        if(ava_book_reads != -1 && data.data == null && total_readed_books >= ava_book_reads){
          use_can_read_full_book = false;
          setShowAlertPopup(true);
          setAlertPopupMessage(`
            Your current subscription level has surpassed the maximum book allowance allotted within the ${__subscription ? __subscription?.name : "Basic Plan"}.
          `);
          open();
          return;
        }

        // Check the book after availability
        // const s_date = __subscriber?.start_date;
        const period = parseInt(__subscriber?.Subscriptions?.book_availability_after || 0);
        if(!checkIsValidDate(published_date, period, 'ava')){
          let book_available_date = new Date(published_date);
          book_available_date.setDate(book_available_date.getDate() + period)
          use_can_read_full_book = false;
          setShowAlertPopup(true);
          setAlertPopupMessage(`
            The book is inaccessible under your ${__subscription ? __subscription?.name : "Basic Plan"}. We kindly request that you consider reading this book after ${book_available_date.toDateString()}.
          `);
          open();
          return;
        }

        // Check whether the subscription expired or not
        const subscription_period = __subscription?.subscription_period || 0;
        const subscription_duration_type = __subscription?.subscription_duration_type;
        const total_subscription_period = dateConvertor(subscription_period, subscription_duration_type)
        const start_date = new Date(__subscriber?.start_date);
        if(!checkIsValidDate(start_date, total_subscription_period)){
          use_can_read_full_book = false;
          setShowAlertPopup(true);
          setAlertPopupMessage('We kindly inform you that your subscription plan has reached its expiration date.');
          open();
          return;
        }

        // Check whether the user has copyright access or not
        if(copy_rights && __subscription?.copyright_access === 0){
          use_can_read_full_book = false;
          setShowAlertPopup(true);
          setAlertPopupMessage(`
            This copyrighted book requires a plan upgrade or alternative access, such as purchase.
          `);
          open();
          return;
        }
      }

      // If the product has book read data
      if(data.status == true && data.data != null && use_can_read_full_book){
        const subscriber_data = data?.data?.subcriberData;
        const subscription_data = data?.data?.subscription;
        // Check whether the user is an active subscriber or not, and also check the user subscription.
        if(subscriber_data && subscription_data){
          // Set readings data
          setReadWrapper(true)
          window[sub_key] = data?.data?.subscription_id;
          window[subscriber_key] = subscriber_data?.id;
          // setSubscriptionData(subscription_data);
       
          // Updating book read access
          setIsValidUser(true);
          if(data.data){
            setReadData(data.data);
            setFullAccess(true)
            setArrowsRestrication(false)   
            setUrl(full_book)
          }
        }
      }else{// If the product does not have the book read data
        if(__subscriber && __subscription && use_can_read_full_book){
          window[sub_key] = __subscription?.id;
          window[subscriber_key] = __subscriber?.id;
          setIsValidUser(true);
          if(!isValidUser && !window.epub_new_bk){
            window.epub_new_bk = true;
            open();
          }
        }
      }
    }catch(err){
      console.log("Error : "+err);
    }
  }

  // Subscsription validity & Book purchase check
  useEffect(() => {
    if(customerLogged && props?.customer && props?.product){
      (async function(){
        let bk_purchased = false;
        const order_data = await checkPurchasedBookOrder(props?.customer?.id, props?.product?.id);
        if(order_data?.status && order_data?.data?.length > 0){
          bk_purchased = true;
          setBookPurchased(true);
        }
        window[bk_purchased_key] = bk_purchased;
        await checkSubscriptionAndBookPurchase(bk_purchased);

        // Check whether the product is purchased or not

        // if(!isOrderChecked && typeof orders != 'undefined'){
        //   await checkIsPurchasedBook();
        // }
      })();
    }else{
      // window.alert("hi")
      setIsReadLoading(false)
      setFullAccess(false)      
      setReadWrapper(true)  
      setArrowsRestrication(true)
      setUrl(sample_book)
    }
  }, [customerLogged, orders])

      // Get order

  /*useEffect(() => {  
    const loadOrderData = () => {
      setOrderChecked(true)
      orders.forEach(order => {
        order.items.forEach(item => {        
          if(item.variant.product_id == props.product.id){
            setProductPurchased(true)
            setReadWrapper(true)
          }        
        })
      })        
    };

    if(customerLogged && readData != null && !isOrderChecked && orders != undefined) {
        loadOrderData();
    }
    
  });*/

  // Get supscription
  // let isSubMounted = true;

  /*useEffect(() => {  
    const loadSubcriptionData = async () => {
      try {
        const data = await fetchMySubscriptions(props.customer.id)  
        if(isSubMounted){
          setIsSubLoading(false)    
          if(data.status && data.data != null )  {
            setSubscriptionData(data.data);
            window[sub_key] = data.data[0].subscription_id;
            setSubsActive(true);
            //Todo conditions
          }
        }
      } catch (error) {
        console.log(error)
      }
    };
    if(customerLogged && readData == null && isReadLoading && !productPurchased && isSubLoading) {
        loadSubcriptionData();
    }
  },[]);*/

  /*useEffect(() => {  
   
    // let curr_subs = subscriptionData[0].Subscriptions
    // let duration = 0
    // if(curr_subs != null){
    //   console.log("curr_subs inside",curr_subs)
    //    duration = curr_subs.subscription_duration_type == "day" ? parseInt(curr_subs.subscription_period) : parseInt(curr_subs.subscription_period * 30)
    // }

    var d3 = new Date(d2.getTime() - (15 * 24 * 60 * 60 * 1000));

    var publishDateCheck = d1 < d3
    var full_access = (customerLogged && publishDateCheck) ? true : false
    
    setUrl(full_access || publishDateCheck? full_book : sample_book)

    if(customerLogged && readData == null && !isReadLoading && !productPurchased && subsActive && !readWrapper ){
      open()
    }
  }, [props.product?.metadata , subscriptionData,open, customerLogged, full_book, sample_book,readData,productPurchased,subsActive,readWrapper] );*/

  // For update the book reading percentage
  async function updateBookReadPercentage(e = null, f = false, onload = false ){
    const ed = (e) ? e?.detail : e;
    const curr_page = ed ? ed?.current_page : 0;
    const current = ed ? ed?.current : null;
    const full_access = ed?.full_access || f ? true : false;
    let subscription_id = window[sub_key];
    let subscriber_id = window[subscriber_key];
    let percentage  = (parseInt(curr_page) / parseInt(window["sub_page_count"])) * 100;
    const book_purchased = ed ? ed.book_purchased : window[bk_purchased_key];

    // console.log(subscriberID)
    if(
      props.product?.id && 
      props.customer &&
      // subscription_id && 
      props.customer.id && 
      full_access
    ){
      window[sub_key] = subscription_id;
      window[subscriber_key] = subscriber_id;
      const frame = {
        book_id : props.product?.id,
        customer_id : props.customer.id,
        percentage : parseInt(percentage) ,
        // subscriber_id : subscriber_id,
        extra_fields : JSON.stringify({
          current_page : curr_page,
          current : current
        })
      }

      // console.log(book_purchased)

      if(!book_purchased){
        frame['subscriber_id'] = subscriber_id;
        frame['subscription_id'] = subscription_id;
      }

      // Update book read percentage in onload state
      if(onload){
        let prev_data = window.localStorage.getItem(key);
        console.log(prev_data)
        if(prev_data){
          prev_data = JSON.parse(prev_data);
          await updateBookReading(prev_data)

          if(prev_data.book_id === frame.book_id){
            // TODO Existing localstorage data
          }
        }
      }   

      // Do an API call after each 5 pages
      if(curr_page % 5 === 0 || curr_page === 0 || curr_page == page_count){
        await updateBookReading(frame)
      }

      // Update local storage
      window.localStorage.setItem(key, JSON.stringify(frame));
    }
  }

  useEffect(function(){
    document.addEventListener("on:reader:page:change", updateBookReadPercentage)
    return () => document.removeEventListener("on:reader:page:change", updateBookReadPercentage)
  }, [])


  const readFullBook = async () => {
    close()
    setFullAccess(true)
    setReadWrapper(true)  
    setArrowsRestrication(false)   
    setUrl(full_book)
    // console.log(isValidUser, full_book)
    
    // Update Book Read Percentage
    await updateBookReadPercentage(null, true, true);
  };

  const readSampleBook = () => {
    close()
    setFullAccess(false)      
    setReadWrapper(true)  
    setArrowsRestrication(true)
    setUrl(sample_book)
  };
  return ( 
    <section className="relative w-full">
    {!showAlertPopup ? <>
      <Modal isOpen={state} close={close} size="xs">
        <Modal.Body>
          <div className="text-[#015464] font-black text-xl text-center "> {props.product.title}</div>
          <div className="w-full  p-4 mt-10 "> Your Memebrship <span className="text-[#015464] font-bold">{subscriptionData ? subscriptionData?.name : "Basic Plan"} </span> is active. This plan allow you to access full fo this book </div>
        </Modal.Body>
        <Modal.Footer>
          {/*<div className="flex-1 no-scrollbar ">
            <button onClick={readSampleBook} className="bg-secondry font-bold  inline-flex items-center justify-center rounded-full border-2 border-transparent px-6 py-3 w-[180px] text-center text-base  text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 "> Read Sample</button>
          </div>
          <div className="flex-1 no-scrollbar p-2">
            <button onClick={readFullBook} disabled={!isValidUser} className={`${!isValidUser ? 'cursor-not-allowed' : '' } font-bold inline-flex items-center justify-center rounded-full border-2 border-transparent bg-primary px-6 py-3 w-[180px] text-center text-base text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800`}> Read Full Book</button>
          </div>*/}
          <div className="flex gap-1 flex-1 justify-between flex-col md:flex-row">
            <button onClick={readSampleBook} className="w-full bg-secondry font-bold  inline-flex items-center justify-center rounded-full border-2 border-transparent px-6 py-3 md:w-[180px] text-center text-base  text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 "> Read Sample</button>
            <button onClick={readFullBook} disabled={!isValidUser} className={`${!isValidUser ? 'cursor-not-allowed' : '' } w-full font-bold inline-flex items-center justify-center rounded-full border-2 border-transparent bg-primary px-6 py-3 md:w-[180px] text-center text-base text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800`}> Read Full Book</button>
          </div>
        </Modal.Footer>
      </Modal>
    </> : <>
      <Modal isOpen={state} close={close} size="xs">
        <Modal.Body>
          <div className="text-[#015464] font-black text-xl text-center "> {props.product.title}</div>
          {/*<div className="w-full  p-4 mt-10 "> Your Memebrship <span className="text-[#015464] font-bold">{subscriptionData ? subscriptionData?.name : "Basic Plan"} </span> is active. This plan allow you to access full fo this book </div>*/}
          <div className="w-full  p-4 mt-10 text-[#015464] font-bold text-center">
            {alertPopupMessage}
          </div>
        </Modal.Body>
       <Modal.Footer>
          <div className="overflow-y-scroll flex-1 no-scrollbar text-center">
            <button onClick={readSampleBook} className="bg-secondry font-bold  inline-flex items-center justify-center rounded-full border-2 border-transparent px-4 py-2 w-[180px] text-center text-base  text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 "> Read Sample</button>
          </div>
        </Modal.Footer>
      </Modal>
    </>}
    
      {!isReadLoading &&
        <Reader url={url} full_access={fullAccess} 
        totalPage={page_count} 
        handle ={product_handle} 
        readData = {readData} 
        product ={props.product}
        arrowsRestrication ={arrowsRestrication}
        bookPurchased={bookPurchased}
        />
      }
    </section>
  );
};

export default EpubComponent;
