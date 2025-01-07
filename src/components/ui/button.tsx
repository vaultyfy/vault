import { MotionBox, MotionText } from "@config/motion";
import { buttonVariants } from "@containers/home/hero";
import { useDomContentLoaded } from "@hooks/dom-content-loaded";
import { useMobileScreens } from "@hooks/mobile-screen";
import { ArrowRight } from "@phosphor-icons/react";

interface PrimaryBtnProps {
  text: string;
  contentLoaded?: boolean;
}

export const PrimaryButton = ({ text, contentLoaded = true }: PrimaryBtnProps) => {
  const { isMobile, isTablet } = useMobileScreens();

  return (
    <MotionBox
      as="button"
      whileHover="hover"
      variants={buttonVariants}
      backdropFilter="blur(24px)"
      display="flex"
      color="var(--main)"
      fontWeight="500"
      fontSize={{ lg: "16px", base: "12px" }}
      textTransform="capitalize"
      height={{ lg: "84px", base: "52px" }}
      width={{ lg: "fit-content", base: "140px" }}
      borderRadius="60px"
      background="var(--primary-btn-bg)"
      alignItems="center"
      justifyContent="center"
      gap=".8em"
      animate={
        contentLoaded
          ? { opacity: 1, transition: { delay: 0.6, duration: 0.3 } }
          : { opacity: 0 }
      }
      px=".4em"
    >
      <MotionText
        ml="1em"
        initial={{ x: -20, opacity: 0 }}
        animate={
          contentLoaded
            ? {
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 0.3,
                },
              }
            : { x: -20, opacity: 0 }
        }
      >
        {text}
      </MotionText>
      <MotionBox
        borderRadius="50%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxSize={{ lg: "58px", base: "33px" }}
        background="var(--main)"
        initial={{ x: -10, opacity: 0 }}
        animate={
          contentLoaded
            ? {
                x: 0,
                opacity: 1,
                transition: {
                  delay: .5,
                  duration: 0.3,
                },
              }
            : { x: -10, opacity: 0 }
        }
        whileHover={{
          x: 5,
          transition: { duration: 0.2 },
        }}
      >
        <ArrowRight
          color="var(--white-fade)"
          size={isMobile ? "18" : isTablet ? "20" : "38"}
        />
      </MotionBox>
    </MotionBox>
  );
};
