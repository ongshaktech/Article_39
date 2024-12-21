"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineBars4 } from "react-icons/hi2";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import logo from "@/assets/Logo.svg";
import { FaChevronDown, FaFacebookSquare } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

export default function Navbar() {
  let [isExpand, setIsExpand] = useState(false);
  return (
    <div className=" bg-black relative">
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
              {!isExpand ? (
                <HiOutlineBars4
                  onClick={() => setIsExpand(!isExpand)}
                  className="cursor-pointer"
                />
              ) : (
                <RxCross2
                  onClick={() => setIsExpand(!isExpand)}
                  className="cursor-pointer"
                />
              )}
            </div>
            <div className="">
              <Image src={logo} alt="Article 39" className="w-20 md:w-auto" />
            </div>
            <div className="hidden md:flex gap-6 items-center uppercase text-sm">
              <Link href="/news">
                <p>News</p>
              </Link>
              <p>Culture</p>
              <p>Entertainment</p>
              <Link href="/press-release">
                <p>PR</p>
              </Link>
              <Link href="/podcast">
                <p>Podcast</p>
              </Link>
              <Link href="/career">
                <p>Career</p>
              </Link>
              <Link href="/about-us">
                <p>About us</p>
              </Link>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <Link href="/newsletter">
              <p>Newsletters</p>
            </Link>
            <div className="hidden md:flex gap-3 items-center uppercase text-sm">
              <AiFillInstagram className="fill-white w-6 h-6" />
              <AiFillTikTok className="fill-white w-6 h-6" />
              <IoLogoYoutube className="fill-white w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      {isExpand && (
        <div className="bg-black absolute top-30 left-0 right-0 z-40 py-8 px-4">
          <div className="container grid grid-cols-1 md:grid-cols-10 gap-10 md:gap-20">
            <div className="col-span-2 flex flex-col gap-3">
              <h2 className="uppercase text-xs md:text-2xl font-bold">Video</h2>
              <h2 className="uppercase text-xs md:text-2xl font-bold">Tv</h2>
              <h2 className="uppercase text-xs md:text-2xl font-bold">shop</h2>
              <div className="flex gap-3 items-center uppercase text-sm">
                <AiFillInstagram className="fill-white w-6 h-6" />
                <AiFillTikTok className="fill-white w-6 h-6" />
                <IoLogoYoutube className="fill-white w-6 h-6" />
                <FaFacebookSquare className="fill-white w-6 h-6" />
              </div>
            </div>
            <div className="col-span-4 flex flex-col gap-4">
              <div className="flex gap-4 justify-between items-center border-b py-2">
                <h2 className="uppercase text-xs md:text-2xl font-bold">
                  GEN- Z/ALPHA
                </h2>
                <FaChevronDown />
              </div>
              <div className="flex gap-4 justify-between items-center border-b py-2">
                <h2 className="uppercase text-xs md:text-2xl font-bold">
                  TECH
                </h2>
                <FaChevronDown />
              </div>
              <div className="flex gap-4 justify-between items-center border-b py-2">
                <h2 className="uppercase text-xs md:text-2xl font-bold">
                  HEALTH
                </h2>
                <FaChevronDown />
              </div>
              <div className="flex gap-4 justify-between items-center border-b py-2">
                <h2 className="uppercase text-xs md:text-2xl font-bold">
                  SPORTS
                </h2>
                <FaChevronDown />
              </div>
            </div>
            <div className="col-span-4 flex flex-col gap-4">
              <Link href="/news">
                <div className="flex gap-4 justify-between items-center border-b py-2">
                  <h2 className="uppercase text-xs md:text-2xl font-bold">
                    NEWS
                  </h2>
                  <FaChevronDown />
                </div>
              </Link>
              <div className="flex gap-4 justify-between items-center border-b py-2">
                <h2 className="uppercase text-xs md:text-2xl font-bold">
                  CULTURE
                </h2>
                <FaChevronDown />
              </div>
              <div className="flex gap-4 justify-between items-center border-b py-2">
                <h2 className="uppercase text-xs md:text-2xl font-bold">
                  ENTERTAINMENT
                </h2>
                <FaChevronDown />
              </div>
              <div className="flex gap-4 justify-between items-center border-b py-2">
                <h2 className="uppercase text-xs md:text-2xl font-bold">
                  PODCAST/VIDEOS
                </h2>
                <FaChevronDown />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
