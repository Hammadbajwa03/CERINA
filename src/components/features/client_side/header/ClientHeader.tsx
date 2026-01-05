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
    { id: 'organisations', label: 'Organisations', icon: '/home_page/icon_building.svg', hoverClass: 'hover:bg-gray-100', image: '/home_page/organisations.png' },
    { id: 'individuals', label: 'Individuals', icon: '/home_page/icon_person.svg', hoverClass: 'hover:bg-gray-100', image: '/home_page/individuals.png' },
    { id: 'universities', label: 'Universities', icon: '/home_page/icon_university.svg', hoverClass: 'hover:bg-gray-100', image: '/home_page/Universities.png' },
  ];

  const products = [
    { id: 'cerina-app', label: 'Cerina App', icon: '/home_page/icon_spinner.svg', hoverClass: 'hover:bg-gray-100', image: '/home_page/cerina-logo.png' },
    { id: 'ai-patient-flow', label: 'AI Patient-Flow', icon: '/home_page/icon_chat.svg', hoverClass: 'hover:bg-gray-100', image: '/home_page/ai-patient-flow.png' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>

      <header
        className="z-50 absolute top-[20px] sm:top-[33px] left-1/2 transform -translate-x-1/2 w-[calc(100vw-16px)] sm:w-[calc(100vw-32px)] md:w-[calc(100vw-64px)] lg:w-[calc(100vw-128px)] xl:w-[calc(100vw-202px)] max-w-[1452px] h-[64px] sm:h-[72px] md:h-[88px] rounded-[1010px] shadow-[0px_17px_45.2px_0px_#0000000D] backdrop-blur-[50px] bg-white/70"
      >
        <div className="relative max-w-[1240px] mx-auto px-4 h-[64px] sm:h-[72px] md:h-[88px] flex justify-between items-center">
          {/* Logo */}
          <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Cerina Logo"
                width={120}
                height={48}
                className="h-8 w-auto sm:h-10 lg:h-12"
                priority
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 bg-white/80 rounded-full shadow-lg backdrop-blur-md transition-opacity duration-300 ml-auto ${
              mounted ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-4 2xl:gap-6 ml-auto text-gray-800 font-normal text-[0.8rem] xl:text-[0.875rem] leading-[1.25rem]">

            <a
              href="https://cerinahealth.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap hover:text-gray-950 transition-colors"
            >
              About us
            </a>
              <div className="relative group">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="flex items-center gap-1 whitespace-nowrap"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Who We Serve
                  <Image src="/arrow_down.svg" alt="arrow" width={16} height={16} className="w-3 h-3 xl:w-4 xl:h-4" />
                </a>

                {/* Dropdown - appears on hover */}
                <div className="pointer-events-none opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity duration-150 absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[280px] bg-white rounded-lg shadow-lg z-50">
                  <div className="py-2">
                  {whoWeServe.map((item) => (
                    <a
                      key={item.id}
                      className={`flex items-center gap-3 px-4 py-2 ${item.hoverClass || 'hover:bg-gray-100'} transition-colors text-[clamp(0.55rem,0.8vw,0.65rem)] text-gray-800 cursor-pointer`}
                      href={item.id === 'organisations' ? 'https://cerinahealth.com/organisations' : item.id === 'individuals' ? 'https://cerinahealth.com/app' : 'https://cerinahealth.com/universities'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="w-7 h-7 rounded-md border flex items-center justify-center bg-gray-50 overflow-hidden">
                        {item.image ? (
                          <Image src={item.image} alt={item.label} width={32} height={32} className={`object-cover ${item.id === 'universities' ? 'w-8 h-8 scale-110' : 'w-5 h-5'}`} />
                        ) : (
                          <Image src={item.icon} alt={item.label} width={14} height={14} />
                        )}
                      </span>
                      {item.label}
                    </a>
                  ))}
                  </div>
                </div>
              </div>
            <div className="relative group">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="flex items-center gap-1 whitespace-nowrap"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Our Products
                <Image src="/arrow_down.svg" alt="arrow" width={16} height={16} className="w-3 h-3 xl:w-4 xl:h-4" />
              </a>

              {/* Dropdown - appears on hover */}
              <div className="pointer-events-none opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity duration-150 absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[160px] bg-white rounded-lg shadow-lg z-50">
                <div className="py-2">
                  {products.map((item) => (
                    <a
                      key={item.id}
                      className={`flex items-center gap-3 px-4 py-2 ${item.hoverClass || 'hover:bg-gray-100'} transition-colors text-[clamp(0.55rem,0.8vw,0.65rem)] text-gray-800 cursor-pointer`}
                      href={item.id === 'cerina-app' ? 'https://cerinahealth.com/app' : 'https://cerinahealth.com/ai-triaging'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="w-7 h-7 rounded-md border flex items-center justify-center bg-gray-50 overflow-hidden">
                        {item.image ? (
                          <Image src={item.image} alt={item.label} width={20} height={20} className="object-cover" />
                        ) : (
                          <Image src={item.icon} alt={item.label} width={14} height={14} />
                        )}
                      </span>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <a
              href="https://cerinahealth.com/research"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap hover:text-gray-950 transition-colors"
            >
             Research
            </a>

            <a href="https://blog.cerinahealth.com/" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap hover:text-gray-950 transition-colors">Blog</a>
            <a
              href="https://cerinahealth.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 xl:ml-4 h-[40px] xl:h-[48px] 2xl:h-[60px] px-[18px] xl:px-[24px] 2xl:px-[35px] py-[10px] xl:py-[12px] 2xl:py-[18px] rounded-[16px] bg-[#DDAC7C33] border-2 border-[#DDAC7C] text-[#18161A] font-semibold flex items-center gap-[6px] xl:gap-[8px] 2xl:gap-[10px] text-xs xl:text-sm 2xl:text-base whitespace-nowrap hover:bg-[#DDAC7C] transition-colors duration-200"
            >
              <Image src="/arrow_right.svg" alt="arrow" width={16} height={16} className="w-3 h-3 xl:w-4 xl:h-4" />
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 lg:hidden"
          onClick={() => {
            setIsOpen(false);
            setIsWhoWeServeOpen(false);
            setIsProductsOpen(false);
          }}
        />
      )}

      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-80 h-[100vh] z-[999] lg:hidden transform transition-transform duration-300 ease-in-out bg-white
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          shadow-2xl border-l border-white/20`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full shadow-lg backdrop-blur-md z-10"
          onClick={() => {
            setIsOpen(false);
            setIsWhoWeServeOpen(false);
            setIsProductsOpen(false);
          }}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-4 sm:space-y-6 text-gray-800 px-4">
          <a
            href="https://cerinahealth.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1rem] sm:text-[1.125rem] font-medium hover:text-[#5E005E] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About us
          </a>
          <button
            className="text-[1rem] sm:text-[1.125rem] font-medium hover:text-[#5E005E] transition-colors flex items-center gap-1"
            onClick={() => {
              setIsWhoWeServeOpen(!isWhoWeServeOpen);
              setIsProductsOpen(false);
            }}
          >
            Who We Serve
            <Image src="/arrow_down.svg" alt="arrow" width={12} height={12} className={`transition-transform ${isWhoWeServeOpen ? 'rotate-180' : ''}`} />
          </button>
          {isWhoWeServeOpen && (
            <div className="ml-4 space-y-2">
              {whoWeServe.map((item) => (
                <a
                  key={item.id}
                  className="flex items-center gap-3 px-2 py-1 text-[0.875rem] text-gray-700 hover:text-[#5E005E] transition-colors"
                  href={item.id === 'organisations' ? 'https://cerinahealth.com/organisations' : item.id === 'individuals' ? 'https://cerinahealth.com/app' : 'https://cerinahealth.com/universities'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="w-7 h-7 rounded-md border flex items-center justify-center bg-gray-50 overflow-hidden">
                    {item.image ? (
                      <Image src={item.image} alt={item.label} width={32} height={32} className={`object-cover ${item.id === 'universities' ? 'w-8 h-8 scale-110' : 'w-5 h-5'}`} />
                    ) : (
                      <Image src={item.icon} alt={item.label} width={14} height={14} />
                    )}
                  </span>
                  {item.label}
                </a>
              ))}
            </div>
          )}
          <button
            className="text-[1rem] sm:text-[1.125rem] font-medium hover:text-[#5E005E] transition-colors flex items-center gap-1"
            onClick={() => {
              setIsProductsOpen(!isProductsOpen);
              setIsWhoWeServeOpen(false);
            }}
          >
            Our Products
            <Image src="/arrow_down.svg" alt="arrow" width={12} height={12} className={`transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
          </button>
          {isProductsOpen && (
            <div className="ml-4 space-y-2">
              {products.map((item) => (
                <a
                  key={item.id}
                  className="flex items-center gap-3 px-2 py-1 text-[0.875rem] text-gray-700 hover:text-[#5E005E] transition-colors"
                  href={item.id === 'cerina-app' ? 'https://cerinahealth.com/app' : 'https://cerinahealth.com/ai-triaging'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="w-7 h-7 rounded-md border flex items-center justify-center bg-gray-50 overflow-hidden">
                    {item.image ? (
                      <Image src={item.image} alt={item.label} width={20} height={20} className="object-cover" />
                    ) : (
                      <Image src={item.icon} alt={item.label} width={14} height={14} />
                    )}
                  </span>
                  {item.label}
                </a>
              ))}
            </div>
          )}
          <a
            href="https://cerinahealth.com/research"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1rem] sm:text-[1.125rem] font-medium hover:text-[#5E005E] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Research
          </a>
          <a
            href="https://blog.cerinahealth.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1rem] sm:text-[1.125rem] font-medium hover:text-[#5E005E] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </a>
          <a
            href="https://cerinahealth.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="px-[1rem] sm:px-[1.5rem] py-[0.5rem] sm:py-[0.75rem] rounded-md bg-[#DDAC7C] text-[#18161A] font-semibold hover:bg-[#C99B6A] transition-colors duration-200 text-sm sm:text-base flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <Image src="/arrow_right.svg" alt="arrow" width={12} height={12} />
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}
