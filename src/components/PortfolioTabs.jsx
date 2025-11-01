// import React, { useState, useEffect } from "react";

// const PortfolioTabs = ({ initialTab = "All", onTabClick }) => {
//   const tabs = [
//     "All",
//     "CBD",
//     "Medicine",
//     "Technology",
//     "Food & Restaurants",
//     "Fashion",
//     "Industrial",
//     "Ecommerce",
//     "Others",
//   ];

//   const [activeTab, setActiveTab] = useState(initialTab);

//   // ✅ Update when initialTab changes (e.g. after navigation)
//   useEffect(() => {
//     setActiveTab(initialTab);
//   }, [initialTab]);

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     if (onTabClick) onTabClick(tab);
//   };

//   return (
//     <div className="w-full px-4 sm:px-6 md:px-8">
//       {/* Tabs Container */}
//       <div className="flex flex-wrap justify-center sm:justify-center lg:justify-between items-center border border-gray-300 rounded-full max-w-[1140px] mx-auto gap-0 sm:gap-2 lg:gap-3">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => handleTabClick(tab)}
//             className={`px-2.5 sm:px-2 md:px-2 lg:px-2 xl:px-4 py-2 uppercase text-sm md:text-[14px] rounded-full transition-all duration-300 ${
//               activeTab === tab
//                 ? "bg-[#1b75bb] text-white shadow-md"
//                 : "bg-white text-[#221e1f] hover:text-[#1b75bb]"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Portfolio Images */}
//       <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
//         {["/assets/portfolio/p1.webp", "/assets/portfolio/p2.webp", "/assets/portfolio/p3.webp"].map((img, index) => (
//           <div
//             key={index}
//             className="relative w-full max-w-[330px] h-[350px] sm:h-[400px] md:h-[425px] cursor-pointer rounded-md shadow-md overflow-hidden"
//           >
//             <img
//               src={img}
//               alt={`Portfolio ${index + 1}`}
//               className="w-full h-full object-cover object-top"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PortfolioTabs;



// PortfolioTabs.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PortfolioTabs = ({ initialTab = "All" }) => {
  const navigate = useNavigate();

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

  const [activeTab, setActiveTab] = useState(initialTab);

  // ✅ Sync initial tab (useful if coming from Portfolio page)
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  // ✅ When user clicks a tab, go to /portfolio and pass the tab state
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate("/portfolio", { state: { activeCategory: tab } });
  };

  // ✅ When "VIEW ALL" clicked, go to portfolio with "All"
  const handleViewAll = () => {
    navigate("/portfolio", { state: { activeCategory: "All" } });
  };

  return (
    <section className="w-full bg-white py-4 md:mt-4">
      <div className="max-w-[1140px] mx-auto text-center">
        {/* Small blue heading with horizontal lines */}
        <div className="flex items-center justify-center mb-4">
          <span className="w-12 h-[3px] bg-[#1b75bb] mr-3 rounded-full"></span>
          <span className="text-[#1b75bb] font-extrabold text-lg tracking-wider">
            Portfolio
          </span>
          <span className="w-12 h-[3px] bg-[#1b75bb] ml-3 rounded-full"></span>
        </div>

        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#221e1f] mb-5">
          Our Creative Works
        </h2>

        {/* Tabs */}
        <div className="w-full px-4 sm:px-6 md:px-8">
          <div className="flex flex-wrap justify-center sm:justify-center lg:justify-between items-center border border-gray-300 rounded-full max-w-[1140px] mx-auto gap-0 sm:gap-2 lg:gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-2.5 sm:px-2 md:px-2 lg:px-2 xl:px-4 py-2 uppercase text-sm md:text-[14px] rounded-full transition-all duration-300 ${
                  activeTab === tab
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
            {["/assets/portfolio/p1.webp", "/assets/portfolio/p2.webp", "/assets/portfolio/p3.webp"].map((img, index) => (
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

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleViewAll}
            className="bg-[#231f20] text-white px-10 py-4 rounded-full font-medium text-sm md:text-base shadow-[6px_12px_12px_rgba(0,0,0,0.08)] transform transition-transform duration-500 ease-in-out hover:scale-103"
          >
            VIEW ALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTabs;
