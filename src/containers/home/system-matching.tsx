import { Avatar, AvatarGroup, Box, Center, HStack } from "@chakra-ui/react";
import { PrimaryButton, SectionContainer } from "@components/ui";
import { MotionBox, MotionImage, MotionText } from "@config/motion";
import { textVariants } from "./hero";
import { useMobileScreens } from "@hooks/mobile-screen";

export const SystemMatching = () => {
  const { isMobile } = useMobileScreens();

  return (
    <Box pt={{ lg: "15em", md: "13em", base: "10em" }} border="1px solid red">
      <Box
        className="map"
        height={{ lg: "900px", md: "500px", base: "500px" }}
        position="relative"
      >
        <HStack justifyContent="center" alignItems="center">
          <MotionImage
            position="absolute"
            bottom="48%"
            left="32%"
            src="/img/person-4.svg"
            boxSize={{ lg: "86px", md: "60px", base: "50px" }}
          />
          <MotionImage
            position="absolute"
            bottom="40%"
            left="48%"
            src="/img/person-3.svg"
            boxSize={{ lg: "75px", md: "55px", base: "40px" }}
          />
        </HStack>

        <SectionContainer>
          <Box
            display="flex"
            flexFlow="column"
            gap="1.4em"
            height="100%"
            mt={{ lg: "-12em", base: "-10em" }}
            width={{ lg: "50%", base: "100%" }}
          >
            <MotionText
              fontFamily="var(--clash-grotesk-600)"
              textTransform="capitalize"
              lineHeight={{ xl: "70px", lg: "55px", md: "46px", base: "40px" }}
              variants={textVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true, amount: 0.5 }}
              textAlign={{ lg: "left", md: "left", base: "center" }}
              fontSize={{ xl: "70px", lg: "58px", md: "45px", base: "48px" }}
            >
              smart matching system
            </MotionText>

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
        </SectionContainer>
      </Box>
    </Box>
  );
};
