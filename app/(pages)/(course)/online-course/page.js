import CarouselScroll from "@/app/components/Carousel";
import CourseCurriculum from "@/app/components/CourseCurriculum";
import Course from "@/app/components/course/Course";
import React from "react";

const images = [
  {
    img: "/banner/1.png",
  },
  {
    img: "/banner/2.png",
  },
  {
    img: "/banner/3.png",
  },
];
const OnliceCourse = () => {
  return (
    <div className="flex flex-col">
      <CarouselScroll images={images} timing={2000} />
      <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase text-center font-bold bg-clip-text text-transparent bg-gradient-to-r  dark:from-[#00c2cb] dark:to-green-600  from-[#1a8085] to-green-400 mt-5">
        Our Online Course
      </h1>
      <div className="">
        <div className="flex items-center justify-center w-full my-5">
          <span className="text-xl md:text-2xl lg:text-4xl text-center font-bold text-[#03989e] dark:text-[#00c2cb]">
            Smart Traders Course
          </span>
        </div>
        <Course
          img={"/banner/1.png"}
          title={"Smart Traders Course "}
          description1={
            "This Course is specially designed to Learn Institutional Based Trading and Real Price Action Data Analysis. You’ll Learn to Trade on Smart Money Concept."
          }
          description2={
            "This course will make your psychology strong and make you more accurate in your trading. At the end of your course, you’ll start doing trade like banks & Institutions."
          }
          price={"2499"}
          discount={"5999"}
          message={"I am Interested in Smart Traders Course"}
        />
        <CourseCurriculum
          list1={list1}
          list2={list2}
          list3={list3}
          list4={list4}
        />
      </div>
      <div className="">
        <div className="flex items-center justify-center w-full my-5">
          <span className="text-xl md:text-2xl lg:text-4xl text-center font-bold text-[#03989e] dark:text-[#00c2cb]">
            ET – Futures & Options
          </span>
        </div>
        <Course
          img={"/banner/1.png"}
          title={"ET – Futures & Options"}
          description1={
            "This Course is designed for Traders who want to learn about Futures & Options in depth and also want to trade in specially options."
          }
          description2={
            "This course is designed for those who want to trade options professionally, in this course you will get to know how options premium calculated with the help of Greeks. Whether the options premium is cheap or expensive, when to be an option buyer and when to be a seller. "
          }
          price={"2999"}
          discount={"6999"}
          message={"I am Interested in ET – Futures & Options"}
        />
        <CourseCurriculum
          list1={list5}
          list2={list6}
          list3={list7}
          list4={list8}
        />
      </div>
    </div>
  );
};

export default OnliceCourse;

const list1 = [
  "Importance of Price Action",
  "Demand & Supply theory – Data Based",
  "Trading on Multiple Time Frames ",
  "How to pick a perfect time frame based on your trading style   ",
];
const list2 = [
  "How to scan stock in the live market",
  "Trend Analysis",
  "Risk Management & Position size",
  "How to Analyse a Sector to Find the blockbuster opportunity",
];
const list3 = [
  "Moving Average (Simple, Exponential, Linearly Weighted) ",
  "Algo Trader (How we can take advantage from them)",
  "Market Traps",
  "Trading against the Trend",
];
const list4 = [
  "Conventional patterns V/s Demand & Supply",
  "Gap Theory",
  "Trading Indicators with Demand & Supply",
  "Trading Psychology- How to overcome fear and greed ",
];

const list5 = [
  "Options Foundation",
  "Why trade Options ",
  "Benefits of Trading Options",
  "Risk Correlations",
  "Intrinsic Value / Time Value",
];
const list6 = [
  "Breakeven",
  "Moneyness : (ITM/ATM/OTM) ",
  "Options Buying vs. Options Selling",
  "Importance & Risk factor of Options writing ",
  "How to choose the right strike and expiry",
];
const list7 = [
  "Implied Volatility - The game changer for Options premium",
  "Delta/Theta/Vega/Gamma/Rho ",
  "Long Call (Debit) / Long Put (Debit) / Short Call (Credit) / Short Put (Credit) ",
  "Anchor Unit and Offset Unit",
  "Multi-leg Strategies ",
];
const list8 = [
  "Non-directional Strategies",
  "Other Strategies ",
  "Role of Open Interest ",
  "Options for Rental Income",
];
