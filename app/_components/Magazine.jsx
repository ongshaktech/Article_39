import NewsCard from "@/components/NewsCard";
import PageHero from "@/components/PageHero";
import TheLatestCard from "@/components/TheLatestCard";
import React from "react";
import page_hero from "@/assets/page_hero.jpg";
import magazine_img from "@/assets/magazine_img.svg";

export default function Magazine() {
  return (
    <div className="bg-white py-10">
      <h1 className="container uppercase text-3xl font-bold pb-8 border-b border-b-gray-700 mb-4 text-black pt-8 px-4">
        ARTICLE39 MAGAZINE
      </h1>
      <div className="container grid grid-cols-1 md:grid-cols-5 bg-white ">
        <div className="col-span-2">
          {/* <Image src={page_hero} alt="Article 39" />
           */}
          <div className="bg-white p-6">
            <div className="flex flex-col gap-4">
              <TheLatestCard />
              <TheLatestCard />
              <TheLatestCard />
              <TheLatestCard />
              <TheLatestCard />
              <TheLatestCard />
            </div>
          </div>
        </div>
        <div className="col-span-3  ">
          <PageHero
            img={magazine_img}
            category="Sports"
            title="Chelsea stroll to 5-1 away win over 10-man Southampton"
            description="By Nahian Jamal Joyeeta"
          />

          {/* <div className="mt-40">
                  <NewsCategory />
                  <LatestNews />
                </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-20 text-black px-4">
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
