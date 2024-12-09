"use client";
import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Reviews from "../reviews";
import ReportBookModal from "@modules/report-book/report-book-modal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({product}) {
  const [reviews, setReviews] = useState([]);
  let [categories] = useState({
    'Description': [
      {
        id: 1,
        title: product.description
      }    
    ],
    'Product Details': [
         
    ],
    'About Author': [    
       
    ],
    'Video': [     
      
    ],
    'Reviews': [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      }     
    ],
  });

  // console.log(product);

  const productDetails = () =>{
    let product_details = [];
    let info_conf = {
      'Published by' : product?.metadata?.publisher?.name,
      'Publication Date' : (product?.metadata?.publication_date) ? new Date(product.metadata?.publication_date).toDateString() : "",
      'ISBN' : null,
      'Format' : product?.material,
      'ISBN' : product?.metadata?.isbn,
      'Language' : product?.metadata?.language,
      'Additional Information' : product?.metadata?.book_details
    }
    for(let x in info_conf){
      if(info_conf[x]){
        product_details.push(<h3 className="text-xs font-medium leading-5"><strong>{x} :</strong> {info_conf[x]}</h3>)
      }
    }
    return product_details ? product_details : <h3 className="text-xs font-medium leading-5">No details...</h3>
  }
  // console.log(product)

  return (
    <div className="mb-10 2xl:mb-0">
      <div className="w-full max-w-md px-4 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex 2xl:space-x-14 space-x-7 pt-2 overflow-x-auto sm:overflow-visible">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full  py-2 text-[12px] font-medium leading-5 text-[#015464] p-3 font-graphikBold",
                    "ring-white",
                    selected
                      ? "border-b-8 border-[#015464] "
                      : "text-[#015464]  border-b-8 border-transparent"
                  )
                } style={{'textWrap' : 'nowrap', 'whiteSpace' : 'nowrap'}} >
                {category}
              </Tab>
            ))}
          </Tab.List>

          <div className="absolute mt-[-4.5px] z-[-1] h-[2px] left-0 w-full bg-[#7CC9B5] rounded mb-5"></div>

          <Tab.Panels className="mt-1">
              <Tab.Panel key={0} className={classNames("rounded-xl  p-1 mt-10", "" )}>          
                  <h3 className="text-xs font-medium leading-5">
                    {product?.description}
                  </h3>
                  <ReportBookModal product={product}></ReportBookModal>
                  {/* <button
                    type="button"
                    className="mt-5 m-auto inline-flex items-center justify-center rounded-full border-2 border-transparent bg-[#FF0000] bg-none px-6 py-2 text-center text-base  text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 mx-1"
                  >
                    Report This Title
                  </button> */}
              </Tab.Panel>
              <Tab.Panel key={1} className={classNames("rounded-xl  p-1 mt-10", "" )}>          
                  {/*<h3 className="text-xs font-medium leading-5">*/}
                    {/*{product?.metadata?.product_details || "No details..."}*/}
                  {productDetails()}
                  {/*</h3>*/}
              </Tab.Panel>
              <Tab.Panel key={2} className={classNames("rounded-xl  p-1 mt-10", "" )}>          
                  <h3 className="text-xs font-medium leading-5">
                    {product?.metadata?.author?.about  || "No details..."}
                  </h3>
              </Tab.Panel>
              <Tab.Panel key={3} className={classNames("rounded-xl  p-1 mt-10", "" )}>          
                  <h3 className="text-xs font-medium leading-5">
                    {/*{product?.metadata?.videos || "No videos..."}*/}
                    {product?.metadata?.promotional_video ? (
                      <a 
                        href={product?.metadata?.promotional_video} 
                        target="_blank"
                        className=" text-white bg-[#015464] border-0 py-2 px-6 focus:outline-none w-28 h-10 rounded-[21px] text-sm ">
                          Open Video
                      </a>
                      ) 
                    : 'No videos...'}
                  </h3>
              </Tab.Panel>
              <Tab.Panel key={4} className={classNames("rounded-xl  p-1 mt-10", "" )}>          
                <Reviews product_id={product?.id} reviews={reviews} setReviews={setReviews}></Reviews>
              </Tab.Panel>

          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
