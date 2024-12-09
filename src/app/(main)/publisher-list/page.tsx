"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import React from "react";
import Leaf from "../../../../public/images/LandingPage/Leaf1.png";
import about1 from "../../../../public/images/about1.png";
import LefeBg from "../../../../public/images/lefe1.png";
// import Mamoth from "@/app/Pages/Userside/publisher/mamoth"
import grid from "../../../../public/images/grid.png";
import img4 from "../../../../public/images/img4.png";
import img5 from '../../../../public/images/img5.png';
import img6 from '../../../../public/images/img6.png';
import Maskgroup5 from "../../../../public/images/MaskGroup5.png";
import group3 from "../../../../public/images/group3.png";
import publisherbook from "../../../../public/images/publisher-book.png";
import FeaturedPublishers from "@modules/authors/FeaturedPublishers";
import DefaultLayout from "@modules/layout/templates"


import Link from "next/link";
import { add_publisher } from "@lib/util/admin_api";
import FormData from 'form-data';
import axios from 'axios';

function Publisher() {

  const [data, setData] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {

          /*const responseAuthor = await axios.post('https://admin.enool.in/user/get/authentication-user', {
            email: 'admin01@gmail.com',
            password: 'Blueiscolor4.',
          });

          const newToken = responseAuthor.data.token;
          console.log('Token:', newToken);


        // Set up headers with the access token
        const headers = {
          Authorization: `Bearer ${newToken}`,
        };*/

        // Make the API call
        const response = await axios.get('https://admin.enool.in/user/publisher-list');

        // Update state with the data from the response
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  const swiperRef = useRef(null);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    const autoplayTimeout = setTimeout(() => {
      setIsAutoplay(true);
      setIsPlaying(true);
    }, 1000);

    return () => {
      clearTimeout(autoplayTimeout);
    };
  }, []);

  return (
    <DefaultLayout>
      <div className=" m-auto font-graphik">
        {/* <Image className=' relative h-[600px]' src={Aboutbg} /> */}
        <Image
          className=" hidden lg:block absolute top-28 z-0 bottom-36 right-0 w-28 "
          src={LefeBg}
          alt=""
        />
        <div>

          <div className=" relative">
            <div className=" m-auto flex flex-col justify-between items-center sm:px-16 py-4 ">
              <div className=" text-center font-medium">
                <h1 className=" text-[#015464] text-2xl font-extrabold">
                  Publisher List
                </h1>
              </div>
              <div className="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8  md:grid-cols-2 lg:grid-cols-4">
                {data.map((author: { id: number, title: string, description: string, profile_image: string }) => (
                  <div className="p-4 flex flex-col items-center" key={author.id}>
                  <Image
                    className="rounded lg:w-36  object-cover object-center mb-6"
                    src={author.profile_image}
                    alt="content"
                    width={300} // Add the width property here
                    height={400} // Add the height property here

                  />
                  <p className="font-graphikBold text-[#015464]"> {author.title}</p>
                </div>
                ))}

              </div>
            </div>
          </div>

        </div>

      </div>
    </DefaultLayout>
  );
}

export default Publisher;
