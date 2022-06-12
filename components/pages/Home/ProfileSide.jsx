import React from "react";
import Search from "./ProfileSide/Search";
import WhoFollowMe from "./ProfileSide/WhoFollowMe";
import ProfileCard from "./ProfileSide/ProfileCard";

const ProfileSide = () => {
  return (
    <>
      <div>
        <Search />
        <ProfileCard />
        <h2 className="pl-2 mt-12 text-lg font-bold">Who is Following You </h2>
        <div className="overflow-y-scroll">
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
        </div>
      </div>
    </>
  );
};

export default ProfileSide;
