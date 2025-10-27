import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaEthereum, FaRobot, FaPhp, FaCode, FaServer, FaLaravel, FaNodeJs, FaApple, FaAndroid, FaGamepad, FaVrCardboard, FaPaintBrush, FaPenNib, FaShopify, FaOpencart, FaMagento, FaWordpress, FaSearch, FaBullhorn, FaGoogle, FaEnvelope, FaUsers } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";
import { SiWoocommerce, SiDrupal } from "react-icons/si";

const MegaMenu = () => {
    const categories = {
        "NFT, Blockchain & AI Website": [
            { name: "NFT Websites", icon: <FaEthereum className="w-[22px] h-[22px]" /> },
            { name: "Blockchain Websites", icon: <FaEthereum className="w-[22px] h-[22px]" /> },
            { name: "AI Websites", icon: <FaRobot className="w-[22px] h-[22px]" /> },
        ],
        "Website Development": [
            { name: "Php Development", icon: <FaPhp className="w-[22px] h-[22px]" /> },
            { name: "Custom Software Development", icon: <FaCode className="w-[22px] h-[22px]" /> },
            { name: "Frontend Development", icon: <FaReact className="w-[22px] h-[22px]" /> },
            { name: "Drupal Development", icon: <SiDrupal className="w-[22px] h-[22px]" /> },
            { name: "Backend Development", icon: <FaServer className="w-[22px] h-[22px]" /> },
            { name: "Laravel Development", icon: <FaLaravel className="w-[22px] h-[22px]" /> },
            { name: "Node Js Development", icon: <FaNodeJs className="w-[22px] h-[22px]" /> },
        ],
        "Mobile App Development": [
            { name: "IOS Development", icon: <FaApple className="w-[22px] h-[22px]" /> },
            { name: "Game Development", icon: <FaGamepad className="w-[22px] h-[22px]" /> },
            { name: "Android Development", icon: <FaAndroid className="w-[22px] h-[22px]" /> },
            { name: "VR App Development", icon: <FaVrCardboard className="w-[22px] h-[22px]" /> },
        ],
        "Branding & Graphics": [
            { name: "Brand Identity", icon: <FaPenNib className="w-[22px] h-[22px]" /> },
            { name: "UI & UX Design", icon: <FaPaintBrush className="w-[22px] h-[22px]" /> },
        ],
        "CMS Development": [
            { name: "Shopify", icon: <FaShopify className="w-[22px] h-[22px]" /> },
            { name: "Opencart", icon: <FaOpencart className="w-[22px] h-[22px]" /> },
            { name: "Magento", icon: <FaMagento className="w-[22px] h-[22px]" /> },
            { name: "Woocommerce", icon: <SiWoocommerce className="w-[22px] h-[22px]" /> },
            { name: "WordPress", icon: <FaWordpress className="w-[22px] h-[22px]" /> },
        ],
        "SEO/SMM/PPC": [
            { name: "SEO (Search Engine Optimization)", icon: <FaSearch className="w-[22px] h-[22px]" /> },
            { name: "SMM (Social Media Marketing)", icon: <FaBullhorn className="w-[22px] h-[22px]" /> },
            { name: "SEM / PPC", icon: <FaGoogle className="w-[22px] h-[22px]" /> },
        ],
    };

    const buttons = [
        { icon: <FaEnvelope className="w-[15px] h-[15px]" />, label: "Email Us" },
        { icon: <FaRegCalendar className="w-[15px] h-[15px]" />, label: "Schedule a meeting" },
        { icon: <FaUsers className="w-[15px] h-[15px]" />, label: "Hire a developer" },
    ];

    const categoryKeys = Object.keys(categories);
    const [activeCategory, setActiveCategory] = useState(categoryKeys[1]);
    const [openCategory, setOpenCategory] = useState(null); // for mobile

    return (
        <div className="bg-white border-t border-gray-200 shadow-lg relative z-50">
            {/* --- DESKTOP (xl and above) --- */}
            <div className="hidden xl:flex min-w-[1140px] mx-auto h-[432.38px]">
                {/* Left Tabs */}
                <div className="w-1/4 bg-[#221e1f] border-r border-gray-200 flex flex-col">
                    {categoryKeys.map((category, index) => (
                        <button
                            key={category}
                            onMouseEnter={() => setActiveCategory(category)}
                            className={`text-center text-[13px] transition-all duration-300 ${activeCategory === category
                                    ? "bg-[#1b75bb] text-white"
                                    : "text-white hover:bg-[#1b75bb]"
                                } ${index === 0 ? "pt-10 pb-[25px] px-[30px]" : "py-[25px] px-[30px]"
                                }`}
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
                            {categories[activeCategory].map((service, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 pt-5 pr-2.5 pb-5 pl-[15px] rounded-md transition-all cursor-pointer text-black font-medium text-[15px] border border-gray-200 hover:shadow-[0_0_16px_rgba(0,0,0,0.2)]"
                                >
                                    <span className="text-[#1b75bb]">{service.icon}</span>
                                    {service.name}
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Bottom Buttons */}
                    <div className="flex justify-center gap-16 mt-6">
                        {buttons.map((btn, i) => (
                            <button
                                key={i}
                                className="flex items-center gap-2 bg-[#221e1f] py-[15px] px-[30px] rounded-full text-white hover:bg-[#1b75bb] transition duration-300 uppercase text-[15px]"
                            >
                                {btn.icon}
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
                            onClick={() =>
                                setOpenCategory(openCategory === category ? null : category)
                            }
                            className="w-full flex justify-between items-center bg-[#1b75bb] text-white px-4 py-3 rounded-t-lg text-[15px] font-semibold"
                        >
                            {category}
                            <span className="text-sm">
                                {openCategory === category ? "−" : "+"}
                            </span>
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
                                    {categories[category].map((service, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 p-2 border-b border-gray-100 last:border-none text-[#221e1f] text-[14px] hover:bg-gray-50 rounded-md"
                                        >
                                            <span className="text-[#1b75bb]">{service.icon}</span>
                                            {service.name}
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}

                {/* Bottom Buttons for Mobile */}
                <div className="flex flex-col gap-3 mt-6">
                    {buttons.map((btn, i) => (
                        <button
                            key={i}
                            className="flex items-center justify-center gap-2 bg-[#221e1f] py-3 px-4 rounded-full text-white hover:bg-[#1b75bb] transition duration-300 uppercase text-[13px]"
                        >
                            {btn.icon}
                            <span>{btn.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;
