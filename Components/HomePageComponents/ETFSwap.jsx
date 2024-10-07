import React from "react";

const FeatureRow = ({ feature, etfswap, traditional }) => (
  <div className="flex flex-col md:grid md:grid-cols-3 border-b hover:scale-[1.01] duration-300 border-gray-200 hover:bg-gray-50 transition-all  ">
    <div className="p-3 font-medium bg-blue-50 md:bg-transparent">
      {feature}
    </div>
    <div className="p-3 border-x border-gray-200 ">
      <span className="font-semibold text-gray-900">{etfswap.title}</span>
      <p className="text-sm mt-1">{etfswap.description}</p>
    </div>
    <div className="p-3 bg-gray-50 md:bg-transparent">
      <span className="font-semibold text-gray-900">{traditional.title}</span>
      <p className="text-sm mt-1">{traditional.description}</p>
    </div>
  </div>
);

export const ETFSwap = () => {
  const features = [
    {
      feature: "KYC Requirements",
      etfswap: {
        title: "No KYC",
        description:
          "Start trading instantly with no need for lengthy identity verification procedures.",
      },
      traditional: {
        title: "Mandatory KYC",
        description:
          "Requires submission of personal details and identity verification.",
      },
    },
    {
      feature: "Leverage",
      etfswap: {
        title: "Higher Leverage",
        description:
          "Access greater leverage to enhance potential returns with smaller capital.",
      },
      traditional: {
        title: "Limited or No Leverage",
        description:
          "Typically offers little to no leverage for retail investors.",
      },
    },
    {
      feature: "Intermediaries",
      etfswap: {
        title: "No Intermediaries",
        description:
          "Fully decentralized, enabling peer-to-peer transactions without brokers or third parties.",
      },
      traditional: {
        title: "Brokerage Accounts",
        description:
          "Requires intermediaries like brokers to facilitate trades, adding complexity and costs.",
      },
    },
    {
      feature: "Trading Fees",
      etfswap: {
        title: "Low Fees",
        description:
          "Enjoy lower transaction and management fees, keeping more of your profits.",
      },
      traditional: {
        title: "Higher Fees",
        description:
          "Often higher due to management fees, broker commissions, and other hidden costs.",
      },
    },
    {
      feature: "Flexibility",
      etfswap: {
        title: "Full Flexibility",
        description:
          "Trade tokenized ETFs 24/7, stake, swap, and manage assets anytime.",
      },
      traditional: {
        title: "Limited Flexibility",
        description:
          "Trading restricted to market hours and limited investment options.",
      },
    },
    {
      feature: "Transparency",
      etfswap: {
        title: "Blockchain-Based Transparency",
        description:
          "All transactions are publicly verifiable on the blockchain, providing full visibility.",
      },
      traditional: {
        title: "Opaque Structure",
        description:
          "Transactions are less transparent, often relying on centralized data providers and exchanges.",
      },
    },
    {
      feature: "Transaction Speed",
      etfswap: {
        title: "Instant Transactions",
        description:
          "Near-instant transactions powered by blockchain technology, reducing waiting times.",
      },
      traditional: {
        title: "Slower Settlement",
        description:
          "Transactions can take days to settle, especially in international markets.",
      },
    },
    {
      feature: "Global Access",
      etfswap: {
        title: "Unlimited Global Access",
        description:
          "Open to anyone worldwide with internet access and a wallet, no restrictions.",
      },
      traditional: {
        title: "Restricted Access",
        description:
          "Limited by geographic and regulatory barriers, requiring residency or permits in many cases.",
      },
    },
    {
      feature: "Liquidity Pools",
      etfswap: {
        title: "Liquidity Pools & Staking",
        description:
          "Participate in liquidity pools to earn rewards, adding value beyond trading.",
      },
      traditional: {
        title: "No Staking or Rewards",
        description:
          "Traditional ETFs do not offer the ability to earn rewards through liquidity provision or staking.",
      },
    },
    {
      feature: "Ownership",
      etfswap: {
        title: "Direct Ownership of Tokenized Assets",
        description:
          "Own fractional shares of ETFs through tokenized assets on a blockchain.",
      },
      traditional: {
        title: "Indirect Ownership",
        description:
          "Investors own shares of an ETF but not the underlying assets themselves.",
      },
    },
    {
      feature: "Automation",
      etfswap: {
        title: "Smart Contract Automation",
        description:
          "Automated transactions and trades via smart contracts, ensuring seamless execution.",
      },
      traditional: {
        title: "Manual Processing",
        description:
          "Requires human intervention or traditional systems, increasing the chance of delays and errors.",
      },
    },
    {
      feature: "Global Market Access",
      etfswap: {
        title: "Access to Global ETFs",
        description:
          "Seamlessly invest in global markets with no restrictions, powered by tokenized assets.",
      },
      traditional: {
        title: "Regional Limits",
        description:
          "Access to international markets often involves high fees and complex procedures.",
      },
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
        <div className="flex flex-col md:flex-row mb-8 justify-center items-center">
          <h2 className="text-2xl md:text-3xl w-full font-bold text-blue-900 mb-4">
            WHY USE ETFSWAP?
          </h2>
          <p className="text-sm md:text-base text-gray-700 w-full">
            ETFSwap stands as the catalyst for change in a banking landscape
            that has been stagnant for too long. Here, investors are liberated
            from the burdensome rules of traditional banking.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="hidden md:grid md:grid-cols-3 bg-gray-100 font-semibold">
            <div className="p-3">Feature</div>
            <div className="p-3">ETFSwap</div>
            <div className="p-3">Traditional ETFs</div>
          </div>
          {features.map((item, index) => (
            <FeatureRow key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
