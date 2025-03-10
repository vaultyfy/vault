import { getAllGroups, getJoinedGroups } from "@queries/groups";
import { swrOptions } from "@utils/constants";
import useSWR, { mutate } from "swr";

export const useJoinedGroups = () => {
  const key = "joined-groups";
  const { data, error, isLoading } = useSWR(
    key,
    () => getJoinedGroups(),
    swrOptions,
  );

  const payload = data?.payload;

  return {
    error,
    isLoading,
    data: payload,
  };
};


export const useMyGroups = () => {
  const key = "my-groups";
  const { data, error, isLoading } = useSWR(
    key,
    () => getAllGroups(),
    swrOptions,
  );

  const payload = data?.payload;
  const updateGroupsList = () => mutate(key);

  return {
    error,
    isLoading,
    data: payload?.data,
    pageSize: payload?.pageSize,
    currentPage: payload?.currentPage,
    mutate: updateGroupsList,
    count: payload?.total
  };
};
