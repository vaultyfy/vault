import {
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Flex,
  IconButton,
  PopoverHeader,
  PopoverCloseButton,
  PopoverArrow,
  HStack,
  Box,
  VStack,
} from "@chakra-ui/react";
import { useState, useMemo } from "react";
import { useConsolePath } from "@hooks/current-path";
import { CaretRight, CaretLeft } from "@phosphor-icons/react";
import { Calendar } from "./calendar";
import { MotionBox, MotionText } from "@config/motion";
import { useMyGroupsWithStatus } from "@hooks/swr";
import { format, parseISO } from "date-fns";
import { Icon } from "@components/icon";
import { GroupCalendarSkeleton } from "@components/skeletons";
import { formatPrice } from "@utils/misc";

// Animation configs
const containerVariants = {
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exitLeft: {
    x: -50,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exitRight: {
    x: 50,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const headerVariants = {
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.1,
      ease: "easeInOut",
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const CalendarPopover = () => {
  const adminPathname = useConsolePath();
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data, isLoading: isActiveGroupsLoading } =
    useMyGroupsWithStatus("Active");
  const activeGroups = useMemo(() => data?.slice(0, 15) || [], [data]);

  const currentGroup = activeGroups[currentIndex];
  const currentParticipant = currentGroup?.participants?.[0];

  const handlePrevClick = () => {
    if (isAnimating || currentIndex === 0) return;
    setIsAnimating(true);
    setDirection("left");
    setCurrentIndex((prev) => prev - 1);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNextClick = () => {
    if (isAnimating || currentIndex === activeGroups.length - 1) return;
    setIsAnimating(true);
    setDirection("right");
    setCurrentIndex((prev) => prev + 1);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const formatCurrency = (amount: string | number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    })
      .format(Number(amount))
      .replace("NGN", "₦");
  };

  const getFrequencyText = (frequency: string) => {
    switch (frequency) {
      case "Weekly":
        return "week";
      case "Daily":
        return "day";
      default:
        return frequency.toLowerCase();
    }
  };

  if (!currentGroup) {
    return (
      <Button
        background="var(--btn-secondary-7)"
        boxSize={"50px"}
        rounded="full"
        display={adminPathname ? "none" : "flex"}
        justifyContent="center"
        alignItems="center"
        _hover={{
          background: "var(--btn-secondary-7)",
        }}
      >
        <Icon name="calendar-2" />
      </Button>
    );
  }

  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Button
          background="var(--btn-secondary-7)"
          boxSize={"50px"}
          rounded="full"
          display={adminPathname ? "none" : "flex"}
          justifyContent="center"
          alignItems="center"
          _hover={{
            background: "var(--btn-secondary-7)",
          }}
          disabled={isActiveGroupsLoading}
        >
          <Icon name="calendar-2" />
        </Button>
      </PopoverTrigger>

      <PopoverContent width="450px" pt={6}>
        {isActiveGroupsLoading ? (
          <GroupCalendarSkeleton />
        ) : (
          <MotionBox
            variants={headerVariants}
            initial="exit"
            animate="enter"
            exit="exit"
          >
            <PopoverHeader borderBottom="none">
              <Flex justifyContent="space-between" alignItems="center" px="1em">
                <IconButton
                  aria-label="Previous saving groups"
                  icon={<CaretLeft color="#000" weight="bold" />}
                  size="sm"
                  bgColor="transparent"
                  _hover={{
                    bgColor: "transparent",
                  }}
                  onClick={handlePrevClick}
                  isDisabled={currentIndex === 0}
                />
                <MotionBox
                  variants={containerVariants}
                  initial={direction === "left" ? "exitRight" : "exitLeft"}
                  animate="enter"
                  key={currentGroup.groupID}
                >
                  <VStack spacing={2}>
                    <Text
                      fontSize={"20px"}
                      fontWeight="medium"
                      textTransform={"capitalize"}
                      color="#000000"
                    >
                      {currentGroup.name}
                    </Text>
                    <Text
                      fontSize={"14px"}
                      fontWeight="light"
                      color="#ffffff"
                      px={5}
                      rounded="3xl"
                      bgColor={"var(--main)"}
                    >
                      {formatPrice(currentGroup.contributionAmount)}/
                      {getFrequencyText(currentGroup.contributionFrequency)}
                    </Text>
                  </VStack>
                </MotionBox>
                <IconButton
                  aria-label="Next saving groups"
                  icon={<CaretRight color="#000" weight="bold" />}
                  size="sm"
                  bgColor={"transparent"}
                  _hover={{
                    bgColor: "transparent",
                  }}
                  onClick={handleNextClick}
                  isDisabled={currentIndex === activeGroups.length - 1}
                />
              </Flex>
            </PopoverHeader>
          </MotionBox>
        )}

        <PopoverCloseButton />
        <PopoverArrow />

        <PopoverBody pt="1rem">
          <MotionBox
            variants={containerVariants}
            initial={direction === "left" ? "exitRight" : "exitLeft"}
            animate="enter"
            key={`${currentGroup.groupID}-details`}
          >
            <Flex columnGap={4} w="full" px="1em">
              <Box flex="1">
                <Text
                  as="span"
                  fontSize="14px"
                  fontWeight={"normal"}
                  color="var(--grey)"
                >
                  Due date
                </Text>
                <HStack spacing={2}>
                  <Text
                    as="p"
                    fontFamily={"poppins"}
                    fontSize={"44px"}
                    fontWeight={"light"}
                    bgClip="text"
                    bgGradient={"var(--main-gradient)"}
                  >
                    {currentParticipant?.nextContributionDate
                      ? format(
                          parseISO(currentParticipant.nextContributionDate),
                          "dd",
                        )
                      : "--"}
                  </Text>
                  <Box>
                    <Text
                      as="p"
                      fontFamily="var(--poppins)"
                      fontSize={"18px"}
                      fontWeight={"medium"}
                      color="#000"
                    >
                      {currentParticipant?.nextContributionDate
                        ? format(
                            parseISO(currentParticipant.nextContributionDate),
                            "MMMM - yyyy",
                          )
                        : "No date set"}
                    </Text>
                    <Text
                      as="span"
                      fontFamily="var(--poppins)"
                      fontSize={"14px"}
                      fontWeight={"normal"}
                      color="var(--grey)"
                    >
                      {currentParticipant?.nextContributionDate
                        ? format(
                            parseISO(currentParticipant.nextContributionDate),
                            "EEEE",
                          )
                        : "--"}
                    </Text>
                  </Box>
                </HStack>
              </Box>
              <VStack justifyContent={"space-between"} pb={2}>
                <Text
                  fontSize={"20px"}
                  color="#000"
                  textAlign={"right"}
                  fontFamily="var(--poppins)"
                  fontWeight={"medium"}
                >
                  {formatPrice(currentGroup.payOutAmount)}
                </Text>
                <Button
                  py="13px"
                  px="4px"
                  width="122px"
                  rounded="3xl"
                  bgGradient="var(--main-gradient)"
                  _hover={{ bgGradient: "var(--main-gradient)" }}
                  color="#fff"
                >
                  Pay now
                </Button>
              </VStack>
            </Flex>
          </MotionBox>
          <Box
            px={"1em"}
            borderTop="2px solid var(--main)"
            mt={"1rem"}
            pt={"1rem"}
          >
            <Calendar
            // contributionDates={
            //   currentParticipant?.contributionDates?.map((date) =>
            //     parseISO(date),
            //   ) || []
            // }
            />
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
