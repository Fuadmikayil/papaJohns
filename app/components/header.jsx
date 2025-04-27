'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaGlobe, FaShoppingBasket } from 'react-icons/fa'; // Buraya sepet ikonunu da ekledik

const Header = () => {
  const [language, setLanguage] = useState('az');
  const [open, setOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 relative">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={130} height={26} />
        </div>

        {/* Right Side: Language Selector + Basket */}
        <div className="flex items-center space-x-6">

          {/* Basket Icon */}
          <div className="cursor-pointer relative">
            <FaShoppingBasket size={22} />
            {/* İstersen sepet sayısı eklemek için buraya badge koyarız */}
          </div>
          {/* Language Selector */}
          <div className="relative">
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
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
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
