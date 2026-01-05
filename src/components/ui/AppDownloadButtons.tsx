"use client";

import Image from "next/image";

export default function AppDownloadButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      {/* App Store Button */}
      <a
        href="https://apps.apple.com/gb/app/cerina/id1568686266"
        className="w-full sm:w-[343px] h-[60px] flex items-center justify-center gap-2 text-black font-medium hover:opacity-90 transition-opacity"
        style={{
          borderRadius: '16px',
          border: '2px solid #DDAC7C',
          backgroundColor: '#DDAC7C',
          padding: '18px 25px',
          fontSize: 'clamp(0.8rem, 0.9rem, 1rem)',
        }}
      >
        <Image
          src="/apple_logo.svg"
          alt="Apple Logo"
          width={20}
          height={20}
        />
        Download on App Store
      </a>

      {/* Google Play Button */}
      <a
        href="https://play.google.com/store/apps/details?id=co.cerina.app&gl=GB"
        className="w-full sm:w-[363px] h-[60px] flex items-center justify-center gap-2 text-black font-medium hover:opacity-90 transition-opacity"
        style={{
          borderRadius: '16px',
          border: '2px solid #DDAC7C',
          backgroundColor: 'rgba(221, 172, 124, 0.2)',
          padding: '18px 25px',
          fontSize: 'clamp(0.8rem, 0.9rem, 1rem)',
        }}
      >
        <Image
          src="/play_store_logo.svg"
          alt="Google Play Logo"
          width={20}
          height={20}
        />
        Download on Google Play
      </a>
    </div>
  );
}