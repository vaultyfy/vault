import { Box, Button, ButtonGroup, Flex, Image, Text } from "@chakra-ui/react";
import { SectionContainer } from "@components/ui";
import { MotionBox, MotionImage, MotionText } from "@config/motion";
import { UseDomContentLoaded } from "@hooks/dom-content-loaded";
import { ArrowRight } from "@phosphor-icons/react";
import React from "react";
import { useMediaQuery } from "react-responsive";

const TRANSITION = {
  duration: 0.3,
  ease: "easeOut",
};

const containerVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1,
    transition: {
      staggerChildren: 0,
    },
  },
  tap: {
    scale: 1,
    transition: {
      staggerChildren: 0,
    },
  },
};

const childVariants = {
  initial: {
    x: 0,
    y: 0,
    scale: 1,
    transition: TRANSITION,
  },
  hover: ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) => ({
    x,
    y,
    scale,
    transition: TRANSITION,
  }),
};

const textVariants = {
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
  const { contentLoaded } = UseDomContentLoaded();

  const animationControls = contentLoaded ? "visible" : "hidden";

  return (
    <SectionContainer>
      <Flex
        mt={{ lg: "12rem", md: "1rem", base: "1rem" }}
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
                  ? { opacity: 1, transition: { delay: .6, duration: 0.3 } }
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
                          delay: .6,
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

        <MotionBox
          position="relative"
          height={{ lg: "471px", md: "380px", base: "450px" }}
          width={{ lg: "471px", md: "400px", base: "98%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          layout
          variants={containerVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          animate="initial"
          _hover={{
            cursor: "pointer",
          }}
          mx="auto"
          mt={{ lg: "initial", base: ".4em" }}
        >
          <MotionImage
            layoutId="person-6"
            src="/img/person-6.svg"
            position="absolute"
            top="39%"
            left="40%"
            alt="Woman with curly hair smiling in a colorful blouse"
            custom={{ x: 0, y: 0, scale: 0.9 }}
            variants={childVariants}
            boxSize={{ md: "80px", base: "88px", lg: "initial" }}
          />

          <MotionImage
            layoutId="people-ring"
            src="/img/people-ring.svg"
            custom={{ x: 0, y: 0, scale: 1.2 }}
            variants={childVariants}
            boxSize={{ md: "220px", base: "80%", lg: "initial" }}
          />

          <MotionImage
            src="/img/person-1.svg"
            position="absolute"
            top="0"
            left="0"
            alt="Man with an afro with a yellow vest"
            layoutId="person-1"
            custom={{ x: -30, y: -10 }}
            variants={childVariants}
            boxSize={{ md: "130px", base: "150px", lg: "initial" }}
          />

          <MotionImage
            src="/img/person-2.svg"
            position="absolute"
            top="3%"
            right="20%"
            alt="Woman of african descent in a colorful blouse"
            layoutId="person-2"
            custom={{ x: 28, y: -20 }}
            variants={childVariants}
            boxSize={{ md: "100px", base: "100px", lg: "initial" }}
          />

          <MotionImage
            src="/img/person-3.svg"
            position="absolute"
            top="35%"
            right="-2%"
            alt="Woman with braids"
            layoutId="person-3"
            variants={childVariants}
            custom={{ x: 15, y: 15 }}
            boxSize={{ md: "110px", base: "125px", lg: "initial" }}
          />

          <MotionImage
            src="/img/person-4.svg"
            position="absolute"
            bottom="2%"
            right="34%"
            alt="Fresh kid painted his hair white/brown"
            layoutId="person-4"
            custom={{ x: 0, y: 30 }}
            variants={childVariants}
            boxSize={{ md: "98px", base: "115px", lg: "initial" }}
          />

          <MotionImage
            src="/img/person-5.svg"
            position="absolute"
            top="49%"
            left="1%"
            alt="Man with beard putting on a beanie"
            layoutId="person-5"
            custom={{ x: -40, y: 20 }}
            variants={childVariants}
            boxSize={{ md: "98px", base: "115px", lg: "initial" }}
          />
        </MotionBox>
      </Flex>
    </SectionContainer>
  );
};
