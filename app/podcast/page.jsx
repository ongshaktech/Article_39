import PageHeading from "@/components/PageHeading";
import React from "react";
import podcast_heading_img from "@/assets/podcast_heading_img.svg";
import LatestPodcast from "./_components/LatestPodcast";
import NewsCategory from "../news/_components/NewsCategory";

export default function page() {
  return (
    <div>
      <PageHeading bg={podcast_heading_img} title="Podcast/Videos" />
      <div className="bg-white container p-4">
        <LatestPodcast />
        <NewsCategory />
      </div>
    </div>
  );
}
