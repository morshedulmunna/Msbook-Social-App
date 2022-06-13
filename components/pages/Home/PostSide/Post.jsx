import React from "react";
import { RiEarthLine, RiShareForwardFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";

const Post = () => {
  return (
    <>
      <div className="px-3 py-1 mt-6 bg-gray-100 rounded-lg drop-shadow-lg">
        <div>
          {/* Post Profile */}
          <div className="flex gap-3">
            <img
              className="object-cover w-12 h-12 mb-3 rounded-full"
              src="https://i.ibb.co/k8SV0R9/postpic2.jpg"
              alt="Profile Photo"
            />
            <div>
              <h2 className="font-bold duration-300 cursor-pointer hover:scale-105">
                Zanday Mj
              </h2>
              <div className="flex items-center gap-1 text-gray-500 text-[15px]">
                <span>Just now</span>
                <i>
                  <RiEarthLine />
                </i>
              </div>
            </div>
          </div>
          {/* Post Discription */}
          <p className="py-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            numquam ex vitae sapiente doloribus illum earum quaerat ullam ut
            autem! 🥇❤️
          </p>
          {/* Post Image */}
          <img
            className="object-cover w-full rounded-lg h-[35rem]"
            src="https://i.ibb.co/ZN4NMTk/postpic1.jpg"
            alt="Post Image"
          />
        </div>
        <div className="mt-3">
          <i className="text-orange-500 bg-transparent border-none cursor-pointer hover:bg-transparent btn btn-sm ">
            <AiFillHeart size={40} />
          </i>
          <i className="text-orange-500 bg-transparent border-none cursor-pointer hover:bg-transparent btn btn-sm ">
            <FaCommentAlt size={33} />
          </i>
          <i className="text-orange-500 bg-transparent border-none cursor-pointer hover:bg-transparent btn btn-sm">
            <RiShareForwardFill size={40} />
          </i>
        </div>
      </div>
    </>
  );
};

export default Post;
