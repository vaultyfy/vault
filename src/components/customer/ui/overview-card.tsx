import {
  Card,
  CardBody,
  HStack,
  VStack,
  Box,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  Menu,
  Text,
  Flex,
  Stack,
  Skeleton,
} from "@chakra-ui/react";
import { Icon } from "@components/icon";
import { CurrencyNgn } from "@phosphor-icons/react";
import { ChevronDown } from "lucide-react";
import { CustomProgress } from "@components/ui";
import { formatPrice, skeleton } from "@utils/misc";

interface OverviewCardProps {
  bgColor?: string;
  cardGradient?: string;
  hasProgress?: boolean;
  progressLevel?: number;
  progressColor?: string;
  cardIcon: string;
  cardTitle: string;
  amount?: number | string;
  cycle?: number;
  hasFilter?: boolean;
  paidDate?: string;
  height?: string | number;
  width?: string | number;
  iconBg?: string;
  paidMonths?: number;
  loading?: boolean;
}

export const OverviewCard = ({
  bgColor,
  cardGradient,
  hasProgress,
  progressLevel,
  progressColor,
  cardIcon,
  cardTitle,
  amount,
  cycle,
  hasFilter,
  paidDate,
  width,
  height,
  iconBg,
  paidMonths,
  loading,
}: OverviewCardProps) => {
  const isMilestonesCard = cardTitle
    .toLowerCase()
    .includes("rewards & milestones");

  return (
    <Card
      bgColor={bgColor || ""}
      bgGradient={cardGradient}
      width={width || "100%"}
      height={height || "100%"}
      rounded={"lg"}
    >
      <CardBody
        py={{ lg: "1em", md: ".8em", base: ".4em" }}
        px={{ lg: "1em", md: "1em", base: ".6em" }}
      >
        <VStack
          justifyContent="space-between"
          alignItems="stretch"
          height="100%"
          gap={{ lg: "", md: "", base: "2em" }}
        >
          <Stack direction="column">
            <HStack justifyContent="space-between">
              <Flex
                rounded={"full"}
                px={"10px"}
                py={"8px"}
                boxSize={"48px"}
                bgColor={iconBg || "transparent"}
                justifyContent="center"
                alignItems="center"
                shadow={!iconBg ? "lg" : undefined}
              >
                <Icon name={cardIcon} />
              </Flex>
              {hasFilter ? (
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDown color="#f8f8f8" size={14} />}
                    px="16px"
                    py="8px"
                    bgColor="var(--overview-card-secondary)"
                    rounded={{ lg: "20px", base: "36px" }}
                    color="#fff"
                    _hover={{
                      bgColor: "var(--overview-card-secondary)",
                      color: "#fff",
                    }}
                    _focus={{
                      bgColor: "var(--overview-card-secondary)",
                      color: "#fff",
                    }}
                    _active={{
                      bgColor: "var(--overview-card-secondary)",
                      color: "#fff",
                    }}
                    fontWeight="500"
                    fontSize={{ lg: "14px", md: "14px", base: "12px" }}
                    height="fit-content"
                    width={{ lg: "100px", md: "100px", base: "88px" }}
                  >
                    month
                  </MenuButton>
                  <MenuList
                    px="10px"
                    py="8px"
                    border="none"
                    bgColor="var(--overview-card-secondary)"
                  >
                    <MenuItem bgColor="transparent" color="#ffffff">
                      month
                    </MenuItem>
                    <MenuItem bgColor="transparent" color="#ffffff">
                      year
                    </MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <Box
                  px={{ lg: "16px", md: "16px", base: "10px" }}
                  py="8px"
                  rounded="20px"
                  bgColor={cardGradient || "transparent"}
                  shadow={"lg"}
                >
                  <Text
                    fontWeight="500"
                    whiteSpace="nowrap"
                    fontSize={{ lg: "12px", md: "12px", base: "10px" }}
                    lineHeight="17px"
                    color="#fff"
                  >
                    Paid | {paidDate}
                  </Text>
                </Box>
              )}
            </HStack>
            {hasProgress && (
              <HStack spacing={"0.5rem"}>
                <CustomProgress
                  value={progressLevel!}
                  height={{ lg: "8px", md: "6px", base: "4px" }}
                />
                {paidMonths && (
                  <Box
                    bgColor="var(--overview-card-secondary)"
                    py={1}
                    px={4}
                    rounded={"10px"}
                  >
                    <Text fontSize="12px" color="#fff" fontWeight="500">
                      {paidMonths} | 12
                    </Text>
                  </Box>
                )}
              </HStack>
            )}
          </Stack>
          <VStack h="fit-content" color="#fff" alignItems="space-between">
            <Text fontSize={{ base: "12px", lg: "16px" }} fontWeight={"medium"}>
              {cardTitle}
            </Text>
            {loading && !isMilestonesCard ? (
              <Skeleton
                height="18px"
                width="130px"
                borderRadius="8px"
                startColor={skeleton.startColor}
                endColor={skeleton.endColor}
              />
            ) : (
              <>
                {!isMilestonesCard && (
                  <HStack gap=".1em">
                    <Text fontFamily="var(--clash-grotesk-700)" fontSize="28px">
                      {formatPrice(Number(amount))}
                    </Text>
                  </HStack>
                )}
              </>
            )}
            {isMilestonesCard && (
              <Text
                fontSize="28px"
                fontWeight="700"
                fontFamily="var(--clash-grotesk-700)"
              >
                {cycle}
                <Text
                  pl=".4em"
                  as="span"
                  fontWeight="300"
                  fontSize="16px"
                  fontFamily="var(--poppins)"
                >
                  cycle{cycle && cycle > 1 ? "s": ""} completed
                </Text>
              </Text>
            )}
          </VStack>
        </VStack>
      </CardBody>
    </Card>
  );
};
