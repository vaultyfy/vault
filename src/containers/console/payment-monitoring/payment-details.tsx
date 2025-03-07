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
import { Link, useNavigate } from "@tanstack/react-router";

interface ContactDetailsProps {
  email: string;
  fullName: string;
  phoneNumber: string;
  BNV: string;
  address: string;
  bankAccountName: string;
  bankAccountNumber: string;
  bankName: string;
}

const ContactDetails = ({
  email,
  fullName,
  phoneNumber,
  BNV,
  address,
  bankAccountName,
  bankAccountNumber,
  bankName,
}: ContactDetailsProps) => {
  return (
    <VStack
      overflowY={"auto"}
      border="0.5px solid #8181816B"
      height={"611px"}
      width={"42%"}
      padding="23px 19px"
      justifyContent={"space-between"}
      alignItems={"start"}
      borderRadius={"10px"}
    >
      <VStack
        height="65px"
        borderBottom={"0.5px solid #8181816B"}
        justifyContent={"space-between"}
        alignItems={"start"}
        gap="8px"
        padding={"5px"}
        width={"100%"}
      >
        <Text
          fontWeight={"400"}
          fontSize={"14px"}
          lineHeight={"21px"}
          color="var(--grey)"
        >
          Email
        </Text>
        <Text
          fontWeight={"400"}
          fontSize={"18px"}
          lineHeight={"27px"}
          color="var(--dark)"
        >
          {email}
        </Text>
      </VStack>
      <VStack
        height="65px"
        borderBottom={"0.5px solid #8181816B"}
        justifyContent={"space-between"}
        alignItems={"start"}
        gap="8px"
        padding={"5px"}
        width={"100%"}
      >
        <Text
          fontWeight={"400"}
          fontSize={"14px"}
          lineHeight={"21px"}
          color="var(--grey)"
        >
          Full name
        </Text>
        <Text
          fontWeight={"400"}
          fontSize={"18px"}
          lineHeight={"27px"}
          color="var(--dark)"
        >
          {fullName}
        </Text>
      </VStack>
      <VStack
        height="65px"
        borderBottom={"0.5px solid #8181816B"}
        justifyContent={"space-between"}
        alignItems={"start"}
        gap="8px"
        padding={"5px"}
        width={"100%"}
      >
        <Text
          fontWeight={"400"}
          fontSize={"14px"}
          lineHeight={"21px"}
          color="var(--grey)"
        >
          Phone number
        </Text>
        <Text
          fontWeight={"400"}
          fontSize={"18px"}
          lineHeight={"27px"}
          color="var(--dark)"
        >
          {phoneNumber}
        </Text>
      </VStack>
      <VStack
        height="65px"
        borderBottom={"0.5px solid #8181816B"}
        justifyContent={"space-between"}
        alignItems={"start"}
        gap="8px"
        padding={"5px"}
        width={"100%"}
      >
        <Text
          fontWeight={"400"}
          fontSize={"14px"}
          lineHeight={"21px"}
          color="var(--grey)"
        >
          BVN
        </Text>
        <Text
          fontWeight={"400"}
          fontSize={"18px"}
          lineHeight={"27px"}
          color="var(--dark)"
        >
          {BNV}
        </Text>
      </VStack>
      <VStack
        height="65px"
        borderBottom={"0.5px solid #8181816B"}
        justifyContent={"space-between"}
        alignItems={"start"}
        gap="8px"
        padding={"5px"}
        width={"100%"}
      >
        <Text
          fontWeight={"400"}
          fontSize={"14px"}
          lineHeight={"21px"}
          color="var(--grey)"
        >
          Address
        </Text>
        <Text
          fontWeight={"400"}
          fontSize={"18px"}
          lineHeight={"27px"}
          color="var(--dark)"
        >
          {address}
        </Text>
      </VStack>
      <VStack
        height="65px"
        borderBottom={"0.5px solid #8181816B"}
        justifyContent={"space-between"}
        alignItems={"start"}
        gap="8px"
        padding={"5px"}
        width={"100%"}
      >
        <Text
          fontWeight={"400"}
          fontSize={"14px"}
          lineHeight={"21px"}
          color="var(--grey)"
        >
          Account name
        </Text>
        <Text
          fontWeight={"400"}
          fontSize={"18px"}
          lineHeight={"27px"}
          color="var(--dark)"
        >
          {bankAccountName}
        </Text>
      </VStack>
      <VStack
        height="65px"
        borderBottom={"0.5px solid #8181816B"}
        justifyContent={"space-between"}
        alignItems={"start"}
        gap="8px"
        padding={"5px"}
        width={"100%"}
      >
        <Text
          fontWeight={"400"}
          fontSize={"14px"}
          lineHeight={"21px"}
          color="var(--grey)"
        >
          Bank account number
        </Text>
        <Text
          fontWeight={"400"}
          fontSize={"18px"}
          lineHeight={"27px"}
          color="var(--dark)"
        >
          {bankAccountNumber}
        </Text>
      </VStack>
      <VStack
        height="65px"
        justifyContent={"space-between"}
        alignItems={"start"}
        gap="8px"
        padding={"5px"}
        width={"100%"}
      >
        <Text
          fontWeight={"400"}
          fontSize={"14px"}
          lineHeight={"21px"}
          color="var(--grey)"
        >
          Bank name
        </Text>
        <Text
          fontWeight={"400"}
          fontSize={"18px"}
          lineHeight={"27px"}
          color="var(--dark)"
        >
          {bankName}
        </Text>
      </VStack>
    </VStack>
  );
};

export const PaymentDetails = () => {
  const HEADING = ["Groups ", "Amount", "Date paid", "position", "Status"];

  const PROFILE_IMG = "/img/admin/profileImg1.jpeg";

  const navigate = useNavigate();
  const handleCLick = () => {
    navigate({ to: "/console/payment-monitoring" });
  };
  return (
    <VStack
      width={"100%"}
      gap={"40px"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      height={"100%"}
    >
      <VStack
        width="100%"
        height={"100%"}
        justifyContent={"start"}
        alignItems={"start"}
        gap={"18px"}
      >
        <HStack
          maxWidth={"300px"}
          height="38px"
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <Link to="/console/payment-monitoring">
            <Text cursor={"pointer"}>
              <ChevronLeft />
            </Text>
          </Link>
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
          <Text fontSize={"24px"} fontWeight={"400px"}>
            Alishomo daniel
          </Text>
        </HStack>
        <HStack
          width="100%"
          alignItems={"start"}
          justifyContent={"space-between"}
        >
          <ContactDetails
            email={"akinlolu@gmail.com"}
            fullName={"Akinlolu daniel"}
            phoneNumber={"0902300000"}
            BNV={"1293020392920"}
            address={"GT Bank"}
            bankAccountName={"Akinlolu Daniel"}
            bankAccountNumber={"0233850785"}
            bankName={"GT Bank"}
          />
          <VStack
            overflowY={"auto"}
            height={"550px"}
            width={"55%"}
            gap="10px"
            justifyContent={"start"}
            alignItems={"start"}
          >
            <Text fontWeight={"400"} fontSize={"24px"} lineHeight={"30px"}>
              Payment History
            </Text>
            <TableContainer
              width={"100%"}
              height={"100%"}
              overflowY={"auto"}
              borderRadius={"10px"}
              border="0.5px solid #8181816B"
              padding="17px 18px"
            >
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
                  {Array.from({ length: 6 }).map((_, index) => (
                    <Tr key={index} position={"relative"}>
                      <Td
                        width={"1/5"}
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
                          Unity savers
                        </Text>
                      </Td>
                      <Td
                        width={"1/5"}
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
                          N200,000
                        </Text>
                      </Td>
                      <Td
                        width={"1/5"}
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
                        width={"1/5"}
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
                        width={"1/5"}
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
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};
