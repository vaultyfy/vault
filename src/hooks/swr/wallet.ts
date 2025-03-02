import { getWallet } from "@queries/get-wallet";
import { swrOptions } from "@utils/constants";
import useSWR from "swr";

export const useWallet = () => {
  const key = "wallet";
  const { data, error, isLoading } = useSWR(key, () => getWallet(), swrOptions);

  return {
    data,
    error,
    isLoading,
  };
};
