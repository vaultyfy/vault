import { Box, Text } from "@chakra-ui/react";
import { Icon } from "@components/icon";
import { Setting } from "..";

interface SettingsCardProps extends Omit<Setting, "id" | "component"> {
  isActive: boolean;
  onClick: (str: string) => void;
}

export const SettingCard = ({
  onClick,
  isActive,
  title,
  iconName,
  description,
}: SettingsCardProps) => {
  return (
    <Box width="100%" px={{ base: "1rem", lg: "1rem" }}>
      <Box width="500px"
        flex="1"
        border="1px solid #dceefb"
        borderRadius="8px"
        p={6}
        cursor="pointer"
        bg={isActive ? "#F0FAFC" : "transparent"}
        onClick={() => {
          onClick("Payments Payout");
        }}
      >
        <Icon name={iconName} />
        <Text
          textTransform="capitalize"
          fontSize="18px"
          fontWeight="500"
          color={"#222222"}
          mb={2}
        >
          {title}
        </Text>
        <Text fontSize="14px" fontWeight={400} color="#717171">
          {description}
        </Text>
      </Box>
    </Box>
  );
};
