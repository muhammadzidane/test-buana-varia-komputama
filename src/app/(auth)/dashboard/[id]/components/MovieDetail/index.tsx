import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components";

const MovieDetail: React.FC<MovieDetailProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row gap-5 h-auto md:h-[400px]">
      <div className="w-full md:w-[240px] h-[300px] md:h-full relative">
        <Image
          className="object-cover"
          src={data.Poster}
          alt={data.Title}
          layout="fill"
        />
      </div>
      <div className="flex-1 p-4 md:p-6">
        <h2 className="text-xl font-bold mb-2">{data.Title}</h2>
        <p className="text-gray-700 mb-4">{data.Plot}</p>

        <div className="flex items-center gap-2 mb-6">
          <Image src="/svg/icon-star.svg" height={24} alt="star" width={24} />
          <div className="text-sm text-gray-400">{data.imdbRating}</div>
        </div>

        <div className="mb-6">
          <div className="mb-3">
            {parseInt(data.Year, 10) >= 2010 ? (
              <span className="inline-block bg-green-200 text-green-700 text-xs px-2 py-1 rounded-full">
                Watched
              </span>
            ) : (
              <span className="inline-block bg-red-200 text-red-700 text-xs px-2 py-1 rounded-full">
                Not Watched
              </span>
            )}
          </div>
          <p>
            <strong>Year:</strong> {data.Year}
          </p>
          <p>
            <strong>Genre:</strong> {data.Genre}
          </p>
          <p>
            <strong>Actors:</strong> {data.Actors}
          </p>
        </div>

        <Link href="/">
          <Button>Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetail;
