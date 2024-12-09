'use client'
import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import cardObject from '../../../public/images/LandingPage/testimonial-object.png'
import testimonialProfile from '../../../public/images/LandingPage/testimonialProfile.png'

export default function Testimonials() {
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






    const slides = [
        // {
        //     avatarSrc: testimonialProfile,
        //     text: 'பொழுபோனுமேனுதான் சில புத்தகங்கள் வாங்குவேன். மனுஷ்யபுத்திரன், பெருமாள் முருகன், கமலா தாஸ் இவங்களோட படைப்பை வாசிச்சு முடிச்சதுக்கு பின்னா கொஞ்ச நேரம் யோசிப்போம். எதை பத்தினா " தீடிர்னு மழை பேஞ்சா ரோட்டுல வடை சுடுற ஆயா என்ன பண்ணும் ?',
        //     author: 'Siva kumar / New Jersey US',
        //     bgColor: '#FEF5F5',
        // },
        {
            avatarSrc: testimonialProfile,
            text: 'பெருசா சொல்ற அளவுக்கு கதைக்களம் கிடையாது. ஒரு தெருவுல இருக்குற ஆறு வீட்டோட கடந்த மற்றும் நிகழ் காலத்தோட சம்பவங்கள்தான். அந்த ஒவ்வொரு வீட்ல இருக்குரவங்களோட நிலைமையை ரொம்ப சுருக்கி',
            author: 'Ramya / Singapore',
            bgColor: '#F4FBF2',
        },
        {
            avatarSrc: testimonialProfile,
            text: 'இப்படி நிறைய கேள்விகள் வரும். அப்படி இல்லாம கொஞ்சம் காமெடி இல்ல ரொமான்டிக் இருக்குனுமே என்பதற்காக வாங்குவதுதான் பொழுதுபோக்கு புத்தகங்கள்.',
            author: 'Karki / SivaGangai',
            bgColor: '#F5F7FE',
        },  
        {
            avatarSrc: testimonialProfile,
            text: 'பொழுபோனுமேனுதான் சில புத்தகங்கள் வாங்குவேன். மனுஷ்யபுத்திரன், பெருமாள் முருகன், கமலா தாஸ் இவங்களோட படைப்பை வாசிச்சு முடிச்சதுக்கு பின்னா கொஞ்ச நேரம் யோசிப்போம். எதை பத்தினா " தீடிர்னு மழை பேஞ்சா ரோட்டுல வடை சுடுற ஆயா என்ன பண்ணும் ?',
            author: 'Rajan / New Jersey US',
            bgColor: '#F5F7FE',
        }, {
            avatarSrc: testimonialProfile,
            text: 'பெருசா சொல்ற அளவுக்கு கதைக்களம் கிடையாது. ஒரு தெருவுல இருக்குற ஆறு வீட்டோட கடந்த மற்றும் நிகழ் காலத்தோட சம்பவங்கள்தான். அந்த ஒவ்வொரு வீட்ல இருக்குரவங்களோட நிலைமையை ரொம்ப சுருக்கி',
            author: 'Ramya / Singapore',
            bgColor: '#F5F7FE',
        }, {
            avatarSrc: testimonialProfile,
            text: 'இப்படி நிறைய கேள்விகள் வரும். அப்படி இல்லாம கொஞ்சம் காமெடி இல்ல ரொமான்டிக் இருக்குனுமே என்பதற்காக வாங்குவதுதான் பொழுதுபோக்கு புத்தகங்கள்.',
            author: 'Karki / SivaGangai',
            bgColor: '#F5F7FE',
        },
       
        // Add more slides in the same format
    ];

    return (
        <section className="   relative">
            <div className=" m-auto flex justify-between items-center sm:px-16 py-4 px-6 " >

                {/* <Image src={Leaf2} alt="" className='absolute mt-96' /> */}
                <div className="w-full md-px-24 relative  container  py-10 mx-auto ">
                    <div className="flex flex-wrap w-full mb-10 md:flex-row flex-col">
                        <div className="md:w-1/2 w-full mb-6 lg:mb-2">
                            <h1 className="text-3xl font-graphikBold title-font pb-4 text-[#015464] lg:w-full">What Readers Says</h1>
                            <div className="h-1 w-48 bg-[#0FBF61] opacity-20 rounded">
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full mb-6 lg:mb-0 md:flex md:justify-end items-center sm:block hidden">
                            <div className="py-2 px-6  w-36 h-10 ">  <div className="swiper-pagination-2    "></div></div>
                        </div>

                    </div>

                    <div className="container m-auto  text-gray-600 ">

                        <Swiper
                            ref={swiperRef}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            pagination={{
                                el: '.swiper-pagination-2',
                                clickable: true,

                                renderBullet: (className,index) => {
                                    return `<span class="${className}" key="${index}" style="background-color: #015464;"></span>`;
                                },
                            }}
                            slidesPerView={1}
                            spaceBetween={10}
                            breakpoints={{
                                640: { slidesPerView: 1,  },
                                768: { slidesPerView: 2,  },
                                1024: { slidesPerView: 3, },
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index} className="!h-[auto]">
                                    <div
                                        className={`h-full row-span-2 p-6 border border-gray-100 rounded-xl text-center sm:p-8`}
                                        style={{ backgroundColor: slide.bgColor }}
                                    >
                                        <div className="h-full flex flex-col justify-center space-y-4">
                                            <Image
                                                className="w-20 h-20 mx-auto rounded-full"
                                                src={slide.avatarSrc}
                                                alt="user avatar"
                                                height={220}
                                                width={220}
                                                loading="lazy"
                                            />

                                            <p className="text-[#015464] md:text-xl font-graphik">{slide.text}</p>
                                            <div className="relative text-center">
                                                <Image
                                                    src={cardObject}
                                                    alt="card-object"
                                                    className="mx-auto"
                                                />
                                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                    <h6 className="text-lg font-graphik font-black  leading-none text-[#015464]">
                                                        {slide.author}
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </div>
            </div>

            <div className=" lg:hidden lg:w-1/2 w-full my-6 lg:mb-0 flex justify-center sm:flex hidden">
                <button className=" text-white bg-[#015464] border-0 py-2 px-6 focus:outline-none w-28 h-10 rounded-[21px] text-sm "><h1 className="items-center">View all</h1></button>
            </div>




        </section>
    )
}
