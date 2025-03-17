import {
  Box,
  Flex,
  HStack,
  Skeleton,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { skeleton } from "@utils/misc";
import React from "react";

export const GroupCardSkeleton = () => {
  return (
    <>
      {Array.from({ length: 3 }, (__, index) => {
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
