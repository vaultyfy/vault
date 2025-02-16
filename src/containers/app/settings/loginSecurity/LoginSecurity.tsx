import React from "react";
import {Box, Flex, Image, Text} from "@chakra-ui/react";


interface LoginSecurityProps {onClick:(str:string)=>void, isActive:boolean}

export default function LoginSecurity({onClick,isActive}:LoginSecurityProps){

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
          onClick={()=>{onClick("Login Security")}}
        >
          <Image
            src="/img/login-security.svg"
            alt="login-security"
            height="32px"
            width="32px"
            mb={'10px'}
          />
          <Text fontSize="18px" fontWeight="500" color={'#222222'} mb={2}>Login & security</Text>
          <Text fontSize="14px" fontWeight={400}  color="#717171">
            Update your password and secure your account
          </Text>
        </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
