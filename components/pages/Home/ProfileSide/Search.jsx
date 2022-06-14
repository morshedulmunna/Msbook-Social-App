import React from "react";
import { TiSocialFlickr } from "react-icons/ti";
import { BiSearchAlt } from "react-icons/bi";
import Link from "next/link";

const Search = () => {
  return (
    <>
      <div className="flex items-center w-full bg-white">
        <Link href="/">
          <i className="text-5xl text-primary cursor-pointer">
            <TiSocialFlickr />
          </i>
        </Link>
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered rounded-sm input-sm w-full "
          />
          <button className="btn btn-sm bgBtn rounded-sm capitalize ">
            <i className="text-white">
              <BiSearchAlt size={28} />
            </i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
