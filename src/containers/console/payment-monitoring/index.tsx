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
} from "@chakra-ui/react";
import React from "react";
import { Filter } from "../filters";
import { PROFILE_IMG } from "../overview/activities-table";
import { Link } from "@tanstack/react-router";

const HEADING = [
  "",
  "Group name",
  "Members",
  "End date",
  "position",
  "Amount",
  "Missed payments",
  "Action",
];

export const PaymentMonitoring = () => {
  return (
    <VStack
      width={"100%"}
      gap={"40px"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
    >
      <Filter />
      <Box
        width={"100%"}
        height={"60vh"}
        boxShadow={"md"}
        borderRadius={"10px"}
        padding="16px 18px"
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
                    width={"1/8"}
                    textAlign={"center"}
                  >
                    {head}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {Array.from({ length: 7 }).map((_, index) => (
                <Tr key={index} position={"relative"}>
                  <Td
                    width={"1/8"}
                    height="100%"
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <HStack width={"114px"} alignItems={"center"}>
                      {PROFILE_IMG.map((img, index: React.Key) => (
                        <Box
                          key={index}
                          sx={{
                            "&:nth-of-type(2)": {
                              marginLeft: "-25px",
                              zIndex: 50,
                              padding: "2px",
                            },
                            "&:nth-of-type(3)": {
                              marginLeft: "-25px",
                              zIndex: 60,
                              padding: "2.5px",
                            },
                          }}
                          width={"50px"}
                          height={"50px"}
                          borderRadius={"full"}
                          bgGradient="var(--main-gradient)"
                          padding="1.5px"
                        >
                          <Image
                            src={img}
                            width={"100%"}
                            height="100%"
                            objectPosition={"center"}
                            objectFit="cover"
                            borderRadius={"90%"}
                          />
                        </Box>
                      ))}
                    </HStack>
                  </Td>
                  <Td
                    width={"1/8"}
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
                      Unity savers
                    </Text>
                  </Td>
                  <Td
                    width={"1/8"}
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
                    width={"1/8"}
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
                    width={"1/8"}
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
                      7/10
                    </Text>
                  </Td>
                  <Td
                    width={"1/8"}
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
                      ₦2,000,000
                    </Text>
                  </Td>
                  <Td
                    width={"1/8"}
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
                        None
                      </Badge>
                    </Box>
                  </Td>
                  <Td
                    width={"1/8"}
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
                      <Link to="/console/payment-monitoring/payment-details">
                        <Button
                          width="89px"
                          height="33px"
                          padding="6px 48px"
                          borderRadius={"30px"}
                          fontSize={"14px"}
                          fontWeight={"normal"}
                          border="0.5px solid #8181816B"
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
