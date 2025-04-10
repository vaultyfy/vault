import { Box, Flex, Skeleton, Stack } from "@chakra-ui/react";
import { skeleton } from "@utils/misc";
import { GradientContainer } from "@components/ui";

export const LoanDetailsSkeleton = () => {
  return (
    <Flex
      width={{ base: "100%", lg: "1050px" }}
      height={{ base: "fit-content", md: "258px" }}
      padding="10px"
      gap="10px"
      flexWrap="wrap"
      fontFamily="var(--poppins)"
    >
      {/* Loan Summary Card Skeleton */}
      <GradientContainer>
        <Box
          width={{ base: "100%", lg: "463px" }}
          height={{ base: "fit-content", md: "238px" }}
          borderRadius="10px"
          p="1.15em"
          background="#ffffff"
        >
          <Flex
            height="full"
            width="full"
            gap="22px"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Stack
              alignItems="flex-start"
              gap="15px"
              flex="1"
              height="full"
              width="full"
            >
              <Skeleton
                height="24px"
                width="150px"
                startColor={skeleton.light.startColor}
                endColor={skeleton.light.endColor}
              />

              <Box width="full">
                <Skeleton
                  height="14px"
                  width="120px"
                  mb={2}
                  startColor={skeleton.light.startColor}
                  endColor={skeleton.light.endColor}
                />
                <Skeleton
                  height="32px"
                  width="100px"
                  startColor={skeleton.light.startColor}
                  endColor={skeleton.light.endColor}
                />
              </Box>

              <Box width="full">
                <Skeleton
                  height="14px"
                  width="140px"
                  mb={2}
                  startColor={skeleton.light.startColor}
                  endColor={skeleton.light.endColor}
                />
                <Skeleton
                  height="32px"
                  width="100px"
                  bgGradient="var(--main-gradient)"
                  startColor={skeleton.light.startColor}
                  endColor={skeleton.light.endColor}
                />
              </Box>
            </Stack>

            <Stack
              flex="1"
              alignItems="flex-start"
              justifyContent="space-between"
              height="full"
              width="full"
            >
              <Skeleton
                height="60px"
                width="full"
                startColor={skeleton.light.startColor}
                endColor={skeleton.light.endColor}
              />
              <Skeleton
                height="41px"
                width="112px"
                borderRadius="full"
                startColor={skeleton.light.startColor}
                endColor={skeleton.light.endColor}
              />
            </Stack>
          </Flex>
        </Box>
      </GradientContainer>

      {/* Pay Date Card Skeleton */}
      <GradientContainer>
        <Box
          width={{ base: "full", lg: "277px" }}
          height={{ base: "173px", lg: "238px" }}
          p="1.15em"
          borderRadius="10px"
          background="#ffffff"
        >
          <Stack
            height="full"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box width="full">
              <Skeleton
                height="14px"
                width="120px"
                mb={4}
                startColor={skeleton.light.startColor}
                endColor={skeleton.light.endColor}
              />
              <Flex width="full" alignItems="center" gap={4}>
                <Skeleton
                  height="44px"
                  width="50px"
                  bgGradient="var(--main-gradient)"
                  startColor={skeleton.light.startColor}
                  endColor={skeleton.light.endColor}
                />
                <Box>
                  <Skeleton
                    height="18px"
                    width="120px"
                    mb={1}
                    startColor={skeleton.light.startColor}
                    endColor={skeleton.light.endColor}
                  />
                  <Skeleton
                    height="14px"
                    width="80px"
                    startColor={skeleton.light.startColor}
                    endColor={skeleton.light.endColor}
                  />
                </Box>
              </Flex>
            </Box>
            <Skeleton
              height="41px"
              width="112px"
              borderRadius="full"
              startColor={skeleton.light.startColor}
              endColor={skeleton.light.endColor}
            />
          </Stack>
        </Box>
      </GradientContainer>

      {/* Loan Details Card Skeleton */}
      <GradientContainer>
        <Box
          width={{ base: "full", lg: "230px" }}
          height="238px"
          p="1.15em"
          borderRadius="10px"
          background="#ffffff"
        >
          <Stack
            height="full"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Stack spacing="11px" width="full">
              <Skeleton
                height="14px"
                width="100px"
                startColor={skeleton.light.startColor}
                endColor={skeleton.light.endColor}
              />
              <Box width="full">
                <Skeleton
                  height="14px"
                  width="80px"
                  mb={1}
                  startColor={skeleton.light.startColor}
                  endColor={skeleton.light.endColor}
                />
                <Skeleton
                  height="20px"
                  width="100px"
                  startColor={skeleton.light.startColor}
                  endColor={skeleton.light.endColor}
                />
              </Box>
              <Box width="full">
                <Skeleton
                  height="14px"
                  width="80px"
                  mb={1}
                  startColor={skeleton.light.startColor}
                  endColor={skeleton.light.endColor}
                />
                <Skeleton
                  height="20px"
                  width="100px"
                  startColor={skeleton.light.startColor}
                  endColor={skeleton.light.endColor}
                />
              </Box>
            </Stack>
            <Flex width="full" justifyContent="space-between">
              <Skeleton
                height="16px"
                width="80px"
                startColor={skeleton.light.startColor}
                endColor={skeleton.light.endColor}
              />
              <Skeleton
                height="18px"
                width="60px"
                startColor={skeleton.light.startColor}
                endColor={skeleton.light.endColor}
              />
            </Flex>
          </Stack>
        </Box>
      </GradientContainer>
    </Flex>
  );
};
