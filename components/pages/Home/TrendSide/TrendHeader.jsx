import React from "react";
import { RiHome5Fill, RiSettings4Fill, RiMessage3Fill } from "react-icons/ri";
import { HiBell } from "react-icons/hi";

const TrendHeader = () => {
  return (
    <div className="flex items-center justify-around w-full pt-2 mt-1">
      <i className="text-orange-500 duration-300 cursor-pointer hover:scale-125">
        <RiHome5Fill size={35} />
      </i>
      <i className="text-orange-500 duration-300 cursor-pointer hover:scale-125">
        <RiSettings4Fill size={35} />
      </i>
      <p className="relative text-orange-500 duration-300 cursor-pointer hover:scale-125 ">
        <HiBell size={35} />
        <span className="absolute w-6 h-6 font-bold text-center bg-white rounded-full -top-1 left-5 ">
          34
        </span>
      </p>
      <p className="relative text-orange-500 duration-300 cursor-pointer hover:scale-125">
        <RiMessage3Fill size={35} />
        <span className="absolute w-6 h-6 font-bold text-center bg-white rounded-full -top-1 left-5 ">
          3
        </span>
      </p>
    </div>
  );
};

export default TrendHeader;
