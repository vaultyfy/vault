import {
  Avatar,
  AvatarGroup,
  Box,
  Center,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { PrimaryButton, SectionContainer, SectionTitle } from "@components/ui";
import { MotionBox, MotionImage, MotionText } from "@config/motion";
import { textVariants } from "./hero";
import { useMobileScreens } from "@hooks/mobile-screen";
import { cashVariant } from "./flexible-contributions";
import { Marker } from "./map-pin";

const personVariant = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const SystemMatching = () => {
  const { isMobile } = useMobileScreens();

  return (
    <Box pt={{ lg: "15em", md: "13em", base: "10em" }}>
      <Box
        className="map"
        height={{ xl: "900px", lg: "630px", md: "500px", base: "700px" }}
        position="relative"
      >
        <Marker />
        <HStack justifyContent="center" alignItems="center">
          <MotionImage
            position="absolute"
            bottom={{ lg: "48%", md: "48%", base: "60%" }}
            left={{ lg: "32%", md: "32%", base: "1%" }}
            src="/img/person-4.svg"
            initial="hidden"
            whileInView="visible"
            variants={personVariant}
            boxSize={{ lg: "86px", md: "60px", base: "50px" }}
          />
          <MotionImage
            position="absolute"
            bottom={{ lg: "40%", md: "40%", base: "55%" }}
            left={{ lg: "48%", md: "48%", base: "88%" }}
            src="/img/person-3.svg"
            initial="hidden"
            whileInView="visible"
            variants={personVariant}
            viewport={{ once: true, amount: 1 }}
            boxSize={{ lg: "75px", md: "55px", base: "46px" }}
          />
        </HStack>

        <SectionContainer>
          <Flex justifyContent="space-between">
            <Box
              display="flex"
              flexFlow="column"
              gap="1.4em"
              height="100%"
              mt={{ lg: "-12em", base: "-10em" }}
              width={{ lg: "50%", base: "100%" }}
            >
              <SectionTitle title="smart matching system" />

              <MotionBox
                initial={{ opacity: 0, y: -40, x: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                  transition: { duration: 0.3, ease: "easeOut", bounce: 0.5 },
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                width={{ lg: "100%", md: "60%", base: "100%" }}
                borderRadius="14px"
                backdropFilter="blur(4px)"
                boxShadow="4px 4px 16px 0px #0000001A"
                background="var(--pale-blue)"
                height={{ lg: "238px", md: "100%", base: "100%" }}
                py={{ lg: "1.6em", md: ".8em", base: "1.2em" }}
                px={{ lg: "1.2em", md: ".6em", base: ".8em" }}
                flexFlow="column"
                display="flex"
                gap={{ lg: "2em", base: "1em", md: "2em" }}
              >
                <HStack
                  justifyContent={{ lg: "space-between", base: "center" }}
                  gap={{ lg: "2em", md: ".6em", base: ".8em" }}
                  flexFlow={{ lg: "row", md: "row", base: "column" }}
                >
                  <AvatarGroup>
                    {[
                      "/img/person-3.svg",
                      "/img/person-6.svg",
                      "/img/person-2.svg",
                    ].map((person, index) => {
                      return (
                        <Avatar
                          src={person}
                          key={index}
                          boxSize={{
                            xl: "70px",
                            lg: "60px",
                            md: "60px",
                            base: "60px",
                          }}
                        />
                      );
                    })}
                  </AvatarGroup>

                  <MotionText
                    fontSize={{ lg: "18px", md: "16px", base: "16px" }}
                    fontWeight="400"
                    lineHeight={{ lg: "28px", md: "18px" }}
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    textAlign={{ lg: "left", md: "left", base: "center" }}
                  >
                    Our platform matches you with a thrift group that fits your
                    savings goals
                  </MotionText>
                </HStack>

                {isMobile ? (
                  <Center>
                    <PrimaryButton text="join now" />
                  </Center>
                ) : (
                  <PrimaryButton text="join now" />
                )}
              </MotionBox>
            </Box>

            <Box
              position="absolute"
              bottom="0"
              right={{
                "2xl": "10%",
                xl: "2%",
                lg: "2%",
                md: "-5%",
                base: "19%",
              }}
            >
              <MotionImage
                src="/img/person-7.svg"
                position="absolute"
                top="-12%"
                left={{ xl: "-13%", lg: "-15%", md: "2%" }}
                initial={{ y: 30, x: 40, scale: 0.5, opacity: 0 }}
                whileInView={{
                  y: 0,
                  x: 0,
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    delay: 0.4,
                  },
                }}
                boxSize={{ xl: "initial", lg: "100px", md: "80px" }}
                viewport={{ once: true, amount: 0.4 }}
                display={{ lg: "block", md: "block", base: "none" }}
              />
              <MotionImage
                variants={cashVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                src="/img/vaultify-explore.svg"
                height={{
                  "2xl": "850px",
                  xl: "550px",
                  lg: "100%",
                  md: "350px",
                  base: "500px",
                }}
              />
            </Box>
          </Flex>
        </SectionContainer>
      </Box>
    </Box>
  );
};
