import { swrOptions } from "@utils/constants";
import { formatPrice } from "@utils/misc";
import useSWR, { mutate } from "swr";
import { getAllLoan } from "@queries/loan";

export const useLoan = () => {
  const key = "loan";
  const { data, error, isLoading } = useSWR(
    key,
    () => getAllLoan(),
    swrOptions,
  );

  const loanDetails = data?.payload;
  const updateLoan = () => mutate(key);

  return {
    data: loanDetails?.data[0],
    error,
    isLoading,
    pageSize: loanDetails?.pageSize,
    currentPage: loanDetails?.currentPage,
    mutate: updateLoan,
    count: loanDetails?.total,
  };
};
