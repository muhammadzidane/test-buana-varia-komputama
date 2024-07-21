import { customFetch } from "@/helpers";

export const movieFetchByNameList = async (params: UnknownParams) => {
  const response: BaseResponseApi<MovieList[]> = await customFetch(
    "/imdbSearchByName",
    {
      next: { revalidate: 30 },
      method: "get",
      params,
    }
  );
  return response.result;
};

export const movieFetchByIdDetail = async (params: UnknownParams) => {
  const response: BaseResponseApi<MovieDetail> = await customFetch(
    "/imdbSearchById",
    {
      next: { revalidate: 30 },
      method: "get",
      params,
    }
  );
  return response.result;
};
