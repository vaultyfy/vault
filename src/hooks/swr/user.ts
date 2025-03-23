import { getUser } from "@queries/get-user";
import { swrOptions } from "@utils/constants";
import { formatPrice } from "@utils/misc";
import useSWR from "swr";

export const useUser = () => {
  const key = "user";
  const { data, error, isLoading } = useSWR(key, () => getUser(), swrOptions);

  const payload = data?.payload
  const walletBalance = payload?.my_wallet.balance;

  return {
    data: payload,
    error,
    isLoading,
    userName: payload?.name?.split(" ")[0],
    walletBalance: formatPrice(walletBalance as number),
    kycPercentage: Number(payload?.Kycpercentage),
    cyclesCompleted: payload?.completedCyclesCount,
    hasUserCompletedKyc: Number(payload?.Kycpercentage) === 100,
  };
};
