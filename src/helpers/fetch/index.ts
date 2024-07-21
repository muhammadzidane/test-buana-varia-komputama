/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { envConfig } from "@/constants";

export const customFetch = async <T>(
  url: string,
  options: any = {}
): Promise<T> => {
  const mainApi = envConfig.baseUrl;
  const apiKey = envConfig.apiKey;
  const baseUrlApi = mainApi + url;

  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `apikey ${apiKey}`,
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  const queryString = new URLSearchParams(options.params).toString();
  const baseUrlApiWithParams = options.params
    ? baseUrlApi + "?" + queryString
    : baseUrlApi;

  try {
    const response = await fetch(baseUrlApiWithParams, config);

    console.log(baseUrlApiWithParams);

    if (!response.ok) {
      const error: any = new Error(response.statusText);
      error.response = response;
      error.status = response.status;
      throw error;
    }

    return (await response.json()) as T;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
};
