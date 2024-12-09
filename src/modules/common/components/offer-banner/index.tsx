import React from 'react'
import Image from 'next/image'
import trendingReads from '../../../../../public/images/Browse/trending-reads.png'
import enoolpicks from '../../../../../public/images/Browse/e-nool-picks.png'
import newnoteworthy from '../../../../../public/images/Browse/new-and-noteworthy.png'
import startseries from '../../../../../public/images/Browse/start-series.png'

const OffersBanner = ({CatTitle,CatHandle=""}) => {

  const imgMap = {
    'e-nool-picks': enoolpicks,
    'new-and-noteworthy': newnoteworthy,
    'start-series': startseries,
  };
  
  const imgUrl = imgMap[CatHandle] || trendingReads;
  
  return (
    <div className="container mx-auto  flex  py-10 md:flex-row flex-col 2xl:px-10  items-center">

    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font  md:text-4xl lg:text-5xl mb-4 font-graphikBold text-[#015464] ">UPTO 30% OFF

        <br className="hidden lg:inline-block" />

      </h1>
      <h1 className="title-font  md:text-4xl lg:text-5xl mb-4 font-graphikBold text-[#015464] "> {CatTitle} </h1>


    </div>
    <div className="  w-96 2xl-w-auto  ">
      <Image className="object-cover object-center rounded" alt="hero"
       src={imgUrl}
       />
    </div>
  </div>
 );
}

export default OffersBanner;
