import { Box } from "@chakra-ui/react";
import { GetStarted, LoanDetails } from "@components/loan-me";
import { useLoan } from "@hooks/swr";
import { LoanDetailsSkeleton } from "@components/skeletons";

export const Loan = () => {
  const { data, error, isLoading } = useLoan();

  console.log(data, "loan data");
  console.log(isLoading, "loading loan data");

  // loanBalance: formatPrice(Number(loanDetails?.data[0]?.loanBalance!)),

  return (
    <Box
      as="section"
      width="100%"
      minHeight="100vh"
      gap={{ lg: "1em", md: "1em", base: "2em" }}
      flexWrap="wrap"
    >
      {/* {isLoading && <LoanDetailsSkeleton />} */}
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
