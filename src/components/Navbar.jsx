import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import { FiMenu, FiX } from "react-icons/fi";
import { FaChevronUp } from "react-icons/fa";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const offCanvasRef = useRef(null);
  const megaMenuTimeoutRef = useRef(null);
  const companyMenuTimeoutRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close offcanvas
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (offCanvasRef.current && !offCanvasRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "#services", icon: <GoChevronDown /> },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Company", link: "#company", icon: <GoChevronDown /> },
    { name: "Hire a Developer", link: "#hireadeveloper" },
    { name: "Contact", link: "#contact" },
  ];

  // MegaMenu hover control
  const handleMegaMenuEnter = () => {
    clearTimeout(megaMenuTimeoutRef.current);
    setShowMegaMenu(true);
  };
  const handleMegaMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => setShowMegaMenu(false), 200);
  };

  // Company hover control
  const handleCompanyEnter = () => {
    clearTimeout(companyMenuTimeoutRef.current);
    setShowCompanyDropdown(true);
  };
  const handleCompanyLeave = () => {
    companyMenuTimeoutRef.current = setTimeout(
      () => setShowCompanyDropdown(false),
      200
    );
  };

  return (
    <header
      className={`custom-shadow fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#E2EEEA]" : "bg-white"
        }`}
    >
      <div
        className={`max-w-[1140px] mx-auto flex justify-between items-center px-2 ${"h-[72px] sm:h-[78px] md:h-[92px] lg:h-[98px] xl:h-20"
          }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/assets/nav-logo.webp"
            className="w-[100px] md:w-[150px] md:h-[54px] mx-4 xl:mx-0"
            alt="Logo"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex space-x-5 font-medium relative">
          {menuItems.map((item, index) =>
            item.name === "Services" ? (
              <div
                key={index}
                className="relative inline-block py-8"
                onMouseEnter={handleMegaMenuEnter}
                onMouseLeave={handleMegaMenuLeave}
              >
                <a
                  href={item.link}
                  className="text-black text-[15px] hover:text-blue-600 transition flex items-center"
                >
                  {item.name}
                  {item.icon}
                </a>

                {showMegaMenu && (
                  <div
                    onMouseEnter={handleMegaMenuEnter}
                    onMouseLeave={handleMegaMenuLeave}
                    className="absolute -left-87 top-18.5 mt-2"
                  >
                    <MegaMenu />
                  </div>
                )}
              </div>
            ) : item.name === "Company" ? (
              <div
                key={index}
                className="relative inline-block py-8"
                onMouseEnter={handleCompanyEnter}
                onMouseLeave={handleCompanyLeave}
              >
                <button
                  className="text-black text-[15px] hover:text-blue-600 flex items-center gap-1"
                >
                  {item.name}
                  <GoChevronDown
                    className="transition-transform duration-200"
                  />
                </button>

                {showCompanyDropdown && (
                  <div className="absolute left-0 top-18.5 mt-2 w-50 bg-white rounded-b-lg shadow-md z-50">
                    {["About", "Blog", "Pricing plan", "Shop by Industry", "FAQ"].map((page, i) => (
                      <Link
                        key={page}
                        to={`/${page.toLowerCase().replace(/\s+/g, "-")}`}
                        className={`block py-3 px-[15px] text-[14px] text-gray-700 hover:text-blue-600 transition ${i !== 4 ? "border-b border-gray-200" : ""
                          }`}
                      >
                        {page}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={index}
                href={item.link}
                className="text-black text-[15px] hover:text-blue-600 transition flex items-center"
              >
                {item.name}
                {item.icon && <span className="ml-1">{item.icon}</span>}
              </a>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center space-x-2">
          <Link to="/">
            <button className="lato-font bg-[#231f20] text-white cursor-pointer text-[13px] px-7 py-4 font-semibold tracking-widest rounded-full shadow hover:bg-[#1b75bb] transition duration-500">
              GET A QUOTE
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="xl:hidden bg-white mx-4 p-2.5 rounded-full"
        >
          <FiMenu className="text-3xl font-extrabold text-[#231f20]" />
        </button>
      </div>

      {/* Off-Canvas Menu */}
      <div
        className={`xl:hidden inset-0 z-50 bg-black/40 transition-opacity duration-500 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div
          ref={offCanvasRef}
          className={`fixed top-0 right-0 h-full w-full sm:w-[60%] max-w-[350px] bg-white shadow-2xl p-6 overflow-y-auto transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-0 left-0 bg-[#1b75bb] text-white p-2"
          >
            <FiX className="text-xl" />
          </button>

          {/* Mobile Nav */}
          <nav className="mt-16 flex flex-col space-y-5 text-[16px] font-medium">
            {menuItems.map((item, i) =>
              item.name === "Services" ? (
                <div key={i}>
                  <button
                    onClick={() => setShowMegaMenu((prev) => !prev)}
                    className="flex w-full justify-between items-center text-[#231f20] hover:text-[#1b75bb] transition"
                  >
                    {item.name}
                    {showMegaMenu ? <FaChevronUp /> : <GoChevronDown />}
                  </button>
                  {showMegaMenu && (
                    <div className="mt-3">
                      <MegaMenu isMobile />
                    </div>
                  )}
                </div>
              ) : item.name === "Company" ? (
                <div key={i}>
                  <button
                    onClick={() => setShowCompanyDropdown((prev) => !prev)}
                    className="flex w-full justify-between items-center text-[#231f20] hover:text-[#1b75bb] transition"
                  >
                    {item.name}
                    {showCompanyDropdown ? <FaChevronUp /> : <GoChevronDown />}
                  </button>
                  {showCompanyDropdown && (
                    <div className="mt-3 border-l border-gray-200 pl-4 space-y-2">
                      {["About", "Blog", "Pricing plan", "Shop by Industry", "FAQ"].map((page) => (
                        <Link
                          key={page}
                          to={`/${page.toLowerCase().replace(/\s+/g, "-")}`}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-gray-700 hover:text-[#1b75bb]"
                        >
                          {page}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={i}
                  href={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#231f20] hover:text-[#1b75bb] transition flex items-center justify-between"
                >
                  {item.name}
                  {item.icon && <span>{item.icon}</span>}
                </a>
              )
            )}

            {/* CTA Button */}
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
