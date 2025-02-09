import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  //   onOpen: () => void;
  onClose: () => void;
}
export const NotificationPopover: React.FC<Props> = ({
  isOpen,
  onClose,
  //   onOpen,
}) => {
  return (
    <>
      <Popover
        isOpen={isOpen}
        // onOpen={onOpen}
        onClose={onClose}
        placement="bottom"
      >
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            This is the popover content.
            <Button onClick={onClose} colorScheme="red" size="sm" mt={2}>
              Close Popover
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};
