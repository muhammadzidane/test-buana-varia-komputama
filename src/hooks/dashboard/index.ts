import useSWR from "swr";

export const useDashboardInboxDetail = (id: string) => {
  const {
    isLoading: isLoadingInboxDetail,
    error: isErrorInboxDetail,
    data: dataInboxDetail,
  } = useSWR<BaseResponseApi<DashboardInboxDetailData[]>>(
    `/post/${id}/comment`
  );

  return {
    isLoadingInboxDetail,
    isErrorInboxDetail,
    dataInboxDetail,
  };
};
