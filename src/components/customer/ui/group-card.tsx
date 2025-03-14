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
import { StackedAvatars } from "./stacked-avatars";
import { useNavigate } from "@tanstack/react-router";

interface GroupCardProps {
  bgColor?: string;
  cardGradient?: string;
  hasGradient?: boolean;
  width?: string;
  height?: string;
  link?: string;
  groupType: "suggested" | "available";
}

const avatars = [
  "/img/person-1.svg",
  "/img/person-2.svg",
  "/img/person-3.svg",
  "/img/person-4.svg",
  "/img/person-1.svg",
  "/img/person-4.svg",
];
const bgGradient = [
  "/img/frame-1.svg",
  "/img/frame-2.svg",
  "/img/frame-3.svg",
  "/img/frame-4.svg",
];

let currentIndex = 0;

export const GroupCard = ({
  bgColor,
  cardGradient,
  hasGradient,
  width,
  height,
  link,
  groupType = "suggested",
}: GroupCardProps) => {
  const getNextGradient = () => {
    const gradient = bgGradient[currentIndex];
    currentIndex = (currentIndex + 1) % bgGradient.length; // Loop back after last item
    return gradient;
  };
  const gradient = getNextGradient();
  const navigate = useNavigate();

  return (
    <Card
      bgColor={bgColor || "#ffffff"}
      bgGradient={cardGradient}
      width={width || "100%"}
      height={height || "100%"}
      rounded="xl"
      sx={
        gradient && hasGradient
          ? { backgroundImage: `url(${gradient})`, backgroundSize: "cover" }
          : {}
      }
      minW={{ base: "364px", xl: "435px" }}
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
                fontSize={{ base: "16px", lg: "20px" }}
                fontFamily="var(--poppins)"
                color={hasGradient ? "#ffffff" : "#000000"}
                textTransform="capitalize"
              >
                Delight Saver
              </Text>
              <HStack spacing="3px" mt="2px">
                <Flex
                  height="25px"
                  borderRadius="18px"
                  px="1em"
                  bg={hasGradient ? "rgba(255, 255, 255, 0.2)" : "var(--grey-007)"}
                  alignItems="center"
                >
                  <CurrencyNgn
                    size={16}
                    weight="duotone"
                    color={hasGradient ? "#ffffff" : "var(--text-1)"}
                  />
                  <Text
                    as="p"
                    fontSize={{ base: "12px", lg: "14px" }}
                    fontWeight="medium"
                    color={hasGradient ? "#ffffff" : "var(--text-1)"}
                  >
                    10,000/week
                  </Text>
                </Flex>
              </HStack>
            </Box>
            <Box w="full">
              <StackedAvatars images={avatars} maxVisible={3} />
            </Box>
            <Box w="full">
              <Text
                fontWeight="400"
                fontSize={{ base: "12px", lg: "14px" }}
                color={hasGradient ? "#ffffff" : "var(--grey)"}
              >
                Start date
              </Text>
              <Text
                fontWeight="400"
                fontSize={{ base: "14px", lg: "18px" }}
                color={hasGradient ? "#ffffff" : "var(--text-1)"}
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
                bgColor={hasGradient ? "#ffffff" : "var(--main)"}
                width="66px"
                h="24px"
                rounded="full"
                fontFamily="var(--poppins)"
                fontWeight="regular"
                fontSize="12px"
                color={hasGradient ? "#4f4f4f" : "var(--text-2)"}
              >
                Share
              </Button>
              <Box w="fit-content">
                <Text
                  as="p"
                  fontSize={{ base: "12px", lg: "14px" }}
                  fontWeight="medium"
                  color={groupType === "suggested" ? "#fff" : "var(--grey)"}
                  textAlign="end"
                >
                  Pay-out
                </Text>
                <HStack gap="0">
                  <CurrencyNgn
                    size={28}
                    color={hasGradient ? "#ffffff" : "var(--main)"}
                    fontWeight={500}
                  />
                  <Text
                    as="h5"
                    fontSize={{ base: "24px", lg: "28px" }}
                    color={hasGradient ? "#ffffff" : "var(--main)"}
                    fontWeight="bold"
                  >
                    100,000
                  </Text>
                </HStack>
              </Box>
            </Flex>
            <Button
              bg={
                hasGradient
                  ? "rgba(255, 255, 255, 0.2)"
                  : "var(--btn-secondary-7)"
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
              backdropFilter={hasGradient ? "blur(10px)" : "none"}
              _hover={{
                bg: hasGradient
                  ? "rgba(255, 255, 255, 0.3)"
                  : "var(--btn-secondary-7)",
              }}
              onClick={() => navigate({ to: `/dashboard/explore/${link}` })}
            >
              <Text color={groupType === "suggested" ? "#fff" : "var(--main)"}>
                Join
              </Text>
              <Box
                boxSize="39px"
                rounded="full"
                bg={hasGradient ? "var(--text-2)" : "var(--main)"}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <ArrowRight
                  size={16}
                  color={hasGradient ? "var(--grey)" : "#ffffff"}
                />
              </Box>
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};
