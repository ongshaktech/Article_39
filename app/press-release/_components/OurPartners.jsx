import Image from "next/image";
import React from "react";
import partner1 from "@/assets/partners/partner1.svg";
import partner2 from "@/assets/partners/partner2.svg";
import partner3 from "@/assets/partners/partner3.svg";
import partner4 from "@/assets/partners/partner4.svg";
import partner5 from "@/assets/partners/partner5.svg";
import partner6 from "@/assets/partners/partner6.svg";
import partner7 from "@/assets/partners/partner7.svg";

export default function OurPartners() {
  return (
    <div className="my-16">
      <h1 className="uppercase text-4xl font-bold pb-8 border-b border-b-gray-700 mb-8 text-black">
        Our Partners
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-20 justify-center items-center">
        <Image src={partner1} alt="Prothom Alo" />
        <Image src={partner2} alt="Prothom Alo" />
        <Image src={partner3} alt="Prothom Alo" />
        <Image src={partner4} alt="Prothom Alo" />
        <Image src={partner5} alt="Prothom Alo" />
      </div>
      <div className="flex justify-center items-center mt-16">
        <Image src={partner6} alt="Prothom Alo" />
        <Image src={partner7} alt="Prothom Alo" />
      </div>
    </div>
  );
}
