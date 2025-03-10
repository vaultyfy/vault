import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Text,
  Image,
  Center,
  Stack,
} from "@chakra-ui/react";

const SuccessModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="rgba(0, 0, 0, 0.5)" />
      <ModalContent
        borderRadius="12px"
        px="1em"
        py="1.4em"
        textAlign="center"
        maxW="400px"
      >
        <Stack direction="column">
          <Center>
            <Image
              src="/img/check-crcle.svg"
              alt="Vaultyfy logo"
              height="77px"
              width="77px"
            />
          </Center>

          <Text
            fontSize="20px"
            color="var(--dark)"
            fontFamily="var(--clash-grotesk-500)"
          >
            Successful
          </Text>
        </Stack>

        <Stack direction="column" gap="1.2em">
          <ModalBody>
            <Text fontSize="16px" fontWeight={400} color="var(--dark)">
              We are reviewing your personal info, this may take up to 24hrs,
              kindly check your mailbox for updates.
            </Text>
          </ModalBody>

          <Center>
            <Button
              bg="#102634"
              color="white"
              borderRadius="36px"
              cursor={"pointer"}
              width="131px"
              _hover={{ bg: "#102634" }}
              _active={{ bg: "#102634" }}
              _focus={{ boxShadow: "none" }}
              onClick={onClose}
              fontWeight="400"
            >
              Got It
            </Button>
          </Center>
        </Stack>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;
