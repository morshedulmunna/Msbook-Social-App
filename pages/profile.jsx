import React from "react";

import { ProfileSide, PostSide, TrendSide } from "../components/pages";

const profile = () => {
  return (
    <div className="relative bg-transparent App scroll-smooth">
      <main className="grid grid-cols-1 lg:gap-5 md:gap-5 lg:grid-cols-12 md:grid-cols-12">
        <div className="sticky top-0 hidden w-full col-span-3 md:col-span-4 lg:col-span-3 lg:block md:block ">
          <ProfileSide />
        </div>

        <div className="col-span-11 lg:col-span-6 md:col-span-8 ">
          <PostSide />
        </div>
        <div className="sticky top-0 hidden col-span-3 lg:block md:hidden">
          <TrendSide />
        </div>
      </main>
    </div>
  );
};

export default profile;
