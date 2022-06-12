import React from "react";
const ProfileCard = () => {
  return (
    <>
      <div className="w-full p-5 bg-gray-100 rounded-lg ">
        <img
          className="object-cover w-full h-36 rounded-tl-xl rounded-tr-xl"
          src="https://i.ibb.co/d5mVW25/cover.jpg"
          alt="Cover Photo"
        />
        <div className="flex flex-col items-center -mt-12">
          <img
            className="w-[100px] rounded-full h-[100px] object-cover mb-3"
            src="https://i.ibb.co/k8SV0R9/postpic2.jpg"
            alt="Profile Photo"
          />
          <h2 className="font-bold">Zanday Mj</h2>
          <p className="text-sm">Senior Web Developer</p>
        </div>
        <div class="divider divider-vertical"></div>
        <div class="flex w-full mt-3">
          <div class="grid h-15 flex-grow card  rounded-box place-items-center">
            <span className="font-bold">5,645</span>
            <span>Followers</span>
          </div>
          <div class="divider divider-horizontal"></div>
          <div class="grid h-15 flex-grow card  rounded-box place-items-center">
            <span className="font-bold">12</span>
            <span>Following</span>
          </div>
        </div>
        <div class="divider divider-vertical"></div>

        <h2 className="text-lg font-bold text-center cursor-pointer text-primary">
          My Profile
        </h2>
      </div>
    </>
  );
};

export default ProfileCard;
