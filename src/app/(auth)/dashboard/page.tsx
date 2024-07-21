/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";

import { type Metadata } from "next";

import { MovieCard } from "@/components";
import { movieFetchList } from "@/fetch/movie";

export const metadata: Metadata = {
  title: "Dashboard - Buana Varia Komputama",
  description: "...",
};

const Dashboard = async () => {
  const movies = await movieFetchList({ limit: "100", page: "0" });

  return (
    <>
      <div className="mb-6 font-semibold text-2xl">Top Movies</div>

      <div className="grid gap-3 md:gap-4 gap-y-6 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
        {movies.map((movie, movieIndex) => (
          <MovieCard
            description={movie.description}
            thumbnail={movie.thumbnail}
            isWatched={movie.isWatched}
            rating={movie.rating}
            title={movie.title}
            year={movie.year}
            key={movieIndex}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
