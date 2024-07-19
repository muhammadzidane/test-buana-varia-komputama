import { customFetch } from "@/helpers";

export const movieFetchList = async (params: UnknownParams) => {
  const result: BaseResponseApi<MovieData[]> = await customFetch("/movies", {
    next: { revalidate: 30 },
    method: "get",
    params,
  });
  return result.data;
};
