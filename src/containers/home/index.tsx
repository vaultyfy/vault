import { Box, Center } from "@chakra-ui/react";
import { Coins } from "./coins";
import { Faq } from "./faq";
import { FinancialGoals } from "./financial-goals";
import { FlexibleContributions } from "./flexible-contributions";
import { GetMoreDone } from "./get-more-done";
import { Hero } from "./hero";
import { HowItWorks } from "./how-it-works";
import { SystemMatching } from "./system-matching";

export const Home = () => {
  return (
    <>
      <FinancialGoals />
      <Box
        position="absolute"
        mx="auto"
        left={{ lg: "32%", md: "8%", base: "0" }}
        top={{lg: "15%", md: "18%", base: "15%"}}
        width={{ lg: "660px", md: "90%", base: "100%" }}
        zIndex="-1"
      >
        <Coins />
      </Box>
      <FlexibleContributions />
      <SystemMatching />
      <HowItWorks />
      <GetMoreDone />
      <Faq />
    </>
  );
};
