import useSWR, { mutate } from "swr";
import { swrOptions } from "@utils/constants";
import { getAllNotifications } from "@queries/notification";

export const useNotifications = () => {
  const key = "all-notifications";
  const { data, error, isLoading } = useSWR(
    key,
    () => getAllNotifications(),
    swrOptions,
  );

  const payload = data?.payload;

  const updateNotifications = () => mutate(key);

  return {
    error,
    isLoading,
    data: payload?.data,
    pageSize: payload?.pageSize,
    currentPage: payload?.currentPage,
    mutate: updateNotifications,
    count: payload?.total,
  };
};
