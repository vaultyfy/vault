import {
  getConsistencyStats,
  getGoals,
  getReferralStats,
  getUser,
} from "@queries/get-user";
import { getTransaction, getTransactions } from "@queries/transactions";
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
    verified: payload?.isFullyVerified,
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

export const useReferralStats = () => {
  const key = "referral-stats";
  const { data, error, isLoading } = useSWR(
    key,
    () => getReferralStats(),
    swrOptions,
  );

  const updateStats = () => mutate(key);

  return {
    data: data?.payload,
    error,
    isLoading,
    mutate: updateStats,
  };
};

export const useConsistencyStats = () => {
  const key = "consistency-stats";
  const { data, error, isLoading } = useSWR(
    key,
    () => getConsistencyStats(),
    swrOptions,
  );

  const updateStats = () => mutate(key);

  return {
    data: data?.payload,
    error,
    isLoading,
    mutate: updateStats,
  };
};

export const useTransactions = () => {
  const key = "all-transactions";
  const { data, error, isLoading } = useSWR(
    key,
    () => getTransactions(),
    swrOptions,
  );

  const updateTransactions = () => mutate(key);
  const payload = data?.payload
  return {
    error,
    isLoading,
    data: payload,
    pageSize: payload?.pageSize,
    count: payload?.total,
    currentPage: payload?.currentPage,
    mutate: updateTransactions,
  };
};


export const useTransaction = (id: string) => {
  const key = ["transaction", id]
  const {data, error, isLoading} = useSWR(key, () => getTransaction(id), swrOptions)
  return {
    error,
    isLoading,
    data: data?.payload
  }
}
