/* eslint-disable @typescript-eslint/no-explicit-any */
type FetchOptions = RequestInit & {
  headers?: Record<string, string>;
  params?: Record<string, string>;
};

interface CustomFetchError extends Error {
  response?: Response;
  status?: number;
}
