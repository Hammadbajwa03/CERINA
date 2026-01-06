"use client";

import React from "react";
import Image from "next/image";

type FeatureSectionProps = {
  title?: string;
  subtitle?: string;
  secondTitle?: string;
  description?: string;
  secondDescription?: string;
  buttonText?: string;
  media: string;
  mediaWrapperStyle?: string;
  imagePosition?: "left" | "right";
  backgroundColorClass?: string;
  showStoreButtons?: boolean;
  href?: string;
};

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  secondTitle,
  description,
  secondDescription,
  buttonText,
  media,
  mediaWrapperStyle,
  imagePosition,
  backgroundColorClass,
  showStoreButtons,
  href,
}) => {
  const hasContent = title || subtitle || secondTitle || description;

  return (
    <div
      className={`${backgroundColorClass || "bg-white"} overflow-hidden w-full`}
    >
      <div className="w-full max-w-[1240px] mx-auto px-4 py-16">
        <div
          className={`flex flex-col ${imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
            } flex-col-reverse items-center justify-between gap-12 lg:gap-16`}
        >
          {/* Text Content */}
          {hasContent && (
            <div
              className="flex-1 max-w-lg text-center lg:text-left"
            >
              {subtitle && (
                <p
                  className="text-[#4A044E] font-semibold tracking-[-0.2px] mb-4"
                  style={{
                    fontSize: "clamp(0.8rem, 2vw, 1rem)", // 16px–18px
                    lineHeight: "clamp(1.5rem, 3vw, 1.75rem)", // 24px–28px
                  }}
                >
                  {subtitle}
                </p>
              )}
              <h2
                className="font-medium text-[#121212] mb-6"
                style={{
                  fontSize: "clamp(2.025rem, 7.2vw, 2.835rem)",
                  lineHeight: "clamp(2.43rem, 8.1vw, 3.762rem)",
                  letterSpacing: "0px",
                }}
              >
                {title}
              </h2>

              {secondTitle && (
                <h2
                  className="font-medium text-[#121212] mb-6 -mt-8"
                  style={{
                    fontSize: "clamp(2.025rem, 7.2vw, 2.835rem)",
                    lineHeight: "clamp(2.43rem, 8.1vw, 3.762rem)",
                    letterSpacing: "0px",
                  }}
                >
                  {secondTitle}
                </h2>
              )}

              <p
                className="text-[#000000] font-normal"
                style={{
                  fontSize: "clamp(0.9rem, 2vw, 1.0125rem)",
                  lineHeight: "clamp(1.35rem, 3vw, 1.4625rem)",
                  letterSpacing: "0px",
                }}
              >
                {description}
              </p>

              {secondDescription && (
                <p
                  className="text-[#000000] font-normal mt-4"
                  style={{
                    fontSize: "clamp(0.9rem, 2vw, 1.0125rem)",
                    lineHeight: "clamp(1.35rem, 3vw, 1.4625rem)",
                    letterSpacing: "0px",
                  }}
                >
                  {secondDescription}
                </p>
              )}

              {buttonText && (
                href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-11 inline-block w-[223px] hover:w-[280px] h-[54px] px-[32px] py-[16px] rounded-[16px] bg-[#D4C7E5] border-2 border-[#D4C7E3] text-[#18161A] font-medium hover:bg-[#D4C7E5]/90 transition-all duration-200 text-center cursor-pointer overflow-hidden"
                    style={{
                      fontSize: "clamp(0.9rem, 2.25vw, 1.125rem)",
                      lineHeight: "clamp(0.9rem, 2.25vw, 1.125rem)",
                      letterSpacing: "-0.144px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span className="inline-flex items-center justify-center w-full h-full">
                      <span>{buttonText}</span>
                      <span className="ml-2 inline-block transform transition-all duration-200 opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 3L13 8L8 13M13 8H3" stroke="#18161A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </span>
                  </a>
                ) : (
                  <button
                    className="group mt-11 w-[223px] hover:w-[280px] h-[54px] px-[32px] py-[16px] rounded-[16px] bg-[#D4C7E5] border-2 border-[#D4C7E3] text-[#18161A] font-medium hover:bg-[#D4C7E5]/90 transition-all duration-200 text-center cursor-pointer overflow-hidden"
                    style={{
                      fontSize: "clamp(0.9rem, 2.25vw, 1.125rem)",
                      lineHeight: "clamp(0.9rem, 2.25vw, 1.125rem)",
                      letterSpacing: "-0.144px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span className="inline-flex items-center justify-center">
                      <span>{buttonText}</span>
                      <span className="ml-2 inline-block transform transition-all duration-200 opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 3L13 8L8 13M13 8H3" stroke="#18161A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </span>
                  </button>
                )
              )}

              {showStoreButtons && (
                <div className="flex items-center gap-4 mt-6 justify-center lg:justify-start">
                  <a href="https://apps.apple.com/gb/app/cerina/id1568686266" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/home_page/appstore.svg"
                      alt="App Store"
                      width={120}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=co.cerina.app&gl=GB" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/home_page/playstore.svg"
                      alt="Play Store"
                      width={120}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </a>
                </div>
              )}
            </div>
          )}

          <div
            className={`w-full lg:w-[566px] h-full flex items-center justify-center ${mediaWrapperStyle}`}
          >
            <Image
              src={media}
              alt={title || "Feature image"}
              width={600}
              height={600}
              className={
                hasContent
                  ? "w-full max-w-[400px] sm:max-w-[500px] md:max-w-[550px] 2xl:max-w-[600px]"
                  : "py-8 px-6"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
