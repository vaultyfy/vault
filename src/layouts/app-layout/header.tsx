import {
  Flex,
  Text,
  Button,
  Box,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import { CalendarPopover, NotificationPopover } from "@components/customer/ui";
import { CirclePlus } from "lucide-react";
import { AppLayoutProps } from ".";
import { CreateGroupModal } from "@layouts/modal-layout/create-group";
import { useMobileScreens } from "@hooks/mobile-screen";
import { useNavigate } from "@tanstack/react-router";
import { useUiComponentStore } from "@store/ui";

export const AppHeader = ({
  routeTitle,
}: Pick<AppLayoutProps, "routeTitle">) => {
  const { isMobile } = useMobileScreens();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { updateUiStore } = useUiComponentStore();

  const createGroup = () => {
    updateUiStore({ ui: "create-group" });

    if (isMobile) {
      navigate({ to: "/dashboard/create-group" });
    } else {
      onOpen();
    }
  };

  const closeModal = () => {
    updateUiStore({ ui: "" });
    onClose();
  };

  return (
    <>
      <Flex
        position="sticky"
        top="0"
        height="75px"
        mt={{ lg: "2em", md: "0em", base: "0em" }}
        justifyContent="space-between"
        alignItems="center"
        transition="all .3s ease-out"
        zIndex="10"
        backdropFilter="blur(10px)"
        px={{ base: "1em", "2xl": "2em", xl: "1em", lg: ".8em" }}
      >
        <Text as="h2" fontSize={{ base: "24px", lg: "32px" }}>
          {routeTitle}
        </Text>
        <Flex
          columnGap="1rem"
          alignItems="center"
          display={{ base: "none", lg: "flex" }}
        >
          <Button
            background="var(--btn-secondary-7)"
            width="180px"
            height="52px"
            px="9px"
            py="13px"
            leftIcon={<CirclePlus color="var(--main)" size="20" />}
            fontWeight="400"
            fontSize="14px"
            borderRadius="36px"
            lineHeight="21px"
            _hover={{
              background: "var(--btn-secondary-7)",
            }}
            onClick={createGroup}
          >
            Create group
          </Button>
          <HStack columnGap="1rem">
            <CalendarPopover />
            <NotificationPopover />
          </HStack>
        </Flex>
      </Flex>

      <CreateGroupModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};
