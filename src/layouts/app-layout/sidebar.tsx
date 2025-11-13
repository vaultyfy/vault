import {
  Badge,
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { GradientIcon } from "@components/icon";
import { Gear, SealCheck } from "@phosphor-icons/react";
import { MAIN_GRADIENT, randomBg } from "@utils/constants";
import { Icon } from "@components/icon";
import { Link } from "@tanstack/react-router";
import { FileRouteTypes } from "src/routeTree.gen";
import { useConsolePath, useCurrentPath } from "@hooks/current-path";
import { CircleProgress } from "@components/ui";
import { useUser, useWallet } from "@hooks/swr";
import { dicebear, formatPrice, skeleton } from "@utils/misc";
import { useAuthContext } from "@hooks/context";

export type SidenavItems = {
  id: string;
  icon: React.ReactElement;
  name: string;
  path: FileRouteTypes["fullPaths"];
};

export const SIDEBAR_NAV_ITEMS: SidenavItems[] = [
  {
    id: crypto.randomUUID(),
    icon: <Icon name="dashboard" />,
    name: "overview",
    path: "/dashboard",
  },
  // {
  //   id: crypto.randomUUID(),
  //   icon: <Icon name="payouts" />,
  //   name: "payments",
  //   path: "/dashboard/payments",
  // },
  {
    id: crypto.randomUUID(),
    icon: <Icon name="profile-2user" />,
    name: "my groups",
    path: "/dashboard/groups",
  },
  {
    id: crypto.randomUUID(),
    icon: <Icon name="global-search" />,
    name: "explore",
    path: "/dashboard/explore",
  },
  {
    id: crypto.randomUUID(),
    icon: <Icon name="payouts" />,
    name: "loan me",
    path: "/dashboard/loan-me",
  },
  {
    id: crypto.randomUUID(),
    icon: <Gear size="24" color="#fff" />,
    name: "settings",
    path: "/dashboard/settings",
  },
];

const consoleNavBase = [
  { iconBaseName: "dash-dark", name: "overview", path: "/console" },
  {
    iconBaseName: "profile",
    name: "Thrift group mgmt",
    path: "/console/group-mgmt",
  },
  {
    iconBaseName: "search",
    name: "payment monitoring",
    path: "/console/payment-monitoring",
  },
  {
    iconBaseName: "money-send",
    name: "Loan Mgmt",
    path: "/console/loan-mgmt",
  },
  {
    iconBaseName: "info",
    name: "Rules & enforcement",
    path: "/console/rules",
  },
  { iconBaseName: "user", name: "Users", path: "/console/users" },
];

export const Sidebar = () => {
  const pathname = useCurrentPath();
  const { logout } = useAuthContext();
  const isConsoleRoute = useConsolePath();
  const CONSOLE_NAV_ITEMS: SidenavItems[] = consoleNavBase.map((item) => ({
    id: crypto.randomUUID(),
    icon: (
      <Icon
        type="console"
        name={
          pathname === item.path
            ? `${item.iconBaseName}-active`
            : item.iconBaseName
        }
      />
    ),
    name: item.name,
    path: item.path as FileRouteTypes["fullPaths"],
  }));

  const { userName, hasUserCompletedKyc, kycPercentage, verified, isLoading } =
    useUser();

  const { walletBalance } = useWallet();

  return (
    <Box
      height="100vh"
      background={isConsoleRoute ? "" : "var(--main)"}
      width={{
        "2xl": isConsoleRoute ? "15%" : "13%",
        xl: isConsoleRoute ? "fit-content" : "13%",
        lg: "20%",
      }}
      borderRight={isConsoleRoute ? "2px solid var(--dark-6)" : ""}
      display={{ lg: "block", md: "none", base: "none" }}>
      <Link to="/">
        <Center mt="1em">
          <Image
            height="30px"
            width="112px"
            src={`/img/${isConsoleRoute ? "logo" : "logo-light"}.svg`}
          />
        </Center>
      </Link>

      {isConsoleRoute ? (
        <Flex gap=".8em" flexFlow="column" mt="2em" width="100%" pr="1.4em">
          {CONSOLE_NAV_ITEMS.map((item) => {
            return (
              <List key={item.id}>
                <Link to={item.path}>
                  <ListItem
                    listStyleType="none"
                    display="flex"
                    alignItems="center"
                    px="1.4em"
                    height="54px"
                    borderTopEndRadius="8px"
                    borderBottomEndRadius="8px"
                    gap={{ "2xl": "1.4em", xl: "1em", lg: "1em" }}
                    textTransform="capitalize"
                    color={pathname == item.path ? "#fff" : "var(--dark)"}
                    background={pathname === item.path ? "var(--main)" : ""}
                    transition="all .2s ease-out"
                    _hover={{
                      cursor: "pointer",
                      color: "#fff",
                      background: "var(--main)",
                      "& svg": {
                        filter: "brightness(2)",
                      },
                    }}>
                    {item.icon}
                    <Text
                      lineHeight="19px"
                      whiteSpace="nowrap"
                      fontSize="14px"
                      fontWeight={pathname === item.path ? "500" : "400"}>
                      {item.name}
                    </Text>
                  </ListItem>
                </Link>
              </List>
            );
          })}
        </Flex>
      ) : (
        <Center flexFlow="column" my="1.2em" gap=".6em">
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
                lineHeight="24px">
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
              alignItems="center">
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
                bgGradient={MAIN_GRADIENT}>
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
                alignItems="center">
                <Text
                  textTransform="capitalize"
                  fontSize="14px"
                  fontWeight="400"
                  bgClip="text"
                  bgGradient={MAIN_GRADIENT}>
                  Complete profile
                </Text>
              </Badge>
            </Link>
          )}
          {!verified && (
            <Box width="80%" border="0.2px solid var(--border-muted)" />
          )}
          <Flex flexFlow="column" gap=".1em">
            <Text
              textAlign="center"
              fontSize="10px"
              textTransform="capitalize"
              bgClip="text"
              bgGradient={MAIN_GRADIENT}>
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
                bgClip="text">
                {formatPrice(walletBalance || 0)}
              </Text>
            )}
          </Flex>

          <Flex gap=".8em" flexFlow="column" mt="2em" width="100%" px=".8em">
            {SIDEBAR_NAV_ITEMS.map((item) => (
              <List key={item.id}>
                <Link to={item.path}>
                  <ListItem
                    listStyleType="none"
                    display="flex"
                    alignItems="center"
                    px={{ "2xl": "1.4em", xl: "1em", lg: "1em" }}
                    height="54px"
                    borderRadius="8px"
                    gap={{ "2xl": "1.4em", xl: ".6em", lg: "1em" }}
                    textTransform="capitalize"
                    color="#fff"
                    background={
                      pathname === item.path ? "var(--white-fade-8)" : ""
                    }
                    transition="all .3s ease-out"
                    _hover={{
                      cursor: "pointer",
                      background: "var(--white-fade-8)",
                    }}>
                    {item.icon}
                    <Text
                      fontSize="16px"
                      fontWeight={pathname === item.path ? "500" : "400"}
                      lineHeight="19px"
                      whiteSpace="nowrap">
                      {item.name}
                    </Text>
                  </ListItem>
                </Link>
              </List>
            ))}

            <HStack
              mt="4em"
              _hover={{ cursor: "pointer" }}
              onClick={logout}
              px={{ "2xl": "1.4em", xl: "1em", lg: "1em" }}>
              <Icon name="logout" />
              <Text color="var(--grey)" fontWeight="400" fontSize="16px">
                Log out
              </Text>
            </HStack>
          </Flex>
        </Center>
      )}
    </Box>
  );
};
