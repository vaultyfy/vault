import {
  Box,
  HStack,
  Skeleton,
  Stack,
  Flex
} from "@chakra-ui/react";
import { skeleton } from "@utils/misc";

export const GoalsSkeleton = () => {
  return (
    <Flex
      flexDirection="column"
      gap="1em"
      px={{ lg: "1.2em", base: ".6em", md: ".8em" }}
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <HStack
          key={index}
          justifyContent="space-between"
          pb={index === 2 ? "2em" : ""}
        >
          <Stack direction="column" gap="0.5em">
            <Skeleton
              width="100px"
              height="12px"
              borderRadius="6px"
              startColor={skeleton.light.startColor}
              endColor={skeleton.light.endColor}
            />
            <Skeleton
              width="88px"
              height="34px"
              borderRadius="30px"
              startColor={skeleton.light.startColor}
              endColor={skeleton.light.endColor}
            />
          </Stack>

          <HStack alignItems="center" gap="1em">
            <Stack direction="column" gap="0.5em" alignItems="flex-end">
              <Skeleton
                width="50px"
                height="14px"
                borderRadius="6px"
                startColor={skeleton.light.startColor}
                endColor={skeleton.light.endColor}
              />
              <Skeleton
                width="80px"
                height="18px"
                borderRadius="6px"
                startColor={skeleton.light.startColor}
                endColor={skeleton.light.endColor}
              />
            </Stack>

            <Skeleton
              width="35px"
              height="35px"
              borderRadius="10px"
              startColor={skeleton.light.startColor}
              endColor={skeleton.light.endColor}
            />
          </HStack>
        </HStack>
      ))}
    </Flex>
  );
};
