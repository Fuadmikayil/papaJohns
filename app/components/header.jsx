'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaGlobe, FaShoppingBasket } from 'react-icons/fa';
import { gsap } from 'gsap'; // GSAP import

const Header = () => {
  const [language, setLanguage] = useState('az');
  const [open, setOpen] = useState(false);

  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const basketRef = useRef(null);
  const languageSelectorRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setOpen(false);
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
    })
      .from(logoRef.current, {
        x: -30,
        opacity: 0,
        duration: 0.6,
      }, "-=0.4")
      .from(basketRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.5,
      }, "-=0.5")
      .from(languageSelectorRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.5,
      }, "-=0.4");
  }, []);

  useEffect(() => {
    if (open) {
      gsap.fromTo(dropdownRef.current, 
        { opacity: 0, y: -10 }, 
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [open]);

  return (
    <header className="border-b" ref={headerRef}>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 relative">
        
        {/* Logo */}
        <div className="flex items-center" ref={logoRef}>
          <Image src="/logo.svg" alt="Logo" width={130} height={26} />
        </div>

        {/* Right Side: Basket + Language Selector */}
        <div className="flex items-center space-x-6">

          {/* Basket Icon */}
          <div className="cursor-pointer relative" ref={basketRef}>
            <FaShoppingBasket size={22} />
          </div>

          {/* Language Selector */}
          <div className="relative" ref={languageSelectorRef}>
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <FaGlobe size={20} />
              <span className="font-semibold">
                {language === 'az' ? 'Azərbaycanca' : 'English'}
              </span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Dropdown */}
            {open && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10"
              >
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                  onClick={() => handleLanguageChange('en')}
                >
                  English
                  {language === 'en' && <span>✓</span>}
                </div>
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                  onClick={() => handleLanguageChange('az')}
                >
                  Azərbaycanca
                  {language === 'az' && <span>✓</span>}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
