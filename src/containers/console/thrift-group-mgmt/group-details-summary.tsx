import { HStack, VStack, Text, Box } from "@chakra-ui/react";
import { RefreshCcw } from "lucide-react";
import React from "react";

type GroupSummaryDetailsProps = {
  groupName: string;
  payOutAmount: string;
  dateCreated: string;
  startDate: string;
  createdBy: string;
  savingsPlan: string;
  cycleCount: string | number;
  description: string;
};

export const GroupDetailsSummary = ({
  groupName,
  createdBy,
  cycleCount,
  dateCreated,
  payOutAmount,
  savingsPlan,
  startDate,
  description,
}: GroupSummaryDetailsProps) => {
  return (
    <VStack
      width="100%"
      maxHeight="400px"
      border="0.5px solid #8181816B"
      gap="42px"
      padding="23px 19px"
      borderRadius={"10px"}
      justifyContent={"space-around"}
      alignItems={"start"}
    >
      <Box
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"210px"}
      >
        <VStack
          width={"50%"}
          gap="28px"
          height={"100%"}
          justifyContent={"start"}
          alignItems={"start"}
        >
          <VStack width="100%" justifyContent={"start"} alignItems={"start"}>
            <Text
              fontWeight={"500"}
              fontSize={"20px"}
              lineHeight={"30px"}
              color="black"
            >
              {" "}
              {groupName}
            </Text>
            <HStack gap="5px" justifyContent={"start"}>
              <Text
                fontWeight={"400"}
                fontSize={"14px"}
                lineHeight={"21px"}
                color="white"
                height="30px"
                borderRadius={"17px"}
                bg="var(--main)"
                maxWidth={"170px"}
                padding={"5px 10px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {savingsPlan}
              </Text>
              <Text
                fontWeight={"400"}
                fontSize={"12px"}
                lineHeight={"18px"}
                color="white"
                height="30px"
                borderRadius={"17px"}
                bg="var(--main)"
                padding={"5px 10px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap="5px"
              >
                <RefreshCcw size={15} />
                {cycleCount}
              </Text>
            </HStack>
          </VStack>
          <VStack
            width="100%"
            height="48px"
            justifyContent={"center"}
            alignItems={"start"}
          >
            <Text
              color={"var(--grey)"}
              fontWeight={"400"}
              fontSize={"14px"}
              lineHeight={"21px"}
            >
              Date created{" "}
            </Text>
            <Text
              color={"var(--dark)"}
              fontWeight={"400"}
              fontSize={"18px"}
              lineHeight={"27px"}
            >
              {dateCreated}
            </Text>
          </VStack>
          <VStack
            width="100%"
            height="48px"
            justifyContent={"center"}
            alignItems={"start"}
          >
            <Text
              color={"var(--grey)"}
              fontWeight={"400"}
              fontSize={"14px"}
              lineHeight={"21px"}
            >
              Created By{" "}
            </Text>
            <Text
              color={"var(--dark)"}
              fontWeight={"400"}
              fontSize={"18px"}
              lineHeight={"27px"}
              textDecoration={"underline"}
            >
              {createdBy}
            </Text>
          </VStack>
        </VStack>
        <VStack
          width={"50%"}
          height={"152px"}
          gap="28px"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <VStack
            width="100%"
            height="48px"
            justifyContent={"center"}
            alignItems={"end"}
          >
            <Text
              color={"var(--grey)"}
              fontWeight={"400"}
              fontSize={"14px"}
              lineHeight={"21px"}
            >
              Pay-out{" "}
            </Text>
            <Text
              color={"var(--dark)"}
              fontWeight={"500"}
              fontSize={"18px"}
              lineHeight={"27px"}
            >
              {payOutAmount}
            </Text>
          </VStack>
          <VStack
            width="100%"
            height="48px"
            justifyContent={"center"}
            alignItems={"end"}
          >
            <Text
              color={"var(--grey)"}
              fontWeight={"400"}
              fontSize={"14px"}
              lineHeight={"21px"}
            >
              Start date{" "}
            </Text>
            <Text
              color={"var(--dark)"}
              fontWeight={"400"}
              fontSize={"18px"}
              lineHeight={"27px"}
            >
              {startDate}
            </Text>
          </VStack>
        </VStack>
      </Box>
      <Text
        color={"var(--dark)"}
        fontWeight={"400"}
        fontSize={"18px"}
        lineHeight={"24px"}
      >
        {description}
      </Text>
    </VStack>
  );
};
