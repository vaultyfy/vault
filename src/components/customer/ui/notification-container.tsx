import { Box, Text, IconButton } from "@chakra-ui/react";
import { Check } from "lucide-react";

type NotificationContainerProps = {
  children: React.ReactNode;
  time: string;
  isUnread?: boolean;
  onMarkAsRead?: () => void;
};

export const NotificationContainer = ({
  children,
  time,
  isUnread = false,
  onMarkAsRead,
}: NotificationContainerProps) => {
  return (
    <Box
      w="full"
      p={4}
      borderRadius="8px"
      border="1px solid #EAEAEA"
      position="relative"
      bg="white"
      opacity={!isUnread ? 0.7 : 1}
      _hover={{
        "& .notification-read-button": {
          opacity: !isUnread ? 0 : 0.8,
        },
      }}
      transition="all 0.2s"
    >
      {isUnread && (
        <IconButton
          aria-label="Mark as read"
          icon={<Check size={14} />}
          size="xs"
          position="absolute"
          top="8px"
          right="8px"
          opacity={0}
          className="notification-read-button"
          variant="ghost"
          color="gray.400"
          _hover={{ color: "gray.600", bg: "gray.50" }}
          onClick={onMarkAsRead}
        />
      )}
      {children}
      <Text
        fontSize="12px"
        fontWeight={600}
        color="#B4B4B4"
        display="block"
        textAlign="right"
        mt={2}
      >
        {time}
      </Text>
    </Box>
  );
};
