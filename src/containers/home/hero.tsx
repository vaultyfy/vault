import { Box, Button, ButtonGroup, Flex, Image, Text } from "@chakra-ui/react";
import { SectionContainer } from "@components/ui";
import { MotionBox, MotionImage, MotionText } from "@config/motion";
import { useDomContentLoaded } from "@hooks/dom-content-loaded";
import { ArrowRight } from "@phosphor-icons/react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { People } from "./people";

export const TRANSITION = {
  duration: 0.3,
  ease: "easeOut",
};

export const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: "easeOut",
    },
  }),
};

const buttonVariants = {
  initial: { scale: 1, opacity: 0 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const goalsVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    rotate: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 6,
    transition: {
      opacity: { duration: 0.5, delay: 0.45 },
      y: { duration: 0.5, delay: 0.45 },
      rotate: {
        duration: 0.3,
        delay: 0.95,
        bounce: 1,
        type: "spring",
      },
      delay: 1.5,
    },
  },
  hover: {
    rotate: 0,
    transition: {
      duration: 0.3,
    },
  },
  tap: {
    rotate: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 992px)" });
  const { contentLoaded } = useDomContentLoaded();

  const animationControls = contentLoaded ? "visible" : "hidden";

  return (
    <SectionContainer>
      <Flex
        mt={{ xl: "12rem", lg: "8rem", md: "1rem", base: "1rem" }}
        justifyContent="space-between"
        flexWrap={{ base: "wrap", md: "wrap", lg: "nowrap" }}
      >
        <Box width={{ md: "100%", lg: "50%" }}>
          <Flex
            fontFamily="var(--clash-grotesk-700)"
            fontSize={{ xl: "80px", lg: "70px", md: "70px", base: "48px" }}
            textTransform="uppercase"
            flexFlow="column"
          >
            <Flex>
              <Box
                lineHeight={{
                  base: "50px",
                  xl: "90px",
                  lg: "initial",
                  md: "70px",
                }}
              >
                <MotionText
                  initial="hidden"
                  animate={animationControls}
                  custom={0.4}
                  variants={textVariants}
                >
                  Your
                </MotionText>
                <MotionText
                  bgGradient="linear(104.4deg, #1CCFBD 1.7%, #2C9BF0 105.41%)"
                  bgClip="text"
                  initial="hidden"
                  animate={animationControls}
                  whileHover="hover"
                  variants={goalsVariants}
                  cursor="pointer"
                >
                  goals
                </MotionText>
              </Box>
              <MotionImage
                src="/img/coin.svg"
                mt={{ base: "-1em" }}
                boxSize={{
                  base: "160px",
                  xl: "280px",
                  lg: "240px",
                  md: "200px",
                }}
                variants={textVariants}
                custom={0.8}
                initial="hidden"
                animate={animationControls}
              />
            </Flex>
            <MotionText
              mt={{ base: "-.4em", xl: "-.5em", lg: "-.3em" }}
              initial="hidden"
              animate={animationControls}
              custom={0.8}
              variants={textVariants}
            >
              your turn
            </MotionText>
          </Flex>

          <Flex flexFlow="column" gap={{ lg: "1.2em", base: ".6em" }}>
            <MotionText
              color="var(--dark)"
              fontWeight={{ lg: "500", base: "400" }}
              fontSize={{ lg: "20px", base: "16px" }}
              lineHeight={{ lg: "30px", base: "24px", md: "24px" }}
              initial="hidden"
              animate={animationControls}
              custom={0.9}
              variants={textVariants}
            >
              Join verified thrift savings groups, contribute securely, and
              receive payouts in rotation. Transparent, reliable, and built for
              your goals
            </MotionText>

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
              width={{ lg: "206px", base: "fit-content" }}
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
                get started
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
                          delay: 1.4,
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
          </Flex>
        </Box>

        <People />
      </Flex>
    </SectionContainer>
  );
};
