"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isWhoWeServeOpen, setIsWhoWeServeOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const whoWeServe = [
    {
      id: "organisations",
      label: "Organisations",
      image: "/home_page/organisations.png",
    },
    {
      id: "individuals",
      label: "Individuals",
      image: "/home_page/individuals.png",
    },
    {
      id: "universities",
      label: "Universities",
      image: "/home_page/Universities.png",
    },
  ];

  const products = [
    {
      id: "cerina-app",
      label: "Cerina App",
      image: "/home_page/cerina-logo.png",
    },
    {
      id: "ai-patient-flow",
      label: "AI Patient-Flow",
      image: "/home_page/ai-patient-flow.png",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className="
          z-50 absolute top-[20px] sm:top-[33px] left-1/2 -translate-x-1/2
          w-[calc(100vw-16px)] sm:w-[calc(100vw-32px)] md:w-[calc(100vw-64px)]
          lg:w-[calc(100vw-128px)] xl:w-[calc(100vw-202px)]
          max-w-[1452px]
          h-[64px] sm:h-[72px] md:h-[88px]
          rounded-[1010px]
          shadow-[0px_17px_45.2px_0px_#0000000D]
          bg-white/80
          md:backdrop-blur-[50px]
          isolate
        "
        style={{
          WebkitBackdropFilter: "blur(50px)",
          backdropFilter: "blur(50px)",
        }}
      >
        <div className="relative max-w-[1240px] mx-auto px-4 h-full flex items-center justify-between">
          {/* LOGO */}
          <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Cerina Logo"
                width={120}
                height={48}
                priority
                unoptimized
                className="h-8 w-auto sm:h-10 lg:h-12"
                style={{ WebkitTransform: "translateZ(0)" }}
              />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`lg:hidden p-2 bg-white/80 rounded-full shadow-lg ml-auto ${mounted ? "opacity-100" : "opacity-0"
              }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-6 ml-auto text-sm text-gray-800">
            <a href="https://cerinahealth.com/about" target="_blank">
              About us
            </a>

            {/* WHO WE SERVE */}
            <div className="relative group">
              <span className="flex items-center gap-1 cursor-pointer">
                Who We Serve
                <Image src="/arrow_down.svg" alt="" width={14} height={14} />
              </span>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white rounded-lg shadow-lg py-2">
                  {whoWeServe.map((item) => (
                    <a
                      key={item.id}
                      href="#"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
                    >
                      <Image
                        src={item.image}
                        alt={item.label}
                        width={32}
                        height={32}
                        unoptimized
                        style={{ WebkitTransform: "translateZ(0)" }}
                      />
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* PRODUCTS */}
            <div className="relative group">
              <span className="flex items-center gap-1 cursor-pointer">
                Our Products
                <Image src="/arrow_down.svg" alt="" width={14} height={14} />
              </span>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white rounded-lg shadow-lg py-2">
                  {products.map((item) => (
                    <a
                      key={item.id}
                      href="#"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
                    >
                      <Image
                        src={item.image}
                        alt={item.label}
                        width={24}
                        height={24}
                        unoptimized
                        style={{ WebkitTransform: "translateZ(0)" }}
                      />
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="https://blog.cerinahealth.com/" target="_blank">
              Blog
            </a>
          </nav>
        </div>
      </header>

      {/* BACKDROP */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white z-50 transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <X />
        </button>
      </div>
    </>
  );
}
