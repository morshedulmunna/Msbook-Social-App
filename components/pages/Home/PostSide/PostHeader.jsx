import React, { useRef, useState } from "react";
import Modal from "./Modal";
// import PostInput from "./PostInput";
import { HiOutlinePhotograph, HiVideoCamera } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

const PostHeader = () => {
  const [image, setImage] = useState(null);
  const imageref = useRef();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <>
      <Modal />
      {/* <label htmlFor="post-modal">open modal</label> */}
      <div className="bg-white drop-shadow-lg">
        <div className="sticky top-0 flex w-full gap-2 px-2 pt-2 pb-1 ">
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
          </form>
        </div>
        {image && (
          <div className="relative ">
            <button
              onClick={() => setImage(null)}
              class="absolute bg-orange-500 hover:bg-orange-600 transition-all hover:scale-125 rounded-lg text-white  top-0 right-0 p-1 m-2  cursor-pointer"
            >
              <FaTimes size={20} />
            </button>

            <img
              className="object-cover w-full h-auto mb-5 rounded-lg "
              src={image.image}
              alt=""
            />
          </div>
        )}
        <div className="flex items-center justify-between w-[100%] gap-5">
          <label
            onClick={() => imageref.current.click()}
            className="flex items-center gap-1 cursor-pointer "
          >
            <i className="text-orange-500">
              <HiOutlinePhotograph size={25} />
            </i>
            <span className="font-bold text-orange-500">Photo</span>
            <div className="hidden">
              <input
                type="file"
                name="myImage"
                ref={imageref}
                onChange={onImageChange}
              />
            </div>
          </label>
          <div className="">
            <button className="hidden mb-2 duration-300 cursor-pointer btn-big lg:block md:block hover:scale-105">
              Post Now
            </button>
            <button className="block mb-2 mr-2 duration-300 cursor-pointer btn-Sml lg:hidden md:hidden hover:scale-125">
              Post Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
