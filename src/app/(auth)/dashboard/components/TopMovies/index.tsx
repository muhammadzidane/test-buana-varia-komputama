"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { MovieCard, Section } from "@/components";

const TopMovies: React.FC<TopMoviesProps> = ({ data = [] }) => {
  const router = useRouter();

  const onRedirectToDetail = (id: string) => {
    router.push(`/dashboard/${id}`);
  };

  return (
    <Section title="Top Movies">
      <div className="grid gap-3 md:gap-4 gap-y-6 grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
        {data.map((movie, movieIndex) => (
          <MovieCard
            onClick={() => {
              onRedirectToDetail(movie.imdbID);
            }}
            poster={movie.Poster}
            title={movie.Title}
            year={movie.Year}
            key={movieIndex}
          />
        ))}
      </div>
    </Section>
  );
};

export default TopMovies;
