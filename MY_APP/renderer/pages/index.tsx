import React from "react";
import Head from "next/head";

import HomeLayout from "../layouts/HomeLayout";

import DailyStatusCard from "../components/DailyStatusCard";

function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeLayout>
        <DailyStatusCard />
        <DailyStatusCard />
        <DailyStatusCard />
      </HomeLayout>
    </>
  );
}

export default HomePage;
