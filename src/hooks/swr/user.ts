import { getUser } from "@queries/get-user";
import { swrOptions } from "@utils/constants";
import { formatPrice } from "@utils/misc";
import useSWR from "swr";

export const useUser = () => {
  const key = "user";
  const { data, error, isLoading } = useSWR(key, () => getUser(), swrOptions);

  const walletBalance = data?.payload?.my_wallet.balance

  return {
    data: data?.payload,
    userName: data?.payload?.name?.split(" ")[0],
    error,
    isLoading,
    walletBalance: formatPrice(walletBalance as number),
    kycPercentage: Number(data?.payload?.Kycpercentage),
    hasUserCompletedKyc: Number(data?.payload?.Kycpercentage) === 100,
  };
};
