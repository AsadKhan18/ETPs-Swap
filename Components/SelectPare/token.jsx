import React, { useState } from "react";

const TokenDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState("USDT");



  const tokens = [
    { symbol: "USDT", name: "USDT", image: "Assets/usdt_green.png" },
    { symbol: "VOO", name: "Vanguard (VOO)", image: "PoolSvgs/vingurad.png" },
    { symbol: "SPY", name: "SPDR (SPY)", image: "PoolSvgs/spdr.svg" },
    {
      symbol: "IVV",
      name: "iShares Core (IVV)",
      image: "PoolSvgs/iShares.svg",
    },
    { symbol: "QQQ", name: "Invesco (QQQ)", image: "PoolSvgs/invesco.svg" },
    {
      symbol: "GBTC",
      name: "GrayScale (GBTC)",
      image: "PoolSvgs/gray.png",
    },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectToken = (token) => {
    setSelectedToken(token.symbol);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="bg-transparent flex items-center justify-between gap-4 rounded-[8px] max-w-[400px] md:w-[382px] p-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="flex items-center gap-4">
          <img
            className="w-[35px] h-[30px] md:w-[49px] md:h-[44px]"
            src={tokens.find((t) => t.symbol === selectedToken).image}
            alt={selectedToken}
          />
          <span className="text-[18px] md:text-[20px] font-[500] font-['Inter']">
            {selectedToken}
          </span>
        </div>
        <span className="ml-auto text-[#8F9BB7] text-[18px] md:text-[20px] mr-24 md:mr-4">
          {isOpen ? "▲" : "▼"}
        </span>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-[#1e1e47] border border-[#162A69] rounded-[8px] overflow-hidden z-10">
          {tokens.map((token) => (
            <div
              key={token.symbol}
              className="p-2 hover:bg-[#162A69] cursor-pointer flex items-center gap-2"
              onClick={() => selectToken(token)}
            >
              <img
                className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]"
                src={token.image}
                alt={token.name}
              />
              <span className="text-[14px] md:text-[16px]">{token.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TokenDropdown;
