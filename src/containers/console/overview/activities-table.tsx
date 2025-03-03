import {
  Box,
  Table,
  TableContainer,
  VStack,
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
import React, { useState } from "react";
import { ActionButton } from "./action-button";

const HEADING = [
  "",
  "Group name",
  "Members",
  "End date",
  "Position",
  "Amount",
  "Missed Payments",
  "Action",
];
export const PROFILE_IMG = [
  "/img/admin/profileImg1.jpeg",
  "/img/admin/profileImg2.jpeg",
  "/img/admin/profileImg3.jpeg",
];

export const ActivitiesTable = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };
  return (
    <VStack
      width={"100%"}
      height={"60vh"}
      overflow={"auto"}
      alignItems={"flex-start"}
      gap={"29px"}
      borderRadius={"10px"}
      boxShadow={"md"}
      padding="16px 18px"
    >
      <HStack gap={"16px"} width={"100%"} height="41px">
        <Text fontSize={"24px"} fontWeight={"semibold"} lineHeight={"19px"}>
          Activities
        </Text>
        <Button
          width="169px"
          height="100%"
          padding="10px 20px"
          borderRadius={"30px"}
          bg="var(--text-2)"
          fontSize={"14px"}
          fontWeight={"semibold"}
          lineHeight={"21px"}
          color={"#04040499"}
          _hover={{
            background: "var(--text-2)",
          }}
        >
          Todays pay-outs
        </Button>
        <Button
          width="169px"
          height="100%"
          padding="10px 20px"
          borderRadius={"30px"}
          bg="transparent"
          fontSize={"14px"}
          fontWeight={"semibold"}
          lineHeight={"21px"}
          color={"#04040499"}
          _hover={{
            background: "var(--text-2)",
          }}
        >
          Upcoming pay-outs
        </Button>
        <Button
          width="169px"
          height="100%"
          padding="10px 20px"
          borderRadius={"30px"}
          fontSize={"14px"}
          fontWeight={"semibold"}
          lineHeight={"21px"}
          color={"#04040499"}
          bg="transparent"
          _hover={{
            background: "var(--text-2)",
          }}
        >
          Delayed pay-outs
        </Button>
      </HStack>
      <TableContainer width={"100%"} height={"80%"} overflowY={"auto"}>
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
                  width={"1/8"}
                  textAlign={"center"}
                >
                  {head}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {Array.from({ length: 6 }).map((_, index) => (
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
                    <ActionButton
                      isOpen={openItem === index}
                      onClick={() => handleToggle(index)}
                    />
                  </Box>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};
