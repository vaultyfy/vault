import {
  HStack,
  VStack,
  Text,
  Button,
  Box,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { GroupDetailsSummary } from "./group-details-summary";

export const GroupDetails = () => {
  const HEADING = [
    "Members name",
    "Email",
    "Date joine",
    "position",
    "Missed payments",
  ];

  const PROFILE_IMG = "/img/admin/profileImg1.jpeg";

  return (
    <VStack
      width={"100%"}
      gap={"40px"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      height={"100%"}
    >
      <VStack
        width="70%"
        height={"100%"}
        justifyContent={"start"}
        alignItems={"start"}
        gap={"18px"}
      >
        <HStack
          minWidth={"169px"}
          height="38px"
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <Link to="/console/group-mgmt">
            <Text cursor={"pointer"}>
              <ChevronLeft />
            </Text>
          </Link>
          <Text fontSize={"24px"} fontWeight={"400px"}>
            Unity savers
          </Text>
        </HStack>
        <Box width="100%">
          <GroupDetailsSummary
            groupName={"Unity Savers"}
            payOutAmount={"₦100,000,000"}
            dateCreated={"24th Nov 2025"}
            startDate={"24th Nov 2025"}
            createdBy={"Alimosho adiloma"}
            savingsPlan={"₦10,000/week"}
            cycleCount={"3"}
            description="This group is designed for parents and guardians saving for school fees and supplies. Let’s plan ahead and make the back-to-school season stress-free"
          />
        </Box>
        <Box
          overflowY={"auto"}
          border="0.5px solid #8181816B"
          height={"390px"}
          width={"100%"}
          padding="23px 19px"
          borderRadius={"10px"}
        >
          <TableContainer width={"100%"} height={"100%"} overflowY={"auto"}>
            <Table variant="simple">
              <Thead>
                <Tr width={"100%"}>
                  {HEADING.map((head, index: React.Key) => (
                    <Th
                      fontSize={"14px"}
                      fontWeight={"normal"}
                      lineHeight={"19px"}
                      color="var(--table-text)"
                      key={index}
                      width={`1/5`}
                      textAlign={"center"}
                    >
                      {head}
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {Array.from({ length: 4 }).map((_, index) => (
                  <Tr key={index} position={"relative"}>
                    <Td
                      width={"1/8"}
                      height="100%"
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      textAlign={"center"}
                      gap="14px"
                    >
                      <Box
                        width={"50px"}
                        height={"50px"}
                        borderRadius={"full"}
                        bgGradient="var(--main-gradient)"
                        padding="1.5px"
                      >
                        <Image
                          src={PROFILE_IMG}
                          width={"100%"}
                          height="100%"
                          objectPosition={"center"}
                          objectFit="cover"
                          borderRadius={"90%"}
                        />
                      </Box>
                      <Text
                        fontSize={"16px"}
                        fontWeight={"normal"}
                        lineHeight={"19px"}
                        textDecoration={"underline"}
                      >
                        Alishomo Daniel
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
                        danielrega@gmail.com
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
                        7/12
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
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </VStack>
    </VStack>
  );
};
