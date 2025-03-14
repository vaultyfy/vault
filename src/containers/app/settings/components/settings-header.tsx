import { HStack, IconButton, Text } from "@chakra-ui/react";
import { CaretLeft } from "@phosphor-icons/react";

interface SettingsHeaderProps {
  title: string;
  handleNavigation: () => void;
}

export const SettingsHeader = ({
  title,
  handleNavigation,
}: SettingsHeaderProps) => {
  return (
    <HStack
      spacing="2px"
      alignItems="center"
      mb={4}
      mt={{ base: "4px", md: "0" }}
    >
      <IconButton
        variant="ghost"
        display={{ base: "block", md: "none" }}
        _hover={{ bg: "transparent" }}
        boxSize="auto"
        aria-label="go back button"
        icon={<CaretLeft size={24} />}
        onClick={() => handleNavigation()}
      />
      <Text
        fontSize="24px"
        fontWeight={{ base: "500", md: "400" }}
        color="var(--dark)"
      >
        {title}
      </Text>
    </HStack>
  );
};
