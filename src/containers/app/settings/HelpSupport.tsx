import {Box, Flex, Image, Text} from "@chakra-ui/react";
import React, {useState} from "react";

export default function HelpSupport(){
  const [isActive, setIsActive] = useState(false);

  return(
    <Box width="53%" px={{ base: "1rem", lg: "1rem" }} py="0.5rem">
      <Flex gap={6} alignItems="flex-start">
        <Box
          flex="1"
          border="1px solid #dceefb"
          borderRadius="8px"
          p={6}
          cursor="pointer"
          bg={isActive ? "#F0FAFC" : "transparent"}
          onClick={() => setIsActive(!isActive)}
        >
          <Image
            src="/img/support.svg"
            alt="support"
            height="32px"
            width="32px"
            mb={'10px'}
          />
          <Text fontSize="20px" fontWeight="bold" mb={2}>Help & Support</Text>
          <Text fontSize="14px" color="gray.600">
            Contact our support and learn more about our terms of services
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}
