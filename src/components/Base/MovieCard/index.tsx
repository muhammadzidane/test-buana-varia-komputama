import React from "react";

import Image from "next/image";

const MovieCard: React.FC<MovieCardProps> = ({
  thumbnail,
  isWatched,
  rating,
  title,
  year,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        className="w-full h-[240px] object-cover"
        src={thumbnail}
        alt={title}
        height={0}
        width={0}
      />
      <div className="px-2 py-3">
        <div className="flex items-center gap-2 mb-1">
          <Image src="/svg/icon-star.svg" height={18} alt="star" width={18} />
          <div className="text-sm text-gray-400">{rating}</div>
        </div>
        <div className="font-semibold mb-1">{title}</div>
        <div className="mb-2">{year}</div>
        <div className="mt-4">
          {isWatched ? (
            <span className="inline-block bg-green-200 text-green-700 text-xs px-2 py-1 rounded-full">
              Watched
            </span>
          ) : (
            <span className="inline-block bg-red-200 text-red-700 text-xs px-2 py-1 rounded-full">
              Not Watched
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
