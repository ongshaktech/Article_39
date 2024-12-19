import React from "react";

export default function PageHeading({ bg, title }) {
  return (
    <div
      className="container bg-center bg-cover"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      <h2 className="uppercase text-4xl font-bold py-10 bg-black w-[400px]">
        {title}
      </h2>
    </div>
  );
}
