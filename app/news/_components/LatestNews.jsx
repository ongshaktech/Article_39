import LatestNewsCard from "@/components/LatestNewsCard";
import React from "react";

export default function LatestNews() {
  return (
    <div className="my-10">
      <h1 className="uppercase text-4xl font-bold pb-8 border-b border-b-gray-700 mb-8 text-black">
        Latest
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2 flex flex-col gap-10 ">
          <LatestNewsCard />
          <LatestNewsCard />
          <LatestNewsCard />
          <LatestNewsCard />
          <LatestNewsCard />
        </div>
        <div className="col-span-1">
          <div className="bg-black p-6 text-white">
            <h2 className="text-2xl font-bold">
              Stay updated with latest news! SIGN UP FOR newsletter today!
            </h2>
            <p className="pt-3 text-xs">
              By signing up, you agree to the Terms of Use and Privacy Policy &
              to receive electronic communications from Vice Media Group, which
              may include marketing promotions, advertisements and sponsored
              content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
