import React, {useState} from "react";
import {Box, Flex, Image, Text} from "@chakra-ui/react";
import { UserCheck} from "lucide-react";
import PersonalInfoCard from "@containers/app/settings/personalInfo/PersonalInfoCard";

export default function PersonalInfo(){
  const [isActive, setIsActive] = useState(false);

  return (
    <Box width="100%" px={{ base: "1rem", lg: "1rem" }} py="0.5rem">


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
            src="/img/personnal-edit.svg"
            alt="personnal-edit"
            height="32px"
            width="32px"
            mb={'10px'}
          />
          <Text fontSize="20px" fontWeight="bold" mb={2}>Personal Info</Text>
          <Text fontSize="14px" color="gray.600">
            Provide personal details for full verification
          </Text>
        </Box>

        <Box flex="1">
          {isActive && <PersonalInfoCard />}
        </Box>
      </Flex>
    </Box>
  )
}
