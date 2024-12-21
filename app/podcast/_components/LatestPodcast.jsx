import React from "react";

export default function LatestPodcast() {
  return (
    <div className="text-black">
      <h1 className="uppercase text-4xl font-bold pb-8 border-b border-b-gray-700 mb-8 ">
        LATEST
      </h1>
      <iframe
        width="100%"
        height="700px"
        src="https://www.youtube.com/embed/uLPz0WmYv_E?si=DGWVNkicfSGmI0mB"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-auto md:h-[700px]"
      ></iframe>
      <div className="my-6 flex flex-col gap-3">
        <h2 className="text-2xl font-bold">
          Voices Unplugged: Conversations That Matter
        </h2>
        <p className="text-xs ">
          Dive deep into the stories that shape our world. From candid profiles
          of inspiring individuals to thought-provoking discussions on today’s
          hottest topics, "Voices Unplugged" brings you raw, unfiltered
          conversations with trailblazers, innovators, and changemakers. Tune in
          to explore ideas, unravel narratives, and connect with voices that
          inspire.
        </p>
      </div>
    </div>
  );
}
