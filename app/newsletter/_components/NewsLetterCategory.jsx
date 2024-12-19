import React from "react";
import NewsLetterCard from "./NewsLetterCard";

export default function NewsLetterCategory() {
  return (
    <div className="text-black">
      <div className=" mt-6 flex flex-col gap-4 pb-8">
        <h1 className="uppercase text-4xl font-bold  mb-8">Trending</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <NewsLetterCard />
          <NewsLetterCard />
          <NewsLetterCard />
          <NewsLetterCard />
          <NewsLetterCard />
        </div>
      </div>
      <div className=" mt-6 flex flex-col gap-4">
        <h1 className="uppercase text-4xl font-bold  mb-8">
          International
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <NewsLetterCard />
          <NewsLetterCard />
          <NewsLetterCard />
          <NewsLetterCard />
          <NewsLetterCard />
        </div>
      </div>
    </div>
  );
}
