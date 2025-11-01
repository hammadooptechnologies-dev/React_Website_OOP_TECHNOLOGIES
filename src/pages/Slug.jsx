import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { fetchMegaMenuData } from "../utils/api";
import Breadcrumb from "../components/Breadcrumb";
import { FaBalanceScale, FaUsersCog, FaBuilding, FaHammer, FaMapMarker } from "react-icons/fa";
import PortfolioTabs from "../components/PortfolioTabs";
import { FaSortAmountDown, FaBraille, FaLevelUpAlt } from "react-icons/fa";
import ServiceSection from "../components/ServiceSection";
import serviceData from "../data/serviceSections.json";
import CTA from "../components/Cta";
import quotationData from "../data/quotationSections.json";
import QuotationSection from "../components/QuotationSection";
import imagetextData from "../data/imagetextSection.json"
import MacCtaSection from "../components/MacCtaSection";
import BlockSection from "../components/BlockSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Mac2CtaSection from "../components/Mac2CtaSection";




export default function SingleServicePage() {



  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [sections, setSections] = useState([]);
  const [sections1, setSections1] = useState([]); // From imagetextData

  useEffect(() => {
    if (serviceData[slug]) {
      setSections(serviceData[slug].sections);
    } else {
      setSections([]);
    }
  }, [slug]);

  useEffect(() => {
    if (imagetextData[slug]) {
      setSections1(imagetextData[slug].sections);
    } else {
      setSections1([]);
    }
  }, [slug]);

  const section = quotationData[slug];


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
        <Breadcrumb />
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

      {section && <QuotationSection section={section} />}

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
                {/* ===== Left Column ===== */}
                <div className="relative flex flex-col gap-16">
                  {/* Vertical dotted line */}
                  <div className="absolute left-[11px] top-[30px] bottom-[30px] border-l-2 border-dotted border-[#1b75bb]"></div>

                  {/* Define */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-[5px] w-6 h-6 bg-[#1b75bb] rotate-45"></div>
                    <h3 className="text-xl font-bold text-[#231f20] mb-2">Define</h3>
                    <p className="text-[#777777] text-sm sm:text-base leading-relaxed">
                      To initiate the development process, we define all system requirements.
                      First, we make initial technology decisions and capture user roles and
                      personas. This ensures a clear understanding of project objectives and
                      user needs, setting a solid foundation for smooth, high-quality execution.
                    </p>
                  </div>

                  {/* Design */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-[5px] w-6 h-6 bg-[#1b75bb] rotate-45"></div>
                    <h3 className="text-xl font-bold text-[#231f20] mb-2">Design</h3>
                    <p className="text-[#777777] text-sm sm:text-base leading-relaxed">
                      We take charge of defining your product’s look and feel, modeling user
                      experiences, and planning releases. Our team collaborates closely with you
                      to create intuitive designs, prioritize features, and deliver seamless
                      user journeys.
                    </p>
                  </div>
                </div>

                {/* ===== Right Column ===== */}
                <div className="relative flex flex-col gap-16">
                  {/* Vertical dotted line */}
                  <div className="absolute left-[11px] top-[30px] bottom-[30px] border-l-2 border-dotted border-[#1b75bb]"></div>

                  {/* Develop */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-[5px] w-6 h-6 bg-[#1b75bb] rotate-45"></div>
                    <h3 className="text-xl font-bold text-[#231f20] mb-2">Develop</h3>
                    <p className="text-[#777777] text-sm sm:text-base leading-relaxed">
                      We provide detailed, development-ready specifications, time and cost
                      estimates, and a launch plan. Our expert team ensures a smooth, efficient,
                      and high-quality blockchain development process.
                    </p>
                  </div>

                  {/* Deliver */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-[5px] w-6 h-6 bg-[#1b75bb] rotate-45"></div>
                    <h3 className="text-xl font-bold text-[#231f20] mb-2">Deliver</h3>
                    <p className="text-[#777777] text-sm sm:text-base leading-relaxed">
                      After development, we perform rigorous QA and provide progress tracking
                      via your preferred project management tool. Our team ensures the final
                      product meets all specifications and exceeds expectations.
                    </p>
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

      {["blockchain-websites", "ai-websites", "ios-development", "android-development", "brand-identity", "smm-social-media-marketing", "sem-ppc"].includes(slug) && (

        <BlockSection slug={slug} />
      )}

      <MacCtaSection />

      {["nft-websites", "ai-websites", "blockchain-websites", "php-development", "custom-software-development", "frontend-development", "drupal-development", "backend-development", "laravel-development", "node-js-development", "ios-development", "game-development", "android-development", "vr-app-development", "brand-identity", "ui-ux-design", "shopify", "opencart", "magento", "woocommerce", "wordpress", "seo-search-engine-optimization", "smm-social-media-marketing", "sem-ppc"].includes(slug) && (
        <>
          <Mac2CtaSection slug={slug} />
          <TestimonialsSection />
        </>
      )}

      {/* **************************************************  AI Websites Page************************************************ */}

      {slug === "ai-websites" && (
        <>

          {/* Key areas of our AI development expertise! */}

          <section className="w-full py-16">
            <div className="max-w-[1140px] mx-auto px-4">
              {/* Heading + Paragraph */}
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#231f20] mb-4">
                  Key areas of our AI development expertise!
                </h2>
                <p className="text-sm sm:text-base text-[#777777] max-w-5xl mx-auto">
                  We can easily help you achieve business goals because we provide insights on the best practices to leverage AI. We recommend AI-powered solutions that have proven to be effective in similar scenarios. This way, we provide you a competitive edge in the market. What’s more, we can leverage our domain expertise and state-of-the-art technologies to deliver custom solutions that align with your goals. Additionally, we can offer guidance and insights on the optimal approach to address specific challenges. Therefore, we can assist you in primely taking your business ahead of your competition.
                </p>
              </div>

              {/* 4 Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-10">
                {[
                  {
                    title: "Computer Vision",
                    desc: "Computer vision enables the recognition of objects in images and videos, detects faces and actions. Moreover, it facilitates automation. It achieves this through algorithms that analyze visual data from cameras and sensors. Furthermore, this technology is widely used in various applications. For instance, security and surveillance, medical imaging, and compliance. In fact, computer vision systems work by converting visual information into numerical data that can be processed and analyzed by computers. Most importantly, it allows for the identification of patterns, features, and objects in images and videos. Overall, computer vision plays a critical role in advancing automation and artificial intelligence."
                  },
                  {
                    title: "Time Series Analysis",
                    desc: "Another key aspect of our AI development is Time series analysis. It is used to extract useful statistics, insights, and forecasts from big data. Additionally, it achieves this by analyzing data over time, identifying trends, patterns, and relationships, and generating predictions for future events. Besides, it is also used to predict future trends, identify anomalies, and improve decision-making. It involves the application of various statistical and mathematical models to analyze data from a wide range of sources, including sensors, surveys, and social media. Overall, time series analysis plays an essential role in extracting valuable insights from big data. All in all, it helps make more informed decisions."
                  },
                  {
                    title: "Data Analytics",
                    desc: "Data analytics is used to structure data, analyze statistics, and detect patterns. Moreover, it involves the use of various tools and techniques to process and transform data into useful insights and information. Also, data analytics plays a critical role in various industries, including finance, healthcare, marketing, and retail. It allows organizations to identify trends, make informed decisions, and optimize their operations. Furthermore, it involves a range of methods, including descriptive, predictive, and prescriptive analytics. And each of these provides different types of insights into data. Overall, data analytics is a powerful tool for unlocking the value of data. After all, it enables organizations to leverage data-driven insights for strategic advantage."
                  },
                  {
                    title: "Natural Language Processing",
                    desc: "Natural Language Processing (NLP) is used to translate texts, create voice assistants, and communicate with customers. It accomplishes this by analyzing and processing human language, both written and spoken. Besides, NLP uses algorithms and statistical models to identify patterns and meanings in language. Thus, making it possible for computers to understand and respond to human communication. Mostly, it is part of our AI chatbot development services. And it is an essential technology for businesses. After all, it enables them to communicate with customers through chatbots, voice assistants, and automated customer service. Overall, NLP continues to play an increasingly critical role in enabling human-computer interaction."
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-cover bg-center bg-no-repeat rounded-xl p-6 text-left shadow-[0_0_10px_rgba(0,0,0,0.4)]"
                    style={{
                      backgroundImage: `url("/assets/BG-content.webp")`, // 🖼️ Add your image URL here
                    }}
                  >
                    <h3 className="text-[20px] font-semibold text-[#221e1f] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#777777] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* Macs CTA */}

          <section
            className="w-full md:mt-8 mb-16 bg-cover bg-top bg-no-repeat place-content-center"
            style={{ backgroundImage: `url("/assets/cta1.webp")` }}>
            <div className="max-w-[1140px] mx-auto px-4 sm:px-6 md:px-2 py-8 md:py-6 lg:py-12 xl:py-0 flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left gap-6">

              {/* Text content */}
              <div className="flex-1">
                <h2 className="text-2xl md:text-[30px] font-bold mb-2">
                  Let’s Take Your Business To Better Heights!
                </h2>
                <p className="text-base md:text-[18px] mb-6">
                  We offer a variety of IT services designed to support your success.
                </p>
                <button className="bg-white text-[#221e1f] uppercase px-8 py-2.5 md:px-10 md:py-4 rounded-full font-medium shadow-lg hover:bg-[#231f20] hover:text-white transition-all duration-300">
                  choose pricing plan
                </button>
              </div>

              {/* Image */}
              <div className="relative w-full sm:w-[320px] md:w-[287px] lg:w-[380px] h-[220px] sm:h-[260px] md:h-[216px] lg:h-[245px] flex justify-center md:justify-end">
                <img
                  src="/assets/macs-cta.webp"
                  alt="Macs"
                  className="w-full h-full lg:h-[285px] md:absolute lg:-top-6 xl:-top-12 xl:right-0 object-contain"
                />
              </div>
            </div>
          </section>

          {/* Our Creative Works Section*/}

          <PortfolioTabs />


          {/* Mac 2 CTA */}

          <section
            className="w-full md:mt-12 mb-16 bg-cover bg-center bg-no-repeat place-content-center"
            style={{ backgroundImage: `url("/assets/cta1.webp")` }}>
            <div className="max-w-[1140px] mx-auto px-4 sm:px-2 py-8 md:py-28 flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left gap-8">

              {/* Text content */}
              <div className="w-full md:w-1/2 px-2">
                <h2 className="text-2xl md:text-[36px] font-extrabold mb-8">
                  Hire our AI developer for your project! Call us right away.
                </h2>
                <p className="text-base md:text-[15px] mb-6">
                  Our transparent process is a reflection of our commitment to integrity, honesty, and accountability.<strong> Call Today!</strong>
                </p>
                <button className="bg-white text-[#221e1f] uppercase px-8 py-2.5 md:px-10 md:py-4 rounded-full font-medium shadow-lg hover:bg-[#231f20] hover:text-white transition-all duration-300">
                  get a quote
                </button>
              </div>

              {/* Image */}
              <div className="relative w-1/2 sm:w-[320px] md:w-[270px] lg:w-[380px] h-[220px] sm:h-[260px] md:h-[260px] lg:h-[285px] flex items-start justify-center md:justify-start">
                <img
                  src="/assets/mac2-cta.webp"
                  alt="Mac2"
                  className="w-[200px] h-[250px] md:w-[248px] lg:w-[317px] md:h-[313px] lg:h-[400px] md:absolute md:-top-16 lg:bottom-0 lg:right-8 object-cover"
                />
              </div>
            </div>
          </section>

          {/* Testimonials Section */}

          <TestimonialsSection />
        </>
      )}



      {slug === "php-development" && (
        <div>

        </div>
      )}

      {slug === "frontend-development" && (
        <div>

        </div>
      )}

      {/* Add more conditions for other slugs */}

    </>
  );
}
