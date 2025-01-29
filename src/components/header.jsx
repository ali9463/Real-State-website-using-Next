import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import searchIcon from '../../src/assets/icons/search.png';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ThemeChanger from './themeChanger';

const Header = () => {
  const [header, setHeader] = useState(false);
  const [headerColor, setHeaderColor] = useState('transparent');
  const [headerText, setHeaderText] = useState('white');

  const handleHeader = () => {
    setHeader(!header);
  };

  const handleMobileHeader = () => {
    setHeader(false);
  };

  useEffect(() => {
    const handleColorChange = () => {
      if (window.scrollY >= 250) {
        setHeaderColor('white');
        setHeaderText('#0000ff');
      } else {
        setHeaderColor('transparent');
        setHeaderText('#0000ff');
      }
    };
    window.addEventListener('scroll', handleColorChange);
  }, []);

  return (
    <div
      style={{ background: `${headerColor}` }}
      className=" fixed top-0 left-0 w-full h-20 shadow-xl flex justify-between items-center z-40 ease-in duration-300"
    >
      {/* Menu + Name */}

      <div className="max-w-[1240px] m-5 flex justify-between items-center p-4">
        <Link href="/">
          <h1
            className="py-2 text-2xl text-blue-800 font-bold hover:text-orange-500"
          >
           Blue Real 
          </h1>
        </Link>
      </div>

      

      {/* navbar Links */}

      <ul
        style={{ color: `${headerText}` }}
        className="text-sm font-bold hidden sm:flex 
      "
      >
        <li className=" p-4 hover:text-orange-500">
          <Link href="/">Home</Link>
        </li>
        <li className=" p-4 hover:text-orange-500">
          <Link href="#about-container">About Us</Link>
        </li>
        <li className=" p-4 hover:text-orange-500">
          <Link href="#services">Our Services</Link>
        </li>
        <li className=" p-4 hover:text-orange-500">
          <Link href="#reviews">Our Reviews</Link>
        </li>
        <li className=" p-4 hover:text-orange-500">
          <Link href="#contact">Contact Us</Link>
        </li>
      </ul>

      {/* Search */}

      <div className=" hidden sm:flex">
        <Image src={searchIcon} alt="Menu" className="w-4 h-4 self-center text-gray-700" />
        <input
          type="text"
          placeholder="Search"
          maxLength="20"
          className="w-30 bg-transparent outline-none placeholder-gray-600 mx-4 py-2 text-blue-800 font-bold capitalize"
        />
      </div>
      <div className="mr-10">
        <ThemeChanger />
      </div>

      {/* Mobile hamburgerMenu */}

      <div onClick={handleHeader} className="block sm:hidden p-4 z-10">
        {header ? (
          <AiOutlineClose size={30} style={{ color: `${headerText}` }} />
        ) : (
          <AiOutlineMenu size={30} style={{ color: `${headerText}` }} />
        )}
      </div>
      <div
        className={
          header
            ? 'sm:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300'
            : 'sm:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300'
        }
      >
        <ul

          className="text-sm font-normal text-white
      "
        >
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="/" onClick={handleMobileHeader}>
              Home
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#about-container" onClick={handleMobileHeader}>
              About Us
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#services" onClick={handleMobileHeader}>
             Our Services
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#reviews" onClick={handleMobileHeader}>
              Our Reviews
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-orange-500">
            <Link href="#contact" onClick={handleMobileHeader}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
