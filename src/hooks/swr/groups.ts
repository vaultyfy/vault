import {
  getAllGroups,
  getGroup,
  getJoinedGroups,
  filteredGroups,
  FilterGroupProps,
} from "@queries/groups";
import { swrOptions } from "@utils/constants";
import { dicebear } from "@utils/misc";
import useSWR, { mutate } from "swr";

export const useJoinedGroups = () => {
  const key = "joined-groups";
  const { data, error, isLoading } = useSWR(
    key,
    () => getJoinedGroups(),
    swrOptions,
  );

  const payload = data?.payload
  const updateJoinedGroups = () => mutate(key)

  return {
    error,
    isLoading,
    data: payload?.data,
    pageSize: payload?.pageSize,
    currentPage: payload?.currentPage,
    mutate: updateJoinedGroups,
    count: payload?.total,
  };
};

export const useAllGroups = () => {
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
    count: payload?.total,
  };
};

export const useFilteredGroups = (filter: FilterGroupProps) => {
  const key = filter ? ["my-groups", filter] : null;
  const { data, error, isLoading } = useSWR(
    key,
    () => filteredGroups(filter),
    swrOptions,
  );

  const payload = data?.payload;

  return {
    error,
    isLoading,
    data: payload?.data,
    pageSize: payload?.pageSize,
    currentPage: payload?.currentPage,
    count: payload?.total,
  };
};

export const useGroup = (groupId: string) => {
  const key = ["group", groupId];
  const { data, error, isLoading } = useSWR(
    key,
    () => getGroup(groupId),
    swrOptions,
  );

  return {
    data: data?.payload,
    error,
    isLoading,
  };
};
