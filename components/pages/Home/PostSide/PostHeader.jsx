import React from "react";
import Modal from "./Modal";
import PostInput from "./PostInput";

const PostHeader = () => {
  return (
    <>
      <Modal />
      {/* <label htmlFor="post-modal">open modal</label> */}
      <div className="sticky top-0 flex w-full gap-2 px-2 pt-2 pb-1 bg-white drop-shadow-lg">
        <img
          className="object-cover w-12 h-12 mb-3 rounded-full"
          src="https://i.ibb.co/k8SV0R9/postpic2.jpg"
          alt="Profile Photo"
        />
        <form className="w-full">
          <textarea
            className="w-full mb-2 text-xl resize-none textarea textarea-ghost placeholder:text-xl "
            placeholder="Whats on your Mind......?"
            rows="2"
            cols="50"
          ></textarea>

          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between w-[60%] gap-5">
              <PostInput />
              <PostInput />
              <PostInput />
            </div>
            <button className="hidden mb-2 duration-300 cursor-pointer btn-big lg:block md:block hover:scale-105">
              Post Now
            </button>
            <button className="block mb-2 mr-2 duration-300 cursor-pointer btn-Sml lg:hidden md:hidden hover:scale-125">
              Post Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostHeader;
