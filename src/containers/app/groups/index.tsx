import {
  Box,
  Flex,
  Text,
  HStack,
  Image,
  Tabs,
  TabList,
  VStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tab,
  TabPanels,
  TabPanel,
  Stack,
} from "@chakra-ui/react";
import { MyGroupCard, PaymentCard, Calendar } from "@components/customer/ui";
import { Icon } from "@components/icon";
import { useMobileScreens } from "@hooks/mobile-screen";
import { ChevronDown } from "lucide-react";
import slugify from "slugify";

export const GROUPS_TAB_ITEMS = [
  "All groups",
  "Active groups",
  "Completed groups",
].map((tab) => ({
  name: tab,
  id: crypto.randomUUID(),
  slug: slugify(tab),
}));

export const Groups = () => {
  const { isMobile } = useMobileScreens();

  return (
    <Flex as="section" width="100%" minHeight="100vh" columnGap="1rem">
      <Box width={{ base: "100%", lg: "fit-content" }} maxWidth="594px">
        <HStack
          spacing="10px"
          rounded="10px"
          width="100%"
          maxWidth="594px"
          p="10px"
          bgGradient="var(--main-gradient)"
          maxHeight="99px"
        >
          <Image
            src="/img/piggy-bank-up.svg"
            alt="piggy bank up icon"
            boxSize="70px"
          />
          <Text
            fontWeight="400"
            fontSize={{ base: "14px", lg: "16px" }}
            color="var(--white-fade)"
          >
            Complete{" "}
            <Text as="span" fontWeight="600">
              three contribution cycles
            </Text>{" "}
            in your current group to unlock access to higher-value thrift groups
            and larger payouts
          </Text>
        </HStack>

        <Box width="full" mt="1em">
          <Tabs variant="soft-rounded">
            <TabList gap=".6em">
              {GROUPS_TAB_ITEMS.map((tab) => {
                return (
                  <Tab
                    _selected={{
                      background: "var(--grey-100)",
                    }}
                    _hover={{
                      background: "var(--grey-100)"
                    }}
                    transition="all .3s ease-in"
                    px="1.2em"
                    py=".8em"
                    fontSize={{ base: "12px", lg: "14px" }}
                    fontWeight="500"
                  >
                    {tab.name}
                  </Tab>
                );
              })}
            </TabList>

            <TabPanels>
              <TabPanel px="0px" pt="1.4em">
                <Stack direction="column" gap=".8em">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <MyGroupCard
                      bgColor={i === 0 ? "var(--card-bg-active)" : ""}
                      border={`0.5px solid ${i === 0 ? "var(--primary)" : "var(--border-muted)"}`}
                    />
                  ))}
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDown color="var(--grey)" size={14} />}
              px="1.35rem"
              py="8px"
              rounded={"3xl"}
              fontSize={{ base: "12px", lg: "14px" }}
              fontWeight="400"
              color="#040404"
              background="var(--grey-100)"
              display={{ base: "block", md: "none" }}
            >
              All Groups
            </MenuButton>
            <MenuList px="10px" py="8px">
              <MenuItem>All Groups</MenuItem>
              <MenuItem>Active Groups</MenuItem>
              <MenuItem>Completed Groups</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>

      <VStack spacing="10px" width="40%">
        <VStack width="full" spacing="2px" position="sticky" top="80px">
          <HStack justifyContent="flex-start" width="full">
            {isMobile && <Icon name="arrow-left" />}
            <Text
              fontFamily="var(--clash-grotesk-400)"
              fontWeight={{ base: "500", lg: "400" }}
              fontSize={{ base: "20px", lg: "24px" }}
              color="var(--text-1)"
            >
              Unity savers
            </Text>
          </HStack>
          <Box
            width="full"
            roundedTop="10px"
            p="1rem"
            border="0.5px solid var(--border-muted)"
          >
            <Calendar />
          </Box>
          <Box maxHeight="127px" width="full">
            <PaymentCard
              deadlineDate="23-December-2025"
              dateType="Start date"
              amount={200000}
              isActive
            />
          </Box>
          <Box maxHeight="127px" width="full">
            <PaymentCard
              deadlineDate="24-December-2025"
              dateType="Missed date"
            />
          </Box>
          <Box maxHeight="127px" width="full">
            <PaymentCard
              deadlineDate="24-December-2025"
              dateType="Missed date"
            />
          </Box>
        </VStack>
      </VStack>
    </Flex>
  );
};
