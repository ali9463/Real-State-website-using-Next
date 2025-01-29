import Image from 'next/image';
import React from 'react';
import heroBg from '../assets/images/pexels.jpg';
import arrowIcon from '../assets/icons/arrow.png';
import phoneIcon from '../assets/icons/contact.png';
import mailIcon from '../assets/icons/mail.png';

const Hero = ({ address, phone, email }) => {
  const showMoreBtn = () => {
    document
      .getElementById('about-container')
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="flex flex-col w-full h-screen ">
      <Image
        src={heroBg}
        alt="bg image"
        fill
        className="w-full h-screen bg-no-repeat rounded-b-4xl object-cover object-center opacity-4 blur-[2px]"
      />
      <div className="w-full h-screen relative ">
        <div className="relative h-screen text-center flex flex-col justify-center items-center ">
          <h1 className="font-normal text-7xl text-center mt-24 text-white capitalize max-sm:text-[55px]">
            Find The Comfortable Place
            <br /> that relax your mind
          </h1>
          {/* Icons and Text under Heading */}
          <div className="hidden sm:flex mt-24 justify-center items-center">
            <div className="flex mr-11 px-4 bg-blue-700 rounded-full">
              <Image
                src={arrowIcon}
                alt="arrow icon"
                className="w-5 h-5 mx-4 self-center"
              />
              <p className="text-white text-xl py-2 ">{address}</p>
            </div>

            <div className="flex ml-10 mr-10 px-4 bg-blue-700 rounded-full">
              <Image
                src={phoneIcon}
                alt="phone icon"
                className="w-5 h-5 mx-4 self-center"
              />
              <p className="text-white text-xl py-2">{phone}</p>
            </div>

            <div className="flex ml-20 px-4 bg-blue-700 rounded-full">
              <Image
                src={mailIcon}
                alt="mail icon"
                className="w-5 h-5 mx-4 self-center"
              />
              <p className="text-white text-xl py-2">{email}</p>
            </div>
          </div>
          {/* Show more button  */}
          <div className="  absolute bottom-8 w-full text-center ">
            <button
              onClick={showMoreBtn}
              className=" text-blue-900 font-bold text-xl capitalize shadow-lg bg-white hover:bg-orange-500 hover:text-white px-4 py-1 rounded-3xl h-14 w-40"
            >
              show more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
