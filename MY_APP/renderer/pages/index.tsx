import React from "react";
import Head from "next/head";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import HomeLayout from "../layouts/HomeLayout";

function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeLayout>
        <a>test</a>
        <a>test</a>
        <a>test</a>
        <a>test</a>
        <a>test</a>
        <a>test</a>
        <a>test</a>
        <a>test</a>
        <a>test</a>
      </HomeLayout>
    </>
  );
}

export default HomePage;
