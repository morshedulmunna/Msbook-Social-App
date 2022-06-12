import Head from "next/head";
import React from "react";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>MsBook-Social</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
    </>
  );
};

export default Layout;
