'use client'

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
// import Leaf1 from '/images/LandingPage/Leaf1.png'
// import Leaf2 from '/images/LandingPage/Leaf-Bg.png'
// import object1 from '/images/LandingPage/hero-bg-1.png'

// import Herosection from 'images/LandingPage/hero.png'
import playButton from '@modules/common/icons/play-button.png'
import pauseButton from '@modules/common/icons/pause-button.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Hero() {

    const swiperRef = useRef(false);
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

    const toggleAutoplay = () => {
        setIsAutoplay(!isAutoplay);
        if (!isPlaying) {
            swiperRef.current.swiper.autoplay.start();
            setIsPlaying(true);
        } else {
            swiperRef.current.swiper.autoplay.stop();
            setIsPlaying(false);
        }
    };
    //for slides close


    return (    
        <section className="w-full ">
            <Image className=" absolute z-0 top-20 lg:top-[12rem] w-16 " src="/images/LandingPage/Leaf1.png" alt="" width="100" height={350}/>
            <Image className=" hidden lg:block absolute z-0 top-96 lg:top-[37rem] xl:top-[32rem] mt-36 left-[30%] xl:w-36  " src="/images/LandingPage/Leaf-Bg.png" alt="" width={100} height={350}/>

            <div className="z-10  mx-auto  justify-between items-center sm:px-16  py-4 ">
                {/* Slider 1 */}
                <div className="hidden md:block  lg-px-[60px] xl:px-[80px]">

                    <Swiper
                        ref={swiperRef}
                        spaceBetween={3}
                        centeredSlides={true}
                        speed={1500}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}

                        pagination={{
                            el: '.swiper-pagination-right',
                            clickable: true,
                            renderBullet: (index,className) => {
                                return `<span class="${className}" style="background-color: #015464;"></span>`;
                            },
                        }}

                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >

                        <SwiperSlide>
                            <div className="md:container md:mx-auto flex  pt-5 md:flex-row flex-col items-center font-graphik ">

                                <div className="  lg:w-full md:w-1/2 w-5/6 lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start   md:text-left sm:text-center ">
                                    <h1 className="text-4xl   md:mt-36  text-[#015464]">Join the evolution of <span className=" font-graphikBold text-[#015464]">Tamil eBooks.</span>
 {/* <span className="  font-graphikBold ">evolution </span> to <br />Find Any <span className=" font-graphikBold text-[#015464]">Book.</span> */}
                                        </h1>
                                    <p className=" text-[#408080] mt-8 font-medium"> Read your favorite book on any device wherever you have wifi.
                                    </p>

                                    <div className="flex justify-center  pt-10">
                                        <button onClick={() => window.location.href="/browse"} className="inline-flex text-white bg-[#7CC9B5] border-0 py-2 px-6 focus:outline-none hover:bg-[#447466] rounded-[23px] text-lg">Get Started</button>

                                    </div>
                                    <div className="flex justify-center mt-28">
                                    </div>
                                </div>

                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:items-center  ">
                                    <Image className="object-cover object-center rounded" alt="hero" src="/images/LandingPage/hero.png" width="1200" height={600} />
                                </div>

                            </div>

                        </SwiperSlide >
                        {/* Slider 2 */}

                        <SwiperSlide>
                            <div className="md:container md:mx-auto flex  pt-5 md:flex-row flex-col items-center">

                                <div className="  lg:w-full md:w-1/2 w-5/6 lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start md:  mb-16 md:mb-0  md:text-left sm:text-center ">
                                    <h1 className="text-4xl   md:mt-36  text-[#015464]">Feel the <span className="  font-graphikBold ">New</span> experiences 
                                    </h1>
                                    <p className=" text-[#408080] mt-8 font-medium">Empowered by authors and readers through a global reading and publishing platform.
                                    </p>

                                    <div className="flex justify-center  pt-10">
                                        <button onClick={() => window.location.href="/browse"} className="inline-flex text-white bg-[#7CC9B5] border-0 py-2 px-6 focus:outline-none hover:bg-[#447466] rounded-[23px] text-lg">Get Started</button>

                                    </div>
                                    <div className="flex justify-center mt-28">


                                    </div>
                                </div>

                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:items-center  ">

                                    <Image className="object-cover object-center rounded" alt="hero" src="/images/LandingPage/hero_2.png"  width="1200" height={600} />

                                </div>

                            </div>

                        </SwiperSlide >
                        <SwiperSlide>
                            <div className="md:container md:mx-auto flex  pt-5 md:flex-row flex-col items-center">

                                <div className="  lg:w-full md:w-1/2 w-5/6 lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start md:  mb-16 md:mb-0  md:text-left sm:text-center ">
                                    <h1 className="text-4xl   md:mt-36  text-[#015464]">Enjoy the new <span className="  font-graphikBold ">e-reading</span> and <span className=" font-graphikBold text-[#015464]">e-learning.</span>
                                    </h1>
                                    <p className=" text-[#408080] mt-8 font-medium">Inclusive of all readers and voices (Audio) that inspire, thrill and educate the world where we all share.
                                    </p>

                                    <div className="flex justify-center  pt-10">
                                        <button onClick={() => window.location.href="/browse"} className="inline-flex text-white bg-[#7CC9B5] border-0 py-2 px-6 focus:outline-none hover:bg-[#447466] rounded-[23px] text-lg">Get Started</button>

                                    </div>
                                    <div className="flex justify-center mt-28">


                                    </div>
                                </div>

                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:items-center  ">

                                    <Image className="object-cover object-center rounded" alt="hero" src="/images/LandingPage/hero_3.png"  width="1200" height={600}  />

                                </div>

                            </div>

                        </SwiperSlide >
                         <SwiperSlide>
                            <div className="md:container md:mx-auto flex  pt-5 md:flex-row flex-col items-center">

                                <div className="  lg:w-full md:w-1/2 w-5/6 lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start md:  mb-16 md:mb-0  md:text-left sm:text-center ">
                                    <h1 className="text-4xl   md:mt-36  text-[#015464]">The <span className="  font-graphikBold ">Easiest Way</span> to <br />Find Any <span className=" font-graphikBold text-[#015464]">Book.</span>
                                    </h1>
                                    <p className=" text-[#408080] mt-8 font-medium">
                                        Unlimited reading for the world: Toward millions of books in the browser , accessible to billions of people
                                    </p>

                                    <div className="flex justify-center  pt-10">
                                        <button onClick={() => window.location.href="/browse"} className="inline-flex text-white bg-[#7CC9B5] border-0 py-2 px-6 focus:outline-none hover:bg-[#447466] rounded-[23px] text-lg">Get Started</button>

                                    </div>
                                    <div className="flex justify-center mt-28">


                                    </div>
                                </div>

                                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:items-center  ">
                                    <Image className="object-cover object-center rounded" alt="hero" src="/images/LandingPage/e-nool-image-04.png"  width="1200" height={600}  />
                                </div>

                            </div>

                        </SwiperSlide > 

                    </Swiper>
                </div>
                <div className="hidden md:container md:mx-auto md:flex   md:flex-row flex-col items-center 2xl:px-[0px] xl:px-[80px]">

                    <div className="  lg:w-full md:w-1/2 w-5/6 lg:flex-grow  lg:pr-24 md:pr-24 flex flex-row md:items-start md:  mb-16 md:mb-0  md:text-left sm:text-center ">
                        <button type="button" onClick={toggleAutoplay}>
                            <Image
                                className="w-10 h-10 mr-2 object-cover  rounded"
                                alt="hero"
                                src={!isAutoplay ? playButton : pauseButton}
                            />
                        </button>
                        <div className="swiper-pagination-right  mt-2 space-x-1 w-30 h-10 "></div>
                    </div>
                </div>

                {/* Slider For Medium screen */}
                <div className="md:hidden md:container md:mx-auto   flex  lg:px-5 pt-24 md:flex-row flex-col items-center ">

                    <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start  mb-16 md:mb-0  md:text-left text-center ">
                        <h1 className="text-4xl   md:mt-36  text-[#015464]">The <span className="  font-graphikBold ">Easiest Way</span> to <br />Find Any <span className=" font-graphikBold text-[#015464]">Book.</span>
                        </h1>
                        <p className=" text-[#408080] mt-8 font-medium">
                            Unlimited reading for the  world: Toward  millions of books in the browser , accessible to billions of people
                        </p>

                        <div className="flex justify-center  pt-10">
                            <button className="inline-flex text-white bg-[#7CC9B5] border-0 py-2 px-6 focus:outline-none hover:bg-[#447466] rounded-[23px] text-lg">Get Started</button>

                        </div>
                        <div className="flex justify-center mt-10 sm:h-80">

                            <Image className=" object-center rounded w-[60%]" alt="hero" src="/images/LandingPage/hero_1.png"  width="1200" height={600}  />
                        </div>
                    </div>

                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[44%] md:items-center  ">

                    </div>

                </div>

            </div>
        
        </section>       
    );
}
// export default Hero

