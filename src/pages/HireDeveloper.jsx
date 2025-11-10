import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { FaRocket } from "react-icons/fa";

const HireDeveloper = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        hireType: "",
        employees: "",
        engineerType: "",
        skills: [],
        rate: "",
        notes: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                skills: checked
                    ? [...prev.skills, value]
                    : prev.skills.filter((skill) => skill !== value),
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Request sent successfully!");
    };

    return (
        <>
            <section className="relative w-full h-[120px] bg-left lg:h-96 mb-2 sm:mb-0 mt-16 md:mt-20 px-6 md:py-24 bg-cover  bg-no-repeat lg:bg-top"
                style={{ backgroundImage: `url("/assets/banner-portfolio.webp")` }} >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#221e1f]/90 mix-blend-multiply"></div>
                <Breadcrumb />
            </section>

            <div className="max-w-[1140px] mx-auto px-6 py-12 font-sans">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-1/2 px-2.5 order-1 text-left">
                        <div className="w-12 h-12 rounded-full bg-[#1b75bb] flex items-center justify-center mb-3 mx-auto md:mx-0">
                            <div className="text-white text-2xl hover:text-gray-500 transition duration-300">
                                <FaRocket />
                            </div>
                        </div>
                        <h5 className="text-[#1b75bb] text-[18.4px] font-bold">Reach Out</h5>
                        <h1 className="text-4xl md:text-[42px] text-[#221e1f] font-bold mt-2">
                            Hire Developers Remotely Now!
                        </h1>
                        <p className="text-gray-600 mt-8">
                            Partner with us to develop technology to grow your business.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 px-2.5 order-2 md:order-2">
                        <img
                            src="/assets/hiredev.webp"
                            alt="Devices Mockup"
                            className="mx-auto mt-4 rounded-lg"
                        />
                    </div>
                </div>


                {/* Form Section */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-[0_0_16px_rgba(0,0,0,0.16)] rounded-2xl p-8 space-y-6"
                >
                    {/* Name & Contact */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-[#777777] font-semibold mb-1">
                                What's your first name? *
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block text-[#777777] font-semibold mb-1">
                                What's your last name?
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-300"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-[#777777] font-semibold mb-1">
                                What's your email? *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block text-[#777777] font-semibold mb-1">
                                What's your phone number? *
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-300"
                            />
                        </div>
                    </div>

                    {/* Hire Type */}
                    <div>
                        <label className="block text-[#777777] font-semibold mb-2">
                            What type of hire do you want? *
                        </label>
                        <div className="flex flex-col gap-2">
                            <label className="flex text-[#777777] items-center gap-2">
                                <input
                                    type="radio"
                                    name="hireType"
                                    value="fulltime"
                                    checked={formData.hireType === "fulltime"}
                                    onChange={handleChange}
                                />
                                Full Time (40 hours/week)
                            </label>
                            <label className="flex text-[#777777] items-center gap-2">
                                <input
                                    type="radio"
                                    name="hireType"
                                    value="parttime"
                                    checked={formData.hireType === "parttime"}
                                    onChange={handleChange}
                                />
                                Part Time (20 hours/week)
                            </label>
                        </div>
                    </div>

                    {/* Employees Count */}
                    <div>
                        <label className="block text-[#777777] font-semibold mb-2">
                            How many employees are you looking for? *
                        </label>
                        {/* <div className="flex gap-6">
            {["1-2", "2-5", "5+"].map((num) => (
              <label key={num} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="employees"
                  value={num}
                  checked={formData.employees === num}
                  onChange={handleChange}
                />
                {num}
              </label>
            ))}
          </div> */}
                        <div className="flex flex-wrap">
                            {["1-2", "2-5", "5+"].map((num) => (
                                <button
                                    key={num}
                                    type="button"
                                    name="employees"
                                    value={num}
                                    onClick={() =>
                                        setFormData({ ...formData, employees: num })
                                    }
                                    className={`px-4.5 py-2.5 border text-sm text-[#777777] font-semibold ${formData.employees === num
                                            ? "bg-[#409eff] text-white border-[#409eff]"
                                            : "bg-white hover:text-[#1b75bb] text-[#777777] border-gray-300"
                                        }`}
                                >
                                    {num}
                                </button>
                            )
                            )}
                        </div>
                    </div>

                    {/* Engineer Type */}
                    <div>
                        <label className="block text-[#777777] font-semibold mb-2">
                            What type of engineer are you looking for? *
                        </label>
                        <div className="flex flex-wrap">
                            {["UI/UX", "Frontend", "Backend", "Full Stack", "Other"].map(
                                (type) => (
                                    <button
                                        key={type}
                                        type="button"
                                        onClick={() =>
                                            setFormData({ ...formData, engineerType: type })
                                        }
                                        className={`px-4.5 py-2.5 border text-sm text-[#777777] font-semibold ${formData.engineerType === type
                                                ? "bg-[#409eff] text-white border-[#409eff]"
                                                : "bg-white hover:text-[#1b75bb] text-[#777777] border-gray-300"
                                            }`}
                                    >
                                        {type}
                                    </button>
                                )
                            )}
                        </div>
                    </div>

                    {/* Skills */}
                    <div>
                        <label className="block text-[#777777] font-semibold mb-2">
                            What type of skill should they have? *
                        </label>
                        <div className="flex flex-wrap gap-4">
                            {[
                                "React",
                                "Vue",
                                "Angular",
                                "JavaScript",
                                "Node Js",
                                "React Native",
                                "WordPress",
                                "Shopify",
                                "Python",
                                "Php",
                                "Laravel",
                                "Other",
                            ].map((skill) => (
                                <label key={skill} className="flex items-center text-[#777777] gap-2">
                                    <input
                                        type="checkbox"
                                        value={skill}
                                        checked={formData.skills.includes(skill)}
                                        onChange={handleChange}
                                    />
                                    {skill}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Hourly Rate */}
                    <div>
                        <label className="block text-[#777777] font-semibold mb-2">
                            What is the ideal hourly rate range? *
                        </label>
                        {/* <div className="flex gap-6">
            {["$20-$30", "$30-$50", "$50+"].map((rate) => (
              <label key={rate} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="rate"
                  value={rate}
                  checked={formData.rate === rate}
                  onChange={handleChange}
                />
                {rate}
              </label>
            ))}
          </div> */}
                        <div className="flex flex-wrap">
                            {["$20-$30", "$30-$50", "$50+"].map((rate) => (
                                <button
                                    key={rate}
                                    type="button"
                                    name="rate"
                                    value={rate}
                                    onClick={() =>
                                        setFormData({ ...formData, rate: rate })
                                    }
                                    className={`px-4.5 py-2.5 border text-sm text-[#777777] font-semibold ${formData.rate === rate
                                            ? "bg-[#409eff] text-white border-[#409eff]"
                                            : "bg-white hover:text-[#1b75bb] text-[#777777] border-gray-300"
                                        }`}
                                >
                                    {rate}
                                </button>
                            )
                            )}
                        </div>
                    </div>

                    {/* Notes */}
                    <div>
                        <label className="block text-[#777777] font-semibold mb-2">
                            Anything else we should know?
                        </label>
                        <textarea
                            name="notes"
                            rows="4"
                            value={formData.notes}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-300"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="bg-[#1b75bb] hover:opacity-80 text-white px-6 py-3.5 rounded-full transition"
                        >
                            Send Request
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default HireDeveloper;
