import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineBars4 } from "react-icons/hi2";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import logo from "@/assets/Logo.svg";

export default function Navbar() {
  return (
    <div className=" bg-black">
      <div className="border-b border-b-gray-500">
        <div className="container px-2 py-2 flex gap-2 items-center justify-end">
          <FaPlus />
          <p>English</p>
        </div>
      </div>
      <div className="border-b border-b-gray-500">
        <div className="container px-2 py-2 flex gap-10 items-center justify-between">
          <div className="flex gap-8 items-center">
            <div className="">
              <HiOutlineBars4 />
            </div>
            <div className="">
              <Image src={logo} alt="Article 39" />
            </div>
            <div className="flex gap-6 items-center uppercase text-sm">
              <p>News</p>
              <p>Culture</p>
              <p>Entertainment</p>
              <p>PR</p>
              <p>Career</p>
              <p>About us</p>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <p>Newsletters</p>
            <div className="flex gap-3 items-center uppercase text-sm">
              <AiFillInstagram className="fill-white w-6 h-6" />
              <AiFillTikTok className="fill-white w-6 h-6" />
              <IoLogoYoutube className="fill-white w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
