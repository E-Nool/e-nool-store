// @ts-nocheck
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { add_reviewer } from "@lib/util/admin_api";
import FormData from 'form-data';
import axios from 'axios';
import countriesData from "@public/countries.json"

function Publisher() {
  const [formData, setFormData] = useState({
    reviewerName: '',
    email: '',
    department: '',
    phoneNumber: '',
    addInfo: '',
    agreeToTerms: false,
    countryCode: ''
  });



  const [data, setData] = useState([]);
  const [countryCodes, setCountryCodes] = useState<string[]>([]);

  useEffect(() => {
    // Extract country codes from the country data
    // const codes = countriesData.map((country) => country.dial_code);
    // setCountryCodes(codes);
    setCountryCodes(countriesData)
  }, []);



  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    let formattedValue = value;

    if (name === 'reviewerName') {
      formattedValue = value.charAt(0).toUpperCase() + value.slice(1);
    } else if (name === 'email') {
      formattedValue = value.toLowerCase();
    } else if (name === 'phoneNumber') {
      // Allow only numbers and limit to 15 digits
      const phoneNumber = value.replace(/\D/g, ''); // Remove non-numeric characters
      formattedValue = phoneNumber.slice(0, 15); // Limit to 15 digits
    }

    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: e.target.checked });
    } else if (name === 'addInfo') {
      // Limit addInfo to 250 words
      if (value.length <= 250) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: formattedValue });
    }
};







  const handleCountryCodeChange = (e) => {
    const selectedCountryCode = e.target.value;
    setFormData({
      ...formData,
      countryCode: selectedCountryCode,
    });
  };

 

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    // Check if any required fields are empty
    if (
      formData.reviewerName === '' ||
 
      formData.email === '' ||
      formData.department === '' ||
    
      formData.phoneNumber === '' ||
      formData.countryCode === '' ||

      formData.agreeToTerms === false
    ) {
      alert('Please fill in all mandatory details including country code');
      return;
    }
    try {

      console.log('Form Data:', formData);

      const reviewSubmit = await add_reviewer(formData)

      alert('Form submitted successfully!');
      window.location.reload();


    } catch (error: any) {
      console.error('API Error:', error);
      console.error('API Error:', error);
      if (error.response && error.response.data) {
        // Display the error message in an alert
        alert(`Error: ${error.response.data}`);
      } else {
        // If no specific error message is available, show a generic message
        alert('Error submitting form. Please try again.');
      }
    }

  };


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
      

        <div className=" bg-[#F9F9F9] mx-auto p-10 mt-10">
          <form onSubmit={handleSubmit} className="relative space-y-2 max-w-screen-2xl mx-auto  p-6 lg:p-10">
            <div className=" text-center font-medium">
              <h1 className=" text-[#015464] text-2xl font-graphikBold">
                Get in Touch
              </h1>
              <p className=" text-[#015464] text-[13px] mt-4">
                A streamlined registration form for reviewer to submit essential book information.<br/> Captures key details like names, titles, contact info, and descriptions for efficient cataloging and communication.
              </p>
            </div>

            <div className="grid gap-2 md:grid-cols-2 sm:p-10">
              
            <div className="flex flex-col items-start ">
            <label htmlFor="reviewerName" className="mt-2" style={{ color: '#408080' }}>Reviewer Name <span style={{ color: '#408080' }}>*</span></label>
                <input
                  type="text"
                  placeholder="Enter your  Name"
                  className=" mt-2 h-12 w-full rounded-md placeholder-[#b9b9b9]  placeholder:text-sm px-3"
                  required
                  name="reviewerName"
                  value={formData.reviewerName}
                  onChange={handleInputChange}
                />
                </div>

              <div className="flex flex-col items-start ">
            <label htmlFor="publisherName" className="mt-2" style={{ color: '#408080' }}>Email ID <span style={{ color: '#408080' }}>*</span></label>
                <input
                  type="email"
                  placeholder="Enter your Email ID"
                  className="mt-2 h-12 w-full rounded-md placeholder-[#b9b9b9] placeholder:text-sm px-3"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>


              <div className="flex flex-wrap">
  <div className="w-full flex flex-col items-start ">
  <label htmlFor="language" className=" mt-2" style={{ color: '#408080' }}>Department <span style={{ color: '#408080' }}>*</span></label>
  <select
    className="mt-2 h-12 w-full rounded-md text-sm px-3"
    name="department"
    value={formData.department}
    onChange={handleInputChange}
    required
    style={{ color: '#b9b9b9' }}
  >
   <option value="" style={{ color: '#b9b9b9' }}>Select Department</option>
    <option value="1">Quality Analyst L1</option>
    <option value="2">Quality Analyst L2</option>
    <option value="3">Approver</option>
    {/* Add more options as needed */}
  </select>
</div>
</div>
             
<div className="flex flex-col items-start ">
  <label htmlFor="number" className=" mt-2" style={{ color: '#408080' }}>Phone Number <span style={{ color: '#408080' }}>*</span></label>
  <div className="relative mt-2 w-full flex">
    <select
      className="w-[110px] h-12 pl-3 pr-10 text-base bg-white border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mr-2"
      name="phoneCode"
      value={formData.countryCode}
      onChange={handleCountryCodeChange}
      style={{ color: '#b9b9b9' }}
      required
    >
      <option value="" style={{ color: '#b9b9b9' }} disabled>
                     Code
                    </option>
                    {/*{countryCodes.sort((a, b) => b.localeCompare(a)).map((code) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}*/}
                    {countryCodes
                      // .sort((a, b) => b.localeCompare(a))
                      .map((countryCode) => {
                        console.log(countryCode)
                        return (<option key={countryCode?.dial_code} value={countryCode?.dial_code}>
                          {countryCode?.dial_code} ({countryCode?.name})
                        </option>)
                      })}


    </select>
    <input
      type="tel"
      placeholder="Enter your Phone Number"
      required
      className="flex-1 h-12 pl-3 rounded-md placeholder-[#b9b9b9] placeholder:text-sm"
      name="phoneNumber"
      value={formData.phoneNumber}
      onChange={handleInputChange}
    />
  </div>
</div>




              <div className="flex flex-col items-start ">
            <label htmlFor="bookdesc" className="mt-2" style={{ color: '#408080' }}>Additional Information</label>
                <textarea
                  placeholder="Enter your Additional Information"
                  className="mt-2 h-12 w-full rounded-md placeholder-[#b9b9b9] placeholder:text-sm placeholder:pt-5 px-3"
                  name="addInfo"
                  value={formData.addInfo}
                  onChange={handleInputChange}
                  style={{ backgroundColor: 'white',  height: '100px', resize: 'none' }}
                />
                <div className="text-xs text-[#408080] mt-2">
                <span>{formData.addInfo.length}/250 </span>
                </div>
              </div>



            </div>

            <div className="checkbox sm:p-10">
              <input
                type="checkbox"
                id="checkbox1"
                name="agreeToTerms" // Make sure to include the name attribute
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="mr-2" required
              />
              <label htmlFor="checkbox1">
                I agree to the{" "}
                <a href="/terms-conditions" target="_blank" className="text-[#408080]">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-80 h-10 sm:w-50 items-center rounded-full bg-[#7CC9B5] p-2 text-center font-graphik text-xs text-white"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
       
      </div>
    </DefaultLayout>
  );
}

export default Publisher;
