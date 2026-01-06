"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";

type VideoCardProps = {
  name: string;
  role: string;
  videoUrl: string;
  thumbnailUrl: string;
  isCenter: boolean;
  opacity: number;
  onPlay: () => void;
  ref?: React.Ref<HTMLDivElement>;
};

const VideoCard: React.FC<VideoCardProps> = ({
  name,
  role,
  videoUrl,
  thumbnailUrl,
  isCenter,
  opacity,
  onPlay,
  ref,
}) => {
  const [thumbnailSrc, setThumbnailSrc] = useState(thumbnailUrl);

  return (
    <div
      ref={ref}
      className="relative flex-shrink-0 transition-opacity duration-500 cursor-pointer w-full h-44 sm:w-72 sm:h-48 md:w-80 md:h-56"
      style={{
        opacity: opacity,
      }}
      onClick={onPlay}
    >
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          borderRadius: "13.79px",
          border: "1.29px solid #7982BA",
          backgroundColor: "#ffffff",
          boxShadow: 'none',
        }}
      >
        {/* Thumbnail Image */}
        <Image
          src={thumbnailSrc}
          alt="Video thumbnail"
          fill
          style={{
            objectFit: 'cover',
            borderRadius: "13.79px",
          }}
          onError={() => {
            if (thumbnailSrc.includes('maxresdefault.jpg')) {
              setThumbnailSrc(thumbnailSrc.replace('maxresdefault.jpg', 'hqdefault.jpg'));
            }
          }}
        />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center hover:scale-110 transition-transform">
            <Image
              src="/play_button.svg"
              alt="Play button"
              width={78}
              height={56}
            />
          </div>
        </div>

        {/* Cerina App User tag at bottom left */}
        <div
          className="absolute flex items-center justify-center bg-white"
          style={{
            bottom: "36px",
            left: "18px",
            padding: "6px 12px",
            borderRadius: "4px",
          }}
        >
          <span
            style={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "1.2",
              color: "#121212",
            }}
          >
            Cerina App User
          </span>
        </div>
      </div>
    </div>
  );
};

type VideoModalProps = {
  videoUrl: string;
  name: string;
  role: string;
  onClose: () => void;
};

const VideoModal: React.FC<VideoModalProps> = ({
  videoUrl,
  name,
  role,
  onClose,
}) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    // Add ESC key listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl">
        {/* Close button */}
        <button
          onClick={onClose}
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
            src={`${videoUrl}?autoplay=1&mute=1`}
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
                {name}
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
                {role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

VideoCard.displayName = 'VideoCard';

const VideoTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<{
    videoUrl: string;
    name: string;
    role: string;
  } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(320);
  const [mounted, setMounted] = useState(false);

  const getTransform = () => {
    if (!mounted || typeof window === 'undefined') return 'translateX(0%)';
    const gap = window.innerWidth < 640 ? 0 : 24;
    if (window.innerWidth < 640) {
      return `translateX(-${activeIndex * 100}%)`;
    } else {
      // Prevent overscroll / whitespace on the right by clamping shift to the max possible
      const containerWidth = carouselRef.current?.parentElement?.clientWidth ?? window.innerWidth;
      const itemWidth = cardWidth;
      const totalWidth = videos.length * itemWidth + Math.max(0, videos.length - 1) * gap;
      const maxShift = Math.max(0, totalWidth - containerWidth);
      const desiredShift = activeIndex * (itemWidth + gap);
      const shift = Math.min(desiredShift, maxShift);

      return `translateX(calc(0% - ${shift}px))`;
    }
  };

  useEffect(() => {
    const updateWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    setMounted(true);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

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
    {
      name: "Wayne Stones",
      role: "THERAPIST",
      videoUrl: "https://www.youtube.com/embed/f-2oVQggLm0",
      thumbnailUrl: "https://img.youtube.com/vi/f-2oVQggLm0/maxresdefault.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "PATIENT",
      videoUrl: "https://www.youtube.com/embed/_p3HgOHlEkk",
      thumbnailUrl: "https://img.youtube.com/vi/_p3HgOHlEkk/maxresdefault.jpg",
    },
    {
      name: "Michael Brown",
      role: "DOCTOR",
      videoUrl: "https://www.youtube.com/embed/jMR1P3asOO4",
      thumbnailUrl: "https://img.youtube.com/vi/jMR1P3asOO4/maxresdefault.jpg",
    },
  ];

  const getOpacity = (index: number) => {
    return 1;
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX);
    setScrollLeft(activeIndex);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const distance = Math.abs(startX - x);
    // Only consider it a drag if moved more than 5 pixels
    if (distance > 5) {
      setHasDragged(true);
    }
    // Calculate walk based on drag distance - lower divisor = more sensitive
    const walk = (startX - x) / 100;
    const newIndex = Math.round(scrollLeft + walk);
    const clampedIndex = Math.max(0, Math.min(videos.length - 1, newIndex));
    setActiveIndex(clampedIndex);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Reset hasDragged after a short delay to prevent click from firing
    setTimeout(() => setHasDragged(false), 100);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setHasDragged(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.touches[0].pageX);
    setScrollLeft(activeIndex);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const x = e.touches[0].pageX;
    const distance = Math.abs(startX - x);
    // Only consider it a drag if moved more than 5 pixels
    if (distance > 5) {
      setHasDragged(true);
    }
    // Calculate walk based on drag distance - lower divisor = more sensitive
    const walk = (startX - x) / 100;
    const newIndex = Math.round(scrollLeft + walk);
    const clampedIndex = Math.max(0, Math.min(videos.length - 1, newIndex));
    setActiveIndex(clampedIndex);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Reset hasDragged after a short delay to prevent click from firing
    setTimeout(() => setHasDragged(false), 100);
  };

  const handleWheel = (e: React.WheelEvent) => {
    // Ignore while dragging with mouse/touch
    if (isDragging) return;

    // Prefer horizontal delta (trackpad horizontal swipe produces deltaX)
    const delta = Math.abs(e.deltaX) > 0 ? e.deltaX : e.deltaY;
    // Small threshold to avoid accidental tiny scrolls
    if (Math.abs(delta) < 10) return;

    e.preventDefault();

    const dir = delta > 0 ? 1 : -1; // positive = scroll right -> next
    setActiveIndex((prev) => {
      const next = prev + dir;
      return Math.max(0, Math.min(videos.length - 1, next));
    });
  };

  const handleVideoPlay = (video: {
    videoUrl: string;
    name: string;
    role: string;
  }) => {
    // Only play if we didn't drag
    if (!hasDragged) {
      setSelectedVideo(video);
    }
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(videos.length - 1, prev + 1));
  };

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        {/* Heading */}
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: "clamp(32px, 8vw, 56px)",
            lineHeight: "100%",
            letterSpacing: "0px",
            color: "#121212",
          }}
        >
          Hear What People
          <br />
          Say About Us
        </h2>

        {/* Subtitle */}
        <p
          className="text-center mb-12"
          style={{
            fontFamily: "Montserrat",
            fontWeight: 400,
            fontSize: "clamp(14px, 3vw, 18px)",
            lineHeight: "26px",
            letterSpacing: "0px",
            color: "#000000",
          }}
        >
          Honest feedback from those who use our platform every day. Real
          experiences, real impact.
        </p>

        {/* Video Carousel */}
        <div className="relative px-0 sm:px-16">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 hover:bg-gray-50 text-[#121212] border border-[#d1d1d1]"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={activeIndex === videos.length - 1}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 hover:bg-gray-50 text-[#121212] border border-[#d1d1d1]"
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className={`relative overflow-hidden ${activeIndex > 0 ? 'before:hidden sm:before:block before:absolute before:inset-y-0 before:left-0 before:w-[10%] before:bg-gradient-to-r before:from-white/70 before:to-transparent before:pointer-events-none before:z-10' : ''} ${activeIndex < videos.length - 1 ? 'after:hidden sm:after:block after:absolute after:inset-y-0 after:right-0 after:w-[10%] after:bg-gradient-to-l after:from-white/70 after:to-transparent after:pointer-events-none after:z-10' : ''}`}
          >
            <div
              ref={carouselRef}
              className="flex gap-0 sm:gap-6 transition-transform duration-300 ease-out select-none"
              style={{
                transform: getTransform(),
                cursor: isDragging ? "grabbing" : "grab",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onWheel={handleWheel}
            >
              {videos.map((video, index) => (
                <VideoCard
                  key={index}
                  ref={index === 0 ? cardRef : undefined}
                  name={video.name}
                  role={video.role}
                  videoUrl={video.videoUrl}
                  thumbnailUrl={video.thumbnailUrl}
                  isCenter={index === activeIndex}
                  opacity={getOpacity(index)}
                  onPlay={() => handleVideoPlay(video)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex sm:hidden justify-center gap-3 mt-8">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className="transition-all duration-300"
              style={{
                width: index === activeIndex ? "32px" : "12px",
                height: "12px",
                borderRadius: "6px",
                backgroundColor:
                  index === activeIndex ? "#7982BA" : "#D9D9D9",
              }}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          videoUrl={selectedVideo.videoUrl}
          name={selectedVideo.name}
          role={selectedVideo.role}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default VideoTestimonials;
