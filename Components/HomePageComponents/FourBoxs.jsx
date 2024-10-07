import React, { useState } from "react";

const cardData = [
  {
    id: 1,
    title: "Speed and Efficiency",
    icon: "svgs/1.svg",
  },
  {
    id: 2,
    title: "Consistency and Discipline",
    icon: "svgs/2.svg",
  },
  {
    id: 3,
    title: "Data-driven Decision Making",
    icon: "svgs/3.svg",
  },
  {
    id: 4,
    title: "Scalability and Accessibility",
    icon: "svgs/4.svg",
  },
];

const Card = ({ id, title, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white  shadow-md rounded-lg p-6 flex flex-col border border-gray-100 justify-between w-full sm:w-72 md:w-1/2 lg:w-72 transition-all duration-300 ${
        isHovered ? "transform -translate-y-2 shadow-lg" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between">
        <img
          src={icon}
          alt={`Icon ${id}`}
          className="w-12 h-12 bg-[#0892d0] p-2 rounded-sm"
        />
        <span className="text-gray-300 text-xl">
          {id.toString().padStart(2, "0")}
        </span>
      </div>
      <div className="mt-4">
        <h3 className="text-base font-semibold">{title}</h3>
        <button
          className={`mt-2 text-3xl text-gray-500 hover:translate-x-2 transition-all  duration-300 ${
            isHovered ? "text-[#0892d0]" : ""
          }`}
        >
          →
        </button>
      </div>
    </div>
  );
};

const FourBoxs = () => {
  return (
    <div className="flex flex-wrap justify-center md:space-y-0 gap-4 py-16">
      {cardData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default FourBoxs;
