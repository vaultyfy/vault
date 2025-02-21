import {
  Table,
  Tr,
  Td,
  Th,
  Text,
  AvatarGroup,
  Avatar,
  Box,
  Thead,
  Tbody,
} from "@chakra-ui/react";
import { Status, GlobalStatus } from "@components/ui";

export const ACTIVITIES_TABLE_HEADINGS = [
  "Group name",
  "Members",
  "Your position",
  "Pay date",
];

export const ActivitiesTable = () => {
  return (
    <Table variant="simple" size="sm">
      <Thead height="60px">
        <Tr>
          <Th />
          {ACTIVITIES_TABLE_HEADINGS.map((heading, index: React.Key) => {
            return (
              <Th
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
        {Array.from({ length: 4 }).map((_, i) => (
          <Tr key={i} borderBottom="1px solid red">
            <Td height="80px">
              <AvatarGroup size="md" max={3}>
                <Avatar name="Ryan Florence" src="/img/person-1.svg" />
                <Avatar name="Segun Adebayo" src="/img/person-2.svg" />
                <Avatar name="Kent Dodds" src="/img/person-3.svg" />
              </AvatarGroup>
            </Td>
            <Td>
              <Text fontWeight="400" fontSize={{ base: "14px", lg: "18px" }}>
                Unity savers
              </Text>
            </Td>
            <Td>
              <Text fontWeight="400" fontSize={{ base: "14px", lg: "18px" }}>
                8
              </Text>
            </Td>
            <Td>
              <Text fontWeight="400" fontSize={{ base: "14px", lg: "18px" }}>
                7th
              </Text>
            </Td>
            <Td>
              <Status status={"02-01-2025" as GlobalStatus} width="104px" />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
