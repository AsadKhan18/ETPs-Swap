import React from "react";
import mission from "../assets/mission.png";

export const WhatWeDo = () => {
  return (
    <section className="flex flex-col justify-center items-center px-4 pb-16 ">
      {/* logo Div */}
      <div className="flex items-center justify-center mt-16 w-full ">
        <div className="max-w-6xl bg-white space-x-8 rounded-lg flex flex-col md:flex-row items-center p-8">
          <div className=" md:w-[55%] relative">
            {/* Replace the src with your logo image */}
            <div className="p-3" />
            <img
              src={mission}
              alt="Logo Foreground"
              className="w-full h-auto  text-white bg-cover bg-center"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-8 mt-8 md:mt-0">
            <h1 className="text-3xl font-bold text-[#162a69] mt-2 mb-4">
              WHAT WE DO
            </h1>
            <p className="text-gray-900 leading-relaxed text-justify">
              At ETFSwap, we are revolutionizing the way people trade ETFs by
              introducing a tokenized platform that leverages blockchain
              technology. Our platform provides seamless access to a variety of
              financial instruments, including staking, liquidity pools, and
              swaps, making it easier for users to engage in secure,
              decentralized trading. With no KYC requirements, lower trading
              fees, and the flexibility to trade without intermediaries, ETFSwap
              empowers traders to take control of their investments while
              enjoying higher leverage and enhanced privacy. We’re here to
              transform traditional ETF trading into a more accessible and
              efficient experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
