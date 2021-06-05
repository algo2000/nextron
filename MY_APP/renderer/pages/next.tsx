import React from "react";
import Head from "next/head";
import Link from "next/link";

function Next() {
  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron (with-typescript-material-ui)</title>
      </Head>
      <Link href="/home">to home</Link>
    </React.Fragment>
  );
}

export default Next;
