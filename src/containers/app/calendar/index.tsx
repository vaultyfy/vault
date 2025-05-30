import {
  Text,
  Button,
  Flex,
  IconButton,
  HStack,
  Box,
  VStack,
} from "@chakra-ui/react";
import { useState, useMemo } from "react";
import { CaretRight, CaretLeft } from "@phosphor-icons/react";
import { Calendar } from "@components/customer/ui";
import { MotionBox } from "@config/motion";
import { format, parseISO, isSameDay } from "date-fns";
import { useMyGroupsWithStatus } from "@hooks/swr";
import { formatPrice } from "@utils/misc";
import { GroupCalendarSkeleton } from "@components/skeletons";

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

const MobileGroupCalendar = () => {
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, isLoading: isActiveGroupsLoading } =
    useMyGroupsWithStatus("Active");

  const currentDate = new Date();

  const activeGroups = useMemo(() => data?.slice(0, 15) || [], [data]);

  const currentGroup = activeGroups[currentIndex];
  const currentParticipant = currentGroup?.participants?.[0];

  const isPaymentDate = isSameDay(
    currentDate,
    currentParticipant?.nextContributionDate,
  );

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

  if (!currentGroup && !isActiveGroupsLoading) {
    return <Box>No active groups found</Box>;
  }

  return (
    <Box width="100%" display="grid" placeContent="center">
      <Box
        width="100%"
        maxWidth="364px"
        height="208px"
        border="1px solid var(--border-muted)"
        roundedTop="10px"
      >
        {isActiveGroupsLoading ? (
          <GroupCalendarSkeleton />
        ) : (
          <>
            {" "}
            <MotionBox
              variants={headerVariants}
              initial="exit"
              animate="enter"
              exit="exit"
            >
              <Flex justifyContent="space-between" alignItems="center" px="1em">
                <IconButton
                  aria-label="Previous saving groups"
                  icon={<CaretLeft color="#000" weight="bold" />}
                  size="sm"
                  bgColor="transparent"
                  _hover={{ bgColor: "transparent" }}
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
                  _hover={{ bgColor: "transparent" }}
                  onClick={handleNextClick}
                  isDisabled={currentIndex === activeGroups.length - 1}
                />
              </Flex>
            </MotionBox>
            <MotionBox
              variants={containerVariants}
              initial={direction === "left" ? "exitRight" : "exitLeft"}
              animate="enter"
              key={`${currentGroup.groupID}-details`}
            >
              <Flex columnGap={4} w="full" px="1em" mt="1.25rem">
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
                    bgGradient={
                      isPaymentDate ? "var(--main-gradient)" : "var(--grey)"
                    }
                    _hover={{ bgGradient: "var(--main-gradient)" }}
                    color={isPaymentDate ? "#fff" : "var(--text-grey-200)"}
                  >
                    Pay now
                  </Button>
                </VStack>
              </Flex>
            </MotionBox>
          </>
        )}
      </Box>

      <Box
        px={"1em"}
        border="1px solid var(--border-muted)"
        mt="0.25rem"
        pt="0.25rem"
        height="fit-content"
        maxWidth="364px"
        roundedBottom="10px"
      >
        <Calendar
        //   contributionDates={
        //     currentParticipant?.contributionDates?.map((date) =>
        //       parseISO(date),
        //     ) || []
        //   }
        />
      </Box>
    </Box>
  );
};

export default MobileGroupCalendar;
