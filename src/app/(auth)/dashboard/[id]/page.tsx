import React from "react";

import { type Metadata } from "next";

import { movieFetchByIdDetail } from "@/fetch/movie";

import { MovieDetail, Comments } from "./components";

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
    <>
      <MovieDetail data={movie} />
      <Comments />
    </>
  );
};

export default DashboardDetail;
