import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@components/icon";
import { Setting } from "..";

interface SettingsCardProps extends Omit<Setting, "component" | "slug"> {
  isActive: boolean;
  onClick: (id: string) => void;
}

export const SettingCard = ({
  id,
  onClick,
  isActive,
  title,
  iconName,
  description,
}: SettingsCardProps) => {
  return (
    <Flex
      direction="column"
      py="2em"
      width="100%"
      gap="1em"
      px={{ base: "1rem", lg: "1rem" }}
      border="1px solid #dceefb"
      borderRadius="8px"
      cursor="pointer"
      bg={
        isActive
          ? {
              lg: "var(--card-bg-active)",
              md: "var(--card-bg-active)",
              base: "transparent",
            }
          : "transparent"
      }
      onClick={() => onClick(id)}
    >
      <Icon name={iconName} />
      <Stack direction="column" gap="0">
        <Text
          textTransform="capitalize"
          fontSize="18px"
          fontWeight="500"
          color={"#222222"}
        >
          {title}
        </Text>
        <Text fontSize="14px" fontWeight={400} color="#717171">
          {description}
        </Text>
      </Stack>
    </Flex>
  );
};
