import { getWallet } from "@queries/get-wallet";
import { swrOptions } from "@utils/constants";
import { format } from "date-fns";
import useSWR from "swr";

export const useWallet = () => {
  const key = "wallet";
  const { data, error, isLoading } = useSWR(key, () => getWallet(), swrOptions);

  const payload = data?.payload;

  return {
    error,
    data: data?.payload,
    isLoading,
    walletBalance: payload?.balance,
    lastUpdated: format(
      String(payload?.updatedAT || payload?.createdAT),
      "dd-mm-yyyy",
    ),
  };
};
