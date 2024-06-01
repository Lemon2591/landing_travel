import React, { FC, useEffect, useState } from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout: FC<any> = (props) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" lang="vi" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="shortcut icon" href="/assets/img/home/favicon.png" />
        <link rel="shortcut icon" href="/assets/img/home/favicon.ico" />

        <link rel="icon" href="/assets/img/home/favicon.png" />
        <link rel="icon" href="/assets/img/home/favicon.ico" sizes="any" />
        <title>LemonDev</title>
      </Head>

      <div>
        <Header />
        {/* end header */}
        {props?.children}
        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default React.memo(Layout);
