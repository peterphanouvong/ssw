import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export function useKindeToken() {
  const { data, error } = useSWR(`/api/auth/get-token`, fetcher);

  return {
    token: data,
    isLoading: !error && !data,
    isError: error,
  };
}
