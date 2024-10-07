import React, { useState } from "react";

const TokenDropdown3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState("USDT");

  const tokens = [
    { symbol: "USDT", name: "USDT", image: "Assets/usdt_green.png" },
    { symbol: "VOO", name: "Vanguard (VOO)", image: "Assets/usdt_green.png" },
    { symbol: "SPY", name: "SPDR (SPY)", image: "Assets/usdt_green.png" },
    {
      symbol: "IVV",
      name: "iShares Core (IVV)",
      image: "Assets/usdt_green.png",
    },
    { symbol: "QQQ", name: "Invesco (QQQ)", image: "Assets/usdt_green.png" },
    {
      symbol: "GBTC",
      name: "GrayScale (GBTC)",
      image: "Assets/usdt_green.png",
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
        className="bg-transparent flex items-center justify-between gap-4 border rounded-[8px] border-[rgba(71,71,255,0.5)] p-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="flex items-center gap-4">
          <img
            className="w-[30px] h-[28px]"
            src={tokens.find((t) => t.symbol === selectedToken).image}
            alt={selectedToken}
          />
          <span className="text-[20px] font-[500] font-['Inter']">
            {selectedToken}
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-[#0D1836] border border-[#162A69] rounded-[8px] overflow-hidden z-10">
          {tokens.map((token) => (
            <div
              key={token.symbol}
              className="p-2 hover:bg-[#162A69] cursor-pointer flex items-center gap-2"
              onClick={() => selectToken(token)}
            >
              <span>{token.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TokenDropdown3;
