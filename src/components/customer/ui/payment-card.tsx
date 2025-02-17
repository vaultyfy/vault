import { Flex, Box, Text, HStack, VStack, Button } from "@chakra-ui/react";
import { CurrencyNgn } from "@phosphor-icons/react";
import { ArrowRight } from "@phosphor-icons/react";

interface PaymentCardProps {
  isActive?: boolean;
  amount?: number;
  deadlineDate?: string;
  dateType?: string;
}

export const PaymentCard = ({
  isActive = false,
  amount,
  deadlineDate,
  dateType,
}: PaymentCardProps) => {
  const dateArray = deadlineDate?.split("-");
  return (
    <Flex
      px="19px"
      py="23px"
      border="0.5px solid #8181816B"
      justifyContent="space-between"
    >
      <Box w="max-content">
        <Text fontSize="14px" fontWeight="400" color="var(--grey)">
          {dateType || "Due date"}
        </Text>
        <HStack spacing="7px">
          <Text
            as="h5"
            fontWeight="300"
            fontSize={{ base: "34px", lg: "44px" }}
            bgGradient="var(--main-gradient)"
            bgClip="text"
          >
            {dateArray?.[0] || 23}
          </Text>
          <Flex flexDirection="column" alignContent="center">
            <Text
              fontWeight="400"
              fontSize={{ base: "14px", lg: "18px" }}
              color="var(--text-1)"
            >
              {`${dateArray?.[1]} - ${dateArray?.[2]}` || "November - 2025"}
            </Text>
            <Text
              fontWeight="400"
              fontSize={{ base: "14px", lg: "16px" }}
              color="var(--grey)"
            >
              saturday
            </Text>
          </Flex>
        </HStack>
      </Box>
      <VStack justifyContent={isActive ? "space-between" : "center"}>
        {amount && isActive && (
          <HStack spacing={2}>
            <CurrencyNgn
              size={20}
              weight="duotone"
              color="var(--main)"
              style={{
                fontWeight: "bold",
              }}
            />
            <Text
              color="var(--text-3)"
              fontWeight="500"
              fontSize={{ base: "16px", lg: "20px" }}
            >
              {amount || "100,000"}
            </Text>
          </HStack>
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
            color="var(--text-3)"
            _hover={{
              bg: "transparent",
            }}
            _focus={{
              bg: "transparent",
            }}
            _active={{
              bg: "transparent",
            }}
            opacity="0.3"
          >
            Pay now
            <Box
              boxSize="39px"
              rounded="full"
              bg="var(--text-3)"
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
            bgGradient={"var(--main-gradient)"}
            color="#FDFFF7"
            fontWeight="500"
            fontSize="14px"
            fontFamily="var(--poppins)"
          >
            Pay now
          </Button>
        )}
      </VStack>
    </Flex>
  );
};
