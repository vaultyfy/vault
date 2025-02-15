// import { Box, Text, Divider, Icon, Link, Flex } from "@chakra-ui/react";
// import { ShieldCheck, CheckCircle } from "lucide-react";
// import React from "react";
//
// interface UserDetail {
//   label: string;
//   value?: string;
//   status?: string;
//   success?: boolean;
//   editable?: boolean;
//   icon?: string;
// }
//
// const PersonalInfoCard: React.FC = () => {
//   const userDetails: UserDetail[] = [
//     { label: "Government issued ID", value: "National ID or Int passport", icon: ShieldCheck },
//     { label: "Face verification", status: "Successful", success: true, icon: ShieldCheck },
//     { label: "Email", value: "akinlolu@gmail.com", editable: true },
//     { label: "Full name", value: "Akinlolu Daniel", editable: true },
//     { label: "Phone number", value: "0902300000", editable: true },
//     { label: "BVN", value: "1293020392920", editable: true },
//     { label: "Address", value: "GT Bank", editable: true },
//     {
//       label: "Address verification (upload ID card, utility bills containing your house address)",
//       status: "Successful",
//       success: true,
//       icon: CheckCircle,
//     },
//   ];
//
//   return (
//     <Box>
//       <Text fontSize="24px" fontWeight="400" mb={4} color={"#1C1C1C"}>
//         Personal Info
//       </Text>
//
//       <Box border="0.5px solid #8181816B" borderRadius="6px" p={6} width="100%">
//         {userDetails.map((item, index) => (
//           <Box key={index}>
//             <Flex justify="space-between" align="center" py={3} _hover={{ bg: "#F6F6F6" }} px={3} borderRadius="6px">
//               <Box>
//                 <Text fontSize="14px" fontWeight="400" color="#818181">
//                   {item.label}
//                 </Text>
//
//                 {item.value && (
//                   <Text fontSize="14px" fontWeight="500" color="#1C1C1C">
//                     {item.value}
//                   </Text>
//                 )}
//
//                 {item.status && (
//                   <Text
//                     fontSize="14px"
//                     fontWeight="500"
//                     color="#13AD60"
//                     borderRadius="19px"
//                     display="inline-flex"
//                     alignItems="center"
//                     justifyContent="center"
//                     bg="#2CF08E21"
//                     px={4}
//                     minW="91px"
//                     height="26px"
//                     lineHeight="26px"
//                     textAlign="center"
//                   >
//                     {item.status}
//                   </Text>
//                 )}
//               </Box>
//
//               {item.editable && <Link fontSize="14px" color="#1CCFBD">Edit</Link>}
//
//               {item.icon && <Icon as={item.icon} color={item.success ? "#13AD60" : "gray.400"} boxSize={5} />}
//             </Flex>
//
//             {index !== userDetails.length - 1 && <Divider />}
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };
//
// export default PersonalInfoCard;

import { Box, Text, Divider, Link, Flex, Image } from "@chakra-ui/react";

interface UserDetail {
  label: string;
  value?: string;
  status?: string;
  success?: boolean;
  svgPath?: string;
  editable?: boolean;
}

const PersonalInfoCard: React.FC = () => {
  const userDetails: UserDetail[] = [
    { label: "Government issued ID", value: "National ID or Int passport", svgPath: "/img/identification-card.svg" },
    { label: "Face verification", status: "Successful", success: true, svgPath: "/img/verification.svg" },
    { label: "Email", value: "akinlolu@gmail.com", editable: true },
    { label: "Full name", value: "Akinlolu Daniel", editable: true },
    { label: "Phone number", value: "0902300000", editable: true },
    { label: "BVN", value: "1293020392920", editable: true },
    { label: "Address", value: "GT Bank", editable: true },
    {
      label: "Address verification (upload ID card, utility bills containing your house address)",
      status: "Successful",
      success: true,
      svgPath: "/img/address-verification.svg"
    },
  ];

  return (
      <Box>
        <Text fontSize="24px" fontWeight="400" mb={4} color={"#1C1C1C"}>
          Personal Info
        </Text>

        <Box border="0.5px solid #8181816B" borderRadius="6px" p={6} width="100%">
          {userDetails.map((item, index) => (
              <Box key={index}>
                <Flex justify="space-between" align="center" py={3} _hover={{ bg: "#F6F6F6" }} px={3} borderRadius="6px">
                  <Flex align="center">
                    <Box>
                      <Text fontSize="14px" fontWeight="400" color="#818181">
                        {item.label}
                      </Text>

                      {item.value && (
                          <Text fontSize="14px" fontWeight="500" color="#1C1C1C">
                            {item.value}
                          </Text>
                      )}


                      {item.status && (
                          <Text
                              fontSize="14px"
                              fontWeight="500"
                              color="#13AD60"
                              borderRadius="19px"
                              display="inline-flex"
                              alignItems="center"
                              justifyContent="center"
                              bg="#2CF08E21"
                              px={4}
                              minW="91px"
                              height="26px"
                              lineHeight="26px"
                              textAlign="center"
                          >
                            {item.status}
                          </Text>
                      )}
                    </Box>
                  </Flex>
                  {item.svgPath && (
                      <Image
                          src={item.svgPath}
                          alt={item.label}
                          boxSize="24px"
                      />
                  )}

                  {item.editable && <Link fontSize="14px" color="#1CCFBD">Edit</Link>}
                </Flex>

                {index !== userDetails.length - 1 && <Divider />}
              </Box>
          ))}
        </Box>
      </Box>
  );
};

export default PersonalInfoCard;
