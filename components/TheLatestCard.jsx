import React from "react";
import news_img from "@/assets/news_img.svg";
import Image from "next/image";

export default function TheLatestCard() {
  return (
    <div className="flex gap-4 text-black pb-8 border-b items-center">
      <div className="p-4 flex flex-col gap-2 w-full">
        <p className="text-xs">
          <span>05.12.24</span>{" "}
          <span className="pl-4">By Nahian Jamal Joyeeta</span>
        </p>
        <h2 className="font-bold">
          Brain stimulation can help injured people walk: study
        </h2>
      </div>
      <Image src={news_img} alt="News" className="w-20 h-20 object-cover" />
    </div>
  );
}
