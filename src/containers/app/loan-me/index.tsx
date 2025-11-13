import { Box } from "@chakra-ui/react";
import { GetStarted, LoanDetails } from "./components";
import { useLoan } from "@hooks/swr";
import { LoanDetailsSkeleton } from "@components/skeletons";

export const Loan = () => {
  const { data, isLoading } = useLoan();
  return (
    <Box
      as="section"
      width="100%"
      minHeight="100vh"
      gap={{ lg: "1em", md: "1em", base: "2em" }}
      flexWrap="wrap">
      {isLoading ? (
        <LoanDetailsSkeleton />
      ) : !data ? (
        <GetStarted />
      ) : (
        <LoanDetails loanDetails={data} />
      )}
    </Box>
  );
};
