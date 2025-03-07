import { Box, Text, Divider, Link, Flex, Image, Badge } from "@chakra-ui/react";

interface UserDetail {
  label: string;
  value?: string;
  status?: string;
  success?: boolean;
  svgPath?: string;
  editable?: boolean;
}

const userDetails: UserDetail[] = [
  {
    label: "Government issued ID",
    value: "National ID or Int passport",
    svgPath: "/img/identification-card.svg",
  },
  {
    label: "Face verification",
    status: "Successful",
    success: true,
    svgPath: "/img/verification.svg",
  },
  { label: "Email", value: "akinlolu@gmail.com", editable: true },
  { label: "Full name", value: "Akinlolu Daniel", editable: true },
  { label: "Phone number", value: "0902300000", editable: true },
  { label: "BVN", value: "1293020392920", editable: true },
  { label: "Address", value: "Salamuu street", editable: true },
  {
    label:
      "Address verification (upload ID card, utility bills containing your house address)",
    status: "Successful",
    success: true,
    svgPath: "/img/address-verification.svg",
  },
];

export const PersonalInfo = () => {
  return (
    <Box>
      <Text fontSize="24px" fontWeight="400" mb={4} color="var(--dark)">
        Personal Info
      </Text>

      <Box
        border="0.5px solid var(--border-muted)"
        borderRadius="6px"
        px={{ lg: "1em", base: ".4em", md: ".6em" }}
        width="100%"
      >
        {userDetails.map((item, index) => (
          <Box key={index}>
            <Flex
              px={3}
              py="1.4em"
              justify="space-between"
              align="center"
              borderRadius="6px"
              transition="all .3s ease-out"
              _hover={{ bg: "var(--grey-100)", cursor: "pointer" }}
            >
              <Flex align="center">
                <Box>
                  <Text fontSize="14px" fontWeight="400" color="var(--grey)">
                    {item.label}
                  </Text>

                  {item.value && (
                    <Text fontSize="14px" fontWeight="500" color="var(--gray)">
                      {item.value}
                    </Text>
                  )}

                  {item.status && (
                    <Badge
                      fontSize="14px"
                      fontWeight="400"
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
                      textTransform="capitalize"
                      mt=".6em"
                    >
                      {item.status}
                    </Badge>
                  )}
                </Box>
              </Flex>
              {item.svgPath && (
                <Image src={item.svgPath} alt={item.label} boxSize="24px" />
              )}

              {item.editable && (
                <Link fontSize="14px" color="#1CCFBD">
                  Edit
                </Link>
              )}
            </Flex>

            {index !== userDetails.length - 1 && <Divider />}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
