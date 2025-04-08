import { Container } from "./container";
import {
  Flex,
  Text,
  VStack,
  Box,
  Divider,
  HStack,
  Button,
} from "@chakra-ui/react";
import { CustomCheckbox } from "./form";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

export const rejectionReasons = [
  {
    label: "Insufficient Income",
    value: "insufficient_income",
  },
  {
    label: "Poor Credit History",
    value: "poor_credit_history",
  },
  {
    label: "High Debt-to-Income Ratio",
    value: "high_debt_ratio",
  },
  {
    label: "Incomplete Documentation",
    value: "incomplete_docs",
  },
];

interface RejectOfferProps {
  handleBack: () => void;
}

export const RejectOffer = ({ handleBack }: RejectOfferProps) => {
  const [selectedReasons, setSelectedReasons] = useState<string | null>(null);

  const navigate = useNavigate();

  return (
    <Container>
      <Flex flexDirection="column" rowGap="4px" width="full">
        <Text fontSize="20px" fontWeight="500" color="var(--main)">
          Why did you reject the loan offer ?
        </Text>
        <VStack spacing="4px" alignItems="flex-start">
          {rejectionReasons.map((reason) => (
            <Box
              width="full"
              borderBottom="0.5px solid #8181816B"
              height="79px"
              padding="1rem"
            >
              <CustomCheckbox
                key={reason.value}
                label={reason.label}
                value={reason.value}
                spacing="12px"
                checkboxSize="24px"
                checkboxProps={{
                  border: "1.5px solid var(--text-1)",
                  _checked: { bg: "transparent" },
                }}
                isChecked={selectedReasons === reason.value}
                labelProps={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#000000",
                }}
                height="47px"
                onChange={() => setSelectedReasons(reason.value)}
              />
            </Box>
          ))}
        </VStack>
        <HStack justifyContent="space-between" width="full" mt="4px">
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
            onClick={handleBack}
          >
            Back
          </Button>
          <HStack>
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
              // onClick={handleNext}
            >
              Submit
            </Button>
            <Button
              variant="ghost"
              width="68px"
              height="34px"
              rounded="36px"
              py="1rem"
              px="0.25rem"
              fontFamily="var(--poppins)"
              fontSize="12px"
              fontWeight="500"
              color="var(--dark)"
              onClick={() => {
                navigate({ to: "/dashboard/loan-me" });
                setSelectedReasons(null); // my thought on this is that the skip would handle the decline and the the reason woult be an empty string
              }}
            >
              Skip
            </Button>
          </HStack>
        </HStack>
      </Flex>
    </Container>
  );
};
