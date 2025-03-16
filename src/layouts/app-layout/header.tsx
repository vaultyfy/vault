import {
  Flex,
  Text,
  Button,
  HStack,
  useDisclosure,
  Skeleton,
  Box,
  Image,
} from "@chakra-ui/react";
import { CalendarPopover, NotificationPopover } from "@components/customer/ui";
import { AlignRight, CirclePlus } from "lucide-react";
import { AppLayoutProps } from ".";
import { CreateGroupModal } from "@layouts/modal-layout";
import { useMobileScreens } from "@hooks/mobile-screen";
import { useNavigate } from "@tanstack/react-router";
import { useUiComponentStore } from "@store/ui";
import { useCurrentPath } from "@hooks/current-path";
import { useUser } from "@hooks/swr";
import { skeleton } from "@utils/misc";
import { useConsolePath } from "@hooks/current-path";
import { UserMenu } from "@components/ui";

export const AppHeader = ({
  routeTitle,
}: Pick<AppLayoutProps, "routeTitle">) => {
  const { isMobile } = useMobileScreens();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { updateUiStore } = useUiComponentStore();
  const pathname = useCurrentPath();
  const { userName, isLoading } = useUser();
  const adminPathname = useConsolePath();

  const createGroup = () => {
    if (isMobile) {
      navigate({ to: "/dashboard/create-group" });
      onClose();
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
        display={{ base: "flex", lg: "none" }}
        height="65px"
        width="100%"
        px="1em"
        alignItems="center"
        boxShadow="var(--table-shadow)"
        position="sticky"
        top="0"
        zIndex="400"
        justifyContent="space-between"
        background="var(--mobile-header-bg)"
      >
        <HStack gap="1.4em">
          <Box transform="scale(1) rotate(-180deg)">
            <AlignRight size="30" color="var(--grey)" />
          </Box>
          <Image src="/img/logo.svg" boxSize="96px" />
        </HStack>
        <UserMenu />
      </Flex>
      <Flex
        position={{ lg: "sticky", md: "static", base: "static" }}
        top="0"
        height="75px"
        mt={{ lg: "2em", md: "0em", base: "0em" }}
        justifyContent="space-between"
        alignItems="center"
        transition="all .3s ease-out"
        zIndex={{ lg: "10", md: "1", base: "-10" }}
        backdropFilter="blur(10px)"
        px={{ base: "1em", "2xl": "2em", xl: "1em", lg: ".8em" }}
      >
        <HStack gap=".4em">
          <Text
            as="h2"
            fontSize={{ base: "24px", lg: "32px" }}
            fontWeight="500"
          >
            {routeTitle}
          </Text>
          {pathname === "/dashboard" && (
            <>
              {isLoading ? (
                <Skeleton
                  height="28px"
                  width="170px"
                  borderRadius="10px"
                  startColor={skeleton.light.startColor}
                  endColor={skeleton.light.endColor}
                />
              ) : (
                <Text
                  as="h2"
                  fontSize={{ base: "24px", lg: "32px" }}
                  bgGradient="var(--main-gradient)"
                  bgClip="text"
                  fontFamily="var(--clash-grotesk-600)"
                >
                  {userName}
                </Text>
              )}
            </>
          )}
        </HStack>
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
            display={adminPathname ? "none" : "flex"}
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
