import React, { useState } from "react";
import P1 from "../assets/portfolio/p1.webp";
import P2 from "../assets/portfolio/p2.webp";
import P3 from "../assets/portfolio/p3.webp";

const PortfolioTabs = () => {
  const tabs = [
    "All",
    "CBD",
    "Medicine",
    "Technology",
    "Food & Restaurants",
    "Fashion",
    "Industrial",
    "Ecommerce",
    "Others",
  ];

  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      {/* Tabs Container */}
      <div className="flex flex-wrap justify-center sm:justify-between items-center border border-gray-300 rounded-full max-w-[1140px] mx-auto gap-0 sm:gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-2.5 sm:px-4 lg:px-2 xl:px-4 py-2 uppercase text-sm md:text-[14px] rounded-full transition-all duration-300 ${activeTab === tab
                ? "bg-[#1b75bb] text-white shadow-md"
                : "bg-white text-[#221e1f] hover:text-[#1b75bb]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Portfolio Images */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {[P1, P2, P3].map((img, index) => (
          <div
            key={index}
            className="relative w-full max-w-[330px] h-[350px] sm:h-[400px] md:h-[425px] cursor-pointer rounded-md shadow-md overflow-hidden"
          >
            <img
              src={img}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        ))}
      </div>
    </div>

  );
};

export default PortfolioTabs;
