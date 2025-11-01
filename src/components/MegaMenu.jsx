import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as SiIcons from "react-icons/si";
import { ThreeCircles } from "react-loader-spinner";
import { fetchMegaMenuData } from "../utils/api";

const getIcon = (iconName, size = "22px") => {
  const Icon =
    FaIcons[iconName] || Fa6Icons[iconName] || SiIcons[iconName] || FaIcons["FaCode"];
  // note: size is string like "22px" in your JSON
  return <Icon className={`w-[${size}] h-[${size}]`} />;
};

export default function MegaMenu() {
  const [data, setData] = useState(null);
  const [activeCategory, setActiveCategory] = useState("");
  const [openCategory, setOpenCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // <-- loader state
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      setIsLoading(true);
      setLoadError(null);
      try {
        const json = await fetchMegaMenuData();
        if (!mounted) return;
        setData(json);
        const firstCategory = Object.keys(json.categories)[1] || "";
        setActiveCategory(firstCategory);
      } catch (err) {
        console.error("Error loading MegaMenu:", err);
        if (!mounted) return;
        setLoadError("Failed to load menu data.");
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, []);

  // If loading, render the loader inside the same container so layout doesn't jump
  if (isLoading) {
    return (
      <div className="bg-white border-t border-gray-200 shadow-lg relative z-50">
        <div className="hidden xl:flex min-w-[1140px] mx-auto p-8 justify-center items-center h-[432px]">
          <ThreeCircles
            height="50"
            width="50"
            color="#1b75bb"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-loading"
          />
        </div>
      </div>
    );
  }

  // If error and no data, show friendly fallback
  if (loadError && !data) {
    return (
      <div className="bg-white border-t border-gray-200 shadow-lg relative z-50">
        <div className="min-h-[200px] flex items-center justify-center p-8">
          <div className="text-center">
            <p className="text-red-600 mb-2">{loadError}</p>
            <button
              onClick={async () => {
                setIsLoading(true);
                setLoadError(null);
                try {
                  const json = await fetchMegaMenuData();
                  setData(json);
                  setActiveCategory(Object.keys(json.categories)[0] || "");
                } catch (err) {
                  setLoadError("Failed to load menu data.");
                } finally {
                  setIsLoading(false);
                }
              }}
              className="px-4 py-2 bg-[#1b75bb] text-white rounded"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Normal render (data loaded)
  const categoryKeys = Object.keys(data.categories);

  return (
    <div className="bg-white border-t border-gray-200 shadow-lg relative z-50">
      {/* --- DESKTOP (xl and above) --- */}
      <div className="hidden xl:flex min-w-[1140px] mx-auto h-[432px]">
        {/* Left Tabs */}
        <div className="w-1/4 bg-[#221e1f] border-r border-gray-200 flex flex-col">
          {categoryKeys.map((category, index) => (
            <button
              key={category}
              onMouseEnter={() => setActiveCategory(category)}
              className={`text-center text-[13px] transition-all duration-300 ${activeCategory === category ? "bg-[#1b75bb] text-white" : "text-white hover:bg-[#1b75bb]"
                } ${index === 0 ? "pt-10 pb-[25px] px-[30px]" : "py-[25px] px-[30px]"}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="w-3/4 px-8 py-4 relative flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-2 gap-4"
            >
              {data.categories[activeCategory].map((service, i) => (
                <Link
                  to={`/${service.slug}`}
                  key={i}
                  className="flex items-center gap-3 pt-5 pr-2.5 pb-5 pl-[15px] rounded-md transition-all cursor-pointer text-black font-medium text-[15px] border border-gray-200 hover:shadow-[0_0_16px_rgba(0,0,0,0.2)]"
                  onClick={() => window.scrollTo(0, 0)} // optional: scroll to top
                >
                  <span className="text-[#1b75bb]">{getIcon(service.icon, service.size)}</span>
                  {service.name}
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Buttons */}
          <div className="flex justify-center gap-16 mt-6">
            {data.buttons.map((btn, i) => (
              <button
                key={i}
                className="flex items-center gap-2 bg-[#221e1f] py-[15px] px-[30px] rounded-full text-white hover:bg-[#1b75bb] transition duration-300 uppercase text-[15px]"
              >
                {getIcon(btn.icon, btn.size)}
                <span>{btn.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- MOBILE (below xl) --- */}
      <div className="block xl:hidden p-4">
        {categoryKeys.map((category, i) => (
          <div key={i} className="mb-4 border border-gray-200 rounded-lg">
            <button
              onClick={() => setOpenCategory(openCategory === category ? null : category)}
              className="w-full flex justify-between items-center bg-[#1b75bb] text-white px-4 py-3 rounded-t-lg text-[15px] font-semibold"
            >
              {category}
              <span className="text-sm">{openCategory === category ? "−" : "+"}</span>
            </button>

            <AnimatePresence>
              {openCategory === category && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white px-4 py-3"
                >
                  {data.categories[category].map((service, index) => (
                    <Link
                      to={`/${service.slug}`}
                      key={index}
                      onClick={() => setOpenCategory(null)} // close accordion after click
                      className="flex items-center gap-3 p-2 border-b border-gray-100 last:border-none text-[#221e1f] text-[14px] hover:bg-gray-50 rounded-md"
                    >
                      <span className="text-[#1b75bb]">{getIcon(service.icon, service.size)}</span>
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Bottom Buttons for Mobile */}
        <div className="flex flex-col gap-3 mt-6">
          {data.buttons.map((btn, i) => (
            <button
              key={i}
              className="flex items-center justify-center gap-2 bg-[#221e1f] py-3 px-4 rounded-full text-white hover:bg-[#1b75bb] transition duration-300 uppercase text-[13px]"
            >
              {getIcon(btn.icon, btn.size)}
              <span>{btn.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
