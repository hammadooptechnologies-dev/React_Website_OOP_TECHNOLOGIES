"use client";
import React, { useEffect, useState } from "react";


const Mac2_URL =
  "https://raw.githubusercontent.com/hammadooptechnologies-dev/React_Website_OOP_TECHNOLOGIES_1/main/mac2CtaData.json";

const Mac2CtaSection = ({ slug }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
      const fetchMacCtaData = async () => {
        try {
          const res = await fetch(Mac2_URL);
          const data = await res.json();
          if (data[slug]) {
            setData(data[slug]);
          } else {
            setData(data["nft-websites"]);
          }
        } catch (error) {
          console.error("Error fetching Mac CTA Sections data:", error);
        }
      };
      fetchMacCtaData();
    }, [slug]);

  if (!data) return null;

  return (
    <section
      className="w-full md:mt-12 mb-16 bg-cover bg-center bg-no-repeat place-content-center"
      style={{ backgroundImage: `url("/assets/cta1.webp")` }}
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-2 py-8 md:py-28 flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left gap-8">

        {/* Text content */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl md:text-[36px] font-extrabold mb-8">
            {data.heading}
          </h2>
          <p className="text-base md:text-[15px] mb-6">
            {data.paragraph}
          </p>
          <button className="bg-white text-[#221e1f] uppercase px-8 py-2.5 md:px-10 md:py-4 rounded-full font-medium shadow-lg hover:bg-[#231f20] hover:text-white transition-all duration-300">
            {data.button}
          </button>
        </div>

        {/* Image */}
        <div className="relative w-[250px] sm:w-[320px] md:w-[270px] lg:w-[380px] h-[220px] sm:h-[260px] md:h-[260px] lg:h-[285px] flex items-start justify-center md:justify-start">
          <img
            src={data.image}
            alt={data.heading}
            className="w-[200px] h-[250px] md:w-[248px] lg:w-[317px] md:h-[313px] lg:h-[400px] md:absolute md:-top-16 lg:bottom-0 lg:right-8 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Mac2CtaSection;
