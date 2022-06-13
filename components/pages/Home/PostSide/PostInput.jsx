import React from "react";
import { HiOutlinePhotograph, HiVideoCamera } from "react-icons/hi";

const PostInput = () => {
  return (
    <div className="hidden lg:block md:block">
      <label className="flex items-center gap-1 ">
        <i className="text-orange-500">
          <HiOutlinePhotograph size={25} />
        </i>
        <span className="font-bold text-orange-500">Photo</span>
      </label>
    </div>
  );
};

export default PostInput;
