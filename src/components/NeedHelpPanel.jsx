import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import NeedHelp from "../assets/need-help.webp"
import { IoCloseCircleOutline } from "react-icons/io5";

export default function NeedHelpPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed bottom-1/7 -left-73 z-[10] -translate-y-1/2 flex items-center transition-all duration-500 ${
        isOpen ? "translate-x-[291px]" : "translate-x-0"
      }`}
    >
        
      {/* Slide-Out Contact Box */}
      <div
        className={`bg-[#1b75bb] text-white w-[291px] h-[224px] p-5 shadow-xl flex flex-col justify-center gap-3 transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-100 visible"
        }`}
      >
        <IoCloseCircleOutline className="w-5 h-5 cursor-pointer -mt-6" onClick={() => setIsOpen(false)}/>
        <h3 className="text-[20px] font-semibold mb-1">We're here for you.</h3>
        <div className="flex items-center gap-2 text-[14px]">
          <FaPhoneAlt /> <span>(213) 800–8433</span>
        </div>
        <div className="flex items-center gap-2 text-[14px]">
          <FaEnvelope /> <span>admin@ooptechnologies.com</span>
        </div>
        <div className="flex items-center gap-2 text-[14px]">
          <FaCalendarAlt /> <span>Schedule a Meeting</span>
        </div>
      </div>

      {/* Vertical "Need Help?" Button */}
      <button
  onClick={() => setIsOpen(!isOpen)}
  className="bg-[#231f20] text-white font-semibold rounded-r-xl shadow-lg
             transition-all duration-300 flex flex-col items-center justify-center w-[60px] h-[224px] gap-16 pt-4"
>
  {/* --- Logo Image --- */}
  <img
    src={NeedHelp} // your imported image
    alt="OOP Technologies Logo"
    className="min-w-[93px] object-contain rotate-270"
  />

  {/* --- Vertical Text (rotated only) --- */}
  <h2
    className="transform rotate-270 text-[18px] font-extrabold leading-tight"
    
  >
    Need<br/> Help ?
  </h2>
</button>


    </div>
  );
}
