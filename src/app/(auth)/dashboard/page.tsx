import React, { Suspense } from "react";

import { type Metadata } from "next";

import { movieFetchByNameList } from "@/fetch/movie";

import { TopMoviesSkeleton, TopMovies } from "./components";

export const metadata: Metadata = {
  title: "Dashboard - Buana Varia Komputama",
  description: "...",
};

const Dashboard = async () => {
  const movies = await movieFetchByNameList({
    query: "dark",
  });

  return (
    <>
      <Suspense fallback={<TopMoviesSkeleton />}>
        <TopMovies data={movies} />
      </Suspense>
    </>
  );
};

export default Dashboard;
