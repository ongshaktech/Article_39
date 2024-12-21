import React from "react";
import logo from "@/assets/Logo.svg";
import Image from "next/image";
import { HiOutlineBars4 } from "react-icons/hi2";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
  return (
    <div className="py-8 px-4">
      <div className="container flex py-6">
        <div className="w-full md:w-1/2">
          <h2 className="text-xm md:text-3xl font-bold uppercase">
            Stay updated with latest news!
          </h2>
          <h2 className="text-xm md:text-3xl font-bold uppercase mt-3">
            SIGN UP FOR newsletter today!
          </h2>

          <div className="w-full flex items-center mt-8">
            <input
              type="email"
              placeholder="Your email.."
              className="px-2 py-3 bg-white rounded-l-md w-full"
            />
            <button className="px-4 bg-[#BB0024] py-3 rounded-r-md">
              Subscribe
            </button>
          </div>
          <p className="text-xs mt-3">
            By signing up, you agree to the Terms of Use and Privacy Policy & to
            receive electronic communications from ARTICLE 39, which may include
            marketing promotions, advertisements and sponsored content.
          </p>
        </div>
      </div>

      <div className="container flex flex-col items-center gap-4 justify-center mt-8">
        <div className="">
          <Image src={logo} alt="Article 39" className="w-20 md:w-auto" />
        </div>
        <div className="flex gap-3 items-center uppercase text-sm">
          <AiFillInstagram className="fill-white w-6 h-6" />
          <AiFillTikTok className="fill-white w-6 h-6" />
          <IoLogoYoutube className="fill-white w-6 h-6" />
          <FaFacebookSquare className="fill-white w-6 h-6" />
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center uppercase text-sm">
          <p>About</p>
          <p>ACCESSIBILITY</p>
          <p>PRIVACY POLICY</p>
          <p>TERMS OF USE</p>
          <p>SECURITY POLICIY</p>
          <p>FULFILLMENT POLICIY</p>
          <p>YOUR PRIVACY CHOICES</p>
        </div>
        <p className="text-xs">© 2024 ARTICLE39</p>
      </div>
    </div>
  );
}
