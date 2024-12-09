"use client";
import React from "react";
import Image from "next/image";
import { useMobileMenu } from "@lib/context/mobile-menu-context";
import { getCustomer } from "@lib/util/customer_api";
import Hamburger from "@modules/common/components/hamburger";
import CartDropdown from "@modules/layout/components/cart-dropdown";
import DropdownMenu from "@modules/layout/components/dropdown-menu";
import MobileMenu from "@modules/mobile-menu/templates";
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import logo from "@modules/common/icons/eNOOL_Logo.svg";
import searchbar from "@modules/common/icons/searchbar.svg";
// import searchclose from "@modules/common/icons/searchclose.svg"
import CategoriesButton from "./CategoriesButton";
import heart from "@modules/common/icons/heart1.png";
import profile_image from "../../../../../public/images/LoginPage/userimg.png";
import { useAccount } from "@lib/context/account-context";
import useIP from "@lib/util/geo_location";

// import { useRegions } from "medusa-react"
// import CountryMenu from "@modules/mobile-menu/components/country-menu"
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { customer } = useAccount();
  const [isOpen, setIsOpen] = useState(false);
  const { handleLogout } = useAccount();
  const [search, setSearch] = useState("");
  const [wishlists, setWishlists] = useState([]);
  const [wishlistCount, setWishlistCount] = useState(0);

  // const ips= LoadRegion()
  const toggleDropdown1 = () => {
    setIsOpen(!isOpen);
    setDropdownOpen(false);
  };

  const handleDocumentClick = (event) => {
    if (
      (event.target.className != undefined &&
        event.target.className.includes &&
        !event.target.className.includes("skip-to-close")) ||
      event.target.className == undefined
    ) {
      closeDropdown1();
    }
  };

  const closeDropdown1 = () => {
    setIsOpen(false);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // var wishlists
  // if (customer) {
  //   wishlists = customer?.metadata?.wishlist || []
  //   // console.log(customer)
  // }

  const [closepolygon, setClosePolygon] = useState(false);
  const toggleMovePolygon = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //search bar
  const [isInputVisible, setInputVisible] = useState(false);

  const toggleInput = () => {
    setInputVisible(!isInputVisible);
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const closeDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const openDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    closeDropdown1();
  };

  const openMobileDropdown = () => {
    setMobileDropdownOpen(!isMobileDropdownOpen);
  };
  const closeMobileDropdown = () => {
    setMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const pathname = usePathname();
  const [isHome, setIsHome] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const ips = useIP();

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  });

  /*const updateWishlistIcon = async () => {
    const cus = await getCustomer();
    setWishlists(cus?.customer?.metadata?.wishlist || [])
  }*/

  const updateWishlistIcon = async () => {
    if (typeof window !== "undefined" && window?.enool_wishlist_items) {
      setWishlistCount(window?.enool_wishlist_items?.count());
    }
  };

  /*useEffect(function(){
    setWishlists(customer?.metadata?.wishlist || [])
  }, [customer])*/
  let profile = profile_image;
  if(customer?.metadata?.profile_image){
    profile = `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || 'http://localhost'}/store/profile?customer_id=${customer?.id}&v=${new Date().getTime()}`;
  }

  useEffect(function () {
    document.addEventListener("refresh:wishlist:icon", updateWishlistIcon);
    return () =>
      document.removeEventListener("refresh:wishlist:icon", updateWishlistIcon);
  }, []);

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", detectScrollY);

      return () => {
        window.removeEventListener("scroll", detectScrollY);
      };
    }
  }, [isHome]);

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false);
  }, [pathname]);

  const { toggle } = useMobileMenu();

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value) {
      window.location.href = `/search?q=${event.target.value}`;
    }
  };

  return (
    <div
      className={clsx("top-0 inset-x-0 z-50 group", {
        isHome,
      })}
    >
      <header className={clsx("w-full font-graphikBold relative z-50 ")}>
        <nav className=" mx-auto flex justify-between items-center sm:px-16 px-5 py-4  bg-white shadow ">
          <div className="container mx-auto ">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center ">
                <Link href="/">
                  <Image className="h-8 w-auto ps-2" src={logo} alt="Logo" />
                </Link>
                <div className="w-px h-10 bg-[#707070] mx-4 hidden lg:block"></div>
                {/* Navbar Items */}
                <div className="hidden lg:flex space-x-4 ">
                  <Link href="/browse">
                    <button
                      href="#"
                      className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                    >
                      Browse
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      openDropdown();
                    }}
                    className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                  >
                    Categories
                  </button>
                  {/* <CountryMenu></CountryMenu> */}
                  <Link href="/subscription">
                    <button
                      href="#"
                      className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                    >
                      {/*How It Works*/}
                      Subscriptions
                    </button>
                  </Link>
                  <Link href="/author">
                    <button
                      href="#"
                      className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                    >
                      Author
                    </button>
                  </Link>
                  <Link href="/publisher">
                    <button
                      href="#"
                      className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                    >
                      Publisher
                    </button>
                  </Link>
                </div>
              </div>
              {isDropdownOpen && (
                <div className="absolute w-full -top-48">
                  <CategoriesButton
                    closeDropdown={closeDropdown}
                    toggleMovePolygon={toggleMovePolygon}
                  />
                </div>
              )}

              {/* Hamburger menu for small screens */}
              <div className="flex items-center lg:hidden">
                <Link href="/search">
                  <Image src={searchbar} alt="search" className="h-4 w-4" />
                </Link>
                {/*{!isInputVisible && (
                  <button className="px-6" onClick={toggleInput}>
                    <Image src={searchbar} alt="search" className="h-4 w-4" />
                  </button>
                )}
                {isInputVisible && (
                  <div className="ml-2">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="border rounded p-2"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                    <button onClick={toggleInput} className="p-2 ml-2">
                      <Image
                        src={searchclose}
                        alt="search"
                        className="h-4 w-4"
                      />
                    </button>
                  </div>
                )}*/}
                <CartDropdown></CartDropdown>
                <button
                  className="text-[#408080] hover:text-[#565656] text-[18px] font-extrabold px-3 py-2"
                  onClick={toggleMenu}
                >
                  &#9776;
                </button>
                {customer != null ? (
                  <Link href="#" className="pl-2" onClick={toggleDropdown1}>
                    <Image
                      src={profile}
                      alt="search"
                      width="40"
                      height="40"
                      className="object-cover  bg-[#7CC9B5] rounded-full w-[40px] h-[40px] user-profile-image"
                    />
                  </Link>
                ) : null}
              </div>

              {/* Search Bar & Buttons */}
              <div className="hidden lg:flex items-center space-x-4 ">
                <Link href="/search">
                  <Image src={searchbar} alt="search" className="h-4 w-4" />
                </Link>
                {/*{!isInputVisible && (
                  <button onClick={toggleInput}>
                    <Image src={searchbar} alt="search" className="h-4 w-4" />
                  </button>
                )}
                {isInputVisible && (
                  <div className="ml-2">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="border rounded p-2"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                    <button onClick={toggleInput} className="p-2 ml-2">
                      <Image
                        src={searchclose}
                        alt="search"
                        className="h-4 w-4"
                      />
                    </button>
                  </div>
                )}*/}
                <CartDropdown></CartDropdown>
                {customer != null ? (
                  <>
                    <Link
                      href={"/account/my-library"}
                      className="mt-2 flex justify-center items-center pl-4 pt-2"
                    >
                      <div class="relative pt-0 pb-2">
                        <div class="t-0 absolute left-4">
                          <p class="flex h-1 w-1 items-center justify-center rounded-full bg-[#E81D1D] p-[6px] text-[8px] text-white ">
                            {" "}
                            {wishlistCount}
                          </p>
                        </div>
                        <Image src={heart} className="w-5 pt-1" alt="" />
                      </div>
                    </Link>
                    <Link
                      href={"/account/my-library"}
                      className="pl-5 pt-4 text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                    >
                      My Library
                    </Link>
                    <Link href="#" className="pl-5" onClick={toggleDropdown1}>
                      <Image
                        src={profile}
                        alt="search"
                        width="40"
                        height="40"
                        className="object-cover  bg-[#7CC9B5] rounded-full w-[40px] h-[40px] user-profile-image"
                      />
                    </Link>
                  </>
                ) : (
                  <div>
                    <Link href="/account/login">
                      <button className="rounded-full text-[#565656] text-[12px] px-4 py-1 bg-opacity-0 border font-extrabold border-[#707070]">
                        LOG IN
                      </button>
                    </Link>
                    <Link href="/account/register" className="pl-5">
                      <button className="rounded-full text-white text-[12px] px-4 py-1 bg-[#075A68] font-extrabold hover:bg-[#04404a]">
                        SIGN UP
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Responsive menu items */}
            {isMenuOpen && (
              <div className="lg:hidden flex flex-col space-y-4 items-center text-right">
                <Link href="/browse">
                  <button
                    href="#"
                    className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                  >
                    Browse
                  </button>
                </Link>
                <button
                  onClick={() => {
                    openMobileDropdown();
                  }}
                  className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                >
                  Categories
                </button>
                {isMobileDropdownOpen && (
                  <div className="w-full">
                    <CategoriesButton
                      closeDropdown={closeMobileDropdown}
                      toggleMovePolygon={toggleMovePolygon}
                      type="mobile"
                    />
                  </div>
                )}
                <Link href="/subscription">
                  <button
                    href="#"
                    className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                  >
                    {/*How It Works*/}
                    Subscriptions
                  </button>
                </Link>
                <Link href="/author">
                  <button
                    href="#"
                    className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                  >
                    Author
                  </button>
                </Link>
                <Link href="/publisher">
                  <button
                    href="#"
                    className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                  >
                    Publisher
                  </button>
                </Link>
                {customer == null ? (
                  <>
                    <Link href="/account/login">
                      <button className="rounded-full text-[#565656] text-[12px] px-4 py-1 bg-opacity-0 border font-extrabold border-[#707070]">
                        LOG IN
                      </button>
                    </Link>
                    <Link href="/account/register">
                      <button className="rounded-full text-white text-[12px] px-4 py-1 bg-[#075A68] font-extrabold hover:bg-[#04404a]">
                        SIGN UP
                      </button>
                    </Link>
                  </>
                ) : null}
              </div>
            )}
          </div>
        </nav>

        <MobileMenu />

        {isOpen && customer && (
          <div className="w-44 rounded-lg shadow-lg  ring-1 ring-black ring-opacity-5 skip-to-close">
            {/* <Image src={polygon} className=" absolute mt-[-30px] right-[8%] w-8  mt-[-30px] " alt="" />  */}
            <div className="bg-[#7bc8b4] absolute right-[5%] mt-[-15px] w-[180px] skip-to-close">
              <div class="z-[99999] px-4 py-3 text-sm text-gray-900 dark:text-white skip-to-close">
                <div className="truncate skip-to-close">
                  {customer.first_name}
                </div>
                <div class="font-medium truncate skip-to-close">
                  {customer.email}
                </div>
              </div>
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200 border-b-2 border-t-2"
                aria-labelledby="dropdownUserAvatarButton"
              >
                <li>
                  <a
                    href="/account"
                    class="block px-4 py-2 hover:bg-[#015464] hover:text-white dark:hover:bg-[#015464] dark:hover:text-white skip-to-close"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="/account/edit-profile"
                    class="block px-4 py-2 hover:bg-[#015464] hover:text-white dark:hover:bg-[#015464] dark:hover:text-white skip-to-close"
                  >
                    Edit profile
                  </a>
                </li>
                <li>
                  <a
                    href="/account/orders"
                    class="block px-4 py-2 hover:bg-[#015464] hover:text-white dark:hover:bg-[#015464] dark:hover:text-white skip-to-close"
                  >
                    Your orders
                  </a>
                </li>
              </ul>
              <div class="py-2 skip-to-close">
                <a
                  href="#"
                  onClick={handleLogout}
                  class="skip-to-close block px-4 py-2 text-sm text-gray-700 hover:bg-[#015464] hover:text-white dark:hover:bg-[#015464] dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Nav;
