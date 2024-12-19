import PageHeading from "@/components/PageHeading";
import React from "react";
import news_bg from "@/assets/news_bg.svg";
import page_hero from "@/assets/page_hero.jpg";
import PageHero from "@/components/PageHero";
import CategorywiseNews from "@/components/CategorywiseNews";
import NewsCategory from "./_components/NewsCategory";
import LatestNews from "./_components/LatestNews";

export default function page() {
  return (
    <div>
      <PageHeading bg={news_bg} title="News" />
      <div className="container bg-white px-6 py-20 ">
        <PageHero
          img={page_hero}
          category="News"
          title="Bangladesh expresses strong discontent over UK parliamentary group’s
          remarks"
          description="By Nahian Jamal Joyeeta"
        />

        <div className="mt-40">
          <NewsCategory />
          {/* <CategorywiseNews /> */}
          <LatestNews />
        </div>
      </div>
    </div>
  );
}
