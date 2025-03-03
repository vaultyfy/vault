import { getWallet } from "@queries/get-wallet";
import { swrOptions } from "@utils/constants";
import useSWR from "swr";
import dayjs from "dayjs"

export const useWallet = () => {
  const key = "wallet";
  const { data, error, isLoading } = useSWR(key, () => getWallet(), swrOptions);

  const payload = data?.payload;

  return {
    error,
    data: data?.payload,
    isLoading,
    walletBalance: payload?.balance,
    lastUpdated: dayjs(payload?.updatedAT || payload?.createdAT).format("dd-mm-yyyy")
  };
};
