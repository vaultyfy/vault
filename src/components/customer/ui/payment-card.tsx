import {
  Flex,
  Box,
  Text,
  HStack,
  VStack,
  Button,
  ChakraProps,
} from "@chakra-ui/react";
import { useToastContext } from "@hooks/context";
import { makeContribution } from "@mutations/groups";
import { CurrencyNgn } from "@phosphor-icons/react";
import { ArrowRight } from "@phosphor-icons/react";
import { State } from "@utils/constants";
import { formatPrice } from "@utils/misc";
import { PaymentResponse, Response } from "@utils/types";
import React from "react";

interface PaymentCardProps extends Partial<ChakraProps> {
  isActive?: boolean;
  amount?: number;
  dayOfWeek: string;
  deadlineDate?: string;
  dateType?: "start-date" | "due-date" | "missed-date";
  groupId: string;
  participantId: string;
}

export const PaymentCard = ({
  isActive = false,
  amount,
  dayOfWeek,
  deadlineDate,
  dateType,
  groupId,
  participantId,
  ...props
}: PaymentCardProps) => {
  const { openToast } = useToastContext();
  const dateArray = deadlineDate?.split("-");
  const [state, setState] = React.useState<State>("idle");

  const payNow = async () => {
    try {
      setState("loading");
      const request = await makeContribution({ groupId, participantId });
      const response: Response<PaymentResponse> = await request?.json();
      if (request?.ok) {
        openToast(response.message, "success");
        window.open(
          response.payload?.paymentResponse.data.authorization_url,
          "_blank",
        );
      } else {
        openToast(response.message, "error");
      }
    } catch (error) {
      console.error(`${(error as Error).message}`);
      openToast(`${(error as Error).message}`, "error");
    } finally {
      setState("idle");
    }
  };

  const getContributionDateType = (type: PaymentCardProps["dateType"]) => {
    switch (type) {
      case "due-date":
        return "Due date";
      case "start-date":
        return "Start date";
      case "missed-date":
        return "Missed date";
    }
  };

  return (
    <Flex
      px="19px"
      py="23px"
      border="0.5px solid var(--border-muted)"
      justifyContent="space-between"
      {...props}
    >
      <Box w="max-content">
        <Text fontSize="14px" fontWeight="400" color="var(--grey)">
          {getContributionDateType(dateType)}
        </Text>
        <HStack spacing="7px">
          <Text
            as="h5"
            fontWeight="300"
            fontSize={{ base: "34px", lg: "44px" }}
            color={!isActive ? "var(--grey)" : undefined}
            bgGradient={isActive ? "var(--main-gradient)" : undefined}
            bgClip={isActive ? "text" : undefined}
          >
            {dateArray?.[0] || 23}
          </Text>
          <Flex flexDirection="column" alignContent="center">
            <Text
              fontWeight="400"
              fontSize={{ base: "14px", xl: "18px", lg: "14px" }}
              color="var(--text-1)"
            >
              {`${dateArray?.[1]} - ${dateArray?.[2]}` || "November - 2025"}
            </Text>
            <Text
              fontWeight="400"
              fontSize={{ base: "14px", lg: "16px" }}
              color="var(--grey)"
            >
              {dayOfWeek}
            </Text>
          </Flex>
        </HStack>
      </Box>
      <VStack justifyContent={isActive ? "space-between" : "center"}>
        {amount && isActive && (
          <Text
            color="var(--main)"
            fontWeight="500"
            fontSize={{ base: "16px", lg: "20px" }}
          >
            {formatPrice(amount) || "100,000"}
          </Text>
        )}
        {!isActive ? (
          <Button
            width="145px"
            bg="transparent"
            isDisabled={isActive}
            display="flex"
            columnGap="9px"
            height={{ base: "45px", lg: "52px" }}
            rounded="full"
            pl="31px"
            py="13px"
            pr="4px"
            fontFamily={"var(--poppins)"}
            fontWeight="medium"
            fontSize={"14px"}
            color="var(--main)"
            _hover={{
              bg: "transparent",
            }}
            opacity="0.3"
          >
            Pay now
            <Box
              boxSize="39px"
              rounded="full"
              bg="var(--main)"
              display="flex"
              justifyContent="center"
              alignItems="center"
              border="2px solid white"
              opacity="0.3"
            >
              <ArrowRight size={16} color="#ffffff" weight="bold" />
            </Box>
          </Button>
        ) : (
          <Button
            bgGradient="var(--main-gradient)"
            color="var(--white-fade)"
            fontWeight="500"
            fontSize="14px"
            _hover={{
              bgGradient: "var(--main-gradient)",
            }}
            rounded="full"
            width="112px"
            isLoading={state === "loading"}
            onClick={payNow}
          >
            Pay now
          </Button>
        )}
      </VStack>
    </Flex>
  );
};
