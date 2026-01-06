"use client";
import React from "react";
import Image from "next/image";

const AIIntakeSection = () => {
  return (
    <div className="relative w-full py-6 md:py-9 lg:py-16 px-3 md:px-6 lg:px-12 overflow-hidden mb-12">
      {/* GIF positioned absolutely to float above the background on desktop */}
      <div className="hidden lg:flex absolute inset-0 justify-center items-center pointer-events-none z-10">
        <div className="relative w-[350px] h-[650px] flex items-center justify-center">
          <Image
            src="/home_page/section4-anim.gif"
            alt="AI Intake Animation"
            width={350}
            height={650}
            sizes="(max-width: 1024px) 100vw, 350px"
            className="w-full h-full object-contain"
            unoptimized
          />
        </div>
      </div>

      {/* Background with text sections */}
      <div className="relative z-0 w-full max-w-6xl mx-auto bg-[#F5EFE7] rounded-3xl px-5 md:px-10 lg:px-14 pt-3 pb-3 md:pt-5 md:pb-5 lg:pt-16 lg:pb-16 flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-100">

        {/* Left Section */}
        <div className="flex-1 space-y-6 md:space-y-9">
          {/* AI Intake */}
          <div className="space-y-2">
            <Image
              src="/home_page/intake_images/ai.svg"
              alt="AI Intake Icon"
              width={28}
              height={28}
            />
            <h3 className="text-base md:text-lg font-bold text-gray-900">AI intake</h3>
            <p className="text-[11px] md:text-xs text-gray-700 leading-relaxed max-w-xs">
              Express yourself naturally - our interactive AI support understands what you are experiencing through an onboarding conversation, and creates a personalised pathway to support your journey.
            </p>
          </div>

          {/* Personalised User Journeys */}
          <div className="space-y-2">
            <Image
              src="/home_page/intake_images/personal.svg"
              alt="Personalised User Journeys Icon"
              width={28}
              height={28}
            />
            <h3 className="text-base md:text-lg font-bold text-gray-900">Personalised user journeys</h3>
            <p className="text-[11px] md:text-xs text-gray-700 leading-relaxed max-w-xs">
              With 14 parameters and 55 distinct pathways, Cerina listens to personal scenarios and therapy preferences to build journeys that feel deeply personalised and genuinely resonate.
            </p>
          </div>
        </div>

        {/* Center - GIF - visible on mobile, hidden on desktop */}
        <div className="md:hidden flex justify-center items-center py-6 px-4">
          <div className="relative w-[220px] h-[400px] max-w-full flex items-center justify-center">
            <Image
              src="/home_page/section4-anim.gif"
              alt="AI Intake Animation"
              width={220}
              height={400}
              sizes="100vw"
              className="w-full h-full object-contain"
              unoptimized
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 space-y-6 md:space-y-9">
          {/* Customisable Integration */}
          <div className="space-y-2">
            <Image
              src="/home_page/intake_images/custom.svg"
              alt="Customisable Integration Icon"
              width={28}
              height={28}
            />
            <h3 className="text-base md:text-lg font-bold text-gray-900">Customisable integration</h3>
            <p className="text-[11px] md:text-xs text-gray-700 leading-relaxed max-w-xs">
              Cerina co-designs an onboarding process that fits into your existing care pathways and organisational structure with minimal description
            </p>
          </div>

          {/* Voice AI */}
          <div className="space-y-2">
            <Image
              src="/home_page/intake_images/voice.svg"
              alt="Voice AI Icon"
              width={28}
              height={28}
            />
            <h3 className="text-base md:text-lg font-bold text-gray-900">Voice AI (in beta)</h3>
            <p className="text-[11px] md:text-xs text-gray-700 leading-relaxed max-w-xs">
              A calm, natural voice interface that is reshaping how digital therapies are delivered, offering psychoeducation through interactive conversations and supporting emotional expression in a near-real-life experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIIntakeSection;
