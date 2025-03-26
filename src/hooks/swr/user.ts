import { getGoals, getUser } from "@queries/get-user";
import { swrOptions } from "@utils/constants";
import { formatPrice } from "@utils/misc";
import useSWR, { mutate } from "swr";

export const useUser = () => {
  const key = "user";
  const { data, error, isLoading } = useSWR(key, () => getUser(), swrOptions);

  const payload = data?.payload;
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

export const useGoals = () => {
  const key = "goals";
  const { data, error, isLoading } = useSWR(key, () => getGoals(), swrOptions);

  const getUpdatedGoalsList = () => mutate(key);
  const payload = data?.payload;

  return {
    data: payload?.data,
    error,
    isLoading,
    pageSize: payload?.pageSize,
    mutate: getUpdatedGoalsList,
    currentPage: payload?.currentPage,
    count: payload?.total,
  };
};
