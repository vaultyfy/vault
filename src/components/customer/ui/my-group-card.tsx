import {
  Card,
  CardBody,
  VStack,
  Flex,
  Box,
  Text,
  HStack,
  ChakraProps,
} from "@chakra-ui/react";
import { CurrencyNgn } from "@phosphor-icons/react";
import { RefreshCcw } from "lucide-react";
import { StackedAvatars } from "./stacked-avatars";
import { avatars } from "@utils/constants";
import { Status, GlobalStatus } from "@components/ui";

interface MyGroupCardProps extends Partial<ChakraProps> {
  bgColor?: string;
  acceptanceStatus?: GlobalStatus;
}

export const MyGroupCard = ({
  bgColor,
  acceptanceStatus,
  ...props
}: MyGroupCardProps) => {
  return (
    <Card

      boxShadow="none"
      width="full"
      height="full"
      maxWidth="100%"
      rounded="10px"
      position="relative"
      bg={bgColor ?? "#ffffff"}
      {...props}
    >
      <CardBody px="19px" py="23px" w="full">
        {acceptanceStatus && (
          <Box mb="3rem">
            <Status status={acceptanceStatus as GlobalStatus} />
          </Box>
        )}
        <VStack spacing="23px" w="full">
          <Flex width="full" height="143px">
            <Box flex={1} px="8px">
              <Text
                as="h5"
                fontSize={{ base: "16px", lg: "20px" }}
                fontFamily="var(--poppins)"
                color={"#000000"}
                fontWeight="medium"
                textTransform="capitalize"
              >
                Unity Saver
              </Text>
              <HStack spacing="3px" mt="2px">
                <Flex
                  rounded="full"
                  px={4}
                  py={1}
                  bg="#81818112"
                  alignItems="center"
                >
                  <CurrencyNgn
                    size={16}
                    weight="bold"
                    color="var(--text-1)"
                  />
                  <Text
                    fontSize={{ base: "12px", lg: "14px" }}
                    fontWeight="400"
                    color="var(--main)"
                  >
                    10,000/week
                  </Text>
                </Flex>
                <Flex
                  rounded="full"
                  px={4}
                  py={1}
                  bg="#81818112"
                  alignItems="center"
                >
                  <RefreshCcw
                    size={16}
                    strokeWidth={2.5}
                    color="var(--text-1)"
                  />
                  <Text
                    as="p"
                    fontSize={{ base: "12px", lg: "14px" }}
                    fontWeight="400"
                    color="var(--main)"
                  >
                    3
                  </Text>
                </Flex>
              </HStack>
              <Box w="full" mt="28px">
                <StackedAvatars images={avatars} maxVisible={3} />
              </Box>
            </Box>

            <VStack spacing="28px" alignItems="flex-end" flex={1}>
              <Box w="fit-content">
                <Text
                  fontSize={{ base: "12px", lg: "14px" }}
                  fontWeight="medium"
                  color="var(--grey)"
                  textAlign="end"
                >
                  Pay-out
                </Text>
                <HStack gap="0px">
                  <CurrencyNgn
                    size={20}
                    weight="bold"
                    color="var(--main)"
                    style={{
                      fontWeight: "bold",
                    }}
                  />
                  <Text
                    fontSize={{ base: "16px", lg: "20px" }}
                    color="var(--main)"
                    fontWeight="500"
                  >
                    100,000
                  </Text>
                </HStack>
              </Box>

              <Box w="fit-content">
                <Text
                  fontSize={{ base: "12px", lg: "18px" }}
                  fontWeight="400"
                  color="var(--grey)"
                  textAlign="end"
                >
                  End date
                </Text>
                <Text
                  fontSize={{ base: "14px", lg: "18px" }}
                  fontWeight="400"
                  color="var(--dark)"
                >
                  24th Nov 2025
                </Text>
              </Box>
            </VStack>
          </Flex>
          <Text
            fontSize={{ base: "14px", lg: "16px" }}
            fontWeight="400"
            color="var(--dark)"
          >
            This group is designed for parents and guardians saving for school
            fees and supplies. Let’s plan ahead and make the back-to-school
            season stress-free
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
};
