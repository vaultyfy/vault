import { Button, VStack, Box, HStack, Text } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const ActionButton = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <Box width={"100%"}>
      <Button
        width="full"
        height="33px"
        padding="6px 48px"
        borderRadius={"30px"}
        fontSize={"14px"}
        fontWeight={"normal"}
        border="0.5px solid #8181816B"
        lineHeight={"21px"}
        color="var(--grey)"
        background={"transparent"}
        display={isOpen ? "none" : "flex"}
        _hover={{
          background: "transparent",
        }}
        gap="10px"
        onClick={onClick}
      >
        Action{" "}
        <Text>
          <ChevronDown width={20} height={20} color="var(--text-1)" />
        </Text>
      </Button>
      {isOpen && (
        <VStack
          width="107px"
          height="112px"
          padding="11px 9px"
          gap="6px"
          justifyContent={"space-between"}
          alignItems={"center"}
          position={"absolute"}
          top="20px"
          backgroundColor={"var(--text-2)"}
          borderRadius={"5px"}
          shadow="md"
          zIndex={"90"}
        >
          <Button
            width="89px"
            height="26px"
            padding="6px 48px"
            borderRadius={"30px"}
            fontSize={"14px"}
            fontWeight={"normal"}
            border="0.5px solid #8181816B"
            lineHeight={"21px"}
            color="var(--grey)"
            background={"white"}
            onClick={onClick}
            _hover={{
              background: "transparent",
            }}
          >
            Action
          </Button>{" "}
          <Button
            width="89px"
            height="26px"
            padding="6px 48px"
            borderRadius={"30px"}
            fontSize={"14px"}
            fontWeight={"normal"}
            lineHeight={"21px"}
            color="var(--pay-green)"
            background={"var(--pay-green-bg)"}
            onClick={onClick}
            _hover={{
              background: "var(--pay-green-bg)",
            }}
          >
            Pay
          </Button>{" "}
          <Button
            width="89px"
            height="26px"
            padding="6px 48px"
            borderRadius={"30px"}
            fontSize={"14px"}
            fontWeight={"normal"}
            lineHeight={"21px"}
            color="var(--delay-text)"
            background="var(--delay-bg)"
            _hover={{
              background: "transparent",
            }}
            onClick={onClick}
          >
            Delay
          </Button>{" "}
        </VStack>
      )}
    </Box>
  );
};
