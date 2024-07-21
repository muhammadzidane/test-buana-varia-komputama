/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { Suspense } from "react";

import { type Metadata } from "next";

import { MovieCard, Section } from "@/components";
import { movieFetchList } from "@/fetch/movie";

import { TopMoviesSkeleton } from "./components";

export const metadata: Metadata = {
  title: "Dashboard - Buana Varia Komputama",
  description: "...",
};

const Dashboard = async () => {
  const movies = await movieFetchList({ limit: "100", page: "0" });

  return (
    <>
      <Suspense fallback={<TopMoviesSkeleton />}>
        <Section title="Top Movies">
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
        </Section>
      </Suspense>
    </>
  );
};

export default Dashboard;
