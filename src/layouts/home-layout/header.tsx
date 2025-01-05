import {
  Box,
  Text,
  Image,
  HStack,
  List,
  ListItem,
  Flex,
  Menu,
  MenuItem,
  MenuButton,
  Avatar,
  Button,
  MenuList,
} from "@chakra-ui/react";
import { SectionContainer, UserMenu } from "@components/ui";
import { MotionBox } from "@config/motion";
import { Hero } from "@containers/home/hero";

const NAV_ITEMS = ["features", "FAQs", "Contact us"].map((item) => ({
  name: item,
  id: crypto.randomUUID(),
  href: `#${item.replaceAll(" ", "-").toLowerCase()}`,
}));

export const Header = () => {
  return (
    <Box className="hero">
      <MotionBox
        className="grid"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.8, opacity: 1, transition: { duration: 0.4 } }}
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
          <HStack gap="2rem">
            <Image src="/img/logo.svg" alt="vultifier logo" />

            <Flex
              display={{ base: "none", lg: "flex" }}
              justifyContent="space-between"
              alignItems="center"
              gap="2rem"
            >
              {NAV_ITEMS.map((item) => {
                return (
                  <List>
                    <ListItem
                      textTransform="capitalize"
                      fontWeight="500"
                      key={item.id}
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
  );
};
