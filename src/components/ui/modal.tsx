import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Text,
  ChakraProps,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { XCircle } from "@phosphor-icons/react";

interface ModalLayoutProps extends ChakraProps {
  title?: string;
  subTitle?: string;
  children: React.ReactNode;
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "full";
  onClose: () => void;
  isOpen: boolean;
  radius?: string;
  focusRef?: any;
  px?: string;
  py?: string;
  closeBtnSize?: string;
  noCloseButton?: boolean;
  background?: string;
  noRadius?: boolean;
  autoClose?: boolean;
}

export const ModalLayout = ({
  size,
  px,
  py = "0",
  title,
  onClose,
  isOpen,
  children,
  subTitle,
  radius,
  focusRef,
  closeBtnSize,
  background,
  noCloseButton,
  noRadius,
  autoClose = true,
}: ModalLayoutProps) => {
  return (
    <Modal
      finalFocusRef={focusRef}
      isOpen={isOpen}
      onClose={onClose}
      size={{
        base: "sm",
        md: size || "md",
        lg: size || "3xl",
        "2xl": size || "4xl",
      }}
      isCentered
      closeOnOverlayClick={autoClose}
    >
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
      <ModalContent
        background={background || "#fff"}
        borderRadius={noRadius ? "none" : radius || "16px"}
        py={noCloseButton ? "0em" : py}
        height="fit-content"
        px={px || "1.4em"}
      >
        {!title ? null : (
          <ModalHeader
            color="var(--modal-title)"
            fontWeight="500"
            fontFamily={"var(--clash-grotesk-500)"}
            fontSize="20px"
            lineHeight="20px"
            textTransform="capitalize"
            px={noCloseButton ? ".4em" : ".8em"}
          >
            {title}
            <Text
              as="span"
              display="block"
              fontWeight="400"
              fontSize="12px"
              lineHeight="15px"
              colorScheme="(--gray-3)"
              fontFamily="var(--urbanist)"
            >
              {subTitle}
            </Text>
          </ModalHeader>
        )}
        {noCloseButton ? null : (
          <ModalCloseButton
            color="var(--alt-gray-two)"
            size={closeBtnSize || "lg"}
          />
        )}
        <ModalBody px={noCloseButton ? ".4em" : ".8em"}>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};
