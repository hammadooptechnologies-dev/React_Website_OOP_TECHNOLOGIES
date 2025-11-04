import React from "react";
import { 
  FaBalanceScale, FaClock, FaBuilding, FaCamera, FaCar, FaCircleNotch, 
  FaClipboardList, FaExternalLinkSquareAlt, FaCode, FaHammer, FaHands, 
  FaLaptopCode, FaListAlt, FaLock, FaMapMarker, FaMoneyBillWave, 
  FaNetworkWired, FaPager, FaRegNewspaper, FaRegObjectUngroup, 
  FaRegThumbsUp, FaShippingFast, FaShoppingBag, FaShoppingBasket, 
  FaStoreAlt, FaSuitcase, FaUser, FaUserFriends, FaUsersCog, FaHospital 
} from "react-icons/fa"; 

import { IoSettingsSharp } from "react-icons/io5"; 
import { LiaNetworkWiredSolid, LiaTvSolid, LiaUserGraduateSolid } from "react-icons/lia"; 
import { MdApps, MdOutlineTune } from "react-icons/md"; 
import { RiExchangeLine } from "react-icons/ri"; 
import { GiSpeaker } from "react-icons/gi"; 
import { BsPhoneFlip } from "react-icons/bs";



const iconMap = {
  FaBalanceScale: <FaBalanceScale />,
  FaUsersCog: <FaUsersCog />,
  FaBuilding: <FaBuilding />,
  FaHammer: <FaHammer />,
  FaMapMarker: <FaMapMarker />,
  FaUser: <FaUser />,
  FaNetworkWired: <FaNetworkWired />,
  FaRegThumbsUp: <FaRegThumbsUp />,
  FaCode: <FaCode />,
  FaLock: <FaLock />,
  IoSettingsSharp: <IoSettingsSharp />,
  FaCircleNotch: <FaCircleNotch />,
  FaPager: <FaPager />,
  FaClock: <FaClock />,
  FaHands: <FaHands />,
  FaListAlt: <FaListAlt />,
  FaExternalLinkSquareAlt: <FaExternalLinkSquareAlt />,
  FaShoppingBasket: <FaShoppingBasket />,
  FaClipboardList: <FaClipboardList />,
  MdApps: <MdApps />,
  RiExchangeLine: <RiExchangeLine />,
  FaLaptopCode: <FaLaptopCode/>, 
  FaUserFriends : <FaUserFriends />, 
  FaSuitcase: <FaSuitcase/>,
  FaHospital: <FaHospital/>,
  FaCar: <FaCar/>,
  FaShoppingBag: <FaShoppingBag/>,
  FaCamera: <FaCamera/>,
  LiaUserGraduateSolid: <LiaUserGraduateSolid/>,
  LiaTvSolid: <LiaTvSolid/>,
  LiaNetworkWiredSolid: <LiaNetworkWiredSolid/>,
  GiSpeaker: <GiSpeaker/>,
  FaShippingFast: <FaShippingFast/>,
  FaRegObjectUngroup: <FaRegObjectUngroup/>,
  FaRegNewspaper: <FaRegNewspaper/>,
  FaStoreAlt: <FaStoreAlt/>,
  FaMoneyBillWave: <FaMoneyBillWave/>,
  BsPhoneFlip: <BsPhoneFlip/>,
  MdOutlineTune: <MdOutlineTune/>
};

export default function ServiceSection({ section }) {
  const { layout, left, right } = section || {};

  const orderClasses = (order) => (order === 1 ? "order-1" : "order-2");
  const hasLeft = left && left.type;
  const hasRight = right && right.type;

  const layoutClass = !hasLeft
    ? "md:grid-cols-1"
    : layout === "50_50"
      ? "md:grid-cols-[50%_50%]"
      : "md:grid-cols-[55%_45%]";

  return (
    <section className={`bg-white mb-10 md:mb-0 ${layout === "with-heading" ? "py-4" : "py-12"} px-6`}>
      {/* ✅ Render left/right block layout only if they exist */}
      {(hasLeft || hasRight) && (
        <div
          className={`max-w-[1140px] mx-auto grid grid-cols-1 ${layoutClass} items-center lg:items-start gap-4 relative`}
        >
          {/* LEFT BLOCK */}
          {hasLeft && (
            <div className={`px-3 ${orderClasses(left.order)}`}>
              {left.type === "text" && (
                <>
                  <h2 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#231f20] mb-4 text-left">
                    {left.heading}
                  </h2>
                  {left.paragraphs?.map((p, i) => (
                    <p
                      key={i}
                      className={`text-sm sm:text-base text-[#777777] ${i > 0 ? "mt-4" : ""} text-left`}
                    >
                      {p}
                    </p>
                  ))}
                </>
              )}

              {left?.type === "image" && (
                <div className="flex flex-col gap-4">
                  {left.images
                    ? left.images.map((img, i) => (
                      <img
                        key={i}
                        src={img.src}
                        alt={img.alt || ""}
                        className="h-full w-full object-cover"
                      />
                    ))
                    : (
                      <img
                        src={left.src}
                        alt=""
                        className="h-[409px] w-full object-contain"
                      />
                    )}
                </div>
              )}

              {left.type === "imageLayout" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left big block */}
                  <div
                    className="group relative bg-center bg-contain bg-no-repeat rounded-lg flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 hover:scale-105"
                    style={{ backgroundImage: `url(${left.images[0].bg})` }}
                  >
                    <div className="w-[54px] h-[54px] rounded-full bg-white flex items-center justify-center border-4 border-[#231f20] transition-transform duration-500 group-hover:scale-110">
                      <div className="text-[#231f20] text-2xl">{iconMap[left.images[0].icon]}</div>
                    </div>
                    <p className="text-[#231f20] text-[18px] leading-relaxed mt-4 transition-transform duration-500 group-hover:scale-105">
                      {left.images[0].text}
                    </p>
                  </div>

                  {/* Right column with 2 smaller blocks */}
                  <div className="grid grid-rows-2 gap-20">
                    {left.images.slice(1).map((item, i) => (
                      <div
                        key={i}
                        className="group relative bg-center bg-cover rounded-lg flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 hover:scale-105"
                        style={{ backgroundImage: `url(${item.bg})` }}
                      >
                        <div className="w-[54px] h-[54px] rounded-full bg-white flex items-center justify-center border-4 border-[#231f20] transition-transform duration-500 group-hover:scale-110">
                          <div className="text-[#231f20] text-2xl">{iconMap[item.icon]}</div>
                        </div>
                        <p className="text-[#231f20] text-[18px] leading-relaxed mt-4 transition-transform duration-500 group-hover:scale-105">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* RIGHT BLOCK */}
          {hasRight && (
            <div className={`px-4 ${orderClasses(right.order)}`}>
              {right.type === "text" && (
                <>
                  <h2 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#231f20] mb-4 text-left">
                    {right.heading}
                  </h2>
                  {right.paragraphs?.map((p, i) => (
                    <p
                      key={i}
                      className={`text-sm sm:text-base text-[#777777] ${i > 0 ? "mt-4" : ""} text-left`}
                    >
                      {p}
                    </p>
                  ))}
                </>
              )}

              {right?.type === "justtext" && (
                <div className="text-center w-full px-4">
                  <h2 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#231f20] mb-4 leading-snug">
                    {right.heading}
                  </h2>
                  {right.paragraphs?.map((p, i) => (
                    <p
                      key={i}
                      className={`text-sm sm:text-base text-[#777777] leading-relaxed ${i > 0 ? "mt-4" : ""}`}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {right.type === "features" && (
                <div className="flex flex-col justify-start mt-4">
                  <p className="text-[#231f20] mb-10">{right.title}</p>
                  <div className="relative flex flex-col border-l border-l-[#1b75bb] gap-9 items-start pr-4">
                    {right.features?.map((item, i) => (
                      <div key={i} className="flex items-center gap-8 px-2">
                        <div className="w-6 h-px bg-[#1b75bb]" />
                        <div className="w-9 h-9 bg-[#1b75bb] rotate-45 flex items-center justify-center">
                          <div className="-rotate-45 text-white text-base">
                            {iconMap[item.icon]}
                          </div>
                        </div>
                        <p className="text-[#777777] text-sm ml-4">{item.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {right.type === "phpfeatures" && (
                <div className="flex flex-col justify-start mt-4">
                  <p className="text-[#231f20] mb-6">{right.title}</p>
                  <div className="relative flex flex-col gap-3 items-start pr-4">
                    <div className="absolute left-6 top-[30px] bottom-[30px] border-l-2 border-[#1b75bb]"></div>
                    {right.features?.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 px-2 z-10">
                        <div className="w-[35px] h-[35px] rounded-full bg-[#1b75bb] flex items-center justify-center">
                          <div className="text-white text-sm">{iconMap[item.icon]}</div>
                        </div>
                        <p className="text-[#777777] text-sm ml-4">{item.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {right.type === "customsoftwarefeatures" && (
                <div className="flex flex-col justify-start">
                  <p className="text-[#777777] mb-16">{right.title}</p>
                  <div className="relative flex flex-col gap-6 items-start px-4">
                    <div className="absolute left-[33px] top-[30px] bottom-[30px] border-l-2 border-dotted border-[#1b75bb]"></div>
                    <div className="absolute left-[310px] top-[30px] bottom-[30px] border-l-2 border-dotted border-[#1b75bb]"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 w-full">
                      {right.features?.map((item, i) => (
                        <div key={i} className="flex items-center gap-6">
                          <div className="w-9 h-9 bg-[#1b75bb] rotate-45 flex items-center justify-center">
                            <div className="-rotate-45 text-white text-base">{iconMap[item.icon]}</div>
                          </div>
                          <p className="text-[#777777] text-sm">{item.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {right.type === "laravelnodefeatures" && (
                <div className="flex flex-col justify-start">
                  <p className="text-[#777777] mb-3">{right.title}</p>
                  <h2 className="text-black text-[20px] font-bold mb-8">{right.heading}</h2>
                  <div className="relative flex flex-col gap-6 items-start px-4">
                    <div className="absolute left-[33px] top-[30px] bottom-[30px] border-l-2 border-[#1b75bb]"></div>
                    <div className="grid grid-cols-1 gap-y-7 w-full">
                      {right.features?.map((item, i) => (
                        <div key={i} className="flex items-center gap-8">
                          <div className="w-9 h-9 bg-[#1b75bb] rotate-45 flex items-center justify-center">
                            <div className="-rotate-45 text-white text-base">{iconMap[item.icon]}</div>
                          </div>
                          <p className="text-[#777777] text-sm">{item.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {right.type === "gamefeatures" && (
                <div className="flex flex-col justify-start">
                  <p className="text-[#777777] mb-3">{right.title}</p>
                  <div className="relative flex flex-col gap-4 items-start px-4">
                    <div className="absolute left-[33px] top-[30px] bottom-[60px] border-l-2 border-[#1b75bb]"></div>
                    <div className="grid grid-cols-1 gap-y-7 mt-8 w-full">
                      {right.features?.map((item, i) => (
                        <div key={i} className="flex items-start gap-8">
                          <div className="w-20 h-9 bg-[#1b75bb] rotate-45 flex items-center justify-center">
                            <div className="-rotate-45 text-white text-base">{iconMap[item.icon]}</div>
                          </div>
                          <div className="flex flex-col">
                            <h2 className="text-[#414247] font-bold">{item.heading}</h2>
                            <p className="text-[#777777] mt-4 text-sm">{item.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 🔹 IMAGE + TEXT BLOCK SECTION (for imagetextData like ai-websites) */}
      {layout === "with-heading" && section.blocks && (
        <div className={`${section.headingPx || "px-6"} w-full`}>
          {/* Main Heading and Paragraph */}
          <div
            className={`max-w-[1140px] mx-auto mb-10 text-${section.headingAlign || "left"
              }`}
          >
            {section.mainHeading && (
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#231f20] mb-4">
                {section.mainHeading}
              </h2>
            )}


            {section.mainParagraph && (
              <>
            {Array.isArray(section.mainParagraph) ? (
              section.mainParagraph.map((p, idx) => (
                <p
                  key={idx}
                  className={`text-[#777777] leading-relaxed ${idx > 0 ? "mt-4" : ""}`}
                >
                  {p}
                </p>
              ))
            ) : (
              <p className="text-[#777777] leading-relaxed">
                {section.mainParagraph}
              </p>
            )}
          
        </>
            )}
          </div>

          {/* ✅ ICON GRID SECTION (like vr-app-development) */}
          <div className="max-w-[1140px] mx-auto flex flex-col items-center justify-center gap-16">
  {section.icons && (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-60 gap-y-20 text-center mt-10">
      {section.icons.map((iconItem, idx) => (
        <div
          key={idx}
          className={`flex flex-col items-center justify-start ${iconItem.maindivgap || "gap-3"}`}
        >
          <div
            className={`flex items-center justify-center ${iconItem.iconDivClass || "rounded-full bg-[#e6f1fa] w-20 h-20"}`}
          >
            <div
              className={`${iconItem.iconClass || "text-[#1b75bb] text-[50px]"}`}
            >
              {iconMap[iconItem.icon]}
            </div>
          </div>

          <h4
            className={`${iconItem.titleClass || "text-[#231f20] font-bold text-lg mt-4"}`}
          >
            {iconItem.title}
          </h4>
        </div>
      ))}
    </div>
  )}

  {section.features && (
  <div className="flex flex-col justify-start w-full">
    {/* 🔹 Dotted Lines & Features Layout */}
    <div className="relative flex flex-col gap-6 items-start px-4 md:px-8">
      {/* Vertical dotted connectors */}
      <div className="absolute left-[55px] top-[30px] bottom-[30px] border-l-2 border-dotted border-[#1b75bb]"></div>
      <div className="absolute left-[617px] top-[30px] bottom-[30px] border-l-2 border-dotted border-[#1b75bb]"></div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-12 gap-y-12 w-full">
        {section.features.map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            {/* Diamond Icon */}
            <div className="w-12 h-12 bg-[#1b75bb] rotate-45 flex items-center justify-center shrink-0">
              <div className="-rotate-45 text-white text-base">
                {iconMap[item.icon]}
              </div>
            </div>

            {/* Title & Text */}
            <div className="flex flex-col text-left w-full">
              <h4 className="text-[#414247] font-semibold text-[18.4px] mb-1">
                {item.title}
              </h4>
              {item.paragraph && (
                <p className="text-[#777777] text-sm leading-relaxed">
                  {item.paragraph}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}


          {/* Image + Text Blocks */}
          

  {section.blocks?.map((block, i) => (
    <div
      key={i}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      {/* 🔹 Image */}
      <div
        className={`flex justify-center ${block.imagePosition === "right" ? "md:order-2" : "md:order-1"}`}
      >
        <img
          src={block.image}
          alt={block.heading || ""}
          className="object-contain w-full h-auto max-h-[400px]"
        />
      </div>

      {/* 🔹 Text or Points */}
      <div
        className={`text-left ${block.imagePosition === "right" ? "md:order-1" : "md:order-2"}`}
      >
        {/* Heading */}
        {block.heading && (
          <h3 className="text-[36px] font-bold text-[#231f20] mb-4">
            {block.heading}
          </h3>
        )}

        {/* 🔸 Paragraph Mode */}
        {block.paragraph && (
          <>
            {Array.isArray(block.paragraph) ? (
              block.paragraph.map((p, idx) => (
                <p
                  key={idx}
                  className={`text-[#777777] leading-relaxed ${idx > 0 ? "mt-4" : ""}`}
                >
                  {p}
                </p>
              ))
            ) : (
              <p className="text-[#777777] leading-relaxed">
                {block.paragraph}
              </p>
            )}
          </>
        )}

        {/* 🔸 Points Mode */}
        {block.points && (
          <div className="mt-10 flex flex-col gap-6">
            {block.points.map((point, idx) => (
              <div
                key={idx}
                className={`flex items-start ${point.maindivgap || "gap-6"}`}
              >
                {/* Icon */}
                <div
                  className={`flex items-center justify-center ${point.iconDivClass || "w-10 h-10 bg-[#e6f1fa] rounded-full"}`}
                >
                  <div
                    className={`${point.iconClass || "text-[#1b75bb] text-[22px]"}`}
                  >
                    {iconMap[point.icon]}
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h4
                    className={`${point.titleClass || "text-[#231f20] font-semibold text-base mb-1"}`}
                  >
                    {point.title}
                  </h4>
                  <p className="text-sm text-[#777777] leading-relaxed">
                    {point.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  ))}
</div>

        </div>
      )}

      {layout === "" && section.blocks && (
        <>
          {/* Image + Text Blocks */}
          <div className="max-w-[1140px] mx-auto flex flex-col items-center justify-center gap-16">
            {section.blocks.map((block, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              >
                {/* Image */}
                <div
                  className={`flex justify-center ${block.imagePosition === "right" ? "md:order-2" : "md:order-1"
                    }`}
                >
                  <img
                    src={block.image}
                    alt={block.heading || ""}
                    className="object-contain w-full h-auto max-h-[400px]"
                  />
                </div>

                {/* Text */}
                <div
                  className={`text-left ${block.imagePosition === "right" ? "md:order-1" : "md:order-2"
                    }`}
                >
                  <h3 className="text-[36px] font-bold text-[#231f20] mb-4">
                    {block.heading}
                  </h3>
                  {Array.isArray(block.paragraph) ? (
                    block.paragraph.map((p, i) => (
                      <p
                        key={i}
                        className={`text-sm sm:text-base text-[#777777] leading-relaxed ${i > 0 ? "mt-4" : ""
                          }`}
                      >
                        {p}
                      </p>
                    ))
                  ) : (
                    <p className="text-[#777777] leading-relaxed">{block.paragraph}</p>
                  )}

                </div>
              </div>
            ))}
          </div>
        </>
      )}

    </section>
  );
}
