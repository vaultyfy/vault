import React from "react";
import {Box, Flex, Text,Image} from "@chakra-ui/react";

interface PersonalInfoProps {onClick:(str:string)=>void, isActive:boolean}

export default function PersonalInfo({onClick,isActive}:PersonalInfoProps){

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
          onClick={()=>{onClick("Personal info")}}
        >
          <Image
            src="/img/personnal-edit.svg"
            alt="personnal-edit"
            height="32px"
            width="32px"
            mb={'10px'}
          />
          <Text fontSize="18px" fontWeight="500" color={'#222222'} mb={2}>Personal Info</Text>
          <Text fontSize="14px" fontWeight={400}  color="#717171">
            Provide personal details for full verification
          </Text>
        </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
