import { getUser } from "@queries/get-user";
import { useAuthContext } from "./context";
import useSWR from "swr";
import { swrOptions } from "@utils/constants";

export const useUser = () => {
  const key = "user";
  const { data, error, isLoading } = useSWR(key, () => getUser(), swrOptions);
  return {
    user: data?.payload,
    error,
    isLoading,
  };
};
