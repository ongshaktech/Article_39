import React from "react";
import news_img from "@/assets/news_img.svg";
import Image from "next/image";

export default function LatestNewsCard() {
  return (
    <div className="flex gap-6 text-black pb-8 border-b">
      <Image src={news_img} alt="News" className="w-full h-auto" />
      <div className="p-4 flex flex-col gap-2">
        <p className="text-xs underline">News</p>
        <h2 className="font-bold">
          Brain stimulation can help injured people walk: study
        </h2>
        <p className="text-xs">By Nahian Jamal Joyeeta <span>05.12.24</span></p>
      </div>
    </div>
  );
}
