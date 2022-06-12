import React from "react";
import Search from "./ProfileSide/Search";
import WhoFollowMe from "./ProfileSide/WhoFollowMe";
import ProfileCard from "./ProfileSide/ProfileCard";
import SentFollow from "./ProfileSide/SentFollow";

const ProfileSide = () => {
  return (
    <>
      <div>
        <div className="sticky top-0 z-10 ">
          <Search />
          <ProfileCard />
        </div>
        <h2 className="py-5 pl-2 text-lg font-bold">Who is Following You </h2>
        <div className="flex flex-col items-center justify-between overflow-y-scroll bg-gray-100 rounded-lg h-80 drop-shadow-lg ">
          <WhoFollowMe />
          <WhoFollowMe />
          <WhoFollowMe />
          <WhoFollowMe />
          <WhoFollowMe />
          <WhoFollowMe />
          <WhoFollowMe />
          <WhoFollowMe />
          <WhoFollowMe />
          <WhoFollowMe />
          <WhoFollowMe />
          <button className="mx-auto my-6 capitalize w-[90%]  btn btn-sm bgBtn ">
            Sell All
          </button>
        </div>
        {/* <h2 className="py-5 pt-12 pl-2 text-lg font-bold">
          Sent Follow Request
        </h2>
        <div className="bg-gray-100 rounded-lg drop-shadow-lg">
          <SentFollow />
          <SentFollow />
          <SentFollow />
          <SentFollow />
          <SentFollow />
          <SentFollow />
          <SentFollow />
          <SentFollow />
          <SentFollow />
        </div>
        <button className="w-full my-6 btn btn-sm bgBtn ">Sell All</button> */}
      </div>
    </>
  );
};

export default ProfileSide;
