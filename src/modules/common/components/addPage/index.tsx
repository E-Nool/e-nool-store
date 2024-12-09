import Link from "next/link";
import React from "react";

const AddPage = ({ isVisivle, onClose }) => {
  if (!isVisivle) return null;

  return (
    <div className="  fixed z-50 inset-0 bg-[#015464] bg-opacity-40 flex justify-center items-center">
      <div className=" bg-[#015464] h-[550px] rounded-2xl">
        <div className=" flex text-white mt-8 ">
          <h2 className=" text-xl font-extrabold ml-24">
            Create book shelf deatils
          </h2>
          <button
            className=" text-xl ml-32 mr-10 bg-[#74e6c7] rounded-full p-1 px-3 text-white bg-opacity-25"
            onClick={() => onClose()}
          >
            x
          </button>
        </div>
        <hr className=" bg-[#7CC9B5] p-[0.5px] mt-5" />

        <div className=" text-white mt-10 ml-14 container mx-auto ">
          <h3 className=" text-sm font-light mb-5">My Bookshelf tittle</h3>
          <input
            className=" text-black p-3 w-3/4 rounded-lg text-sm"
            type="text"
          />
          <p className=" text-[12px] mt-4 font-light">
            Bookshels Name Must Be Between 1-60 characters
          </p>
          <h2 className=" mt-8 font-light text-sm">Descreption</h2>
          <textarea
            className=" mt-6 outline-0 rounded text-[12px] text-black"
            // type="type"
            cols={50}
            rows={8}
          />
        </div>
        <Link href="/account/bookshelf">
          <button className=" text-white bg-[#7CC9B5] px-28 mt-6 ml-32 p-2 rounded-2xl">
            Save
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddPage;
