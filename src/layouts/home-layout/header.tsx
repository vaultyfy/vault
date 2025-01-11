import {
  Box,
  Text,
  Image,
  HStack,
  List,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import { Icon } from "@components/icon";
import { SectionContainer, UserMenu } from "@components/ui";
import { MotionBox } from "@config/motion";
import { Hero } from "@containers/home/hero";
import { MobileNav } from "@containers/home/mobile-nav";
import { useDomContentLoaded } from "@hooks/index";
import React from "react";
import { AnimatePresence } from "motion/react";

const NAV_ITEMS = ["features", "FAQs", "Contact us"].map((item) => ({
  name: item,
  id: crypto.randomUUID(),
  href: `#${item.replaceAll(" ", "-").toLowerCase()}`,
}));

export const Header = () => {
  const { contentLoaded } = useDomContentLoaded();
  const [isMenuOpen, openMenu] = React.useState<boolean>(false);

  return (
    <>
      <Box className="hero">
        <MotionBox
          className="grid"
          initial={{ scale: 1 }}
          animate={
            contentLoaded
              ? { scale: 1.8, transition: { duration: 0.6 } }
              : { scale: 1 }
          }
        />

        <SectionContainer>
          <Box
            height="70px"
            py=".2rem"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={{ lg: "2rem", md: "0" }}
          >
            <HStack
              position="relative"
              gap={{ lg: "2rem", md: "1rem", base: "1rem" }}
              alignItems="center"
              zIndex="2"
            >
              <Box
                onClick={() => {
                  console.log("Menu icon clicked");
                  console.log("state", isMenuOpen);
                  openMenu(true);
                }}
                _hover={{ cursor: "pointer" }}
                display={{ lg: "none", md: "none", base: "block" }}
              >
                <Icon name="menu" />
              </Box>

              <Image
                src="/img/logo.svg"
                alt="vultifier logo"
                height={{ "2xl": "", xl: "", lg: "38px", base: "35px" }}
              />
              <Flex
                display={{ base: "none", md: "flex", lg: "flex" }}
                justifyContent="space-between"
                alignItems="center"
                gap="2rem"
              >
                {NAV_ITEMS.map((item) => {
                  return (
                    <List key={item.id} as="a" href={item.href}>
                      <ListItem
                        cursor="pointer"
                        textTransform="capitalize"
                        fontWeight="500"
                        _hover={{
                          cursor: "pointer",
                        }}
                      >
                        {item.name}
                      </ListItem>
                    </List>
                  );
                })}
              </Flex>
            </HStack>

            <UserMenu />
          </Box>

          <Hero />
        </SectionContainer>
      </Box>

      <MobileNav isOpen={isMenuOpen} onClose={() => openMenu(false)} />
    </>
  );
};
