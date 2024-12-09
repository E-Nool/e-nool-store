//@ts-ignore
"use client";

import React, { useEffect, useRef, useState } from "react";
import { ProductProvider } from "@lib/context/product-context";
import { useIntersection } from "@lib/hooks/use-in-view";
import ProductInfo from "@modules/products/templates/product-info";
import ProductTabs from "@modules/products/components/product-tabs";
import RelatedProducts from "@modules/products/components/related-products";
// import ImageGallery from "@modules/products/components/image-gallary"
import MobileActions from "@modules/products/components/mobile-actions";
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";

import Tabswitch from "@modules/products/components/tabswitch";
import BookSwiper from "@modules/products/components/image-gallary/BookSwiper";
// import Bookswiper from "./subpages/bookswiper";

import heart1 from "@modules/common/icons/heart1.png";
import bgimg from "../../../../public/images/bg1.png";
import share from "@modules/common/icons/share.png";
import Leaf from "../../../../public/images/LandingPage/Leaf2.png";
import Leaf1 from "../../../..//public/images/LandingPage/Leaf1.png";
import Leaf2 from "../../../..//public/images/LandingPage/Leaf-Bg.png";
import Image from "next/image";
import Link from "next/link";
import Wishlist from "@modules/common/components/wishlist";
import { useMeCustomer } from "medusa-react";
import StarRating from "@modules/common/components/CarouselCards/StarRating";
import WriteReview from "../components/reviews/write-review";
import ProductBreadCrumb from "../components/product-breadcrumb";
import AuthorInfo from "./product-info/author";
import { getReviews } from "@lib/util/products_api";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

type ProductTemplateProps = {
  product: PricedProduct;
};

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
  const [isOnboarding, setIsOnboarding] = useState<boolean>(false);
  const [isAddedToLibrary, setIsAddedToLibrary] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const [reviewCount, setReviewCount] = useState(
    product?.metadata?.review_count || 0
  );
  const [reviewRating, setReviewRating] = useState(
    product?.metadata?.review_rating || 0
  );
  const { customer } = useMeCustomer();
  const [productCate, setProductCate] = useState([]);
  let wishlist;
  if (customer != null) {
    wishlist = customer?.metadata.wishlist;
  }

  const handleAddToLibrary = () => {
    setIsAddedToLibrary(!isAddedToLibrary);
  };

  const handleShare = () => {
    setIsShared(!isShared);
  };

  const info = useRef<HTMLDivElement>(null);

  const inView = useIntersection(info, "0px");

  useEffect(() => {
    const onboarding = window.sessionStorage.getItem("onboarding");
    setIsOnboarding(onboarding === "true");
  }, []);
  const currentUrl = window ? window.location.href : "";
  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await getReviews(product.id);
        if (data.status) {
          setReviewCount(data?.reviews.length);
          setReviewRating(
            Math.ceil(data?.reviews.reduce((a, b) => a + b.rating, 0) / 5)
          );
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    // if(reviews.length == 0){
    loadReviews();
    // }
  }, [product]);
  return (
    <ProductProvider product={product}>
      <div>
        <Image className=" absolute  right-0 w-5/6" src={bgimg} alt="bgimg" />
        <div className=" font-graphik relative ">
          <Image
            className=" hidden lg:block  absolute  mt-20 xl:w-36 right-0  "
            src={Leaf2}
            alt=""
          />
          <section className="pt-6 ">
            <ProductBreadCrumb
              productId={product?.id}
              setProductCate={setProductCate}
              productCate={productCate}
            ></ProductBreadCrumb>
            <div className="container mx-auto ">
              <div className=" absolute z-0 h-[2px]  left-0 w-full bg-[#7CC9B5] rounded mb-5"></div>

              <Image
                className="hidden lg:block absolute z-0 top-52 left-0 w-16 "
                src={Leaf1}
                alt=""
              />

              <div className="lg:col-gap-10 xl:col-gap-10 grid grid-cols-1 gap-10 lg:mt-6 lg:grid-cols-4 lg:gap-1">
                <div className="pt-10 lg:col-span-2 lg:row-end-2 h-full lg:border-r-[#7CC9B5] lg:border-r-[2px] ">
                  <div className="lg:flex lg:items-start pt-6 h-full w-full">
                    <div className="lg:order-2 mx-auto h-full w-full">
                      <div className="max-w-xl h-full w-full">
                        <BookSwiper images={product.images} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 px-6 pl-6 pt-5 lg:pt-16 relative">
                  <h1 className="text-lg font-graphik text-[#015464] 2xl:text-3xl">
                    {product.title}
                  </h1>

                  <div className="mt-5 flex items-center ">
                    <StarRating
                      rating={reviewRating}
                      onRatingChange={() => {}}
                    />
                    <p className="ml-2 text-sm font-medium text-black ">
                      {" "}
                      ( {reviewCount} ){" "}
                    </p>

                    {/* <Link  href="#" onClick={WriteReview} className="pl-3 text-yellow-600 font-black">Write a Review</Link> */}
                    <WriteReview
                      product={product}
                      setReviewCount={setReviewCount}
                      setReviewRating={setReviewRating}
                    >
                      {" "}
                    </WriteReview>
                  </div>
                  <div className="mt-5 flex items-center lg:w-1/2">
                    <AuthorInfo product={product}></AuthorInfo>
                  </div>
                  <div className="py-3">
                    <ProductInfo product={product} />
                  </div>

                  <div className=" absolute h-[2px] w-full bg-[#7CC9B5] ml-[-30px] "></div>
                  <ul className=" py-3 lg:py-3 xl:py-2 m-2 md:flex align-center">
                    <li
                      className={`flex items-center text-left text-sm font-medium mx-3 text-gray-600 ${
                        isAddedToLibrary ? "text-[#015464]" : ""
                      }`}
                      onClick={handleAddToLibrary}
                    >
                      <Wishlist
                        variants={product?.variants}
                        wishlist={wishlist}
                        customer_id={customer?.id}
                      ></Wishlist>
                      <p className="ms-2">
                        {isAddedToLibrary
                          ? "Added to Library"
                          : "Add to Library"}
                      </p>
                    </li>

                    <li
                      className={`mt-3 ml-4 md:ml-3 md:mt-0 flex items-center text-left text-sm font-medium mx-3 text-gray-600 relative ${
                        isShared ? "text-[#015464]" : ""
                      }`}
                      onClick={handleShare}
                    >
                      <Image src={share} className="mr-2" alt="" />{" "}
                      {!isShared && "Share"}
                      {isShared && (
                        <div
                          className={`pl-[30px] w-[200px] -top-[15px] md:-top-[8px] absolute z-50  grid grid-cols-4 gap-2`}
                        >
                          <div className="p-2">
                            <FacebookShareButton
                              className="p-2"
                              url={currentUrl}
                              title={`${product?.title} ' - ' ${product?.description}`}
                              hashtag={"#enool"}
                            >
                              <FacebookIcon size={32} round />
                            </FacebookShareButton>
                          </div>

                          <div className="p-2">
                            <TwitterShareButton
                              className="p-2"
                              url={currentUrl}
                              title={`${product?.title} ' - ' ${product?.description}`}
                            >
                              <TwitterIcon size={32} round />
                            </TwitterShareButton>
                          </div>

                          <div className="p-2">
                            <WhatsappShareButton
                              className="p-2"
                              url={currentUrl}
                              title={`${product?.title} '  -  ' ${product?.description}`}
                            >
                              <WhatsappIcon size={32} round />
                            </WhatsappShareButton>
                          </div>
                          <div className="p-2">
                            <LinkedinShareButton
                              className="p-2"
                              url={currentUrl}
                              title={`${product?.title} ' - ' ${product?.description}`}
                            >
                              <LinkedinIcon size={32} round />
                            </LinkedinShareButton>
                          </div>
                        </div>
                      )}
                    </li>

                    {/* </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div className="absolute z-0 h-[2px] left-0 w-full bg-[#7CC9B5] rounded mb-1"></div>

          <div className="px-1">
            <div className=" sm:flex sm:justify-center">
              <Tabswitch product={product} />
            </div>
          </div>
          <Image
            className=" hidden lg:block  absolute z-0 mt-96 xl:w-24  "
            src={Leaf2}
            alt=""
          />
          <div className="mt-4">
            <RelatedProducts product={product} />
            {/* <NewAndNoteworthy /> */}
          </div>
        </div>
      </div>
      {/* <div className="content-container flex flex-col small:flex-row small:items-start py-6 relative">
        <div className="flex flex-col gap-y-8 w-full">
          <ImageGallery images={product?.images || []} />
        </div>
        <div
          className="small:sticky small:top-20 w-full py-8 small:py-0 small:max-w-[344px] medium:max-w-[400px] flex flex-col gap-y-12"
          ref={info}
        >
          {isOnboarding && <ProductOnboardingCta />}
          <ProductInfo product={product} />
          <ProductTabs product={product} />
        </div>
      </div>
      <div className="content-container my-16 px-6 small:px-8 small:my-32">
        <RelatedProducts product={product} />
      </div>
      <MobileActions product={product} show={!inView} /> */}
    </ProductProvider>
  );
};

export default ProductTemplate;
