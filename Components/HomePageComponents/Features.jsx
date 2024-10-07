import React, { useState } from "react";

const featureData = [
  {
    id: 1,
    title: "Swap",
    icon: "svgs/swap.svg",
    description:
      "ETFSwap makes trading easy and rewarding. Our decentralized infrastructure allows you to swap assets securely and cost effectively across multiple markets.",
    action: "Start Swapping",
  },
  {
    id: 2,
    title: "Stake",
    icon: "svgs/stake.svg",
    description:
      "Adding your assets to pools provides liquidity for swap trading. Earn yield from trading fees as each ETF pool's trading volume grows.",
    action: "Start Earning",
  },
  {
    id: 3,
    title: "Perpetual Futures & Options",
    icon: "svgs/futureOption.svg",
    description:
      "Trading in long and short options directly from the platform, offering you up to 50x leverage across all listed ETFS",
    action: "Start Investing",
  },
];

const FeatureCard = ({ title, icon, description, action }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`border border-blue-200 rounded-lg p-6 bg-white shadow-md transition-all duration-300 ease-in-out ${
        isHovered ? "transform -translate-y-2 shadow-lg" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-start mb-4">
        <div
          className={`bg-sky-600 rounded transition-all duration-300 ease-in-out ${
            isHovered ? "scale-105" : ""
          }`}
        >
          <img
            width={58}
            height={58}
            src={icon}
            alt={`${title} Icon`}
            className="p-3"
          />
        </div>
      </div>
      <div className="text-start">
        <h3 className="text-xl font-semibold mb-2 items-start">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div className="flex justify-between items-center">
        <button
          className={`flex items-center text-blue-500 hover:translate-x-2 border border-blue-500 rounded-full px-5 pb-0.5 transition-all duration-300 ease-in-out ${
            isHovered ? "bg-sky-600 text-white" : ""
          }`}
        >
          →
        </button>
        <span className="text-gray-600">{action}</span>
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <section className="py-8 px-4 w-full">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">FEATURES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureData.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
