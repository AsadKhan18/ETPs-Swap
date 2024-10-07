import React from "react";

const blogPosts = [
  {
    image: "/Assets/HomePageAssets/card-1.png",
    title: "How to Trade Crypto Futures in the US: A Beginner's Guide",
    content:
      "With the popularity of cryptocurrencies, interest in trading in crypto futures has spurned. These contracts allow traders to speculate on the future price of a cryptocurrency without actually...",
  },
  {
    image: "/Assets/HomePageAssets/card-2.png",
    title: "What is a Crypto ETF? Understanding Crypto ETF...",
    content:
      "Cryptocurrency exchange-traded fund (ETF) is an investment vehicle that tracks the price performance of one or more cryptocurrencies to provide exposure to the underlying asset. The...",
  },
  {
    image: "/Assets/HomePageAssets/card-3.png",
    title: "What Are Tokens in Cryptocurrency? A Detailed...",
    content:
      "You may have heard of the term 'token' in blockchain technology and cryptocurrency investment discussions. These digital representations of value are not just confined to cryptocurrency...",
  },
];

const BlogCard = ({ image, title, content }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
      <div className="rounded-md overflow-hidden flex items-center justify-center p-4">
        <img
          className="card-img rounded-lg w-full h-48 object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 text-base mb-4">{content}</p>
        <div className="flex items-center justify-between">
          <span className="text-blue-500 font-semibold cursor-pointer hover:underline">
            Read more
          </span>
          <button className="bg-white rounded-full py-1 border border-black duration-200 px-5 hover:text-white mr-2 group">
            <img
              width={10}
              src="/svgs/chartsvgs/card-arrow.svg"
              alt=""
              className="transition-transform duration-200 group-hover:translate-x-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export const LastestBlog = () => {
  return (
    <section className="w-full md:px-14 px-2 lg:px-28 py-16 bg-white">
      <div className="header w-full text-center font-bold text-5xl py-10 text-[#001447]">
        <h1>Latest Blogs</h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};
