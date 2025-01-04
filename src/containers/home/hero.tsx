import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { SectionContainer } from "@components/ui";

export const Hero = () => {
  return (
    <SectionContainer>
      <Flex mt="9rem" justifyContent="space-between">
        <Flex
          fontFamily="var(--clash-grotesk-700)"
          fontSize="80px"
          textTransform="uppercase"
          flexFlow="column"
        >
          <Flex>
            <Box>
              <Text>Your</Text>
              <Text
                bgGradient="linear(104.4deg, #1CCFBD 1.7%, #2C9BF0 105.41%)"
                bgClip="text"
                transform="rotate(6deg)"
              >
                goals
              </Text>
            </Box>
            <Image src="/img/coin.svg" />
          </Flex>

          <Text>your turn</Text>
        </Flex>
        <Box>
          <Image src="/img/people-ring.svg" />
        </Box>
      </Flex>
    </SectionContainer>
  );
};
