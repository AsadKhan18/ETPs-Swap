import React from "react";

export const RwaToken = () => {
  return (
    <section className="lg:py-12 pr-4 py-28 bg-white">
      <style jsx>{`
        .hover-grow,
        .hover-shadow,
        .hover-bright,
        .hover-rotate {
          transition: all 0.3s ease-in-out;
        }
        .hover-grow:hover {
          transform: scale(1.05);
        }
        .hover-shadow:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
        .hover-bright:hover {
          filter: brightness(1.2);
        }
        .hover-rotate:hover {
          transform: rotate(10deg);
        }
        .arrow,
        .vertical-line {
          transition: all 0.3s ease-in-out;
        }
        .arrow:hover,
        .vertical-line:hover {
          transform: scale(1.1);
        }
        .container * {
          transition: all 0.3s ease-in-out;
        }
      `}</style>
      <div className="text-center ">
        <h1 className="text-xl font-bold  text-blue-900 mb-4 hover-grow">
          RWA TOKENIZATION
        </h1>
        <div className="flex items-center flex-col justify-center">
          <div className="chart-line" />
          <div className="flex justify-between mt-2 w-[55%] text-gray-500 text-sm">
            <span className="hover-grow duration-300">Redemption</span>
            <span className="hover-grow duration-300">Issuance</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-4 gap-8 lg:gap-0">
          {/* Left Icon */}
          <div className="flex flex-col items-center">
            <div className="p-6 rounded-full shadow-xl hover-grow  duration-300 hover-shadow">
              <img
                src="svgs/chartsvgs/house$.svg"
                alt="Icon"
                className="w-16 h-16"
              />
            </div>
          </div>
          {/* Arrow */}
          <div className="arrow rotate-90 py-10 lg:py-0 lg:rotate-0 hover-bright">
            <img src="svgs/chartsvgs/right-arrow.svg" alt="" />
          </div>
          {/* Off-Chain Section */}
          <div className="flex flex-col items-center">
            <div className="relative border border-sky-600 rounded-lg p-4 shadow-md hover-shadow">
              <h2 className="text-center text-lg font-bold text-gray-700 mb-2 hover-grow">
                OFF-CHAIN
              </h2>
              <div className="flex items-center pb-7">
                <div className="bg-white p-4 rounded-lg border flex items-center space-x-2 -mr-2 hover-grow hover-shadow">
                  <div className="bg-sky-600 p-2 px-3 rounded-lg hover-bright">
                    <img
                      src="svgs/chartsvgs/&bags.svg"
                      alt="Custodian"
                      className="w-8 h-8"
                    />
                  </div>
                  <span className="text-gray-700 text-xs">Custodian</span>
                </div>
                {/* Middle */}
                <div className="arrow z-10 border bg-white border-t-0 border-b-0 rounded-full p-1 hover-rotate">
                  <img
                    className="bg-sky-600 p-3 rounded-full"
                    src="svgs/chartsvgs/play.svg"
                    alt=""
                  />
                </div>
                <div className="border-sky-600 border p-1 bg bg-white border-l-0 border-r-0 border-b-0 rounded-full absolute left-[41%] top-[150px] hover-grow">
                  <img
                    className="w-12 h-12 bg-sky-600 p-2 rounded-full"
                    src="svgs/chartsvgs/bank-building.svg"
                    alt=""
                  />
                </div>
                <div className="text-sky-600 left-[20%] mt-2 absolute top-[206px] hover-grow">
                  Institutional grade partners
                </div>
                <div className="bg-white p-4 rounded-lg border flex items-center space-x-2 -ml-2 hover-grow hover-shadow">
                  <div className="bg-sky-600 p-2 rounded-lg hover-bright">
                    <img
                      src="svgs/chartsvgs/data.svg"
                      alt="Data Trustee"
                      className="w-8 h-8"
                    />
                  </div>
                  <span className="text-gray-700 text-xs">Data Trustee</span>
                </div>
              </div>
            </div>
            <div className="vertical-line mt-4" />
          </div>
          {/* On-Chain Section */}
          <div className="relative bg-white border border-sky-600 rounded-lg p-4 -mt-4 shadow-lg max-w-4xl mx-auto hover-shadow">
            <div className="text-sky-600 left-1/2 transform -translate-x-1/2 mt-2 absolute lg:top-[209px] -bottom-24 ml-4 ">
              Regulatory compliant
            </div>
            <div className="absolute -bottom-12 lg:top-[155px] left-1/2 transform -translate-x-1/2 bg-white px-1 pt-1 border-t-2 border-blue-500 rounded-full ">
              <div className="w-12 h-12 bg-sky-600 flex justify-center items-center rounded-full hover-bright">
                <img src="svgs/chartsvgs/regular-com.svg" alt="" />
              </div>
            </div>
            <div className="text-center text-sm mb-2">
              <h2 className="text-lg font-bold hover-grow">ON-CHAIN</h2>
            </div>
            <div className="flex py-4 lg:py-0 flex-col lg:flex-row items-center justify-center">
              {/* Arrow */}
              <div className="arrow hover-bright">
                <img
                  className="arrow rotate-90 py-12 lg:py-0 lg:rotate-0"
                  src="svgs/chartsvgs/right-arrow.svg"
                  alt=""
                />
              </div>
              <div className="flex items-center space-x-2 lg:-mb-0 -mb-2 p-4 rounded-md border hover-grow hover-shadow">
                <div className="w-12 h-12 flex justify-center items-center rounded hover-rotate">
                  <img src="svgs/chartsvgs/swarmX.svg" alt="" />
                </div>
                <div className="text-gray-700">SwarmX</div>
              </div>
              <div className="flex items-center space-x-2 -mb-2  lg:-ml-2 z-10 lg:border-t-0 lg:border-b-0 border-r-0 lg:border-r border-l-0 lg:border-l bg-white border rounded-full p-1 hover-rotate">
                <div className="w-8 h-8 bg-sky-600 flex justify-center items-center rounded-full hover-bright">
                  <img src="svgs/chartsvgs/play.svg" alt="" />
                </div>
              </div>
              <div className="flex items-center lg:-ml-1.5 space-x-2 border p-4 rounded-md hover-grow hover-shadow">
                <div className="w-12 h-12 flex justify-center items-center rounded hover-rotate">
                  <img src="svgs/chartsvgs/token.svg" alt="" />
                </div>
                <div className="text-gray-700 text-sm">
                  Token-Holder's Wallet
                </div>
              </div>
              <div className="flex items-center border p-1 z-10 rounded-full bg-white -ml-2 lg:border-t-0 border-r-0 border-l-0 lg:border-l lg:border-b-0 lg:border-r-sky-600 border-b-sky-600 -mt-2 lg:-mt-0 hover-rotate">
                <div className="w-8 h-8 bg-sky-600 flex justify-center items-center rounded-full hover-bright">
                  <img src="svgs/chartsvgs/play.svg" alt="" />
                </div>
              </div>
              <div className="border border-sky-600 rounded-lg p-4 lg:-ml-3.5 -mt-3.5 lg:-mt-0 hover-shadow">
                <div className="text-sky-600 text-sm font-semibold mb-2 hover-grow">
                  Regulated Trading
                </div>
                <div className="flex space-x-4">
                  <div className="text-center hover-grow">
                    <div className="w-6 h-6 flex justify-center items-center rounded-full mb-1 hover-rotate">
                      <img src="svgs/chartsvgs/swap.svg" alt="" />
                    </div>
                    <div className="text-gray-700 text-sm">Swap</div>
                  </div>
                  <div className="text-center hover-grow">
                    <div className="w-6 h-6 flex justify-center items-center rounded-full mb-1 hover-rotate">
                      <img src="svgs/chartsvgs/drop.svg" alt="" />
                    </div>
                    <div className="text-gray-700 text-sm">Pools</div>
                  </div>
                  <div className="text-center hover-grow">
                    <div className="w-6 h-6 flex justify-center items-center rounded-full mb-1 hover-rotate">
                      <img src="svgs/chartsvgs/docts.svg" alt="" />
                    </div>
                    <div className="text-gray-700 text-sm">dOTC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
