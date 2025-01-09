import { Box, Flex, Text } from "@chakra-ui/react";
import { SectionContainer } from "@components/ui";
import { MotionBox, MotionImage, MotionText } from "@config/motion";
import { textVariants } from "./hero";
import { cashVariant } from "./flexible-contributions";
import { Icon } from "@components/icon";
import { MobileStepsCarousel } from "./mobile-steps";

export interface StepProps {
  icon: string;
  title: string;
  body: string;
  mt?: string;
  left?: string | {} | number;
  right?: string | {} | number;
  bottom?: string | {} | number;
  top?: string | {} | number;
  x?: number;
  y?: number;
  positioning?: "yes" | "no";
}

const STEPS = [
  {
    icon: "user-edit",
    title: "Sign Up & Verify",
    body: "Create an account, verify your details, and get started in minutes",
  },
  {
    icon: "profile-2user",
    title: "Join or Request a group",
    body: "Find a thrift group that matches your goals or start your own and invite others.",
  },
  {
    icon: "money-send",
    title: "Receive your pay-out",
    body: "Get your lump sum payout when it's your turn, and watch your goals come to life!",
  },
  {
    icon: "money-send",
    title: "Contribute regularly",
    body: "Make contributions on the scheduled dates to keep the cycle running smoothly.",
  },
];

const Step = ({
  icon,
  body,
  title,
  left,
  right,
  mt,
  bottom,
  top,
  x,
  y,
  positioning,
}: StepProps) => {
  return (
    <MotionBox
      backdropFilter="blur(18px)"
      display="flex"
      position={positioning === "no" ? "initial" : "absolute"}
      left={left}
      right={right}
      top={top}
      bottom={bottom}
      gap=".8em"
      flexFlow="column"
      py=".6em"
      px=".6em"
      height={positioning === "no" ? "100%" : "fit-content"}
      width="300px"
      border=".4px solid var(--primary)"
      borderRadius="16px"
      mt={mt || "-4em"}
      initial={{ opacity: 0, x, y }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          type: "spring",
          bounce: 0.2,
        },
      }}
      viewport={{ once: true, amount: 0.8 }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxSize="48px"
        borderRadius="100%"
        background="var(--main)"
      >
        <Icon name={icon} />
      </Box>

      <Flex flexFlow="column" gap=".3em">
        <Text fontSize="20px" lineHeight="30px" fontWeight="600">
          {title}
        </Text>

        <Text fontSize="16px" lineHeight="24px" fontWeight="400">
          {body}
        </Text>
      </Flex>
    </MotionBox>
  );
};

export const HowItWorks = () => {
  return (
    <SectionContainer>
      <Flex
        id="how-it-works"
        justifyContent="space-between"
        alignItems="center"
        mt={{ lg: "6em", base: "3em", md: "4em" }}
        gap={{ lg: "8em", md: "6em", base: "2em" }}
        flexWrap={{ lg: "nowrap", md: "nowrap", base: "wrap" }}
      >
        <Flex gap="1.2em" flexFlow="column">
          <Flex flexFlow="column" gap=".8em">
            <MotionText
              fontFamily="var(--clash-grotesk-600)"
              lineHeight={{ lg: "68px", md: "50px", base: "44px" }}
              fontSize={{ xl: "70px", lg: "58px", md: "46px", base: "48px" }}
              whileInView="visible"
              initial="hidden"
              variants={textVariants}
              custom={0.3}
              viewport={{ once: true, amount: 0.5 }}
            >
              How it works
            </MotionText>

            <MotionText
              width="75%"
              fontSize={{ lg: "20px", md: "18px", base: "15px" }}
              fontWeight="400"
              color="var(--dark)"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Learn how to be a part of vaultyfy thrift platform in a few steps
            </MotionText>
          </Flex>

          <MotionBox
            bgGradient="var(--main-gradient)"
            height="480px"
            borderRadius="25px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
          >
            <MotionImage
              position="absolute"
              bottom="0"
              variants={cashVariant}
              src="/img/milestones.svg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={0.2}
              boxSize={{ xl: "90%", lg: "500px", base: "", md: "340px" }}
            />
          </MotionBox>
        </Flex>

        <MobileStepsCarousel steps={STEPS} />

        <Box
          position="relative"
          display={{ lg: "block", md: "block", base: "none" }}
        >
          <MotionImage src="/img/path.svg" />

          <Flex
            flexFlow={{ lg: "column", md: "column", base: "row" }}
            justifyContent="space-between"
          >
            <Step
              x={0}
              y={40}
              body="Create an account, verify your details, and get started in minutes"
              title="Sign Up & Verify"
              top="0"
              left="14%"
              icon="user-edit"
            />

            <Flex justifyContent="space-between">
              <Step
                x={30}
                y={0}
                title="Join or Request a group"
                top="41%"
                right="-14%"
                icon="profile-2user"
                body="Find a thrift group that matches your goals or start your own and invite others."
              />

              <Step
                x={-30}
                y={0}
                top="41%"
                left="-15%"
                icon="money-send"
                title="Receive your pay-out"
                body="Get your lump sum payout when it's your turn, and watch your goals come to life!"
              />

              <Step
                y={40}
                x={0}
                bottom="-13%"
                left="14%"
                icon="money-send"
                title="Contribute regularly"
                body="Make contributions on the scheduled dates to keep the cycle running smoothly."
              />
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </SectionContainer>
  );
};
