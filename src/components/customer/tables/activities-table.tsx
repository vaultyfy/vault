import { Table, Tr, Td, Th, Text, Box, Thead, Tbody } from "@chakra-ui/react";
import { Status, GlobalStatus } from "@components/ui";
import { Group } from "@utils/types";
import { StackedAvatars } from "../ui";
import { bgs } from "@utils/constants";
import { dicebear } from "@utils/misc";
import dayjs from "dayjs";
import { ActivitiesTableSkeleton } from "@components/skeletons";
import { useAuthContext } from "@hooks/context";

export const ACTIVITIES_TABLE_HEADINGS = [
  "Group name",
  "Members",
  "Your position",
  "Pay date",
];

interface ActivitiesTableProps {
  data: Group[];
  loading: boolean;
}

export const ActivitiesTable = ({ data, loading }: ActivitiesTableProps) => {
  const { user } = useAuthContext();

  return (
    <Table variant="simple" size="sm">
      <Thead height="60px">
        <Tr>
          <Th />
          {ACTIVITIES_TABLE_HEADINGS.map((heading, index: React.Key) => {
            return (
              <Th
                textAlign="center"
                fontSize="16px"
                lineHeight="19px"
                color="var(--alt-text)"
                key={index}
                fontWeight="400"
                textTransform="none"
                fontFamily="var(--clash-grotesk-400)"
              >
                {heading}
              </Th>
            );
          })}
        </Tr>
      </Thead>
      <Tbody>
        {loading ? (
          <ActivitiesTableSkeleton />
        ) : (
          <>
            {data?.map((group) => {
              const groupAvatars =
                group?.participants
                  ?.filter((participant) => participant.customer)
                  ?.map((participant, index) => {
                    const memberBg = bgs[index % bgs.length];
                    return (
                      participant.customer?.profilePicture ||
                      `${dicebear}?seed=${participant.customer?.name?.split(" ")?.[0] || "unknown"}&size=48&flip=true&backgroundColor=${memberBg}`
                    );
                  }) || [];

              return (
                <Tr key={group?.groupID}>
                  <Td height="80px">
                    {group?.participants?.length === 0 ? (
                      <Text fontSize="12px">0 members</Text>
                    ) : (
                      <StackedAvatars images={groupAvatars} maxVisible={3} />
                    )}
                  </Td>
                  <Td textAlign="center">
                    <Text
                      fontWeight="400"
                      color="var(--dark)"
                      fontSize={{ base: "14px", lg: "14px" }}
                    >
                      {group?.name}
                    </Text>
                  </Td>
                  <Td textAlign="center">
                    <Text
                      fontWeight="400"
                      fontSize={{ base: "14px", lg: "18px" }}
                    >
                      {group.joinedParticipantsCount}
                    </Text>
                  </Td>
                  <Td textAlign="center">
                    <Text
                      fontWeight="400"
                      fontSize={{ base: "14px", lg: "18px" }}
                    >
                      {
                        group.participants.find(
                          (participant) =>
                            participant.customer?.id === user?.id,
                        )?.position
                      }
                    </Text>
                  </Td>
                  <Td>
                    <Status
                      status={
                        `${dayjs(group.endDate || new Date()).format("DD-MM-YYYY")}` as GlobalStatus
                      }
                      width="104px"
                    />
                  </Td>
                </Tr>
              );
            })}
          </>
        )}
      </Tbody>
    </Table>
  );
};
