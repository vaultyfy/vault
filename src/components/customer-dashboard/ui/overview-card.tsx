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
  Progress,
  Flex,
} from "@chakra-ui/react";
import { Icon } from "@components/icon";
import { ChevronDown } from "lucide-react";

interface Props {
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
}

export const OverviewCard: React.FC<Props> = ({
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
}) => {
  return (
    <Card
      bgColor={bgColor || undefined}
      bgGradient={cardGradient}
      width={width || "100%"}
      height={height || "100%"}
      rounded={"lg"}
    >
      <CardBody py="1.2rem" pl="17px" pr="10px">
        <VStack
          justifyContent="space-between"
          alignItems="stretch"
          height="100%"
        >
          <HStack justifyContent={"space-between"}>
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
                  bgColor={"var(--overview-card-secondary)"}
                  rounded="20px"
                  color="#fff"
                  _hover="var(--overview-card-secondary)"
                  _focus="var(--overview-card-secondary)"
                >
                  Month
                </MenuButton>
                <MenuList px="10px" py="8px">
                  <MenuItem>Month</MenuItem>
                  <MenuItem>Year</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Box
                px="16px"
                py="8px"
                rounded="20px"
                bgColor={cardGradient || "transparent"}
                shadow={"lg"}
              >
                <Text
                  fontFamily={"var(--poppins)"}
                  fontWeight={"semibold"}
                  fontSize={"12px"}
                  lineHeight={"17px"}
                  color="#fff"
                >
                  Paid | {paidDate}
                </Text>
              </Box>
            )}
          </HStack>
          {hasProgress && (
            <HStack spacing={"0.5rem"}>
              <Progress
                value={progressLevel}
                flex="1"
                min={0}
                rounded="10px"
                max={100}
                sx={{
                  track: {
                    bg: "#42545F", // Set the track background color
                  },
                  filledTrack: {
                    bgGradient: "var(--main-gradient)", // Example gradient
                  },
                }}
              />

              {paidMonths && (
                <Box
                  bgColor="var(--overview-card-secondary)"
                  py={1}
                  px={4}
                  rounded={"10px"}
                >
                  <Text
                    fontFamily={"var(--poppins)"}
                    fontSize={"12px"}
                    color="#fff"
                    fontWeight={"medium"}
                  >
                    {paidMonths} | 12
                  </Text>
                </Box>
              )}
            </HStack>
          )}
          <Box h="fit-content" color="#fff" minH="79.5px">
            <Text
              as="p"
              fontFamily={"var(--poppins)"}
              fontSize={{ base: "12px", lg: "16px" }}
              fontWeight={"medium"}
            >
              {cardTitle}
            </Text>
            {amount && (
              <Text
                as="h4"
                mt="1rem"
                fontFamily={"var(--clash-grotesk-700)"}
                fontSize="28px"
              >
                N{amount}
              </Text>
            )}
            {cycle && (
              <Text
                as="h4"
                mt="1rem"
                fontFamily={"var(--ClashGrotesk-Variable)"}
                fontWeight={700}
                fontSize="19px"
              >
                {cycle}{" "}
                <Text as="span" fontWeight={200}>
                  cycle completed
                </Text>
              </Text>
            )}
          </Box>
        </VStack>
      </CardBody>
    </Card>
  );
};
