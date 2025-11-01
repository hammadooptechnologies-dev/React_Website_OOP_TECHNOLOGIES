"use client";
import { useLocation } from "react-router-dom";
import PortfolioTabs from "../components/PortfolioTabs";

export default function Portfolio() {
  const location = useLocation();
  const category = location.state?.activeCategory || "All"; // 👈 read from navigate()

  return (
    <>
      <section
        className="relative w-full h-96 mb-28 sm:mb-0 mt-16 md:mt-20 px-6 md:py-24 bg-cover bg-no-repeat bg-top"
        style={{ backgroundImage: `url("/assets/banner-portfolio.webp")` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#221e1f]/90 mix-blend-multiply"></div>

        {/* Content */}
        <div className="bg-white w-[208.81px] h-[62px] absolute bottom-0 right-80 rounded-t-xl z-10 flex items-center justify-center text-black">
          <p className="text-[15px] font-bold">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            /<span className="text-[#1b75bb]"> Portfolio</span>
          </p>
        </div>
      </section>

      
          <PortfolioTabs initialTab={category} />

          
    </>
  );
}
