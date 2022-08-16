import Error from "next/error";
import useSWR from "swr";
import { UserProfile } from "../@types/userProfile";
import { fetcher } from "../utils/fetcher";

export const useUser = (id: string | undefined) => {
  const { data, error } = useSWR<UserProfile, Error>(
    `/api/user/${id}`,
    fetcher
  );

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};
