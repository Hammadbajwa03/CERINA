import React, { useState } from "react";
import Image from "next/image";

// VideoCard component
export const VideoCard: React.FC<{
  name: string;
  role: string;
  videoUrl: string;
  thumbnailUrl: string;
  isCenter: boolean;
  opacity: number;
  onPlay: () => void;
  ref?: React.Ref<HTMLDivElement>;
}> = ({ name, role, videoUrl, thumbnailUrl, isCenter, opacity, onPlay, ref }) => {
  const [thumbnailSrc, setThumbnailSrc] = useState(thumbnailUrl);

  return (
    <div
      ref={ref}
      className="relative flex-shrink-0 transition-opacity duration-500 cursor-pointer w-full h-full"
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
          className="object-cover"
        />

        {/* Play Button Overlay */}
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
      </div>
    </div>
  );
};

// VideoModal component
export const VideoModal: React.FC<{
  videoUrl: string;
  name: string;
  role: string;
  onClose: () => void;
}> = ({ videoUrl, name, role, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-6xl">
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
        </div>
      </div>
    </div>
  );
};