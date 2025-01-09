import { MotionBox, MotionText } from "@config/motion";
import { buttonVariants, textVariants } from "@containers/home/hero";
import { useDomContentLoaded } from "@hooks/dom-content-loaded";
import { useMobileScreens } from "@hooks/mobile-screen";
import { ArrowRight } from "@phosphor-icons/react";

interface PrimaryBtnProps {
  text: string;
  contentLoaded?: boolean;
}

export const PrimaryButton = ({
  text,
  contentLoaded = true,
}: PrimaryBtnProps) => {
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
                  delay: 0.5,
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

interface SecondaryBtnProps extends Pick<PrimaryBtnProps, "text"> {
  variant?: "light" | "dark";
  show?: "yes" | "no";
}

export const SecondaryButton = ({ text, variant, show }: SecondaryBtnProps) => {
  return (
    <MotionBox
      display={{ lg: "block", md: show || "none", base: show || "none" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={textVariants}
      borderRadius="4px"
      height="58px"
      width="178px"
      background={variant === "light" ? "var(--primary)" : "var(--main)"}
      whileTap={{
        marginLeft: ".5em",
        marginTop: ".3em",
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
    >
      <MotionBox
        fontWeight="500"
        fontSize="14px"
        background={
          variant === "light" ? "var(--white-fade)" : "var(--primary)"
        }
        color={variant === "light" ? "var(--dark)" : "var(--white-fade)"}
        as="button"
        mt="-.3em"
        height="100%"
        width={{ lg: "100%", base: "178px", md: "178px" }}
        borderRadius="4px"
        ml="-.3em"
      >
        {text}
      </MotionBox>
    </MotionBox>
  );
};
