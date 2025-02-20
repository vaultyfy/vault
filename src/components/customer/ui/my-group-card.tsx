import {
  Card,
  CardBody,
  VStack,
  Flex,
  Box,
  Text,
  HStack,
} from "@chakra-ui/react";
import { CurrencyNgn } from "@phosphor-icons/react";
import { RefreshCcw } from "lucide-react";
import { StackedAvatars } from "./stacked-avatars";
import { avatars } from "@utils/constants";
import { Status, GlobalStatus } from "@components/ui";

interface MyGroupCardProps {
  bgColor?: string;
  acceptanceStatus?: GlobalStatus;
}

export const MyGroupCard = ({
  bgColor,
  acceptanceStatus,
}: MyGroupCardProps) => {
  return (
    <Card
      width="full"
      height="full"
      maxWidth="594px"
      rounded="10px"
      position="relative"
      bg={bgColor ?? "#ffffff"}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: "10px",
        padding: "0.5px",
        background: "var(--main-gradient)",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        pointerEvents: "none",
      }}
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
                    weight="duotone"
                    color="var(--text-1)"
                  />
                  <Text
                    as="p"
                    fontSize={{ base: "12px", lg: "14px" }}
                    fontWeight="400"
                    color="var(--text-3)"
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
                    color="var(--text-3)"
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
                  as="p"
                  fontSize={{ base: "12px", lg: "14px" }}
                  fontWeight="medium"
                  color="var(--grey)"
                  textAlign="end"
                >
                  Pay-out
                </Text>
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
                    as="h5"
                    fontSize={{ base: "16px", lg: "20px" }}
                    color="var(--main)"
                    fontWeight="medium"
                  >
                    100,000
                  </Text>
                </HStack>
              </Box>
              <Box w="fit-content">
                <Text
                  as="p"
                  fontSize={{ base: "12px", lg: "18px" }}
                  fontWeight="medium"
                  color="var(--grey)"
                  textAlign="end"
                >
                  End date
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: "14px", lg: "18px" }}
                  fontWeight="medium"
                  color="var(--text-1)"
                >
                  24th Nov 2025
                </Text>
              </Box>
            </VStack>
          </Flex>
          <Text
            as="p"
            fontSize={{ base: "14px", lg: "16px" }}
            fontWeight="medium"
            color="var(--text-1)"
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
