import {
  Flex,
  VStack,
  HStack,
  Box,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import { skeleton } from "@utils/misc";

export const GroupCalendarSkeleton = () => (
  <>
    <Flex
      justifyContent="space-between"
      alignItems="center"
      px="1em"
      border="2px solid black"
      height="100%"
    >
      <SkeletonCircle
        size="32px"
        startColor={skeleton.light.startColor}
        endColor={skeleton.light.endColor}
      />

      <VStack spacing={2} flex={1} mx={4}>
        <Skeleton
          height="24px"
          width="180px"
          borderRadius="md"
          startColor={skeleton.light.startColor}
          endColor={skeleton.light.endColor}
        />
        <Skeleton
          height="20px"
          width="120px"
          borderRadius="full"
          startColor={skeleton.light.startColor}
          endColor={skeleton.light.endColor}
        />
      </VStack>

      <SkeletonCircle
        size="32px"
        startColor={skeleton.light.startColor}
        endColor={skeleton.light.endColor}
      />
    </Flex>

    <Flex columnGap={4} w="full" px="1em" mt="1.25rem">
      <Box flex="1">
        <Skeleton
          height="14px"
          width="60px"
          mb={2}
          startColor={skeleton.light.startColor}
          endColor={skeleton.light.endColor}
        />

        <HStack spacing={2} alignItems="flex-end">
          <Skeleton
            height="44px"
            width="50px"
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
        </HStack>
      </Box>

      <VStack justifyContent="space-between" pb={2} spacing={4}>
        <Skeleton
          height="20px"
          width="80px"
          alignSelf="flex-end"
          startColor={skeleton.light.startColor}
          endColor={skeleton.light.endColor}
        />

        <Skeleton
          height="40px"
          width="122px"
          borderRadius="3xl"
          startColor={skeleton.light.startColor}
          endColor={skeleton.light.endColor}
        />
      </VStack>
    </Flex>
  </>
);
