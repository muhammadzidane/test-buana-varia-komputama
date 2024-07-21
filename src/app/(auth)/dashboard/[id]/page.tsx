import React from "react";

import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components";
import { movieFetchByIdDetail } from "@/fetch/movie";

export const metadata: Metadata = {
  title: "Dashboard Detail - Buana Varia Komputama",
  description: "...",
};

const DashboardDetail = async ({ params }: { params: { id: string } }) => {
  const movie = await movieFetchByIdDetail({
    movieId: params.id,
    query: "dark",
  });

  return (
    <div className="py-4 px-2 md:p-6 lg:p-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row gap-5 h-auto md:h-[400px]">
        <div className="w-full md:w-[240px] h-[300px] md:h-full relative">
          <Image
            src={movie.Poster}
            alt={movie.Title}
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="flex-1 p-4 md:p-6">
          <h2 className="text-xl font-bold mb-2">{movie.Title}</h2>
          <p className="text-gray-700 mb-4">{movie.Plot}</p>

          <div className="flex items-center gap-2 mb-6">
            <Image src="/svg/icon-star.svg" height={24} alt="star" width={24} />
            <div className="text-sm text-gray-400">{movie.imdbRating}</div>
          </div>

          <div className="mb-6">
            <p>
              <strong>Year:</strong> {movie.Year}
            </p>
            <p>
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p>
              <strong>Actors:</strong> {movie.Actors}
            </p>
          </div>

          <Link href="/">
            <Button>Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardDetail;
