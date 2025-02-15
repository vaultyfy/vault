import {
  Card,
  CardBody,
  Flex,
  Box,
  VStack,
  Text,
  HStack,
  Image,
  Avatar,
  AvatarGroup,
  Button,
} from "@chakra-ui/react";
import { CurrencyNgn, ArrowRight } from "@phosphor-icons/react";
import { RefreshCcw } from "lucide-react";
import { StackedAvatars } from "./stacked-avatars";

interface GroupCardProps {
  bgColor?: string;
  cardGradient?: string;
  width?: string;
  height?: string;
}

const avatars = [
  "/img/person-1.svg",
  "/img/person-2.svg",
  "/img/person-3.svg",
  "/img/person-4.svg",
  "/img/person-1.svg",
  "/img/person-4.svg",
];

export const GroupCard = ({
  bgColor,
  cardGradient,
  width,
  height,
}: GroupCardProps) => {
  return (
    <Card
      bgColor={bgColor || "#ffffff"}
      bgGradient={cardGradient}
      width={width || "100%"}
      height={height || "100%"}
      rounded="xl"
      fontSize="var(--poppins)"
      border="0.5px solid #8181816B"
    >
      <CardBody py="23px" px="19px">
        <Flex w="full" h="full">
          <Flex
            flex={1}
            flexDirection="column"
            px="8px"
            h="full"
            rowGap="15px"
            justifyContent="space-between"
          >
            <Box w="full">
              <Text
                as="h5"
                fontSize="20px"
                fontFamily="var(--poppins)"
                color={cardGradient ? "#ffffff" : "#000000"}
                textTransform="capitalize"
              >
                Delight Saver
              </Text>
              <HStack spacing="3px" mt="2px">
                <Flex
                  rounded="10px"
                  px={4}
                  py={1}
                  bg="#81818112"
                  alignItems="center"
                >
                  <CurrencyNgn
                    size={16}
                    weight="duotone"
                    color={cardGradient ? "#ffffff" : "var(--text-1)"}
                  />
                  <Text
                    as="p"
                    fontSize="14px"
                    fontWeight="medium"
                    color={cardGradient ? "#ffffff" : "var(--text-1)"}
                  >
                    10,000/week
                  </Text>
                </Flex>
                <Flex
                  rounded="10px"
                  px={3}
                  py={1}
                  bg={cardGradient ? "transparent" : "#81818112"}
                  columnGap="2px"
                  alignItems="center"
                >
                  <RefreshCcw
                    size={16}
                    color={cardGradient ? "#ffffff" : "var(--text-1)"}
                    strokeWidth={3}
                  />
                  <Text
                    as="p"
                    fontSize="14px"
                    color={cardGradient ? "#ffffff" : "var(--text-1)"}
                  >
                    3
                  </Text>
                </Flex>
              </HStack>
            </Box>
            <Box w="full">
              <StackedAvatars images={avatars} maxVisible={3} />
            </Box>
            <Box w="full">
              <Text
                as="p"
                fontSize="14px"
                fontWeight="medium"
                color={cardGradient ? "#ffffff" : "var(--grey)"}
              >
                Start date
              </Text>
              <Text
                as="p"
                fontSize="18px"
                fontWeight="medium"
                color={cardGradient ? "#ffffff" : "var(--text-1)"}
              >
                24th Nov 2025
              </Text>
            </Box>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="flex-end"
            flex={1}
            w="full"
            h="full"
            rowGap={{ lg: "15px", base: "22px" }}
          >
            <Flex
              flexDirection="column"
              h="full"
              justifyContent="space-between"
              w="full"
              flex={2}
              py="2px"
              alignItems="flex-end"
            >
              <Button
                bgColor={cardGradient ? "#ffffff" : "var(--main)"}
                width="66px"
                h="24px"
                rounded="full"
                fontFamily="var(--poppins)"
                fontWeight="regular"
                fontSize="12px"
                color={cardGradient ? "#4f4f4f" : "var(--text-2)"}
              >
                Share
              </Button>
              <Box w="fit-content">
                <Text
                  as="p"
                  fontSize="14px"
                  fontWeight="medium"
                  color="var(--grey)"
                  textAlign="end"
                >
                  Pay-out
                </Text>
                <HStack spacing={2}>
                  <CurrencyNgn
                    size={28}
                    weight="duotone"
                    color={cardGradient ? "#ffffff" : "var(--main)"}
                    style={{
                      fontWeight: "bold",
                    }}
                  />
                  <Text
                    as="h5"
                    fontSize="28px"
                    color={cardGradient ? "#ffffff" : "var(--main)"}
                    fontWeight="bold"
                  >
                    100,000
                  </Text>
                </HStack>
              </Box>
            </Flex>
            <Button
              bgColor={
                cardGradient ? "transparent" : "var(--button-secondary-lighten)"
              }
              width={"111px"}
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
              _hover={
                cardGradient ? "transparent" : "var(--button-secondary-lighten)"
              }
              _focus={
                cardGradient ? "transparent" : "var(--button-secondary-lighten)"
              }
              _active={
                cardGradient ? "transparent" : "var(--button-secondary-lighten)"
              }
            >
              Join
              <Box
                boxSize="39px"
                rounded="full"
                bg={cardGradient ? "var(--text-2)" : "var(--main)"}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <ArrowRight
                  size={16}
                  color={cardGradient ? "var(--grey)" : "#ffffff"}
                  weight="bold"
                />
              </Box>
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};
