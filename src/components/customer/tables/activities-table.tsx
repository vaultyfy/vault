import { Table, Tr, Td, Th, Text, Box, Thead, Tbody } from "@chakra-ui/react";
import { Status, GlobalStatus } from "@components/ui";
import { Group } from "@utils/types";
import { StackedAvatars } from "../ui";
import { bgs } from "@utils/constants";
import { dicebear } from "@utils/misc";
import dayjs from "dayjs";

export const ACTIVITIES_TABLE_HEADINGS = [
  "Group name",
  "Members",
  "Your position",
  "Pay date",
];

export const ActivitiesTable = ({ data }: { data: Group[] }) => {
  const avatars = data.map((data) =>
    data?.participants?.map((member, index) => {
      const memberBg = bgs[index % bgs.length];
      return `${member.customer?.profilePicture || `${dicebear}?seed=${member?.customer?.name}&size=48&flip=true&backgroundColor=${memberBg}`}`;
    }),
  )?.[0];

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
        {data?.map((group) => {
          return (
            <Tr key={group?.groupID}>
              <Td height="80px">
                {avatars?.length === 0 ? (
                  <Text fontSize="12px">{avatars?.length} members</Text>
                ) : (
                  <StackedAvatars images={avatars} maxVisible={3} />
                )}
              </Td>
              <Td textAlign="center">
                <Text fontWeight="400" fontSize={{ base: "14px", lg: "18px" }}>
                  {group?.name}
                </Text>
              </Td>
              <Td textAlign="center">
                <Text fontWeight="400" fontSize={{ base: "14px", lg: "18px" }}>
                  {group.joinedParticipantsCount}
                </Text>
              </Td>
              <Td textAlign="center">
                <Text fontWeight="400" fontSize={{ base: "14px", lg: "18px" }}>
                  {group.participants.map((me) => me.position)}
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
        })}{" "}
      </Tbody>
    </Table>
  );
};
