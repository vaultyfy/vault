import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { SectionContainer, SectionTitle } from "@components/ui";
import { MotionBox, MotionImage, MotionText } from "@config/motion";
import React from "react";
import { textVariants } from "./hero";
import { coinVariant } from "./financial-goals";
import { Star } from "@phosphor-icons/react";

export type Question = {
  id: string;
  question: string;
  answer: string;
};

const FAQS = [
  {
    id: crypto.randomUUID(),
    question: "What is thrift savings and how does it work?",
    answer:
      "Thrift saving is a group savings system where members contribute a fixed amount regularly. Each member takes turns receiving the total pooled contributions, helping everyone achieve their financial goals quickly.",
  },
  {
    id: crypto.randomUUID(),
    question: "What happens if someone doesn't contribute?",
    answer:
      "Thrift saving is a group savings system where members contribute a fixed amount regularly. Each member takes turns receiving the total pooled contributions, helping everyone achieve their financial goals quickly.",
  },
  {
    id: crypto.randomUUID(),
    question: "When do i get my money!",
    answer:
      "Try and be calming down. No fear! Your money will get int your account at the designated time",
  },
  {
    id: crypto.randomUUID(),
    question: "What happens if someone doesn't contribute?",
    answer:
      "Thrift saving is a group savings system where members contribute a fixed amount regularly. Each member takes turns receiving the total pooled contributions, helping everyone achieve their financial goals quickly.",
  },
];

export const Faq = () => {
  const [activeQuestion, setActiveQuestion] = React.useState<Question | null>();

  const onQuestionClick = (id: string) => {
    const found = FAQS.find((question) => question.id === id);
    setActiveQuestion(found);
  };

  return (
    <SectionContainer>
      <Box mt="8em" mb="3em" id="faqs">
        <Flex flexFlow="column" gap="1em">
          <SectionTitle title="FAQ" />

          <Flex
            justifyContent="space-between"
            gap={{ lg: "4em", md: "2em", base: "1em" }}
            flexWrap={{ lg: "nowrap", md: "nowrap", base: "wrap" }}
          >
            <MotionBox
              display="flex"
              flexFlow={{ lg: "column", md: "column", base: "row" }}
              overflowX={{ base: "auto", md: "hidden", lg: "hidden" }}
              whiteSpace={{ base: "normal", md: "normal", lg: "normal" }}
              gap="1em"
              width={{ lg: "50%", md: "50%", base: "100%" }}
              pb={{ base: "1em", md: "0", lg: "0" }}
            >
              {FAQS.map((question) => (
                <MotionBox
                  background={
                    activeQuestion?.id === question.id
                      ? "var(--pale-blue)"
                      : "var(--question-card)"
                  }
                  backdropFilter="blur(22px)"
                  height="106px"
                  px="1.4em"
                  _hover={{
                    cursor: "pointer",
                  }}
                  width={{ base: "280px", md: "100%" }}
                  borderRadius="14px"
                  key={question.id}
                  display="flex"
                  alignItems="center"
                  initial={{ opacity: 0, y: 20 }}
                  onClick={() => onQuestionClick(question.id)}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      damping: 13,
                      ease: "easeOut",
                      duration: 0.3,
                      delay: 0.1,
                    },
                  }}
                  transition={
                    activeQuestion?.id === question.id
                      ? { ease: "easeOut", type: "spring" }
                      : {}
                  }
                >
                  <HStack gap="1em">
                    {activeQuestion?.id === question.id ? (
                      <Star weight="fill" color="var(--main)" size="20" />
                    ) : null}
                    <Text
                      fontSize={{ lg: "18px", md: "16px", base: "14px" }}
                      width={{ lg: "340px", base: "200px", md: "80%" }}
                      lineHeight={{ lg: "27px", md: "22px", base: "20px" }}
                      fontWeight="400"
                    >
                      {question.question}
                    </Text>
                  </HStack>
                </MotionBox>
              ))}
            </MotionBox>

            <Box
              width={{ lg: "50%", base: "100%", md: "50%" }}
              height={{ lg: "385px", md: "300px", base: "280px" }}
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
                py="1.4rem"
                display="flex"
                flexFlow="column"
                gap="2em"
                position="relative"
              >
                <MotionText
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={textVariants}
                  custom={0.2}
                  fontFamily="var(--poppins)"
                  fontWeight="400"
                  lineHeight={{ lg: "27px", base: "23px", md: "22px" }}
                  fontSize={{ lg: "18px", base: "14px", md: "14px" }}
                  color="var(--white-fade)"
                >
                  {activeQuestion?.answer || FAQS[0].answer}
                </MotionText>

                <MotionImage
                  src="/img/question-bubble.svg"
                  position="absolute"
                  bottom="6%"
                  right="4%"
                  initial="hidden"
                  boxSize={{ lg: "initial", md: "60px", base: "80px" }}
                  whileInView="visible"
                  variants={coinVariant}
                  viewport={{ once: true, amount: 0.8 }}
                />
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </SectionContainer>
  );
};
