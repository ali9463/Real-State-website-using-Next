import React from "react";
import Image from "next/image";
import Link from "next/link";
import starIcon from "../assets/icons/starIcon.png";
import rightArrowIcon from "../assets/icons/rightArrowIcon.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="relative p-4 mx-[10px] border-t-2 border-solid border-[#EDEFF2]">
      {/* Row 1 */}
      <div className="sm:flex justify-center items-center py-[20px] sm:py-[90px] px-2 ">
        {/* text  */}
        <p className="text-2xl text-center leading-[30px] font-bold text-blue-700 capitalize mb-10 sm:mb-0 dark:text-white">
          Blue Real
        </p>
        {/* menu  */}
        <div className="relative flex gap-5 justify-center items-centers  sm:w-[450px] ">
          <ul className="grid  sm:grid-cols-3 gap-5 text-center sm:gap-10 ">
            <li>
              <Link href="/" className="py-2 hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="#reviews" className="py-2 hover:text-orange-500">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="#services" className="py-2 hover:text-orange-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="#about-container" className="py-2 hover:text-orange-500">
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" className="py-2 hover:text-orange-500">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        {/* rating */}
        <div className="flex flex-col items-center sm:items-start gap-1 mt-5 sm:mt-0">
          <div className="flex">
            <Image
              src={starIcon}
              alt="ratings "
              className="w-[30px] h-[30px]"
            />
            <Image
              src={starIcon}
              alt="ratings "
              className="w-[30px] h-[30px]"
            />
            <Image
              src={starIcon}
              alt="ratings "
              className="w-[30px] h-[30px]"
            />
            <Image
              src={starIcon}
              alt="ratings "
              className="w-[30px] h-[30px]"
            />
            <Image
              src={starIcon}
              alt="ratings "
              className="w-[30px] h-[30px]"
            />
          </div>
          <div className="flex justify-center items-center p-2">
            <p>600 satisfied customers</p>
          </div>
        </div>
      </div>

      {/* Row 2 */}

      <div className="relative py-0 px=[340px] border-t-2 border-solid border-[#EDEFF2] flex items-center justify-between max-sm:flex-col-reverse gap-5">
        <p className="capitalize text-[10px] sm:text-[13px] font-semibold leading-[25px] text-center text-bluePText dark:text-white">
          © {year} Blue Real Company. All Rights Reserved.
        </p>
        <Link
          href="https://www.linkedin.com/in/ali-muhammad-a5923628a/"
          target="_blank"
          className="capitalize text-[10px] sm:text-[13px] font-semibold leading-[25px] text-center text-bluePText hover:text-orange-500 dark:text-white"
        >
          Blue Real
        </Link>
        <div className="flex items-start p-4 gap-[10px] max-sm:flex-col max-sm:p-1">
          <Link
            href="#"
            className="capitalize text-[10px] sm:text-[13px] font-semibold leading-[25px] text-center text-bluePText hover:text-orange-500 dark:text-white"
          >
            terms <span className="max-sm:hidden" >&</span>
          </Link>
          <Link
            href="#"
            className="capitalize text-[10px] sm:text-[13px] font-semibold leading-[25px] text-center text-bluePText  hover:text-orange-500 dark:text-white"
          >
            privacy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
