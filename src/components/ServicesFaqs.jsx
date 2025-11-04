// import React, { useState } from "react";
// import { FiPlus, FiMinus } from "react-icons/fi";
// import { p } from "framer-motion/client";

// export default function FaqsSection({ slug }) {
//   const data = faqsData[slug];

//   // If no data at all, return nothing
//   if (!data) return null;

//   const { heading, paragraph, faqs = [] } = data;

//   const [openFaqLeft, setOpenFaqLeft] = useState(0);
//   const [openFaqRight, setOpenFaqRight] = useState(3);

//   const handleToggle = (index, column) => {
//     if (column === "left") {
//       setOpenFaqLeft((prev) => (prev === index ? null : index));
//     } else {
//       setOpenFaqRight((prev) => (prev === index ? null : index));
//     }
//   };

//   // Split FAQs for two columns
//   const mid = Math.ceil(faqs.length / 2);
//   const leftColumn = faqs.slice(0, mid);
//   const rightColumn = faqs.slice(mid);

//   return (
//     <section className="w-full bg-white py-3 md:mt-4">
//       <div className="max-w-[1140px] mx-auto text-center">

//         {/* Main heading */}
//         {heading && (
//           <h2 className="px-8 text-3xl md:text-4xl font-bold text-[#221e1f] mb-3">
//             {heading}
//           </h2>
//         )}

//         {/* Paragraph */}
//         {paragraph && (
//         <>
//         {Array.isArray(paragraph) ? (
//               paragraph.map((p, idx) => (
//                 <p
//                   key={idx}
//                   className={`text-[#777777] leading-relaxed ${idx > 0 ? "mt-4" : ""}`}
//                 >
//                   {p}
//                 </p>
//               ))
//             ) : (
//               <p className="text-[#777777] leading-relaxed">
//                 {paragraph}
//               </p>
//             )}
//         </>
//         )}

//         {/* FAQs Section (only if faqs exist) */}
//         {faqs.length > 0 && (
//           <div className="relative w-full py-4 px-6 md:px-8 bg-[#f9f9f9] rounded-2xl overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-radial from-[#00000020] via-[#00000008] to-transparent pointer-events-none"></div>

//             <div className="max-w-[1140px] mx-auto relative z-10">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* LEFT COLUMN */}
//                 <div className="flex flex-col gap-6">
//                   {leftColumn.map((faq, i) => {
//                     const index = i;
//                     const isOpen = openFaqLeft === index;

//                     return (
//                       <div
//                         key={index}
//                         className={`p-4 bg-white rounded-xl shadow-[2px_1px_10px_rgba(0,0,0,0.08)] transition-all duration-500 ${isOpen
//                                         ? "bg-[#ffffff] shadow-[0_0_25px_rgba(0,0,0,0.06)]"
//                                         : ""
//                                         }`}
//                       >
//                         <button
//                           onClick={() => handleToggle(index, "left")}
//                           className="flex items-center justify-between w-full text-left focus:outline-none"
//                         >
//                           <div className="flex items-center gap-6">
//                             <span className="flex items-center justify-center rounded-full border border-[#1b75bb] bg-[#1b75bb] text-white transition-all duration-300 p-3">
//                               {isOpen ? (
//                                 <FiMinus className="w-5 h-5" />
//                               ) : (
//                                 <FiPlus className="w-5 h-5" />
//                               )}
//                             </span>
//                             <span className="font-medium text-[#221e1f] text-base">
//                               {faq.question}
//                             </span>
//                           </div>
//                         </button>

//                         {isOpen && (
//                           <div className="mt-8 text-[#777777] text-left text-sm leading-loose">
//                             {faq.answer}
//                           </div>
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>

//                 {/* RIGHT COLUMN */}
//                 <div className="flex flex-col gap-6">
//                   {rightColumn.map((faq, i) => {
//                     const index = i + mid;
//                     const isOpen = openFaqRight === index;

//                     return (
//                       <div
//                         key={index}
//                         className={`p-4 bg-white rounded-xl shadow-[2px_1px_10px_rgba(0,0,0,0.08)] transition-all duration-500 ${isOpen
//                                         ? "bg-[#ffffff] shadow-[0_0_25px_rgba(0,0,0,0.06)]"
//                                         : ""
//                                         }`}
//                       >
//                         <button
//                           onClick={() => handleToggle(index, "right")}
//                           className="flex items-center justify-between w-full text-left focus:outline-none"
//                         >
//                           <div className="flex items-center gap-6">
//                             <span className="flex items-center justify-center rounded-full border border-[#1b75bb] bg-[#1b75bb] text-white transition-all duration-300 p-3">
//                               {isOpen ? (
//                                 <FiMinus className="w-5 h-5" />
//                               ) : (
//                                 <FiPlus className="w-5 h-5" />
//                               )}
//                             </span>
//                             <span className="font-medium text-[#221e1f] text-base">
//                               {faq.question}
//                             </span>
//                           </div>
//                         </button>

//                         {isOpen && (
//                           <div className="mt-8 text-[#777777] text-left text-sm leading-loose">
//                             {faq.answer}
//                           </div>
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }



import React, { useState, useEffect } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const SERVICE_FAQ_URL =
  "https://raw.githubusercontent.com/hammadooptechnologies-dev/React_Website_OOP_TECHNOLOGIES_1/main/faqsData.json";

export default function FaqsSection({ slug }) {
  // ✅ Always declare hooks at the top
  const [faqData, setFaqData] = useState(null);
  const [openFaqLeft, setOpenFaqLeft] = useState(0);
  const [openFaqRight, setOpenFaqRight] = useState(3);

  // ✅ Fetch data safely in useEffect
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch(SERVICE_FAQ_URL);
        const data = await res.json();
        if (data[slug]) {
          setFaqData(data[slug]);
        } else {
          setFaqData(null);
        }
      } catch (err) {
        console.error("Error fetching FAQs:", err);
        setFaqData(null);
      }
    };

    fetchFaqs();
  }, [slug]);

  // ✅ Safe early return after hooks
  if (!faqData) return null;

  const { heading, paragraph, faqs = [] } = faqData;

  const handleToggle = (index, column) => {
    if (column === "left") {
      setOpenFaqLeft((prev) => (prev === index ? null : index));
    } else {
      setOpenFaqRight((prev) => (prev === index ? null : index));
    }
  };

  const mid = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, mid);
  const rightColumn = faqs.slice(mid);

  return (
    <section className="w-full bg-white py-3 md:mt-4">
       <div className="max-w-[1140px] mx-auto text-center">

         {/* Main heading */}
         {heading && (
          <h2 className="px-8 text-3xl md:text-4xl font-bold text-[#221e1f] mb-3">
            {heading}
          </h2>
        )}

        {/* Paragraph */}
        {paragraph && (
        <>
        {Array.isArray(paragraph) ? (
              paragraph.map((p, idx) => (
                <p
                  key={idx}
                  className={`text-[#777777] leading-relaxed ${idx > 0 ? "mt-4" : ""}`}
                >
                  {p}
                </p>
              ))
            ) : (
              <p className="text-[#777777] leading-relaxed">
                {paragraph}
              </p>
            )}
        </>
        )}

        {/* FAQs Section (only if faqs exist) */}
        {faqs.length > 0 && (
          <div className="relative w-full py-4 px-6 md:px-8 bg-[#f9f9f9] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-[#00000020] via-[#00000008] to-transparent pointer-events-none"></div>

            <div className="max-w-[1140px] mx-auto relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* LEFT COLUMN */}
                <div className="flex flex-col gap-6">
                  {leftColumn.map((faq, i) => {
                    const index = i;
                    const isOpen = openFaqLeft === index;

                    return (
                      <div
                        key={index}
                        className={`p-4 bg-white rounded-xl shadow-[2px_1px_10px_rgba(0,0,0,0.08)] transition-all duration-500 ${isOpen
                                        ? "bg-[#ffffff] shadow-[0_0_25px_rgba(0,0,0,0.06)]"
                                        : ""
                                        }`}
                      >
                        <button
                          onClick={() => handleToggle(index, "left")}
                          className="flex items-center justify-between w-full text-left focus:outline-none"
                        >
                          <div className="flex items-center gap-6">
                            <span className="flex items-center justify-center rounded-full border border-[#1b75bb] bg-[#1b75bb] text-white transition-all duration-300 p-3">
                              {isOpen ? (
                                <FiMinus className="w-5 h-5" />
                              ) : (
                                <FiPlus className="w-5 h-5" />
                              )}
                            </span>
                            <span className="font-medium text-[#221e1f] text-base">
                              {faq.question}
                            </span>
                          </div>
                        </button>

                        {isOpen && (
                          <div className="mt-8 text-[#777777] text-left text-sm leading-loose">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col gap-6">
                  {rightColumn.map((faq, i) => {
                    const index = i + mid;
                    const isOpen = openFaqRight === index;

                    return (
                      <div
                        key={index}
                        className={`p-4 bg-white rounded-xl shadow-[2px_1px_10px_rgba(0,0,0,0.08)] transition-all duration-500 ${isOpen
                                        ? "bg-[#ffffff] shadow-[0_0_25px_rgba(0,0,0,0.06)]"
                                        : ""
                                        }`}
                      >
                        <button
                          onClick={() => handleToggle(index, "right")}
                          className="flex items-center justify-between w-full text-left focus:outline-none"
                        >
                          <div className="flex items-center gap-6">
                            <span className="flex items-center justify-center rounded-full border border-[#1b75bb] bg-[#1b75bb] text-white transition-all duration-300 p-3">
                              {isOpen ? (
                                <FiMinus className="w-5 h-5" />
                              ) : (
                                <FiPlus className="w-5 h-5" />
                              )}
                            </span>
                            <span className="font-medium text-[#221e1f] text-base">
                              {faq.question}
                            </span>
                          </div>
                        </button>

                        {isOpen && (
                          <div className="mt-8 text-[#777777] text-left text-sm leading-loose">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
