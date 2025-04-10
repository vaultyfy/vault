import { Flex, Box, VStack, Image, Text } from "@chakra-ui/react";

export const AcceptOffer = () => {
  return (
    <VStack
      alignItems="flex-start"
      width="full"
      maxWidth="389px"
      backgroundColor="#ffffff"
      py="1.1rem"
      px="1.75rem"
    >
      <Flex
        flexDirection="column"
        rowGap="20px"
        width="full"
        alignItems="center"
      >
        <Image
          src="/img/offer-accepted.svg"
          alt="accept offer"
          width="83px"
          height="89.2px"
        />
        <Text
          fontFamily="var(--clash-grotesk)"
          fontWeight="500"
          fontSize={{ base: "18px", md: "24px" }}
          color="#0E0E0E"
        >
          Successful
        </Text>
        <Text
          fontFamily="var(--poppins)"
          fontSize={{ base: "14px", md: "16px" }}
          fontWeight="600"
          textAlign="center"
          color="var(--dark)"
        >
          ₦500,000{" "}
          <Text as="span" fontWeight="400">
            has been successfully credited to your Vaultyfy wallet. Your loan
            repayment begins on
          </Text>{" "}
          February 26, 2025
        </Text>
      </Flex>
    </VStack>
  );
};
