import { Box, Flex, Image, List, ListItem } from "@chakra-ui/react";
import { MotionBox } from "@config/motion";
import { useMobileScreens } from "@hooks/mobile-screen";
import { X } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";

const NAV_ITEMS = ["Contact us", "FAQs", "features"].map((item) => ({
  name: item,
  id: crypto.randomUUID(),
  href: `#${item.replaceAll(" ", "-").toLowerCase()}`,
}));

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const { isSmallViewPort } = useMobileScreens();

  return (
    <MotionBox
      initial={{ height: 0, opacity: 0 }}
      animate={
        isOpen
          ? {
              height: "280px",
              opacity: 1,
              transition: {
                ease: "easeOut",
                duration: 0.4,
                type: "spring",
                bounce: 0.4,
              },
            }
          : { height: 0, opacity: 0 }
      }
      style={{
        overflow: "hidden",
        position: "absolute",
        top: "70px",
        left: 0,
        right: 0,
        zIndex: 10,
      }}
      width="100%"
      display="flex"
      flexDirection="column"
      py="1.4em"
      background="var(--white-fade)"
    >
      <Box
        _hover={{
          cursor: "pointer",
        }}
        boxSize="38px"
        borderRadius="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        border="1px solid var(--main)"
        onClick={onClose}
        mb="1rem"
        position="absolute"
        left="6"
        top="4"
      >
        <X color="var(--main)" size="18" />
      </Box>
      <List>
        <Flex flexDirection="column" gap=".8rem" mt="1em" width="80%" mx="auto">
          {NAV_ITEMS.map((item) => (
            <ListItem
              as="a"
              key={item.id}
              href={item.href}
              textAlign="center"
              height="45px"
              alignItems="center"
              display="flex"
              justifyContent="center"
              borderBottom="1px solid var(--border-muted)"
              cursor="pointer"
              textTransform="capitalize"
              fontWeight="400"
              fontSize="14px"
              color="var(--dark)"
              _hover={{
                cursor: "pointer",
              }}
              onClick={onClose}
            >
              {item.name}
            </ListItem>
          ))}

          <Link to={isSmallViewPort ? "/auth" : "/auth/login"} preload="intent">
            <ListItem
              height="45px"
              alignItems="center"
              display="flex"
              justifyContent="center"
              textAlign="center"
              mt=".2em"
              cursor="pointer"
              textTransform="capitalize"
              fontWeight="400"
              fontSize="14px"
              color="var(--dark)"
              _hover={{
                cursor: "pointer",
              }}
            >
              login
            </ListItem>
          </Link>
        </Flex>
      </List>
    </MotionBox>
  );
};
