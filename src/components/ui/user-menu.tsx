import {
  Menu,
  MenuItem,
  MenuList,
  Avatar,
  MenuButton,
  Button,
  Text,
} from "@chakra-ui/react";
import { useAuthContext } from "@hooks/context";
import { useCurrentPath } from "@hooks/current-path";
import { useMobileScreens } from "@hooks/mobile-screen";
import { useUser } from "@hooks/swr";
import { Link } from "@tanstack/react-router";
import { dicebear } from "@utils/misc";
import { ChevronDown, UserRound } from "lucide-react";

export const UserMenu = () => {
  const currentPath = useCurrentPath();
  const { isSmallViewPort } = useMobileScreens();
  const { user, logout, isAuthenticated } = useAuthContext();

  return (
    <Menu autoSelect={false}>
      <MenuButton
        rightIcon={<ChevronDown color="var(--text-1)" />}
        width={{ lg: "96px", md: "90px", base: "84px" }}
        borderRadius="36px"
        as={Button}
        height={{ lg: "51px", base: "40px", md: "46px" }}
        border="1px solid var(--fade-border)"
        background="var(--white-fade)"
        _hover={{
          background: "var(--white-fade)",
        }}
        _active={{
          background: "var(--white-fade)",
        }}
      >
        <Avatar
          ml="-.4rem"
          boxSize={{ lg: "35px", md: "30px", base: "30px" }}
          bg="var(--main)"
          border="2px solid var(--primary)"
          src={`${dicebear}?seed=${user?.name?.split(" ")[0]}&flip=true`}
          icon={<UserRound size={isSmallViewPort ? "20px" : ""} />}
        />
      </MenuButton>

      <MenuList
        px=".4rem"
        background="var(--text-2)"
        display="flex"
        flexFlow="column"
        gap=".6rem"
      >
        {!user && !currentPath.includes("/dashboard") && (
          <Link to={isSmallViewPort ? "/auth" : "/auth/login"}>
            <MenuItem
              as={Button}
              background="var(--main)"
              borderRadius="30px"
              height="26px"
              color="#fff"
              textTransform="capitalize"
              _hover={{
                background: "var(--main)",
              }}
              fontWeight="normal"
              fontSize="12px"
            >
              login
            </MenuItem>
          </Link>
        )}

        {user && currentPath !== "/dashboard" && (
          <Link to="/dashboard">
            <MenuItem
              as={Button}
              background="#fff"
              borderRadius="30px"
              height="26px"
              textTransform="capitalize"
              _hover={{
                background: "#fff",
              }}
              fontWeight="normal"
              fontSize="12px"
            >
              <Text className="main-accent">dashboard</Text>
            </MenuItem>
          </Link>
        )}

        {isAuthenticated && (
          <MenuItem
            as={Button}
            background="#fff"
            borderRadius="30px"
            height="26px"
            textTransform="capitalize"
            _hover={{
              background: "#fff",
            }}
            fontWeight="normal"
            fontSize="12px"
            className="main-accent"
            onClick={logout}
          >
            Logout
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};
