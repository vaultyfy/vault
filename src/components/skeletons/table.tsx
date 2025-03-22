import { Flex, Skeleton, Td, Tr } from "@chakra-ui/react";
import { skeleton } from "@utils/misc";

export const ActivitiesTableSkeleton = ({ rowCount = 5 }) => {
  return (
    <>
      {Array.from({ length: rowCount }, (__, index) => (
        <Tr key={index}>
          <Td height="80px">
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
          </Td>

          <Td textAlign="center">
            <Skeleton
              startColor={skeleton.light.startColor}
              endColor={skeleton.light.endColor}
              height="18px"
              width="140px"
              borderRadius="6px"
              mx="auto"
            />
          </Td>

          <Td textAlign="center">
            <Skeleton
              startColor={skeleton.light.startColor}
              endColor={skeleton.light.endColor}
              height="18px"
              width="30px"
              borderRadius="6px"
              mx="auto"
            />
          </Td>

          <Td textAlign="center">
            <Skeleton
              startColor={skeleton.light.startColor}
              endColor={skeleton.light.endColor}
              height="18px"
              width="60px"
              borderRadius="6px"
              mx="auto"
            />
          </Td>

          <Td>
            <Skeleton
              startColor={skeleton.light.startColor}
              endColor={skeleton.light.endColor}
              height="30px"
              width="104px"
              borderRadius="full"
            />
          </Td>
        </Tr>
      ))}
    </>
  );
};
