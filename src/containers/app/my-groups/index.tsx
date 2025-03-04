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
} from "@chakra-ui/react";
import { MyGroupCard, PaymentCard, Calendar } from "@components/customer/ui";
import { Icon } from "@components/icon";
import { useMobileScreens } from "@hooks/mobile-screen";
import { ChevronDown } from "lucide-react";

export const Groups = () => {
  const { isMobile } = useMobileScreens();
  return (
    <Flex
      as="section"
      width="100%"
      minHeight="100vh"
      columnGap="1rem"
      border="2px solid black"
    >
      <Box
        width={{ base: "100%", lg: "fit-content" }}
        maxWidth="594px"
        border="2px solid black"
      >
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
            as="p"
            fontFamily="var(--poppins)"
            fontWeight="400"
            fontSize={{ base: "14px", lg: "16px" }}
            color="var(--text-4)"
          >
            Complete{" "}
            <Text as="span" fontWeight="600">
              three contribution cycles
            </Text>{" "}
            in your current group to unlock access to higher-value thrift groups
            and larger payouts
          </Text>
        </HStack>
        <Box width="full" my="10px">
          <Tabs
            variant="soft-rounded"
            colorScheme="gray"
            display={{ base: "none", md: "flex" }}
            columnGap="10px"
          >
            <TabList px="20px" py="10px" rounded="3xl" bgColor="#f6f6f6">
              <Text
                color="#040404"
                fontSize={{ base: "12px", lg: "14px" }}
                fontFamily={"var(--poppins)"}
                fontWeight={"500"}
              >
                All groups
              </Text>
            </TabList>
            <TabList px="20px" py="10px" rounded="10px">
              <Text
                color="#04040499"
                fontSize={{ base: "12px", lg: "14px" }}
                fontFamily={"var(--poppins)"}
                fontWeight={"500"}
              >
                Active groups
              </Text>
            </TabList>
            <TabList px="20px" py="10px" rounded="10px">
              <Text
                color="#04040499"
                fontSize={{ base: "12px", lg: "14px" }}
                fontFamily={"var(--poppins)"}
                fontWeight={"500"}
              >
                Completed groups
              </Text>
            </TabList>
          </Tabs>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDown color="var(--grey)" size={14} />}
              px="1.35rem"
              py="8px"
              rounded="3xl"
              fontSize={{ base: "12px", lg: "14px" }}
              fontFamily="var(--poppins)"
              fontWeight="400"
              color="#040404"
              bgColor="#f6f6f6"
              _hover="none"
              _focus="none"
              display={{ base: "block", md: "none" }}
            >
              All Groups
            </MenuButton>
            <MenuList px="10px" py="8px">
              <MenuItem fontSize={{ base: "12px", lg: "14px" }}>
                All Groups
              </MenuItem>
              <MenuItem fontSize={{ base: "12px", lg: "14px" }}>
                Active Groups
              </MenuItem>
              <MenuItem fontSize={{ base: "12px", lg: "14px" }}>
                Completed Groups
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <VStack spacing="6px">
          {Array.from({ length: 4 }).map((_, i) => (
            <Box key={i} minHeight="265px">
              <MyGroupCard />
            </Box>
          ))}
        </VStack>
      </Box>
      <VStack
        spacing="10px"
        width="40%"
        border="2px solid green"
        display={{ base: "none", lg: "flex" }}
      >
        <HStack justifyContent="flex-start" width="full">
          <Text
            fontFamily="var(--clash-grotesk-400)"
            fontWeight="400"
            fontSize="24px"
            color="var(--text-1)"
          >
            Unity savers
          </Text>
        </HStack>
        <VStack width="full" spacing="2px">
          <Box
            width="full"
            roundedTop="10px"
            p="1rem"
            border="0.5px solid #8181816B"
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
