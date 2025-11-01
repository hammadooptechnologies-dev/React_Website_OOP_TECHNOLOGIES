import React from "react";
import data from "../data/BlockSection.json"; // adjust the path if needed

const BlockSection = ({ slug }) => {
  const section = data[slug];

  if (!section) return null;

  const { mainHeading, mainParagraph, blocks = [] } = section;
  const isOdd = blocks.length % 2 !== 0;

  return (
    <section className="w-full py-16">
      <div className="max-w-[1140px] mx-auto px-4">
        {/* Optional Heading + Paragraph */}
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

        {/* Blocks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-7">
          {blocks.map((item, i) => (
            <div
              key={i}
              className={`bg-cover bg-center bg-no-repeat rounded-xl p-6 text-left shadow-[0_0_10px_rgba(0,0,0,0.4)] ${
                isOdd && i === blocks.length - 1 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
              style={{
                backgroundImage: `url(${item.bgImage || "/assets/BG-content.webp"})`,
              }}
            >
              {item.title && (
                <h3 className="text-[20px] font-semibold text-[#221e1f] mb-4">
                  {item.title}
                </h3>
              )}
              {item.desc && (
                <p className="text-sm text-[#777777] leading-relaxed">{item.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockSection;
