import React, { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Breadcrumb from "../components/Breadcrumb";
import {
  FaStore,
  FaHockeyPuck,
  FaCode,
  FaShoppingBag,
  FaVideo,
  FaGlobeAsia,
  FaHandsHelping,
  FaLaptopCode,
} from "react-icons/fa";

const tabs = [
  { name: "Web Packages", icon: FaLaptopCode },
  { name: "Ecommerce Package", icon: FaStore },
  { name: "Combo Packages", icon: FaHockeyPuck },
  { name: "Web App Packages", icon: FaCode },
  { name: "Shopify Packages", icon: FaShoppingBag },
  { name: "Video Animation", icon: FaVideo },
  { name: "SEO", icon: FaGlobeAsia },
  { name: "SMM", icon: FaHandsHelping },
];

const plans = [
  {
    name: "WEB BRONZE",
    price: "230",
    oldPrice: "$300",
    features: [
      "2 Stock Images",
      "3 Page Website",
      "1 jQuery Slider Banner",
      "48 to 72 hours TAT",
      "Complete Deployment",
      " 100% Satisfaction Guarantee",
      "100% Unique Design Guarantee",
      "100% Money Back Guarantee"
    ],
  },
  {
    name: "WEB SILVER",
    price: "349",
    oldPrice: "$778",
    features: [
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
      "100% Satisfaction Guarantee",
      "100% Money Back Guarantee",
      "100% Unique Design Guarantee",
      "Mobile Responsive will be Additional $200*",
      "CMS will be Additional $250*"
    ],
  },
  {
    name: "WEB GOLD",
    price: "699",
    oldPrice: "$1678",
    features: [
      "2 Stock Images",
      "3 Page Website",
      "1 jQuery Slider Banner",
      "Contact/Query Form",
      "48 to 72 hours TAT",
      "Complete Deployment",
      "100% Satisfaction Guarantee",
      "100% Unique Design Guarantee",
      "100% Money Back Guarantee"
    ],
  },
  {
    name: "WEB PLATINUM",
    price: "760",
    oldPrice: "$800",
    features: [
      "2 Stock Images",
      "3 Page Website",
      "1 jQuery Slider Banner",
      "Contact/Query Form",
      "48 to 72 hours TAT",
      "Complete Deployment",
      "100% Satisfaction Guarantee",
      "100% Unique Design Guarantee",
      "100% Money Back Guarantee"
    ],
  },
  {
    name: "WEB TITANIUM",
    price: "869",
    oldPrice: "$900",
    features: [
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
      "100% Satisfaction Guarantee",
      "100% Money Back Guarantee",
      "100% Unique Design Guarantee",
      "Mobile Responsive will be Additional $200*",
      "CMS will be Additional $250*"
    ],
  },
  {
    name: "WEB BUSINESS",
    price: "999",
    oldPrice: "$1178",
    features: [
      "2 Stock Images",
      "3 Page Website",
      "1 jQuery Slider Banner",
      "Contact/Query Form",
      "48 to 72 hours TAT",
      "Complete Deployment",
      "100% Satisfaction Guarantee",
      "100% Unique Design Guarantee",
      "100% Money Back Guarantee"
    ],
  },
];

const PricingPlan = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <section className="relative w-full h-[120px] bg-left lg:h-96 mb-2 sm:mb-0 mt-16 md:mt-20 px-6 md:py-24 bg-cover  bg-no-repeat lg:bg-top"
        style={{ backgroundImage: `url("/assets/banner-portfolio.webp")` }} >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#221e1f]/90 mix-blend-multiply"></div>
        <Breadcrumb />
      </section>

      <div className="max-w-[1140px] mx-auto px-4 py-28 font-sans">
        {/* Header */}
        <div className="text-center mb-12">

          <div className="flex items-center justify-center mb-1">
            <span className="w-12 h-[3px] bg-[#1b75bb] mr-3 rounded-full"></span>
            <span className="text-[#1b75bb] font-extrabold text-lg">
              Pricing
            </span>
            <span className="w-12 h-[3px] bg-[#1b75bb] ml-3 rounded-full"></span>
          </div>
          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#221e1f]">
            Choose Your Plan
          </h2>
        </div>
        {/* Category Tabs */}

        <div className="flex flex-wrap justify-center mb-12">
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            const isActive = activeTab === i;

            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 py-2.5 px-10 text-base m-2.5 rounded-full border transition-all duration-300 
        ${isActive
                    ? "bg-[#1b75bb] text-white border-[#1b75bb]"
                    : "text-gray-700 border-gray-200 hover:bg-[#1b75bb] hover:text-white"
                  }`}
              >
                <span className="text-base leading-none">
                  <Icon />
                </span>
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>


        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="relative group bg-white rounded-xl border border-gray-200 overflow-hidden hover:bg-linear-to-r hover:from-[#1b75bb] hover:to-[#1b75bb]/50 transition-all duration-300"
            >
              <div className="p-8 flex flex-col gap-5 h-full">
                {/* Plan Title */}

                <h3 className="text-[22px] font-black text-center text-[#221e1f] group-hover:text-white uppercase">
                  {plan.name}
                </h3>


                {/* Price + Old Price */}

                <div className="right-8 py-[18px] px-40 flex justify-center items-start gap-2 mb-6 rounded-r-full relative bg-linear-to-l from-[#1b75bb] to-[#1b75bb]/70 group-hover:from-white group-hover:to-white">
                  <p className="text-[22px] font-bold text-white group-hover:text-black leading-none">
                    $
                  </p>
                  <p className="text-[48px] font-bold text-white group-hover:text-black leading-none">
                    {plan.price}
                  </p>
                  <p className="text-white text-[18px] line-through group-hover:text-black mt-1">
                    {plan.oldPrice}
                  </p>
                </div>


                {/* Scrollable Features */}
                <ul className="space-y-3 max-h-48 overflow-y-auto
                    [&::-webkit-scrollbar]:w-1
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-[#333333]/80">
                  {plan.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-600 group-hover:text-white text-sm"
                    >
                      <span className="text-[#1b75bb] text-base group-hover:text-white">
                        <FaArrowAltCircleRight />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between mt-auto">
                  <button className="px-3 py-3 rounded-full font-medium text-sm border border-gray-200 text-black bg-white">
                    WHATSAPP NOW
                  </button>
                  <button className="px-6 py-3 rounded-full font-medium text-sm border border-gray-200 text-black bg-white">
                    ORDER NOW
                  </button>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-3">
                  <a href="#" className="py-1 px-3 border border-gray-200 rounded-full bg-white text-black hover:text-white hover:border-[#4267B2] hover:bg-[#4267B2] transition-all duration-300 grayscale hover:grayscale-0">
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a href="#" className="py-1 px-2 border border-gray-200 rounded-full bg-white text-black hover:text-white hover:border-[#0077b5] hover:bg-[#0077b5] transition-all duration-300 grayscale hover:grayscale-0">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>

                  <a href="#" className="py-1 px-2.5 border border-gray-200 rounded-full bg-white text-black hover:text-white hover:border-[#4cd140] hover:bg-[#4cd140] transition-all duration-300 grayscale hover:grayscale-0">
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
