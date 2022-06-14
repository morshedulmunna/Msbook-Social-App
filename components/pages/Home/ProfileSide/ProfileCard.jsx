import Link from "next/link";
import React from "react";
const ProfileCard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-5 bg-gray-100 rounded-lg drop-shadow-lg">
        <img
          className="object-cover w-full h-36 rounded-tl-xl rounded-tr-xl"
          src="https://i.ibb.co/d5mVW25/cover.jpg"
          alt="Cover Photo"
        />
        <div className="flex flex-col items-center -mt-12 text-center">
          <img
            className="w-[100px] rounded-full h-[100px] object-cover mb-3"
            src="https://i.ibb.co/k8SV0R9/postpic2.jpg"
            alt="Profile Photo"
          />
          <h2 className="font-bold">Zanday Mj</h2>
          <p className="text-sm">Senior Web Developer</p>
        </div>
        <div className="divider divider-vertical"></div>
        <div className="flex w-full mt-3">
          <div className="grid flex-grow h-15 card rounded-box place-items-center">
            <span className="font-bold">5,645</span>
            <span>Followers</span>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="grid flex-grow h-15 card rounded-box place-items-center">
            <span className="font-bold">12</span>
            <span>Following</span>
          </div>
        </div>
        <div className="divider divider-vertical"></div>
        <Link href="/profile">
          <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bgBtn px-4 py-2 rounded-md w-[80%] font-bold text-white shadow-orange-500/50 shadow-lg">
            My Profile
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProfileCard;
