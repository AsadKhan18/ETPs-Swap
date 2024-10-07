import React from "react";

const PhaseCard = ({ phase, items }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all border border-gray-100 hover:border-2 hover:border-sky-600 duration-300 hover:shadow-xl hover:scale-[1.02]">
    <h2 className="text-xl font-bold text-blue-900 mb-4">Phase {phase}</h2>
    <ul className="list-disc list-inside">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700 mb-2">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const OurRoadmap = () => {
  const phases = [
    {
      phase: 1,
      items: [
        "Website launch",
        "Obtaining the necessary licenses",
        "Smart Contract Audit",
        "Platform launch Beta Mode",
        "Community and Marketing Development",
      ],
    },
    {
      phase: 2,
      items: [
        "Website launch",
        "Obtaining the necessary licenses",
        "Smart Contract Audit",
        "Platform launch Beta Mode",
        "Community and Marketing Development",
      ],
    },
    {
      phase: 3,
      items: [
        "Website launch",
        "Obtaining the necessary licenses",
        "Smart Contract Audit",
        "Platform launch Beta Mode",
        "Community and Marketing Development",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto ">
        <h1 className="text-3xl font-bold text-center  text-blue-900 mb-12">
          OUR ROADMAP
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase) => (
            <PhaseCard key={phase.phase} {...phase} />
          ))}
        </div>
      </div>
    </section>
  );
};
