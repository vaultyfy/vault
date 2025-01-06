import {
  Box,
  Text,
  Image,
  HStack,
  List,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import { SectionContainer, UserMenu } from "@components/ui";
import { MotionBox } from "@config/motion";
import { Hero } from "@containers/home/hero";
import { useDomContentLoaded } from "@hooks/index";

const NAV_ITEMS = ["features", "FAQs", "Contact us"].map((item) => ({
  name: item,
  id: crypto.randomUUID(),
  href: `#${item.replaceAll(" ", "-").toLowerCase()}`,
}));

export const Header = () => {
  const { contentLoaded } = useDomContentLoaded();

  return (
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
                  <List key={item.id}>
                    <ListItem textTransform="capitalize" fontWeight="500">
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
