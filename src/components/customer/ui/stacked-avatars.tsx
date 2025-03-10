import { Flex, Image, Box, Text } from "@chakra-ui/react";

interface StackedAvatarsProps {
  images: string[] | undefined;
  maxVisible?: number;
}

export const StackedAvatars = ({
  images,
  maxVisible = 3,
}: StackedAvatarsProps) => {
  const visibleImages = images?.slice(0, maxVisible);
  const remainingCount = images && images?.length - maxVisible;

  return (
    <Flex>
      {visibleImages?.map((src, index) => (
        <Image
          key={index}
          src={src}
          boxSize="35px"
          rounded="full"
          shadow="sm"
          objectFit="cover"
          border="2px solid white"
          ml={index === 0 ? "0" : "-12px"}
        />
      ))}

      {remainingCount && remainingCount > 0 && (
        <Box
          boxSize="38px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="var(--text-2)"
          color="white"
          rounded="full"
          fontSize="14px"
          fontWeight="bold"
          border="2px solid var(--grey)"
          ml="-12px"
        >
          <Text
            as="span"
            fontWeight="400"
            color="var(--grey)"
            fontSize="14px"
          >
            {remainingCount}/{images.length}
          </Text>
        </Box>
      )}
    </Flex>
  );
};
