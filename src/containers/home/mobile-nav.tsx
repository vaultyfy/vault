import { Box, Flex, Image, List, ListItem } from "@chakra-ui/react";
import { MotionBox } from "@config/motion";
import { X } from "@phosphor-icons/react";

const NAV_ITEMS = ["Contact us", "FAQs", "features"].map((item) => ({
  name: item,
  id: crypto.randomUUID(),
  href: `#${item.replaceAll(" ", "-").toLowerCase()}`,
}));

export const MobileNav = ({
  isOpen,
  onClose,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  return (
    <MotionBox
      initial={{ height: 0, opacity: 0 }}
      animate={
        isOpen
          ? {
              height: "320px",
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
      alignItems="center"
      py="3em"
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
      <Image src="/img/logo.svg" mb="2rem" />
      <Flex flexDirection="column" gap="2rem" alignItems="center">
        {NAV_ITEMS.map((item) => (
          <List key={item.id} as="a" href={item.href}>
            <ListItem
              cursor="pointer"
              textTransform="capitalize"
              fontWeight="500"
              _hover={{
                cursor: "pointer",
              }}
              onClick={onClose}
            >
              {item.name}
            </ListItem>
          </List>
        ))}
      </Flex>
    </MotionBox>
  );
};
