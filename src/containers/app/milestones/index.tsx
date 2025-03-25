import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CircleProgress } from "@components/ui";
import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "@tanstack/react-router";

export const Milestones = () => {
  const navigate = useNavigate();
  return (
    <Stack
      direction="column"
      gap=".8em"
      mt={{ lg: "-1em", base: "1em" }}
      width={{ xl: "45%", lg: "55%", md: "66%", base: "100%" }}
    >
      <HStack gap=".1em">
        <Box
          onClick={() => navigate({ to: ".." })}
          _hover={{ cursor: "pointer" }}
        >
          <CaretLeft size="18" />
        </Box>
        <Text
          fontWeight="400"
          color="var(--dark)"
          textTransform="capitalize"
          fontFamily="var(--clash-grotesk-400)"
          fontSize={{ base: "16px", xl: "24px", lg: "20px" }}
        >
          milestones & rewards
        </Text>
      </HStack>
      <Box
        border="0.5px solid var(--border-muted)"
        borderRadius="10px"
        height="fit-content"
        py="1em"
        px="1.2em"
      >
        <Stack direction="column" gap="1em">
          <Flex
            pb="3em"
            pt="1em"
            gap="1em"
            borderBottom="0.5px solid var(--border-muted)"
          >
            <Box>
              <CircleProgress
                progress={73}
                strokeWidth={8.5}
                imgSize="90%"
                size={100}
                gradient={"#59b0fC,#5f77d4"}
                imageUrl="/img/award-blue.svg"
                isMilestoneProgress
              />
            </Box>

            <Box display="flex" flexDirection="column" gap=".8em">
              <HStack justifyContent="space-between">
                <Text
                  fontWeight="500"
                  color="var(--dark)"
                  textTransform="capitalize"
                  fontSize={{ lg: "20px", md: "18px", base: "18px" }}
                >
                  consistency
                </Text>
                <Badge
                  color="#fff"
                  fontWeight="400"
                  fontSize="12px"
                  height="25px"
                  width="118px"
                  borderRadius="17px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  textTransform="none"
                  background="var(--overview-card-secondary)"
                >
                  2/3 completed
                </Badge>
              </HStack>

              <Text
                fontSize="16px"
                color="#2a2a2a"
                fontWeight="300"
                lineHeight={{ lg: "30px", md: "30px", base: "25px" }}
              >
                Complete{" "}
                <Text as="span" fontWeight="500">
                  3
                </Text>{" "}
                full saving cycle & save{" "}
                <Text as="span" fontWeight="500">
                  N20,000
                </Text>{" "}
                Charges on your next Pay-out
              </Text>
            </Box>
          </Flex>

          <Flex
            pb="3em"
            pt="1em"
            gap="1em"
            borderBottom="0.5px solid var(--border-muted)"
          >
            <Box>
              <CircleProgress
                progress={73}
                strokeWidth={8.5}
                imgSize="90%"
                size={100}
                gradient={"#59b0fC,#5f77d4"}
                imageUrl="/img/award-purple.svg"
                isMilestoneProgress
              />
            </Box>

            <Box display="flex" flexDirection="column" gap=".8em">
              <HStack justifyContent="space-between">
                <Text
                  fontWeight="500"
                  color="var(--dark)"
                  textTransform="capitalize"
                  fontSize={{ lg: "20px", md: "18px", base: "18px" }}
                >
                  referrals
                </Text>
                <Badge
                  color="#fff"
                  fontWeight="400"
                  fontSize="12px"
                  height="25px"
                  width="118px"
                  borderRadius="17px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  textTransform="none"
                  background="var(--overview-card-secondary)"
                >
                  1/11 completed
                </Badge>
              </HStack>

              <Text
                fontSize="16px"
                color="#2a2a2a"
                fontWeight="300"
                lineHeight={{ lg: "30px", md: "30px", base: "25px" }}
              >
                Share a thrift group with 10 friends, and enjoy zero charges on
                your next pay-outs when they join!
              </Text>
            </Box>
          </Flex>

          <Flex pb="3em" pt="1em" gap="1em">
            <Box>
              <CircleProgress
                progress={4}
                strokeWidth={8.5}
                imgSize="90%"
                size={100}
                gradient={"#59b0fC,#5f77d4"}
                imageUrl="/img/award-green.svg"
                isMilestoneProgress
              />
            </Box>

            <Box display="flex" flexDirection="column" gap=".8em" width="100%">
              <HStack justifyContent="space-between" >
                <Text
                  fontWeight="500"
                  color="var(--dark)"
                  fontSize={{ lg: "20px", md: "18px", base: "18px" }}
                >
                  My goals
                </Text>
                <Button
                  color="#fff"
                  fontWeight="400"
                  height="38px"
                  width="122px"
                  fontSize="14px"
                  borderRadius="36px"
                  background="var(--main-gradient)"
                >
                  Set goals
                </Button>
              </HStack>

              <Text
                fontSize="16px"
                color="#2a2a2a"
                fontWeight="300"
                lineHeight={{ lg: "30px", md: "30px", base: "25px" }}
              >
                Set a goal for the month, year or week
              </Text>
            </Box>
          </Flex>
        </Stack>
      </Box>
    </Stack>
  );
};
