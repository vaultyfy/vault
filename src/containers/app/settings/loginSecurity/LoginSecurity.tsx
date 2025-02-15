import React, {useState} from "react";
import {Box, Flex, Image, Text} from "@chakra-ui/react";
import LoginSecurityCard
  from "@containers/app/settings/loginSecurity/LoginSecurityCard";

export default function LoginSecurity(){
  const [isActive, setIsActive] = useState(false);

  return (
    <Box width="100%" px={{ base: "1rem", lg: "1rem" }} py="0.5rem">


      <Flex gap={6} alignItems="flex-start">
        <Flex width={'529px'}>
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
            src="/img/login-security.svg"
            alt="login-security"
            height="32px"
            width="32px"
            mb={'10px'}
          />
          <Text fontSize="20px" fontWeight="bold" mb={2}>Login & security</Text>
          <Text fontSize="14px" color="gray.600">
            Update your password and secure your account
          </Text>
        </Box>
        </Flex>

        <Box flex="1">
          {isActive && <LoginSecurityCard />}
        </Box>
      </Flex>
    </Box>
  )
}
