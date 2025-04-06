import { Box } from "@chakra-ui/react";
import { GetStarted, LoanDetails } from "@components/loan-me";

export const Loan = () => {

    return (
      <Box
        as="section"
        width="100%"
        minHeight="100vh"
        gap={{ lg: "1em", md: "1em", base: "2em" }}
        flexWrap="wrap"
      >
        
        <GetStarted/>
        {/* <LoanDetails/> */}
       
      </Box>
    );
}