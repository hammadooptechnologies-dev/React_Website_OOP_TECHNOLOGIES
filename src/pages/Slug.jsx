// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchMegaMenuData } from "../utils/api";
// import Breadcrumb from "../components/Breadcrumb";
// import PortfolioTabs from "../components/PortfolioTabs";
// import ServiceSection from "../components/ServiceSection";
// import serviceData from "../data/serviceSections.json";
// import CTA from "../components/Cta";
// import quotationData from "../data/quotationSections.json";
// import QuotationSection from "../components/QuotationSection";
// import imagetextData from "../data/imagetextSection.json"
// import MacCtaSection from "../components/MacCtaSection";
// import BlockSection from "../components/BlockSection";
// import TestimonialsSection from "../components/TestimonialsSection";
// import Mac2CtaSection from "../components/Mac2CtaSection";
// import { PiNumberCircleOneLight, PiNumberCircleTwoLight, PiNumberCircleThreeLight, PiNumberCircleFourLight } from "react-icons/pi";
// import FaqsSection from "../components/ServicesFaqs";
// import { FaCircleNotch } from "react-icons/fa"; 




// export default function SingleServicePage() {



//   const { slug } = useParams();
//   const [service, setService] = useState(null);
//   const [categoryName, setCategoryName] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [sections, setSections] = useState([]);
//   const [sections1, setSections1] = useState([]); // From imagetextData

//   useEffect(() => {
//     if (serviceData[slug]) {
//       setSections(serviceData[slug].sections);
//     } else {
//       setSections([]);
//     }
//   }, [slug]);

//   useEffect(() => {
//     if (imagetextData[slug]) {
//       setSections1(imagetextData[slug].sections);
//     } else {
//       setSections1([]);
//     }
//   }, [slug]);

//   const section = quotationData[slug];


//   useEffect(() => {
//     const loadServiceData = async () => {
//       try {
//         const data = await fetchMegaMenuData();

//         let foundService = null;
//         let foundCategory = "";

//         // Loop through all categories and find the matching slug
//         for (const [category, services] of Object.entries(data.categories)) {
//           const match = services.find((item) => item.slug === slug);
//           if (match) {
//             foundService = match;
//             foundCategory = category;
//             break;
//           }
//         }

//         if (foundService) {
//           setService(foundService);
//           setCategoryName(foundCategory);
//         } else {
//           setService(null);
//         }
//       } catch (error) {
//         console.error("Error loading service data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadServiceData();
//   }, [slug]);

//   if (loading) return <p className="text-center py-10">Loading...</p>;

//   if (!service)
//     return (
//       <div className="text-center py-20 text-gray-600">
//         <h2 className="text-3xl font-semibold">Service Not Found</h2>
//         <p>Please check the URL or go back to the Services page.</p>
//       </div>
//     );




//   //////////////////////////// ✅ Render service-specific content
//   return (
//     <>
//       <section className="relative w-full h-[120px] bg-left lg:h-96 mb-2 sm:mb-0 mt-16 md:mt-20 px-6 md:py-24 bg-cover  bg-no-repeat lg:bg-top"
//         style={{ backgroundImage: `url("/assets/banner-portfolio.webp")` }} >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-[#221e1f]/90 mix-blend-multiply"></div>
//         <Breadcrumb/>
//       </section>

//       {["nft-websites", "ai-websites", "blockchain-websites", "php-development", "custom-software-development", "frontend-development", "drupal-development", "backend-development", "laravel-development", "node-js-development", "ios-development", "game-development", "android-development", "vr-app-development", "brand-identity", "ui-ux-design", "shopify", "opencart", "magento", "woocommerce", "wordpress", "seo-search-engine-optimization", "smm-social-media-marketing", "sem-ppc"].includes(slug) && (
//         sections.length > 0 ? (
//           sections.map((section, i) => (
//             <ServiceSection key={i} section={section} />
//           ))
//         ) : (
//           <p className="text-center py-16">No content found for this service.</p>
//         )
//       )}

//       <CTA />

//       {section && <QuotationSection section={section} />}

//       {slug === "blockchain-websites" && (
//         <>

//           {/* Our blockchain software development process! */}

//           <section className="w-full py-16 bg-white">
//             <div className="max-w-[1140px] mx-auto px-4">
//               {/* Heading + Paragraph */}
//               <div className="text-center mb-12">
//                 <h2 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#231f20] mb-4">
//                   Our blockchain software development process!
//                 </h2>
//               </div>

//               {/* 4 Blocks */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-10">

//                 <div className="relative flex flex-col justify-start gap-16">
//                   <div className="absolute left-[37px] top-[30px] bottom-[330px] border-l-2 border-dotted border-[#1b75bb]"></div>

//                   <div className="flex items-start gap-12">
//                     <div className="p-2 bg-[#1b75bb] rotate-45 flex items-center justify-center">
//                       <div className="-rotate-45 text-white text-6xl"><PiNumberCircleOneLight /></div>
//                     </div>
//                     <div>
//                       <h1 className="text-xl font-bold text-[#231f20] mb-2">Define</h1>
//                       <p className="text-[#777777] text-sm leading-relaxed">
//                         To initiate the development process, we define all system requirements. First, we make initial technology decisions, and capture user roles and personas. After all, this ensures that we have a clear understanding of the project's objectives and the needs of its users. Then, we take an active approach in identifying the most appropriate technologies to be used, as well as defining the features and functionalities required. By doing so, we set the foundation for the development process to proceed smoothly, enabling us to deliver a high-quality end product that meets the needs of our clients and their users.</p>
//                     </div>
//                   </div>


//                   <div className="flex items-start gap-12">
//                     <div className="p-2 bg-[#1b75bb] rotate-45 flex items-center justify-center">
//                       <div className="-rotate-45 text-white text-6xl"><PiNumberCircleTwoLight /></div>
//                     </div>
//                     <div>
//                       <h1 className="text-xl font-bold text-[#231f20] mb-2">Design</h1>
//                       <p className="text-[#777777] text-sm leading-relaxed">
//                         We take charge of determining the initial look and feel of your product. That means, modeling the user experience and journey, prioritizing features, and planning for the release. In addition, our team works collaboratively with you to identify the optimal design elements. For example, color schemes, layout, and typography, that will effectively communicate your brand's message to your target audience. We also model the user experience and journey, ensuring that your product is easy to use and provides a seamless user experience. Additionally, we prioritize features based on their importance. We ensure that the most critical elements are included in the initial release.</p>
//                     </div>
//                   </div>

//                 </div>

//                 {/* ===== Right Column ===== */}
//                 <div className="relative flex flex-col justify-start gap-16">
//                   <div className="absolute left-[37px] top-[30px] bottom-[330px] border-l-2 border-dotted border-[#1b75bb]"></div>

//                   <div className="flex items-start gap-12">
//                     <div className="p-2 bg-[#1b75bb] rotate-45 flex items-center justify-center">
//                       <div className="-rotate-45 text-white text-6xl"><PiNumberCircleThreeLight /></div>
//                     </div>
//                     <div>
//                       <h1 className="text-xl font-bold text-[#231f20] mb-2">Develop</h1>
//                       <p className="text-[#777777] text-sm leading-relaxed">
//                         Unlike any other blockchain development agency, we will assist you in moving forward with detailed, development-ready specifications. In addition, time and cost estimates, a launch plan, and a team of experts ready to execute your plan. In fact, we always provide detailed specifications outlining the functionality, features, and requirements needed for your product's development. Additionally, we provide time and cost estimates to give you an accurate understanding of the project's scope and budget. With a launch plan in place, we ensure that your product is released successfully and effectively to the target audience. Our team of experts is always ready to execute your plan. We ensure that the blockchain development services process is smooth, efficient, and of the highest quality.</p>
//                     </div>
//                   </div>


//                   <div className="flex items-start gap-12">
//                     <div className="p-2 bg-[#1b75bb] rotate-45 flex items-center justify-center">
//                       <div className="-rotate-45 text-white text-6xl"><PiNumberCircleFourLight /></div>
//                     </div>
//                     <div>
//                       <h1 className="text-xl font-bold text-[#231f20] mb-2">Deliver</h1>
//                       <p className="text-[#777777] text-sm leading-relaxed">
//                         After the product development phase of our blockchain app development services, we run a quality check. Most importantly, we utilize your preferred project management tool to track quality assurance and deployment updates. Plus, our team takes charge of delivering exceptional outcomes to meet your requirements. We actively monitor the project's progress and ensure that it meets all of your specifications. Throughout the process, we remain dedicated to delivering quality results and providing regular updates. Therefore, you can trust us to deliver a product that meets or exceeds your expectations. We serve our clients with the most reliable and in-demand blockchain solutions in the industry.</p>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           </section>
//         </>
//       )}

//       {["nft-websites", "php-development", "custom-software-development", "frontend-development", "drupal-development", "backend-development", "laravel-development", "node-js-development", "ios-development", "game-development", "android-development", "vr-app-development", "brand-identity", "ui-ux-design", "shopify", "opencart", "woocommerce", "wordpress", "seo-search-engine-optimization", "smm-social-media-marketing"].includes(slug) && (

//         sections1.length > 0 ? (
//           sections1.map((section, i) => <ServiceSection key={`s1-${i}`} section={section} />)
//         ) : (
//           <p className="text-center py-16">No content found for this service.</p>
//         )
//       )}

//       {["php-development", "custom-software-development", "drupal-development", "backend-development", "laravel-development", "node-js-development"
//         , "game-development", "opencart", "magento", "wordpress"
//       ].includes(slug) && (
//           <>
//             <PortfolioTabs />
//           </>
//         )}

//       {["blockchain-websites", "ai-websites", "ios-development", "android-development", "brand-identity", "smm-social-media-marketing", "sem-ppc"].includes(slug) && (

//         <BlockSection slug={slug} />
//       )}

//       <MacCtaSection />

//       {["nft-websites", "blockchain-websites", "ai-websites", "frontend-development", "ios-development", "android-development", "vr-app-development", "brand-identity", "ui-ux-design"
//         , "shopify", "woocommerce", "seo-search-engine-optimization", "smm-social-media-marketing", "sem-ppc"
//       ].includes(slug) && (
//           <>
//             <PortfolioTabs />
//           </>
//         )}

//       {["php-development", "custom-software-development", "drupal-development", "backend-development", "laravel-development", "node-js-development"
//         , "game-development", "opencart", "magento", "wordpress", "seo-search-engine-optimization", "smm-social-media-marketing", "sem-ppc"
//       ].includes(slug) && (
//           <>
//             <FaqsSection slug={slug} />
//           </>
//         )}

//       {["smm-social-media-marketing"
//       ].includes(slug) && (
//           <>
//             <section className="w-full bg-white py-2">
//               <div className="max-w-[1140px] mx-auto px-4">

//                 {/* Card Data */}
//                 {(() => {
//                   const cardsData = [
//                     {
//                       title: "No Hidden Surprises",
//                       text: "You run everything first. We agree mutually on social media strategy, and you approve all deliverables. You will work with us seamlessly, requiring very little effort from your side",
//                     },
//                     {
//                       title: "Value for your money",
//                       text: "We don't want you to pay us a high retainer; instead, we prefer you to pay us for the true cost of the service and use any additional budget in paid advertising",
//                     },
//                     {
//                       title: "Desired outcomes",
//                       text: "Social media agencies like ours back our high integrity and earn your trust by providing excellent work. We have proven that our social media marketing services generate positive results",
//                     },
//                   ];

//                   return (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//                       {cardsData.map((card, index) => (
//                         <div key={index} className="group relative h-76 perspective-[1000px]">
//                           <div className="relative w-full h-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">
//                             {/* Front Side */}
//                             <div className="absolute inset-0 bg-[#1b75bb] text-white flex flex-col items-center justify-center text-center rounded-md shadow-lg px-6 backface-hidden">
//                               <h3 className="text-[20px] font-semibold mb-3">{card.title}</h3>
//                               <p className="text-sm leading-loose">{card.text}</p>
//                             </div>

//                             {/* Back Side */}
//                             <div className="absolute inset-0 bg-[#1b75bb] text-white flex flex-col items-center justify-center text-center rounded-md shadow-lg px-6 transform-[rotateY(180deg)] backface-hidden">
//                               <h3 className="text-[20px] font-semibold mb-3">{card.title}</h3>
//                               <p className="text-sm leading-loose">{card.text}</p>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   );
//                 })()}
//               </div>
//             </section>



//             <section className="bg-white mb-10 md:mb-0 px-6 pt-16">
//               <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-[50%_50%] items-start gap-4 relative">
//                 <div className="px-4">
//                   <h2 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#231f20] mb-4 text-left">
//                     Ready to acquire our social media marketing services?
//                   </h2>
//                   <p className="text-sm sm:text-base text-[#777777] text-left">
//                     Additionally, our service is nothing short of miraculous. We have a track record of providing tangible results that transform the online presence of our clients. Furthermore, we take a tailored approach to each client. Our team of skilled professionals employs the latest industry trends and cutting-edge techniques to ensure that every social media campaign we undertake generates maximum impact and engagement. With our help, you can expect to see a significant increase in your social media following, engagement, and overall ROI. Our social media marketing agency always:
//                   </p>
//                 </div>

//                 <div className="flex flex-col gap-12 items-start justify-center h-80">
//                   <div className="relative flex flex-col gap-6 items-center px-4">
//                     <div className="absolute left-[35px] top-[30px] bottom-[30px] h-40 border-l-2 border-dotted border-[#1b75bb]"></div>
//                     <div className="grid grid-cols-1 gap-y-7 w-full">
//                       <div className="flex items-center gap-8">
//                         <div className="w-10 h-10 bg-[#1b75bb] rotate-45 flex items-center justify-center">
//                           <div className="-rotate-45 text-white text-xl"><FaCircleNotch/></div>
//                         </div>
//                         <p className="text-[#231f20] text-base font-semibold">Researches your target audience</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="relative flex flex-col gap-6 items-center px-4"> 
//                     <div className="grid grid-cols-1 gap-y-7 w-full">
//                       <div className="flex items-center gap-8">
//                         <div className="w-10 h-10 bg-[#1b75bb] rotate-45 flex items-center justify-center">
//                           <div className="-rotate-45 text-white text-xl"><FaCircleNotch/></div>
//                         </div>
//                         <p className="text-[#231f20] text-base font-semibold">Plans and creates engaging content</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="relative flex flex-col gap-6 items-center px-4">
//                     <div className="grid grid-cols-1 gap-y-7 w-full">
//                       <div className="flex items-center gap-8">
//                         <div className="w-10 h-10 bg-[#1b75bb] rotate-45 flex items-center justify-center">
//                           <div className="-rotate-45 text-white text-xl"><FaCircleNotch/></div>
//                         </div>
//                         <p className="text-[#231f20] text-base font-semibold">Optimizes your social media accounts</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//                 </>
//         )}

//             {["nft-websites", "ai-websites", "blockchain-websites", "php-development", "custom-software-development", "frontend-development", "drupal-development", "backend-development", "laravel-development", "node-js-development", "ios-development", "game-development", "android-development", "vr-app-development", "brand-identity", "ui-ux-design", "shopify", "opencart", "magento", "woocommerce", "wordpress", "seo-search-engine-optimization", "smm-social-media-marketing", "sem-ppc"].includes(slug) && (
//               <>
//                 <Mac2CtaSection slug={slug} />
//                 <TestimonialsSection />
//               </>
//             )}

//           </>
//         );
// }




import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMegaMenuData } from "../utils/api";
import Breadcrumb from "../components/Breadcrumb";
import PortfolioTabs from "../components/PortfolioTabs";
import ServiceSection from "../components/ServiceSection";
import CTA from "../components/Cta";
import QuotationSection from "../components/QuotationSection";
import MacCtaSection from "../components/MacCtaSection";
import BlockSection from "../components/BlockSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Mac2CtaSection from "../components/Mac2CtaSection";
import { PiNumberCircleOneLight, PiNumberCircleTwoLight, PiNumberCircleThreeLight, PiNumberCircleFourLight } from "react-icons/pi";
import FaqsSection from "../components/ServicesFaqs";
import { FaCircleNotch } from "react-icons/fa"; 

// ✅ Keep constants here — before the component
const SERVICE_URL =
  "https://raw.githubusercontent.com/hammadooptechnologies-dev/React_Website_OOP_TECHNOLOGIES_1/main/db.json";
const IMAGE_TEXT_URL =
  "https://raw.githubusercontent.com/hammadooptechnologies-dev/React_Website_OOP_TECHNOLOGIES/main/imagetextSection.json";


// ✅ Component starts AFTER imports/constants
export default function SingleServicePage() {
  const { slug } = useParams();

  const [service, setService] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [sections, setSections] = useState([]);
  const [sections1, setSections1] = useState([]);
  

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const res = await fetch(SERVICE_URL);
        const data = await res.json();
        if (data[slug]) {
          setSections(data[slug].sections);
        } else {
          setSections([]);
        }
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };
    fetchServiceData();
  }, [slug]);

  useEffect(() => {
    const fetchImageTextData = async () => {
      try {
        const res = await fetch(IMAGE_TEXT_URL);
        const data = await res.json();
        if (data[slug]) {
          setSections1(data[slug].sections);
        } else {
          setSections1([]);
        }
      } catch (error) {
        console.error("Error fetching image text data:", error);
      }
    };
    fetchImageTextData();
  }, [slug]);

  useEffect(() => {
    const loadServiceData = async () => {
      try {
        const data = await fetchMegaMenuData();

        let foundService = null;
        let foundCategory = "";

        // Loop through all categories and find the matching slug
        for (const [category, services] of Object.entries(data.categories)) {
          const match = services.find((item) => item.slug === slug);
          if (match) {
            foundService = match;
            foundCategory = category;
            break;
          }
        }

        if (foundService) {
          setService(foundService);
          setCategoryName(foundCategory);
        } else {
          setService(null);
        }
      } catch (error) {
        console.error("Error loading service data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadServiceData();
  }, [slug]);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  if (!service)
    return (
      <div className="text-center py-20 text-gray-600">
        <h2 className="text-3xl font-semibold">Service Not Found</h2>
        <p>Please check the URL or go back to the Services page.</p>
      </div>
    );




  //////////////////////////// ✅ Render service-specific content
  return (
    <>
      <section className="relative w-full h-[120px] bg-left lg:h-96 mb-2 sm:mb-0 mt-16 md:mt-20 px-6 md:py-24 bg-cover  bg-no-repeat lg:bg-top"
        style={{ backgroundImage: `url("/assets/banner-portfolio.webp")` }} >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#221e1f]/90 mix-blend-multiply"></div>
        <Breadcrumb/>
      </section>

      {["nft-websites", "ai-websites", "blockchain-websites", "php-development", "custom-software-development", "frontend-development", "drupal-development", "backend-development", "laravel-development", "node-js-development", "ios-development", "game-development", "android-development", "vr-app-development", "brand-identity", "ui-ux-design", "shopify", "opencart", "magento", "woocommerce", "wordpress", "seo-search-engine-optimization", "smm-social-media-marketing", "sem-ppc"].includes(slug) && (
        sections.length > 0 ? (
          sections.map((section, i) => (
            <ServiceSection key={i} section={section} />
          ))
        ) : (
          <p className="text-center py-16">No content found for this service.</p>
        )
      )}

      <CTA />

      {["nft-websites", "ai-websites", "blockchain-websites", "php-development", "custom-software-development", "frontend-development", "drupal-development", "backend-development", "laravel-development", "node-js-development", "ios-development", "game-development", "android-development", "vr-app-development", "brand-identity", "ui-ux-design", "shopify", "opencart", "magento", "woocommerce", "wordpress", "seo-search-engine-optimization", "smm-social-media-marketing", "sem-ppc"].includes(slug) && (
        <>
        <QuotationSection slug={slug} />
        </>
      )}




      {slug === "blockchain-websites" && (
        <>

          {/* Our blockchain software development process! */}

          <section className="w-full py-16 bg-white">
            <div className="max-w-[1140px] mx-auto px-4">
              {/* Heading + Paragraph */}
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#231f20] mb-4">
                  Our blockchain software development process!
                </h2>
              </div>

              {/* 4 Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-10">

                <div className="relative flex flex-col justify-start gap-16">
                  <div className="absolute left-[37px] top-[30px] bottom-[330px] border-l-2 border-dotted border-[#1b75bb]"></div>

                  <div className="flex items-start gap-12">
                    <div className="p-2 bg-[#1b75bb] rotate-45 flex items-center justify-center">
                      <div className="-rotate-45 text-white text-6xl"><PiNumberCircleOneLight /></div>
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-[#231f20] mb-2">Define</h1>
                      <p className="text-[#777777] text-sm leading-relaxed">
                        To initiate the development process, we define all system requirements. First, we make initial technology decisions, and capture user roles and personas. After all, this ensures that we have a clear understanding of the project's objectives and the needs of its users. Then, we take an active approach in identifying the most appropriate technologies to be used, as well as defining the features and functionalities required. By doing so, we set the foundation for the development process to proceed smoothly, enabling us to deliver a high-quality end product that meets the needs of our clients and their users.</p>
                    </div>
                  </div>


                  <div className="flex items-start gap-12">
                    <div className="p-2 bg-[#1b75bb] rotate-45 flex items-center justify-center">
                      <div className="-rotate-45 text-white text-6xl"><PiNumberCircleTwoLight /></div>
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-[#231f20] mb-2">Design</h1>
                      <p className="text-[#777777] text-sm leading-relaxed">
                        We take charge of determining the initial look and feel of your product. That means, modeling the user experience and journey, prioritizing features, and planning for the release. In addition, our team works collaboratively with you to identify the optimal design elements. For example, color schemes, layout, and typography, that will effectively communicate your brand's message to your target audience. We also model the user experience and journey, ensuring that your product is easy to use and provides a seamless user experience. Additionally, we prioritize features based on their importance. We ensure that the most critical elements are included in the initial release.</p>
                    </div>
                  </div>

                </div>

                {/* ===== Right Column ===== */}
                <div className="relative flex flex-col justify-start gap-16">
                  <div className="absolute left-[37px] top-[30px] bottom-[330px] border-l-2 border-dotted border-[#1b75bb]"></div>

                  <div className="flex items-start gap-12">
                    <div className="p-2 bg-[#1b75bb] rotate-45 flex items-center justify-center">
                      <div className="-rotate-45 text-white text-6xl"><PiNumberCircleThreeLight /></div>
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-[#231f20] mb-2">Develop</h1>
                      <p className="text-[#777777] text-sm leading-relaxed">
                        Unlike any other blockchain development agency, we will assist you in moving forward with detailed, development-ready specifications. In addition, time and cost estimates, a launch plan, and a team of experts ready to execute your plan. In fact, we always provide detailed specifications outlining the functionality, features, and requirements needed for your product's development. Additionally, we provide time and cost estimates to give you an accurate understanding of the project's scope and budget. With a launch plan in place, we ensure that your product is released successfully and effectively to the target audience. Our team of experts is always ready to execute your plan. We ensure that the blockchain development services process is smooth, efficient, and of the highest quality.</p>
                    </div>
                  </div>


                  <div className="flex items-start gap-12">
                    <div className="p-2 bg-[#1b75bb] rotate-45 flex items-center justify-center">
                      <div className="-rotate-45 text-white text-6xl"><PiNumberCircleFourLight /></div>
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-[#231f20] mb-2">Deliver</h1>
                      <p className="text-[#777777] text-sm leading-relaxed">
                        After the product development phase of our blockchain app development services, we run a quality check. Most importantly, we utilize your preferred project management tool to track quality assurance and deployment updates. Plus, our team takes charge of delivering exceptional outcomes to meet your requirements. We actively monitor the project's progress and ensure that it meets all of your specifications. Throughout the process, we remain dedicated to delivering quality results and providing regular updates. Therefore, you can trust us to deliver a product that meets or exceeds your expectations. We serve our clients with the most reliable and in-demand blockchain solutions in the industry.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {["nft-websites", "php-development", "custom-software-development", "frontend-development", "drupal-development", "backend-development", "laravel-development", "node-js-development", "ios-development", "game-development", "android-development", "vr-app-development", "brand-identity", "ui-ux-design", "shopify", "opencart", "woocommerce", "wordpress", "seo-search-engine-optimization", "smm-social-media-marketing"].includes(slug) && (

        sections1.length > 0 ? (
          sections1.map((section, i) => <ServiceSection key={`s1-${i}`} section={section} />)
        ) : (
          <p className="text-center py-16">No content found for this service.</p>
        )
      )}

      {["php-development", "custom-software-development", "drupal-development", "backend-development", "laravel-development", "node-js-development"
        , "game-development", "opencart", "magento", "wordpress"
      ].includes(slug) && (
          <>
            <PortfolioTabs />
          </>
        )}

      

       <BlockSection slug={slug} />
      

      <MacCtaSection slug={slug} />

      {["nft-websites", "blockchain-websites", "ai-websites", "frontend-development", "ios-development", "android-development", "vr-app-development", "brand-identity", "ui-ux-design"
        , "shopify", "woocommerce", "seo-search-engine-optimization", "smm-social-media-marketing", "sem-ppc"
      ].includes(slug) && (
          <>
            <PortfolioTabs />
          </>
        )}

      {["php-development", "custom-software-development", "drupal-development", "backend-development", "laravel-development", "node-js-development"
        , "game-development", "opencart", "magento", "wordpress", "seo-search-engine-optimization", "smm-social-media-marketing", "sem-ppc"
      ].includes(slug) && (
          <>
            <FaqsSection slug={slug} />
          </>
        )}

      {["smm-social-media-marketing"
      ].includes(slug) && (
          <>
            <section className="w-full bg-white py-2">
              <div className="max-w-[1140px] mx-auto px-4">

                {/* Card Data */}
                {(() => {
                  const cardsData = [
                    {
                      title: "No Hidden Surprises",
                      text: "You run everything first. We agree mutually on social media strategy, and you approve all deliverables. You will work with us seamlessly, requiring very little effort from your side",
                    },
                    {
                      title: "Value for your money",
                      text: "We don't want you to pay us a high retainer; instead, we prefer you to pay us for the true cost of the service and use any additional budget in paid advertising",
                    },
                    {
                      title: "Desired outcomes",
                      text: "Social media agencies like ours back our high integrity and earn your trust by providing excellent work. We have proven that our social media marketing services generate positive results",
                    },
                  ];

                  return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {cardsData.map((card, index) => (
                        <div key={index} className="group relative h-76 perspective-[1000px]">
                          <div className="relative w-full h-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">
                            {/* Front Side */}
                            <div className="absolute inset-0 bg-[#1b75bb] text-white flex flex-col items-center justify-center text-center rounded-md shadow-lg px-6 backface-hidden">
                              <h3 className="text-[20px] font-semibold mb-3">{card.title}</h3>
                              <p className="text-sm leading-loose">{card.text}</p>
                            </div>

                            {/* Back Side */}
                            <div className="absolute inset-0 bg-[#1b75bb] text-white flex flex-col items-center justify-center text-center rounded-md shadow-lg px-6 transform-[rotateY(180deg)] backface-hidden">
                              <h3 className="text-[20px] font-semibold mb-3">{card.title}</h3>
                              <p className="text-sm leading-loose">{card.text}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </div>
            </section>



            <section className="bg-white mb-10 md:mb-0 px-6 pt-16">
              <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-[50%_50%] items-start gap-4 relative">
                <div className="px-4">
                  <h2 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#231f20] mb-4 text-left">
                    Ready to acquire our social media marketing services?
                  </h2>
                  <p className="text-sm sm:text-base text-[#777777] text-left">
                    Additionally, our service is nothing short of miraculous. We have a track record of providing tangible results that transform the online presence of our clients. Furthermore, we take a tailored approach to each client. Our team of skilled professionals employs the latest industry trends and cutting-edge techniques to ensure that every social media campaign we undertake generates maximum impact and engagement. With our help, you can expect to see a significant increase in your social media following, engagement, and overall ROI. Our social media marketing agency always:
                  </p>
                </div>

                <div className="flex flex-col gap-12 items-start justify-center h-80">
                  <div className="relative flex flex-col gap-6 items-center px-4">
                    <div className="absolute left-[35px] top-[30px] bottom-[30px] h-40 border-l-2 border-dotted border-[#1b75bb]"></div>
                    <div className="grid grid-cols-1 gap-y-7 w-full">
                      <div className="flex items-center gap-8">
                        <div className="w-10 h-10 bg-[#1b75bb] rotate-45 flex items-center justify-center">
                          <div className="-rotate-45 text-white text-xl"><FaCircleNotch/></div>
                        </div>
                        <p className="text-[#231f20] text-base font-semibold">Researches your target audience</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col gap-6 items-center px-4"> 
                    <div className="grid grid-cols-1 gap-y-7 w-full">
                      <div className="flex items-center gap-8">
                        <div className="w-10 h-10 bg-[#1b75bb] rotate-45 flex items-center justify-center">
                          <div className="-rotate-45 text-white text-xl"><FaCircleNotch/></div>
                        </div>
                        <p className="text-[#231f20] text-base font-semibold">Plans and creates engaging content</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex flex-col gap-6 items-center px-4">
                    <div className="grid grid-cols-1 gap-y-7 w-full">
                      <div className="flex items-center gap-8">
                        <div className="w-10 h-10 bg-[#1b75bb] rotate-45 flex items-center justify-center">
                          <div className="-rotate-45 text-white text-xl"><FaCircleNotch/></div>
                        </div>
                        <p className="text-[#231f20] text-base font-semibold">Optimizes your social media accounts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
                </>
        )}

            {["nft-websites", "ai-websites", "blockchain-websites", "php-development", "custom-software-development", "frontend-development", "drupal-development", "backend-development", "laravel-development", "node-js-development", "ios-development", "game-development", "android-development", "vr-app-development", "brand-identity", "ui-ux-design", "shopify", "opencart", "magento", "woocommerce", "wordpress", "seo-search-engine-optimization", "smm-social-media-marketing", "sem-ppc"].includes(slug) && (
              <>
                <Mac2CtaSection slug={slug} />
                <TestimonialsSection />
              </>
            )}

          </>
        );
}
