import React from "react";

import { ProfileSide, TrendSide, PostSide } from "../index";
import ButtomBar from "../../shared/ButtomBar";

const Main = () => {
  return (
    <div className="relative overflow-hidden h-[100vh] bg-transparent App scroll-smooth">
      <span
        className="blur1 blur-2xl -z-30 fixed -top-[18%] right-0"
        // style={{ top: "-18%", right: "0" }}
      />
      <span
        className="blur1 blur-2xl -z-30 fixed top-[36%] -left-2"
        // style={{ top: "36%", left: "-8rem" }}
      />

      <main className="grid grid-cols-1 lg:gap-5 md:gap-5 lg:grid-cols-12 md:grid-cols-12">
        <div className="sticky top-0 hidden w-full col-span-3 md:col-span-4 lg:col-span-3 lg:block md:block ">
          <ProfileSide />
        </div>

        <div className="col-span-11 overflow-auto lg:col-span-6 md:col-span-8 overflow-y-scroll h-[100vh] ">
          <PostSide />
        </div>
        <div className="block col-span-1 lg:hidden md:hidden">
          <ButtomBar />
        </div>
        <div className="sticky top-0 hidden col-span-3 lg:block md:hidden">
          <TrendSide />
        </div>
      </main>
    </div>
  );
};

export default Main;
