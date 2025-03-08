import { getAllBanks, getUserBanks } from "@queries/banks";
import { swrOptions } from "@utils/constants";
import { Bank } from "@utils/types";
import useSWR, { mutate } from "swr";

export const useBanks = () => {
  const { data, error, isLoading } = useSWR(
    "bank-list",
    () => getAllBanks(),
    swrOptions,
  );

  const transformed =
    data?.map((bank: Bank) => ({
      name: bank.name,
      logo: bank.logo,
      slug: bank.slug,
      code: bank.code,
    })) || [];

  return {
    data: transformed,
    error,
    isLoading,
  };
};

export const useMyBanks = () => {
  const key = "my-banks";
  const { data, error, isLoading } = useSWR(
    key,
    () => getUserBanks(),
    swrOptions,
  );

  const payload = data?.payload
  const refreshBankList = () => mutate(key)

  console.log("payload", payload)

  return {
    data: payload?.data,
    count: payload?.total,
    pageSize: payload?.pageSize,
    currentPage: payload?.currentPage,
    error,
    isLoading,
    mutate: refreshBankList,
  };
};
