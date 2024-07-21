type UnknownParams = Record<string, string> | undefined;

interface Params extends UnknownParams {
  limit?: string;
  page?: string;
}

interface BaseResponseApi<T> {
  success: boolean;
  result: T;
}
