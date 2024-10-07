import React from "react";
import coverImg from "../../public/Assets/HomePageAssets/cover-img.jpg";
// import MainBg from "./MainBg";

export const MainCover = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6 md:px-8 py-16 overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="Assets/HomePageAssets/cover-img.jpg"
        alt="Background"
      />
      {/* <MainBg /> */}

      <div className="max-w-4xl w-full">
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 text-center md:text-start leading-tight">
          <span class=" uppercase text-start">
            <span> Unlock Superior Trading </span>
            <span className="text-blue-500">Potential</span>
            <span className="px-2">with</span>
            <span>
              <span className="text-blue-500"> Cutting-Edge</span> Algorithms
            </span>
          </span>
        </h1>

        <p className="text-sm sm:text-base mb-8 text-center max-w-4xl mx-auto">
          A decentralized algorithmic crypto trading platform to revolutionize
          trading and investment with innovative technologies and automation.
        </p>

        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-blue-400">
            Why Choose ETFSwap?
          </h2>
          <ul className="list-none space-y-2 mb-8">
            {[
              "Decentralized: Complete control of your assets with no middlemen.",
              "Transparent: All transactions are recorded on the blockchain for full transparency.",
              "Secure: Cutting-edge security protocols ensure your assets are safe at all times.",
              "Low Fees: Trade and invest with minimal transaction fees, ensuring you keep more of your profits.",
              "Global Access: Accessible to users worldwide, opening the door to a new era of global ETF trading.",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full"></div>
      <div className="absolute top-4 right-4 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full"></div>
      <div className="absolute bottom-1/4 right-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full"></div>
    </section>
  );
};
