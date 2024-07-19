import React from "react";

import Image from "next/image";

const MovieCard: React.FC<MovieCardProps> = ({
  description,
  thumbnail,
  title,
  year,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
      <div className="md:flex">
        <div className="md:shrink-0">
          <Image
            className="h-[170px] w-full object-cover md:h-full md:w-48"
            src={thumbnail}
            sizes="100vw"
            alt={title}
            height={0}
            width={0}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {year}
          </div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
            {title}
          </h1>
          <p className="mt-2 text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
