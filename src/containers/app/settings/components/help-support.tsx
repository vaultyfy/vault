import { useState } from "react";
import { Box, Flex, Text, VStack, Button, Image } from "@chakra-ui/react";

const faqs = [
  {
    question: "What is thrift saving, and how does it work?",
    answer:
      "Thrift saving is a group savings system where members contribute a fixed amount regularly. Each member takes turns receiving the total pooled contributions, helping everyone achieve their financial goals quickly.",
  },
  {
    question: "What happens if someone doesn’t contribute?",
    answer:
      "If a member doesn’t contribute, they might not be eligible for payouts. The group may impose penalties or remove the member to ensure fairness.",
  },
  {
    question: "How do I join a thrift savings group?",
    answer:
      "To join, you need an invite from an existing group or create your own, setting up contribution amounts and cycles.",
  },
];

const HelpSupportCard = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Box
      width="100%"
      maxWidth="1200px"
      mx="auto"
      mt="2em"
      height="100vh"
      overflowX="hidden"
      overflowY="auto"
      px={{ base: "4", md: "8" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="flex-start"
        gap={{ base: "4", md: "8" }}
        wrap="wrap"
        mt="10"
      >
        <Box
          w={{ base: "100%", md: "45%" }}
          maxWidth="500px"
          p="4"
          pt={{ base: "0", md: "2" }}
        >
          <Text fontSize="40px" fontWeight="600" color="var(--dark)" mt="-30px">
            Help & Support
          </Text>
          <Text
            fontSize="36px"
            fontWeight="600"
            color="var(--dark)"
            mt="6"
            mb={"2"}
          >
            FAQ
          </Text>

          <VStack spacing="3" align="stretch">
            {faqs.map((faq, index) => (
              <Flex
                key={index}
                p="20px"
                borderRadius="14px"
                bg={selected === index ? "#DDF7F0B8" : "#19191A05"}
                boxShadow="sm"
                cursor="pointer"
                onClick={() => setSelected(index)}
                align="center"
                justify="space-between"
                width="100%"
                height={"100px"}
                transition="0.3s"
              >
                <Text fontSize="16px" fontWeight="medium">
                  {faq.question}
                </Text>
                {selected === index && (
                  <Image
                    src="/img/star.svg"
                    alt="star"
                    height="20px"
                    width="20.07px"
                  />
                )}
              </Flex>
            ))}
          </VStack>
        </Box>

        <Box w={{ base: "100%", md: "50%" }} maxWidth="600px" p="4">
          <Text
            fontSize="24px"
            fontWeight="600"
            color="var(--btn-secondary)"
            mb="4"
          >
            Answers
          </Text>
          <Box
            backgroundColor="#102634"
            borderRadius="22px"
            border="2px solid var(--btn-secondary)"
            p="6"
            position="relative"
            minHeight="280px"
            maxWidth="480px"
            boxShadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Text fontSize="16px" color="white">
              {faqs[selected].answer}
            </Text>

            <Image
              src="/img/answer-image.svg"
              alt="answer-icon"
              height="65px"
              width="65px"
              position="absolute"
              bottom="40px"
              right="20px"
            />
          </Box>

          <Box mt="4" bg="#19191A05" p="4" borderRadius="14px">
            <Flex justify="space-between" align="center">
              <Text fontSize="18px" fontWeight={400} color={"#000000"}>
                Still have questions? Contact us directly
              </Text>
              <Button
                bg="#102634"
                fontWeight={500}
                fontSize={"14px"}
                color="white"
                px="4"
                borderRadius={"36px"}
                _hover={{ bg: "#102634" }}
                _active={{ bg: "#102634" }}
                _focus={{ boxShadow: "none" }}
              >
                Contact us
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default HelpSupportCard;
