"use client";
import React, { useEffect, useState } from "react";

const BLOCKS_URL =
  "https://raw.githubusercontent.com/hammadooptechnologies-dev/React_Website_OOP_TECHNOLOGIES_1/main/blockSections.json";

const BlockSection = ({ slug }) => {
  const [section, setSection] = useState(null);

  useEffect(() => {
    const fetchBlocksData = async () => {
      try {
        const res = await fetch(BLOCKS_URL);
        const data = await res.json();
        if (data[slug]) {
          setSection(data[slug]);
        } else {
          setSection(null);
        }
      } catch (error) {
        console.error("Error fetching Block Sections data:", error);
      }
    };
    fetchBlocksData();
  }, [slug]);

  if (!section) return null;

  const { mainHeading, mainParagraph, blocks = [] } = section;
  const isOdd = blocks.length % 2 !== 0;

  return (
    <section className="w-full py-16">
      <div className="max-w-[1140px] mx-auto px-4">
        {/* Heading + Paragraph */}
        {(mainHeading || mainParagraph) && (
          <div className="text-center mb-12">
            {mainHeading && (
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#231f20] mb-4">
                {mainHeading}
              </h2>
            )}
            {mainParagraph && (
              <p className="text-sm sm:text-base text-[#777777] max-w-5xl mx-auto">
                {mainParagraph}
              </p>
            )}
          </div>
        )}

        {/* Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-7">
          {blocks.map((item, i) => (
            <div
              key={i}
              className={`bg-cover bg-center bg-no-repeat rounded-xl p-6 text-left shadow-[0_0_10px_rgba(0,0,0,0.4)] ${
                isOdd && i === blocks.length - 1
                  ? "sm:col-span-2 lg:col-span-2"
                  : ""
              }`}
              style={{
                backgroundImage: `url(${
                  item.bgImage || "/assets/BG-content.webp"
                })`,
              }}
            >
              {item.title && (
                <h3 className="text-[20px] font-semibold text-[#221e1f] mb-4">
                  {item.title}
                </h3>
              )}
              {item.desc && (
                <p className="text-sm text-[#777777] leading-relaxed">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockSection;
