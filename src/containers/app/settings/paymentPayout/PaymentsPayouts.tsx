// import { Box, Text, Flex } from "@chakra-ui/react";
// import {useState} from "react";
// import PersonalInfoCard from "@containers/app/settings/personalInfo/PersonalInfoCard";
// import {Money} from "@phosphor-icons/react";
//
//
//
// const PaymentsPayouts = () => {
//   const [isActive, setIsActive] = useState(false);
//
//   return (
//     <Box width="100%" px={{ base: "1rem", lg: "1rem" }}>
//
//       <Flex gap={6} alignItems="flex-start">
//         <Box
//           flex="1"
//           border="1px solid #dceefb"
//           borderRadius="8px"
//           p={6}
//           cursor="pointer"
//           bg={isActive ? "#F0FAFC" : "transparent"}
//           onClick={() => setIsActive(!isActive)}
//         >
//           <Money/>
//           <Text fontSize="20px" fontWeight="bold" mb={2}>Payments & Payouts</Text>
//           <Text fontSize="14px" color="gray.600">
//             Review payments, payouts, coupons, and gift cards
//           </Text>
//         </Box>
//
//         <Box flex="1">
//           {isActive && <PersonalInfoCard />}
//         </Box>
//       </Flex>
//     </Box>
//   );
// };
//
// export default PaymentsPayouts;

import {Box, Text, Flex, Image} from "@chakra-ui/react";
import React, { useState } from "react";
import { Money } from "@phosphor-icons/react";
import PaymentsPayoutsCard
  from "@containers/app/settings/paymentPayout/PaymentsPayoutsCard";

const PaymentsPayouts = () => {
  const [isActive, setIsActive] = useState(false);

  // Provide Default Payment Data to Avoid Undefined Error
  const defaultPaymentData = {
    accountName: "Akinlolu Daniel",
    accountNumber: "0233850785",
    bankName: "GT Bank",
  };

  return (
    <Box width="100%" px={{ base: "1rem", lg: "1rem" }}>
      <Flex gap={6} alignItems="flex-start">
        {/* Clickable Box */}
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
            src="/img/payout.svg"
            alt="payout"
            height="32px"
            width="32px"
            mb={'10px'}
          />

          <Text fontSize="20px" fontWeight="bold" mb={2}>
            Payments & Payouts
          </Text>
          <Text fontSize="14px" color="gray.600">
            Review payments, payouts, coupons, and gift cards
          </Text>
        </Box>

        {/* Display PaymentsPayoutsCard Only When Active */}
        <Box flex="1">
          {isActive && <PaymentsPayoutsCard />}
        </Box>
      </Flex>
    </Box>
  );
};

export default PaymentsPayouts;

