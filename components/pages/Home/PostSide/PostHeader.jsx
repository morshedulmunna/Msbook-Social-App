import React from "react";
import Modal from "./Modal";
import PostInput from "./PostInput";

const PostHeader = () => {
  return (
    <>
      <Modal />
      {/* <label for="post-modal">open modal</label> */}
      <div className="sticky top-0 flex gap-5 pt-2 pb-1 bg-white drop-shadow-lg">
        <img
          className="object-cover w-12 h-12 mb-3 rounded-full"
          src="https://i.ibb.co/k8SV0R9/postpic2.jpg"
          alt="Profile Photo"
        />
        <form className="w-full">
          <textarea
            class="textarea textarea-ghost placeholder:text-xl w-full resize-none text-xl mb-3"
            placeholder="Whats on your Mind......?"
            rows="2"
            cols="50"
          ></textarea>

          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between w-[70%] gap-5">
              <PostInput />
              <PostInput />
              <PostInput />
              <PostInput />
            </div>
            <button className="mb-2 btn-big">Post Now</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostHeader;
