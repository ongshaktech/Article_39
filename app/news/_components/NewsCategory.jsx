import NewsCard from "@/components/NewsCard";
import React from "react";

export default function NewsCategory() {
  return (
    <div className="text-black">
      <div className=" mt-6 flex flex-col gap-4">
        <p className="text-xs underline">See All</p>
        <h1 className="uppercase text-4xl font-bold pb-8 border-b border-b-gray-700 mb-8">
          POLITICAL
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
      <div className=" mt-6 flex flex-col gap-4">
        <p className="text-xs underline">See All</p>
        <h1 className="uppercase text-4xl font-bold pb-8 border-b border-b-gray-700 mb-8">
          NATIONWIDE
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
      <div className=" mt-6 flex flex-col gap-4">
        <p className="text-xs underline">See All</p>
        <h1 className="uppercase text-4xl font-bold pb-8 border-b border-b-gray-700 mb-8">
          INTERNATIONAL
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
      <div className=" mt-6 flex flex-col gap-4">
        <p className="text-xs underline">See All</p>
        <h1 className="uppercase text-4xl font-bold pb-8 border-b border-b-gray-700 mb-8">
          ECONOMY
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
      <div className=" mt-6 flex flex-col gap-4">
        <p className="text-xs underline">See All</p>
        <h1 className="uppercase text-4xl font-bold pb-8 border-b border-b-gray-700 mb-8">
          LAW
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
      <div className=" mt-6 flex flex-col gap-4">
        <p className="text-xs underline">See All</p>
        <h1 className="uppercase text-4xl font-bold pb-8 border-b border-b-gray-700 mb-8">
        CRIME
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
      <div className=" mt-6 flex flex-col gap-4">
        <p className="text-xs underline">See All</p>
        <h1 className="uppercase text-4xl font-bold pb-8 border-b border-b-gray-700 mb-8">
        INTVESTIGATIONS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
}
