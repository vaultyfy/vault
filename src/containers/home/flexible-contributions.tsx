import { Box, Flex } from "@chakra-ui/react";
import { SectionContainer } from "@components/ui";
import { MotionBox, MotionImage, MotionText } from "@config/motion";
import { textVariants } from "./hero";
import { useMobileScreens } from "@hooks/mobile-screen";

export const cashVariant = {
  hidden: { opacity: 0, y: 35 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay,
      ease: "easeOut",
      type: "spring",
    },
  }),
};

export const FlexibleContributions = () => {
  const { isSmallViewPort } = useMobileScreens();

  return (
    <SectionContainer>
      <Flex
        justifyContent="space-between"
        mt={{ lg: "6em", base: "3em", md: "4em" }}
        py="3em"
        gap={{ lg: "8em", md: "6em", base: "2em" }}
        flexWrap={{ lg: "nowrap", md: "nowrap", base: "wrap-reverse" }}
      >
        <MotionBox
          display={{ lg: "none", md: "none", base: "block" }}
          mx="auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={textVariants}
          borderRadius="4px"
          height="58px"
          width="178px"
          background="var(--primary)"
        >
          <MotionBox
            fontWeight="500"
            fontSize="14px"
            background="var(--main)"
            color="var(--white-fade)"
            as="button"
            mt="-.3em"
            height="100%"
            width="100%"
            borderRadius="4px"
            ml="-.3em"
          >
            Pick a saving cycle
          </MotionBox>
        </MotionBox>

        <Box
          height={{ lg: "607px", base: "fit-content" }}
          width={{ lg: "60%", base: "100%", md: "60%" }}
          position="relative"
          display="flex"
          justifyContent="center"
        >
          <MotionImage
            src="/img/cash-bundle.svg"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            viewport={{ once: true, amount: 0.4 }}
          />

          <MotionImage
            src="/img/iphone-vultifier.svg"
            variants={cashVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            position="absolute"
            custom={0.2}
            top={{ xl: "-9px", lg: "22px", base: "-1px", md: "-19px" }}
            boxSize={{ xl: "615px", lg: "500px", base: "100%", md: "340px" }}
            borderBottomLeftRadius="49.1%"
            borderBottomRightRadius="49.1%"
          />
        </Box>

        <Box
          display="flex"
          flexFlow="column"
          gap="2em"
          mx={{ base: "auto", md: "", lg: "initial" }}
          textAlign={{ base: "center", md: "left", lg: "left" }}
          width={{ xl: "40%", lg: "60%", base: "100%", md: "60%" }}
        >
          <Flex gap=".4em" flexFlow="column">
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
              <MotionText
                as="span"
                position="relative"
                _before={{
                  content: "''",
                  position: "absolute",
                  width: "100%",
                  height: "4px",
                  bottom: isSmallViewPort ? "3px" : "8px",
                  left: "0",
                  background:
                    "linear-gradient(104.4deg, #1CCFBD 1.7%, #2C9BF0 105.41%)",
                  maskImage: "linear-gradient(to right, black 100%)",
                  WebkitMaskImage: "linear-gradient(to right, black 100%)",
                }}
              >
                Flexible
              </MotionText>{" "}
              Contribution Plans
            </MotionText>

            <MotionText
              fontSize={{ lg: "18px", md: "18px", base: "15px" }}
              fontWeight="500"
              color="var(--dark)"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Choose a savings cycle that suits you — daily, weekly, or monthly.
            </MotionText>
          </Flex>

          <MotionBox
            display={{ lg: "block", md: "none", base: "none" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={textVariants}
            borderRadius="4px"
            height="58px"
            width="178px"
            background="var(--primary)"
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
              background="var(--main)"
              color="var(--white-fade)"
              as="button"
              mt="-.3em"
              height="100%"
              width="100%"
              borderRadius="4px"
              ml="-.3em"
            >
              Pick a saving cycle
            </MotionBox>
          </MotionBox>
        </Box>
      </Flex>
    </SectionContainer>
  );
};
