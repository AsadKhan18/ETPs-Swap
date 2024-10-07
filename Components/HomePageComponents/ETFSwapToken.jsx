import React from "react";
import grapichsImg from "../../public/Assets/HomePageAssets/benefits.png";
const benefits = [
  {
    title: "Trading Discounts",
    description:
      "ETFS functions as the principal currency within the ETFSwap ecosystem. To enhance the utility of our tokenization platform, we provide a special trading fee discount system, enabling investors to participate at reduced costs.",
  },
  {
    title: "Passive Income",
    description:
      "Earn up to 36% from our staking pool linked directly to our ETF Swap liquidity, providing a lucrative opportunity for generating passive income.",
  },
  {
    title: "Automatic Rewards",
    description:
      "Every transaction fee collected as a sell tax, trading fee is allocated to the ETFS reward pool, from which monthly airdrops benefit token holders, thereby boosting their investment returns.",
  },
  {
    title: "Lower Fees",
    description:
      "By holding ETFS tokens, you gain access to reduced trading fees, lowering transaction costs and enhancing the cost-effectiveness of daily trading activities.",
  },
  {
    title: "Voting Rights",
    description:
      "As an ETFS holder, you will possess voting rights within the platform's governance system, enabling you to influence its future direction and align it with your investment goals.",
  },
  {
    title: "Early Access",
    description:
      "Get early access to new ETF listings and updates on exclusive investment opportunities. This allows you to capitalize on favorable market conditions and boost your portfolio's performance.",
  },
];
const BenefitItem = ({ title, description }) => (
  <div className="py-6 border-b border-gray-700">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

export const SwapToken = () => {
  return (
    <section className="bg-[#19173d] text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="md:text-3xl font-bold text-center mb-12">
          BENEFITS OF INVESTING IN ETFS TOKEN
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-between gap-8">
          {/* Left column */}
          <div>
            {benefits.slice(0, 3).map((benefit, index) => (
              <BenefitItem key={index} {...benefit} />
            ))}
          </div>
          {/* Middle column */}
          <div className="flex justify-center items-center">
            <img
              className="w-full h-auto"
              src="/Assets/HomePageAssets/benefits.png"
              alt="ETFS Token Benefits"
            />
          </div>
          {/* Right column */}
          <div>
            {benefits.slice(3).map((benefit, index) => (
              <BenefitItem key={index + 3} {...benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
