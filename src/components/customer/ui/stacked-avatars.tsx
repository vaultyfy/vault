import { Avatar, AvatarGroup, Flex, Box, Text } from "@chakra-ui/react";

interface StackedAvatarsProps {
  images: string[] | undefined;
  maxVisible?: number;
}

export const StackedAvatars = ({
  images,
  maxVisible = 3,
}: StackedAvatarsProps) => {
  if (!images || images.length === 0) return null;

  const visibleImages = images.slice(0, maxVisible);
  const remainingCount = images.length - maxVisible;

  return (
    <Flex alignItems="center">
      <AvatarGroup
        spacing="-12px"
        max={maxVisible}
      >
        {visibleImages.map((src, index) => (
          <Avatar
            key={index}
            src={src}
            border="2px solid white"
            boxShadow="sm"
            boxSize="38px"
          />
        ))}
      </AvatarGroup>

      {remainingCount > 0 && (
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
