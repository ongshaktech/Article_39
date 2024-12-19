import PageHeading from "@/components/PageHeading";
import news_bg from "@/assets/news_bg.svg";
import React from "react";
import NewsLetterCategory from "./_components/NewsLetterCategory";

export default function page() {
  return (
    <div>
      <PageHeading bg={news_bg} title="Newsletters" />
      <div className="container bg-white px-6 py-20 ">
        <NewsLetterCategory />
      </div>
    </div>
  );
}
