import {Box, Text, Flex, Image} from "@chakra-ui/react";
import React from "react";


interface PaymentsPayoutsProps {onClick:(str:string)=>void, isActive:boolean}


const PaymentsPayouts = ({onClick,isActive}:PaymentsPayoutsProps) => {


  return (
    <Box width="100%" px={{ base: "1rem", lg: "1rem" }}>
      <Flex gap={6} alignItems="flex-start">
        <Flex width={'529px'}>
        <Box
          flex="1"
          border="1px solid #dceefb"
          borderRadius="8px"
          p={6}
          cursor="pointer"
          bg={isActive ? "#F0FAFC" : "transparent"}
          onClick={()=>{onClick("Payments Payout")}}
        >
          <Image
            src="/img/payout.svg"
            alt="payout"
            height="32px"
            width="32px"
            mb={'10px'}
          />

          <Text fontSize="18px" fontWeight="500" color={'#222222'} mb={2}>
            Payments & Payouts
          </Text>
          <Text fontSize="14px" fontWeight={400}  color="#717171">
            Review payments, payouts, coupons, and gift cards
          </Text>
        </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PaymentsPayouts;

