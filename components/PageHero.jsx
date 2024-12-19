import React from "react";
import page_hero from "@/assets/page_hero.jpg";
import Image from "next/image";

export default function PageHero() {
  return (
    <div className="relative">
      <Image src={page_hero} lang="News Page" className="w-full" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-1/2 bg-black text-white font-extrabold p-6 text-center">
        <p className="text-xl pb-3">News</p>
        <p className="text-2xl text-center">
          Bangladesh expresses strong discontent over UK parliamentary group’s
          remarks
        </p>
        <p className="text-xs text-gray-400 mt-3">By Nahian Jamal Joyeeta</p>
      </div>
    </div>
  );
}
