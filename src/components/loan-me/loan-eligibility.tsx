import { Container } from "./container";
import {
  Flex,
  Text,
  VStack,
  HStack,
  Divider,
  Box,
  Button,
  Select,
} from "@chakra-ui/react";
import { SelectField } from "@components/form";
import { loanDurations, paymentPlans } from "@utils/constants";

interface LoanEligibilityProps {
  onClick: (status: "accept" | "reject") => void;
}

export const LoanEligibilityContainer = ({ onClick }: LoanEligibilityProps) => {
  return (
    <Container>
      <Flex flexDirection="column" rowGap="10px" fontFamily="var(--poppins)">
        <Text fontSize="20px" fontWeight="500" color="var(--main)">
          Eligibility & acceptances
        </Text>
        <Text fontSize="14px" color="var(--dark)" fontWeight="400">
          We have reviewed your financial details, we are able to offer you
        </Text>
        <VStack
          alignItems="flex-start"
          width="full"
          height="119px"
          justifyContent="space-between"
        >
          <HStack justifyContent="space-between" width="full">
            <Text fontSize="14px" color="var(--dark)" fontWeight="500">
              Loan
            </Text>
            <Text
              fontSize="20px"
              color="var(--dark)"
              fontWeight="600"
              fontFamily="var(--clash-grotesk)"
            >
              N50,000
            </Text>
          </HStack>
          <HStack justifyContent="space-between" width="full">
            <Text fontSize="14px" color="var(--dark)" fontWeight="500">
              Insurance fee (1.5%)
            </Text>
            <Text
              fontSize="20px"
              color="var(--dark)"
              fontWeight="600"
              fontFamily="var(--clash-grotesk)"
            >
              -N750
            </Text>
          </HStack>
          <HStack justifyContent="space-between" width="full">
            <Text fontSize="14px" color="var(--dark)" fontWeight="500">
              You will receive
            </Text>
            <Text
              fontSize="26px"
              color="var(--dark)"
              fontWeight="600"
              fontFamily="var(--clash-grotesk)"
              background="var(--main-gradient)"
              backgroundClip="text"
            >
              N49,250
            </Text>
          </HStack>
        </VStack>
        <Divider width="full" backgroundColor="#8181816B" height="0.5px" />
        <Flex width="100%" flexDirection="column" columnGap="10px">
          <Text fontWeight="500" fontSize="12px" color="var(--grey)">
            You will return
          </Text>
          <HStack
            spacing="18px"
            backgroundColor="var(--accent-bg)"
            py="3px"
            px="5px"
            rounded="36px"
            width="fit-content"
          >
            {paymentPlans.map((plan) => (
              <Button
                key={plan.value}
                width="124px"
                height="34px"
                rounded="36px"
                py="1rem"
                px="0.25rem"
                fontFamily="var(--poppins)"
                fontSize="12px"
                fontWeight="500"
                color="white"
                backgroundColor="var(--main)"
                _hover={{
                  backgroundColor: "var(--main)",
                }}
              >
                {plan.label}
              </Button>
            ))}
          </HStack>
          <Text
            fontSize="12px"
            color="var(--grey)"
            fontWeight="500"
            lineHeight="1.6em"
          >
            Spread your loan over several months with a base interest rate of
            <Text as="span" color="var(--main)" mx="3px">
              8% per month
            </Text>
            , increasing by
            <Text as="span" color="var(--main)" mx="3px">
              1.5%
            </Text>
            every three months.
          </Text>
          <HStack justifyContent="space-between" width="full" minHeight="53px">
            <Box width="164px">
              <Select
                width="full"
                height="53px"
                border="0.5px solid #8181816B"
                fontFamily="var(--poppins)"
                fontSize="16px"
                fontWeight="400"
                color="var(--grey)"
                disabled
              >
                <option defaultValue={loanDurations[0].value}>
                  {loanDurations[0].label}
                </option>
                {loanDurations.map((duration) => (
                  <option value={duration.value}>{duration.label}</option>
                ))}
              </Select>
            </Box>
            <Flex flex="1" justifyContent="center">
              <Text
                fontFamily="var(--clash_grotesk)"
                fontSize="26px"
                fontWeight="600"
                color="var(--dark)"
              >
                N54,000
              </Text>
            </Flex>
          </HStack>
        </Flex>
        <Divider width="full" backgroundColor="#8181816B" height="0.5px" />
        <HStack justifyContent="space-between" width="full">
          <Button
            width="87px"
            height="34px"
            rounded="36px"
            py="1rem"
            px="0.25rem"
            fontFamily="var(--poppins)"
            fontSize="12px"
            fontWeight="500"
            color="var(--main)"
            backgroundColor="#F6F6F6"
            _hover={{
              backgroundColor: "#F6F6F6",
            }}
            onClick={() => onClick("reject")}
          >
            Reject offer
          </Button>
          <Button
            width="87px"
            height="34px"
            rounded="36px"
            py="1rem"
            px="0.25rem"
            fontFamily="var(--poppins)"
            fontSize="12px"
            fontWeight="500"
            color="white"
            backgroundColor="var(--main)"
            _hover={{
              backgroundColor: "var(--main)",
            }}
            onClick={() => onClick("accept")}
          >
            Accept offer
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};
