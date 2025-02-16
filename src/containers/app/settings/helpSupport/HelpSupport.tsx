import {Box, Flex, Image, Text} from "@chakra-ui/react";
import React, {useState} from "react";
import {useNavigate, useRouter} from "@tanstack/react-router";

export default function HelpSupport(){
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsActive(!isActive);
    navigate({ to: "/settings/help-support" });
  };

  return(
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
          onClick={handleClick}
        >
          <Image
            src="/img/support.svg"
            alt="support"
            height="32px"
            width="32px"
            mb={'10px'}
          />
          <Text fontSize="18px" fontWeight="500" color={'#222222'} mb={2}>Help & Support</Text>
          <Text fontSize="14px" fontWeight={400}  color="#717171">
            Contact our support and learn more about our terms of services
          </Text>
        </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
