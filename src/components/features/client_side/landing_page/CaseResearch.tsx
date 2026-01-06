"use client";

import React from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  image: string;
  gradient: string;
  width?: number;
  height?: number;
  href: string;
};

const InfoCard: React.FC<CardProps> = ({
  title,
  description,
  image,
  gradient,
  width = 609,
  height = 457,
  href,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-[14.53px] border overflow-hidden w-full h-auto"
      style={{
        borderRadius: "14.53px",
        border: "0.91px solid #898989",
        background: gradient,
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      <div className="p-4 md:p-6 flex flex-col h-full">
        <div className="flex items-center gap-4">

          <h3
            className="font-semibold text-[#121212]"
            style={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: "clamp(24px, 5vw, 32px)",
              lineHeight: "clamp(30px, 8vw, 45.77px)",
            }}
          >
            {title}
          </h3>
        </div>

        <p
          className="text-[#121212] mt-4 whitespace-pre-line"
          style={{
            fontFamily: "Montserrat",
            fontWeight: 400,
            fontSize: "clamp(14px, 3vw, 16px)",
            lineHeight: "clamp(20px, 4vw, 23.61px)",
          }}
        >
          {description}
        </p>

        <div className="mt-auto overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt="card visual"
              width={600}
              height={260}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-[200px] md:h-[260px] mt-6 object-cover rounded-b-[14.53px] transition-transform duration-300 group-hover:scale-105"
            />
          ) : null}
        </div>
      </div>
    </a>
  );
};

const CaseResearch: React.FC = () => {
  return (
    <div className="w-full max-w-[1242px] mx-auto px-4 py-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-6">
        <InfoCard
          title="Case Studies"
          description={`From pilots to scaled services, Cerina adapts to different pathways\nwhile keeping support effective and human.`}
          image="/home_page/case_study_icon.svg"
          gradient="linear-gradient(180deg, #D7C7E2 0%, #FAE9D6 100%), linear-gradient(0deg, #D4C7E3, #D4C7E3)"
          href="https://blog.cerinahealth.com/"
        />

        <InfoCard
          title="Research"
          description={`Our platform is developed with clinical experts and evaluated using\nRCTs to ensure safety and real-world effectiveness`}
          image="/home_page/research_icon.svg"
          gradient="linear-gradient(180deg, #DDAC7C 0%, #FAE9D6 100%), linear-gradient(0deg, #DDAC7C, #DDAC7C)"
          width={608}
          height={456}
          href="https://cerinahealth.com/research"
        />
      </div>
    </div>
  );
};

export default CaseResearch;
