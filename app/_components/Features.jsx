import React from "react";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <div className="bg-black py-20 px-4">
      <div className="container">
        <h2 className="text-3xl font-bold uppercase">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-6">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </div>
  );
}
