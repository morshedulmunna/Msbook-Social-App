import React from "react";

const WhoFollowMe = () => {
  return (
    <div className="w-full mt-6">
      <div className="flex items-center justify-between pl-5 mt-6 w-[22rem]">
        <img
          className="object-cover w-16 h-16 rounded-full"
          src="https://i.ibb.co/ZN4NMTk/postpic1.jpg"
          alt="Profile"
        />
        <div className="px-2">
          <h3 className="font-bold">Umme Salma Sathi</h3>
          <span>@angelmim2</span>
        </div>
        <button className="capitalize btn btn-sm bgBtn">Follow</button>
      </div>
    </div>
  );
};

export default WhoFollowMe;
