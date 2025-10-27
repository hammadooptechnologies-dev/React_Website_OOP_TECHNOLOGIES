// import React from 'react'

// const Footer = () => {
//   return (
//    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
//         <div className="max-w-6xl mx-auto text-center px-6">
//           <p className="text-lg font-semibold">PetrolEquip</p>
//           <p className="mt-2 text-sm">© 2025 PetrolEquip. All rights reserved.</p>
//           <div className="mt-4 space-x-4">
//             <a href="#" className="hover:text-white">Privacy Policy</a>
//             <a href="#" className="hover:text-white">Terms</a>
//             <a href="#" className="hover:text-white">Contact</a>
//           </div>
//         </div>
//       </footer>
//   )
// }

// export default Footer

import React from "react";
import { useState } from "react";
import {
  FaLinkedin,
  FaWhatsapp,
  FaFacebookF,
  FaLongArrowAltRight,
  FaRegEnvelopeOpen,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import NeedHelp from "../assets/need-help.webp"


export default function Footer() {
  const [hovered, setHovered] = useState(false);
  const quickLinks = [
    "Home",
    "About Us",
    "Portfolio",
    "Contact Us",
    "Get a Quote",
    "Privacy Policy",
    "Terms & Conditions",
    "Schedule a Meeting",
  ];

  const services = [
    "Blockchain Development",
    "Frontend Development",
    "Backend Development",
    "NFT Web Development",
    "WordPress Development",
    "Magento Development",
    "Shopify Development",
    "OpenCart Development",
  ];

  const socialIcons = [
    { icon: <FaLinkedin />, link: "#" },
    { icon: <FaWhatsapp />, link: "#" },
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaRegEnvelopeOpen />, link: "mailto:info@ooptechnologies.com" },
  ];

  return (
    <footer className="bg-[#231f20] text-white">
      <div className="max-w-[1140px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ---------- About Section ---------- */}
        <div>
          <img
            src={NeedHelp} // your imported image
            alt="OOP Technologies Logo"
            className="w-[190px] object-contain"
          />
          <p className="text-sm leading-relaxed text-white mt-6">
            OOPTechnologies is one of the famous Mobile App and Web Development
            organizations with a team of experts welcomes all businesses from
            large enterprises to new startups across the globe.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6 transition-all duration-300">
            {socialIcons.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center text-black bg-white hover:bg-[#E2EEEA] transform transition-transform duration-300 hover:-translate-y-2"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ---------- Quick Links ---------- */}
        <div className="pl-6">
          <h3 className="text-[20px] font-semibold mb-10">Quick Links</h3>
          <ul className="space-y-3 text-base leading-tight">
            {quickLinks.map((link, i) => (
              <li key={i} className="flex items-center gap-3">
                <FaArrowAltCircleRight className="text-sm" />
                <a
                  href="#"
                  className="hover:text-[#1b75bb] transition duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Our Services ---------- */}
        <div>
          <h3 className="text-[20px] font-semibold mb-10">Our Services</h3>
          <ul className="space-y-3 text-base leading-tight">
            {services.map((service, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaArrowAltCircleRight className="text-sm" />
                <a
                  href="#"
                  className="hover:text-[#1b75bb] transition duration-200"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Newsletter ---------- */}
        <div>
          <h3 className="text-[20px] font-semibold mb-10">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe our newsletter to get our latest updates & news.
          </p>

          <div className="flex w-full max-w-[255px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[440px] h-[55px] sm:h-[60px] bg-[#222222] rounded-full border border-[#3a3a3a] mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-4 text-sm sm:text-base text-[#777] font-semibold bg-transparent focus:outline-none"
            />
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative bg-[#1b75bb] text-white px-5 sm:px-6 rounded-full transition-all duration-300 flex items-center justify-center shrink-0"
            >
              {/* Icon */}
              <FaLongArrowAltRight
                className={`text-lg sm:text-xl transition-all duration-300 ${hovered ? "opacity-0" : "opacity-100"
                  }`}
              />

              {/* Text */}
              <span
                className={`absolute font-semibold text-white text-sm sm:text-base transition-all duration-300 ${hovered ? "opacity-100" : "opacity-0"
                  }`}
              >
                Send
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* ---------- Footer Bottom ---------- */}
      <div className="border-t border-white/20 text-center py-4 text-[12px] sm:text-base text-white font-bold">
        Copyright © {new Date().getFullYear()} | OOPTechnologies | All Rights Reserved.
      </div>
    </footer>
  );
}
