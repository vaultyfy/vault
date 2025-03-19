import {
  VStack,
  Box,
  Table,
  TableContainer,
  HStack,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Button,
  Image,
  Badge,
  Input,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
import React from "react";
import { PROFILE_IMG } from "../overview/activities-table";
import { Link } from "@tanstack/react-router";
import { Icon } from "@components/icon";

const HEADING = [
  "Applicants",
  "Amount requested",
  "Date Requested",
  "Payment period",
  "Approval Status",
  "Disbursement  status",
  "Action",
];

export const LoanManagement = () => {
  const TAB_LISTS = [
    "All loans",
    "Approved loans",
    "Declined approval",
    "Defaulters",
    "Defaulters",
    "Suspended accounts",
  ];

  return (
    <VStack
      width={"100%"}
      gap={"40px"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
    >
      <HStack
        width={"100%"}
        height={"44px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Tabs
          columnGap={"16px"}
          width={"100%"}
          height="41px"
          variant="soft-rounded"
          colorScheme="gray"
          display={{ base: "none", md: "flex" }}
        >
          <TabList py="10px" rounded="3xl" cursor="pointer" height={"100%"}>
            {TAB_LISTS.map((tab, idx) => (
              <Tab
                height="41px"
                padding="10px 20px"
                borderRadius={"30px"}
                fontSize={"14px"}
                fontWeight={"semibold"}
                lineHeight={"21px"}
                color={"#04040499"}
                key={idx}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Tabs>
        <HStack
          width={"27%"}
          border="0.5px solid var(--border-muted)"
          borderRadius={"31px"}
          padding="10px 21px"
          height="44px"
        >
          <Input
            outline={"none"}
            border="none"
            _focusVisible={{
              outline: "none",
              border: "none",
            }}
            placeholder="Search"
          />
          <Text>
            <Icon name={"search-normal"} />
          </Text>
        </HStack>
      </HStack>
      <Box
        width={"100%"}
        height={"70vh"}
        boxShadow={"md"}
        borderRadius={"10px"}
        padding="16px 18px"
        border={"0.5px solid var(--border-muted)"}
      >
        <TableContainer width={"100%"} height={"100%"} overflowY={"auto"}>
          <Table variant="simple" gap={"29px"}>
            <Thead>
              <Tr width={"100%"}>
                {HEADING.map((head, index: React.Key) => (
                  <Th
                    fontSize={"14px"}
                    fontWeight={"normal"}
                    lineHeight={"19px"}
                    color="var(--table-text)"
                    key={index}
                    width={`1/${HEADING.length}`}
                    textAlign={"center"}
                  >
                    {head}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {Array.from({ length: 10 }).map((_, index) => (
                <Tr key={index} position={"relative"}>
                  <Td
                    width={"1/7"}
                    height="100%"
                    alignItems={"center"}
                    justifyContent={"center"}
                    textAlign={"center"}
                  >
                    <Text
                      fontSize={"16px"}
                      fontWeight={"normal"}
                      lineHeight={"19px"}
                      textDecoration={"underline"}
                    >
                      Alishomo daniel
                    </Text>
                  </Td>
                  <Td
                    width={"1/7"}
                    height="100%"
                    alignItems={"center"}
                    justifyContent={"center"}
                    textAlign={"center"}
                  >
                    <Text
                      fontSize={"16px"}
                      fontWeight={"normal"}
                      lineHeight={"19px"}
                    >
                      N500,000
                    </Text>
                  </Td>
                  <Td
                    width={"1/7"}
                    height="100%"
                    alignItems={"center"}
                    justifyContent={"center"}
                    textAlign={"center"}
                  >
                    <Text
                      fontSize={"16px"}
                      fontWeight={"normal"}
                      lineHeight={"19px"}
                    >
                      10-2-2024
                    </Text>
                  </Td>
                  <Td
                    width={"1/7"}
                    height="100%"
                    alignItems={"center"}
                    justifyContent={"center"}
                    textAlign={"center"}
                  >
                    <Text
                      fontSize={"16px"}
                      fontWeight={"normal"}
                      lineHeight={"19px"}
                    >
                      080320304
                    </Text>
                  </Td>
                  <Td
                    width={"1/7"}
                    height="100%"
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Box
                      width={"101px"}
                      display="flex"
                      justifyContent={"center"}
                      alignItems={"center"}
                      marginX={"auto"}
                    >
                      <Badge
                        height="33px"
                        padding="6px 48px"
                        borderRadius={"30px"}
                        fontSize={"14px"}
                        fontWeight={"normal"}
                        lineHeight={"21px"}
                        color="var(--pay-green)"
                        background={"var(--pay-green-bg)"}
                        _hover={{
                          background: "var(--pay-green-bg)",
                        }}
                      >
                        Approved
                      </Badge>
                    </Box>
                  </Td>
                  <Td
                    width={"1/7"}
                    height="100%"
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Box
                      width={"101px"}
                      display="flex"
                      justifyContent={"center"}
                      alignItems={"center"}
                      marginX={"auto"}
                    >
                      <Badge
                        height="33px"
                        padding="6px 48px"
                        borderRadius={"30px"}
                        fontSize={"14px"}
                        fontWeight={"normal"}
                        lineHeight={"21px"}
                        color="var(--pay-green)"
                        background={"var(--pay-green-bg)"}
                        _hover={{
                          background: "var(--pay-green-bg)",
                        }}
                      >
                        Paid
                      </Badge>
                    </Box>
                  </Td>
                  <Td
                    width={"1/7"}
                    height="100%"
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Box
                      width={"101px"}
                      display="flex"
                      justifyContent={"center"}
                      alignItems={"center"}
                      marginX={"auto"}
                    >
                      <Link to="/console/loan-mgmt/loan-details">
                        <Button
                          width="89px"
                          height="33px"
                          padding="6px 48px"
                          borderRadius={"30px"}
                          fontSize={"14px"}
                          fontWeight={"normal"}
                          border="0.5px solid var(--border-muted)"
                          lineHeight={"21px"}
                          color="var(--grey)"
                          background={"white"}
                          _hover={{
                            background: "white",
                          }}
                        >
                          View
                        </Button>{" "}
                      </Link>
                    </Box>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </VStack>
  );
};
