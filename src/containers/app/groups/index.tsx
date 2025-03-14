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
  Center,
  Spinner,
} from "@chakra-ui/react";
import { MyGroupCard, PaymentCard, Calendar } from "@components/customer/ui";
import { Icon } from "@components/icon";
import { useMobileScreens } from "@hooks/mobile-screen";
import { useMyGroups } from "@hooks/swr";
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
  const { data, isLoading } = useMyGroups();

  return (
    <Flex
      as="section"
      width="100%"
      minHeight="100vh"
      gap={{ lg: "1em", md: "1em", base: "2em" }}
      flexWrap="wrap"
    >
      <Box width={{ base: "100%", md: "50%", lg: "50%" }}>
        <HStack
          spacing="10px"
          rounded="10px"
          width="100%"
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
            fontSize={{ base: "14px", lg: "14px", xl: "16px", md: "14px" }}
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
            <TabList
              gap={{ lg: ".6em", md: ".6em", base: ".4em" }}
              overflowX="auto"
            >
              {GROUPS_TAB_ITEMS.map((tab) => {
                return (
                  <Tab
                    _selected={{
                      background: "var(--grey-100)",
                    }}
                    _hover={{
                      background: "var(--grey-100)",
                    }}
                    transition="all .3s ease-in"
                    px="1.2em"
                    py=".8em"
                    fontSize={{ base: "12px", lg: "14px" }}
                    fontWeight="500"
                    whiteSpace="nowrap"
                    key={tab.id}
                  >
                    {tab.name}
                  </Tab>
                );
              })}
            </TabList>

            {isLoading ? (
              <Center height="450px">
                <Spinner size="sm" color="var(--grey)" />
              </Center>
            ) : (
              <TabPanels>
                <TabPanel px="0px" pt="1.4em">
                  <Stack direction="column" gap=".8em">
                    {data?.map((group, index) => {
                      return (
                        <MyGroupCard
                          key={group.id}
                          data={group}
                          bgColor={index === 0 ? "var(--card-bg-active)" : ""}
                          border={`0.5px solid ${index === 0 ? "var(--primary)" : "var(--border-muted)"}`}
                        />
                      );
                    })}
                  </Stack>
                </TabPanel>
              </TabPanels>
            )}
          </Tabs>
        </Box>
      </Box>

      <Box
        width={{ lg: "48%", xl: "35%", md: "45%", base: "100%" }}
        position="sticky"
        top="80px"
      >
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
          <PaymentCard deadlineDate="24-December-2025" dateType="Missed date" />
        </Box>
        <Box maxHeight="127px" width="full">
          <PaymentCard deadlineDate="24-December-2025" dateType="Missed date" />
        </Box>
      </Box>
    </Flex>
  );
};
