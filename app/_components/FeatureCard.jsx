import Image from "next/image";
import feature_img from "@/assets/feature_img.svg";
import React from "react";

export default function FeatureCard() {
  return (
    <div className="">
      <Image src={feature_img} alt="News" className="w-full h-auto" />
      <div className="py-6 flex flex-col gap-2">
        {/* <p className="text-xs underline">News</p> */}
        <h2 className="font-bold">Rangpur keep GSL final hopes alive</h2>
        <p className="text-xs">By Nahian Jamal Joyeeta</p>
        <p className="text-xs">05.12.24</p>
      </div>
    </div>
  );
}
