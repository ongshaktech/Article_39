import React from "react";
import Image from "next/image";

export default function PageHero({img, category, title, description}) {
  return (
    <div className="relative">
      <Image src={img} alt="News Page" className="w-full" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-1/2 bg-black text-white font-extrabold p-6 text-center">
        <p className="text-xs pb-3">{category}</p>
        <p className="text-2xl text-center">
          {title}
        </p>
        <p className="text-xs text-gray-400 mt-3">{description}</p>
      </div>
    </div>
  );
}
