"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Add the FiX icon for close functionality
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { title: "Home", href: "/" },
    { title: "Features", href: "/features" },
    { title: "About me", href: "/about" },
    { title: "Studio", href: "/studio" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-white/70 h-20 shadow-md sticky top-0 backdrop-blur-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-16 h-full">
        {/* Logo Section */}
        <Logo title="Bloggers" className="text-black" />

        {/* Desktop Navigation */}
        <div className="hidden md:inline-flex items-center gap-7 text-gray-900 hover:text-black duration-200">
          {navigation.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className="text-sm uppercase font-semibold relative group overflow-hidden"
            >
              {item?.title}
              <span className="w-full h-[1px] bg-blue-700 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg md:hidden z-40">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navigation.map((item) => (
              <li key={item?.title}>
                <Link
                  href={item?.href}
                  className="text-lg font-medium text-gray-900 hover:text-blue-700"
                  onClick={toggleMenu} // Close menu after clicking a link
                >
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
