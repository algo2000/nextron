import React from "react";
import Head from "next/head";
import Link from "next/link";

function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript-material-ui)</title>
      </Head>
      <Link href="/next">to next</Link>
    </React.Fragment>
  );
}

export default HomePage;
