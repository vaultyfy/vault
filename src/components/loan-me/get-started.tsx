import { Box, Flex, Text, VStack, Button, Image } from "@chakra-ui/react";
import { HeaderText } from "@components/typography";
import { Icon } from "@components/icon";
import { useNavigate } from "@tanstack/react-router";

export const GetStarted = () => {
  const navigate = useNavigate();
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      width={{ base: "100%", md: "835px" }}
      height={{ base: "fit-content", md: "269px" }}
      py="1.3em"
      px="1.15em"
      backgroundColor="var(--progress-accent-bg)"
      gap="1.35em"
      borderRadius="10px"
    >
      <VStack
        flex="1"
        order={{ base: 2, md: 1 }}
        height="full"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Box width="100%">
          <HeaderText
            value="Apply for a loan with ease"
            color="var(--dark)"
            fontSize={{ base: "32px", lg: "46px" }}
          />
          <Text
            fontFamily="var(--poppins)"
            fontWeight="400"
            fontSize={{ base: "14px", lg: "16px" }}
            color="#2A2A2A"
          >
            We conduct thorough due diligence to verify your details and tailor
            the best loan options for you. Plus, if you have a strong thrift
            history on Vaultyfy, you may qualify for lower interest charges
          </Text>
        </Box>
        <Button
          leftIcon={<Icon name="money-send-light" />}
          textTransform="capitalize"
          color="var(--white-fade)"
          fontWeight="500"
          fontSize="14px"
          fontFamily="var(--poppins)"
          borderRadius="36px"
          backgroundColor="var(--main)"
          mt={{ base: "22px", md: 0 }}
          _hover={{ backgroundColor: "var(--main)" }}
          onClick={() => {
            navigate({
              to: "/dashboard/loan-application",
              search: { ui: "loan-purpose" },
            });
          }}
        >
          get started
        </Button>
      </VStack>
      <Flex
        width="128px"
        height="full"
        order={{ base: 1, md: 2 }}
        alignItems="center"
      >
        <Image
          src="/img/loan-img.svg"
          alt="loan"
          width="128px"
          height="125px"
        />
      </Flex>
    </Flex>
  );
};
