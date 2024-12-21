import React from "react";
import news_img from "@/assets/feature_img.svg";
import Image from "next/image";

export default function NewsCard() {
  return (
    <div className="border">
      <Image src={news_img} alt="News" className="w-full h-auto" />
      <div className="px-4 py-6 flex flex-col gap-2">
        <p className="text-xs underline">News</p>
        <h2 className="font-bold">
          Brain stimulation can help injured people walk: study
        </h2>
        <p className="text-xs">By Nahian Jamal Joyeeta</p>
      </div>
    </div>
  );
}
