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
            className="object-cover object-top w-full rounded-lg"
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="Post Image"
          />
        </div>
        <div className="mt-3">
          <i className="px-0 text-orange-500 bg-transparent border-none cursor-pointer hover:bg-transparent btn btn-sm grayscale ">
            {/* onClick == grayscale-0 */}
            <AiFillHeart size={35} />
          </i>
          <i className="px-0 ml-6 text-orange-500 bg-transparent border-none cursor-pointer hover:bg-transparent btn btn-sm grayscale ">
            <FaCommentAlt size={28} />
          </i>
          <i className="px-0 ml-6 text-orange-500 bg-transparent border-none cursor-pointer hover:bg-transparent btn btn-sm grayscale ">
            <RiShareForwardFill size={35} />
          </i>
        </div>
        <span className="text-sm text-gray-400">2345 likes</span>
      </div>
    </>
  );
};

export default Post;
