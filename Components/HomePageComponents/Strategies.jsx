import React from "react";

const tradingStrategies = [
  {
    title: "MOMENTUM TRADING",
    description:
      "Utilize momentum trading strategy to capitalize on price movements, identifying assets with strong upward or downward trends, and generating profits.",
    icon: "momentum-trading.svg",
  },
  {
    title: "MEAN REVERSION",
    description:
      "Mean reversion strategy captures price reversals in cryptocurrency markets, exploiting potential range-bound market opportunities.",
    icon: "mean-reversion.svg",
  },
  {
    title: "BREAKOUT TRADING",
    description:
      "Utilize breakout trading strategy to capitalize on price breakouts, scanning markets for assets near support or resistance levels, and executing trades.",
    icon: "breakingout.svg",
  },
  {
    title: "ARBITRAGE OPPORTUNITIES",
    description:
      "Arbitrage strategies exploit price discrepancies across multiple cryptocurrency exchanges, minimizing risks and maximizing potential gains.",
    icon: "Arbitrage-opportunitie.svg",
  },
  {
    title: "TRADING VOLATILITY DYNAMICS",
    description:
      "Volatility trading strategies capitalize on price fluctuations and volatility in the market. AlgoTech's volatility trading algorithms analyze volatility levels.",
    icon: "Trading Volatility Dynamics.svg",
  },
  {
    title: "MACHINE LEARNING-BASED STRATEGIES",
    description:
      "AlgoTech leverages machine learning algorithms to develop and deploy innovative trading strategies. These strategies use advanced machine learning models.",
    icon: "Machine Learning-Based Strategies.svg",
  },
];

export const Strategies = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-20 bg-[#19173d]">
      <div className="container mx-auto">
        <h2 className="text-blue-400 text-xs md:text-sm font-semibold mb-2">
          STRATEGIES
        </h2>
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold mb-8 text-white">
          TRADING STRATEGIES SUITABLE FOR ANY MARKET
        </h1>
        <div className="">
          {tradingStrategies.map((strategy, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b hover:bg-blue-50 hover:bg-opacity-5 border-blue-900 py-7 hover:scale-[1.01] duration-300"
            >
              <div className="flex items-start md:items-center space-x-4 md:space-x-6 flex-1">
                <div className="bg-[#162a69] w-14 h-14 md:w-[80px] md:h-[80px] flex-shrink-0 flex justify-center items-center rounded">
                  <img
                    src={`svgs/${strategy.icon}`}
                    alt={`${strategy.title} Icon`}
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-center flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-0 md:w-1/3">
                    {strategy.title}
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm md:w-2/3 pr-4">
                    {strategy.description}
                  </p>
                </div>
              </div>
              <div className="ml-4">
                <button className="text-sky-600 border border-sky-600 rounded-full py-0.5 px-2 hover:bg-sky-600 hover:text-white transition-colors duration-300">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
