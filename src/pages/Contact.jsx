import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Breadcrumb from "../components/Breadcrumb";

const ContactPage = () => {
    return (
        <>
            <section className="relative w-full h-[120px] bg-left lg:h-96 mb-2 sm:mb-0 mt-16 md:mt-20 px-6 md:py-24 bg-cover  bg-no-repeat lg:bg-top"
                style={{ backgroundImage: `url("/assets/banner-portfolio.webp")` }} >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#221e1f]/90 mix-blend-multiply"></div>
                <Breadcrumb />
            </section>

            <section className="relative w-full bg-white">
                {/* --- Section Wrapper --- */}
                <div className=" w-full">
                    {/* --- Left Side: Heading Section --- */}
                    <div className="flex flex-col justify-center items-center text-center md:text-left px-6 md:px-16 pt-12 pb-6 bg-[#f9f9f9]">
                        <div className="flex items-center justify-center mb-4">
                            <span className="w-12 h-[3px] bg-[#1b75bb] mr-3 rounded-full"></span>
                            <span className="text-[#1b75bb] font-extrabold text-lg tracking-wider">
                                Get Pure Estimate
                            </span>
                            <span className="w-12 h-[3px] bg-[#1b75bb] ml-3 rounded-full"></span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-semibold text-[#221e1f] mb-12">
                            Get In Touch With us
                        </h2>
                    </div>

                    {/* --- Center Overlay Contact Info --- */}
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 top-44 
                            bg-[#242c34] z-10 text-white pt-[18px] pb-2.5 px-6 sm:px-10 md:px-12 
                            rounded-xl shadow-xl flex flex-wrap sm:flex-nowrap items-center justify-center 
                            gap-4 sm:gap-10 lg:gap-16 text-center w-[90%] sm:w-auto max-w-[560px]"
                    >
                        <div className="flex items-center gap-3 justify-center whitespace-nowrap">
                            <FaPhoneAlt className="text-white text-[22px] sm:text-[25px] md:text-[27px]" />
                            <span className="text-sm sm:text-base font-medium">(213) 800-8433</span>
                        </div>

                        <div className="flex items-center gap-3 justify-center whitespace-nowrap">
                            <FaEnvelope className="text-white text-[22px] sm:text-[25px] md:text-[27px]" />
                            <span className="text-sm sm:text-base font-medium">admin@ooptechnologies.com</span>
                        </div>
                    </div>


                    {/* --- Right Side: Background Image + Form --- */}
                    <div
                        className="relative bg-cover bg-center flex items-center justify-center py-20 px-6"
                        style={{ backgroundImage: `url('/assets/products/bg-products.webp')` }}
                    >
                        <form className="w-full max-w-[560px] flex flex-col justify-center items-center">

                            <div className="flex flex-col md:flex-row justify-between gap-3 mb-4 w-full">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full md:w-[49%] px-4 py-3 bg-white border border-gray-300 focus:outline-none text-[#777777] focus:border-blue-300 rounded-sm"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full md:w-[49%] px-4 py-3 bg-white border border-gray-300 focus:outline-none text-[#777777] focus:border-blue-300 rounded-sm"
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full px-4 py-3 mb-4 bg-white border border-gray-300 focus:outline-none text-[#777777] focus:border-blue-300 rounded-sm"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                className="w-full px-4 py-3 mb-6 bg-white border border-gray-300 focus:outline-none text-[#777777] focus:border-blue-300 rounded-sm"
                            ></textarea>

                            <button
                                type="submit"
                                className="px-10 bg-[#1b75bb] text-white py-3.5 rounded-full hover:bg-[#155d99] transition-all duration-300"
                            >
                                Get a Quote
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </>
    );
};

export default ContactPage;
