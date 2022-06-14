import Head from "next/head";
import React from "react";
import Header from "../shared/Header";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>MsBook-Social</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
