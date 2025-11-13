import { VStack, Flex, Image, Text } from "@chakra-ui/react";

export const ApplicationSuccess = () => {
  return (
    <VStack
      alignItems="flex-start"
      width="full"
      maxWidth="389px"
      backgroundColor="#ffffff"
      py="1.1rem"
      px="1.75rem">
      <Flex
        flexDirection="column"
        rowGap="20px"
        width="full"
        alignItems="center">
        <Image
          src="/img/application_success.svg"
          alt="application successful"
          boxSize="77px"
        />
        <Text
          fontFamily="var(--clash-grotesk)"
          fontWeight="500"
          fontSize={{ base: "18px", md: "24px" }}
          color="#0E0E0E">
          Successful
        </Text>
        <Text
          fontFamily="var(--poppins)"
          fontSize={{ base: "14px", md: "16px" }}
          fontWeight="400"
          textAlign="center"
          color="var(--dark)">
          We are reviewing your financial details and credit history, kindly
          check your inbox for update from vultyfy loan
        </Text>
      </Flex>
    </VStack>
  );
};
