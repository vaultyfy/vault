import { Box, Flex, Text, VStack, Button, HStack } from "@chakra-ui/react";
import { ArrowRight } from "@phosphor-icons/react";
import { GradientContainer } from "@components/ui/gradient-container";
import { LoanSinglePayload } from "@utils/types";
import { formatPrice } from "@utils/misc";
import { format, parseISO } from "date-fns";
import { LoanDuration } from "@utils/validators/loan-schema";
import { useTimer } from "react-timer-hook";

export const LoanDetails = ({
  loanDetails,
}: {
  loanDetails: LoanSinglePayload;
}) => {
  const RemainingTimeDisplay = ({ isoString }: { isoString: string }) => {
    const { days, hours, minutes } = useTimer({
      autoStart: true,
      expiryTimestamp: parseISO(isoString),
    });

    return (
      <HStack width="full" spacing={4} mt={1}>
        <Text color="var(--dark)" fontSize="14px" fontWeight="500">
          {days} day{days !== 1 ? "s" : ""}
        </Text>
        <Text color="var(--dark)" fontSize="14px" fontWeight="500">
          {hours} hour{hours !== 1 ? "s" : ""}
        </Text>
        <Text color="var(--dark)" fontSize="14px" fontWeight="500">
          {minutes} minute{minutes !== 1 ? "s" : ""}
        </Text>
      </HStack>
    );
  };

  const formatDate = (isoString: string) => {
    const date = parseISO(isoString);
    return {
      day: format(date, "d"),
      monthYear: `${format(date, "MMMM")} -${format(date, "yyyy")}`,
      dayName: format(date, "EEEE").toLowerCase(),
    };
  };

  const formatDuration = (duration: LoanDuration) => {
    switch (duration) {
      case "One_Month":
        return "1 month";
      case "Three_Months":
        return "3 months";
      case "Six_Months":
        return "6 months";
      case "One_Year":
        return "12 months";
      default:
        return "1 month";
    }
  };

  return (
    <Flex
      width={{ base: "100%", lg: "1050px" }}
      height={{ base: "fit-content", md: "258px" }}
      padding="10px"
      gap="10px"
      flexWrap="wrap"
      fontFamily="var(--poppins)">
      <GradientContainer>
        <HStack
          height="full"
          width="full"
          maxWidth="463px"
          borderRadius="10px"
          py="1.3em"
          px="1.15em"
          gap="22px"
          flexDirection={{ base: "column", lg: "row" }}
          background="#ffffff">
          <VStack
            alignItems="flex-start"
            columnGap="15px"
            flex="1"
            height="full"
            width="full">
            <Text
              fontFamily="var(--poppins)"
              fontWeight="500"
              fontSize="20px"
              color="var(--main)">
              Loan summary
            </Text>
            <Box width="full">
              <Text
                fontFamily="var(--poppins)"
                fontWeight="400"
                fontSize={{ base: "14px", lg: "16px" }}
                color="#2A2A2A">
                Amount paid:
              </Text>
              <Text
                fontFamily="var(--clash-grotesk)"
                fontWeight="600"
                fontSize="26px"
                color="var(--dark)">
                {formatPrice(Number(loanDetails.amountPaid))}
              </Text>
            </Box>
            <Box width="full">
              <Text
                color="#2A2A2A"
                fontFamily="var(--poppins)"
                fontWeight="400"
                fontSize="14px">
                Balance to be paid
              </Text>
              <Text
                background="var(--main-gradient)"
                backgroundClip="text"
                fontFamily="var(--clash-grotesk)"
                fontWeight="600"
                fontSize="26px">
                {formatPrice(Number(loanDetails.loanBalance))}
              </Text>
            </Box>
          </VStack>
          <VStack
            flex="1"
            alignItems="flex-start"
            justifyContent="space-between"
            height="full"
            width="full">
            <Text color="#000000" fontSize="14px" fontWeight="400">
              You can make all balance payment at once to avoid further interest
              increase now, this helps you build a good credit score
            </Text>
            <Button
              width="112px"
              bg="var(--main)"
              display="flex"
              columnGap="9px"
              height="41px"
              rounded="full"
              py="13px"
              pr="4px"
              fontFamily="var(--poppins)"
              fontWeight="500"
              fontSize={"12px"}
              color="#ffffff"
              _hover={{
                bg: "var(--main)",
              }}>
              Pay now
              <Box
                boxSize="35px"
                rounded="full"
                bg="#ffffff"
                display="flex"
                justifyContent="center"
                alignItems="center">
                <ArrowRight size={16} color="var(--main)" weight="bold" />
              </Box>
            </Button>
          </VStack>
        </HStack>
      </GradientContainer>
      <GradientContainer>
        <VStack
          width={{ base: "full", lg: "277px" }}
          height={{ base: "173px", lg: "full" }}
          py="1.3em"
          px="1.15em"
          alignItems="flex-start"
          justifyContent="space-between"
          borderRadius="10px">
          <VStack justifyContent="space-between" width="full">
            <Text
              fontSize="14px"
              fontWeight="400"
              color="var(--grey)"
              width="full">
              Next pay date
            </Text>
            <HStack width="full">
              <Text
                background="var(--main-gradient)"
                backgroundClip="text"
                fontSize={{ base: "34px", lg: "44px" }}
                fontWeight="300">
                {formatDate(loanDetails.nextPaymentDate).day}
              </Text>
              <Box>
                <Text fontWeight="400" fontSize="18px" color="var(--dark)">
                  {formatDate(loanDetails.nextPaymentDate).monthYear}
                </Text>
                <Text fontWeight="400" fontSize="14px" color="var(--grey)">
                  {formatDate(loanDetails.nextPaymentDate).dayName}
                </Text>
              </Box>
            </HStack>
          </VStack>
          <Box width="100%">
            <Button
              width="112px"
              bg="var(--main)"
              display="flex"
              columnGap="9px"
              height="41px"
              rounded="full"
              py="13px"
              pr="4px"
              fontFamily="var(--poppins)"
              fontWeight="500"
              fontSize={"12px"}
              color="#ffffff"
              _hover={{
                bg: "var(--main)",
              }}>
              Pay now
              <Box
                boxSize="35px"
                rounded="full"
                bg="#ffffff"
                display="flex"
                justifyContent="center"
                alignItems="center">
                <ArrowRight size={16} color="var(--main)" weight="bold" />
              </Box>
            </Button>
          </Box>
        </VStack>
      </GradientContainer>
      <GradientContainer>
        <VStack
          width={{ base: "full", lg: "230px" }}
          height="238px"
          gap="22px"
          py="1.3em"
          px="1.15em"
          alignItems="flex-start"
          borderRadius="10px">
          <VStack spacing="11px" width="full">
            <Text fontSize="14px" fontWeight="400" color="var(--gray)">
              Loan details
            </Text>
            <Box width="full">
              <Text color="var(--dark)" fontSize="14px" fontWeight="400">
                Duration
              </Text>
              <Text color="var(--dark)" fontSize="20px" fontWeight="600">
                {formatDuration(loanDetails.loanDuration as LoanDuration)}
              </Text>
            </Box>
            <Box width="full">
              <Text color="var(--dark)" fontSize="14px" fontWeight="400">
                Remaining
              </Text>
              {/* <Text color="var(--dark)" fontSize="20px" fontWeight="600">
                {remainingDays(loanDetails.nextPaymentDate)}
              </Text> */}
              <RemainingTimeDisplay isoString={loanDetails.nextPaymentDate} />
            </Box>
          </VStack>
          <HStack width="full" justifyContent="space-between">
            <Text fontSize="16px" fontWeight="400" color="var(--dark)">
              Frequency
            </Text>
            <Text fontSize="18px" fontWeight="500" color="var(--dark)">
              Monthly
            </Text>
          </HStack>
        </VStack>
      </GradientContainer>
    </Flex>
  );
};
