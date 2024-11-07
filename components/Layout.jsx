import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Head>
        <title>SnapMart</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="w-[100%] p-2">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
