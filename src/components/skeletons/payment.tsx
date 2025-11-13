import { Box, Button, Flex, HStack, Skeleton, VStack } from "@chakra-ui/react";
import { skeleton } from "@utils/misc";

export const PaymentCardSkeleton = ({ count = 3 }) => {
  return (
    <>
      {Array.from({ length: count }, (__, index) => (
        <Flex
          key={index}
          px="19px"
          py="23px"
          border="0.5px solid var(--border-muted)"
          justifyContent="space-between"
          mb="0px"
          roundedBottom={index === count - 1 ? "10px" : ""}>
          <Box w="max-content">
            <Skeleton
              startColor={skeleton.light.startColor}
              endColor={skeleton.light.endColor}
              height="14px"
              width="70px"
              borderRadius="6px"
              mb="8px"
            />

            <HStack spacing="7px">
              <Skeleton
                startColor={skeleton.light.startColor}
                endColor={skeleton.light.endColor}
                height="55px"
                width="45px"
                borderRadius="6px"
              />

              <Flex flexDirection="column" alignContent="center">
                <Skeleton
                  startColor={skeleton.light.startColor}
                  endColor={skeleton.light.endColor}
                  height="16px"
                  width="120px"
                  borderRadius="6px"
                  mb="4px"
                />

                <Skeleton
                  startColor={skeleton.light.startColor}
                  endColor={skeleton.light.endColor}
                  height="14px"
                  width="80px"
                  borderRadius="6px"
                />
              </Flex>
            </HStack>
          </Box>

          <VStack justifyContent="center" alignItems="flex-end">
            {index % 2 === 0 && (
              <Skeleton
                startColor={skeleton.light.startColor}
                endColor={skeleton.light.endColor}
                height="18px"
                width="120px"
                borderRadius="8px"
                mb="12px"
              />
            )}

            <Skeleton
              startColor={skeleton.light.startColor}
              endColor={skeleton.light.endColor}
              height="52px"
              width={index % 2 === 0 ? "112px" : "145px"}
              borderRadius="full"
            />
          </VStack>
        </Flex>
      ))}
    </>
  );
};
