import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqsData = [
    {
        question: "How long do we take to build a website?",
        answer:
            "Every project has different specifications. So, the time for website development varies with each project. But, you can rely on us to complete your project within your assigned deadline. After all, your satisfaction is all that matters to us. For further information, feel free to call us.",
    },
    {
        question: "What technologies do you use for web development?",
        answer:
            "To the delights of our clients, we use and have expertise in all the web development technologies. After all, ours is a wide-scale digital marketing agency. If you want to know more about any particular technology, you can get in touch with us anytime.",
    },
    {
        question: "How much does a website cost?",
        answer:
            "The cost of a website depends on many factors. No true developer can give you a quote directly without discussing the factors.",
    },
    {
        question: "Do I own my website?",
        answer:
            "Of course! Once we are done with the project, we keep no access credentials or anything. Your project is safe and secure in our hands. Only you have the rights and access to your website once we are through with the development phase. If you need more information, you should get in touch.",
    },
    {
        question: "Will my website be mobile-friendly?",
        answer:
            "Absolutely! We understand the importance of having a mobile-friendly website in today’s world. Our experts work hard to ensure that your website looks great on all devices including smartphones, tablets, and desktops.",
    },
    {
        question: "Does you provide long-term support after completing the project?",
        answer:
            "Yes! We do. We aren’t going anywhere after the launch of your website. TheCustomWebsites is a professional web development company – doing this for many years now. We are only a mail away. You can seek our help whenever you need it.",
    },
];

export default function Faqs() {
    // Two columns → first FAQ in each open by default
    const [openFaqLeft, setOpenFaqLeft] = useState(0);
    const [openFaqRight, setOpenFaqRight] = useState(3);

    const handleToggle = (index, column) => {
        if (column === "left") {
            setOpenFaqLeft((prev) => (prev === index ? null : index));
        } else {
            setOpenFaqRight((prev) => (prev === index ? null : index));
        }
    };

    // Split into two columns using your specific index pattern
    const leftColumn = [faqsData[0], faqsData[1], faqsData[2]];
    const rightColumn = [faqsData[3], faqsData[4], faqsData[5]];

    return (
        <div className="relative w-full py-12 px-6 md:px-8 bg-[#f9f9f9] rounded-2xl overflow-hidden">
            {/* Center shadow gradient */}
            <div className="absolute inset-0 bg-gradient-radial from-[#00000020] via-[#00000008] to-transparent transition-all duration-700 pointer-events-none"></div>

            <div className="max-w-[1140px] mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-6">
                        {leftColumn.map((faq, i) => {
                            const index = i; // actual index 0,1,2
                            const isOpen = openFaqLeft === index;

                            return (
                                <div
                                    key={index}
                                    className={`p-4 bg-white rounded-xl shadow-[2px_1px_10px_rgba(0,0,0,0.08)] transition-all duration-500 ${isOpen ? "bg-[#ffffff] shadow-[0_0_25px_rgba(0,0,0,0.06)]" : ""
                                        }`}
                                >
                                    <button
                                        onClick={() => handleToggle(index, "left")}
                                        className="flex items-center justify-between w-full text-left focus:outline-none"
                                    >
                                        <div className="flex items-center gap-6">
                                            <span
                                                className={`flex items-center justify-center rounded-full border border-[#1b75bb] text-white font-bold text-xl transition-all duration-300 shrink-0
                                                                ${isOpen ? "bg-[#1b75bb]" : "bg-[#1b75bb]"}
                                                                w-11 h-11`}
                                            >
                                                {isOpen ? <FiMinus className="w-5 h-5" /> : <FiPlus className="w-5 h-5" />}
                                            </span>
                                            <span className="font-medium text-[#221e1f] text-base">
                                                {faq.question}
                                            </span>
                                        </div>
                                    </button>

                                    <div
                                        className={`mt-8 text-[#777777] text-[14px] leading-loose text-left transition-all duration-500 ease-in-out  ${isOpen ? "max-h-[300px] opacity-100 overflow-hidden" : "hidden"
                                            }`}
                                    >
                                        {faq.answer}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col gap-6">
                        {rightColumn.map((faq, i) => {
                            const index = i + 3;
                            const isOpen = openFaqRight === index;

                            return (
                                <div
                                    key={index}
                                    className={`p-4 bg-white rounded-xl shadow-[2px_1px_10px_rgba(0,0,0,0.08)] transition-all duration-500 ${isOpen ? "bg-[#ffffff] shadow-[0_0_25px_rgba(0,0,0,0.06)]" : ""
                                        }`}
                                >
                                    <button
                                        onClick={() => handleToggle(index, "right")}
                                        className="flex items-center justify-between w-full text-left focus:outline-none"
                                    >
                                        <div className="flex items-center gap-6">
                                            <span
                                                className={`flex items-center justify-center rounded-full border border-[#1b75bb] text-white font-bold text-xl transition-all duration-300 shrink-0
                                                    ${isOpen ? "bg-[#1b75bb]" : "bg-[#1b75bb]"}
                                                        w-11 h-11`}
                                            >
                                                {isOpen ? <FiMinus className="w-5 h-5" /> : <FiPlus className="w-5 h-5" />}
                                            </span>
                                            <span className="font-medium text-[#221e1f] text-base">
                                                {faq.question}
                                            </span>
                                        </div>
                                    </button>

                                    <div
                                        className={`mt-8 text-[#777777] text-[14px] leading-loose text-left transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[300px] opacity-100" : "hidden"
                                            }`}
                                    >
                                        {faq.answer}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
