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

export const ActivitiesTable = () => {
  return (
    <Table variant="simple" size={"sm"}>
      <Thead
        fontFamily={"var(--clash-grotesk-400)"}
        fontSize={"16px"}
        lineHeight={"19px"}
        color="#6e6e6e"
      >
        <Tr>
          <Th />
          <Th>Group name</Th>
          <Th>members</Th>
          <Th>your position</Th>
          <Th>Pay date</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Array.from({ length: 4 }).map((_, i) => (
          <Tr>
            <Td>
              <AvatarGroup size="md" max={3}>
                <Avatar name="Ryan Florence" src="/img/person-1.svg" />
                <Avatar name="Segun Adebayo" src="/img/person-2.svg" />
                <Avatar name="Kent Dodds" src="/img/person-3.svg" />
                {/* <Avatar
                          name="Kent Dodds"
                          src="/public/img/person-4.svg"
                        /> */}
              </AvatarGroup>
            </Td>
            <Td>
              <Text
                as="p"
                fontFamily={"var(--poppins)"}
                fontWeight={"medium"}
                fontSize={{ base: "14px", lg: "18px" }}
                color="#000000"
              >
                Unity savers
              </Text>
            </Td>
            <Td>
              <Text
                as="p"
                fontFamily={"var(--poppins)"}
                fontWeight={"medium"}
                fontSize={{ base: "14px", lg: "18px" }}
                color="#000000"
              >
                8
              </Text>
            </Td>
            <Td>
              <Text
                as="p"
                fontFamily={"var(--poppins)"}
                fontWeight={"medium"}
                fontSize={{ base: "14px", lg: "18px" }}
                color="#000000"
              >
                7th
              </Text>
            </Td>
            <Td>
              <Box
                fontFamily={"var(--poppins)"}
                fontWeight={"medium"}
                fontSize={{ base: "14px", lg: "18px" }}
                color="#040404"
                px="0,5rem"
                py="4px"
                bgColor="#f6f6f6"
                rounded={"3xl"}
              >
                02-01-2025
              </Box>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
