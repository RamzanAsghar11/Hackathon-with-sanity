"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TbUserExclamation } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="h-[100px] w-full flex items-center justify-between px-5 md:px-5 lg:px-16">
        <div className="md:gap-4">
          <Image
            src="/Assets/style your spae.png"
            width={170}
            height={70}
            alt="Logo"
            className="md:w-140"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 lg:gap-12 text-xl">
          <li className="hover:text-gray-600 cursor-pointer">
            <Link href="/" >Home</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
          <Link href="/Shop" >Shop</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
            <Link href="/About">About</Link>
          </li>
          <li className="hover:text-gray-600 cursor-pointer">
          <Link href="/Contact">Contact</Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="hidden md:flex gap-5 lg:gap-8 text-2xl">
          <TbUserExclamation className="cursor-pointer" />
          <FiSearch className="cursor-pointer" />
          <IoMdHeartEmpty className="cursor-pointer" />
          <AiOutlineShoppingCart className="cursor-pointer" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FBEBB5] w-full flex flex-col items-center gap-5 py-5 text-xl">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/shop" onClick={() => setIsOpen(false)} className="hover:text-gray-600">
            Shop
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-600">
            About
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-600">
            Contact
          </Link>
          <div className="flex gap-5 text-2xl">
            <TbUserExclamation />
            <FiSearch />
            <IoMdHeartEmpty />
            <AiOutlineShoppingCart />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
