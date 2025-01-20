import {
  Menu,
  MenuItem,
  MenuList,
  Avatar,
  MenuButton,
  Button,
  Text,
} from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, UserRound } from "lucide-react";

export const UserMenu = () => {
  return (
    <Menu autoSelect={false}>
      <MenuButton
        rightIcon={<ChevronDown color="var(--text-1)" />}
        width="96px"
        borderRadius="36px"
        as={Button}
        height="51px"
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
          boxSize="35px"
          bg="var(--main)"
          border="2px solid var(--primary)"
          icon={<UserRound />}
        />
      </MenuButton>

      <MenuList
        px=".4rem"
        background="var(--text-2)"
        display="flex"
        flexFlow="column"
        gap=".6rem"
      >
        <Link to="/auth/login">
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

        {/* this shouldn't be visible when user is not auth'd  */}
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
      </MenuList>
    </Menu>
  );
};
