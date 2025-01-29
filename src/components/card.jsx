import Image from 'next/image';
import React from 'react';

const Card = ({ imageSrc, title, price }) => {
  return (
    <div className="w-[350px] h-[400px] hover:scale-105 ease-in duration-200 mx-auto bg-white rounded-xl shadow-md overflow-hidden dark:bg-slate-700 cursor-pointer">
      <div className="flex flex-col items-start">
        <div className="relative">
          <Image
            className="h-[190px] w-full object-contain max-sm:w-[350px]"
            src={imageSrc}
            alt="house image"
          />
        </div>

        <div className="p-8">
          <div className="capitalize text-blue-600 font-black text-[15px] leading-[30px] dark:text-white">
            {title}
          </div>
          <p className=" text-2xl leading-[30px] font-bold text-gray-600 py-[10px] dark:text-white ">
            {price}
          </p>
          <p className="text-[13px] leading-[25px] text-blueCardSubTitle font-bold py-[10px]  dark:text-white">
            Islamabad
          </p>
          <p className="text-xs leading-5 text-blueCardSubTitle font-bold dark:text-white">
            3 Beds&nbsp;&nbsp;-&nbsp;&nbsp;2 baths&nbsp;&nbsp;-&nbsp;&nbsp;4 Rooms
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
