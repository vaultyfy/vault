import { Stack, Text, Box } from "@chakra-ui/react";
import React from "react";

interface OverviewCardProps {
  title: string;
  number: number | string;
}

export const OverviewCard = ({ title, number }: OverviewCardProps) => {
  return (
    <Box
      width={"25%"}
      height={"129px"}
      pr={"10px"}
      borderRadius={"10px"}
      display={"flex"}
      flexDirection={"row"}
    >
      <Box
        width={"3.5%"}
        height={"100%"}
        borderLeftRadius={"10px"}
        background="linear-gradient(135deg, #2C9BF0, #1CCFBD)"
      ></Box>
      <Stack
        width={"100%"}
        height={"100%"}
        borderRightRadius={"10px"}
        background="var(--main)"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          width={"90%"}
          height={"68px"}
          direction={"column"}
          color={"white"}
          gap={"21px"}
        >
          <Text fontSize={"16px"} lineHeight={"19px"}>
            {title}
          </Text>
          <Text fontSize={"28px"} lineHeight={"19px"} fontWeight={"700"}>
            {number}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

const cardData = [
  {
    id: crypto.randomUUID(),
    question: "Total  thrift groups",
  },
  {
    id: crypto.randomUUID(),
    question: "Total Users",
  },
  {
    id: crypto.randomUUID(),
    question: "Total contribution",
  },
  {
    id: crypto.randomUUID(),
    question: " Pending Payout",
  },
];

export const OverviewCardSection = () => {
  return (
    <Box display={"flex"} flexDirection={"row"} width={"100%"}>
      {cardData.map((data, idx) => {
        return <OverviewCard title={data.question} number={idx} />;
      })}
    </Box>
  );
};
