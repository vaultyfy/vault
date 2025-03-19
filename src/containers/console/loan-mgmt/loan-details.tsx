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
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { LoanDetailsSummary } from "./loan-details-summay";
import { AdjustLoanModal } from "@layouts/modal-layout";

const HEADING = [
  "Repaid loans",
  "Amount",
  "Date  Completed",
  "Duration",
  "Missed payments",
];
export const LoanDetails = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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
          <HStack width={"100%"} height="34px" justifyContent={"space-between"}>
            <HStack
              minWidth={"169px"}
              height="38px"
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <Link to="/console/loan-mgmt">
                <Text cursor={"pointer"}>
                  <ChevronLeft />
                </Text>
              </Link>
              <Text fontSize={"24px"} fontWeight={"400px"}>
                Loan details
              </Text>
            </HStack>
            <HStack
              width="285px"
              justifyContent={"space-between"}
              alignItems={"center"}
              height={"100%"}
            >
              <Button
                width={"87px"}
                height="100%"
                bg="var( --card-bg-active)"
                color="var(--main)"
                fontSize={"12px"}
                fontWeight={"500"}
                lineHeight={"19px"}
                padding={"16px 4px"}
                borderRadius={"36px"}
                shadow={"md"}
                _hover={{
                  background: "var( --card-bg-active)",
                }}
              >
                Decline
              </Button>
              <Button
                width={"87px"}
                height="100%"
                bg="var( --main)"
                color="var(--white-fade)"
                fontSize={"12px"}
                fontWeight={"500"}
                lineHeight={"19px"}
                padding={"16px 4px"}
                borderRadius={"36px"}
                _hover={{
                  background: "var( --main)",
                }}
                onClick={onOpen}
              >
                Adjust
              </Button>
              <Button
                width={"87px"}
                height="100%"
                bg="var( --main)"
                color="var(--white-fade)"
                fontSize={"12px"}
                fontWeight={"500"}
                lineHeight={"19px"}
                padding={"16px 4px"}
                borderRadius={"36px"}
                _hover={{
                  background: "var( --main)",
                }}
              >
                Approve
              </Button>
            </HStack>
          </HStack>
          <Box width="100%">
            <LoanDetailsSummary
              loanStatus={"Disbursed | 12-2-2024"}
              requestedBy={"Alimosho adiloma"}
              loanRequested={"₦100,000,000"}
              annualIncome={"24th Nov 2025"}
              paymentPlan={"3 months/spread payment"}
              loanPurpose={"Business"}
              dateRequested={"24th Nov 2025"}
              bankStatement={"Gtb-bank -12.pdf"}
              job={"Cleaner"}
            />
          </Box>
          <Box
            overflowY={"auto"}
            border="0.5px solid var(--border-muted)"
            height={"342px"}
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
                  {Array.from({ length: 5 }).map((_, index) => (
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
                          N500,000
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
                          3m
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
      <AdjustLoanModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
