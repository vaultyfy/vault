import {
  Badge,
  Box,
  Button,
  ChakraProps,
  Flex,
  HStack,
  Spinner,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Icon } from "@components/icon";
import { GoalsSkeleton } from "@components/skeletons";
import { CircleProgress } from "@components/ui";
import { MotionBox } from "@config/motion";
import { useToastContext } from "@hooks/context";
import { useMobileScreens } from "@hooks/mobile-screen";
import { useConsistencyStats, useGoals, useReferralStats } from "@hooks/swr";
import { CreateGoalModal } from "@layouts/modal-layout";
import { deleteGoal } from "@mutations/user";
import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "@tanstack/react-router";
import { State } from "@utils/constants";
import { formatPrice } from "@utils/misc";
import { Goal } from "@utils/types";
import { AnimatePresence } from "motion/react";
import React from "react";

interface MilestoneItemProps extends Partial<ChakraProps> {
  progress: number;
  gradient: `${string},${string}`;
  imageUrl: string;
  title: string;
  description: string;
  badge?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  hasBadge?: boolean;
  hasGoals?: boolean;
  goalsCount?: number;
  onOpen?: () => void;
  noBottomBorder?: boolean;
}

const MilestoneItem = ({
  progress,
  gradient,
  imageUrl,
  title,
  description,
  badge,
  backgroundColor = "#F0FAFC",
  children,
  hasBadge = false,
  hasGoals = false,
  onOpen,
  noBottomBorder = false,
  goalsCount = 0,
  ...props
}: MilestoneItemProps) => {
  const { isMobile } = useMobileScreens();
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
  return (
    <Flex
      pt="1em"
      gap={{ lg: "1em", base: ".1em" }}
      flexDirection="column"
      borderBottom={noBottomBorder ? "none" : "0.5px solid var(--border-muted)"}
      {...props}
    >
      <Flex alignItems="center" gap={{ lg: "1em", base: ".6em" }}>
        <Box>
          <CircleProgress
            progress={progress}
            strokeWidth={isMobile ? 7 : 8.5}
            imgSize="90%"
            size={isMobile ? 85 : 100}
            gradient={gradient}
            imageUrl={imageUrl}
            isMilestoneProgress
            backgroundColor={backgroundColor}
          />
        </Box>

        <Box display="flex" flexDirection="column" gap=".8em" flex={1}>
          <HStack justifyContent="space-between">
            <Text
              fontWeight="500"
              color="var(--dark)"
              textTransform="capitalize"
              fontSize={{ lg: "20px", md: "18px", base: "18px" }}
            >
              {title}
            </Text>
            {hasBadge && (
              <Badge
                color="#fff"
                fontWeight="400"
                fontSize="12px"
                height="25px"
                width="118px"
                borderRadius="17px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                textTransform="none"
                background="var(--overview-card-secondary)"
              >
                {badge}
              </Badge>
            )}
            {hasGoals && (
              <HStack alignItems="center">
                <Button
                  color="#fff"
                  fontWeight="400"
                  height="38px"
                  width="122px"
                  fontSize="14px"
                  borderRadius="36px"
                  background="var(--main-gradient)"
                  _hover={{
                    background: "var(--main-gradient)",
                  }}
                  onClick={onOpen && onOpen}
                >
                  Set goals
                </Button>
                {goalsCount > 0 && (
                  <MotionBox
                    whileTap={{ scale: 0.95 }}
                    cursor="pointer"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    <MotionBox
                      animate={{ rotate: isExpanded ? 180 : -90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CaretLeft size={18} />
                    </MotionBox>
                  </MotionBox>
                )}
              </HStack>
            )}
          </HStack>

          <Text
            fontSize={{ lg: "16px", md: "16px", base: "14px" }}
            color="#2a2a2a"
            fontWeight="300"
            lineHeight={{ lg: "30px", md: "30px", base: "25px" }}
          >
            {description}
          </Text>
        </Box>
      </Flex>

      <AnimatePresence>
        {isExpanded && children && (
          <MotionBox
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            {children}
          </MotionBox>
        )}
      </AnimatePresence>
    </Flex>
  );
};

export const Milestones = () => {
  const navigate = useNavigate();
  const { openToast } = useToastContext();
  const { data, count, isLoading, mutate } = useGoals();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [state, setState] = React.useState<State>("idle");
  const [selectedGoal, setSelectedGoal] = React.useState<Goal>();
  const { data: referrals } = useReferralStats();
  const { data: consistency } = useConsistencyStats();

  const handleGoalDeletion = async (goalId: string) => {
    if (!goalId) return;
    const found = data?.find((goal) => goal.goalID === goalId);
    setSelectedGoal(found);
    try {
      setState("deleting");
      const request = await deleteGoal(goalId);
      const response = await request?.json();
      if (request?.ok) {
        openToast(response.message, "success");
        mutate();
      } else {
        openToast(response.message, "error");
      }
    } catch (error) {
      console.error(`${(error as Error).message}`);
      openToast(`${(error as Error).message}`, "error");
    } finally {
      setState("idle");
    }
  };

  return (
    <>
      <Stack
        direction="column"
        gap=".8em"
        mt={{ lg: "-1em", base: "1em" }}
        width={{ xl: "45%", lg: "55%", md: "66%", base: "100%" }}
      >
        <HStack gap=".1em">
          <Box
            onClick={() => navigate({ to: ".." })}
            _hover={{ cursor: "pointer" }}
          >
            <CaretLeft size="18" />
          </Box>
          <Text
            fontWeight="400"
            color="var(--dark)"
            textTransform="capitalize"
            fontFamily="var(--clash-grotesk-400)"
            fontSize={{ base: "16px", xl: "24px", lg: "20px" }}
          >
            milestones & rewards
          </Text>
        </HStack>

        <Box
          border="0.5px solid var(--border-muted)"
          borderRadius="10px"
          height="fit-content"
          py="1em"
          px={{ lg: "1.2em", base: ".6em", md: ".8em" }}
        >
          <Stack direction="column" gap="1em">
            <MilestoneItem
              progress={Number(consistency?.progressPercentage) || 0}
              gradient="#59b0fC,#5f77d4"
              imageUrl="/img/award-blue.svg"
              title="consistency"
              description="Complete 3 full saving cycle & save N20,000 Charges on your next Pay-out"
              badge={`${consistency?.completedCyclesCount}/${consistency?.cyclesRemaining} completed`}
              hasBadge
              pb="3em"
            />

            <MilestoneItem
              progress={Number(referrals?.referralPercentage) || 0}
              gradient="#695cf4,#9e4ffe"
              imageUrl="/img/award-purple.svg"
              title="referrals"
              description="Share a thrift group with 10 friends, and enjoy zero charges on your next pay-outs when they join!"
              badge={`${referrals?.joinedReferrals}/${referrals?.referralCount} completed`}
              hasBadge
              pb="3em"
            />

            <MilestoneItem
              progress={32}
              gradient="#1ccfbd,#2c9bf0"
              imageUrl="/img/award-green.svg"
              title="My goals"
              onOpen={onOpen}
              hasGoals={true}
              noBottomBorder
              goalsCount={count}
              description="Set a goal for the month, year or week"
            >
              {isLoading ? (
                <GoalsSkeleton />
              ) : (
                <Flex
                  pt="1em"
                  gap="1em"
                  flexDirection="column"
                  px={{ lg: "1.2em", base: ".6em", md: ".8em" }}
                >
                  {data?.map((goal, index) => (
                    <HStack
                      justifyContent="space-between"
                      key={goal.goalID}
                      pb={index === data?.length - 1 ? "2em" : ""}
                    >
                      <Stack direction="column">
                        <Text
                          fontSize="12px"
                          fontWeight="400"
                          color="var(-dark)"
                          textAlign="center"
                        >
                          {goal?.name}
                        </Text>
                        <Badge
                          color="#6a6a6a"
                          fontWeight="400"
                          background="var(--grey-20)"
                          height="34px"
                          width="88px"
                          borderRadius="30px"
                          textTransform="lowercase"
                          textAlign="center"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          {goal.duration}
                        </Badge>
                      </Stack>

                      <HStack alignItems="center">
                        <Stack direction="column" gap="0em">
                          <Text
                            fontSize="14px"
                            color="var(--grey)"
                            textAlign="right"
                          >
                            Target
                          </Text>
                          <Text
                            color="var(--dark)"
                            fontWeight="400"
                            fontSize="18px"
                          >
                            {formatPrice(Number(goal.target))}
                          </Text>
                        </Stack>
                        {state === "deleting" &&
                        goal.goalID === selectedGoal?.goalID ? (
                          <Spinner size="xs" color="var(--grey)" />
                        ) : (
                          <Box onClick={() => handleGoalDeletion(goal.goalID)}>
                            <Icon name="trash" />
                          </Box>
                        )}
                      </HStack>
                    </HStack>
                  ))}
                </Flex>
              )}
            </MilestoneItem>
          </Stack>
        </Box>
      </Stack>

      <CreateGoalModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
