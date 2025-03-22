import { HStack, VStack, Text, Box } from "@chakra-ui/react";
import { Icon } from "@components/icon";

type loanSummaryDetailsProps = {
  loanStatus: string;
  requestedBy: string;
  loanRequested: string;
  annualIncome: string;
  paymentPlan: string;
  loanPurpose: string;
  dateRequested: string;
  bankStatement: string;
  job: string;
};

export const LoanDetailsSummary = ({
  loanStatus,
  requestedBy,
  loanRequested,
  annualIncome,
  paymentPlan,
  loanPurpose,
  dateRequested,
  bankStatement,
  job,
}: loanSummaryDetailsProps) => {
  return (
    <VStack
      width="100%"
      maxHeight="420px"
      border="0.5px solid var(--border-muted)"
      gap="42px"
      padding="23px 19px"
      borderRadius={"10px"}
      justifyContent={"space-around"}
      alignItems={"start"}
    >
      <VStack
        width="100%"
        justifyContent={"center"}
        alignItems={"start"}
        padding="6px 12px"
        background={"#A5FF9B1C"}
        minWidth="220px"
        maxWidth={"250px"}
        height="60px"
        borderRadius={"7px"}
      >
        <Text
          fontWeight={"400"}
          fontSize={"14px"}
          lineHeight={"21px"}
          color="var(--pay-green)"
        >
          Loan status
        </Text>
        <Text
          fontWeight={"400"}
          fontSize={"18px"}
          lineHeight={"27px"}
          color="var(--pay-green)"
          justifyContent={"center"}
          alignItems={"center"}
          textDecoration={"underline"}
        >
          {loanStatus}
        </Text>
      </VStack>
      <Box
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"306px"}
      >
        <VStack
          width={"50%"}
          gap="28px"
          height={"100%"}
          justifyContent={"start"}
          alignItems={"start"}
        >
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
              Requested by
            </Text>
            <Text
              color={"var(--dark)"}
              fontWeight={"400"}
              fontSize={"18px"}
              lineHeight={"27px"}
              textDecoration={"underline"}
            >
              {requestedBy}
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
              Annual Income
            </Text>
            <Text
              color={"var(--dark)"}
              fontWeight={"400"}
              fontSize={"18px"}
              lineHeight={"27px"}
            >
              {annualIncome}
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
              Loan purpose
            </Text>
            <Text
              color={"var(--dark)"}
              fontWeight={"400"}
              fontSize={"18px"}
              lineHeight={"27px"}
            >
              {loanPurpose}
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
              Bank statement
            </Text>
            <HStack
              width={"100%"}
              display={"flex"}
              bgGradient="var(--main-gradient)"
              bgClip="text"
            >
              <Text
                fontWeight={"400"}
                fontSize={"18px"}
                lineHeight={"27px"}
                display={"flex"}
                textDecoration={"underline"}
              >
                {bankStatement}
              </Text>
              <Icon type="console" name={"document-upload"} />
            </HStack>
          </VStack>
        </VStack>

        <VStack
          width={"50%"}
          gap="28px"
          height={"100%"}
          justifyContent={"start"}
          alignItems={"start"}
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
              Loan requested
            </Text>
            <Text
              color={"var(--dark)"}
              fontWeight={"500"}
              fontSize={"20px"}
              lineHeight={"30px"}
            >
              {loanRequested}
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
              Payment Plan
            </Text>
            <Text
              color={"var(--dark)"}
              fontWeight={"400"}
              fontSize={"18px"}
              lineHeight={"27px"}
            >
              {paymentPlan}
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
              Date requested
            </Text>
            <Text
              color={"var(--dark)"}
              fontWeight={"400"}
              fontSize={"18px"}
              lineHeight={"27px"}
            >
              {dateRequested}
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
              Job
            </Text>
            <Text
              color={"var(--dark)"}
              fontWeight={"500"}
              fontSize={"20px"}
              lineHeight={"30px"}
            >
              {job}
            </Text>
          </VStack>
        </VStack>
      </Box>
    </VStack>
  );
};
