import React from "react";
import { RiEarthLine } from "react-icons/ri";

const Post = () => {
  return (
    <>
      <div className="py-6">
        <div>
          {/* Post Profile */}
          <div className="flex gap-3">
            <img
              className="object-cover w-12 h-12 mb-3 rounded-full"
              src="https://i.ibb.co/k8SV0R9/postpic2.jpg"
              alt="Profile Photo"
            />
            <div>
              <h2 className="font-bold">Zanday Mj</h2>
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
      </div>
    </>
  );
};

export default Post;
