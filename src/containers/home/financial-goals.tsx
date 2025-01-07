import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { SectionContainer } from "@components/ui";
import { MotionBox, MotionImage, MotionText } from "@config/motion";
import { textVariants } from "./hero";

interface SellingPointProps {
  icon: string;
  text: string;
}

const coinVariant = {
  hidden: { opacity: 0, x: -30, scale: 1, y: 20, transform: "rotate(-20deg)" },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1.1,
    transform: "rotate(0deg)",
    transition: {
      duration: 0.3,
      ease: "easeIn",
      bounce: 0.8,
    },
  },
};

const SELLING_POINTS = [
  {
    icon: "/icons/collectively.svg",
    text: "Save collectively and unlock funds quickly when it's your turn",
  },
  {
    icon: "/icons/wallet-add.svg",
    text: "Access lump sums for business, education, emergencies, or investments in short time",
  },
  {
    icon: "/icons/wallet-add.svg",
    text: "Achieve your financial milestones faster with organized group savings",
  },
];

const SellingPoint = ({ icon, text }: SellingPointProps) => {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, x: 40 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 },
        },
      }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="fit-content"
      width="100%"
      borderRadius="14px"
      background="var(--pale-blue)"
      gap="1em"
      py="1.4em"
      px=".8em"
    >
      <Box
        width={{ lg: "66px", md: "66px", base: "60px" }}
        height={{ lg: "58px", md: "58px", base: "50px" }}
        borderRadius="50%"
        background="var(--main)"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={icon} />
      </Box>
      <Box width="100%">
        <Text
          fontSize={{ lg: "18px", md: "16px", base: "15px" }}
          color="var(--dark)"
          fontWeight="400"
        >
          {text}
        </Text>
      </Box>
    </MotionBox>
  );
};

export const FinancialGoals = () => {
  return (
    <SectionContainer>
      <Flex
        justifyContent="space-between"
        gap={{ xl: "4em", lg: "1.6em", md: "3em", base: "3em" }}
        flexWrap={{ lg: "nowrap", base: "wrap" }}
        mt={{ lg: "", md: "", base: "2.6em" }}
      >
        <Box
          width={{ lg: "60%", base: "100%" }}
          height={{ lg: "550px", md: "550px", base: "400px" }}
          borderRadius="24px"
          bgGradient="linear-gradient(104.4deg, #1ccfbd 1.7%, #2c9bf0 105.41%)"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            height={{ lg: "98%", md: "98%", base: "98%" }}
            width="98%"
            background="var(--main)"
            borderRadius="18px"
            px="1.8rem"
            pt={{ xl: "6em", lg: "8em", md: "6em", base: "2em" }}
            display="flex"
            flexFlow="column"
            gap="2em"
            position="relative"
          >
            <Flex flexFlow="column" gap=".8rem">
              <MotionText
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={textVariants}
                fontWeight="600"
                fontSize={{ xl: "80px", lg: "68px", md: "76px", base: "48px" }}
                lineHeight={{
                  xl: "78px",
                  lg: "70px",
                  md: "70px",
                  base: "46px",
                }}
                fontFamily="var(--clash-grotesk-600)"
                color="#fff"
              >
                Reach your financial goals in short time
              </MotionText>

              <MotionText
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={textVariants}
                custom={0.2}
                fontFamily="var(--poppins)"
                fontWeight="500"
                lineHeight={{ lg: "30px", base: "24px", md: "30px" }}
                fontSize={{ lg: "20px", base: "16px", md: "20px" }}
                color="#fff"
              >
                Get matched with the right thrift team and achieve your
                financial goals faster through seamless group savings
              </MotionText>
            </Flex>

            <MotionBox
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
                background="var(--white-fade)"
                color="var(--main)"
                as="button"
                mt="-.3em"
                height="100%"
                width="100%"
                borderRadius="4px"
                ml="-.3em"
              >
                Start your journey
              </MotionBox>
            </MotionBox>

            <MotionImage
              src="/img/time-is-money.svg"
              position="absolute"
              bottom=".5%"
              right="1%"
              initial="hidden"
              boxSize={{ lg: "initial", base: "140px" }}
              whileInView="visible"
              variants={coinVariant}
              viewport={{ once: true, amount: 0.8 }}
            />
          </Box>
        </Box>

        <MotionBox
          width={{ lg: "40%", base: "100%", md: "70%" }}
          display="flex"
          flexFlow="column"
          gap={{lg: "1.4rem", base: "1rem"}}
          alignItems="center"
          justifyContent="center"
          mx="auto"
        >
          {SELLING_POINTS.map((point, index) => (
            <SellingPoint key={index} icon={point.icon} text={point.text} />
          ))}
        </MotionBox>
      </Flex>
    </SectionContainer>
  );
};
