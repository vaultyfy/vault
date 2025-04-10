import {
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Skeleton,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { skeleton } from "@utils/misc";

export const GroupCardSkeleton = ({ total = 3 }: { total?: number }) => {
  return (
    <>
      {Array.from({ length: total }, (__, index) => {
        return (
          <Box
            key={index}
            width="full"
            height="full"
            maxWidth="100%"
            rounded="10px"
            position="relative"
            cursor="pointer"
            border="1px solid var(--outline)"
            boxShadow="none"
            mb="10px"
          >
            <Box px=".6em" py="23px" w="full">
              <Stack direction="column" gap=".8em">
                <Flex width="full" height="143px">
                  <Box flex={1} px="8px">
                    <Skeleton
                      startColor={skeleton.light.startColor}
                      endColor={skeleton.light.endColor}
                      height="15px"
                      width="220px"
                      borderRadius="8px"
                      mb="8px"
                    />

                    <HStack spacing="3px" mt="2px">
                      <Skeleton
                        startColor={skeleton.light.startColor}
                        endColor={skeleton.light.endColor}
                        height="24px"
                        width="120px"
                        borderRadius="full"
                      />
                      <Skeleton
                        startColor={skeleton.light.startColor}
                        endColor={skeleton.light.endColor}
                        height="24px"
                        width="40px"
                        borderRadius="full"
                      />
                    </HStack>

                    <Box w="full" mt="28px" display="flex">
                      {Array.from({ length: 3 }, (__, index) => {
                        return (
                          <Skeleton
                            key={index}
                            startColor={skeleton.light.startColor}
                            endColor={skeleton.light.endColor}
                            height="32px"
                            width="32px"
                            borderRadius="full"
                            ml={index > 0 ? "-8px" : ""}
                          />
                        );
                      })}
                    </Box>
                  </Box>

                  <VStack spacing="28px" alignItems="flex-end" flex={1}>
                    <Box w="fit-content">
                      <Skeleton
                        startColor={skeleton.light.startColor}
                        endColor={skeleton.light.endColor}
                        height="14px"
                        width="60px"
                        borderRadius="6px"
                        mb="8px"
                        justifySelf="flex-end"
                      />
                      <Skeleton
                        startColor={skeleton.light.startColor}
                        endColor={skeleton.light.endColor}
                        height="18px"
                        width="100px"
                        borderRadius="6px"
                      />
                    </Box>

                    <Box w="fit-content">
                      <Skeleton
                        startColor={skeleton.light.startColor}
                        endColor={skeleton.light.endColor}
                        height="14px"
                        width="60px"
                        borderRadius="8px"
                        mb="8px"
                        justifySelf="flex-end"
                      />
                      <Skeleton
                        startColor={skeleton.light.startColor}
                        endColor={skeleton.light.endColor}
                        height="18px"
                        width="80px"
                        borderRadius="6px"
                      />
                    </Box>
                  </VStack>
                </Flex>

                <Stack direction="column" gap=".2em">
                  {Array.from({ length: 3 }, (__, index: number) => {
                    return (
                      <Skeleton
                        key={index}
                        startColor={skeleton.light.startColor}
                        endColor={skeleton.light.endColor}
                        height="12px"
                        width={
                          index === 0 ? "90%" : index === 1 ? "78%" : "60%"
                        }
                        borderRadius="6px"
                        mt="8px"
                      />
                    );
                  })}
                </Stack>
              </Stack>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export const ExploreCardSkeleton = ({ count = 4 }) => {
  return (
    <>
      {Array.from({ length: count }, (__, index) => (
        <Card
          key={index}
          width="100%"
          height="255px"
          rounded="xl"
          minW={{ base: "364px", xl: "435px" }}
          bgColor="#fff"
        >
          <CardBody py="23px" px="19px">
            <Flex w="full" h="full">
              {/* Left column */}
              <Flex
                flex={1}
                flexDirection="column"
                px="8px"
                h="full"
                rowGap="15px"
                justifyContent="space-between"
              >
                {/* Group name area */}
                <Box w="full">
                  <Skeleton
                    startColor={skeleton.light.startColor}
                    endColor={skeleton.light.endColor}
                    height="20px"
                    width="180px"
                    borderRadius="6px"
                    mb="8px"
                  />
                  <HStack spacing="3px" mt="2px">
                    <Skeleton
                      startColor={skeleton.light.startColor}
                      endColor={skeleton.light.endColor}
                      height="25px"
                      width="120px"
                      borderRadius="18px"
                    />
                  </HStack>
                </Box>

                {/* Members/Avatars area */}
                <Box w="full">
                  <Flex>
                    {Array.from({ length: 3 }, (_, i) => (
                      <Skeleton
                        key={i}
                        startColor={skeleton.light.startColor}
                        endColor={skeleton.light.endColor}
                        height="32px"
                        width="32px"
                        borderRadius="full"
                        ml={i > 0 ? "-8px" : "0"}
                      />
                    ))}
                  </Flex>
                </Box>

                {/* Start date area */}
                <Box w="full">
                  <Skeleton
                    startColor={skeleton.light.startColor}
                    endColor={skeleton.light.endColor}
                    height="14px"
                    width="70px"
                    borderRadius="6px"
                    mb="8px"
                  />
                  <Skeleton
                    startColor={skeleton.light.startColor}
                    endColor={skeleton.light.endColor}
                    height="18px"
                    width="100px"
                    borderRadius="6px"
                  />
                </Box>
              </Flex>

              {/* Right column */}
              <Flex
                flexDirection="column"
                alignItems="flex-end"
                flex={1}
                w="full"
                h="full"
                rowGap={{ lg: "15px", base: "22px" }}
              >
                <Flex
                  flexDirection="column"
                  h="full"
                  justifyContent="space-between"
                  w="full"
                  flex={2}
                  py="2px"
                  alignItems="flex-end"
                >
                  {/* Share button */}
                  <Skeleton
                    startColor={skeleton.light.startColor}
                    endColor={skeleton.light.endColor}
                    height="24px"
                    width="66px"
                    borderRadius="full"
                  />

                  <Box w="fit-content">
                    <Skeleton
                      startColor={skeleton.light.startColor}
                      endColor={skeleton.light.endColor}
                      height="14px"
                      width="60px"
                      borderRadius="6px"
                      mb="8px"
                      justifySelf="flex-end"
                    />
                    <Skeleton
                      startColor={skeleton.light.startColor}
                      endColor={skeleton.light.endColor}
                      height="22px"
                      width="120px"
                      borderRadius="6px"
                    />
                  </Box>
                </Flex>

                <Skeleton
                  startColor={skeleton.light.startColor}
                  endColor={skeleton.light.endColor}
                  height="52px"
                  width="111px"
                  borderRadius="full"
                />
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      ))}
    </>
  );
};
