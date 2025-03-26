import {
  Flex,
  Text,
  Button,
  HStack,
  useDisclosure,
  Skeleton,
  Box,
  Image,
  List,
  Center,
  Badge,
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
import { dicebear, skeleton } from "@utils/misc";
import { useConsolePath } from "@hooks/current-path";
import { CircleProgress, UserMenu } from "@components/ui";
import { MotionBox, MotionListItem } from "@config/motion";
import React from "react";
import { SIDEBAR_NAV_ITEMS, SidenavItems } from "./sidebar";
import { Link } from "@tanstack/react-router";
import { PlusCircle, SealCheck, X } from "@phosphor-icons/react";
import { GradientIcon, Icon } from "@components/icon";
import { useAuthContext } from "@hooks/context";
import { MAIN_GRADIENT, randomBg } from "@utils/constants";

const MOBILE_FOOT_NAV_ITEMS: SidenavItems[] = [
  {
    id: crypto.randomUUID(),
    name: "notification",
    path: "/",
    icon: <Icon name="bell-light" />,
  },
  {
    id: crypto.randomUUID(),
    name: "calendar",
    path: "/",
    icon: <Icon name="calendar-light" />,
  },
  {
    id: crypto.randomUUID(),
    name: "create group",
    path: "/dashboard/create-group",
    icon: <PlusCircle size="24" strokeWidth="1.5px" color="#fff" />,
  },
];

export const AppHeader = ({
  routeTitle,
}: Pick<AppLayoutProps, "routeTitle">) => {
  const { logout } = useAuthContext();
  const { isMobile } = useMobileScreens();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { updateUiStore } = useUiComponentStore();
  const pathname = useCurrentPath();
  const {
    userName,
    isLoading,
    hasUserCompletedKyc,
    kycPercentage,
    walletBalance,
  } = useUser();
  const adminPathname = useConsolePath();
  const [isMobileSideNavOpen, setIsMobileSideNavOpen] =
    React.useState<boolean>(false);

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
        background="var(--vista-white)"
      >
        <HStack gap="1.4em">
          <Box
            transform="scale(1) rotate(-180deg)"
            onClick={() => setIsMobileSideNavOpen(true)}
            _hover={{ cursor: "pointer" }}
          >
            <AlignRight size="30" color="var(--grey)" />
          </Box>
          <Image src="/img/logo.svg" boxSize="96px" />
        </HStack>
        <UserMenu />
      </Flex>

      <MotionBox
        initial={{ width: "0", display: "none" }}
        height="100vh"
        position="absolute"
        top="0"
        left="0"
        zIndex="10000"
        px="1em"
        py="1em"
        background="var(--main)"
        animate={
          isMobileSideNavOpen
            ? {
                width: isMobile ? "67%" : "36%",
                x: 0,
                opacity: 1,
                display: "block",
              }
            : { x: -20, opacity: 0, display: "none" }
        }
      >
        <Box
          position="absolute"
          top="4"
          left="3"
          rounded="full"
          border="1px solid #fff"
          height="36px"
          width="36px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={() => setIsMobileSideNavOpen(false)}
          _hover={{ cursor: "pointer" }}
        >
          <X size="20" color="#fff" />
        </Box>
        <Center>
          <Image src="/img/logo-light.svg" height="35px" />
        </Center>

        <Center flexFlow="column" mt="1em" gap=".6em">
          <Flex flexFlow="column" gap=".6em">
            {isLoading ? (
              <Skeleton
                height="120px"
                width="120px"
                border="1px solid red"
                startColor={skeleton.startColor}
                endColor={skeleton.endColor}
                borderRadius="100%"
              />
            ) : (
              <CircleProgress
                progress={kycPercentage}
                size={150}
                strokeWidth={5}
                imageUrl={`${dicebear}?seed=${userName}&size=48&flip=true&backgroundColor=${randomBg}`}
              />
            )}
            {!isLoading ? (
              <Text
                textAlign="center"
                fontSize="16px"
                color="var(--grey)"
                fontWeight="400"
                lineHeight="24px"
              >
                {userName || "Danielking"}
              </Text>
            ) : (
              <Center>
                <Skeleton
                  startColor={skeleton.startColor}
                  endColor={skeleton.endColor}
                  height="14px"
                  width="70%"
                  borderRadius="6px"
                />
              </Center>
            )}
          </Flex>

          {hasUserCompletedKyc ? (
            <Badge
              background="var(--white-fade-8)"
              display="flex"
              justifyContent="center"
              gap=".6em"
              height="37px"
              width="158px"
              borderRadius="30px"
              alignItems="center"
            >
              <GradientIcon
                weight="fill"
                startColor="#2C9BF0"
                endColor="#1CCFBD"
                IconComponent={SealCheck}
                size="18"
              />
              <Text
                textTransform="capitalize"
                fontSize="14px"
                fontWeight="400"
                bgClip="text"
                bgGradient={MAIN_GRADIENT}
              >
                verified
              </Text>
            </Badge>
          ) : null}
          {!hasUserCompletedKyc && (
            <Link to="/dashboard/settings">
              <Badge
                background="var(--white-fade-8)"
                display="flex"
                justifyContent="center"
                gap=".6em"
                height="37px"
                width="158px"
                borderRadius="30px"
                alignItems="center"
              >
                <Text
                  textTransform="capitalize"
                  fontSize="14px"
                  fontWeight="400"
                  bgClip="text"
                  bgGradient={MAIN_GRADIENT}
                >
                  Complete profile
                </Text>
              </Badge>
            </Link>
          )}
          {kycPercentage !== 100 && (
            <Box width="80%" border="0.2px solid var(--border-muted)" />
          )}
          <Flex flexFlow="column" gap=".1em">
            <Text
              textAlign="center"
              fontSize="10px"
              textTransform="capitalize"
              bgClip="text"
              bgGradient={MAIN_GRADIENT}
            >
              Wallet balance
            </Text>
            {isLoading ? (
              <Skeleton
                startColor={skeleton.startColor}
                endColor={skeleton.endColor}
                height="20px"
                width="100%"
                borderRadius="8px"
              />
            ) : (
              <Text
                fontFamily="var(--clash-grotesk-600)"
                fontSize="22px"
                lineHeight="27px"
                bgGradient={MAIN_GRADIENT}
                bgClip="text"
              >
                {walletBalance}
              </Text>
            )}
          </Flex>
        </Center>

        <Flex
          gap=".2em"
          flexFlow="column"
          mt="1.5em"
          width="100%"
          borderBottom="1px solid var(--border-muted)"
          pb=".2em"
        >
          {SIDEBAR_NAV_ITEMS.map((item, index) => (
            <List key={item.id}>
              <Link to={item.path}>
                <MotionListItem
                  listStyleType="none"
                  display="flex"
                  alignItems="center"
                  px={{ "2xl": "1.4em", xl: "1em", lg: "1em", base: "1em" }}
                  height="54px"
                  borderRadius="8px"
                  gap="1em"
                  textTransform="capitalize"
                  color="#fff"
                  background={
                    pathname === item.path ? "var(--white-fade-8)" : ""
                  }
                  _hover={{
                    cursor: "pointer",
                    background: "var(--white-fade-8)",
                  }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={
                    isMobileSideNavOpen
                      ? { x: 0, opacity: 1, transition: { delay: index * 0.1 } }
                      : { x: -20, opacity: 0 }
                  }
                >
                  {item.icon}
                  <Text
                    fontSize="16px"
                    fontWeight={pathname === item.path ? "400" : "300"}
                    lineHeight="19px"
                    whiteSpace="nowrap"
                  >
                    {item.name}
                  </Text>
                </MotionListItem>
              </Link>
            </List>
          ))}
        </Flex>

        <Flex
          gap=".2em"
          flexFlow="column"
          mt=".8em"
          width="100%"
          pb=".2em"
        >
          {MOBILE_FOOT_NAV_ITEMS.map((item, index) => (
            <List key={item.id}>
              <Link to={item.path}>
                <MotionListItem
                  listStyleType="none"
                  display="flex"
                  alignItems="center"
                  px="1em"
                  height="54px"
                  borderRadius="8px"
                  gap=".6em"
                  textTransform="capitalize"
                  color="#fff"
                  background={
                    pathname === item.path ? "var(--white-fade-8)" : ""
                  }
                  _hover={{
                    cursor: "pointer",
                    background: "var(--white-fade-8)",
                  }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={
                    isMobileSideNavOpen
                      ? { x: 0, opacity: 1, transition: { delay: index * 0.1 } }
                      : { x: -20, opacity: 0 }
                  }
                >
                  {item.icon}
                  <Text
                    fontSize="16px"
                    fontWeight={pathname === item.path ? "400" : "300"}
                    lineHeight="19px"
                    whiteSpace="nowrap"
                  >
                    {item.name}
                  </Text>
                </MotionListItem>
              </Link>
            </List>
          ))}
        </Flex>

        <HStack
          position="absolute"
          bottom="4"
          onClick={logout}
          _hover={{ cursor: "pointer" }}
          px="1em"
        >
          <Icon name="logout" />
          <Text color="var(--grey)" fontWeight="300" fontSize="16px">
            Log out
          </Text>
        </HStack>
      </MotionBox>

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
        px={{ base: ".6em", "2xl": "2em", xl: "1em", lg: ".8em" }}
        display={{
          lg: "flex",
          md: pathname === "/dashboard/milestones" ? "none" : "flex",
          base: pathname === "/dashboard/milestones" ? "none" : "flex",
        }}
      >
        <HStack gap=".4em">
          <Text
            as="h2"
            fontWeight="500"
            fontSize={{ base: "22px", lg: "32px" }}
          >
            {routeTitle}
          </Text>
          {["/dashboard", "/dashboard/milestones"].includes(pathname) && (
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
