import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { ProfileSide, TrendSide, PostSide } from "../components/pages";
import ButtomBar from "../components/shared/ButtomBar";

const Home: NextPage = () => {
  return (
    <div className="bg-transparent App scroll-smooth">
      <span
        className="blur1 blur-2xl -z-30"
        style={{ top: "-18%", right: "0" }}
      />
      <span
        className="blur1 blur-2xl -z-30"
        style={{ top: "36%", left: "-8rem" }}
      />

      <main className="grid grid-cols-1 lg:gap-5 md:gap-5 lg:grid-cols-12 md:grid-cols-12 ">
        <div className="sticky top-0 hidden col-span-3 md:col-span-4 lg:col-span-3 lg:block md:block ">
          <ProfileSide />
        </div>

        <div className="col-span-11 lg:col-span-6 md:col-span-8 ">
          <PostSide />
        </div>
        <div className="sticky top-0 block col-span-1 lg:hidden md:hidden">
          <ButtomBar />
        </div>
        <div className="hidden col-span-3 lg:block md:block">
          <TrendSide />
        </div>
      </main>
    </div>
  );
};

export default Home;
