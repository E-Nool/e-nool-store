// @ts-nocheck
import medusaRequest from "@lib/medusa-fetch";
import { Metadata } from "next";
import BookshelfPageTemplate from "@modules/book-shelf/templates";

import Lefe from "@public/images/lefe1.png";

import bgimg from "@public/images/bg1.png";
import Image from "next/image";
type Props = {
  params: { id: string };
};

export default async function BookshelfPage({ params }: Props) {
  const id = params.id;
  return (
    <>
      <div className=" ">
        <Image
          className=" absolute z-[-1]  top-0 right-0 left-24"
          src={bgimg}
          alt="bgimg"
        />
        <Image
          className=" hidden lg:block absolute -ml-[6] z-[-1] mt-36 w-20 "
          src={Lefe}
          alt=""
        />
        <Image
          className=" hidden lg:block absolute top-[300px] z-[-1] bottom-36 right-0 w-20 "
          src={Lefe}
          alt=""
        />
        <div className="container mx-auto px-5 md:px-20 ">
          <BookshelfPageTemplate id={id} />
        </div>
      </div>
    </>
  );
}
