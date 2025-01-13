import { Box, Flex, HStack } from "@chakra-ui/react";
import { SecondaryButton, SectionContainer } from "@components/ui";
import { MotionBox, MotionImage, MotionText } from "@config/motion";
import { textVariants } from "./hero";
import { coinVariant } from "./financial-goals";
import { useScroll, useSpring } from "motion/react";
import React from "react";
import { useMobileScreens } from "@hooks/mobile-screen";

export const GetMoreDone = () => {
  const { isMobile } = useMobileScreens();

  return (
    <>
      <MotionBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        mt={{ lg: "6em", base: "3em", md: "4em" }}
        className="grid-warp"
        _before={{
          content: "''",
          position: "absolute",
          height: "100%",
          width: "99.9%",
          background: "var(--white-fade)",
          opacity: 0.8,
          top: 0,
          left: 0,
        }}
      >
        <SectionContainer>
          <Box
            alignItems="center"
            border="1px solid #2C9BF0"
            display="flex"
            justifyContent="space-between"
            gap={{ lg: "2em", md: "2em", base: "1.2em" }}
            borderRadius={{ lg: "25px", md: "20px", base: "18px" }}
            height={{ xl: "485px", lg: "100%", md: "100%", base: "100%" }}
            px={{ lg: "1.6em", md: "1.6em", base: "1.4em" }}
            py={{ lg: "1.2em", base: "1.2em", md: "1.2em" }}
            backdropFilter="blur(7px)"
            flexWrap={{ lg: "nowrap", md: "wrap", base: "wrap" }}
          >
            <MotionImage src="/img/video.svg" width={{lg: "60%"}} />

            <Flex flexFlow="column" gap="2em">
              <Flex flexFlow="column" gap=".8em">
                <MotionText
                  fontFamily="var(--clash-grotesk-600)"
                  lineHeight={{ lg: "68px", md: "50px", base: "44px" }}
                  fontSize={{
                    xl: "70px",
                    lg: "58px",
                    md: "46px",
                    base: "48px",
                  }}
                  whileInView="visible"
                  initial="hidden"
                  variants={textVariants}
                  custom={0.3}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  Get more done!
                </MotionText>

                <MotionText
                  width="100%"
                  fontSize={{ lg: "20px", md: "18px", base: "15px" }}
                  fontWeight="400"
                  color="var(--dark)"
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Learn how to be a part of vaultyfy thrift platform in a few
                  steps
                </MotionText>
              </Flex>

              <SecondaryButton text="Get Started" />
            </Flex>
          </Box>
        </SectionContainer>
      </MotionBox>

      <Box
        height={{ lg: "588px", md: "100%", base: "100%" }}
        background="var(--main)"
        position="relative"
      >
        <MotionImage
          src="/img/lock.svg"
          position="absolute"
          bottom="2%"
          right={{ lg: "10%", md: "10%", base: "4%" }}
          initial="hidden"
          boxSize={{ lg: "initial", base: "100px" }}
          whileInView="visible"
          variants={coinVariant}
          viewport={{ once: true, amount: 0.8 }}
        />

        <SectionContainer>
          <Flex
            justifyContent="center"
            flexFlow="column"
            alignItems="center"
            py="4em"
            gap="3em"
          >
            <MotionText
              color="#fff"
              fontFamily="var(--clash-grotesk-600)"
              lineHeight={{ lg: "68px", md: "50px", base: "44px" }}
              fontSize={{ xl: "70px", lg: "58px", md: "46px", base: "48px" }}
              whileInView="visible"
              initial="hidden"
              variants={textVariants}
              custom={0.3}
              textAlign="center"
              viewport={{ once: true, amount: 0.5 }}
            >
              Safe and Secure Platform
            </MotionText>

            <HStack
              justifyContent="space-between"
              px={{ lg: "0", md: "", base: "3em" }}
              gap={{ xl: "5em", lg: "1.6em", md: "2em", base: "2em" }}
              flexWrap={{ lg: "nowrap", md: "nowrap", base: "wrap" }}
            >
              <MotionBox
                _before={{
                  content: "''",
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  borderRadius: "14px",
                  top: "0",
                  left: "0",
                  background: "var(--pale-grey)",
                  transform: "rotate(-5deg)",
                }}
                initial={{ opacity: 0, transform: "rotate(0deg)" }}
                whileInView={{
                  opacity: 1,
                  transform: `rotate(${isMobile ? 0 : -3}deg)`,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut",
                    bounce: 0.3,
                  },
                }}
                viewport={{ once: true, amount: 0.4 }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                position="relative"
                height="185px"
                borderRadius="14px"
                backdropFilter="blur(7px)"
                bgGradient="var(--main-gradient)"
                color="var(--white-fade)"
                px="1em"
                py="1em"
                fontSize={{ xl: "20px", lg: "18px", md: "14px", base: "18px" }}
                lineHeight={{ lg: "30px", md: "24px", base: "20px" }}
                fontWeight={{ xl: "500", lg: "400", md: "400", base: "400" }}
                transform={{
                  lg: "rotate(-2deg)",
                  base: "rotate(0deg)",
                  md: "rotate(-2deg)",
                }}
                mt={{ lg: "3em", md: "3em", base: "0" }}
              >
                We use industry-standard encryption to keep your data and
                savings secure
              </MotionBox>

              <MotionBox
                position="relative"
                height="185px"
                borderRadius="14px"
                backdropFilter="blur(7px)"
                background="var(--pale-grey)"
                color="var(--white-fade)"
                display="flex"
                justifyContent="center"
                alignItems="center"
                px="1em"
                py="1em"
                fontSize={{ xl: "20px", lg: "18px", md: "14px", base: "18px" }}
                lineHeight={{ lg: "30px", md: "24px", base: "20px" }}
                fontWeight={{ xl: "500", lg: "400", md: "400", base: "400" }}
              >
                Your money is protected with secure payment gateways and
                transparency
              </MotionBox>

              <MotionBox
                position="relative"
                height="185px"
                borderRadius="14px"
                backdropFilter="blur(7px)"
                background="var(--pale-grey)"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="var(--white-fade)"
                px="1em"
                py="1em"
                fontSize={{ xl: "20px", lg: "18px", md: "14px", base: "18px" }}
                lineHeight={{ lg: "30px", md: "24px", base: "20px" }}
                fontWeight={{ xl: "500", lg: "400", md: "400", base: "400" }}
                transform={{
                  lg: "rotate(3deg)",
                  base: "rotate(0deg)",
                  md: "rotate(3deg)",
                }}
                mt={{ lg: "3em", md: "3em", base: "0" }}
                initial={{ opacity: 0, transform: "rotate(0deg)" }}
                whileInView={{
                  opacity: 1,
                  transform: `rotate(${isMobile ? 0 : 3}deg)`,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut",
                    bounce: 0.3,
                  },
                }}
                viewport={{ once: true, amount: 0.4 }}
              >
                Verified groups and trusted members ensure a safe saving
                experience
              </MotionBox>
            </HStack>

            <SecondaryButton text="Get Started" variant="light" show="yes" />
          </Flex>
        </SectionContainer>
      </Box>
    </>
  );
};
