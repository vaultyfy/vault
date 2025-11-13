import { Box, Flex, Text } from "@chakra-ui/react";
import { Icon } from "@components/icon";
import { StepProps } from "./how-it-works";
import { MotionBox, MotionImage } from "@config/motion";
import { useAnimation } from "motion/react";

interface MobStepProps extends Pick<StepProps, "body" | "title" | "icon"> {}

const MobileStep = ({ icon, title, body }: MobStepProps) => {
  return (
    <MotionBox
      backdropFilter="blur(18px)"
      display="flex"
      gap=".8em"
      flexFlow="column"
      py=".6em"
      px=".6em"
      height="200px"
      border=".4px solid var(--primary)"
      borderRadius="16px"
      style={{
        width: "300px",
        flexShrink: 0,
        minWidth: "300px",
      }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxSize="48px"
        borderRadius="100%"
        background="var(--main)">
        <Icon name={icon} />
      </Box>
      <Flex flexFlow="column" gap={{ lg: ".3em", md: ".3em", base: ".6em" }}>
        <Text
          fontSize={{ xl: "20px", lg: "16px", md: "16px", base: "18px" }}
          lineHeight={{ lg: "30px", md: "24px", base: "20px" }}
          fontWeight="600">
          {title}
        </Text>
        <Text
          fontSize={{ xl: "16px", lg: "14px", md: "14px", base: "16px" }}
          lineHeight={{ lg: "24px", md: "20px", base: "22px" }}
          fontWeight="400">
          {body}
        </Text>
      </Flex>
    </MotionBox>
  );
};

export const MobileStepsCarousel = ({ steps }: { steps: MobStepProps[] }) => {
  return (
    <Box
      display={{ base: "block", md: "block", lg: "none" }}
      width="100%"
      overflow="hidden">
      <MotionBox
        display="flex"
        gap="4"
        px="4"
        pb="4"
        drag="x"
        dragConstraints={{
          right: 0,
          left: -(steps.length - 1) * (300 + 16),
        }}
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        whileTap={{ cursor: "grabbing" }}
        style={{
          cursor: "grab",
          touchAction: "none",
        }}>
        {steps.map((step, index) => (
          <MobileStep
            key={index}
            icon={step.icon}
            title={step.title}
            body={step.body}
          />
        ))}
      </MotionBox>
      <MotionImage src="/img/arrow.svg" boxSize="100%" />
    </Box>
  );
};
