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
      <ModalContent borderRadius="12px" p={6} textAlign="center" maxW="350px">
        <Center>
          <Image
            src="/img/check-crcle.svg"
            alt="Vaultyfy logo"
            height="77px"
            width="77px"
          />
        </Center>

        <ModalHeader fontSize="20px" fontWeight="bold" color="#1C1C1C">
          Successful
        </ModalHeader>

        <ModalBody>
          <Text fontSize="16px" fontWeight={400} color="#1C1C1C">
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
          >
            Got It
          </Button>
        </Center>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;
