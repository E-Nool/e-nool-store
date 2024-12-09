// @ts-nocheck
"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import React from "react";
import Leaf from "../../../../public/images/LandingPage/Leaf1.png";
import about1 from "../../../../public/images/about1.png";
import LefeBg from "../../../../public/images/lefe1.png";
import grid from "../../../../public/images/grid.png";
import convert from "../../../../public/images/convert.png";
import sell from "../../../../public/images/sell.png";
import earn from "../../../../public/images/Earn.png";
import img4 from "../../../../public/images/img4.png";
import Maskgroup5 from "../../../../public/images/MaskGroup5.png";
import group3 from "../../../../public/images/group3.png";
import publisherbook from "../../../../public/images/publisher-book.png";
import FeaturedPublishers from "@modules/authors/FeaturedPublishers";
import FeaturedAuthors from "@modules/authors/FeaturedAuthors";
import DefaultLayout from "@modules/layout/templates";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import group2 from "../../../../public/images/group2.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import { add_author } from "@lib/util/admin_api";
import FormData from "form-data";
import countriesData from "@public/countries.json";
import { redIcon } from "@modules/epub/lib/svg";
import NewsletterForm from "@modules/common/components/newsletter-form"
import OurTeam from "@modules/common/components/our-team";
import FavoriteBookSlider from "@modules/common/components/favorite-book-slider";
import grp1 from "../../../../public/images/grp1.png";

function Author() {
  const [formData, setFormData] = useState({
    authorName: "",
    bookTitle: "",
    email: "",
    language: "",
    phoneNumber: "",
    isbnNumber: "",
    coverImage: null,
    cover_image: "",
    bookUrl: "",
    bookDescription: "",
    authorDescription: "",
    agreeToTerms: false,
    countryCode: "",
  });

  // my
  const [errors, setErrors] = useState({
    authorName: false,
    bookTitle: false,
    email: false,
    language: false,
    bookUrl: false,
    phoneNumber: false,
    coverImage: false,
    bookDescription: false,
    authorDescription: false,
  });

  // my

  const [data, setData] = useState([]);
  const [countryCodes, setCountryCodes] = useState<string[]>([]);

  useEffect(() => {
    // Extract country codes from the country data
    // const codes = countriesData.map((country) => country.dial_code);
    // setCountryCodes(codes);
    setCountryCodes(countriesData)
  }, []);

  // const handleInputChange = (e) => {
  //   const { name, value, type, checked, files } = e.target;
  //   if (type === 'checkbox') {
  //     setFormData({ ...formData, [name]: checked });
  //   } else if (type === 'file') {
  //     const selectedFile = files[0];
  //     setFormData({
  //       ...formData,
  //       [name]: selectedFile,
  //       cover_image: selectedFile ? selectedFile.name : '', // Set coverImageFileName to the file name
  //     });
  //   } else if (name === 'bookDescription') {
  //     // Limit bookDescription to 250 letters
  //     if (value.length <= 250) {
  //       setFormData({ ...formData, [name]: value });
  //     }
  //   } else if (name === 'authorDescription') {
  //     // Limit bookDescription to 250 letters
  //     if (value.length <= 250) {
  //       setFormData({ ...formData, [name]: value });
  //     }
  //   } else {
  //     setFormData({ ...formData, [name]: value });
  //   }
  // };

  // my
  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    let formattedValue = value;

    if (
      name === "authorName" ||
      name === "bookTitle" ||
      name === "bookDescription" ||
      name === "authorDescription" ||
      name === "language"
    ) {
      formattedValue = value.charAt(0).toUpperCase() + value.slice(1);
    } else if (name === "email") {
      formattedValue = value.toLowerCase(); // Convert email to lowercase
    }

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      const selectedFile = files[0];
      setFormData({
        ...formData,
        [name]: selectedFile,
        cover_image: selectedFile ? selectedFile.name : "", // Set coverImageFileName to the file name
      });
    } else if (name === "bookDescription") {
      // Limit bookDescription to 250 letters
      if (value.length <= 250) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === "authorDescription") {
      // Limit authorDescription to 250 letters
      if (value.length <= 250) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === "phoneCode") {
      setFormData({ ...formData, [name]: value });
    } else if (name === "phoneNumber") {
      // Allow only numbers and limit to 15 digits
      const phoneNumber = value.replace(/\D/g, "").slice(0, 15); // Remove non-numeric characters and limit to 15 digits
      setFormData({ ...formData, [name]: phoneNumber });

      // Format phone number with country code
      const codeIndex = phoneNumber.length > 2 ? 2 : phoneNumber.length;
      const countryCode = phoneNumber.slice(0, codeIndex);
      const number = phoneNumber.slice(codeIndex);
      formattedValue = `+${countryCode} ${number}`;
    } else {
      setFormData({ ...formData, [name]: formattedValue });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mandatoryFields = [
      "authorName",
      "bookTitle",
      "email",
      "language",
      "bookUrl",
      "phoneNumber",
      "coverImage",
      "bookDescription",
    ];
    let hasError = false;
    const newErrors = { ...errors };

    mandatoryFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = true;
        hasError = true;
      } else {
        newErrors[field] = false;
      }
    });

    if (hasError) {
      setErrors(newErrors);
      alert("Please upload the cover image");
      return;
    }

    try {
      console.log("Form Data:", formData);
      const reviewSubmit = await add_author(formData);
      alert("Form submitted successfully!");
      window.location.reload();
    } catch (error: any) {
      console.error("API Error:", error);
      if (error.response && error.response.data) {
        // Display the error message in an alert
        alert(`Error: ${error.response.data}`);
      } else {
        // If no specific error message is available, show a generic message
        alert("Error submitting form. Please try again.");
      }
    }
  };

  // my

  const handleCountryCodeChange = (e) => {
    const selectedCountryCode = e.target.value;
    setFormData({
      ...formData,
      countryCode: selectedCountryCode,
    });
  };

  const handleFileChange = (e) => {
    // Handle file change separately
    setFormData({
      ...formData,
      coverImage: e.target.files[0],
    });
  };

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Check if any required fields are empty
  //   if (

  //     formData.authorName === '' ||
  //     formData.bookTitle === '' ||
  //     formData.email === '' ||
  //     formData.language === '' ||
  //     formData.bookUrl === '' ||
  //     formData.phoneNumber === '' ||
  //     formData.coverImage === null ||
  //     formData.bookDescription === '' ||
  //     formData.cover_image === '' ||
  //     formData.countryCode === '' ||
  //     formData.agreeToTerms === false

  //   ) {
  //     alert('Please fill in all mandatory details including cover image');
  //     return;
  //   }
  //   try {

  //     console.log('Form Data:', formData);
  //     const reviewSubmit = await add_author(formData)

  //     alert('Form submitted successfully!');
  //     window.location.reload();

  //   } catch (error: any) {
  //     console.error('API Error:', error);
  //     if (error.response && error.response.data) {
  //       // Display the error message in an alert
  //       alert(`Error: ${error.response.data}`);
  //     } else {
  //       // If no specific error message is available, show a generic message
  //       alert('Error submitting form. Please try again.');
  //     }
  //   }

  // };

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

        <div className=" ">
          <div className=" pt-14 leading-6 max-w-screen-2xl mx-auto">
            <div className="mx-auto  text-[#015464] ml-8 md:ml-24">
              <nav>
                <ul className="flex m-0 items-center p-0">
                  <li className="flex items-center text-left">
                    <Link
                      href="/"
                      title=""
                      className="cursor-pointer text-sm font-normal leading-5 text-[#015464] hover:text-gray-900"
                    >
                      {" "}
                      Home{" "}
                    </Link>
                  </li>

                  <li className="flex items-center text-left">
                    <svg
                      className="block h-5 w-5 align-middle text-[#015464]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
                    </svg>

                    <a
                      href="#"
                      title=""
                      className="cursor-pointer text-sm font-normal leading-5 text-[#015464] hover:text-gray-900"
                    >
                      {" "}
                      Author{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className=" md:container  top-10   md:mx-auto flex  pt-10 md:px-2 md:flex-row flex-col justify-center items-center">
            <Image
              className="hidden md:block absolute z-0 top-20 lg:w-16 md:w-10 left-0  z-[1] "
              src={Leaf}
              alt=""
            />

            <div className="lg:max-w-lg lg:w-full md:w-1/2 p-3 right-[10px] m-16 md:top-10 lg:top-0 hidden lg:block">
              <Image
                className="object-cover object-center  "
                src={about1}
                alt=""
              />
            </div>
            <div className="px-5 lg:ml-5 pt-10 lg:pt-20 lg:flex-grow lg:w-1/2 lg:pr-24  flex flex-col lg:items-start lg:text-left md:mb-16 md:mb-0 items-center text-center ">
              <h2 className=" text-[#015464]  text-lg mx-auto md:mx-0 top-[251px] left-[965px] w-[143px] h-[16px] font-graphikBold">
                WHO WE ARE
              </h2>
              <h1 className=" text-[#015464]  font-graphikBold text-2xl mt-8 ">
                About ENOOL
              </h1>
              <div className="h-1 w-64 bg-[#0FBF61]/70 opacity-30 rounded"></div>

              <p className=" text-[#015464] mt-5 text-sm font-medium left-[965px] w-5/4  indent-4 text-justify">
                eNOOL ™ has developed a state-of-the-art e-publishing platform
                that makes every Tamil book available to national and
                international readers for easy reading at their desks using
                laptops or mobiles. It intends to achieve this by digitizing all
                existing and new Tamil books into e-books.
              </p>
              <p className=" text-[#015464] mt-5 text-sm font-medium left-[965px] w-5/4  indent-4 text-justify">
                From authors, publishers, publishers or literacy companies, we
                invite and convert their books including literatures, novels,
                manuscripts, and catalogs, into beautiful, keyword-searchable,
                and easy-to-read e-books at no upfront cost. In addition, we help them create their e-book advertising campaigns and sales and payment processing.
              </p>
              <p className=" text-[#015464] mt-5 text-sm font-medium left-[965px] w-5/4  indent-4 text-justify">
                Our mission is to create a world-class e-book and multimedia product, to help sell authors, publishers, and publishing companies’ e-books, to meet the highest quality for global accessibility, and to provide readers with the best digital reading experience.
              </p>

              {/*<button onClick={() => window.location.href="/browse"} className=" bg-[#7CC9B5] opacity-1 mt-8 p-2 px-5 rounded-3xl text-white ">
                Read More
              </button>*/}

              <div className="flex justify-center mt-28"></div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden">
              <Image
                className="object-cover object-center  "
                src={about1}
                alt=""
              />
            </div>
          </div>

          <div className="relative  md:container  top-2   md:mx-auto flex   md:px-2 md:flex-row flex-col justify-center items-center ">
          <div className="grid gap-8 md:grid-cols-2 pb-28 lg:gap-1">
            <div className=" lg:pt-5 lg:flex lg:flex-col  px-10 lg:justify-center">
              <h1 className="text-[#015464] font-extrabold text-4xl mt-8 font-graphikBold">
                Our Story
              </h1>
              <div className="h-1 w-64 bg-[#0FBF61]/70 opacity-30 rounded"></div>

              <p className="text-[#015464] mt-10 text-sm font-medium indent-4 text-justify">
                eNOOL ™ ஒரு நவீன மின்-வெளியீட்டு தளத்தை உருவாக்கி, ஒவ்வொரு தமிழ் புத்தகமும் தேசிய மற்றும் சர்வதேச வாசகர்களுக்கு அவர்களின் மேசைகளில் மடிக்கணினி அல்லது மொபைலைப் பயன்படுத்தி எளிதாகப் படிக்கக் கிடைக்க வழிச் செய்கிறது. தற்போதுள்ள மற்றும் புதிய தமிழ் புத்தகங்களை மின்னூல் வடிவில் டிஜிட்டல் மயமாக்கி மின்-புத்தகங்களாக கொண்டு வருவதன் மூலம் இதனை அடைய விரும்புகிறது.
              </p>
              <p className="text-[#015464] mt-10 text-sm font-medium indent-4 text-justify">
                ஆசிரியர்கள், வெளியீட்டாளர்கள், பதிப்பகம் அல்லது கல்வியறிவு நிறுவனத்திடமிருந்து, நாவல்கள், கையெழுத்துப் பிரதிகள், மற்றும் பட்டியல்கள் ஆகியவற்றை உள்ளடக்கிய அவர்களின் புத்தகங்களை அழகாகவும், முக்கிய வார்த்தைகள் மூலம் தேடக்கூடியதாகவும், எளிதாகப் படிக்கக்கூடியதாகவும் மின்-புத்தகங்களாக ஆரம்ப செலவின்றி மாற்றித்தருகிறோம்.
              </p>
              <p className="text-[#015464] mt-10 text-sm font-medium indent-4 text-justify">
                உலகத் தரம் வாய்ந்த மின்-புத்தகம் மற்றும் மல்டிமீடியா தயாரிப்பை உருவாக்குவதும், ஆசிரியர்கள், வெளியீட்டாளர்கள் மற்றும் வெளியீட்டு நிறுவனப் புத்தகங்களை விற்பனைக்கு உதவுவதும்., உலகளாவிய அணுகல்தன்மைக்கான மிக உயர்ந்த தரநிலைகளைப் பூர்த்தி செய்வதும், சிறந்த டிஜிட்டல் வாசிப்பு அனுபவத்தை வழங்குவதுமே எங்கள் நோக்கம்.
              </p>
            </div>
            <div className="flex items-end">
              <div className="overflow-hidden">
                <Image
                  className=" "
                  src={grp1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

          <div className=" text-center md:py-40 md:px-20   relative   py-40 xl:py-40 text-white  publisher_bg">
            <h1 className=" font-extrabold text-3xl font-graphikBold ">
              Why Author for eNOOL?
            </h1>
            <p className=" p-5 text-xs font-light ">
              Discover innovative stories and writing from forward-thinking
              authors on eNOOL
            </p>

            <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-10 p-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-3xl  border-[#14adad] p-3 shadow-lg hover:shadow-xl border flex flex-col items-center justify-center">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <Image
                    className="h-28 w-28 m-6 md:items-center mx-auto"
                    src={convert}
                    alt="grid-img"
                  />
                </div>

                <div className="mt-1 p-2 text-center ">
                  <h3 className=" font-graphikBold mt-0 p-2">1. Convert</h3>
                  <p className="text-xs font-graphik m-2 ">
                    Publish at ₹ 0
                  </p>
                  <p className="text-xs font-graphik m-2 ">
                    Publish your book  without any expenses or any down payment
                  </p>
                  <p className="text-xs font-graphik m-2 ">
                    உங்கள் புத்தகத்தை எந்த செலவும் அல்லது எந்த முன்பணமும் இல்லாமல் வெளியிடுவோம்
                  </p>
                </div>
              </div>

              <div className="rounded-3xl  border-[#14adad] p-3 shadow-lg hover:shadow-xl border flex flex-col items-center justify-center">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <Image
                    className="h-28 w-28 m-6 md:items-center mx-auto"
                    src={sell}
                    alt="grid-img"
                  />
                </div>

                <div className="mt-1 p-2 text-center">
                  <h3 className="text-white font-graphikBold mt-0 p-2">
                    2. Sell
                  </h3>
                  <p className="text-xs font-graphik m-2 ">
                    Sell your eBook on the www.enool.in site www.enool.in
                  </p>
                  <p className="text-xs font-graphik m-2 ">
                    தளத்தில் உங்கள் மின்புத்தகத்தை விற்கவும்
                  </p>
                </div>
              </div>
              <div className="rounded-3xl  border-[#14adad] p-3 shadow-lg hover:shadow-xl border flex flex-col items-center justify-center">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <Image
                    className="h-28 w-28 m-6 md:items-center mx-auto"
                    src={earn}
                    alt="grid-img"
                  />
                </div>

                <div className="mt-1 p-2 text-center">
                  <h3 className="text-white font-graphikBold mt-0 p-2">
                    3. Earn
                  </h3>
                  <p className="text-xs font-graphik m-2 ">
                    Get free promotions and get your sales payment at a click away.
                  </p>
                  <p className="text-xs font-graphik m-2 ">
                    இலவச விளம்பரங்களைப் பெறுங்கள் மற்றும் உங்கள் விற்பனை கட்டணத்தை ஒரு கிளிக்கில் பெறுங்கள்.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className=" text-center md:p-10   relative   py-10  ">
          <h1 className=" font-extrabold text-3xl font-graphikBold text-[#015464]">
            Our Workflow
          </h1>

          <div className="mx-auto  items-center grid max-w-screen-xl grid-cols-1 gap-10 p-6 md:grid-cols-2  lg:grid-cols-3">
            <div className=" lg:mx-auto rounded-3xl lg:w-72 bg-white p-3 shadow-lg hover:shadow-xl border flex flex-col items-center justify-center">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Image
                  className="h-28 w-28 m-6 md:items-center mx-auto"
                  src={img4}
                  alt="grid-img"
                />
              </div>

              <div className="mt-1 p-2 text-center">
                <h3 className="text-[#42495B] font-graphikBold mt-0 p-2">
                  Step 01
                </h3>
              </div>
              <p className="text-xs text-[#42495B] font-graphik m-2 mb-10 text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className=" lg:mx-auto rounded-3xl lg:w-72 bg-white p-3 shadow-lg hover:shadow-xl border flex flex-col items-center justify-center">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Image
                  className="h-28 w-28 m-6 md:items-center mx-auto"
                  src={img4}
                  alt="grid-img"
                />
              </div>

              <div className="mt-1 p-2 text-center">
                <h3 className="text-[#42495B] font-graphikBold mt-0 p-2">
                  Step 02
                </h3>
              </div>
              <p className="text-xs text-[#42495B] font-graphik m-2 mb-10 text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className=" lg:mx-auto rounded-3xl lg:w-72 bg-white p-3 shadow-lg hover:shadow-xl border flex flex-col items-center justify-center">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Image
                  className="h-28 w-28 m-6 md:items-center mx-auto"
                  src={img4}
                  alt="grid-img"
                />
              </div>

              <div className="mt-1 p-2 text-center">
                <h3 className="text-[#42495B] font-graphikBold mt-0 p-2">
                  Step 03
                </h3>
              </div>
              <p className="text-xs text-[#42495B] font-graphik m-2 mb-10 text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>*/}
        {/*<div className=" mt-10 text-[#015464] bg-[#F9FCFB] rounded-xl text-center p-5 w-full md:px-14 relative  container  py-10 mx-auto ">
          <h1 className=" font-extrabold text-3xl font-graphikBold">
            eNOOL Bookshelf
          </h1>
          <p className=" p-5 text-sm font-graphik mx-auto">
            Creating a bookshelf on your website can be a charming way to showcase your interests, collections, or products. Here are some lines you might consider for your website.
          </p>

          <Swiper
            ref={swiperRef}
            spaceBetween={3}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              el: ".swiper-pagination-right",
              clickable: true,
              renderBullet: (index, className) => {
                return `<span className="${className}" style="background-color: #015464;"></span>`;
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="title-font  md:text-4xl lg:text-7xl mb-4 font-graphikBold text-[#015464]">
                    Meet Your Next
                    <br className="hidden lg:inline-block" />
                    Favorite Book
                    <div className="h-1 w-full bg-[#015464]  rounded"></div>
                  </h1>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <Image
                    className="object-cover object-center rounded"
                    alt="hero"
                    src={publisherbook}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="title-font md:text-4xl lg:text-7xl  mb-4 font-graphikBold text-[#015464]">
                    Meet Your Next
                    <br className="hidden lg:inline-block" />
                    Favorite Book
                    <div className="h-1 w-full bg-[#015464]  rounded"></div>
                  </h1>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <Image
                    className="object-cover object-center rounded"
                    alt="hero"
                    src={publisherbook}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="hidden md:container md:mx-auto md:flex   md:flex-row flex-col items-center">
            <div className="  lg:w-full md:w-1/2 w-5/6 lg:flex-grow  lg:pr-24 md:pr-24 flex flex-row md:items-start md:  mb-16 md:mb-0  md:text-left sm:text-center ">
              <div className="swiper-pagination-right  mt-2 space-x-1 w-30 h-10 ml-4 "></div>
            </div>
          </div>
        </div>*/}

        {/*<FavoriteBookSlider/>*/}

        {/*<OurTeam/>*/}

        {/*<div className=" px-10">
          <FeaturedAuthors />
        </div>*/}
        {/* author register form */}
        {/*<div className=" bg-[#F9F9F9] mt-10">*/}
        <div className=" bg-[#F9F9F9]">
          <form
            onSubmit={handleSubmit}
            className="relative space-y-2 max-w-screen-2xl mx-auto  p-6 lg:p-10"
          >
            <div className=" text-center font-medium">
              <h1 className=" text-[#015464] text-2xl font-graphikBold">
                Get in Touch
              </h1>
              <p className=" text-[#015464] text-[13px] mt-4">
                A streamlined registration form for authors to submit essential book information.<br/> Captures key details like names, titles, contact info, and descriptions for efficient cataloging and communication.
              </p>
            </div>

            <div className="md:grid gap-2 md:grid-cols-2 sm:p-10">
              <div className="flex flex-col items-start ">
                <label
                  htmlFor="authorName"
                  className="mb-2"
                  style={{ color: "#408080" }}
                >
                  Authors/Writers Name{" "}
                  <span style={{ color: "#408080" }}>*</span>
                </label>
                <input
                  type="text"
                  id="authorName"
                  placeholder="Enter your Authors/Writers Name"
                  className={`mt-2 h-12 w-full rounded-md placeholder-[#b9b9b9] placeholder:text-sm px-3 ${
                    errors.authorName ? "border-red-500" : ""
                  }`}
                  name="authorName"
                  value={formData.authorName}
                  onChange={handleInputChange}
                  required
                />
                {errors.authorName && (
                  <p className="text-red-500">Please fill out this field.</p>
                )}
              </div>

              <div className="flex flex-col items-start ">
                <label
                  htmlFor="booktitle"
                  className="mb-2"
                  style={{ color: "#408080" }}
                >
                  Book Title <span style={{ color: "#408080" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Book Title"
                  className="mt-2 h-12 w-full rounded-md placeholder-[#b9b9b9] placeholder:text-sm px-3"
                  required
                  name="bookTitle"
                  value={formData.bookTitle}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex flex-col items-start ">
                <label
                  htmlFor="emailid"
                  className="mb-2 mt-2"
                  style={{ color: "#408080" }}
                >
                  Email ID <span style={{ color: "#408080" }}>*</span>
                </label>
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
                  <label
                    htmlFor="language"
                    className=" mt-4"
                    style={{ color: "#408080" }}
                  >
                    Enter Language <span style={{ color: "#408080" }}>*</span>
                  </label>

                  <input
                    id="language"
                    type="text"
                    placeholder="Enter your Language"
                    className="mt-2 h-12 w-full rounded-md placeholder-[#b9b9b9] placeholder:text-sm px-3"
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col items-start ">
                <label
                  htmlFor="bookurl"
                  className="mb-2 mt-2"
                  style={{ color: "#408080" }}
                >
                  Book URL <span style={{ color: "#408080" }}>*</span>
                </label>
                <input
                  id="bookurl"
                  type="text"
                  placeholder="Enter your Book URL"
                  required
                  className="mt-2 h-12 w-full rounded-md placeholder-[#b9b9b9] placeholder:text-sm px-3"
                  name="bookUrl"
                  value={formData.bookUrl}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex flex-col items-start ">
                <label
                  htmlFor="number"
                  className="mb-2 mt-2"
                  style={{ color: "#408080" }}
                >
                  Phone Number <span style={{ color: "#408080" }}>*</span>
                </label>
                <div className="relative mt-2 w-full flex">
                  <select
                    className="w-[110px] h-12 pl-3 pr-10 text-base bg-white border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mr-2"
                    name="phoneCode"
                    value={formData.countryCode}
                    onChange={handleCountryCodeChange}
                    style={{ color: "#b9b9b9" }}
                    required
                  >
                    <option value="" style={{ color: "#b9b9b9" }} disabled>
                      Code
                    </option>

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
                    // pattern="\d{10}"
                    // title="Please enter a 10-digit phone number"
                    className="flex-1 h-12 pl-3 w-full rounded-md placeholder-[#b9b9b9] placeholder:text-sm"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex flex-col items-start ">
                <label
                  htmlFor="tel"
                  className="mb-2 mt-2"
                  style={{ color: "#408080" }}
                >
                  ISBN Number
                </label>
                <input
                  type="tel"
                  placeholder="ISBN Number"
                  className="mt-2 h-12 w-full rounded-md placeholder-[#b9b9b9] placeholder:text-sm px-3"
                  name="isbnNumber"
                  value={formData.isbnNumber}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex flex-col items-start ">
                <label
                  htmlFor="coverimage"
                  className="mb-2 mt-2"
                  style={{ color: "#408080" }}
                >
                  Cover Image <span style={{ color: "#408080" }}>*</span>
                </label>
                <div className="flex items-center">
                  <div className="w-40 flex items-center">
                    <input
                      type="file"
                      id="uploadPhoto"
                      name="coverImage"
                      accept="image/png, image/jpeg, image/jpg"
                      onChange={handleInputChange}
                      style={{ display: "none" }}
                    />
                    <label
                      htmlFor="uploadPhoto"
                      className="cursor-pointer my-2 h-10 w-full rounded-md bg-[#408080] px-3 flex items-center justify-center mr-2"
                    >
                      <span className="text-white text-sm">Upload Photo</span>
                    </label>
                  </div>
                  <p className="text-[#408080] text-sm mr-2">
                    (JPG, PNG, JPEG)
                  </p>
                  {formData.cover_image && (
                    <p className="text-[#408080] text-sm">
                      ({formData.cover_image})
                    </p>
                  )}
                </div>
              </div>

              {/* <div className="flex flex-wrap items-center">
        <p className="text-[#408080] my-auto mx-4 text-sm">Cover Image <span style={{ color: '#408080' }}>*</span></p>
        <div className="w-40">
          <input
            type="file"
            id="uploadPhoto"
            name="coverImage"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleInputChange}
            style={{ display: 'none' }}
          />
          <label
            htmlFor="uploadPhoto"
            className="cursor-pointer my-2 h-10 w-full rounded-md bg-[#408080] px-3 flex items-center justify-center"
          >
            <span className="text-white text-sm">Upload Photo</span>
          </label>
         
        </div>
        <p className="text-[#408080] my-auto mx-4 text-sm">(JPG, PNG, JPEG)</p>
        <div>
{formData.cover_image && (
            <p className="text-[#408080] text-sm">{formData.cover_image}</p>
          )}
</div>
      </div> */}

              <div className="flex flex-col items-start ">
                <label
                  htmlFor="bookdesc"
                  className="mb-2 mt-2"
                  style={{ color: "#408080" }}
                >
                  Book Description <span style={{ color: "#408080" }}>*</span>
                </label>
                <textarea
                  id="bookdesc"
                  placeholder="Enter your Book Description"
                  className="mt-2 h-12 w-full rounded-md placeholder-[#b9b9b9] placeholder:text-sm placeholder:pt-5 px-3"
                  name="bookDescription"
                  value={formData.bookDescription}
                  onChange={handleInputChange}
                  required
                  style={{
                    backgroundColor: "white",
                    height: "100px",
                    resize: "none",
                  }} // Adding inline style for white background and height limit
                />
                <div className="text-xs text-[#408080] mt-2">
                  <span>{formData.bookDescription.length}/250 </span>
                </div>
              </div>

              <div className="flex flex-col items-start ">
                <label
                  htmlFor="publisherdesc"
                  className="mb-2 mt-2"
                  style={{ color: "#408080" }}
                >
                  Author Description
                </label>
                <textarea
                  id="publisherdesc"
                  placeholder="Enter your Author Description"
                  className="mt-2 h-12 w-full rounded-md placeholder-[#b9b9b9] placeholder:text-sm placeholder:pt-5 px-3"
                  name="authorDescription"
                  value={formData.authorDescription}
                  onChange={handleInputChange}
                  style={{
                    backgroundColor: "white",
                    height: "100px",
                    resize: "none",
                  }} // Adding inline style for white background and height limit
                />
                <div className="text-xs text-[#408080] mt-2">
                  <span>{formData.authorDescription.length}/250 </span>
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
                className="mr-2"
                required
              />
              <label htmlFor="checkbox1">
                I agree to the{" "}
                <a
                  href="/terms-conditions"
                  target="_blank"
                  className="text-[#408080]"
                >
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

        
        {/*<div className="container mx-auto flex px-5 md:px-10 pt-20 md:flex-row flex-col items-center max-w-screen-xl">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center sm:mx-20">
            <h1 className=" text-[#015464]  text-3xl text-start font-graphikBold">
              வெளியிட்டாளர் ஆகுங்கள்
            </h1>
            <p className=" text-[#015464]  text-xs text-start pt-3 ">
              Publishers plays an important role in exposing the social issues
              and make people to be aware of it.
            </p>
            <div className="flex justify-center  pt-2">
              <Link href="/publisher">
                <button className="inline-flex text-white bg-[#408080] border-0 py-3 px-6 focus:outline-none  rounded text-sm h-10">
                  <span className="my-auto">Get started</span>{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={group2}
            />
          </div>
        </div>*/}
        <div className="container mx-auto flex px-5 md:px-10 pt-20 md:flex-row flex-col items-center max-w-screen-xl">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=" text-[#015464] text-3xl text-start font-graphikBold">
              எழுத்தாளராக மாறுங்கள்
            </h1>
            <p className=" text-[#015464] text-xs text-start pt-3">
              Authors play an important role in creating a more just and
              equitable society.
              <br />
              Through their words, they can bring attention to important social
              issues, challenge dominant narratives, and inspire change.
            </p>
            <div className="flex justify-center  pt-10">
              <Link href="/author">
                <button className="inline-flex text-white bg-[#408080] border-0 py-2 px-6 focus:outline-none  rounded text-sm h-10">
                  <span className="my-auto">Get started</span>{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={group3}
            />
          </div>
        </div>
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center max-w-screen-xl">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="sm:text-center">
              <h2 className="text-3xl font-graphikBold leading-7 text-[#015464] sm:text-4xl xl:text-5xl">
                eNOOL <br className="sm:hidden" />
                by the Numbers
              </h2>
            </div>

            <div className="mx-auto mt-20 grid max-w-screen-lg grid-cols-1 gap-x-8 gap-y-12 text-center sm:text-left md:grid-cols-3">
              <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-center shadow lg:px-12">
                <p className="relative mt-5 text-gray-600 pb-2">
                  Author Insights
                </p>
                <p className="relative text-4xl md:text-5xl font-graphikBold text-[#015464]">
                  300
                </p>
              </div>

              <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-center shadow lg:px-12">
                <p className="relative mt-5 text-gray-600 pb-2">
                  Creator's Profile
                </p>
                <p className="relative text-4xl md:text-5xl font-graphikBold text-[#015464]">
                  70
                </p>
              </div>

              <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-center shadow lg:px-12">
                <p className="relative mt-5 text-gray-600 pb-2">
                  eBook Collections
                </p>
                <p className="relative text-4xl md:text-5xl font-graphikBold text-[#015464]">
                  100000
                </p>
              </div>
            </div>
          </div>
        </div>

        <NewsletterForm/>

      </div>
    </DefaultLayout>
  );
}

export default Author;
