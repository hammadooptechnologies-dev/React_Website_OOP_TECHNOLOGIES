import React, { useState } from "react";


const tabData = [
  {
    id: "retain",
    label: "Retain & Grow Customers",
    icon: <img src="/assets/svg-assisting-clients/grow-black.svg" alt="Retain & Grow Customers" className="w-16 sm:w-20 h-16 sm:h-20" />,
    heading: "Build a Strong Customer Retention Strategy",
    content: (
      <>
        <p className="text-[15px] text-[#656565] mb-2.5">
          Maximizing customer retention and expansion refers to the strategy of keeping existing customers engaged with a business and encouraging them to continue using its products or services, while also identifying opportunities to increase their level of engagement and spend. This approach is critical for any business that wants to build a loyal customer base and achieve sustainable growth over the long term.
        </p>
        <p className="text-[15px] text-[#656565] mb-2.5">
          One key aspect of maximizing customer retention and expansion is developing a deep understanding of customers’ needs, preferences, and behaviors. This involves collecting and analyzing data on customer interactions with the business, as well as soliciting feedback and conducting research to better understand their needs and motivations. Armed with this information, businesses can tailor their offerings and communications to better meet customers’ needs and build stronger relationships.
        </p>
        <p className="text-[15px] text-[#656565]">
          Another important element of this strategy is providing exceptional customer service and support. This means responding quickly and effectively to customer inquiries and complaints, providing personalized assistance whenever possible, and going above and beyond to exceed their expectations.
        </p>
      </>
    ),
  },
  {
    id: "optimize",
    label: "Optimize Operations Scale",
    icon: <img src="/assets/svg-assisting-clients/scale-black.svg" alt="Optimize Operations Scale" className="w-16 sm:w-20 h-16 sm:h-20" />,
    heading: "Streamline Operations for Efficient Scaling",
    content: (
      <>
        <p className="text-[15px] text-[#656565] mb-2.5">
          To optimize operations for scaling, businesses must first conduct a thorough analysis of their current processes to identify areas that can be streamlined, automated, or outsourced. This can involve evaluating every aspect of the business, including inventory management, order fulfillment, shipping and logistics, customer service, and marketing. By examining each area of the business in detail, companies can identify inefficiencies and bottlenecks that may be hindering growth and take steps to address them.
        </p>
        <p className="text-[15px] text-[#656565] mb-2.5">
          One key strategy for optimizing operations is to leverage technology to automate routine tasks and streamline processes. This can include implementing software solutions to manage inventory, track orders, and automate customer service, as well as adopting cloud-based solutions to improve collaboration and access to data. By automating routine tasks, businesses can free up resources and focus on more strategic activities that drive growth.
        </p>
        <p className="text-[15px] text-[#656565]">
          Ultimately, optimizing operations for scaling requires a commitment to ongoing improvement and a willingness to invest in the infrastructure and resources needed to support growth.
        </p>
      </>
    ),
  },
  {
    id: "innovate",
    label: "Achieve Innovative Status",
    icon: <img src="/assets/svg-assisting-clients/leadership-black.svg" alt="Achieve Innovative Status" className="w-16 sm:w-20 h-16 sm:h-20" />,
    heading: "Attain a Status of Innovation",
    content: (
      <>
        <p className="text-[15px] text-[#656565] mb-2.5">
          In today’s fast-paced business environment, innovation is key to success, and companies that can continually create new and unique products, services, and business models are more likely to thrive in the long run. Attaining a status of innovation requires a combination of vision, creativity, and strategic thinking.
        </p>
        <p className="text-[15px] text-[#656565] mb-2.5">
          To attain a status of innovation, businesses must first develop a culture that values creativity and encourages experimentation. This involves creating an environment where employees are encouraged to think outside the box, challenge assumptions, and explore new ideas. This can be achieved by offering training and development programs that focus on creativity and innovation, as well as providing resources and support for employees to experiment and test new ideas.
        </p>
        <p className="text-[15px] text-[#656565]">
          By staying up-to-date on the latest trends and developments, businesses can identify new opportunities and areas for innovation that they can capitalize on.
        </p>
      </>
    ),
  },
  {
    id: "results",
    label: "Generate Positive Revenue",
    icon: <img src="/assets/svg-assisting-clients/iterate-black.svg" alt="Generate Positive Revenue" className="w-16 sm:w-20 h-16 sm:h-20" />,
    heading: "Our Digital Marketing Agency Gets Results, And we can prove it!",
    content: (
      <>
        <p className="text-[15px] text-[#656565]">
          In contrast to any other website development company, we do not cheat the money off of our clients. In fact, give them visible results. After all, we employ work-proven strategies and solutions. Besides, the increase in the business revenue speaks for the excellence of our services itself. So many clients have trusted us over the years, and we have helped them all dominate the digital world. Hence, if you want to be the next, we are already set to help you out. Needless to say, we can maximize your customer base. Clearly, we can set your business in front of the potential customers. Furthermore, you can even boost the sales of your products with our Ecommerce website development. After all, we have helped so many such businesses with top-of-the-line custom-built websites.
        </p>
      </>
    ),
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(tabData[0].id);
  const active = tabData.find((tab) => tab.id === activeTab);

  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-[1140px] mx-auto py-6 px-4 sm:px-6">
      {/* Tabs List */}
      <div className="md:w-[351.25px] flex md:flex-col flex-row flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-start sm:justify-center px-3 sm:px-4 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base w-full md:w-full transition-all
              ${activeTab === tab.id
                ? "shadow-inner shadow-gray-300 border border-gray-300"
                : "bg-white text-[#000000] border border-gray-300"
              }`}
          >
            <span className="mr-2 sm:mr-3 shrink-0">{tab.icon}</span>
            <span className="whitespace-normal text-left sm:text-center">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        key={active.id}
        className="md:w-[728.75px] bg-white text-left rounded-lg shadow-lg px-6 sm:px-8 md:px-10 py-6 sm:py-8 border border-gray-300 transition-all duration-700 ease-in-out animate-fadeIn"
      >
        <h4 className="text-xl sm:text-2xl md:text-[25.6px] font-semibold mb-4 text-[#221e1f]">
          {active.heading}
        </h4>
        {active.content}
      </div>
    </div>
  );
}
