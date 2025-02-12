import {
  Badge,
  Box,
  Center,
  Flex,
  Image,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { GradientIcon } from "@components/icon";
import { Gear, SealCheck } from "@phosphor-icons/react";
import { MAIN_GRADIENT } from "@utils/constants";
import { Icon } from "@components/icon";
import { Link, useLocation } from "@tanstack/react-router";
import { FileRouteTypes } from "src/routeTree.gen";
import { useCurrentPath } from "@hooks/current-path";
import { DonutProgress } from "@components/ui";

export type SidenavItems = {
  id: string;
  icon: React.ReactElement;
  name: string;
  path: FileRouteTypes["fullPaths"];
};

const SIDEBAR_NAV_ITEMS: SidenavItems[] = [
  {
    id: crypto.randomUUID(),
    icon: <Icon name="dashboard" />,
    name: "overview",
    path: "/dashboard",
  },
  {
    id: crypto.randomUUID(),
    icon: <Icon name="payouts" />,
    name: "payments",
    path: "/dashboard/payments",
  },
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
    icon: <Gear size="24" color="#fff" />,
    name: "settings",
    path: "/dashboard/settings",
  },
];

export const Sidebar = () => {
  const pathname = useCurrentPath();

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      height="100vh"
      background="var(--main)"
      width={{ "2xl": "13%", xl: "13%", lg: "20%" }}
      minW="256px"
      display={{ base: "none", lg: "block" }}
      overflowY="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "var(--white-fade-8)",
          borderRadius: "24px",
        },
      }}
    >
      <Center mt="1em">
        <Image src="/img/logo-light.svg" alt="Logo" />
      </Center>

      <Center flexFlow="column" my="1.2em" gap=".6em">
        <Flex flexFlow="column">
          <DonutProgress
            percentage={100}
            avatarSrc="/img/user-default-avatar.svg"
            thickness="3px"
            size="150px"
            avatarSize="79px"
          />
          <Text
            textAlign="center"
            fontSize="16px"
            color="var(--grey)"
            fontWeight="400"
            lineHeight="24px"
          >
            Danielking
          </Text>
        </Flex>

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
          <Text
            fontFamily="var(--clash-grotesk-600)"
            fontSize="22px"
            lineHeight="27px"
            bgGradient={MAIN_GRADIENT}
            bgClip="text"
          >
            N500,700
          </Text>
        </Flex>

        <Flex gap=".8em" flexFlow="column" mt="2em" width="100%" px=".8em">
          {SIDEBAR_NAV_ITEMS.map((item) => (
            <List key={item.id}>
              <Link to={item.path}>
                <ListItem
                  listStyleType="none"
                  display="flex"
                  alignItems="center"
                  px="1.4em"
                  height="54px"
                  borderRadius="8px"
                  gap={{ "2xl": "1.4em", xl: "1em", lg: "1em" }}
                  textTransform="capitalize"
                  color="#fff"
                  background={
                    pathname === item.path ? "var(--white-fade-8)" : ""
                  }
                  transition="all .3s ease-out"
                  _hover={{
                    cursor: "pointer",
                    background: "var(--white-fade-8)",
                  }}
                >
                  {item.icon}
                  <Text
                    fontSize="16px"
                    fontWeight={pathname === item.path ? "500" : "400"}
                    lineHeight="19px"
                    whiteSpace="nowrap"
                  >
                    {item.name}
                  </Text>
                </ListItem>
              </Link>
            </List>
          ))}
        </Flex>
      </Center>
    </Box>
  );
};
