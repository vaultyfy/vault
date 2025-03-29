"use client"

import React, {useState} from "react"
import {ChevronDown} from "lucide-react"
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white",
        color: "black",
        fontFamily: "Arial, sans-serif",
      },
    },
  },
})

interface Notification {
  id: string
  message: string
  actionText: string
  time: string
  isOlderSection?: boolean
  daysAgo?: number
  category?: string
}

export default function NotificationPage() {
  const [filter, setFilter] = useState("All contribution")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const filterOptions = ["All contribution", "Payment reminders", "Account updates", "System notifications"]

  const notifications: Notification[] = [
    {
      id: "1",
      message: "Your payment date for Unity servers will be due in 3 days",
      actionText: "Kindly proceed to make payments",
      time: "2:34pm",
      isOlderSection: false,
      category: "Payment reminders",
    },
    {
      id: "2",
      message: "You have missed a payment date for Unity servers, avoid getting account suspended",
      actionText: "Kindly proceed to make payment",
      time: "2:34pm",
      isOlderSection: false,
      category: "Payment reminders",
    },
    {
      id: "3",
      isOlderSection: true,
      daysAgo: 5,
      message: "Your payment date for Unity servers will be due in 3 days",
      actionText: "Kindly proceed to make payments",
      time: "2:34pm",
      category: "Payment reminders",
    },
    {
      id: "4",
      message: "Your payment date for Unity servers will be due in 3 days",
      actionText: "Kindly proceed to make payments",
      time: "2:34pm",
      isOlderSection: false,
      category: "Payment reminders",
    },
  ]

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const selectFilter = (option: string) => {
    setFilter(option)
    setIsDropdownOpen(false)
  }

  // Filter notifications based on selected filter
  const filteredNotifications =
    filter === "All contribution"
      ? notifications
      : notifications.filter((notification) => notification.category === filter)

  return (
    <ChakraProvider theme={theme}>
      <Flex flexDirection="column" h="100vh" bg="white" maxW="md" mx="auto"
            overflowX="hidden" position="relative">

        <Flex alignItems="center" justifyContent="space-between" px={4} gap={4}>
          <Text fontSize="28px" fontWeight={500}>
            Notification
          </Text>
          <Box position="relative">
            <Button
              onClick={toggleDropdown}
              display="flex"
              alignItems="center"
              fontSize="sm"
              color="#04040499"
              bg="#F6F6F6"
              borderRadius="full"
              px={4}
              py={1.5}
              h='39px'
            >
              {filter}
              <Box
                as={ChevronDown}
                w={4}
                h={4}
                ml={1}
                transition="transform 0.2s"
                transform={isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)"}
              />
            </Button>

            {isDropdownOpen && (
              <Box
                position="absolute"
                right={0}
                mt={1}
                w="48"
                bg="white"
                borderRadius="md"
                boxShadow="lg"
                zIndex={10}
                border="1px"
                borderColor="gray.100"
              >
                <Box py={1}>
                  {filterOptions.map((option) => (
                    <Button
                      key={option}
                      onClick={() => selectFilter(option)}
                      display="block"
                      w="full"
                      textAlign="left"
                      px={4}
                      py={2}
                      fontSize="sm"
                      bg={filter === option ? "gray.100" : "transparent"}
                      fontWeight={filter === option ? "medium" : "normal"}
                      _hover={{bg: "gray.50"}}
                      h="auto"
                      minH="unset"
                      variant="ghost"
                    >
                      {option}
                    </Button>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        </Flex>

        <Box px={4} py={2}>
          <Box py={2} mb={2}>
            <Text fontSize="12px" fontWeight={500} color="#626262">
              Today
            </Text>
          </Box>

          {filteredNotifications.length === 0 ? (
            <Flex alignItems="center" justifyContent="center" h="40">
              <Text color="gray.500">No notifications found</Text>
            </Flex>
          ) : (
            <VStack spacing={4} align="stretch">
              {filteredNotifications.map((notification, index) => {
                // Check if we need to show a section header
                const showSectionHeader = notification.isOlderSection && notification.daysAgo

                // Check if this is the first notification or if the previous one doesn't have the same section
                const isPreviousDifferentSection =
                  index > 0 && filteredNotifications[index - 1].isOlderSection !== notification.isOlderSection

                return (
                  <React.Fragment key={notification.id}>
                    {showSectionHeader && (isPreviousDifferentSection || index === 0) && (
                      <Box>
                        <Text fontSize="12px" fontWeight={500} color="#626262">
                          {notification.daysAgo} days ago
                        </Text>
                      </Box>
                    )}
                    <Box width="100%" maxW="100%" height="auto"
                         borderRadius="8px" border="0.5px solid #EAEAEA" p={4}
                         position="relative" bg="white">
                      <Text fontSize="14px" fontWeight={400} mb={2}>
                        {notification.message.includes("Unity servers") ? (
                          <>
                            {notification.message.split("Unity servers")[0]}
                            <Text as="span" textDecoration="underline"
                                  fontWeight="bold">
                              Unity servers
                            </Text>
                            {notification.message.split("Unity servers")[1]}
                          </>
                        ) : (
                          notification.message
                        )}
                      </Text>
                      <Text fontSize="14px" fontWeight={400} color="#706E6E"
                            mb={2}>
                        {notification.actionText}
                      </Text>
                      <Text fontSize="12px" fontWeight={600} color="#B4B4B4"
                            display="block" textAlign="right">
                        {notification.time}
                      </Text>
                    </Box>
                  </React.Fragment>
                )
              })}
            </VStack>
          )}
        </Box>
      </Flex>
    </ChakraProvider>
  )
}

