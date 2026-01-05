"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BookDemoModal from "../BookDemoModal";

export default function Footer() {
  const [selectedVideo, setSelectedVideo] = useState<{
    videoUrl: string;
    name: string;
    role: string;
  } | null>(null);
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const videos = [
    {
      name: "Casey Lebron",
      role: "PATIENT",
      videoUrl: "https://www.youtube.com/embed/pIwfRuNw5tE",
      thumbnailUrl: "https://img.youtube.com/vi/pIwfRuNw5tE/maxresdefault.jpg",
    },
    {
      name: "Katie Foden",
      role: "JOONAS",
      videoUrl: "https://www.youtube.com/embed/2sUWlhWH_kc",
      thumbnailUrl: "https://img.youtube.com/vi/2sUWlhWH_kc/maxresdefault.jpg",
    },
  ];
  return (
    <footer className="w-full bg-[#FBF9F6] border-t border-[#EFEFEF] py-12">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Hero + Cards (span 6) */}
          <div className="lg:col-span-5">
            <h3
              className="font-medium text-black align-middle tracking-normal mb-4"
              style={{
                fontFamily: "Montserrat",
                lineHeight: "48px",
                fontSize: "clamp(24px, 2.25vw, 36px)",
              }}
            >
              Explore how Cerina adapts to your pathway
            </h3>

            <div className="mb-6">
              <button
                type="button"
                onClick={() => setIsBookDemoOpen(true)}
                className="inline-block bg-[#1A140E] text-white border-2 border-[#1A140E] rounded-[16px] px-[32px] py-[16px] font-medium leading-[18px] tracking-[-0.16px] text-center hover:opacity-90 cursor-pointer"
                style={{
                  width: "186px",
                  height: "50px",
                  opacity: 1,
                  fontFamily: "Montserrat",
                  fontSize: "clamp(13px, 1vw, 16px)",
                }}
              >
                Book a Demo
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-6">
              <div
                className="bg-[#ECEFF3]/70 rounded-[15px] p-4 shadow-sm border border-[#F1F1F3] flex flex-col justify-between cursor-pointer"
                style={{ width: "217px", height: "172px" }}
                onClick={() => setSelectedVideo(videos[0])}
              >
                <div className="mb-2 flex justify-between items-center">
                  <span
                    className="text-[18px] font-medium text-[#121212] leading-[17px] tracking-normal align-middle"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    BBC Spotlight
                  </span>
                  <Image
                    src="/home_page/footer_video.svg"
                    alt="video icon"
                    width={14}
                    height={14}
                  />
                </div>
                <p
                  className="text-[13px] font-normal text-[#121212] leading-[17px] tracking-normal"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Discover how Cerina is transforming access to mental health
                  care, as featured on BBC Spotlight.
                </p>
              </div>

              <div
                className="bg-[#ECEFF3]/70 rounded-[15px] p-4 shadow-sm border border-[#F1F1F3] flex flex-col justify-between cursor-pointer"
                style={{ width: "217px", height: "172px" }}
                onClick={() => setSelectedVideo(videos[1])}
              >
                <div className="mb-2 flex justify-between items-center">
                  <span
                    className="text-[18px] font-medium text-[#121212] leading-[17px] tracking-normal align-middle"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Quick demo
                  </span>
                  <Image
                    src="/home_page/footer_video.svg"
                    alt="video icon"
                    width={14}
                    height={14}
                  />
                </div>
                <p
                  className="text-[13px] font-normal text-[#121212] leading-[17px] tracking-normal"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Take a 2-minute tour of Cerina’s platform and see how easily
                  it adapts to your service pathway.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Links columns (span 6) */}
          <div className="lg:col-span-7 lg:ml-10 flex flex-col justify-start">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-30">
              <div>
                <h4
                  className="font-semibold text-black align-middle tracking-normal mb-3"
                  style={{
                    fontFamily: "Montserrat",
                    lineHeight: "25px",
                    fontSize: "clamp(14.4px, 1.2375vw, 19.8px)",
                  }}
                >
                  Company
                </h4>
                <ul
                  className="space-y-2 text-[16px] font-medium text-black leading-[18px] tracking-normal align-middle"
                  style={{ fontFamily: "Montserrat" }}
                >
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <a href="https://cerinahealth.com/about">About Us</a>
                  </li>
                  <li>
                    <a href="https://cerinahealth.com/how-it-works">How it Works</a>
                  </li>
                  <li>
                    <Link href="/business-solution">Business Solutions</Link>
                  </li>
                  <li>
                    <Link href="/individual-solution">Individual Solutions</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4
                  className="font-semibold text-black align-middle tracking-normal mb-3"
                  style={{
                    fontFamily: "Montserrat",
                    lineHeight: "25px",
                    fontSize: "clamp(14.4px, 1.2375vw, 19.8px)",
                  }}
                >
                  Resources
                </h4>
                <ul
                  className="space-y-2 text-[16px] font-medium text-black leading-[18px] tracking-normal align-middle"
                  style={{ fontFamily: "Montserrat" }}
                >
                  <li>
                    <Link href="/case-studies">Case Studies</Link>
                  </li>
                  <li>
                    <a href="https://cerinahealth.com/research">Research</a>
                  </li>
                  <li>
                    <a href="https://blog.cerinahealth.com/">Blogs</a>
                  </li>
                  <li>
                    <Link href="/#testimonials">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="/#faq">FAQ</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4
                  className="font-semibold text-black align-middle tracking-normal mb-3"
                  style={{
                    fontFamily: "Montserrat",
                    lineHeight: "25px",
                    fontSize: "clamp(14.4px, 1.2375vw, 19.8px)",
                  }}
                >
                  Policies
                </h4>
                <ul
                  className="space-y-2 text-[16px] font-medium text-black leading-[18px] tracking-normal align-middle"
                  style={{ fontFamily: "Montserrat" }}
                >
                  <li>
                    <a href="https://cerinahealth.com/privacy-policy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="https://cerinahealth.com/img/Terms&Conditions.pdf">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="https://cerinahealth.com/img/cp.pdf">Cookie Policy</a>
                  </li>
                  <li>
                    <a href="https://cerinahealth.com/clinicalsafety.html">Risk Management</a>
                  </li>
                  <li>
                    <a href="https://cerinahealth.com/accessibilitystatement.html">
                      Accessibility Management
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social & badges row */}
            <div className="flex items-center justify-start gap-4 mt-4">
              <div className="flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap">
                <a href="https://apps.apple.com/gb/app/cerina/id1568686266" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/home_page/appstore.svg"
                    alt="App Store"
                    width={120}
                    height={40}
                    className="h-8 sm:h-10 w-auto"
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=co.cerina.app&gl=GB" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/home_page/playstore.svg"
                    alt="Play Store"
                    width={120}
                    height={40}
                    className="h-8 sm:h-10 w-auto"
                  />
                </a>
                <Image
                  src="/home_page/nhs.svg"
                  alt="NHS"
                  width={40}
                  height={40}
                  className="h-8 sm:h-10 w-auto"
                />
                <Image
                  src="/home_page/orcha.svg"
                  alt="ORCHA"
                  width={40}
                  height={40}
                  className="h-8 sm:h-10 w-auto"
                />
                <Image
                  src="/home_page/iso.svg"
                  alt="ISO"
                  width={40}
                  height={40}
                  className="h-8 sm:h-10 w-auto"
                />
                <Image
                  src="/home_page/cyber.svg"
                  alt="Cyber"
                  width={40}
                  height={40}
                  className="h-8 sm:h-10 w-auto"
                />
                <Image
                  src="/home_page/ukca.gif"
                  alt="UKCA"
                  width={40}
                  height={40}
                  className="h-8 sm:h-10 w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mt-8">
          <span className="text-sm text-gray-600 text-center sm:text-left">NoSuffering Ltd. Copyright 2025. All rights reserved.</span>
          <div className="flex items-center justify-center sm:justify-end gap-3">
            <Image
              src="/home_page/linkedin.svg"
              alt="Linkedin"
              width={20}
              height={20}
            />
            <Image
              src="/home_page/insta.svg"
              alt="Instagram"
              width={20}
              height={20}
            />
            <Image
              src="/home_page/youtube.svg"
              alt="YouTube"
              width={20}
              height={20}
            />
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
            onClick={handleBackdropClick}
          >
            <div className="relative w-full max-w-4xl">
              {/* Close button */}
              <button
                onClick={handleCloseModal}
                className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-gray-200 transition-colors z-10"
                aria-label="Close video"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L5 15M5 5L15 15"
                    stroke="#121212"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* Video Container */}
              <div
                className="relative bg-black rounded-lg overflow-hidden"
                style={{
                  borderRadius: "13.79px",
                }}
              >
                <iframe
                  src={`${selectedVideo.videoUrl}?autoplay=1&mute=1`}
                  className="w-full h-auto"
                  style={{
                    maxHeight: "80vh",
                    aspectRatio: "16/9",
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                {/* Name tag */}
                <div
                  className="absolute flex items-center bg-white"
                  style={{
                    width: "141.29px",
                    height: "48.92px",
                    bottom: "60px",
                    left: "20px",
                    gap: "8.82px",
                    borderRadius: "4.07px",
                    paddingLeft: "6.78px",
                  }}
                >
                  <Image
                    src="/home_page/video_tag_icon.svg"
                    alt="tag icon"
                    width={24}
                    height={24}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        fontSize: "12.68px",
                        lineHeight: "16.07px",
                        letterSpacing: "0px",
                        color: "#121212",
                      }}
                    >
                      {selectedVideo.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "5.76px",
                        lineHeight: "16.07px",
                        letterSpacing: "0px",
                        color: "#121212",
                      }}
                    >
                      {selectedVideo.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Book a Demo Modal */}
        <BookDemoModal
          isOpen={isBookDemoOpen}
          onClose={() => setIsBookDemoOpen(false)}
        />
      </div>
    </footer>
  );
}
