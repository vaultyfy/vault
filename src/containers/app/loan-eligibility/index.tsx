import { Flex, Box } from "@chakra-ui/react";
import { ProgressTabs } from "@components/loan-me/progress-tabs";
import {
  LoanEligibilityContainer,
  RejectOffer,
  AcceptOffer,
} from "@components/loan-me";

export const LoanEligibility = () => {
  return (
    <Flex
      alignItems="center"
      width="full"
      flexDirection="column"
      py="1rem"
      border="2px solid black"
    >
      <ProgressTabs />
      <Box mt="2rem">
        {/* <LoanEligibilityContainer /> */}
        {/* <RejectOffer /> */}
        <AcceptOffer />
      </Box>
    </Flex>
  );
};
