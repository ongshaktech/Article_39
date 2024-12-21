import React from "react";

export default function PageHeading({ bg, title }) {
  return (
    <div
      className="container bg-center bg-cover px-4"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      <h2 className="uppercase text-4xl font-bold py-10 bg-black w-1/2">
        {title}
      </h2>
    </div>
  );
}
