//@ts-nocheck
"use client";

import { useAccount } from "@lib/context/account-context";
import ProfileEmail from "@modules/account/components/profile-email";
import ProfileName from "@modules/account/components/profile-name";
import ProfilePassword from "@modules/account/components/profile-password";
import ProfileBillingAddress from "../components/profile-billing-address";
import ProfilePhone from "../components/profile-phone";
import React, { useEffect, useState } from "react"
import Image from "next/image";
import bgImg from "@public/images/bg1.png";
import Lefe from "@public/images/lefe1.png";
import ProfileImg from "@public/images/profile.png";
import UpdateProfileModal from "@modules/profile-modal";

const EditProfileTemplate = () => {
  const { customer, retrievingCustomer, refetchCustomer } = useAccount();

  const [profile, setProfile] = useState(ProfileImg)
  const hasProfile = customer?.metadata?.profile_image ? true : false

  useEffect(() => {
    if(hasProfile){
      const img_uri: string = `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || 'http://localhost'}/store/profile?customer_id=${customer?.id}&v=${new Date().getTime()}`;
      setProfile(img_uri);
    }
  }, [customer, hasProfile]);

  if (retrievingCustomer || !customer) {
    return null;
  }

  return (
    <>
      <Image
        className=" absolute w-5/6 z-[-1] right-0"
        src={bgImg}
        alt="bgimg"
      />
      <div className=" container justify-center items-center  rounded-3xl relative z-1 mx-auto">
        <div className=" container flex  justify-center  items-center ">
          <div className="mt-10">
            <div>
              <Image
                className="object-cover  bg-[#7CC9B5] rounded-full w-[150px] h-[150px] user-profile-image"
                src={profile}
                alt="Profile-img"
                width="150"
                height="150"
              />
              <UpdateProfileModal customer={customer} reload={true}/>
            </div>

            {/* <div className="  justify-center  items-center ">
            <h3 className=" text-[#015464] text-3xl font-extrabold font-graphikBold  ">
              {customer?.first_name}  {customer?.last_name}
            </h3>
            <p className=" mt-3 text-[#01adad] text-sm">
              {customer.email}
            </p>
           
          </div> */}
            <Image
              className=" hidden lg:block absolute top-36 z-0 right-0 w-28 "
              src={Lefe}
              alt=""
            />
          </div>
        </div>

        <div className="grid  grid-cols-1 mx-5 lg:mx-20  gap-y-8 gap-x-8 place-items-center mt-10 ">
          <ProfileName customer={customer} />
          {/* <Divider></Divider> */}
          {/*<ProfileEmail customer={customer} />*/}
          <ProfilePhone customer={customer} />
          <ProfilePassword customer={customer} />
          <ProfileBillingAddress customer={customer} />
        </div>
      </div>
    </>
  );
};

const Divider = () => {
  return <div className="w-full h-px bg-gray-200" />;
};

export default EditProfileTemplate;
