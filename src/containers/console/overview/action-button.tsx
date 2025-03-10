import { Button, VStack, Box, HStack, Text } from "@chakra-ui/react";
import { useCurrentPath } from "@hooks/current-path";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

export const ActionButton = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  const pathname = useCurrentPath();

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
      {isOpen &&
        (pathname.includes("users") ? (
          <VStack
            width="172px"
            height="180px"
            padding="11px 9px"
            gap="6px"
            justifyContent={"space-between"}
            alignItems={"center"}
            position={"absolute"}
            top="20px"
            right={"0px"}
            backgroundColor={"var(--text-2)"}
            borderRadius={"5px"}
            shadow="md"
            zIndex={"90"}
          >
            <Button
              width="154px"
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
              _hover={{ background: "white" }}
            >
              Action
            </Button>

            <Button
              width="154px"
              height="26px"
              padding="6px 48px"
              borderRadius={"30px"}
              fontSize={"14px"}
              fontWeight={"normal"}
              lineHeight={"21px"}
              color="var(--pending-text)"
              background={"var(--pending-bg)"}
              onClick={onClick}
              _hover={{ background: "var(--pending-bg)" }}
            >
              Suspend Account
            </Button>

            <Button
              width="154px"
              height="26px"
              padding="6px 48px"
              borderRadius={"30px"}
              fontSize={"14px"}
              fontWeight={"normal"}
              lineHeight={"21px"}
              color="var(--delay-text)"
              background="var(--delay-bg)"
              _hover={{ background: "var(--delay-bg)" }}
              onClick={onClick}
            >
              Block account
            </Button>
            <Button
              width="154px"
              height="26px"
              padding="6px 48px"
              borderRadius={"30px"}
              fontSize={"14px"}
              fontWeight={"normal"}
              lineHeight={"21px"}
              color="var(--pay-green)"
              background={"var(--pay-green-bg)"}
              onClick={onClick}
              _hover={{ background: "var(--pay-green-bg)" }}
            >
              Approve
            </Button>
            <Link to="/console/users/user-details">
              <Button
                width="154px"
                height="26px"
                padding="6px 48px"
                borderRadius={"30px"}
                fontSize={"14px"}
                fontWeight={"normal"}
                border="0.5px solid #8181816B"
                lineHeight={"21px"}
                color="var(--grey)"
                background={"white"}
                _hover={{ background: "white" }}
              >
                View
              </Button>
            </Link>
          </VStack>
        ) : (
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
              _hover={{ background: "white" }}
            >
              Action
            </Button>

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
              _hover={{ background: "var(--pay-green-bg)" }}
            >
              Pay
            </Button>

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
              _hover={{ background: "var(--delay-bg)" }}
              onClick={onClick}
            >
              Delay
            </Button>
          </VStack>
        ))}
    </Box>
  );
};
