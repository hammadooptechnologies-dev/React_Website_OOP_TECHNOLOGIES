// import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { GoChevronDown } from "react-icons/go";
// import Logo from '../assets/nav-logo.webp'


// const Navbar = () => {
//   // const [showMegaMenu, setShowMegaMenu] = useState(false);
//    const [isScrolled, setIsScrolled] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);


//   const menuItems = [
//     { name: "Home", link: "/" },
//     { name: "Services", link: "#services", icon: <GoChevronDown /> },
//     { name: "Portfolio", link: "#portfolio" },
//     { name: "Company", link: "#company", icon: <GoChevronDown /> },
//     { name: "Hire a Developer", link: "#hireadeveloper" },
//     { name: "Contact", link: "#contact" },
//   ];

//   return (
//     <header className={`custom-shadow fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-[#E2EEEA]" : "bg-white"
//       }`}>
//       <div className="max-w-[1140px] mx-auto flex justify-between items-center px-2 py-3.5">
//         <a href="" target="_blank">
//           <img src={Logo} className="w-[150px] h-[54px]" alt="Vite logo" />
//         </a>

//         <nav className="space-x-5 font-medium relative">
//           {menuItems.map((item, index) =>
//             item.name === "Services" || item.name === "Company"? (
//               <div
//                 key={index}
//                 className="relative inline-block space-x-2"
//                 // onMouseEnter={() => setShowMegaMenu(true)}
//                 // onMouseLeave={() => setShowMegaMenu(false)}
//               >
//                 <a
//                   href={item.link}
//                   className="text-black text-[15px] hover:text-blue-600 transition flex items-center"
//                 >
//                   {item.name}
//                   {item.icon}
//                 </a>
//                   <div className="absolute top-0 left-0 mt-6 z-60 px-9 py-3"></div>
//                 {/* Mega Menu */}
//                 {/* {showMegaMenu && (
//                   <MegaMenu
//                     onClose={() => setShowMegaMenu(false)} // ✅ Pass close handler
//                   />
//                 )} */}
//               </div>
//             ) : (
//               <a
//                 key={index}
//                 href={item.link}
//                 className="text-black text-[15px] hover:text-blue-600 transition"
//                 // onClick={() => setShowMegaMenu(false)} // ✅ Close MegaMenu on any other link click too
//               >
//                 {item.name}
//               </a>
//             )
//           )}
//         </nav>

//         <div className="space-x-2 flex items-center">
//               <Link to="/">
//                 <button className="lato-font bg-[#231f20] text-white cursor-pointer text-[13px] px-7 py-4 font-semibold tracking-widest rounded-l-full rounded-r-full shadow hover:bg-[#1b75bb] transition duration-500">
//                   GET A QUOTE
//                 </button>
//               </Link>         
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/nav-logo.webp";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const offCanvasRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close off-canvas
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (offCanvasRef.current && !offCanvasRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "#services", icon: <GoChevronDown /> },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Company", link: "#company", icon: <GoChevronDown /> },
    { name: "Hire a Developer", link: "#hireadeveloper" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header
      className={`custom-shadow fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#E2EEEA]" : "bg-white"
      }`}
    >
      <div
        className={`
          max-w-[1140px] mx-auto flex justify-between items-center px-2 
          ${"h-[72px] sm:h-[78px] md:h-[92px] lg:h-[98px] xl:h-[80px]"}
        `}
      >
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={Logo} className="w-[100px] md:w-[150px] md:h-[54px] mx-4 xl:mx-0 " alt="Logo" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex space-x-5 font-medium relative">
          {menuItems.map((item, index) =>
            item.icon ? (
              <div key={index} className="relative inline-block space-x-2">
                <a
                  href={item.link}
                  className="text-black text-[15px] hover:text-blue-600 transition flex items-center"
                >
                  {item.name}
                  {item.icon}
                </a>
              </div>
            ) : (
              <a
                key={index}
                href={item.link}
                className="text-black text-[15px] hover:text-blue-600 transition"
              >
                {item.name}
              </a>
            )
          )}
        </nav>

        {/* Quote Button (hidden below lg) */}
        <div className="hidden xl:flex items-center space-x-2">
          <Link to="/">
            <button className="lato-font bg-[#231f20] text-white cursor-pointer text-[13px] px-7 py-4 font-semibold tracking-widest rounded-full shadow hover:bg-[#1b75bb] transition duration-500">
              GET A QUOTE
            </button>
          </Link>
        </div>

        {/* Hamburger Button (shown below lg) */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="xl:hidden bg-white mx-4 p-2.5 rounded-full"
        >
          <FiMenu className="text-3xl font-extrabold text-[#231f20]" />
        </button>
      </div>

      {/* Off-Canvas Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          ref={offCanvasRef}
          className={`fixed top-0 right-0 h-full w-[100%] sm:w-[60%] max-w-[350px] bg-white shadow-2xl p-6 transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-0 left-0 bg-[#1b75bb] text-white p-2"
          >
            <FiX className="text-xl" />
          </button>

          {/* Menu Items */}
          <nav className="mt-16 flex flex-col space-y-5 text-[16px] font-medium">
            {menuItems.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="text-[#231f20] flex items-center justify-between hover:text-[#1b75bb] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                {item.icon && <span>{item.icon}</span>}
              </a>
            ))}

            <div className="pt-6">
              <Link to="/">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="lato-font w-full bg-[#231f20] text-white text-[14px] py-3 font-semibold rounded-full shadow hover:bg-[#1b75bb] transition duration-500"
                >
                  GET A QUOTE
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
