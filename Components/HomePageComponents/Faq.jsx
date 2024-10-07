import React, { useState } from "react";
import Image from "next/image";

const faqData = [
  {
    question: "When Will I Get My Tokens?",
    answer: "Answer to 'When Will I Get My Tokens?' goes here.",
  },
  {
    question: "Will You List On Exchanges?",
    answer: "Answer to 'Will You List On Exchanges?' goes here.",
  },
  {
    question: "Will I Pay Any Tax For Buying And Selling?",
    answer: "Answer to 'Will I Pay Any Tax For Buying And Selling?' goes here.",
  },
  {
    question: "Do You Have An Anti-Dump Plan For The Tokens?",
    answer:
      "Answer to 'Do You Have An Anti-Dump Plan For The Tokens?' goes here.",
  },
  {
    question: "Is ETFSwap Regulated?",
    answer: "Answer to 'Is ETFSwap Regulated?' goes here.",
  },
  {
    question: "How Can I See Your Community?",
    answer: "Answer to 'How Can I See Your Community?' goes here.",
  },
  {
    question: "What Returns Can I Expect For Adding Liquidity?",
    answer:
      "Answer to 'What Returns Can I Expect For Adding Liquidity?' goes here.",
  },
  {
    question: "What Revenue Do You Expect ETFSwap Will Generate?",
    answer:
      "Answer to 'What Revenue Do You Expect ETFSwap Will Generate?' goes here.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border duration-300 hover:shadow-lg hover:bg-gray-50 border-gray-200 p-3 rounded-lg mb-4">
      <button
        className="w-full text-left p-4 flex justify-between items-center focus:outline-none transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        <span
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="px-4 py-2 text-gray-700 bg-gray-50 transition-all duration-300 ease-in-out">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 flex items-center justify-center">
          FREQUENTLY ASKED QUESTIONS
          <span className="w-10 h-10 ml-2 rounded-full flex items-center justify-center">
            <Image
              width={34}
              height={34}
              src="/HomePageSvgs/question-mark.svg"
              alt="Question mark"
            />
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {faqData.slice(0, 4).map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
          <div>
            {faqData.slice(4).map((item, index) => (
              <FAQItem
                key={index + 4}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
