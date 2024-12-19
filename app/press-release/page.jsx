import React from "react";
import news_bg from "@/assets/news_bg.svg";
import page_hero from "@/assets/press_release_img.svg";

import PageHeading from "@/components/PageHeading";
import PageHero from "@/components/PageHero";
import NewsCategory from "../news/_components/NewsCategory";
import OurPartners from "./_components/OurPartners";
import OurSponsor from "./_components/OurSponsor";

export default function page() {
  return (
    <div>
      <PageHeading bg={news_bg} title="PR" />
      <div className="container bg-white px-6 pb-10 ">
        <PageHero
          img={page_hero}
          category="Press Release"
          title="New Milestone Reached in Our Journey"
          description="In an exciting development, we are thrilled to announce a groundbreaking milestone in our journey toward innovation and impact. Over the past year, our team has worked tirelessly to bring bold ideas to life, and today, we proudly unveil the result of that...[Read More]"
        />

        <div className="mt-40">
          <NewsCategory />
          <OurPartners />
          <OurSponsor />
          {/* <LatestNews /> */}
        </div>
      </div>
    </div>
  );
}
