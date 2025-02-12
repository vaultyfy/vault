import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  Box,
  Tabs,
  TabList,
  Tab,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Bell } from "lucide-react";
import { NotificationContainer } from "./notification-container";

export const NotificationPopover = () => {
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button
          bgGradient="var(--main-gradient-lighten)"
          boxSize={"50px"}
          rounded="full"
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          _hover={{ bgColor: "var(--button-secondary)" }}
          _focus={{ bgColor: "var(--button-secondary)" }}
        >
          <Box boxSize="27px" position={"relative"}>
            <Bell color="#292d32" size="27" />
            <Box
              boxSize={"8px"}
              bgColor={"var(--deep-blood)"}
              rounded={"full"}
              position={"absolute"}
              top="0"
              right="0"
            />
          </Box>
        </Button>
      </PopoverTrigger>

      <PopoverContent maxW="552px" w="450px" minH="400px" maxH="550px">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Notifications</PopoverHeader>
        <PopoverBody px="14px" py="32px">
          <Box
            w="full"
            maxH="450px"
            overflowY="auto"
            css={{
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#a0aec0",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
              },
            }}
          >
            {/* Tabs for Filtering Notifications */}
            <Tabs
              variant="soft-rounded"
              colorScheme="gray"
              display={{ base: "none", md: "flex" }}
              columnGap="0.3rem"
            >
              <TabList
                px="20px"
                py="10px"
                rounded="3xl"
                // bgColor={"#f6f6f6"}
                cursor={"pointer"}
              >
                <Tab>All Contribution</Tab>
                <Tab>Active</Tab>
                <Tab>Ended</Tab>
              </TabList>
            </Tabs>

            {/* Notification Sections */}
            {["Today", "Yesterday"].map((day) => (
              <Box key={day} w="full" mt="1rem">
                <Text
                  fontFamily="Poppins"
                  fontSize="16px"
                  fontWeight="400"
                  color="#626262"
                >
                  {day}
                </Text>
                <VStack spacing="8px" mt="4px">
                  {Array.from({ length: 2 }).map((_, index) => (
                    <NotificationContainer key={index} time="2:50pm">
                      <Text
                        fontFamily="Poppins"
                        fontSize="16px"
                        fontWeight="500"
                        color="#000000"
                      >
                        You have a new contribution
                      </Text>
                      <Text
                        fontFamily={"var(--poppins)"}
                        fontWeight={"400"}
                        fontSize={"14px"}
                        color="#706E6E"
                      >
                        Kindly proceed to make payments
                      </Text>
                    </NotificationContainer>
                  ))}
                </VStack>
              </Box>
            ))}
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
