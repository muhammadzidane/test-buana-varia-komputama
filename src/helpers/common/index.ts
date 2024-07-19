import { type ReadonlyURLSearchParams } from "next/navigation";

export const extractInitialData = (
  obj: ExtractInitialData
): Record<string, string> => {
  const result: Record<string, string> = {};

  for (const key in obj) {
    const value = obj[key];
    if (Array.isArray(value) && value.length > 0) {
      result[key] = value[0];
    }
  }

  return result;
};

/**
 * Debounce time
 * @param time in milisecond
 */
export const delay = async (time: number) =>
  await new Promise((resolve) => setTimeout(resolve, time));

export const createUrl = (
  pathname: string,
  params: ReadonlyURLSearchParams | URLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};
