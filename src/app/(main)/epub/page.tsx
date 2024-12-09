// @ts-nocheck
"use client"

import { Metadata } from "next"


// import Image from 'next/image'
// import React from 'react'
// import Leaf from '../../../../public/images/LandingPage/Leaf1.png'
// import DefaultLayout from "@modules/layout/templates"
// import Aboutbg from '../../../../public/images/aboutbg.png'
// import img1 from '../../../../public/images/img1.png'
// import Ellipse from '../../../../public/images/Ellipse.png'
// import Lefe from '../../../../public/images/lefe1.png'
// import Lefe2 from '../../../../public/images/lefe2.png'
// import Terms from '../../../../public/images/terms.png'
// import Legal from '../../../../public/images/Legal Managementbg.png'
// import Leaf2 from '../../../../public/images/leaf2.png'

// export const metadata: Metadata = {
//   title: "Store",
//   description: "Explore all of our products.",
// }

import pdf from '../../../../public/images/Flipbook/pdf.png'
import read from '../../../../public/images/Flipbook/read.png'
import LefeBg from "../../../../public/images/lefe1.png";
import Leaf1 from '../../../../public/images/LandingPage/Leaf1.png'

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import DefaultLayout from "@modules/layout/templates"
import {
  EpubViewer,
  ReactEpubViewer
} from 'react-epub-viewer'
import "regenerator-runtime"

import ReaderRestrication from "@modules/epub/components/commons/ReaderRestrication";
// import sample_epub from "../../../../public/sample_book.epub"
import { useSearchParams } from 'next/navigation'
import { useMeCustomer, useProduct } from "medusa-react";
import EpubComponent from "@modules/common/components/epub";
// import {checkPurchasedBookOrder} from "@lib/util/bookreader_api";



function Epub() {
  const searchParams = useSearchParams()
  const productId = searchParams.get('id')
	const { product, isLoading } = useProduct(productId)
  const { customer } = useMeCustomer();
  // const [orderFetched, setOrderFetched] = useState(false);
  // const [bookPurchased, setBookPurchased] = useState(false);

  /*useEffect(function(){
    const getBookPurchasedDetail = async () => {
      const data = await checkPurchasedBookOrder(customer?.id || '', productId);
      console.log(data)
      if(data.status && data?.data?.length > 0){
        setBookPurchased(true);
      }
      setOrderFetched(true);
    }
    getBookPurchasedDetail();
  }, [customer]);*/

  return (<>
   <div className=""> 
      {/* <Image className=" absolute z-0 bottom-20 left-0 w-16 " src={Leaf1} alt="" />
      <Image
      className=" hidden lg:block absolute top-28 z-0 bottom-36 right-0 w-28 "
      src={LefeBg}
      alt=""
      /> */}
      {isLoading && <> </>}
      
      {!isLoading &&
      <>
       { product ?
        <EpubComponent product={product} customer={customer}></EpubComponent> : <> Product not found </>
       }
      </>
      }
     
  </div>
  	
{/*    
    <div className="epub my-6 mx-auto bg-[#f2f9f7] 2xl:w-[84%] w-full lg:w-[85%] xl:w-[82%] md:w-full xs:w-full  rounded-xl border  text-center max-h-screen-xl lg:flex-row lg:text-left" style={{ height: "95vh", overflow: "hidden" }}>
      <Image className=" absolute z-0 bottom-20 left-0 w-16 " src={Leaf1} alt="" />
      <Image
        className=" hidden lg:block absolute top-28 z-0 bottom-36 right-0 w-28 "
        src={LefeBg}
        alt=""
      />*}
      
    {/* </div> */}
    </>
  )
}

export default Epub;

