import React from "react";

const WhoFollowMe = () => {
  return (
    <div className="w-full mt-6">
      <div className="flex items-center justify-between lg:pl-5 pl-0 lg:w-[95%] w-full flex-col lg:flex-row">
        <div className="flex items-center justify-center gap-4">
          <img
            className="object-cover w-16 h-16 rounded-full"
            src="https://i.ibb.co/ZN4NMTk/postpic1.jpg"
            alt="Profile"
          />
          <div className="px-2">
            <h3 className="font-bold">Umme Salma Sathi</h3>
            <span>@angelmim2</span>
          </div>
        </div>
        <button className="w-[90%] my-6 mb-6 lg:my-0 lg:w-20 lg:ml-6 btn-Sml duration-300 hover:scale-105">
          Follow
        </button>
      </div>
    </div>
  );
};

export default WhoFollowMe;
