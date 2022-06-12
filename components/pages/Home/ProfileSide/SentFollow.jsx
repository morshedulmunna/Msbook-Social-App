import React from "react";

const SentFollow = () => {
  return (
    <div className="w-full mt-6">
      <div className="flex items-center justify-between pl-5 mt-6 w-[24rem]">
        <img
          className="object-cover w-16 h-16 rounded-full"
          src="https://i.ibb.co/ZN4NMTk/postpic1.jpg"
          alt="Profile"
        />
        <div className="px-2">
          <h3 className="font-bold">Umme Salma Sathi</h3>
          <span>@angelmim2</span>
        </div>
        <button className="btn-Sml">Add New</button>
      </div>
    </div>
  );
};

export default SentFollow;
