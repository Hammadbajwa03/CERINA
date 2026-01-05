"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import BookDemoModal from "../BookDemoModal";

export default function HeroSection() {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  // use a ref for the paused flag so the animation loop (closure) always reads the latest value
  const isPausedRef = useRef(false);
  const [, setRenderTick] = useState(0); // keep a tiny state if other parts depend on pause rendering
  const trackRef = useRef<HTMLDivElement>(null);

  const handleBookDemo = () => {
    setIsBookDemoOpen(true);
  };

  const sliderIcons = [
    'cyber.svg',
    'dcbt.svg',
    'interreg.svg',
    'iso.svg',
    'medicine.svg',
    'medilink.svg',
    'nhs.svg',
    'orcha.svg',
    'gdpa.svg',
    'msduk.svg'
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    const speed = 1; // pixels per frame, adjust for speed
    let animationId: number;

    const animate = () => {
      if (!isPausedRef.current) {
        position -= speed;
        const halfWidth = track.scrollWidth / 2;
        if (position <= -halfWidth) {
          position += halfWidth; // instead of = 0, add halfWidth to continue seamlessly
        }
        track.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div className=" min-h-screen  ">
        {/* Hero Section */}
        <main className="relative">
          {/* Background Image Container */}
          <div className="relative min-h-screen h-auto lg:h-screen lg:min-h-[600px] overflow-hidden flex flex-col">
            {/* Hero Image */}
            <div className="absolute inset-0">
              <Image
                src="/sky.svg"
                alt="Happy couple on beach"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex items-center min-h-full">
              <div className="ml-4 md:ml-8 lg:ml-20 xl:ml-28 flex items-center gap-8 w-full max-w-7xl mx-auto">
                <div
                  className="flex-1 pt-6 pr-6 pb-12 md:pt-8 md:pr-8 md:pb-16 lg:pt-10 lg:pr-10 lg:pb-20 max-w-[634px] pl-0"
                  style={{
                    borderColor: "#D4D4D4",

                    maxHeight: "348px",
                  }}
                >
                  {/* Main Heading */}
                  {/* Mobile GIF */}
                  <div className="block lg:hidden mt-20 mb-6 flex justify-center w-full">
                    <Image
                      src="/home_page/hero.gif"
                      alt="Hero Animation"
                      width={500}
                      height={500}
                      className="max-w-full h-auto"
                      unoptimized
                    />
                  </div>
                  <h1
                    className="mb-2 md:mb-4 font-semibold"
                    style={{
                      color: "#121212",
                      fontSize: "clamp(1.62rem, 8vw, 2.835rem)",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                  >
                    Digital mental health, customised to your service and the communities you support.

                  </h1>

                  {/* Subtitle */}
                  <p
                    className="text-[#121212] mb-4 md:mb-6 font-medium"
                    style={{
                      fontSize: "clamp(0.81rem, 3vw, 0.911rem)",
                      lineHeight: "clamp(1.5rem, 3vw, 1.6875rem)",
                      letterSpacing: "0%",
                    }}
                  >
                    Clinically grounded support, guided programmes and AI-powered tools - all in one safe, accessible and easy to navigate platform.
                  </p>

                  {/* Book a Demo CTA */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      type="button"
                      onClick={handleBookDemo}
                      className="w-[176px] h-[48px] px-[30px] py-[15px] rounded-[16px] bg-[#DDAC7C] border-2 border-[#DDAC7C] text-[#18161A] font-medium hover:bg-[#eda965] hover:border-[#eda965] transition-colors duration-200 whitespace-nowrap text-center cursor-pointer"
                      style={{
                        fontSize: "clamp(0.74rem, 1.7vw, 0.85rem)",
                        lineHeight: "clamp(0.74rem, 1.7vw, 0.85rem)",
                        letterSpacing: "-0.136px",
                      }}
                    >
                      Book a Demo
                    </button>
                  </div>

                </div>
                <div className="flex-1 hidden lg:flex justify-center items-center">
                  <Image
                    src="/home_page/hero.gif"
                    alt="Hero Image"
                    width={500}
                    height={500}
                    className="max-w-full h-auto"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Feature Row */}
            <div className="relative mt-auto lg:absolute lg:bottom-5 lg:mt-0 left-0 right-0 z-10 pb-8 lg:pb-0">
              <div className="ml-4 md:ml-8 lg:ml-20 xl:ml-28 flex items-center gap-4 md:gap-8">
                <Image
                  src="/feature_bbc.svg"
                  alt="Featured on BBC"
                  width={248}
                  height={60}
                  className="w-20 md:w-62 h-auto"
                />
                <div className="flex-1 overflow-hidden">
                  <div
                    className="flex gap-4 md:gap-8"
                    ref={trackRef}
                    onMouseEnter={() => {
                      isPausedRef.current = true;
                      setRenderTick((t) => t + 1);
                    }}
                    onMouseLeave={() => {
                      isPausedRef.current = false;
                      setRenderTick((t) => t + 1);
                    }}
                  >
                    {sliderIcons.concat(sliderIcons).concat(sliderIcons).concat(sliderIcons).map((icon, index) => (
                      <Image
                        key={`${icon}-${index}`}
                        src={`/slider_icons/${icon}`}
                        alt={icon.replace('.svg', '')}
                        width={64}
                        height={64}
                        className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Book a Demo Modal */}
      <BookDemoModal
        isOpen={isBookDemoOpen}
        onClose={() => setIsBookDemoOpen(false)}
      />
    </>
  );
}
