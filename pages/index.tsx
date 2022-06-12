import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { ProfileSide, TrendSide, PostSide } from "../components/pages";

const Home: NextPage = () => {
  return (
    <div className="App">
      <span className="blur1 blur-2xl" style={{ top: "-18%", right: "0" }} />
      <span className="blur1 blur-2xl" style={{ top: "36%", left: "-8rem" }} />

      <main className="grid grid-cols-12 gap-5 ">
        <div className="col-span-3">
          <ProfileSide />
        </div>
        <div className="col-span-6 ">
          <PostSide />
        </div>
        <div className="col-span-3">
          <TrendSide />{" "}
        </div>
      </main>
    </div>
  );
};

export default Home;
