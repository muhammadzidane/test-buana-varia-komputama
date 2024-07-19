import { customFetch } from "@/helpers";

export const overviewFetchList = async (params: UnknownParams) => {
  const result: BaseResponseApi<OverviewData[]> = await customFetch(
    "/home/relates",
    {
      // next: { revalidate: 30 },
      method: "get",
      params,
    }
  );
  return result.data;
};
