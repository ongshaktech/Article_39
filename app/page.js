import PageHero from "@/components/PageHero";

import page_hero from "@/assets/page_hero.jpg";
import Image from "next/image";
import TheLatestCard from "@/components/TheLatestCard";
import NewsCard from "@/components/NewsCard";
import Features from "./_components/Features";

export default function Home() {
  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-3 bg-white ">
        <div className="col-span-2  ">
          <PageHero
            img={page_hero}
            category="News"
            title="Bangladesh expresses strong discontent over UK parliamentary group’s
          remarks"
            description="By Nahian Jamal Joyeeta"
          />

          {/* <div className="mt-40">
          <NewsCategory />
          <LatestNews />
        </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-20 text-black">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>

        <div className="col-span-1">
          <Image src={page_hero} alt="Article 39" />
          <div className="p-6 flex flex-col gap-3 bg-white text-black border-b">
            <p className="text-xs">GEN- Z/ALPHA</p>
            <h2 className="text-2xl font-bold">
              The Wind of Change that is Gen-Alpha Language
            </h2>
            <p>
              We Gen Zs were practically owning social media with our
              vocabulary, sarcasm and acronyms back in the day but let’s face it
              - we spend more time learning newer words nowadays than creating
              them. Our successors, the Gen Alpha, have created a whole new
              language that's so fast-paced, it's like trying to understand a
              foreign movie without subtitles!
            </p>
            <p className="font-bold">By Nahian Jamal Joyeeta</p>
          </div>
          <div className="bg-white p-6">
            <h1 className="uppercase text-2xl font-bold pb-8 border-b border-b-gray-700 mb-4 text-black pt-8">
              The Latest
            </h1>

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
      </div>

      <Features />
    </div>
  );
}
