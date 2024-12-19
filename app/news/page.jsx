import PageHeading from "@/components/PageHeading";
import React from "react";
import news_bg from "@/assets/news_bg.svg";
import PageHero from "@/components/PageHero";
import CategorywiseNews from "@/components/CategorywiseNews";
import NewsCategory from "./_components/NewsCategory";
import LatestNews from "./_components/LatestNews";

export default function page() {
  return (
    <div>
      <PageHeading bg={news_bg} title="News" />
      <div className="container bg-white px-6 py-20 ">
        <PageHero />

        <div className="mt-40">
          <NewsCategory />
          {/* <CategorywiseNews /> */}
          <LatestNews />
        </div>
      </div>
    </div>
  );
}
