import { Box, Divider, Flex, HStack, Skeleton, Stack } from "@chakra-ui/react";
import { skeleton } from "@utils/misc";

export const BankInfoSkeleton = () => {
  return (
    <Box
      p={4}
      width="100%"
      border="1px solid var(--outline)"
      borderRadius="8px"
    >
      <Flex justifySelf="flex-end" gap=".8em">
        {Array.from({ length: 2 }).map((_, index) => {
          return (
            <Skeleton
              key={index}
              startColor={skeleton.light.startColor}
              endColor={skeleton.light.endColor}
              height="18px"
              width="80px"
              borderRadius="6px"
            />
          );
        })}
      </Flex>

      <Box py={3} mt="1em">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <>
              <Stack direction="column" gap="1em" key={index}>
                <Skeleton
                  width="130px"
                  height="15px"
                  borderRadius="6px"
                  startColor={skeleton.light.startColor}
                  endColor={skeleton.light.endColor}
                />
                <Skeleton
                  width="190px"
                  height="15px"
                  borderRadius="6px"
                  startColor={skeleton.light.startColor}
                  endColor={skeleton.light.endColor}
                />
              </Stack>
              {index <= 1 && <Divider my={3} />}
            </>
          );
        })}
      </Box>
    </Box>
  );
};
