import Image from "next/image";
import React from "react";
import partner1 from "@/assets/sponsors/sponsor1.svg";
import partner2 from "@/assets/sponsors/sponsor2.svg";
import partner3 from "@/assets/sponsors/sponsor3.svg";
import partner4 from "@/assets/sponsors/sponsor4.svg";
import partner5 from "@/assets/sponsors/sponsor5.svg";
import partner6 from "@/assets/sponsors/sponsor6.svg";
import partner7 from "@/assets/sponsors/sponsor7.svg";

export default function OurSponsor() {
  return (
    <div className="my-16">
      <h1 className="uppercase text-4xl font-bold pb-8 border-b border-b-gray-700 mb-8 text-black">
        Our Sponsor
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-20 justify-center items-center">
        <Image src={partner1} alt="Prothom Alo"       className="w-40 md:w-auto mx-auto" />
        <Image src={partner2} alt="Prothom Alo"       className="w-40 md:w-auto mx-auto" />
        <Image src={partner3} alt="Prothom Alo"       className="w-40 md:w-auto mx-auto" />
        <Image src={partner4} alt="Prothom Alo"       className="w-40 md:w-auto mx-auto" />
        <Image src={partner5} alt="Prothom Alo"       className="w-40 md:w-auto mx-auto" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-16 gap-10">
        <Image src={partner6} alt="Prothom Alo"       className="w-40 md:w-auto mx-auto md:mx-0" />
        <Image src={partner7} alt="Prothom Alo"       className="w-40 md:w-auto mx-auto md:mx-0" />
      </div>
    </div>
  );
}
