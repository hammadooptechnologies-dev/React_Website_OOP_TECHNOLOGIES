import React from "react";
import { FaSortAmountDown, FaBraille, FaLevelUpAlt, FaCheck } from "react-icons/fa";
import { FaMobileAlt, FaTabletAlt, FaTv } from "react-icons/fa";
import { IoWatchOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaVolumeUp, FaScroll } from "react-icons/fa";
import { SiGoogledrive } from "react-icons/si";
import { FaLaptopCode, FaSignal, FaSuitcase, FaSynagogue, FaThList } from "react-icons/fa";




const iconMap = {
  FaSortAmountDown: <FaSortAmountDown />,
  FaBraille: <FaBraille />,
  FaLevelUpAlt: <FaLevelUpAlt />,
  IoPhonePortraitOutline: <IoPhonePortraitOutline />,
  FaTabletAlt: <FaTabletAlt />,
  FaTv: <FaTv />,
  IoWatchOutline: <IoWatchOutline />,
  SiGoogledrive: <SiGoogledrive />,
  FaVolumeUp: <FaVolumeUp />,
  FaScroll: <FaScroll />,
  FaCheck: <FaCheck />,
  FaLaptopCode: <FaLaptopCode/>, 
  FaSignal: <FaSignal/>, 
  FaSuitcase: <FaSuitcase/>, 
  FaSynagogue: <FaSynagogue/>, 
  FaThList: <FaThList/>

};

export default function QuotationSection({ section }) {
  const { layout, left, right } = section;

  return (
    <section className="bg-white mb-10 md:mb-0 py-16 px-6">
      <div
        className={`max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-[60%_40%] items-center gap-4 relative`}
      >
        {/* ---------- LEFT CONTENT ---------- */}
        <div className="text-left px-4 order-1">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#231f20] mb-4 text-left">
            {left.heading}
          </h2>

          {left.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-sm sm:text-base text-[#777777] ${i > 0 ? "mt-4" : ""
                } text-left`}
            >
              {p}
            </p>
          ))}

          {left.icons && (
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-8 px-8 text-center">
              {left.icons.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="text-[#4d4d4d] text-[45px] mb-6">
                    {iconMap[item.icon]}
                  </div>
                  <p className="text-[#231f20] text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {left.points && (
            <div className="mt-10 flex flex-col gap-6">
              {left.points.map((point, i) => (
                <div key={i} className={`flex items-start ${point.maindivgap || "gap-6" }`} >
                  {/* Icon Wrapper */}
                  <div
                    className={`flex items-center justify-center ${point.iconDivClass || "w-10 h-10 bg-[#e6f1fa] rounded-full"}`}
                  >
                    <div className={`${point.iconClass || "text-[#1b75bb] text-[22px]"}`}>
                      {iconMap[point.icon]}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h4
                      className={`${point.titleClass || "text-[#231f20] font-semibold text-base mb-1"}`}
                    >
                      {point.title}
                    </h4>
                    <p className="text-sm text-[#777777] leading-relaxed">
                      {point.paragraph}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}


        </div>

        {/* ---------- RIGHT FORM CONTENT ---------- */}

        {right.type === "quotationForm" && (
  <div className="relative flex flex-col justify-center items-center mt-10 md:mt-0 order-2 w-full px-4 sm:px-6">

    {/* 🖼️ Optional Image */}
    {right?.images && right.images.length > 0 && (
      <div className="flex flex-col gap-4 w-full max-w-[450px] mb-6 md:mb-0">
        {right.images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt || ""}
            className="w-full h-auto object-cover rounded-lg"
          />
        ))}
      </div>
    )}

    {/* 💡 Decorative Background Shadow */}
    <div className="absolute hidden md:block bottom-[-50px] md:right-20 lg:-right-2.5 bg-gray-200 rounded-2xl w-[350px] h-[340px]" />

    {/* 📝 Form Container */}
    <form
      className="relative w-full max-w-[450px] px-5 sm:px-6 md:px-[30px] py-6 sm:py-8 bg-cover bg-center bg-no-repeat rounded-xl shadow-lg flex flex-col gap-4"
      style={{ backgroundImage: `url(${right.bgImage})` }}
    >
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center mb-2">
        Ask for a Quotation
      </h3>

      {/* Name and Email (responsive grid) */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Name"
          className="w-full border text-[#777777] bg-white border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-gray-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border text-[#777777] bg-white border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-gray-400"
        />
      </div>

      {/* Subject */}
      <input
        type="text"
        placeholder="Subject"
        className="w-full border text-[#777777] bg-white border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-gray-400"
      />

      {/* Message */}
      <textarea
        placeholder="Your Message"
        rows="4"
        className="w-full border text-[#777777] bg-white border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-gray-400 resize-none"
      ></textarea>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-[#1b75bb] text-sm sm:text-base opacity-90 uppercase text-white py-3 px-10 sm:px-16 md:px-20 rounded-full hover:bg-[#155a8a] transition-all"
      >
        Get a quote
      </button>
    </form>
  </div>
)}



      </div>
    </section>
  );
}
