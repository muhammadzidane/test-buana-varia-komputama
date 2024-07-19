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
      <div className="mb-4 font-semibold text-lg">Overview</div>
      <div className="grid gap-4 grid-cols-6">
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
