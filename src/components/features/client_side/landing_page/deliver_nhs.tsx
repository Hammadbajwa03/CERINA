"use client";

import React, { useState } from "react";
import Image from "next/image";

const DeliverNHS: React.FC = () => {
  const [activeQuote, setActiveQuote] = useState(0);

  const quotes = [
    {
      text: "When I talked to the client about the app and how it complements what we're doing, she just lit up and became a different person, her whole persona changed. It's almost as if we reached a different level, rather than just talking and coaching. It was really positive",
      author: "Michelle C.",
      role: "WorkWell Coach",
    },
    {
      text: "The integration of Cerina into our workflow has been seamless. It empowers our clients to take control of their mental health journey, providing accessible tools that make a real difference in their daily lives.",
      author: "Dr. Sarah Thompson",
      role: "Clinical Lead, NHS Cornwall",
    },
     
  ];

  return (
    <div className="bg-white overflow-hidden w-full">
      <div className="w-full max-w-[1240px] mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Side Content */}
          <div className="flex-1 max-w-lg text-center lg:text-left">
            <h2
              className="font-medium text-[#121212] mb-6"
              style={{
                fontSize: "clamp(2.025rem, 7.2vw, 2.835rem)",
                lineHeight: "clamp(2.43rem, 8.1vw, 3.762rem)",
                letterSpacing: "0px",
              }}
            >
              Currently Delivering for the NHS
            </h2>

            <p
              className="text-[#000000] font-normal mb-8"
              style={{
                fontSize: "clamp(0.9rem, 2vw, 1.0125rem)",
                lineHeight: "clamp(1.35rem, 3vw, 1.4625rem)",
                letterSpacing: "0px",
              }}
            >
              Cerina currently powers the digital mental health solution supporting the WorkWell programme for NHS Cornwall & Isles of Scilly, helping users access self-guided care quickly while acting as a digital front door that recruits referrals to WorkWell coaches.
            </p>

            <button
              className="mb-8 w-[223px] h-[54px] px-[32px] py-[16px] rounded-[16px] text-white font-medium hover:bg-[#005EB8]/90 transition-colors duration-200 text-center cursor-pointer"
              style={{
                backgroundColor: "#005EB8",
                fontSize: "clamp(0.9rem, 2.25vw, 1.125rem)",
                lineHeight: "clamp(0.9rem, 2.25vw, 1.125rem)",
                letterSpacing: "-0.144px",
                whiteSpace: "nowrap",
              }}
            >
              Learn more
            </button>

            {/* Quotes Section */}
            <div
              className="relative mb-8 p-6 rounded-[28px] border border-[#A7A5A033] flex w-full max-w-[544px]"
              style={{
                minHeight: "198px",
                backgroundColor: "#005EB80D",
                border: "1px solid #A7A5A033",
              }}
            >
              <div className="flex-1">
                {quotes.map((quote, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === activeQuote
                        ? "opacity-100 max-h-96"
                        : "opacity-0 max-h-0 overflow-hidden"
                    }`}
                  >
                    <p
                      className="text-[#000000] font-normal mb-4 text-left"
                      style={{
                        fontSize: "clamp(0.85rem, 1.8vw, 0.95rem)",
                        lineHeight: "clamp(1.25rem, 2.5vw, 1.4rem)",
                      }}
                    >
                      {quote.text}
                    </p>
                    <div className="flex items-center">
                      <p
                        className="font-medium"
                        style={{
                          fontFamily: 'Montserrat',
                          fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                          lineHeight: 'clamp(1.125rem, 2.25vw, 1.21875rem)',
                          letterSpacing: '0%',
                          verticalAlign: 'middle',
                          color: '#6A6862',
                        }}
                      >
                        {quote.author}
                      </p>
                      <span
                        className="mx-2 font-medium"
                        style={{
                          fontFamily: 'Montserrat',
                          fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                          lineHeight: 'clamp(1.125rem, 2.25vw, 1.21875rem)',
                          letterSpacing: '0%',
                          verticalAlign: 'middle',
                          color: '#6A6862',
                        }}
                      >
                        <Image src="/home_page/dot_icon.svg" alt="dot" width={8} height={8} className="inline" />
                      </span>
                      <p
                        className="font-medium"
                        style={{
                          fontFamily: 'Montserrat',
                          fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                          lineHeight: 'clamp(1.125rem, 2.25vw, 1.21875rem)',
                          letterSpacing: '0%',
                          verticalAlign: 'middle',
                          color: '#6A6862',
                        }}
                      >
                        {quote.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroller Indicators */}
              <div className="flex flex-col gap-2 ml-4">
                {quotes.map((_, index) => {
                  const numQuotes = quotes.length;
                  const availableHeight = 150; // 198 - 48 padding
                  const gapHeight = (numQuotes - 1) * 8; // 8px gap
                  const contentHeight = availableHeight - gapHeight;
                  const activeHeight = Math.min(80, contentHeight * 0.6);
                  const inactiveHeight = (contentHeight - activeHeight) / (numQuotes - 1);
                  const height = index === activeQuote ? activeHeight : inactiveHeight;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveQuote(index)}
                      className={`w-3 rounded-lg transition-all duration-300 cursor-pointer ${
                        index === activeQuote
                          ? "bg-[#005EB8]"
                          : "bg-[#005EB866]"
                      }`}
                      style={{ height: `${height}px` }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Three Icons */}
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/home_page/three_icons.svg"
                alt="Three Icons"
                width={544}
                height={80}
                className="w-full max-w-[544px] h-auto"
              />
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-full lg:w-[566px] h-full flex items-center justify-center">
            <Image
              src="/home_page/deliver_nhs.svg"
              alt="Deliver NHS"
              width={600}
              height={600}
              className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[550px] 2xl:max-w-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverNHS;