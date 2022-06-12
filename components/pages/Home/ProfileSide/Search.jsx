import React from "react";
import { TiSocialFlickr } from "react-icons/ti";
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
  return (
    <>
      <div className="flex items-center w-full">
        <i className="text-5xl text-primary">
          <TiSocialFlickr />
        </i>
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered rounded-sm input-sm w-full max-w-xs"
          />
          <button class="btn btn-sm bgBtn rounded-sm capitalize ">
            <i className="text-white">
              <BiSearchAlt size={25} />
            </i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
