import { getExpectedReturns, getWallet } from "@queries/get-wallet";
import { swrOptions } from "@utils/constants";
import useSWR from "swr";
import dayjs from "dayjs";

export const useWallet = () => {
  const key = "wallet";
  const { data, error, isLoading } = useSWR(key, () => getWallet(), swrOptions);
  const {
    data: expectedReturns,
    error: err,
    isLoading: loadingReturns,
  } = useExpectedReturns();

  const payload = data?.payload;

  return {
    error: error || err,
    data: data?.payload,
    isLoading: isLoading || loadingReturns,
    expectedReturns,
    walletBalance: payload?.balance,
    lastUpdated: dayjs(payload?.updatedAT || payload?.createdAT).format(
      "dd-mm-yyyy",
    ),
  };
};

export const useExpectedReturns = () => {
  const key = "expected-returns";
  const { data, error, isLoading } = useSWR(
    key,
    () => getExpectedReturns(),
    swrOptions,
  );

  return {
    data: data?.payload?.expectedReturns,
    error,
    isLoading,
  };
};
