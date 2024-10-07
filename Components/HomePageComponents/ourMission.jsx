import React from "react";
import Image from "next/image";
import mission from "../../public/Assets/HomePageAssets/mission.png";
import { Black_And_White_Picture } from "next/font/google";
import FourBoxs from "./FourBoxs";
import Feature from "./Features";

export const OurMission = () => {
  return (
    <section
      className="flex flex-col justify-center items-center px-4 py-16 md:px-8 lg:px-16"
      style={{ backgroundColor: "white" }}
    >
      <FourBoxs />
      {/* logo Div */}
      <div className="flex items-center justify-center mt-16 w-full">
        <div className="max-w-6xl bg-white  rounded-lg flex flex-col md:flex-row items-center p-8">
          <div className="w-full md:w-[65%] relative mr-9">
            {/* Replace the src with your logo image */}
            <div className="background w-[85%] h-[85%] bg-[#e6f4fa] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute  -z-20" />
            <Image
              src={mission}
              alt="Logo Foreground"
              className="w-full h-auto  logo-mask text-white"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-8 mt-8 md:mt-0">
            <h1 className="text-3xl font-bold text-[#162a69] mt-2 mb-4">
              WHAT WE DO
            </h1>
            <p className="text-gray-600 leading-relaxed">
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
              efficient experience
            </p>
          </div>
        </div>
      </div>
      <section className="py-8 px-4 w-full">
        <Feature />
      </section>
    </section>
  );
};
