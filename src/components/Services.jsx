import React from "react";
import {
  FaReact,
  FaWordpress,
  FaLaravel,
  FaVuejs,
  FaDrupal,
  FaAndroid,
  FaApple,
  FaEthereum,
} from "react-icons/fa";
import {
  SiFlutter,
  SiKotlin,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiSketch,
  SiShopify,
  SiMagento,
  SiBigcommerce,
  SiSquarespace,
  SiUnity,
  SiPhp,
} from "react-icons/si";

export default function WhatWeDo() {
  const services = [
    {
      title: "Web Development",
      icon: <img src="/assets/services/web-development.webp"className="w-10 h-10" alt="web" />,
      items: [
        { name: "PHP", icon: <SiPhp className="text-[#7377AD] w-[30px] h-[30px]" /> },
        { name: "WordPress", icon: <FaWordpress className="text-[#21759B] w-[30px] h-[30px]" /> },
        { name: "React", icon: <FaReact className="text-[#61DAFB] w-[30px] h-[30px]" /> },
        { name: "Drupal", icon: <FaDrupal className="text-[#0077C0] w-[30px] h-[30px]" /> },
        { name: "Laravel", icon: <FaLaravel className="text-[#F9322C] w-[30px] h-[30px]" /> },
        { name: "Vue", icon: <FaVuejs className="text-[#42B883] w-[30px] h-[30px]" /> },
      ],
    },
    {
      title: "Branding & Graphics",
      icon: <img src="/assets/services/ui-ux.png" className="w-10 h-10" alt="uiux" />,
      items: [
        { name: "Adobe XD", icon: <img src="https://img.icons8.com/color/48/adobe-xd.png" className="w-[30px] h-[30px]" alt="xd" /> },
        { name: "Figma", icon: <SiFigma className="text-[#F24E1E] w-[30px] h-[30px]" /> },
        { name: "Adobe Illustrator", icon: <SiAdobeillustrator className="text-[#FF9A00] w-[30px] h-[30px]" /> },
        { name: "Sketch", icon: <SiSketch className="text-[#F7B500] w-[30px] h-[30px]" /> },
        { name: "Adobe Photoshop", icon: <SiAdobephotoshop className="text-[#31A8FF] w-[30px] h-[30px]" /> },
        { name: "Origami Studio", icon: <img src="https://img.icons8.com/color/48/origami.png" className="w-[30px] h-[30px]" alt="origami" /> },
      ],
    },
    {
      title: "App Development",
      icon: <img src="/assets/services/app-development.webp" className="w-10 h-10" alt="app" />,
      items: [
        { name: "Android", icon: <FaAndroid className="text-[#3DDC84] w-[30px] h-[30px]" /> },
        { name: "React Native", icon: <FaReact className="text-[#61DAFB] w-[30px] h-[30px]" /> },
        { name: "iOS App", icon: <FaApple className="text-gray-600 w-[30px] h-[30px]" /> },
        { name: "Flutter", icon: <SiFlutter className="text-[#02569B] w-[30px] h-[30px]" /> },
        { name: "Kotlin", icon: <SiKotlin className="text-[#7F52FF] w-[30px] h-[30px]" /> },
        { name: "Game Development", icon: <SiUnity className="text-black w-[30px] h-[30px]" /> },
      ],
    },
    {
      title: "CMS Development",
      icon: <img src="/assets/services/cms.webp" className="w-10 h-10" alt="cms" />,
      items: [
        { name: "Shopify", icon: <SiShopify className="text-[#96BF48] w-[30px] h-[30px]" /> },
        { name: "WordPress", icon: <FaWordpress className="text-[#21759B] w-[30px] h-[30px]" /> },
        { name: "Magento", icon: <SiMagento className="text-[#EE672F] w-[30px] h-[30px]" /> },
        { name: "Bigcommerce", icon: <SiBigcommerce className="text-[#1E1E1E] w-[30px] h-[30px]" /> },
        { name: "Squarespace", icon: <SiSquarespace className="text-[#222] w-[30px] h-[30px]" /> },
      ],
    },
    {
      title: "Blockchain Development",
      icon: <img src="/assets/services/blockchain.png" className="w-10 h-10" alt="blockchain" />,
      items: [
        { name: "Ethereum", icon: <FaEthereum className="text-[#3C3C3D] w-[30px] h-[30px]" /> },
        { name: "Hyperledger", icon: <img src="https://img.icons8.com/color/48/blockchain-technology.png" className="w-[30px] h-[30px]" alt="hyperledger" /> },
        { name: "Private Blockchains", icon: <img src="https://img.icons8.com/color/48/blockchain.png" className="w-[30px] h-[30px]" alt="private" /> },
        { name: "Smart Contracts", icon: <img src="/assets/services/smart-contracts.webp" className="w-[30px] h-[30px]" alt="smart" /> },
        { name: "NFT Marketplace", icon: <img src="https://img.icons8.com/color/48/nft.png" className="w-[30px] h-[30px]" alt="nft" /> },
      ],
    },
    {
      title: "SEO / SMM",
      icon: <img src="/assets/services/seo-smm.png" className="w-10 h-10" alt="seo-smm" />,
      items: [
        { name: "Search Engine Optimization", icon: <img src="/assets/services/seo.png" className="w-[30px] h-[30px]" alt="seo" /> },
        { name: "Social Media Marketing", icon: <img src="/assets/services/smm.webp" className="w-[30px] h-[30px]" alt="smm" /> },
        { name: "SEM / PPC", icon: <img src="/assets/services/sem.webp" className="w-[30px] h-[30px]" alt="ppc" /> },
      ],
    },
  ];

  return (
    <div className="max-w-[1140px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
      {services.map((category, index) => (
        <div key={index} className="p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center justify-center">{category.icon}</div>
            <span className="text-base uppercase font-bold text-[#221e1f] text-left transition-colors">
              {category.title}
            </span>
          </div>

          <div className="space-y-3">
            {category.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700">
                <div className="flex items-center justify-center">{item.icon}</div>
                <span className="font-medium text-left">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
