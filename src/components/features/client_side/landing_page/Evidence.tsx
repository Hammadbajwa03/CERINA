"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Evidence: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 3500); // 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      description:
        "Relaxation techniques are very important to me, and I absolutely loved the breathwork. Being able to do that in my own time and my own space was amazing. You can say exactly how you feel to the AI, which is great. I can't wait to keep using it more and more.",
      author: "Lizzie",
    },
    {
      description:
        "The app suggested doing some of the breathing techniques which normally I just would not put aside time to do because I'm so busy at work. It almost gives me a bit of strength to then feel that I can say: 'This is what I've been feeling, and this is what I'm doing about it.'",
      author: "Hannah",
    },
    {
      description:
        "To be quite frank, other applications feel less therapeutic—they are full of 'shiny things' competing for your attention. Cerina is different. It is an actual course to follow with clear objectives. It's rare to see an evidence-based therapeutic app like this in the market. It's a place to go for real knowledge, helping you understand the basics of how your mind works to find a rational way forward.",
      author: "RCT participant",
    },
    {
      description:
        "When you have a lot of stress, you need an immediate reply rather than having to read through content yourself. That's why the AI chatbot (Hedgie) is so innovative. It gives you immediate feedback in those urgent moments when you just need to express something.",
      author: "RCT participant",
    },
    {
      description:
        "The fact that I could access support without having to speak to anyone first made me feel totally in control. I didn't feel like anyone would be judging me; I just clicked onto it. It's the sort of thing you can just pick up and use at any time to talk about your feelings when it feels right for you.",
      author: "Lizzie",
    },
    {
      description:
        "I've used the chatbot to understand different kinds of mental health terminology I haven't heard before. If someone uses a term I don't know, I can quickly ask the AI what it means. It's a great educational tool.",
      author: "Michelle",
    },
    {
      description:
        "I've been using the muscle relaxation video every evening before bed — it really helps release all the tension in my body. I used to need a long hot bath and deep heat every night, but now I don't. It's changed my life.",
      author: "Tracy",
    },
  ];

  const evidenceData = [
    {
      mainText: "£120-£210",
      subtitle: "Net saving per user",
      description: "(for NHS expenditure)",
    },
    {
      mainText: "96%",
      subtitle: "ORCHA score",
      description: "(highest among the regulated mental health apps)",
    },
    {
      mainText: "16-20:1",
      subtitle: "ROI in primary care",
      description: "(talking therapies implementation)",
    },
    {
      mainText: "2",
      subtitle: "Peer-reviewed research",
      description: "publications",
    },
  ];

  return (
    <div
      className="relative bg-[#EEE7DB] overflow-hidden w-full max-w-[1242px] mx-auto"
      style={{
        borderRadius: "40px",
        padding: "30px 40px",
      }}
    >
      <div className="w-full max-w-[1240px] mx-auto px-4 py-16">
        {/* Heading */}
        <h2
          className="font-semibold text-[#121212] text-center mb-12"
          style={{
            fontSize: "clamp(2.025rem, 7.2vw, 2.875rem)",
            lineHeight: "100%",
            letterSpacing: "0px",
          }}
        >
          Our Evidence
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Side - Evidence Data */}
          <div className="flex-1 w-full max-w-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
              {/* Vertical Divider - Hidden on mobile, visible on sm+ */}
              <div
                className="hidden sm:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
                style={{
                  width: "1px",
                  height: "295.5px",
                  borderLeft: "1px solid #B5B5B5",
                }}
              />
              {/* Horizontal Divider - Between top and bottom rows */}
              <div
                className="hidden sm:block absolute left-0 right-0 top-1/2 -translate-y-1/2"
                style={{
                  height: "1px",
                  borderTop: "1px solid #B5B5B5",
                }}
              />
              {evidenceData.map((item, index) => (
                <div key={index} className="text-center relative z-10">
                  <p
                    className="font-semibold text-[#121212] mb-2"
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "clamp(2rem, 5vw, 2.875rem)",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                  >
                    {item.mainText}
                  </p>
                  <p
                    className="font-medium text-[#121212] mb-1"
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                      lineHeight: "31.99px",
                      letterSpacing: "0%",
                    }}
                  >
                    {item.subtitle}
                  </p>
                  <p
                    className="font-normal text-[#121212]"
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "clamp(0.875rem, 2vw, 1rem)",
                      lineHeight: "31.99px",
                      letterSpacing: "0%",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Testimonial Card Slider */}
          <div className="flex-1 w-full max-w-lg flex flex-col items-center">
            <div className="relative overflow-hidden w-full max-w-[355px] mb-6 rounded-[17.9px]">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full bg-white rounded-[17.9px] p-8"
                    style={{
                      minHeight: "395px",
                    }}
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Image
                          key={i}
                          src="/home_page/star_icon.svg"
                          alt="star"
                          width={20}
                          height={20}
                        />
                      ))}
                    </div>

                    {/* Description */}
                    <p
                      className="text-[#0C0407] mb-6"
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: "clamp(0.875rem, 1.8vw, 1rem)",
                        lineHeight: "24.17px",
                        letterSpacing: "0%",
                        fontWeight: 400,
                      }}
                    >
                      {testimonial.description}
                    </p>

                    {/* Author */}
                    <p
                      className="text-[#0C0407] font-bold"
                      style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                        lineHeight: "18.8px",
                        letterSpacing: "-0.13px",
                      }}
                    >
                      {testimonial.author}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Bullets */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className="cursor-pointer transition-all duration-300"
                >
                  <Image
                    src={
                      index === activeSlide
                        ? "/home_page/filled_slider_icon.svg"
                        : "/home_page/hollo_slider_icon.svg"
                    }
                    alt="slider indicator"
                    width={12}
                    height={12}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-left decorative icon with tooltip (icon UI kept unchanged; tooltip appears to the right) */}
      <div className="absolute left-14 bottom-12 sm:left-20 sm:bottom-16">
        <div className="group relative" tabIndex={0}>
          {/* keep icon UI as a plain image */}
          <Image
            src="/home_page/rev-icon.svg"
            alt="review icon"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10"
          />

          {/* Tooltip — appears on the right side of the icon */}
          <div
            role="status"
            className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-4 min-w-[200px] sm:min-w-[280px] z-10"
          >
            <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-opacity duration-150 bg-black text-white rounded-md px-4 py-3 shadow-lg relative">
              <div
                className="font-normal"
                style={{
                  fontSize: "clamp(11px, 1.5vw, 13px)",
                  lineHeight: "150%",
                  color: "#FFFFFF",
                }}
              >
                Net savings and ROI figures represent estimated ranges based on modelling and early implementation data.
              </div>
              {/* Arrow pointing to the icon (leftward) */}
              <div
                aria-hidden
                className="w-0 h-0 border-[8px] border-transparent border-r-black absolute left-[-14px] top-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evidence;
